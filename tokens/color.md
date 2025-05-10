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

### Example: Neutral (Gray) Palette (OKLCH)
| Token             | OKLCH Value                | Usage Example                |
|-------------------|---------------------------|------------------------------|
| color.neutral.1   | oklch(99% 0.005 270)      | Lightest backgrounds         |
| color.neutral.2   | oklch(96% 0.01 270)       | Subtle backgrounds           |
| color.neutral.3   | oklch(92% 0.012 270)      | Input backgrounds            |
| color.neutral.4   | oklch(88% 0.014 270)      | Card backgrounds             |
| color.neutral.5   | oklch(80% 0.016 270)      | Borders, dividers            |
| color.neutral.6   | oklch(70% 0.018 270)      | Disabled backgrounds         |
| color.neutral.7   | oklch(60% 0.02 270)       | Muted text                   |
| color.neutral.8   | oklch(45% 0.018 270)      | Secondary text               |
| color.neutral.9   | oklch(30% 0.016 270)      | Headings, strong text        |
| color.neutral.10  | oklch(18% 0.012 270)      | Main text                    |
| color.neutral.11  | oklch(10% 0.008 270)      | Highest contrast text        |

### Example: Success (Green) Palette (OKLCH)
| Token             | OKLCH Value                | Usage Example                |
|-------------------|---------------------------|------------------------------|
| color.success.1   | oklch(98% 0.03 145)       | Lightest backgrounds         |
| color.success.2   | oklch(94% 0.05 145)       | Subtle backgrounds           |
| color.success.3   | oklch(88% 0.07 145)       | Hover backgrounds            |
| color.success.4   | oklch(80% 0.09 145)       | Selected backgrounds         |
| color.success.5   | oklch(70% 0.11 145)       | Borders, active backgrounds  |
| color.success.6   | oklch(60% 0.13 145)       | Button backgrounds           |
| color.success.7   | oklch(50% 0.15 145)       | Success action, base green   |
| color.success.8   | oklch(40% 0.15 145)       | Hover/active states          |
| color.success.9   | oklch(30% 0.13 145)       | Pressed/active states        |
| color.success.10  | oklch(20% 0.11 145)       | Focus rings, outlines        |
| color.success.11  | oklch(12% 0.09 145)       | Darkest, text on light green |

### Example: Warning (Yellow/Amber) Palette (OKLCH)
| Token             | OKLCH Value                | Usage Example                |
|-------------------|---------------------------|------------------------------|
| color.warning.1   | oklch(98% 0.04 85)        | Lightest backgrounds         |
| color.warning.2   | oklch(94% 0.07 85)        | Subtle backgrounds           |
| color.warning.3   | oklch(88% 0.10 85)        | Hover backgrounds            |
| color.warning.4   | oklch(80% 0.13 85)        | Selected backgrounds         |
| color.warning.5   | oklch(70% 0.16 85)        | Borders, active backgrounds  |
| color.warning.6   | oklch(60% 0.19 85)        | Button backgrounds           |
| color.warning.7   | oklch(50% 0.22 85)        | Warning action, base yellow  |
| color.warning.8   | oklch(40% 0.22 85)        | Hover/active states          |
| color.warning.9   | oklch(30% 0.19 85)        | Pressed/active states        |
| color.warning.10  | oklch(20% 0.16 85)        | Focus rings, outlines        |
| color.warning.11  | oklch(12% 0.13 85)        | Darkest, text on light yellow|

### Example: Error (Red) Palette (OKLCH)
| Token             | OKLCH Value                | Usage Example                |
|-------------------|---------------------------|------------------------------|
| color.error.1     | oklch(98% 0.03 30)        | Lightest backgrounds         |
| color.error.2     | oklch(94% 0.06 30)        | Subtle backgrounds           |
| color.error.3     | oklch(88% 0.09 30)        | Hover backgrounds            |
| color.error.4     | oklch(80% 0.12 30)        | Selected backgrounds         |
| color.error.5     | oklch(70% 0.15 30)        | Borders, active backgrounds  |
| color.error.6     | oklch(60% 0.18 30)        | Button backgrounds           |
| color.error.7     | oklch(50% 0.21 30)        | Error action, base red       |
| color.error.8     | oklch(40% 0.21 30)        | Hover/active states          |
| color.error.9     | oklch(30% 0.18 30)        | Pressed/active states        |
| color.error.10    | oklch(20% 0.15 30)        | Focus rings, outlines        |
| color.error.11    | oklch(12% 0.12 30)        | Darkest, text on light red   |

> Adjust chroma and hue as needed for your brand. Repeat for other palettes (neutral, success, warning, error, etc.)

## Theming

- For dark mode, see `/tokens/theme-mapping.md` for a full mapping of all palettes.
- Always use tokens in components, never hardcoded values.

## Usage Guidelines

- Use lighter indices (1–4) for backgrounds and subtle UI.
- Use mid indices (5–8) for interactive elements.
- Use higher indices (9–11) for text, icons, and high-contrast needs.
- Always check color contrast for accessibility.

## Semantic Color Roles (Recommended)
| Semantic Role         | Token Example         | Description                  |
|----------------------|----------------------|------------------------------|
| color.bg.default     | color.neutral.1      | Default background           |
| color.bg.subtle      | color.neutral.2      | Subtle background            |
| color.text.primary   | color.neutral.11     | Main text color              |
| color.text.muted     | color.neutral.7      | Muted/secondary text         |
| color.border.default | color.neutral.5      | Default border color         |
| color.accent         | color.primary.7      | Primary accent/action        |
| color.success        | color.success.7      | Success state                |
| color.warning        | color.warning.7      | Warning state                |
| color.error          | color.error.7        | Error state                  |

> Map semantic roles to palette tokens for easier usage and future-proofing.

---

- Ensure all palettes (primary, neutral, success, warning, error, etc.) are documented in this format, using only OKLCH values.
- For all other scales (spacing, radii, etc.), use 1–x indexing, with `none` or `full` as special values where appropriate.
- Reference `/tokens/theme-mapping.md` for theme switching.
