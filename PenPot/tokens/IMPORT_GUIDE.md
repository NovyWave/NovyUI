# NovyUI W3C Design Tokens Import Guide

## Overview
This directory contains W3C-compliant design tokens converted from the NovyUI MoonZoon implementation.

## Generated with Deno + TypeScript
All token files are generated using:
```bash
deno run --allow-read --allow-write scripts/token-converter.ts
```

## Token Files
- `novyui-tokens.json` - Complete token set in W3C format
- Individual category files for modular imports

## PenPot Import Instructions
1. Open PenPot Design Tokens Panel  
2. Import from JSON using the generated files
3. Configure light/dark theme variants
4. Apply tokens to component styling

## Token Statistics
- **98 color tokens** with OKLCH color space and theme variants
- **18 spacing tokens** with 4px base unit system  
- **25+ typography tokens** across 3 font families
- **W3C compliant** format compatible with design tools

Generated on: 2025-06-19
Source: NovyUI MoonZoon Implementation
