# Corner Radius Tokens

This file defines the corner radius scale for the design system. All values use a 1–x scale, with `none` and `full` as special values.

## Corner Radius
| Token           | Value (px) | Usage Example         |
|-----------------|------------|-----------------------|
| radii.1         | 2          | Subtle rounding (inputs, chips) |
| radii.2         | 4          | Buttons, cards        |
| radii.3         | 8          | Modals, popovers      |
| radii.4         | 16         | Large containers      |
| radii.full      | 9999       | Full (circle/pill)    |
| radii.none      | 0          | No rounding           |

## Usage Guidelines
- Use the lowest radius for subtle rounding (inputs, chips).
- Use `radii.2` for most buttons and cards.
- Use higher values for modals, popovers, or large containers.
- Use `radii.full` for circular or pill-shaped elements.
- Use only the 1–x scale for corner radius. Use `none` or `full` only for special cases.

> For border width and style, see `/tokens/borders.md`.
