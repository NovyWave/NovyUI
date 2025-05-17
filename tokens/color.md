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

This file defines the color palettes for the design system. All values use OKLCH and are theme-mapped (light/dark).

## Palettes

### Primary
| Scale | Light                  | Dark                   |
|-------|------------------------|------------------------|
| 1     | oklch(98% 0.01 250)    | oklch(20% 0.01 250)    |
| 2     | oklch(95% 0.03 250)    | oklch(25% 0.03 250)    |
| 3     | oklch(90% 0.05 250)    | oklch(30% 0.05 250)    |
| 4     | oklch(85% 0.07 250)    | oklch(35% 0.07 250)    |
| 5     | oklch(75% 0.10 250)    | oklch(45% 0.10 250)    |
| 6     | oklch(65% 0.13 250)    | oklch(55% 0.13 250)    |
| 7     | oklch(55% 0.16 250)    | oklch(65% 0.16 250)    |
| 8     | oklch(45% 0.16 250)    | oklch(75% 0.16 250)    |
| 9     | oklch(35% 0.14 250)    | oklch(85% 0.14 250)    |
| 10    | oklch(25% 0.12 250)    | oklch(90% 0.12 250)    |
| 11    | oklch(15% 0.10 250)    | oklch(98% 0.10 250)    |

### Neutral (blueish)
| Scale | Light                  | Dark                   |
|-------|------------------------|------------------------|
| 1     | oklch(99% 0.025 255)   | oklch(12% 0.025 255)   |
| 2     | oklch(96% 0.035 255)   | oklch(18% 0.035 255)   |
| 3     | oklch(92% 0.045 255)   | oklch(30% 0.045 255)   |
| 4     | oklch(88% 0.055 255)   | oklch(45% 0.055 255)   |
| 5     | oklch(80% 0.07 255)    | oklch(60% 0.07 255)    |
| 6     | oklch(70% 0.09 255)    | oklch(70% 0.09 255)    |
| 7     | oklch(60% 0.11 255)    | oklch(80% 0.11 255)    |
| 8     | oklch(45% 0.09 255)    | oklch(88% 0.09 255)    |
| 9     | oklch(30% 0.07 255)    | oklch(92% 0.07 255)    |
| 10    | oklch(18% 0.035 255)   | oklch(96% 0.035 255)   |
| 11    | oklch(10% 0.025 255)   | oklch(99% 0.025 255)   |

### Success
| Scale | Light                  | Dark                   |
|-------|------------------------|------------------------|
| 1     | oklch(98% 0.03 145)    | oklch(12% 0.03 145)    |
| 2     | oklch(94% 0.05 145)    | oklch(20% 0.05 145)    |
| 3     | oklch(88% 0.07 145)    | oklch(30% 0.07 145)    |
| 4     | oklch(80% 0.09 145)    | oklch(40% 0.09 145)    |
| 5     | oklch(70% 0.11 145)    | oklch(50% 0.11 145)    |
| 6     | oklch(60% 0.13 145)    | oklch(60% 0.13 145)    |
| 7     | oklch(50% 0.15 145)    | oklch(70% 0.15 145)    |
| 8     | oklch(40% 0.15 145)    | oklch(80% 0.15 145)    |
| 9     | oklch(30% 0.13 145)    | oklch(88% 0.13 145)    |
| 10    | oklch(20% 0.11 145)    | oklch(94% 0.11 145)    |
| 11    | oklch(12% 0.09 145)    | oklch(98% 0.09 145)    |

### Warning
| Scale | Light                  | Dark                   |
|-------|------------------------|------------------------|
| 1     | oklch(98% 0.04 85)     | oklch(12% 0.04 85)     |
| 2     | oklch(94% 0.07 85)     | oklch(20% 0.07 85)     |
| 3     | oklch(88% 0.10 85)     | oklch(30% 0.10 85)     |
| 4     | oklch(80% 0.13 85)     | oklch(40% 0.13 85)     |
| 5     | oklch(70% 0.16 85)     | oklch(50% 0.16 85)     |
| 6     | oklch(60% 0.19 85)     | oklch(60% 0.19 85)     |
| 7     | oklch(50% 0.22 85)     | oklch(70% 0.22 85)     |
| 8     | oklch(40% 0.22 85)     | oklch(80% 0.22 85)     |
| 9     | oklch(30% 0.19 85)     | oklch(88% 0.19 85)     |
| 10    | oklch(20% 0.16 85)     | oklch(94% 0.16 85)     |
| 11    | oklch(12% 0.13 85)     | oklch(98% 0.13 85)     |

### Error
| Scale | Light                  | Dark                   |
|-------|------------------------|------------------------|
| 1     | oklch(98% 0.03 30)     | oklch(12% 0.03 30)     |
| 2     | oklch(94% 0.06 30)     | oklch(20% 0.06 30)     |
| 3     | oklch(88% 0.09 30)     | oklch(30% 0.09 30)     |
| 4     | oklch(80% 0.12 30)     | oklch(40% 0.12 30)     |
| 5     | oklch(70% 0.15 30)     | oklch(50% 0.15 30)     |
| 6     | oklch(60% 0.18 30)     | oklch(60% 0.18 30)     |
| 7     | oklch(50% 0.21 30)     | oklch(70% 0.21 30)     |
| 8     | oklch(40% 0.21 30)     | oklch(80% 0.21 30)     |
| 9     | oklch(30% 0.18 30)     | oklch(88% 0.18 30)     |
| 10    | oklch(20% 0.15 30)     | oklch(94% 0.15 30)     |
| 11    | oklch(12% 0.12 30)     | oklch(98% 0.12 30)     |

### Transparent
| Token         | Value         |
|---------------|--------------|
| transparent   | transparent  |

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
| color.transparent    | transparent          | Transparent elements         |

> Map semantic roles to palette tokens for easier usage and future-proofing.

---

- Ensure all palettes (primary, neutral, success, warning, error, etc.) are documented in this format, using only OKLCH values.
- For all other scales (spacing, radii, etc.), use 1–x indexing, with `none` or `full` as special values where appropriate.
- Reference `/tokens/theme-mapping.md` for theme switching.
