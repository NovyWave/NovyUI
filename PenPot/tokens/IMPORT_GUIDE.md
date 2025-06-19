# NovyUI W3C Design Tokens Import Guide

## Overview
This directory contains W3C-compliant design tokens converted from the NovyUI MoonZoon implementation.

## Token Files

### Complete Token Set
- `novyui-tokens.json` - All tokens in a single file

### Category-Specific Files
- `novyui-colors.json` - Color system (98 tokens with light/dark themes)
- `novyui-spacing.json` - Spacing system (17 spacing values)
- `novyui-typography.json` - Typography system (fonts, sizes, weights)
- `novyui-border-radius.json` - Border radius values
- `novyui-shadows.json` - Shadow definitions
- `novyui-opacity.json` - Opacity scale
- `novyui-animations.json` - Animation durations and easing
- `novyui-borders.json` - Border width values
- `novyui-semantic.json` - Component-specific semantic tokens

## PenPot Import Instructions

1. **Open PenPot Design Tokens Panel**
2. **Import Token File**: Choose "Import from JSON"
3. **Select Token File**: Use complete set or category-specific files
4. **Configure Themes**: Set up light/dark theme switching
5. **Apply to Components**: Use tokens in component styling

## Token Structure

### Color System
- **OKLCH Color Space**: Modern, perceptually uniform colors
- **Theme Support**: Light and dark theme variants
- **Semantic Names**: Primary, neutral, success, warning, error
- **11-step Scale**: Consistent color progression

### Typography
- **Font Families**: Sans (Inter), Mono (Fira Code), Display (Audiowide)
- **Responsive Sizes**: 12px to 48px
- **Consistent Weights**: 400, 500, 600, 700
- **Line Height Scale**: 100% to 200%

### Spacing System
- **4px Base Unit**: Consistent spacing increments
- **17 Values**: 0px to 150px
- **Semantic Usage**: Padding, margins, gaps

## Component Mapping

### Button Components
- Primary: Uses `color.primary.7` for background
- Secondary: Uses `color.neutral.1` for background
- Text: Uses appropriate contrast colors

### Input Components
- Background: `color.neutral.1`
- Border: `color.neutral.6` (default), `color.primary.7` (focus)
- Focus Ring: Uses shadow tokens

## Theme Configuration

```json
{
  "themes": {
    "light": {
      "color.primary.7": "oklch(76% 0.05 250)"
    },
    "dark": {
      "color.primary.7": "oklch(50% 0.05 250)"
    }
  }
}
```

## Advanced Features

### Extensions
Each token includes PenPot-specific extensions:
- `source`: References original NovyUI implementation
- `themeAware`: Indicates tokens with theme variants
- `component`: Links tokens to specific components
- `semantic`: Provides semantic meaning context

### Validation
- All tokens follow W3C Design Tokens Community Group specification
- Schema validation available at: https://tr.designtokens.org/format/
- Compatible with Tokens Studio and other W3C-compliant tools

## Migration Notes

1. **OKLCH Support**: Ensure PenPot supports OKLCH color space
2. **Theme Switching**: Configure automatic theme detection
3. **Token References**: Use `{}` syntax for token references
4. **Component Mapping**: Apply semantic tokens to component variants

## Support

For questions about token usage or migration issues:
- Review NovyUI documentation in `/docs`
- Check MoonZoon storybook: https://moonzoon-novyui-storybook.kavik.cz/
- Reference original implementation in `/moonzoon-novyui`
