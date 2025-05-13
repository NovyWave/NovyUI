// Checks documentation instructions for pages only.
import { join, basename, resolve } from "jsr:@std/path";

const ROOT = resolve(".");
const PAGES_DIR = join(ROOT, "pages");
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
    return `Page file '${fileName}.md' does not use CamelCase.`;
  }
  const content = await Deno.readTextFile(filePath);
  const idMatch = content.match(/\*\*Id:\*\*\s*([A-Za-z0-9]+)/);
  if (!idMatch || idMatch[1] !== fileName) {
    return `Page file '${fileName}.md' has mismatched or missing **Id:** (expected '${fileName}').`;
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

function checkUsedBlocksExist(content: string, blocksList: Set<string>): string[] {
  // Parse the Used Blocks section and check that all referenced blocks exist
  const errors: string[] = [];
  const usedBlocksSection = content.split(/\*\*Used Blocks?:\*\*/i)[1] || "";
  const matches = [...usedBlocksSection.matchAll(/\[([\w-]+)\]\(\.\.\/blocks\/([\w-]+)\.md\)/g)];
  for (const m of matches) {
    const blockId = m[2];
    if (!blocksList.has(blockId)) {
      errors.push(`Referenced block '${blockId}' does not exist or is not listed in blocks.md.`);
    }
  }
  return errors;
}

function checkPageListedInTOC(fileName: string, tocContent: string): boolean {
  // Check if the page file is listed in pages.md
  const regex = new RegExp(`\\(${fileName}\\.md\\)`, 'i');
  return regex.test(tocContent);
}

async function lintPages(): Promise<void> {
  const errorMap: Record<string, string[]> = {};
  // Load blocks list and pages TOC for cross-reference
  const blocksToc = await Deno.readTextFile(join(ROOT, "blocks.md"));
  const blocksList = new Set(
    [...blocksToc.matchAll(/\((blocks\/([\w-]+)\.md)\)/g)].map(m => m[2])
  );
  const pagesToc = await Deno.readTextFile(join(ROOT, "pages.md"));
  for (const file of await getMarkdownFiles(PAGES_DIR)) {
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
      errorMap[file].push(`Page '${name}' missing required Token Usage table.`);
    }
    // State/Variant Documentation
    if (!hasStateVariantDocumentation(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${name}' missing explicit state/variant documentation.`);
    }
    // Accessibility Section
    if (!/### Accessibility/i.test(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${name}' missing required ### Accessibility section.`);
    } else {
      const accErrors = checkAccessibilityDetails(content);
      if (accErrors.length) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(...accErrors.map(e => `Page '${name}': ${e}`));
      }
    }
    // Hardcoded values
    const hardcodedErrors = findHardcodedValues(content);
    if (hardcodedErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...hardcodedErrors.map(e => `Page '${name}': ${e}`));
    }
    // Used Blocks cross-reference
    const usedBlocksErrors = checkUsedBlocksExist(content, blocksList);
    if (usedBlocksErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...usedBlocksErrors);
    }
    // TOC listing
    const fileNameNoExt = name.replace(/\.md$/, "");
    if (!checkPageListedInTOC(fileNameNoExt, pagesToc)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${name}' is not listed in pages.md TOC.`);
    }
    // Template sections
    if (!checkSection(content, "Appearance")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${name}' missing **Appearance:** section.`);
    }
    if (!checkSection(content, "Behavior")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${name}' missing **Behavior:** section.`);
    }
    if (!checkSection(content, "Blocks")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${name}' missing **Blocks:** section.`);
    }
    if (!checkVariants(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${name}' missing ### Variants section.`);
    }
  }
  const errorFiles = Object.keys(errorMap);
  if (errorFiles.length) {
    console.error("Page documentation structure errors found:");
    for (const file of errorFiles) {
      for (const err of errorMap[file]) {
        console.error(err);
      }
    }
    Deno.exit(1);
  } else {
    console.log("✅ All page documentation files follow the instructions.");
  }
}

if (import.meta.main) {
  await lintPages();
}
