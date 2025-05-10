# Shadows Tokens

This file defines the shadow scale for the design system. All values use a 1–x scale.

## Shadows
| Token           | OKLCH Value                | Usage Example         |
|-----------------|---------------------------|-----------------------|
| shadow.1        | 0 1px 2px oklch(0.9 0 0)   | Subtle shadow (inputs, buttons) |
| shadow.2        | 0 2px 8px oklch(0.85 0 0)  | Card shadow           |
| shadow.3        | 0 4px 16px oklch(0.8 0 0)  | Modal, popover shadow |

## Usage Guidelines
- Use `shadow.1` for subtle elevation (inputs, buttons).
- Use `shadow.2` for cards and surfaces that need separation.
- Use `shadow.3` for modals, popovers, and overlays.
- Extend with `shadow.4+` if your UI needs more depth.
- Use only the 1–x scale for shadows.
