# Theme Mapping Tokens

This file documents how each color token maps to light and dark theme values. Use this as a reference for implementing theme switching in both code and design tools like Penpot.

## Example: Primary (Blue) Palette
| Token               | Light Value           | Dark Value            |
|---------------------|----------------------|----------------------|
| color.primary.1     | oklch(98% 0.01 250)  | oklch(20% 0.01 250)  |
| color.primary.2     | oklch(95% 0.03 250)  | oklch(25% 0.03 250)  |
| color.primary.3     | oklch(90% 0.05 250)  | oklch(30% 0.05 250)  |
| color.primary.4     | oklch(85% 0.07 250)  | oklch(35% 0.07 250)  |
| color.primary.5     | oklch(75% 0.10 250)  | oklch(45% 0.10 250)  |
| color.primary.6     | oklch(65% 0.13 250)  | oklch(55% 0.13 250)  |
| color.primary.7     | oklch(55% 0.16 250)  | oklch(65% 0.16 250)  |
| color.primary.8     | oklch(45% 0.16 250)  | oklch(75% 0.16 250)  |
| color.primary.9     | oklch(35% 0.14 250)  | oklch(85% 0.14 250)  |
| color.primary.10    | oklch(25% 0.12 250)  | oklch(90% 0.12 250)  |
| color.primary.11    | oklch(15% 0.10 250)  | oklch(98% 0.10 250)  |

> Repeat this mapping for all palettes (neutral, success, warning, error, etc.)

## Usage
- Use these mappings to implement theme switching in CSS, JS, or Penpot.
- Reference these values in component documentation for clarity.
