# NovyUI Design System

## Purpose & Principles
- Modern, accessible, blue-based UI inspired by Preline and shadcn.
- Consistency, scalability, and accessibility as core values.
- Designed for both web implementation and Penpot design system.

## Tokenization
- All visual properties (color, spacing, corner radius, typography, etc.) use tokens from `/tokens`.
- No hardcoded values in components, blocks, or pages.
- Tokens use a unified 1–x scale for consistency across the system.
- All color palettes (primary, neutral, success, warning, error) are fully defined in `color.md` and mapped for light/dark in `theme-mapping.md`.
- All other token files (`corner-radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `z-index.md`, `borders.md`, `opacity.md`) include usage guidelines, semantic mappings, and cross-references as needed.

## Theming
- Supports both light and dark themes.
- Each color token is mapped to a light and dark value (see `/tokens/theme-mapping.md`).
- Theme switching is handled via CSS variables, Penpot styles, or JavaScript.
- All components and blocks must use tokens for themeable properties.

## Component Guidelines
- All components must reference tokens for appearance and states (see `/tokens`).
- Document all states (default, hover, active, disabled, focus) and which tokens change.
- Accessibility and keyboard support are required for every component (see `### Accessibility` in component docs).
- Use only tokens for spacing, color, radius, shadow, typography, and z-index.
- Each component documentation must include:
  - A "Token Usage" table listing all relevant UI parts, the token used, and a short description.
  - Explicit documentation of all states and variants, specifying which tokens change.
  - An expanded accessibility section (keyboard navigation, ARIA, contrast, focus indicators).

## Block & Page Guidelines
- All blocks and pages must reference which components/blocks are used.
- Layout, spacing, and responsive behavior must be described using tokens.
- (Optional) Add a token usage table for complex blocks/pages.
- Document states/variants and accessibility where relevant.

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
  borders.md
  opacity.md
  theme-mapping.md
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
- Document how to switch between light and dark themes in `/tokens/theme-mapping.md`.
- For each color token, show both light and dark values, or reference how to do this in code or Penpot.

## Next Steps
- Reference these guidelines in all new component, block, and page documentation.
- Expand `/tokens` as needed for new design needs.
- Keep all documentation and tokens up to date as the system evolves.
- Use the checklist in `todo-ai.md` to track and enforce compliance.
