# Shadow Size Tokens

This file defines the shadow offset/blur scale for the design system. Combine with a shadow color for full shadow definition.

## Shadow Sizes
| Token         | Value           | Usage Example                      |
|--------------|-----------------|-------------------------------------|
| shadowSize.1 | 0 1px 2px       | Subtle shadow (inputs, buttons)     |
| shadowSize.2 | 0 2px 8px       | Card shadow                        |
| shadowSize.3 | 0 4px 16px      | Modal, popover shadow               |
| shadowSize.focus | 0 0 0 4px   | Focus ring for interactive elements |

## Usage Guidelines
- Use `shadowSize.1` for subtle elevation (inputs, buttons).
- Use `shadowSize.2` for cards and surfaces that need separation.
- Use `shadowSize.3` for modals, popovers, and overlays.
- Use `shadowSize.focus` for focus rings on buttons, inputs, and interactive elements.
- Compose with a shadow color for the final shadow value.
