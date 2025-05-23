# Opacity Tokens

This file defines the opacity scale for the design system. All values use a 1–x scale.

## Opacity
| Token           | Value   | Usage Example         |
|-----------------|---------|-----------------------|
| opacity.none    | 0       | Fully transparent     |
| opacity.1       | 0.04    | Disabled, subtle      |
| opacity.2       | 0.08    | Overlay, subtle       |
| opacity.3       | 0.16    | Overlay, medium       |
| opacity.4       | 0.32    | Overlay, strong       |
| opacity.5       | 0.64    | Hover, active         |
| opacity.6       | 0.8     | Focus, highlight      |
| opacity.opaque  | 1       | Fully opaque          |

## Usage Guidelines
- Use `opacity.none` for fully transparent elements.
- Use `opacity.1`–`opacity.3` for overlays and disabled states.
- Use `opacity.5`–`opacity.6` for hover and focus states.
- Use `opacity.opaque` for fully opaque elements.
- Use only the 1–x scale for opacity.

## Disabled/Loading Color
- Use `color.neutral.5` for disabled backgrounds and borders (a blueish cold gray for harmony with the primary palette).
- Use `color.neutral.7` for disabled text (a blueish cold gray, slightly darker for contrast).
