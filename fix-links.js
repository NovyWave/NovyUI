// fix-links.js
// Script to update component and page links in all markdown files under blocks/
const fs = require('fs');
const path = require('path');

const blocksDir = path.join(__dirname, 'blocks');
const componentsDir = path.join(__dirname, 'components');
const pagesDir = path.join(__dirname, 'pages');

// Helper to capitalize first letter (for filenames)
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Get all markdown files in blocks/
const files = fs.readdirSync(blocksDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(blocksDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace [Component](components.md#component) with [Component](../components/Component.md)
  content = content.replace(/\[([A-Za-z0-9]+)]\(components\.md#([a-z0-9-]+)\)/g, (match, text, anchor) => {
    // Try to match anchor to filename (PascalCase)
    const filename = capitalize(anchor.replace(/-([a-z])/g, g => g[1].toUpperCase()));
    return `[${text}](../components/${filename}.md)`;
  });

  // Replace [Page](pages.md#page) with [Page](../pages/Page.md)
  content = content.replace(/\[([A-Za-z0-9]+)]\(pages\.md#([a-z0-9-]+)\)/g, (match, text, anchor) => {
    const filename = capitalize(anchor.replace(/-([a-z])/g, g => g[1].toUpperCase()));
    return `[${text}](../pages/${filename}.md)`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated links in ${file}`);
});
