// Checks documentation instructions for components only.
import { join, basename, resolve } from "jsr:@std/path";

const ROOT = resolve(".");
const COMPONENTS_DIR = join(ROOT, "components");
const CAMEL_CASE_REGEX = /^[A-Z][A-Za-z0-9]*$/;

// Canonical section order and requirements (from components.md)
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
  /^The following table lists all design tokens used by the .+ component:$/m,
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

async function getMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  for await (const entry of Deno.readDir(dir)) {
    if (entry.isFile && entry.name.endsWith(".md")) {
      files.push(join(dir, entry.name));
    }
  }
  return files;
}

async function checkIdAndFilename(filePath: string): Promise<string | null> {
  const fileName = basename(filePath, ".md");
  if (!CAMEL_CASE_REGEX.test(fileName)) {
    return `Component file '${fileName}.md' does not use CamelCase.`;
  }
  const content = await Deno.readTextFile(filePath);
  const idMatch = content.match(/\*\*Id:\*\*\s*([A-Za-z0-9]+)/);
  if (!idMatch || idMatch[1] !== fileName) {
    return `Component file '${fileName}.md' has mismatched or missing **Id:** (expected '${fileName}').`;
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
  if (!/aria/i.test(accSection) && !/role="alert"|role="status"/i.test(accSection)) errors.push("Accessibility section missing ARIA roles/attributes.");
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
  // Parse the Used in Blocks section and check that all referenced blocks exist
  const errors: string[] = [];
  const usedBlocksSection = content.split(/\*\*Used in blocks?:\*\*/i)[1] || "";
  const matches = [...usedBlocksSection.matchAll(/\[([\w-]+)\]\(\.\.\/blocks\/([\w-]+)\.md\)/g)];
  for (const m of matches) {
    const blockId = m[2];
    if (!blocksList.has(blockId)) {
      errors.push(`Referenced block '${blockId}' does not exist or is not listed in blocks.md.`);
    }
  }
  return errors;
}

async function getComponentNameFromFile(filePath: string): Promise<string> {
  // Read the first non-empty line starting with '## ' to get the component name
  const content = await Deno.readTextFile(filePath);
  const match = content.match(/^##\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function stripLeadingEmojiAndWhitespace(str: string): string {
  // Remove leading emoji and whitespace from a string
  // Emoji regex: https://stackoverflow.com/a/41164587/2124254
  return str.replace(/^[^\w\s\[]+\s*/u, '').trim();
}

async function checkComponentListedInTOC(filePath: string, tocContent: string): Promise<boolean> {
  // Get the component name from the file (first ## header)
  const componentName = await getComponentNameFromFile(filePath);
  // Find all TOC lines with a markdown link to a .md file
  const tocLinks = [...tocContent.matchAll(/\- \[(.*?)\]\((components\/([A-Za-z0-9]+)\.md)\)/g)];
  for (const [, linkText] of tocLinks) {
    if (stripLeadingEmojiAndWhitespace(linkText) === componentName) {
      return true;
    }
  }
  return false;
}

// Error type for richer error reporting
interface LintError {
  type: string;
  message: string;
  line?: number;
  column?: number;
}

function shortPath(file: string): string {
  // Return path relative to project root
  const root = ROOT.endsWith("\\") || ROOT.endsWith("/") ? ROOT : ROOT + "\\";
  return file.startsWith(root) ? file.slice(root.length).replace(/\\/g, '/') : file.replace(/\\/g, '/');
}

function formatError(file: string, err: LintError): string {
  const short = shortPath(file);
  const loc = err.line !== undefined ? `${short}:${err.line + 1}${err.column !== undefined ? ':' + (err.column + 1) : ''}` : short;
  return `  [${err.type}] ${loc} ${err.message}`;
}

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
          matches.push({title: lastTitle, start: lastStart, end: i, body: lines.slice(lastStart, i).join('\n'), lineStart: lastLine, lineEnd: i});
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

function checkSectionOrderAndFormat(content: string, componentName: string): LintError[] {
  const errors: LintError[] = [];
  const sections = parseSectionsWithLines(content);
  // Check section count and order
  if (sections.length !== SECTION_ORDER.length) {
    errors.push({type: 'Section Order', message: `Section count/order mismatch. Expected: ${SECTION_ORDER.join(', ')}`});
    return errors;
  }
  for (let i = 0; i < SECTION_ORDER.length; ++i) {
    if (sections[i].title !== SECTION_ORDER[i]) {
      errors.push({type: 'Section Order', message: `Section ${i+1} should be '${SECTION_ORDER[i]}', found '${sections[i].title}'.`, line: sections[i].lineStart});
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
          const introRegex = new RegExp(introReg.source.replace('.+', componentName));
          if (!introRegex.test(intro)) {
            errors.push({type: 'Intro Sentence', message: `Section '${SECTION_ORDER[i]}' missing or incorrect intro sentence.\n  Found: '${intro}'\n  Expected: '${introRegex}'`, line: sections[i].lineStart + introLineIdx});
          }
        }
      } else if (INTRO_SENTENCES[i]) {
        errors.push({type: 'Intro Sentence', message: `Section '${SECTION_ORDER[i]}' missing or incorrect intro sentence.`, line: sections[i].lineStart});
      }
    }
    // Check table header if required
    if (TABLE_HEADERS[i]) {
      const tableLineIdx = sections[i].body.split('\n').findIndex(l => TABLE_HEADERS[i]!.test(l));
      if (tableLineIdx === -1) {
        errors.push({type: 'Table Format', message: `Section '${SECTION_ORDER[i]}' missing or incorrect table header.\n  Expected: ${TABLE_HEADERS[i]}`, line: sections[i].lineStart});
      }
    }
    // Check for horizontal rule after section (except last)
    if (i < SECTION_ORDER.length - 1) {
      const after = sections[i].body.split('\n').slice(-3).join('\n');
      if (!/---/.test(after)) {
        errors.push({type: 'Section Format', message: `Section '${SECTION_ORDER[i]}' missing horizontal rule (---) after section.`, line: sections[i].lineEnd - 1});
      }
    }
  }
  // Accessibility section must be a bullet list
  const accSection = sections[sections.length-1].body;
  if (!/^Accessibility features and requirements for .+:\n(- .+\n)+/m.test(accSection)) {
    errors.push({type: 'Accessibility', message: `Accessibility section must start with 'Accessibility features and requirements for [Component]:' and be a bullet list.`});
  }
  return errors;
}

// Checks that all referenced components in the header bullet list exist in components/
function checkHeaderComponentsExist(content: string, componentsDir: string): string[] {
  const errors: string[] = [];
  // Look for the **Components:** bullet list (header, not section)
  // Accept both '- [ComponentName](../components/ComponentName.md)' and '* [ComponentName](../components/ComponentName.md)'
  const headerSection = content.split(/\*\*Components:\*\*/i)[1] || "";
  // Only consider the first 10 lines after the header (to avoid matching section lists)
  const headerLines = headerSection.split(/\r?\n/).slice(0, 10);
  for (const line of headerLines) {
    const match = line.match(/\[([\w-]+)\]\(\.\.\/components\/([\w-]+)\.md\)/);
    if (match) {
      const componentId = match[2];
      try {
        Deno.statSync(`${componentsDir}/${componentId}.md`);
      } catch {
        errors.push(`Header-referenced component '${componentId}' does not exist in components/`);
      }
    }
  }
  return errors;
}

async function lintComponents(): Promise<void> {
  const errorMap: Record<string, LintError[]> = {};
  // Load blocks list and components TOC for cross-reference
  const blocksToc = await Deno.readTextFile(join(ROOT, "blocks.md"));
  const blocksList = new Set(
    [...blocksToc.matchAll(/\((blocks\/([\w-]+)\.md)\)/g)].map(m => m[2])
  );
  const componentsToc = await Deno.readTextFile(join(ROOT, "components.md"));
  for (const file of await getMarkdownFiles(COMPONENTS_DIR)) {
    const content = await Deno.readTextFile(file);
    const name = await getComponentNameFromFile(file);
    // Strict section order/format enforcement
    const sectionErrors = checkSectionOrderAndFormat(content, name);
    if (sectionErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...sectionErrors);
    }
    // Filename and Id
    const idError = await checkIdAndFilename(file);
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'Id', message: idError});
    }
    // Token Usage Table
    if (!hasTokenUsageTable(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'Table Format', message: `Component '${name}' missing required Token Usage table.`});
    }
    // State/Variant Documentation
    if (!hasStateVariantDocumentation(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'State/Variant', message: `Component '${name}' missing explicit state/variant documentation.`});
    }
    // Accessibility Section
    if (!/### Accessibility/i.test(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'Accessibility', message: `Component '${name}' missing required ### Accessibility section.`});
    } else {
      const accErrors = checkAccessibilityDetails(content);
      if (accErrors.length) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(...accErrors.map(e => ({type: 'Accessibility', message: `Component '${name}': ${e}`})));
      }
    }
    // Hardcoded values
    const hardcodedErrors = findHardcodedValues(content);
    if (hardcodedErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...hardcodedErrors.map(e => ({type: 'Hardcoded', message: `Component '${name}': ${e}`})));
    }
    // Used in Blocks cross-reference
    const usedBlocksErrors = checkUsedBlocksExist(content, blocksList);
    if (usedBlocksErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...usedBlocksErrors.map(e => ({type: 'Cross-Reference', message: e})));
    }
    // Check referenced components in header bullet list
    const headerComponentErrors = checkHeaderComponentsExist(content, join(ROOT, "components"));
    if (headerComponentErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...headerComponentErrors.map(e => ({type: 'Cross-Reference', message: e})));
    }
    // TOC listing
    if (!(await checkComponentListedInTOC(file, componentsToc))) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'TOC', message: `Component '${name}' is not listed in components.md TOC.`});
    }
  }
  const errorFiles = Object.keys(errorMap);
  if (errorFiles.length) {
    console.error("Component documentation structure errors found:");
    for (const file of errorFiles) {
      // Group errors by type
      const grouped: Record<string, LintError[]> = {};
      for (const err of errorMap[file]) {
        if (!grouped[err.type]) grouped[err.type] = [];
        grouped[err.type].push(err);
      }
      console.error(shortPath(file));
      for (const type of Object.keys(grouped)) {
        for (const err of grouped[type]) {
          console.error(formatError(file, err));
        }
      }
    }
    Deno.exit(1);
  } else {
    console.log("✅ All component documentation files follow the instructions.");
  }
}

if (import.meta.main) {
  // Support: deno run --allow-read scripts/component-markdown-enforcer.ts -id Accordion
  const idFlagIdx = Deno.args.indexOf('-id');
  if (idFlagIdx !== -1 && Deno.args.length > idFlagIdx + 1) {
    const componentId = Deno.args[idFlagIdx + 1];
    const file = join(COMPONENTS_DIR, `${componentId}.md`);
    const files = [file];
    await lintComponentsCustom(files);
  } else {
    await lintComponents();
  }
}

// Custom lint for a single file
async function lintComponentsCustom(files: string[]): Promise<void> {
  const errorMap: Record<string, LintError[]> = {};
  const blocksToc = await Deno.readTextFile(join(ROOT, "blocks.md"));
  const blocksList = new Set(
    [...blocksToc.matchAll(/\((blocks\/([\w-]+)\.md)\)/g)].map(m => m[2])
  );
  const componentsToc = await Deno.readTextFile(join(ROOT, "components.md"));
  for (const file of files) {
    const content = await Deno.readTextFile(file);
    const name = await getComponentNameFromFile(file);
    const sectionErrors = checkSectionOrderAndFormat(content, name);
    if (sectionErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...sectionErrors);
    }
    const idError = await checkIdAndFilename(file);
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'Id', message: idError});
    }
    if (!hasTokenUsageTable(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'Table Format', message: `Component '${name}' missing required Token Usage table.`});
    }
    if (!hasStateVariantDocumentation(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'State/Variant', message: `Component '${name}' missing explicit state/variant documentation.`});
    }
    if (!/### Accessibility/i.test(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'Accessibility', message: `Component '${name}' missing required ### Accessibility section.`});
    } else {
      const accErrors = checkAccessibilityDetails(content);
      if (accErrors.length) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(...accErrors.map(e => ({type: 'Accessibility', message: `Component '${name}': ${e}`})));
      }
    }
    const hardcodedErrors = findHardcodedValues(content);
    if (hardcodedErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...hardcodedErrors.map(e => ({type: 'Hardcoded', message: `Component '${name}': ${e}`})));
    }
    const usedBlocksErrors = checkUsedBlocksExist(content, blocksList);
    if (usedBlocksErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...usedBlocksErrors.map(e => ({type: 'Cross-Reference', message: e})));
    }
    // Check referenced components in header bullet list
    const headerComponentErrors = checkHeaderComponentsExist(content, join(ROOT, "components"));
    if (headerComponentErrors.length) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(...headerComponentErrors.map(e => ({type: 'Cross-Reference', message: e})));
    }
    if (!(await checkComponentListedInTOC(file, componentsToc))) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push({type: 'TOC', message: `Component '${name}' is not listed in components.md TOC.`});
    }
  }
  const errorFiles = Object.keys(errorMap);
  if (errorFiles.length) {
    console.error("Component documentation structure errors found:");
    for (const file of errorFiles) {
      const grouped: Record<string, LintError[]> = {};
      for (const err of errorMap[file]) {
        if (!grouped[err.type]) grouped[err.type] = [];
        grouped[err.type].push(err);
      }
      console.error(shortPath(file));
      for (const type of Object.keys(grouped)) {
        for (const err of grouped[type]) {
          console.error(formatError(file, err));
        }
      }
    }
    Deno.exit(1);
  } else {
    console.log("✅ All component documentation files follow the instructions.");
  }
}
