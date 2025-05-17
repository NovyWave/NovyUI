# Border Style Tokens

This file documents the border style tokens for the design system. Use these tokens for consistent border styles across all components.

## Tokens
| Token               | Value    | Usage Example                |
|---------------------|----------|------------------------------|
| borderStyle.solid   | solid    | Default, most elements       |
| borderStyle.dashed  | dashed   | Dividers, highlights         |
| borderStyle.dotted  | dotted   | Decorative, focus indicators |

## Usage Guidelines
- Use `borderStyle.solid` for most UI elements and buttons.
- Use `borderStyle.dashed` for outlines, dividers, or special states.
- Use `borderStyle.dotted` for decorative or focus states.
- Use with `borderWidth` and color tokens for full border control.

## Example
```js
// Usage in a component style
borderStyle: tokens.value.borderStyle.solid
```

See `/tokens/border-width.md` for border width tokens and `/tokens/color.md` for border color tokens.
