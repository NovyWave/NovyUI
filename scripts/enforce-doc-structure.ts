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

async function lintDocs(): Promise<void> {
  const errorMap: Record<string, string[]> = {};

  // Components
  for (const file of await getMarkdownFiles(COMPONENTS_DIR)) {
    const content = await Deno.readTextFile(file);
    const name = basename(file);
    const idError = await checkIdAndFilename(file, "Component");
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(idError);
    }
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
    if (!checkAccessibilitySection(content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(`Component '${name}' missing required ### Accessibility section.`);
    }
    for (const err of await checkReferences(content, "Used in Blocks", file)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
    for (const err of await checkAllLinksExist(file, content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
  }

  // Blocks
  for (const file of await getMarkdownFiles(BLOCKS_DIR)) {
    const content = await Deno.readTextFile(file);
    const name = basename(file);
    const idError = await checkIdAndFilename(file, "Block");
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(idError);
    }
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
    for (const err of await checkReferences(content, "Components", file)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
    for (const err of await checkReferences(content, "Used in Pages", file)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
    for (const err of await checkAllLinksExist(file, content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
  }

  // Pages
  for (const file of await getMarkdownFiles(PAGES_DIR)) {
    const content = await Deno.readTextFile(file);
    const name = basename(file);
    const idError = await checkIdAndFilename(file, "Page");
    if (idError) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(idError);
    }
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
    for (const err of await checkReferences(content, "Blocks", file)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
    }
    for (const err of await checkAllLinksExist(file, content)) {
      if (!errorMap[file]) errorMap[file] = [];
      errorMap[file].push(err);
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
    console.log("All documentation files follow the structure rules.");
  }
}

await lintDocs();
