# Radii & Shadows Tokens

This file defines the border radius and shadow scales for the design system. All values use a 1–x scale, with `none` and `full` as special values.

## Border Radius
| Token           | Value (px) | Usage Example         |
|-----------------|------------|-----------------------|
| radii.1         | 2          | Subtle rounding       |
| radii.2         | 4          |                       |
| radii.3         | 8          |                       |
| radii.4         | 16         |                       |
| radii.5         | 9999       | Full (circle/pill)    |
| radii.none      | 0          | No rounding           |
| radii.full      | 9999       | Full rounding         |

## Shadows
| Token           | OKLCH Value                | Usage Example         |
|-----------------|---------------------------|-----------------------|
| shadow.1        | 0 1px 2px oklch(0.9 0 0)   | Subtle shadow         |
| shadow.2        | 0 2px 8px oklch(0.85 0 0)  | Card shadow           |
| shadow.3        | 0 4px 16px oklch(0.8 0 0)  | Modal shadow          |

> Use only the 1–x scale for radii and shadows. Use `none` or `full` only for special cases.
