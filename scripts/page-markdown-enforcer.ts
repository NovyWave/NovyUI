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
  // For pages, check for **Id:**, **Appearance:**, **Behavior:**, **Blocks:**, **Components:**
  const regex = new RegExp(`\\*\\*${section}:\\*\\*`, "i");
  return regex.test(content);
}

function checkVariants(content: string): boolean {
  return /### Variants/i.test(content);
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
  const lines = tocContent.split(/\r?\n/);
  for (const line of lines) {
    if (line.includes(fileName + '.md')) {
      const regex = new RegExp(String.raw`\[.*?\]\(\s*pages\/${fileName}\.md\s*\)`, 'i');
      const match = regex.exec(line.replace(/\r/g, ''));
      if (match) {
        return true;
      }
    }
  }
  return false;
}

// Canonical section order and requirements (from pages.md)
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
  /^The following table lists all design tokens used by the .+ page:$/m,
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

function parseSectionsWithLines(content: string) {
  // Accept both LF and CRLF line endings
  const lines = content.split(/\r?\n/);
  const matches = [];
  let lastTitle = null;
  let lastStart = 0;
  let lastLine = 0;
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

function checkSectionOrderAndFormat(content: string, pageName: string): string[] {
  const errors: string[] = [];
  const sections = parseSectionsWithLines(content);
  // Check section count and order
  if (sections.length !== SECTION_ORDER.length) {
    errors.push(`Section count/order mismatch. Expected: ${SECTION_ORDER.join(', ')}. Found: ${sections.map(s => s.title).join(', ')}.\nSection starts (line numbers): ${sections.map(s => `${s.title} (line ${s.lineStart + 1})`).join(', ')}`);
    return errors;
  }
  for (let i = 0; i < SECTION_ORDER.length; ++i) {
    if (sections[i].title !== SECTION_ORDER[i]) {
      errors.push(`Section ${i+1} should be '${SECTION_ORDER[i]}', found '${sections[i].title}' at line ${sections[i].lineStart + 1}.`);
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
        const introReg = INTRO_SENTENCES[i];
        if (introReg && typeof introReg.source === 'string') {
          const introRegex = new RegExp(introReg.source.replace('.+', pageName));
          if (!introRegex.test(intro)) {
            errors.push(`Section '${SECTION_ORDER[i]}' missing or incorrect intro sentence.\n  Found: '${intro}' (line ${sections[i].lineStart + introLineIdx + 1})\n  Expected: '${introRegex}'\n  Context: ${introLines.slice(Math.max(0, introLineIdx-2), introLineIdx+3).join(' | ')}\n  (Check for trailing spaces, line wrapping, or invisible characters.)`);
          }
        }
      } else if (INTRO_SENTENCES[i]) {
        errors.push(`Section '${SECTION_ORDER[i]}' missing or incorrect intro sentence.`);
      }
    }
    // Check table header if required
    if (TABLE_HEADERS[i]) {
      const tableLineIdx = sections[i].body.split('\n').findIndex(l => TABLE_HEADERS[i]!.test(l));
      if (tableLineIdx === -1) {
        errors.push(`Section '${SECTION_ORDER[i]}' missing or incorrect table header.\n  Expected: ${TABLE_HEADERS[i]}\n  Section starts at line ${sections[i].lineStart + 1}`);
      }
    }
    // Check for horizontal rule after section (except last)
    if (i < SECTION_ORDER.length - 1) {
      const after = sections[i].body.split('\n').slice(-3).join('\n');
      if (!/---/.test(after)) {
        errors.push(`Section '${SECTION_ORDER[i]}' missing horizontal rule (---) after section.\n  Section ends at line ${sections[i].lineEnd}`);
      }
    }
  }
  // Accessibility section must be a bullet list
  // Accept both LF and CRLF for bullet list regex, and allow optional blank line and heading line
  const accSection = sections[sections.length-1].body;
  // Remove heading line if present
  const accLines = accSection.split(/\r?\n/).filter(l => !l.trim().startsWith('###'));
  const accBody = accLines.join('\n');
  // Accept both with and without a blank line after the required phrase
  if (!/^Accessibility features and requirements for .+:\n(\s*)?- .+(\n- .+)*\n?$/m.test(accBody)) {
    errors.push(`Accessibility section must start with 'Accessibility features and requirements for [Page]:' and be a bullet list.\n  Section starts at line ${sections[sections.length-1].lineStart + 1}\n  Context: ${accBody.split(/\r?\n/).slice(0,5).join(' | ')}`);
  }
  return errors;
}

// Checks that the **Id:** field matches the filename in CamelCase
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

// Custom lint for a single file or multiple files
async function lintPagesCustom(files: string[]): Promise<void> {
  const errorMap: Record<string, string[]> = {};
  // Load blocks list and pages TOC for cross-reference
  const blocksToc = await Deno.readTextFile(join(ROOT, "blocks.md"));
  const blocksList = new Set(
    [...blocksToc.matchAll(/\((blocks\/([\w-]+)\.md)\)/g)].map(m => m[2])
  );
  const pagesToc = await Deno.readTextFile(join(ROOT, "pages.md"));
  for (const file of files) {
    const content = await Deno.readTextFile(file);
    const name = basename(file, ".md");
    // Strict section order/format enforcement
    const sectionErrors = checkSectionOrderAndFormat(content, name);
    if (sectionErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...sectionErrors);
    }
    const nameWithExt = basename(file);
    // Token Usage Table
    if (!hasTokenUsageTable(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' missing required Token Usage table.`);
    }
    // State/Variant Documentation
    if (!hasStateVariantDocumentation(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' missing explicit state/variant documentation.`);
    }
    // Accessibility Section
    if (!/### Accessibility/i.test(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' missing required ### Accessibility section.`);
    } else {
      const accErrors = checkAccessibilityDetails(content);
      if (accErrors.length) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(...accErrors.map(e => `Page '${nameWithExt}': ${e}`));
      }
    }
    // Hardcoded values
    const hardcodedErrors = findHardcodedValues(content);
    if (hardcodedErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...hardcodedErrors.map(e => `Page '${nameWithExt}': ${e}`));
    }
    // Used Blocks cross-reference
    const usedBlocksErrors = checkUsedBlocksExist(content, blocksList);
    if (usedBlocksErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...usedBlocksErrors);
    }
    // TOC listing
    const fileNameNoExt = nameWithExt.replace(/\.md$/, "");
    if (!checkPageListedInTOC(fileNameNoExt, pagesToc)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' is not listed in pages.md TOC.`);
    }
    // Template sections (page header bullet list)
    if (!checkSection(content, "Id")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' missing **Id:** section.`);
    }
    if (!checkSection(content, "Appearance")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' missing **Appearance:** section.`);
    }
    if (!checkSection(content, "Behavior")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' missing **Behavior:** section.`);
    }
    if (!checkSection(content, "Blocks")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' missing **Blocks:** section.`);
    }
    if (!checkSection(content, "Components")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' missing **Components:** section.`);
    }
    if (!checkVariants(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Page '${nameWithExt}' missing ### Variants section.`);
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
  const idFlagIdx = Deno.args.indexOf('-id');
  let files: string[];
  if (idFlagIdx !== -1 && Deno.args.length > idFlagIdx + 1) {
    const pageId = Deno.args[idFlagIdx + 1];
    files = [join(PAGES_DIR, `${pageId}.md`)];
  } else {
    files = await getMarkdownFiles(PAGES_DIR);
  }
  await lintPagesCustom(files);
}
