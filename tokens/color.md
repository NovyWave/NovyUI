# Color System

## Overview

This design system uses a unified scale from 1 to x for all palettes and design tokens. Each step corresponds to a traditional scale (e.g., 1 = 50, 2 = 100, ..., x = 950). All color values are defined in the OKLCH color space for modern, accessible, and consistent rendering across devices and themes.

### Scale Mapping Table

| Token Index | Traditional Scale |
|-------------|------------------|
| 1           | 50               |
| 2           | 100              |
| 3           | 150              |
| 4           | 200              |
| 5           | 300              |
| 6           | 400              |
| 7           | 500              |
| 8           | 600              |
| 9           | 700              |
| 10          | 800              |
| 11          | 950              |

> For all scales in the design system (color, spacing, radii, etc.), use 1–x indexing. Only use special values like `none` or `full` for cases where a numeric scale is not appropriate (e.g., border-radius: none, full).

## Color Tokens

All color tokens use the following format:

```
color.<palette>.<index>
```

Example: `color.primary.7` (the base blue for primary actions)

### Example: Primary (Blue) Palette (OKLCH)

| Token             | OKLCH Value                | Usage Example                |
|-------------------|---------------------------|------------------------------|
| color.primary.1   | oklch(98% 0.01 250)       | Lightest backgrounds         |
| color.primary.2   | oklch(95% 0.03 250)       | Subtle backgrounds           |
| color.primary.3   | oklch(90% 0.05 250)       | Hover backgrounds            |
| color.primary.4   | oklch(85% 0.07 250)       | Selected backgrounds         |
| color.primary.5   | oklch(75% 0.10 250)       | Borders, active backgrounds  |
| color.primary.6   | oklch(65% 0.13 250)       | Button backgrounds           |
| color.primary.7   | oklch(55% 0.16 250)       | Primary action, base blue    |
| color.primary.8   | oklch(45% 0.16 250)       | Hover/active states          |
| color.primary.9   | oklch(35% 0.14 250)       | Pressed/active states        |
| color.primary.10  | oklch(25% 0.12 250)       | Focus rings, outlines        |
| color.primary.11  | oklch(15% 0.10 250)       | Darkest, text on light blue  |

> Adjust chroma and hue as needed for your brand. Repeat for other palettes (neutral, success, warning, error, etc.)

## Theming

- For dark mode, define a parallel set of tokens (e.g., `color.primary.7.dark`) or use a theme switcher to remap tokens.
- Always use tokens in components, never hardcoded values.

## Usage Guidelines

- Use lighter indices (1–4) for backgrounds and subtle UI.
- Use mid indices (5–8) for interactive elements.
- Use higher indices (9–11) for text, icons, and high-contrast needs.
- Always check color contrast for accessibility.

## Example Token Reference in Components

```yaml
button.background: color.primary.7
button.background.hover: color.primary.8
button.text: color.neutral.11
```

---

Document all palettes (primary, neutral, success, warning, error, etc.) in this format, using only OKLCH values. For all other scales (spacing, radii, etc.), use 1–x indexing, with `none` or `full` as special values where appropriate.
