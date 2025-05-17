# Border Width Tokens

This file defines the border width tokens for the design system. All values use a 1–x scale where possible.

## Tokens
| Token             | Value (px) | Usage Example         |
|-------------------|------------|----------------------|
| borderWidth.1     | 1          | Default border       |
| borderWidth.2     | 2          | Emphasized border    |
| borderWidth.3     | 4          | Divider, strong      |
| borderWidth.none  | 0          | No border            |

## Usage Guidelines
- Use `borderWidth.1` for most elements.
- Use `borderWidth.2` for emphasis or selected states.
- Use `borderWidth.3` for strong dividers.
- Use `borderWidth.none` for no border.

## Border Color Palettes
- Use color tokens from `/tokens/color.md` for all border colors.
- Example palettes (see `/tokens/color.md` for full values):
  - `color.primary.5` (blue border)
  - `color.neutral.5` (default border)
  - `color.success.5` (success border)
  - `color.warning.5` (warning border)
  - `color.error.5` (error border)

See `/tokens/border-style.md` for border style tokens and `/tokens/color.md` for border color tokens.
