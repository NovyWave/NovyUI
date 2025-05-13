// NovyUI Markdown Canonical Formatter (TEMP)
// This script updates all component, block, and page markdown files to match the strict documentation structure.
// - Enforces section order: Header, Token Usage, Variants, States, Accessibility
// - Adds required intro sentences, table formats, and horizontal rules
// - Fills missing sections with canonical placeholders
// - Ensures all files are listed in their respective TOC files
// Usage: deno run --allow-read --allow-write scripts/temp/markdown-canonical-formatter.ts

import { walk } from "https://deno.land/std/fs/walk.ts";

const SECTION_ORDER = [
  "Header",
  "Token Usage",
  "Variants",
  "States",
  "Accessibility"
];

const SECTION_TEMPLATES = {
  "Token Usage": (name, type) => `### Token Usage\nThe following table lists all design tokens used by the ${name} ${type}:\n| Part | Token Example | Description |\n|------|---------------|-------------|\n|      |               |             |\n\n---\n`,
  "Variants": (name, type) => `### Variants\nAll supported ${name} variants are listed below:\n| Variant Name | Description | Appearance/Behavior | Tokens Used | Notes |\n|--------------|-------------|---------------------|-------------|-------|\n|              |             |                     |             |       |\n\n---\n`,
  "States": (name, type) => `### States\n${name} states and their token usage:\n| State | Description | Token(s) affected |\n|-------|-------------|-------------------|\n|       |             |                   |\n\n---\n`,
  "Accessibility": () => `### Accessibility\n- Accessibility features and requirements for this item.\n`
};

async function updateMarkdownFiles(dir, type, tocPath) {
  const toc = await Deno.readTextFile(tocPath);
  const tocEntries = new Set(toc.match(/\(([^)]+\.md)\)/g)?.map(e => e.slice(1, -1)) || []);
  for await (const entry of walk(dir, { exts: [".md"], includeDirs: false })) {
    const name = entry.name.replace(/\.md$/, "");
    let content = await Deno.readTextFile(entry.path);
    let updated = false;
    // Ensure file is in TOC
    if (!tocEntries.has(`${dir.split("/").pop()}/${entry.name}`)) {
      // Add to TOC (append at end)
      await Deno.writeTextFile(tocPath, toc + `\n- [${name}](${dir.split("/").pop()}/${entry.name})`);
      updated = true;
    }
    // Enforce section order and structure
    let newContent = `## ${name}\n\n`;
    newContent += SECTION_TEMPLATES["Token Usage"](name, type);
    newContent += SECTION_TEMPLATES["Variants"](name, type);
    newContent += SECTION_TEMPLATES["States"](name, type);
    newContent += SECTION_TEMPLATES["Accessibility"]();
    if (content !== newContent) {
      await Deno.writeTextFile(entry.path, newContent);
      updated = true;
    }
    if (updated) {
      console.log(`Updated: ${entry.path}`);
    }
  }
}

if (import.meta.main) {
  await updateMarkdownFiles("components", "component", "components.md");
  await updateMarkdownFiles("blocks", "block", "blocks.md");
  await updateMarkdownFiles("pages", "page", "pages.md");
  console.log("All markdown files updated to strict structure.");
}
