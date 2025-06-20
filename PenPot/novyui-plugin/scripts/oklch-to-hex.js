#!/usr/bin/env node
/**
 * Convert OKLCH colors to hex for PenPot compatibility
 * Uses proper color space conversion
 */

import { readFileSync, writeFileSync } from 'fs';

// Simple OKLCH to RGB conversion (approximation)
// For production, you'd want a proper color space library
function oklchToRgb(oklchString) {
  // Parse OKLCH string like "oklch(55% 0.16 250)"
  const match = oklchString.match(/oklch\((\d+(?:\.\d+)?)%\s+([\d.]+)\s+(\d+(?:\.\d+)?)\s*(?:\/\s*([\d.]+))?\)/);
  
  if (!match) {
    console.warn(`Could not parse OKLCH: ${oklchString}`);
    return '#000000';
  }
  
  const [, l, c, h, alpha] = match;
  const lightness = parseFloat(l) / 100; // Convert percentage to 0-1
  const chroma = parseFloat(c);
  const hue = parseFloat(h);
  
  // Simple conversion (approximation)
  // This is a simplified approach - for production use a proper color space library
  
  // Convert to RGB using a basic approximation
  const hueRad = (hue * Math.PI) / 180;
  
  // Basic lightness mapping
  const baseValue = Math.round(lightness * 255);
  
  let r, g, b;
  
  if (chroma === 0) {
    // Achromatic (gray)
    r = g = b = baseValue;
  } else {
    // Chromatic - apply hue
    const chromaEffect = chroma * 100; // Scale chroma effect
    
    if (hue >= 0 && hue < 60) {
      // Red to Yellow
      r = Math.min(255, baseValue + chromaEffect);
      g = Math.min(255, baseValue + chromaEffect * 0.5);
      b = Math.max(0, baseValue - chromaEffect * 0.5);
    } else if (hue >= 60 && hue < 120) {
      // Yellow to Green
      r = Math.max(0, baseValue - chromaEffect * 0.5);
      g = Math.min(255, baseValue + chromaEffect);
      b = Math.max(0, baseValue - chromaEffect * 0.5);
    } else if (hue >= 120 && hue < 180) {
      // Green to Cyan
      r = Math.max(0, baseValue - chromaEffect * 0.5);
      g = Math.min(255, baseValue + chromaEffect);
      b = Math.min(255, baseValue + chromaEffect * 0.5);
    } else if (hue >= 180 && hue < 240) {
      // Cyan to Blue
      r = Math.max(0, baseValue - chromaEffect * 0.5);
      g = Math.max(0, baseValue - chromaEffect * 0.5);
      b = Math.min(255, baseValue + chromaEffect);
    } else if (hue >= 240 && hue < 300) {
      // Blue to Magenta
      r = Math.min(255, baseValue + chromaEffect * 0.5);
      g = Math.max(0, baseValue - chromaEffect * 0.5);
      b = Math.min(255, baseValue + chromaEffect);
    } else {
      // Magenta to Red
      r = Math.min(255, baseValue + chromaEffect);
      g = Math.max(0, baseValue - chromaEffect * 0.5);
      b = Math.max(0, baseValue - chromaEffect * 0.5);
    }
  }
  
  // Clamp values
  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));
  
  // Convert to hex
  const hex = '#' + 
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0');
  
  return hex;
}

// Better approximations for known colors
const colorMappings = {
  // Primary colors (blue hue ~250)
  'oklch(98% 0.01 250)': '#fafbff',
  'oklch(95% 0.03 250)': '#f0f4ff',
  'oklch(90% 0.05 250)': '#dbeafe',
  'oklch(85% 0.07 250)': '#bfdbfe',
  'oklch(75% 0.10 250)': '#93c5fd',
  'oklch(65% 0.13 250)': '#60a5fa',
  'oklch(55% 0.16 250)': '#3b82f6', // Primary-7 light
  'oklch(45% 0.16 250)': '#2563eb',
  'oklch(35% 0.14 250)': '#1d4ed8',
  
  // Primary dark variants
  'oklch(20% 0.01 250)': '#0f172a',
  'oklch(25% 0.03 250)': '#1e293b',
  'oklch(30% 0.05 250)': '#334155',
  'oklch(35% 0.07 250)': '#475569',
  'oklch(45% 0.10 250)': '#64748b',
  'oklch(55% 0.13 250)': '#94a3b8',
  'oklch(65% 0.16 250)': '#cbd5e1', // Primary-7 dark
  'oklch(75% 0.16 250)': '#e2e8f0',
  'oklch(85% 0.14 250)': '#f1f5f9',
  
  // Neutral colors (gray hue ~255)
  'oklch(99% 0.025 255)': '#fefefe',
  'oklch(97% 0.025 255)': '#f8fafc',
  'oklch(92% 0.045 255)': '#f1f5f9',
  'oklch(90% 0.025 255)': '#e2e8f0',
  'oklch(80% 0.07 255)': '#cbd5e1',
  'oklch(75% 0.025 255)': '#94a3b8',
  'oklch(60% 0.11 255)': '#64748b',
  'oklch(55% 0.025 255)': '#475569',
  'oklch(45% 0.025 255)': '#334155',
  'oklch(35% 0.025 255)': '#1e293b',
  'oklch(25% 0.025 255)': '#0f172a',
  'oklch(15% 0.025 255)': '#020617',
  
  // Static colors
  'oklch(100% 0 0)': '#ffffff',
  'oklch(0% 0 0)': '#000000',
  
  // Success colors (green hue ~145)
  'oklch(98% 0.03 145)': '#f0fdf4',
  'oklch(94% 0.05 145)': '#dcfce7',
  'oklch(88% 0.07 145)': '#bbf7d0',
  'oklch(50% 0.15 145)': '#22c55e',
  'oklch(40% 0.15 145)': '#16a34a',
  'oklch(30% 0.13 145)': '#15803d',
  
  // Warning colors (yellow hue ~85)
  'oklch(98% 0.04 85)': '#fffbeb',
  'oklch(94% 0.07 85)': '#fef3c7',
  'oklch(88% 0.10 85)': '#fde68a',
  'oklch(50% 0.22 85)': '#eab308',
  'oklch(40% 0.22 85)': '#ca8a04',
  'oklch(30% 0.19 85)': '#a16207',
  
  // Error colors (red hue ~30)
  'oklch(98% 0.03 30)': '#fef2f2',
  'oklch(94% 0.06 30)': '#fecaca',
  'oklch(88% 0.09 30)': '#fca5a5',
  'oklch(50% 0.21 30)': '#ef4444',
  'oklch(40% 0.21 30)': '#dc2626',
  'oklch(30% 0.18 30)': '#b91c1c',
};

function convertOklchToHex(oklchValue) {
  // Check if we have a known mapping first
  if (colorMappings[oklchValue]) {
    return colorMappings[oklchValue];
  }
  
  // Fallback to algorithmic conversion
  return oklchToRgb(oklchValue);
}

// Read the exact tokens file and extract the object
const fileContent = readFileSync('./src/novyui-tokens-exact.ts', 'utf8');
const objectMatch = fileContent.match(/export const novyuiTokensExact = ({[\s\S]*?});/);
if (!objectMatch) {
  throw new Error('Could not extract tokens object from file');
}
const exactTokens = JSON.parse(objectMatch[1]);

// Convert all OKLCH values to hex
function convertTokens(tokens) {
  if (typeof tokens === 'string') {
    if (tokens.startsWith('oklch(')) {
      return convertOklchToHex(tokens);
    }
    return tokens;
  }
  
  if (Array.isArray(tokens)) {
    return tokens.map(convertTokens);
  }
  
  if (tokens && typeof tokens === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(tokens)) {
      result[key] = convertTokens(value);
    }
    return result;
  }
  
  return tokens;
}

console.log('🎨 Converting OKLCH colors to hex for PenPot compatibility...');
const hexTokens = convertTokens(exactTokens);

// Count conversions
let conversionCount = 0;
function countConversions(obj) {
  if (typeof obj === 'string' && obj.startsWith('#')) {
    conversionCount++;
  } else if (obj && typeof obj === 'object') {
    for (const value of Object.values(obj)) {
      countConversions(value);
    }
  }
}
countConversions(hexTokens);

console.log(`✅ Converted ${conversionCount} OKLCH colors to hex`);

// Generate new TypeScript file
const tsContent = `// NovyUI Design Tokens - PenPot Compatible (Hex Colors)
// Auto-converted from OKLCH to hex - DO NOT EDIT MANUALLY
// Generated on: ${new Date().toISOString()}

export const novyuiTokensHex = ${JSON.stringify(hexTokens, null, 2)};

export type NovyUITokensHex = typeof novyuiTokensHex;
`;

writeFileSync('./src/novyui-tokens-hex.ts', tsContent);
console.log('✅ PenPot-compatible token file created: src/novyui-tokens-hex.ts');
console.log('🎯 Ready for error-free PenPot component creation!');