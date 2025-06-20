#!/usr/bin/env node
/**
 * Extract EXACT tokens from MoonZoon Rust source code
 * This creates the complete token system for pixel-perfect PenPot recreation
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const tokenDir = '/home/martinkavik/repos/NovyUI/moonzoon-novyui/moonzoon-novyui/src/tokens';

// Read all Rust token files
const files = readdirSync(tokenDir).filter(f => f.endsWith('.rs') && f !== 'mod.rs');

console.log('🎨 Extracting EXACT tokens from MoonZoon Rust source...');
console.log(`Found ${files.length} token files:`, files);

const extractedTokens = {
  color: {},
  spacing: {},
  typography: {},
  shadow: {},
  animation: {},
  opacity: {},
  border: {},
  cornerRadius: {},
  focus: {}
};

// Extract color tokens
function extractColors(content) {
  const colors = {};
  
  // Extract primary colors
  const primaryMatches = content.matchAll(/pub fn primary_(\d+)\(\)[^{]*{\s*theme\(\)\.map\(.*?Theme::Light => "([^"]+)".*?Theme::Dark => "([^"]+)"/gs);
  for (const match of primaryMatches) {
    const [, scale, light, dark] = match;
    if (!colors.primary) colors.primary = {};
    colors.primary[scale] = { light: light, dark: dark };
  }
  
  // Extract neutral colors
  const neutralMatches = content.matchAll(/pub fn neutral_(\d+)\(\)[^{]*{\s*theme\(\)\.map\(.*?Theme::Light => "([^"]+)".*?Theme::Dark => "([^"]+)"/gs);
  for (const match of neutralMatches) {
    const [, scale, light, dark] = match;
    if (!colors.neutral) colors.neutral = {};
    colors.neutral[scale] = { light: light, dark: dark };
  }
  
  // Extract success colors
  const successMatches = content.matchAll(/pub fn success_(\d+)\(\)[^{]*{\s*theme\(\)\.map\(.*?Theme::Light => "([^"]+)".*?Theme::Dark => "([^"]+)"/gs);
  for (const match of successMatches) {
    const [, scale, light, dark] = match;
    if (!colors.success) colors.success = {};
    colors.success[scale] = { light: light, dark: dark };
  }
  
  // Extract warning colors
  const warningMatches = content.matchAll(/pub fn warning_(\d+)\(\)[^{]*{\s*theme\(\)\.map\(.*?Theme::Light => "([^"]+)".*?Theme::Dark => "([^"]+)"/gs);
  for (const match of warningMatches) {
    const [, scale, light, dark] = match;
    if (!colors.warning) colors.warning = {};
    colors.warning[scale] = { light: light, dark: dark };
  }
  
  // Extract error colors
  const errorMatches = content.matchAll(/pub fn error_(\d+)\(\)[^{]*{\s*theme\(\)\.map\(.*?Theme::Light => "([^"]+)".*?Theme::Dark => "([^"]+)"/gs);
  for (const match of errorMatches) {
    const [, scale, light, dark] = match;
    if (!colors.error) colors.error = {};
    colors.error[scale] = { light: light, dark: dark };
  }
  
  // Extract static colors
  const staticMatches = content.matchAll(/pub fn (\w+)\(\) -> &'static str {\s*"([^"]+)"/g);
  for (const match of staticMatches) {
    const [, name, value] = match;
    if (['white', 'black', 'transparent'].includes(name)) {
      if (!colors.static) colors.static = {};
      colors.static[name] = value;
    }
  }
  
  return colors;
}

// Extract shadow tokens
function extractShadows(content) {
  const shadows = { size: {}, color: {} };
  
  // Extract shadow sizes
  const sizeMatches = content.matchAll(/pub const SHADOW_SIZE_(\w+): &str = "([^"]+)"/g);
  for (const match of sizeMatches) {
    const [, name, value] = match;
    shadows.size[name.toLowerCase()] = value;
  }
  
  const focusMatch = content.match(/pub const SHADOW_FOCUS: &str = "([^"]+)"/);
  if (focusMatch) {
    shadows.size.focus = focusMatch[1];
  }
  
  // Extract shadow colors
  const colorMatches = content.matchAll(/pub const SHADOW_COLOR_(\w+): &str = "([^"]+)"/g);
  for (const match of colorMatches) {
    const [, name, value] = match;
    shadows.color[name.toLowerCase()] = value;
  }
  
  return shadows;
}

// Extract animation tokens
function extractAnimation(content) {
  const animation = { duration: {}, easing: {} };
  
  // Extract durations
  const durationMatches = content.matchAll(/pub const DURATION_(\w+): u32 = (\d+)/g);
  for (const match of durationMatches) {
    const [, name, value] = match;
    animation.duration[name.toLowerCase()] = `${value}ms`;
  }
  
  return animation;
}

// Extract spacing tokens
function extractSpacing(content) {
  const spacing = {};
  
  // Extract spacing constants
  const spacingMatches = content.matchAll(/pub const SPACING_(\w+): &str = "([^"]+)"/g);
  for (const match of spacingMatches) {
    const [, name, value] = match;
    spacing[name.toLowerCase()] = value;
  }
  
  // Extract numbered spacing
  const numberedMatches = content.matchAll(/pub fn spacing_(\d+)\(\) -> &'static str {\s*"([^"]+)"/g);
  for (const match of numberedMatches) {
    const [, num, value] = match;
    spacing[num] = value;
  }
  
  return spacing;
}

// Extract typography tokens
function extractTypography(content) {
  const typography = { fontFamily: {}, fontSize: {}, fontWeight: {}, lineHeight: {} };
  
  // Extract font families
  const fontFamilyMatches = content.matchAll(/pub const FONT_FAMILY_(\w+): &str = "([^"]+)"/g);
  for (const match of fontFamilyMatches) {
    const [, name, value] = match;
    typography.fontFamily[name.toLowerCase()] = value;
  }
  
  // Extract font sizes
  const fontSizeMatches = content.matchAll(/pub const FONT_SIZE_(\w+): &str = "([^"]+)"/g);
  for (const match of fontSizeMatches) {
    const [, name, value] = match;
    typography.fontSize[name.toLowerCase()] = value;
  }
  
  // Extract font weights
  const fontWeightMatches = content.matchAll(/pub const FONT_WEIGHT_(\w+): &str = "([^"]+)"/g);
  for (const match of fontWeightMatches) {
    const [, name, value] = match;
    typography.fontWeight[name.toLowerCase()] = value;
  }
  
  return typography;
}

// Process each file
for (const file of files) {
  const content = readFileSync(join(tokenDir, file), 'utf8');
  console.log(`Processing ${file}...`);
  
  if (file === 'color.rs') {
    extractedTokens.color = extractColors(content);
  } else if (file === 'shadow.rs') {
    extractedTokens.shadow = extractShadows(content);
  } else if (file === 'animation.rs') {
    extractedTokens.animation = extractAnimation(content);
  } else if (file === 'spacing.rs') {
    extractedTokens.spacing = extractSpacing(content);
  } else if (file === 'typography.rs') {
    extractedTokens.typography = extractTypography(content);
  }
}

// Count extracted tokens
const colorCount = Object.keys(extractedTokens.color).reduce((total, category) => {
  if (category === 'static') return total + Object.keys(extractedTokens.color[category] || {}).length;
  return total + Object.keys(extractedTokens.color[category] || {}).length;
}, 0);

console.log(`✅ Extracted EXACT MoonZoon tokens:`);
console.log(`   • Colors: ${colorCount}`);
console.log(`   • Shadow sizes: ${Object.keys(extractedTokens.shadow.size || {}).length}`);
console.log(`   • Shadow colors: ${Object.keys(extractedTokens.shadow.color || {}).length}`);
console.log(`   • Animation durations: ${Object.keys(extractedTokens.animation.duration || {}).length}`);
console.log(`   • Spacing: ${Object.keys(extractedTokens.spacing || {}).length}`);
console.log(`   • Typography: ${Object.keys(extractedTokens.typography.fontFamily || {}).length + Object.keys(extractedTokens.typography.fontSize || {}).length + Object.keys(extractedTokens.typography.fontWeight || {}).length}`);

// Generate TypeScript file with EXACT MoonZoon values
const tsContent = `// EXACT NovyUI Design Tokens from MoonZoon Rust Source
// Auto-generated from MoonZoon Rust files - DO NOT EDIT MANUALLY
// Generated on: ${new Date().toISOString()}

export const novyuiTokensExact = ${JSON.stringify(extractedTokens, null, 2)};

export type NovyUITokensExact = typeof novyuiTokensExact;
`;

// Write the exact tokens file
writeFileSync(
  join(process.cwd(), 'src', 'novyui-tokens-exact.ts'),
  tsContent
);

console.log('✅ EXACT token file created: src/novyui-tokens-exact.ts');
console.log('🎯 Ready for PIXEL-PERFECT PenPot component recreation!');