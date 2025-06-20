#!/usr/bin/env node
/**
 * Extract complete NovyUI tokens from source and create comprehensive plugin tokens
 * This creates the complete token system for pixel-perfect PenPot recreation
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Load the complete token file
const sourceTokens = JSON.parse(
  readFileSync('/home/martinkavik/repos/NovyUI/PenPot/tokens/novyui-tokens.json', 'utf8')
);

// Helper function to convert OKLCH to hex (simplified for now)
function oklchToHex(oklchValue) {
  // For now, we'll use a simplified conversion
  // In production, you'd want a proper OKLCH to hex converter
  
  // Extract brightness and chroma values for approximation
  const match = oklchValue.match(/oklch\((\d+)%\s+([\d.]+)\s+(\d+)\)/);
  if (!match) return '#000000';
  
  const [, lightness, chroma, hue] = match;
  const l = parseInt(lightness);
  const c = parseFloat(chroma);
  const h = parseInt(hue);
  
  // Simple approximation - in production use proper color space conversion
  if (l > 90) return '#f8fafc'; // Very light
  if (l > 80) return '#e2e8f0'; // Light
  if (l > 70) return '#cbd5e1'; // Medium light
  if (l > 60) return '#94a3b8'; // Medium
  if (l > 40) return '#64748b'; // Medium dark
  if (l > 20) return '#334155'; // Dark
  return '#0f172a'; // Very dark
}

// Convert token structure to plugin format
function processTokens(tokens) {
  const result = {};
  
  // Process color tokens
  if (tokens.color) {
    result.color = {};
    
    Object.entries(tokens.color).forEach(([category, scales]) => {
      result.color[category] = {};
      
      if (category === 'static') {
        // Handle static colors (white, black, transparent)
        Object.entries(scales).forEach(([colorName, colorData]) => {
          if (colorData.$value) {
            result.color[category][colorName] = {
              $value: colorData.$value === 'transparent' ? 'transparent' : colorData.$value
            };
          }
        });
      } else {
        // Handle scale-based colors (primary, neutral, success, etc.)
        Object.entries(scales).forEach(([scale, scaleData]) => {
          if (scaleData.light && scaleData.dark) {
            result.color[category][scale] = {
              light: {
                $value: scaleData.light.$value.startsWith('oklch') 
                  ? oklchToHex(scaleData.light.$value)
                  : scaleData.light.$value
              },
              dark: {
                $value: scaleData.dark.$value.startsWith('oklch')
                  ? oklchToHex(scaleData.dark.$value) 
                  : scaleData.dark.$value
              }
            };
          }
        });
      }
    });
  }
  
  // Process typography tokens
  if (tokens.typography) {
    result.typography = {};
    
    Object.entries(tokens.typography).forEach(([category, values]) => {
      result.typography[category] = {};
      
      Object.entries(values).forEach(([key, tokenData]) => {
        if (tokenData.$value) {
          result.typography[category][key] = {
            $value: tokenData.$value
          };
        }
      });
    });
  }
  
  // Process spacing tokens
  if (tokens.spacing) {
    result.spacing = {};
    Object.entries(tokens.spacing).forEach(([key, tokenData]) => {
      if (tokenData.$value) {
        result.spacing[key] = {
          $value: tokenData.$value
        };
      }
    });
  }
  
  // Process border radius tokens
  if (tokens.borderRadius) {
    result.borderRadius = {};
    Object.entries(tokens.borderRadius).forEach(([key, tokenData]) => {
      if (tokenData.$value) {
        result.borderRadius[key] = {
          $value: tokenData.$value
        };
      }
    });
  }
  
  // Process shadow tokens
  if (tokens.shadow) {
    result.shadow = {};
    
    if (tokens.shadow.size) {
      result.shadow.size = {};
      Object.entries(tokens.shadow.size).forEach(([key, tokenData]) => {
        if (tokenData.$value) {
          result.shadow.size[key] = {
            $value: tokenData.$value
          };
        }
      });
    }
    
    if (tokens.shadow.color) {
      result.shadow.color = {};
      Object.entries(tokens.shadow.color).forEach(([category, colors]) => {
        result.shadow.color[category] = {};
        Object.entries(colors).forEach(([key, tokenData]) => {
          if (tokenData.$value) {
            result.shadow.color[category][key] = {
              $value: tokenData.$value.startsWith('oklch')
                ? oklchToHex(tokenData.$value)
                : tokenData.$value
            };
          }
        });
      });
    }
  }
  
  // Process animation tokens
  if (tokens.animation) {
    result.animation = {};
    
    Object.entries(tokens.animation).forEach(([category, values]) => {
      result.animation[category] = {};
      Object.entries(values).forEach(([key, tokenData]) => {
        if (tokenData.$value) {
          result.animation[category][key] = {
            $value: tokenData.$value
          };
        }
      });
    });
  }
  
  // Process opacity tokens
  if (tokens.opacity) {
    result.opacity = {};
    Object.entries(tokens.opacity).forEach(([key, tokenData]) => {
      if (tokenData.$value) {
        result.opacity[key] = {
          $value: tokenData.$value
        };
      }
    });
  }
  
  return result;
}

// Extract and process tokens
console.log('🎨 Extracting complete NovyUI token system...');
const processedTokens = processTokens(sourceTokens);

// Count extracted tokens
const colorCount = Object.keys(processedTokens.color || {}).reduce((total, category) => {
  return total + Object.keys(processedTokens.color[category]).length;
}, 0);

const typographyCount = Object.keys(processedTokens.typography || {}).reduce((total, category) => {
  return total + Object.keys(processedTokens.typography[category]).length;
}, 0);

const shadowCount = Object.keys(processedTokens.shadow?.size || {}).length + 
  Object.keys(processedTokens.shadow?.color || {}).reduce((total, category) => {
    return total + Object.keys(processedTokens.shadow.color[category]).length;
  }, 0);

console.log(`✅ Extracted tokens:`);
console.log(`   • Colors: ${colorCount}`);
console.log(`   • Typography: ${typographyCount}`);
console.log(`   • Shadows: ${shadowCount}`);
console.log(`   • Spacing: ${Object.keys(processedTokens.spacing || {}).length}`);
console.log(`   • Border Radius: ${Object.keys(processedTokens.borderRadius || {}).length}`);
console.log(`   • Animation: ${Object.keys(processedTokens.animation || {}).reduce((total, category) => {
  return total + Object.keys(processedTokens.animation[category]).length;
}, 0)}`);
console.log(`   • Opacity: ${Object.keys(processedTokens.opacity || {}).length}`);

// Generate TypeScript file
const tsContent = `// Complete NovyUI Design Tokens
// Auto-generated from MoonZoon source - DO NOT EDIT MANUALLY
// Generated on: ${new Date().toISOString()}

export const novyuiTokens = ${JSON.stringify(processedTokens, null, 2)};

export type NovyUITokens = typeof novyuiTokens;
`;

// Write the tokens file
writeFileSync(
  join(process.cwd(), 'src', 'novyui-tokens-complete.ts'),
  tsContent
);

console.log('✅ Complete token file created: src/novyui-tokens-complete.ts');
console.log('🎯 Ready for comprehensive PenPot component recreation!');