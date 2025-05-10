# Border Tokens

This file defines the border width, style, and color tokens for the design system. All values use a 1–x scale where possible.

## Border Width
| Token           | Value (px) | Usage Example         |
|-----------------|------------|-----------------------|
| border.1        | 1          | Default border        |
| border.2        | 2          | Emphasized border     |
| border.3        | 4          | Divider, strong       |
| border.none     | 0          | No border             |

## Border Style
| Token           | Value      | Usage Example         |
|-----------------|-----------|-----------------------|
| border.solid    | solid     | Default, most elements|
| border.dashed   | dashed    | Dividers, highlights  |
| border.dotted   | dotted    | Decorative, focus     |

## Border Color Palettes
- Use color tokens from `/tokens/color.md` for all border colors.
- Example palettes (see `/tokens/color.md` for full values):
  - `color.primary.5` (blue border)
  - `color.neutral.5` (default border)
  - `color.success.5` (success border)
  - `color.warning.5` (warning border)
  - `color.error.5` (error border)

## Usage Guidelines
- Use `border.1` for most elements.
- Use `border.2` for emphasis or selected states.
- Use `border.3` for strong dividers.
- Use `border.none` for no border.
- Use only the 1–x scale for border width. Use `none` for no border.
- For border radius, see `/tokens/corner-radius.md`.
- For full palette values, see `/tokens/color.md` and `/tokens/theme-mapping.md`.
