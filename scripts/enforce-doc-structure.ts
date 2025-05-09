// Checks documentation rules for components, blocks, and pages.
import { join, dirname, basename, resolve } from "jsr:@std/path";

const ROOT = resolve(".");
const COMPONENTS_DIR = join(ROOT, "components");
const BLOCKS_DIR = join(ROOT, "blocks");
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

async function checkIdAndFilename(filePath: string, type: string): Promise<string | null> {
  const fileName = basename(filePath, ".md");
  if (!CAMEL_CASE_REGEX.test(fileName)) {
    return `${type} file '${fileName}.md' does not use CamelCase.`;
  }
  const content = await Deno.readTextFile(filePath);
  const idMatch = content.match(/\*\*Id:\*\*\s*([A-Za-z0-9]+)/);
  if (!idMatch || idMatch[1] !== fileName) {
    return `${type} file '${fileName}.md' has mismatched or missing **Id:** (expected '${fileName}').`;
  }
  return null;
}

function checkSection(content: string, section: string): boolean {
  const regex = new RegExp(`\\*\\*${section}:\\*\\*`, "i");
  return regex.test(content);
}

function checkAccessibilitySection(content: string): boolean {
  return /### Accessibility/i.test(content);
}

function getLineAndColumn(content: string, search: string, offset = 0): { line: number, column: number } | null {
  const idx = content.indexOf(search, offset);
  if (idx === -1) return null;
  const lines = content.slice(0, idx).split(/\r?\n/);
  const line = lines.length;
  const column = lines[lines.length - 1].length + 1;
  return { line, column };
}

// Shared set to avoid duplicate reporting of the same link/reference in a file
const reportedGlobal = new Set<string>();

async function checkReferences(content: string, section: string, filePath: string): Promise<string[]> {
  const sectionRegex = new RegExp(`\\*\\*${section}:\\*\\*([\\s\\S]*?)(?:\\n\\s*\\n|###|$)`, "i");
  const match = content.match(sectionRegex);
  if (!match) return [];
  const lines = match[1].split("\n").map((l) => l.trim()).filter(Boolean);
  const errors: string[] = [];
  let offset = 0;
  for (const line of lines) {
    const refMatch = line.match(/\[(.+?)\]\((.+?)\)/);
    if (refMatch) {
      const refPath = join(dirname(filePath), refMatch[2]);
      try {
        await Deno.stat(refPath);
      } catch {
        const pos = getLineAndColumn(content, refMatch[0], offset);
        offset = content.indexOf(refMatch[0], offset) + 1;
        const relPath = filePath.replace(ROOT + "\\", "");
        const key = pos ? `${relPath}:${pos.line}:${pos.column}:${refMatch[2]}` : `${relPath}:${refMatch[2]}`;
        if (!reportedGlobal.has(key)) {
          if (pos) {
            errors.push(`${relPath}:${pos.line}:${pos.column}: broken reference '${refMatch[2]}'`);
          } else {
            errors.push(`${relPath}: broken reference '${refMatch[2]}'`);
          }
          reportedGlobal.add(key);
        }
      }
    }
  }
  return errors;
}

async function checkAllLinksExist(filePath: string, content: string): Promise<string[]> {
  const errors: string[] = [];
  const linkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
  let match: RegExpExecArray | null;
  let offset = 0;
  while ((match = linkRegex.exec(content)) !== null) {
    const linkPath = match[1];
    if (/^(https?:|mailto:|#)/i.test(linkPath)) continue;
    const resolved = resolve(dirname(filePath), linkPath);
    try {
      await Deno.stat(resolved);
    } catch {
      const pos = getLineAndColumn(content, match[0], offset);
      offset = content.indexOf(match[0], offset) + 1;
      const relPath = filePath.replace(ROOT + "\\", "");
      const key = pos ? `${relPath}:${pos.line}:${pos.column}:${linkPath}` : `${relPath}:${linkPath}`;
      if (!reportedGlobal.has(key)) {
        if (pos) {
          errors.push(`${relPath}:${pos.line}:${pos.column}: broken link '${linkPath}'`);
        } else {
          errors.push(`${relPath}: broken link '${linkPath}'`);
        }
        reportedGlobal.add(key);
      }
    }
  }
  return errors;
}

function checkVariants(content: string): boolean {
  return /### Variants/i.test(content);
}

// --- Table of Contents Consistency Checks ---
// RULE:toc-listed
// RULE:toc-links-exist
async function checkTocConsistency(tocPath: string, dirPath: string, tocType: string, errorMap: Record<string, string[]>) {
  const tocContent = await Deno.readTextFile(tocPath);
  // Find all links in the TOC file
  const linkRegex = /\[.*?\]\((.*?)\)/g;
  const links = Array.from(tocContent.matchAll(linkRegex)).map(m => m[1]);
  // Find all .md files in the directory (ignore hidden files)
  const files = [];
  for await (const entry of Deno.readDir(dirPath)) {
    if (entry.isFile && entry.name.endsWith('.md') && !entry.name.startsWith('.')) {
      files.push(entry.name);
    }
  }
  // Check that every file is listed in the TOC
  // RULE:toc-listed
  for (const file of files) {
    if (!links.some(link => link.endsWith('/' + file) || link.endsWith('\\' + file))) {
      if (!errorMap[tocPath]) errorMap[tocPath] = [];
      errorMap[tocPath].push(`${tocType} TOC missing entry for: ${file}`);
    }
  }
  // Check that every link points to an existing file
  // RULE:toc-links-exist
  for (const link of links) {
    const resolved = resolve(dirname(tocPath), link);
    try {
      await Deno.stat(resolved);
    } catch {
      if (!errorMap[tocPath]) errorMap[tocPath] = [];
      errorMap[tocPath].push(`${tocType} TOC has broken link: ${link}`);
    }
  }
}

// RULE:toc-sorted
async function checkTocSorted(tocPath: string, errorMap: Record<string, string[]>) {
  const tocContent = await Deno.readTextFile(tocPath);
  // Find all lines that are links
  const linkLineRegex = /^\s*- \[.*?\]\(.*?\)/gm;
  const linkLines = tocContent.match(linkLineRegex) || [];
  // Helper to remove leading emojis and whitespace from display name
  function stripEmoji(text: string): string {
    // Remove leading emoji(s) and whitespace
    // Unicode emoji regex: https://stackoverflow.com/a/41164587/8656352
    return text.replace(/^([\p{Emoji_Presentation}\p{Extended_Pictographic}]|\uFE0F|\u200D|\s)+/gu, '').trim();
  }
  const sorted = [...linkLines].sort((a, b) => {
    const aNameRaw = a.match(/\[(.*?)\]/)?.[1] || '';
    const bNameRaw = b.match(/\[(.*?)\]/)?.[1] || '';
    const aName = stripEmoji(aNameRaw).toLowerCase();
    const bName = stripEmoji(bNameRaw).toLowerCase();
    return aName.localeCompare(bName, 'en');
  });
  for (let i = 0; i < linkLines.length; i++) {
    if (linkLines[i] !== sorted[i]) {
      if (!errorMap[tocPath]) errorMap[tocPath] = [];
      errorMap[tocPath].push(`TOC links are not sorted alphabetically (first out-of-order: ${linkLines[i]})`);
      break;
    }
  }
}

async function checkReferenceSections(errorMap: Record<string, string[]>) {
  // Check components
  for (const file of await getMarkdownFiles(COMPONENTS_DIR)) {
    const content = await Deno.readTextFile(file);
    // RULE:components-used-in-blocks-not-empty
    const usedInBlocksMatch = content.match(/\*\*Used in Blocks:\*\*([\s\S]*?)(?:\n\s*\n|###|$)/i);
    if (usedInBlocksMatch) {
      const lines = usedInBlocksMatch[1].split("\n").map((l) => l.trim()).filter(Boolean);
      if (lines.length === 0) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(`Component '${file}' has an empty **Used in Blocks:** section (must reference at least one real block).`);
      }
    }
    // RULE:accessibility-section-required
    if (!/### Accessibility/i.test(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Component '${file}' missing required ### Accessibility section.`);
    }
  }
  // Check blocks
  for (const file of await getMarkdownFiles(BLOCKS_DIR)) {
    const content = await Deno.readTextFile(file);
    // RULE:blocks-used-in-pages-not-empty
    const usedInPagesMatch = content.match(/\*\*Used in Pages:\*\*([\s\S]*?)(?:\n\s*\n|###|$)/i);
    if (usedInPagesMatch) {
      const lines = usedInPagesMatch[1].split("\n").map((l) => l.trim()).filter(Boolean);
      if (lines.length === 0) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(`Block '${file}' has an empty **Used in Pages:** section (must reference at least one real page).`);
      }
    }
  }
  // Check for correct relative paths and that references exist (RULE:relative-paths-synced)
  // This is already covered by checkReferences and checkAllLinksExist in the main lintDocs loop.
}

async function lintDocs(): Promise<void> {
  const errorMap: Record<string, string[]> = {};

  // Table of Contents Consistency
  // RULE:toc-listed, RULE:toc-links-exist
  await checkTocConsistency(join(ROOT, 'blocks.md'), BLOCKS_DIR, 'Blocks', errorMap);
  await checkTocConsistency(join(ROOT, 'components.md'), COMPONENTS_DIR, 'Components', errorMap);
  await checkTocConsistency(join(ROOT, 'pages.md'), PAGES_DIR, 'Pages', errorMap);
  // RULE:toc-sorted
  await checkTocSorted(join(ROOT, 'blocks.md'), errorMap);
  await checkTocSorted(join(ROOT, 'components.md'), errorMap);
  await checkTocSorted(join(ROOT, 'pages.md'), errorMap);

  // Components
  for (const file of await getMarkdownFiles(COMPONENTS_DIR)) {
    const content = await Deno.readTextFile(file);
    const name = basename(file);
    // RULE:component-filename
    const idError = await checkIdAndFilename(file, "Component");
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(idError);
    }
    // RULE:component-template
    if (!checkSection(content, "Appearance")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Component '${name}' missing **Appearance:** section.`);
    }
    if (!checkSection(content, "Behavior")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Component '${name}' missing **Behavior:** section.`);
    }
    if (!checkSection(content, "Used in Blocks")) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Component '${name}' missing **Used in Blocks:** section.`);
    }
    if (!checkVariants(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Component '${name}' missing ### Variants section.`);
    }
    // RULE:component-accessibility-required
    if (!checkAccessibilitySection(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Component '${name}' missing required ### Accessibility section.`);
    }
    // RULE:component-used-in-blocks-up-to-date
    for (const err of await checkReferences(content, "Used in Blocks", file)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
    // RULE:component-used-in-blocks-not-empty
    const usedInBlocksMatch = content.match(/\*\*Used in Blocks:\*\*([\s\S]*?)(?:\n\s*\n|###|$)/i);
    if (usedInBlocksMatch) {
      const lines = usedInBlocksMatch[1].split("\n").map((l) => l.trim()).filter(Boolean);
      if (lines.length === 0) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(`Component '${file}' has an empty **Used in Blocks:** section (must reference at least one real block).`);
      }
    }
    // RULE:references-synced
    for (const err of await checkAllLinksExist(file, content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
  }

  // Blocks
  for (const file of await getMarkdownFiles(BLOCKS_DIR)) {
    const content = await Deno.readTextFile(file);
    const name = basename(file);
    // RULE:block-filename
    const idError = await checkIdAndFilename(file, "Block");
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(idError);
    }
    // RULE:block-template
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
    } else {
      // RULE:block-used-in-pages-not-empty
      const usedInPagesMatch = content.match(/\*\*Used in Pages:\*\*([\s\S]*?)(?:\n\s*\n|###|$)/i);
      if (usedInPagesMatch) {
        const lines = usedInPagesMatch[1].split("\n").map((l) => l.trim()).filter(Boolean);
        if (lines.length === 0) {
          if (!errorMap[file]) errorMap[file] = [];
          errorMap[file].push(`Block '${name}' has an empty **Used in Pages:** section (must reference at least one real page).`);
        }
      }
    }
    if (!checkVariants(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Block '${name}' missing ### Variants section.`);
    }
    // RULE:block-components-up-to-date
    for (const err of await checkReferences(content, "Components", file)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
    // RULE:block-used-in-pages-up-to-date
    for (const err of await checkReferences(content, "Used in Pages", file)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
    // RULE:references-synced
    for (const err of await checkAllLinksExist(file, content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
  }

  // Pages
  for (const file of await getMarkdownFiles(PAGES_DIR)) {
    const content = await Deno.readTextFile(file);
    const name = basename(file);
    // RULE:page-filename
    const idError = await checkIdAndFilename(file, "Page");
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(idError);
    }
    // RULE:page-template
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
    // RULE:page-blocks-up-to-date
    for (const err of await checkReferences(content, "Blocks", file)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
    // RULE:references-synced
    for (const err of await checkAllLinksExist(file, content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
  }

  // RULE:component-dir
  // Check that all component markdown files are in the components directory, but skip meta-files
  for (const file of await getMarkdownFiles(ROOT)) {
    const base = basename(file);
    if ((base === "README.md" || base === "doc-structure.md" || base === "LICENSE")) continue;
    if (file.endsWith('.md') && !file.includes('components/') && !file.includes('blocks/') && !file.includes('pages/')) {
      if ((await Deno.readTextFile(file)).includes('**Id:**')) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(`Component file '${file}' is not in the components directory.`);
      }
    }
  }
  // RULE:block-dir
  // Check that all block markdown files are in the blocks directory, but skip meta-files
  for (const file of await getMarkdownFiles(ROOT)) {
    const base = basename(file);
    if ((base === "README.md" || base === "doc-structure.md" || base === "LICENSE")) continue;
    if (file.endsWith('.md') && !file.includes('blocks/') && !file.includes('components/') && !file.includes('pages/')) {
      if ((await Deno.readTextFile(file)).includes('## ') && (await Deno.readTextFile(file)).toLowerCase().includes('block')) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(`Block file '${file}' is not in the blocks directory.`);
      }
    }
  }
  // RULE:page-dir
  // Check that all page markdown files are in the pages directory, but skip meta-files
  for (const file of await getMarkdownFiles(ROOT)) {
    const base = basename(file);
    if ((base === "README.md" || base === "doc-structure.md" || base === "LICENSE")) continue;
    if (file.endsWith('.md') && !file.includes('pages/') && !file.includes('components/') && !file.includes('blocks/')) {
      if ((await Deno.readTextFile(file)).includes('## ') && (await Deno.readTextFile(file)).toLowerCase().includes('page')) {
        if (!errorMap[file]) errorMap[file] = [];
        errorMap[file].push(`Page file '${file}' is not in the pages directory.`);
      }
    }
  }

  // Print errors
  const errorFiles = Object.keys(errorMap);
  if (errorFiles.length) {
    console.error("Documentation structure errors found:");
    for (const file of errorFiles) {
      for (const err of errorMap[file]) {
        console.error(err);
      }
    }
    Deno.exit(1);
  } else {
    console.log("✅ All documentation files follow the structure rules.");
  }
}

await lintDocs();

// --- RULE COVERAGE CHECK ---
// RULE:enforcement-script
// This block checks that every RULE id in doc-structure.md is present in this file and vice versa.
try {
  const decoder = new TextDecoder();
  const docStructure = Deno.readFileSync("doc-structure.md");
  const enforceScript = Deno.readFileSync("scripts/enforce-doc-structure.ts");

  function extractRuleIds(text: string, pattern: RegExp): Set<string> {
    const ids = new Set<string>();
    let match;
    while ((match = pattern.exec(text)) !== null) {
      ids.add(match[1]);
    }
    return ids;
  }

  const docRulePattern = /<!--\s*RULE:([a-zA-Z0-9_-]+)\s*-->/g;
  const codeRulePattern = /\/\/\s*RULE:([a-zA-Z0-9_-]+)/g;

  const docIds = extractRuleIds(decoder.decode(docStructure), docRulePattern);
  const codeIds = extractRuleIds(decoder.decode(enforceScript), codeRulePattern);

  let ok = true;
  for (const id of docIds) {
    if (!codeIds.has(id)) {
      console.error(`❌ Rule '${id}' is in doc-structure.md but not enforced in enforce-doc-structure.ts`);
      ok = false;
    }
  }
  for (const id of codeIds) {
    if (!docIds.has(id)) {
      console.error(`❌ Rule '${id}' is in enforce-doc-structure.ts but not documented in doc-structure.md`);
      ok = false;
    }
  }
  if (ok) {
    console.log("✅ All rule IDs are covered in both files.");
  } else {
    Deno.exit(1);
  }
} catch (e) {
  console.error("Rule coverage check failed:", e);
  Deno.exit(1);
}
