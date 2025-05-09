// enforce-doc-structure.ts
// Script to enforce documentation rules in structure.md for components, blocks, and pages.
// @ts-check
import * as fs from 'fs';
import * as path from 'path';

// Use __dirname polyfill for ESM or environments where it's not defined
const __dirname = path.resolve();

const ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT, 'components');
const BLOCKS_DIR = path.join(ROOT, 'blocks');
const PAGES_DIR = path.join(ROOT, 'pages');

const CAMEL_CASE_REGEX = /^[A-Z][A-Za-z0-9]*$/;

function getMarkdownFiles(dir: string): string[] {
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(dir, f));
}

function checkIdAndFilename(filePath: string, type: string): string | null {
  const fileName = path.basename(filePath, '.md');
  if (!CAMEL_CASE_REGEX.test(fileName)) {
    return `${type} file '${fileName}.md' does not use CamelCase.`;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const idMatch = content.match(/\*\*Id:\*\*\s*([A-Za-z0-9]+)/);
  if (!idMatch || idMatch[1] !== fileName) {
    return `${type} file '${fileName}.md' has mismatched or missing **Id:** (expected '${fileName}').`;
  }
  return null;
}

function checkSection(content: string, section: string): boolean {
  const regex = new RegExp(`\*\*${section}:\*\*`, 'i');
  return regex.test(content);
}

function checkAccessibilitySection(content: string): boolean {
  // Accessibility section is required for all components
  return /### Accessibility/i.test(content);
}

function checkReferences(content: string, section: string, expectedDir: string): string[] {
  const sectionRegex = new RegExp(`\*\*${section}:\*\*([\s\S]*?)(?:\n\s*\n|###|$)`, 'i');
  const match = content.match(sectionRegex);
  if (!match) return [];
  const lines = match[1].split('\n').map(l => l.trim()).filter(Boolean);
  const errors: string[] = [];
  for (const line of lines) {
    const refMatch = line.match(/\[(.+?)\]\((.+?)\)/);
    if (refMatch) {
      const refPath = path.join(path.dirname(expectedDir), refMatch[2]);
      if (!fs.existsSync(refPath)) {
        errors.push(`Reference '${refMatch[2]}' in section **${section}:** does not exist.`);
      }
    }
  }
  return errors;
}

function checkAllLinksExist(filePath: string, content: string): string[] {
  const errors: string[] = [];
  // Match all markdown links: [text](path)
  const linkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const linkPath = match[1];
    // Ignore URLs (http, https, mailto, etc.)
    if (/^(https?:|mailto:|#)/i.test(linkPath)) continue;
    const resolved = path.resolve(path.dirname(filePath), linkPath);
    if (!fs.existsSync(resolved)) {
      errors.push(`Link '${linkPath}' in file '${path.basename(filePath)}' does not point to an existing file.`);
    }
  }
  return errors;
}

function checkVariants(content: string): boolean {
  return /### Variants/i.test(content);
}

function lintDocs(): void {
  const errors: string[] = [];

  // Components
  for (const file of getMarkdownFiles(COMPONENTS_DIR)) {
    const content = fs.readFileSync(file, 'utf-8');
    const name = path.basename(file);
    const idError = checkIdAndFilename(file, 'Component');
    if (idError) errors.push(idError);
    errors.push(
      !checkSection(content, 'Appearance') ? `Component '${name}' missing **Appearance:** section.` : '',
      !checkSection(content, 'Behavior') ? `Component '${name}' missing **Behavior:** section.` : '',
      !checkSection(content, 'Used in Blocks') ? `Component '${name}' missing **Used in Blocks:** section.` : '',
      !checkVariants(content) ? `Component '${name}' missing ### Variants section.` : ''
    );
    // Accessibility section is now required for all components
    if (!checkAccessibilitySection(content)) {
      errors.push(`Component '${name}' missing required ### Accessibility section.`);
    }
    // Reference checks
    errors.push(...checkReferences(content, 'Used in Blocks', file));
    errors.push(...checkAllLinksExist(file, content));
  }

  // Blocks
  for (const file of getMarkdownFiles(BLOCKS_DIR)) {
    const content = fs.readFileSync(file, 'utf-8');
    const name = path.basename(file);
    const idError = checkIdAndFilename(file, 'Block');
    if (idError) errors.push(idError);
    errors.push(
      !checkSection(content, 'Appearance') ? `Block '${name}' missing **Appearance:** section.` : '',
      !checkSection(content, 'Behavior') ? `Block '${name}' missing **Behavior:** section.` : '',
      !checkSection(content, 'Components') ? `Block '${name}' missing **Components:** section.` : '',
      !checkSection(content, 'Used in Pages') ? `Block '${name}' missing **Used in Pages:** section.` : '',
      !checkVariants(content) ? `Block '${name}' missing ### Variants section.` : ''
    );
    errors.push(...checkReferences(content, 'Components', file));
    errors.push(...checkReferences(content, 'Used in Pages', file));
    errors.push(...checkAllLinksExist(file, content));
  }

  // Pages
  for (const file of getMarkdownFiles(PAGES_DIR)) {
    const content = fs.readFileSync(file, 'utf-8');
    const name = path.basename(file);
    const idError = checkIdAndFilename(file, 'Page');
    if (idError) errors.push(idError);
    errors.push(
      !checkSection(content, 'Appearance') ? `Page '${name}' missing **Appearance:** section.` : '',
      !checkSection(content, 'Behavior') ? `Page '${name}' missing **Behavior:** section.` : '',
      !checkSection(content, 'Blocks') ? `Page '${name}' missing **Blocks:** section.` : '',
      !checkVariants(content) ? `Page '${name}' missing ### Variants section.` : ''
    );
    errors.push(...checkReferences(content, 'Blocks', file));
    errors.push(...checkAllLinksExist(file, content));
  }

  // Remove empty string errors
  const filteredErrors = errors.filter(e => typeof e === 'string' && e.trim());

  if (filteredErrors.length) {
    // eslint-disable-next-line no-console
    console.error('Documentation structure errors found:');
    for (const err of filteredErrors) {
      // eslint-disable-next-line no-console
      console.error(' -', err);
    }
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  } else {
    // eslint-disable-next-line no-console
    console.log('All documentation files follow the structure rules.');
  }
}

lintDocs();
