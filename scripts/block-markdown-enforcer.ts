// Checks documentation instructions for blocks only.
// BUG: Running the enforcer without the -id parameter returns many errors that do not appear when using -id for individual blocks. The script should use the same rules and logic for both modes, so that batch and single-block checks are consistent. Please refactor the script to ensure that running without -id (all blocks) produces the same results as running with -id for each block individually.
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
  // For blocks, check for **Id:**, **Appearance:**, **Behavior:**, **Components:**, **Used in pages:**
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

function checkUsedPagesExist(content: string, pagesDir: string): { errors: string[], locations: Array<{pageId: string, line: number, col: number}> } {
  // Parse the Used in Pages section and check that all referenced pages exist as files in the pages/ directory
  const errors: string[] = [];
  const locations: Array<{pageId: string, line: number, col: number}> = [];
  const usedPagesSection = content.split(/\*\*Used in Pages?:\*\*/i)[1] || "";
  const matches = [...usedPagesSection.matchAll(/\[([\w-]+)\]\(\.\.\/pages\/([\w-]+)\.md\)/g)];
  const lines = content.split(/\r?\n/);
  for (const m of matches) {
    const pageId = m[2];
    let found = false;
    try {
      // Check if the file exists in the pages directory
      Deno.statSync(`${pagesDir}/${pageId}.md`);
      found = true;
    } catch (_) {
      found = false;
    }
    if (!found) {
      // Find the line/col of the reference
      let lineNum = 0, colNum = 0;
      for (let i = 0; i < lines.length; ++i) {
        const idx = lines[i].indexOf(`../pages/${pageId}.md`);
        if (idx !== -1) {
          lineNum = i + 1;
          colNum = idx + 1;
          break;
        }
      }
      errors.push(`${pageId}`);
      locations.push({ pageId, line: lineNum, col: colNum });
    }
  }
  return { errors, locations };
}

function checkBlockListedInTOC(fileName: string, tocContent: string): boolean {
  // TEMP: Relaxed check for debugging - match any line containing the correct file link
  return tocContent.includes(`(blocks/${fileName}.md)`);
}

// Canonical section order and requirements (from blocks.md)
const SECTION_ORDER = [
  'Header',
  'Token Usage',
  'Variants',
  'States',
  'Accessibility'
];
const SECTION_REGEXES = [
  /^##\s+.+/m, // Header
  /^### Token Usage/m,
  /^### Variants/m,
  /^### States/m,
  /^### Accessibility/m
];
const INTRO_SENTENCES = [
  null, // Header
  /^The following table lists all design tokens used by the .+ block:$/m,
  /^All supported .+ variants are listed below:$/m,
  /^.+ states and their token usage:$/m,
  null // Accessibility
];
const TABLE_HEADERS = [
  null, // Header
  /\|\s*Part\s*\|\s*Token Example\s*\|\s*Description\s*\|/i,
  /\|\s*Variant Name\s*\|\s*Description\s*\|\s*Appearance\/Behavior\s*\|\s*Tokens Used\s*\|\s*Notes\s*\|/i,
  /\|\s*State\s*\|\s*Description\s*\|\s*Token\(s\) affected\s*\|/i,
  null // Accessibility
];

// (TODO: Integrate these constants into the main block linting logic for strict enforcement, similar to the component enforcer.)

function parseSectionsWithLines(content: string) {
  // Returns array of {title, start, end, body, lineStart, lineEnd}
  const matches = [];
  let lastTitle = null;
  let lastStart = 0;
  let lastLine = 0;
  const lines = content.split(/\n/);
  for (let i = 0; i < lines.length; ++i) {
    for (let j = 0; j < SECTION_REGEXES.length; ++j) {
      if (SECTION_REGEXES[j].test(lines[i])) {
        if (lastTitle !== null) {
          matches.push({title: SECTION_ORDER[j-1], start: lastStart, end: i, body: lines.slice(lastStart, i).join('\n'), lineStart: lastLine, lineEnd: i});
        }
        lastTitle = SECTION_ORDER[j];
        lastStart = i;
        lastLine = i;
      }
    }
  }
  if (lastTitle !== null) {
    matches.push({title: lastTitle, start: lastStart, end: lines.length, body: lines.slice(lastStart).join('\n'), lineStart: lastLine, lineEnd: lines.length});
  }
  return matches;
}

function highlightDifference(expected: string, actual: string): string {
  // Simple diff: show both strings with a marker at the first difference
  let i = 0;
  while (i < expected.length && i < actual.length && expected[i] === actual[i]) i++;
  const marker = '\n' + ' '.repeat(i) + '↑';
  return `Expected: "${expected}"
Actual:   "${actual}"${marker}`;
}

function checkSectionOrderAndFormat(content: string, blockName: string): string[] {
  const errors: string[] = [];
  const sections = parseSectionsWithLines(content);
  // Check section count and order
  if (sections.length !== SECTION_ORDER.length) {
    errors.push(`Section count/order mismatch. Expected: ${SECTION_ORDER.join(', ')}`);
    return errors;
  }
  for (let i = 0; i < SECTION_ORDER.length; ++i) {
    if (sections[i].title !== SECTION_ORDER[i]) {
      errors.push(`Section ${i+1} should be '${SECTION_ORDER[i]}', found '${sections[i].title}'.`);
    }
    // Check intro sentence if required
    if (INTRO_SENTENCES[i]) {
      const introLines = sections[i].body.split('\n');
      // Skip the heading line (first line of the section)
      let introLineIdx = 1;
      while (introLineIdx < introLines.length && (introLines[introLineIdx].trim() === '' || introLines[introLineIdx].trim().startsWith('|'))) {
        introLineIdx++;
      }
      const intro = introLineIdx < introLines.length ? introLines[introLineIdx] : '';
      if (INTRO_SENTENCES[i] instanceof RegExp && intro) {
        const introReg = INTRO_SENTENCES[i] as RegExp;
        const expected = introReg.source.replace('.+', blockName).replace('^','').replace('$','');
        const actual = intro.trim();
        const introRegex = new RegExp('^' + expected + '$');
        if (!introRegex.test(actual)) {
          errors.push(`Section '${SECTION_ORDER[i]}' missing or incorrect intro sentence.\n${highlightDifference(expected, actual)}`);
        }
      } else if (INTRO_SENTENCES[i]) {
        errors.push(`Section '${SECTION_ORDER[i]}' missing or incorrect intro sentence.`);
      }
    }
    // Check table header if required
    if (TABLE_HEADERS[i]) {
      const tableLineIdx = sections[i].body.split('\n').findIndex(l => TABLE_HEADERS[i]!.test(l));
      if (tableLineIdx === -1) {
        errors.push(`Section '${SECTION_ORDER[i]}' missing or incorrect table header.\n  Expected: ${TABLE_HEADERS[i]}`);
      }
    }
    // Check for horizontal rule after section (except last)
    if (i < SECTION_ORDER.length - 1) {
      const after = sections[i].body.split('\n').slice(-3).join('\n');
      if (!/---/.test(after)) {
        errors.push(`Section '${SECTION_ORDER[i]}' missing horizontal rule (---) after section.`);
      }
    }
  }
  // Accessibility section must be a bullet list
  const accSectionLines = sections[sections.length-1].body.split('\n');
  let accSectionBody = accSectionLines.slice(1).join('\n'); // skip heading
  accSectionBody = accSectionBody.replace(/\r\n/g, '\n').replace(/\r/g, '\n'); // normalize line endings
  if (!/^Accessibility features and requirements for .+:\n(- .+\n)+/m.test(accSectionBody)) {
    errors.push(`Accessibility section must start with 'Accessibility features and requirements for [Block]:' and be a bullet list.\n---\nActual section:\n${JSON.stringify(accSectionBody)}`);
  }
  return errors;
}

// Shared linting logic for one or more block files
async function lintBlockFiles(files: string[], blocksToc: string): Promise<void> {
  const errorMap: Record<string, string[]> = {};
  for (const file of files) {
    const content = await Deno.readTextFile(file);
    const blockName = basename(file, ".md");
    // Strict section order/format enforcement
    const sectionErrors = checkSectionOrderAndFormat(content, blockName);
    if (sectionErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...sectionErrors);
    }
    // Filename and Id
    const idError = await checkIdAndFilename(file);
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(idError);
    }
    // Token Usage Table
    if (!hasTokenUsageTable(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' missing required Token Usage table.`);
    }
    // State/Variant Documentation
    if (!hasStateVariantDocumentation(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' missing explicit state/variant documentation.`);
    }
    // Accessibility Section
    if (!/### Accessibility/i.test(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' missing required ### Accessibility section.`);
    } else {
      const accErrors = checkAccessibilityDetails(content);
      if (accErrors.length) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(...accErrors.map(e => `Block '${blockName}': ${e}`));
      }
    }
    // Hardcoded values
    const hardcodedErrors = findHardcodedValues(content);
    if (hardcodedErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...hardcodedErrors.map(e => `Block '${blockName}': ${e}`));
    }
    // Used in Pages cross-reference (always check)
    const { errors: usedPagesErrors, locations: usedPagesLocs } = checkUsedPagesExist(content, `${ROOT}/pages`);
    if (usedPagesErrors.length) {
      for (let i = 0; i < usedPagesErrors.length; ++i) {
        const loc = usedPagesLocs[i];
        errorMap[file] = errorMap[file] || [];
        errorMap[file].push(`${basename(file)}:${loc.line}:${loc.col} Referenced page '${loc.pageId}' does not exist in pages/`);
      }
    }
    // TOC listing
    const fileNameNoExt = blockName.replace(/\.md$/, "");
    if (!checkBlockListedInTOC(fileNameNoExt, blocksToc)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' is not listed in blocks.md TOC.`);
    }
    // Template sections (block header bullet list)
    if (!checkSection(content, "Id")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' missing **Id:** section.`);
    }
    if (!checkSection(content, "Appearance")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' missing **Appearance:** section.`);
    }
    if (!checkSection(content, "Behavior")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' missing **Behavior:** section.`);
    }
    if (!checkSection(content, "Components")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' missing **Components:** section.`);
    }
    if (!checkSection(content, "Used in pages")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' missing **Used in pages:** section.`);
    }
    if (!checkVariants(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${blockName}' missing ### Variants section.`);
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
  const idFlagIdx = Deno.args.indexOf('-id');
  // Always load blocks.md for both modes
  const blocksToc = await Deno.readTextFile(join(ROOT, "blocks.md"));
  if (idFlagIdx !== -1 && Deno.args.length > idFlagIdx + 1) {
    const blockId = Deno.args[idFlagIdx + 1];
    const file = join(BLOCKS_DIR, `${blockId}.md`);
    await lintBlockFiles([file], blocksToc);
  } else {
    const files = await getMarkdownFiles(BLOCKS_DIR);
    await lintBlockFiles(files, blocksToc);
  }
}
