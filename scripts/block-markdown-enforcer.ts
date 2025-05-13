// Checks documentation instructions for blocks only.
import { join, basename, resolve } from "jsr:@std/path";

const ROOT = resolve(".");
const BLOCKS_DIR = join(ROOT, "blocks");
const CAMEL_CASE_REGEX = /^[A-Z][A-Za-z0-9]*$/;

async function getMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  for await (const entry of Deno.readDir(dir)) {
    if (entry.isFile && entry.name.endsWith(".md")) {
      files.push(join(dir, entry.name));
    }
  }
  return files;
}

function checkSection(content: string, section: string): boolean {
  const regex = new RegExp(`\\*\\*${section}:\\*\\*`, "i");
  return regex.test(content);
}

function checkVariants(content: string): boolean {
  return /### Variants/i.test(content);
}

async function checkIdAndFilename(filePath: string): Promise<string | null> {
  const fileName = basename(filePath, ".md");
  if (!CAMEL_CASE_REGEX.test(fileName)) {
    return `Block file '${fileName}.md' does not use CamelCase.`;
  }
  const content = await Deno.readTextFile(filePath);
  const idMatch = content.match(/\*\*Id:\*\*\s*([A-Za-z0-9]+)/);
  if (!idMatch || idMatch[1] !== fileName) {
    return `Block file '${fileName}.md' has mismatched or missing **Id:** (expected '${fileName}').`;
  }
  return null;
}

// Additional utility: check for a markdown table with required columns
function hasTokenUsageTable(content: string): boolean {
  // Look for a markdown table with headers: Part | Token Example | Description
  const tableHeader = /\|\s*Part\s*\|\s*Token Example\s*\|\s*Description\s*\|/i;
  return tableHeader.test(content);
}

function checkAccessibilityDetails(content: string): string[] {
  // Look for required keywords in the Accessibility section
  const errors: string[] = [];
  const accSection = content.split(/### Accessibility/i)[1] || "";
  if (!/keyboard/i.test(accSection)) errors.push("Accessibility section missing 'keyboard' navigation details.");
  if (!/aria/i.test(accSection)) errors.push("Accessibility section missing ARIA roles/attributes.");
  if (!/contrast/i.test(accSection)) errors.push("Accessibility section missing color contrast details.");
  if (!/focus/i.test(accSection)) errors.push("Accessibility section missing focus indicator details.");
  return errors;
}

function hasStateVariantDocumentation(content: string): boolean {
  // Look for explicit state/variant documentation (e.g., Default, Hover, Disabled, etc.)
  return /(?:(Default|Hover|Active|Disabled|Focus):)/i.test(content) || /### Variants/i.test(content);
}

function findHardcodedValues(content: string): string[] {
  // Look for hex colors, px values, and other hardcoded CSS values
  const errors: string[] = [];
  const hardcodedColor = /#[0-9a-fA-F]{3,8}/g;
  const hardcodedPx = /\b\d+px\b/g;
  if (hardcodedColor.test(content)) errors.push("Hardcoded hex color value found; use tokens instead.");
  if (hardcodedPx.test(content)) errors.push("Hardcoded pixel value found; use tokens instead.");
  return errors;
}

function checkUsedPagesExist(content: string, pagesList: Set<string>): string[] {
  // Parse the Used in Pages section and check that all referenced pages exist
  const errors: string[] = [];
  const usedPagesSection = content.split(/\*\*Used in Pages?:\*\*/i)[1] || "";
  const matches = [...usedPagesSection.matchAll(/\[([\w-]+)\]\(\.\.\/pages\/([\w-]+)\.md\)/g)];
  for (const m of matches) {
    const pageId = m[2];
    if (!pagesList.has(pageId)) {
      errors.push(`Referenced page '${pageId}' does not exist or is not listed in pages.md.`);
    }
  }
  return errors;
}

function checkBlockListedInTOC(fileName: string, tocContent: string): boolean {
  // Check if the block file is listed in blocks.md
  const regex = new RegExp(`\\(${fileName}\\.md\\)`, 'i');
  return regex.test(tocContent);
}

async function lintBlocks(): Promise<void> {
  const errorMap: Record<string, string[]> = {};
  // Load pages list and blocks TOC for cross-reference
  const pagesToc = await Deno.readTextFile(join(ROOT, "pages.md"));
  const pagesList = new Set(
    [...pagesToc.matchAll(/\((pages\/([\w-]+)\.md)\)/g)].map(m => m[2])
  );
  const blocksToc = await Deno.readTextFile(join(ROOT, "blocks.md"));
  for (const file of await getMarkdownFiles(BLOCKS_DIR)) {
    const content = await Deno.readTextFile(file);
    const name = basename(file);
    // Filename and Id
    const idError = await checkIdAndFilename(file);
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(idError);
    }
    // Token Usage Table
    if (!hasTokenUsageTable(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' missing required Token Usage table.`);
    }
    // State/Variant Documentation
    if (!hasStateVariantDocumentation(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' missing explicit state/variant documentation.`);
    }
    // Accessibility Section
    if (!/### Accessibility/i.test(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' missing required ### Accessibility section.`);
    } else {
      const accErrors = checkAccessibilityDetails(content);
      if (accErrors.length) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(...accErrors.map(e => `Block '${name}': ${e}`));
      }
    }
    // Hardcoded values
    const hardcodedErrors = findHardcodedValues(content);
    if (hardcodedErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...hardcodedErrors.map(e => `Block '${name}': ${e}`));
    }
    // Used in Pages cross-reference
    const usedPagesErrors = checkUsedPagesExist(content, pagesList);
    if (usedPagesErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...usedPagesErrors);
    }
    // TOC listing
    const fileNameNoExt = name.replace(/\.md$/, "");
    if (!checkBlockListedInTOC(fileNameNoExt, blocksToc)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' is not listed in blocks.md TOC.`);
    }
    // Template sections
    if (!checkSection(content, "Appearance")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' missing **Appearance:** section.`);
    }
    if (!checkSection(content, "Behavior")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' missing **Behavior:** section.`);
    }
    if (!checkSection(content, "Components")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' missing **Components:** section.`);
    }
    if (!checkSection(content, "Used in Pages")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' missing **Used in Pages:** section.`);
    }
    if (!checkVariants(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' missing ### Variants section.`);
    }
  }
  const errorFiles = Object.keys(errorMap);
  if (errorFiles.length) {
    console.error("Block documentation structure errors found:");
    for (const file of errorFiles) {
      for (const err of errorMap[file]) {
        console.error(err);
      }
    }
    Deno.exit(1);
  } else {
    console.log("✅ All block documentation files follow the instructions.");
  }
}

if (import.meta.main) {
  await lintBlocks();
}
