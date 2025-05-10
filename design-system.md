# NovyUI Design System

## Purpose & Principles
- Modern, accessible, blue-based UI inspired by Preline and shadcn.
- Consistency, scalability, and accessibility as core values.
- Designed for both web implementation and Penpot design system.

## Tokenization
- All visual properties (color, spacing, corner radius, typography, etc.) use tokens from `/tokens`.
- No hardcoded values in components, blocks, or pages.
- Tokens use a unified 1–x scale for consistency across the system.

## Theming
- Supports both light and dark themes.
- Each color token can be mapped to a light and dark value (see `/tokens/color.md`).
- Theme switching is handled via CSS variables, Penpot styles, or JavaScript.
- All components and blocks must use tokens for themeable properties.

## Component Guidelines
- All components must reference tokens for appearance and states (see `/tokens`).
- Document all states (default, hover, active, disabled, focus) and which tokens change.
- Accessibility and keyboard support are required for every component (see `### Accessibility` in component docs).
- Use only tokens for spacing, color, radius, shadow, typography, and z-index.

## Documentation Structure
- Component, block, and page documentation must follow the templates and rules in `doc-structure.md`.
- All references (blocks in pages, components in blocks, etc.) must use correct relative paths and be kept in sync.
- Every item must be listed in its respective table of contents file (`components.md`, `blocks.md`, `pages.md`).

## Directory Structure Example

```
design-system.md
tokens/
  color.md
  corner-radius.md
  shadows.md
  spacing.md
  typography.md
  z-index.md
  borders.md (optional)
  opacity.md (optional)
  theme-mapping.md (optional)
components/
  Button.md
  Input.md
  ...
blocks/
  ...
pages/
  ...
```

## Theming & Token Switching
- Document how to switch between light and dark themes in `/tokens/color.md` or `theme-mapping.md`.
- For each color token, show both light and dark values, or reference how to do this in code or Penpot.

## Next Steps
- Reference these guidelines in all new component, block, and page documentation.
- Expand `/tokens` as needed for new design needs (e.g., add `borders.md`, `opacity.md`, or `theme-mapping.md`).
- Keep all documentation and tokens up to date as the system evolves.
