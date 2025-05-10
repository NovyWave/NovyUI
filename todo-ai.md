# TODO: Update Documentation Structure and Enforcement First

> **Note:** You should create scripts in the `scripts/temp/` folder to automate and enforce many of these tasks. For each todo below, consider if it can be scripted. Mark todos that can be automated with `[scriptable:ID]` for easier tracking and future automation, where `ID` is a unique identifier that will also be used for the TypeScript script filename (e.g., `enforce-token-usage-table.ts`).

- [ ] **Update doc-structure.md** [scriptable:enforce-doc-structure]
  - [ ] Update the documentation rules and templates in `doc-structure.md` to require:
    - [ ] A "Token Usage" table in every component file, listing all relevant UI parts, the token used, and a short description. [scriptable:enforce-token-usage-table]
    - [ ] Explicit state/variant token documentation for all components, blocks, and pages. [scriptable:enforce-state-variant-docs]
    - [ ] An expanded accessibility section for all components, blocks, and pages (keyboard navigation, ARIA, contrast, focus indicators). [scriptable:enforce-accessibility-section]
    - [ ] Consistent use of tokens for all visual properties (color, spacing, radius, shadow, etc.) in all documentation. [scriptable:enforce-token-consistency]
    - [ ] No hardcoded values for visual properties in documentation. [scriptable:enforce-no-hardcoded-values]
    - [ ] (Optional) Token usage table for complex blocks/pages. [scriptable:enforce-block-page-token-table]
    - [ ] All references (blocks in pages, components in blocks, etc.) must use correct relative paths and be kept in sync. [scriptable:enforce-reference-sync]
    - [ ] Every item must be listed in its respective table of contents file (`components.md`, `blocks.md`, `pages.md`). [scriptable:enforce-toc-listing]
    - [ ] The rules must be clear, strict, and enforceable even if not all files are updated yet. [scriptable:enforce-doc-structure-strictness]
  - [ ] **Ensure all changes preserve the existing file style:**
    - [ ] Do not break or remove any `<!-- RULE:... -->` comments, templates, or formatting in `doc-structure.md`.
    - [ ] Integrate new requirements using the same style and conventions as the rest of the file (e.g., add new rules as `<!-- RULE:... -->` blocks, update templates in-place, etc.).
    - [ ] If adding new sections, use the same heading and comment conventions as existing sections.
    - [ ] Review the file after changes to confirm style and structure are consistent.

- [ ] **Update scripts/enforce-doc-structure.ts** [scriptable:update-enforcement-script]
  - [ ] Update the enforcement script to check for the new requirements:
    - [ ] Presence of a "Token Usage" table in each component file. [scriptable:enforce-token-usage-table]
    - [ ] Explicit documentation of states and variants with token references in all components, blocks, and pages. [scriptable:enforce-state-variant-docs]
    - [ ] Expanded accessibility section with required details in all components, blocks, and pages. [scriptable:enforce-accessibility-section]
    - [ ] Consistent use of tokens for all visual properties (color, spacing, radius, shadow, etc.). [scriptable:enforce-token-consistency]
    - [ ] No hardcoded values for visual properties in documentation. [scriptable:enforce-no-hardcoded-values]
    - [ ] (Optional) Token usage table for complex blocks/pages. [scriptable:enforce-block-page-token-table]
    - [ ] All references (blocks in pages, components in blocks, etc.) must use correct relative paths and be kept in sync. [scriptable:enforce-reference-sync]
    - [ ] Every item must be listed in its respective table of contents file (`components.md`, `blocks.md`, `pages.md`). [scriptable:enforce-toc-listing]
    - [ ] The script should be as strict as possible, flagging any files that do not comply, even if not all files are updated yet. [scriptable:enforce-strictness]
    - [ ] The script should provide clear error messages and suggestions for fixing violations. [scriptable:enforce-error-messages]
  - [ ] **Ensure all script changes preserve the existing enforcement logic and style:**
    - [ ] Do not break or remove any existing rule checks, error reporting conventions, or file structure in `enforce-doc-structure.ts`.
    - [ ] Integrate new checks using the same code style, error message format, and modular structure as the rest of the script.
    - [ ] If adding new checks, use the same naming and organization conventions as existing checks.
    - [ ] Review the script after changes to confirm style and structure are consistent.

---

# TODO: Update Component Documentation for Design System Compliance

This checklist tracks the steps to update all component documentation in `/components` to align with the NovyUI design system and token usage standards. Check off each item as you complete it.

---

- [ ] **Review and Finalize Design Tokens**
  - [ ] Ensure all design tokens in `/tokens` are present, consistent, and ready for direct use in Penpot or web development. [scriptable:review-tokens]
  - [ ] Confirm that all color palettes (primary, neutral, success, warning, error) are fully defined in `color.md` and mapped in `theme-mapping.md`. [scriptable:review-color-palettes]
  - [ ] Confirm that all other token files (`corner-radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `z-index.md`, `borders.md`, `opacity.md`) include usage guidelines, semantic mappings, and cross-references as needed. [scriptable:review-other-tokens]
  - [ ] If you add or change tokens in the future, update both the token files and this checklist. [scriptable:enforce-token-checklist-sync]

---

- [ ] **Expand the Component Template**
  - [ ] For each component markdown file in `/components`, update the documentation template as follows: [scriptable:enforce-component-template]
    - [ ] Add a "Token Usage" Table after the **Appearance** or before the **Variants** section. [scriptable:enforce-token-usage-table]
      - [ ] The table should list all relevant UI parts, the token used, and a short description. [scriptable:enforce-token-usage-table-structure]
      - [ ] Example:
        | Part        | Token Example      | Description                |
        |-------------|-------------------|----------------------------|
        | Background  | color.primary.7   | Main button background     |
        | Text        | color.neutral.11  | Button label               |
        | Border      | color.primary.5   | Border color               |
        | Radius      | radii.2           | Border radius              |
        | Shadow      | shadow.1          | Button shadow              |
    - [ ] Document States & Variants: [scriptable:enforce-state-variant-docs]
      - [ ] Explicitly list all UI states (default, hover, active, disabled, focus, etc.). [scriptable:enforce-state-listing]
      - [ ] For each state, specify which tokens change and how (e.g., background, border, text color). [scriptable:enforce-state-token-mapping]
      - [ ] For variants, describe how token usage differs from the default. [scriptable:enforce-variant-token-mapping]
      - [ ] Example:
        - **Default:**  
          - Background: `color.primary.7`
          - Text: `color.neutral.11`
        - **Hover:**  
          - Background: `color.primary.8`
        - **Active:**  
          - Background: `color.primary.9`
        - **Disabled:**  
          - Background: `color.neutral.3`
          - Text: `color.neutral.7`
        - **Outline Variant:**  
          - Border: `color.primary.7`
          - Background: `color.transparent`
    - [ ] Expand Accessibility Section: [scriptable:enforce-accessibility-section]
      - [ ] Clearly document:
        - Keyboard navigation (tab order, shortcuts, etc.) [scriptable:enforce-accessibility-keyboard]
        - ARIA roles and attributes [scriptable:enforce-accessibility-aria]
        - Color contrast and focus indicators (with token references) [scriptable:enforce-accessibility-contrast-focus]
        - Any additional accessibility considerations [scriptable:enforce-accessibility-other]
    - [ ] Reference Tokens Consistently: [scriptable:enforce-token-consistency]
      - [ ] Ensure all visual properties (color, spacing, radius, shadow, etc.) are described using tokens from `/tokens`. [scriptable:enforce-token-reference]
      - [ ] Avoid hardcoded values in documentation. [scriptable:enforce-no-hardcoded-values]
    - [ ] Maintain Template Consistency: [scriptable:enforce-template-consistency]
      - [ ] Ensure all component files follow the same expanded template for clarity and maintainability. [scriptable:enforce-template-uniformity]

---

- [ ] **Review and Cross-Reference**
  - [ ] After updating, cross-reference each component’s documentation with the relevant tokens in `/tokens` to ensure accuracy. [scriptable:enforce-token-crossref]
  - [ ] Make sure all referenced tokens exist and are up to date. [scriptable:enforce-token-exists]

---

- [ ] **Prepare for Enforcement**
  - [ ] Ensure the new documentation structure aligns with the rules in `doc-structure.md` and can be checked by your enforcement script. [scriptable:enforce-doc-structure-alignment]

---

- [ ] **Update Block & Page Documentation**
  - [ ] Update all `/blocks` and `/pages` markdown files to: [scriptable:enforce-block-page-template]
    - Reference which components/blocks are used. [scriptable:enforce-block-page-references]
    - Describe layout, spacing, and responsive behavior using tokens. [scriptable:enforce-block-page-layout-tokens]
    - (Optional) Add a token usage table for complex blocks/pages. [scriptable:enforce-block-page-token-table]
    - Document states/variants and accessibility where relevant. [scriptable:enforce-block-page-states-accessibility]

---

- [ ] **Review Directory Structure**
  - [ ] Ensure your directory structure matches the recommended layout in `design-system.md`. [scriptable:enforce-directory-structure]

---

- [ ] **Final Review**
  - [ ] Review all documentation (components, blocks, pages) for token accuracy, completeness, and consistency. [scriptable:enforce-final-review]
  - [ ] Cross-reference with `/tokens` to ensure all tokens used are defined and up to date. [scriptable:enforce-final-token-crossref]

---

**Summary:**
You will add a "Token Usage" table, explicitly document states and variants with token changes, expand the accessibility section for every component markdown file, and update both `doc-structure.md` and the enforcement script to match and enforce these new standards.
