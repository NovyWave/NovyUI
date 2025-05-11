# NovyUI Automation & Documentation TODOs

## Guidelines
- Do not edit too many files one by one (e.g., components, pages, blocks) manually. Use scripts to automate bulk changes and enforcement wherever possible, as manual editing is too slow and you have limited usage. Prioritize scriptable automation for all repetitive or large-scale updates.
- If you are not sure about file content or codebase structure pertaining to the user’s request, use your tools to read files and gather the relevant information: do NOT guess or make up an answer.
- You MUST plan extensively before each function call, and reflect extensively on the outcomes of the previous function calls. DO NOT do this entire process by making function calls only, as this can impair your ability to solve the problem and think insightfully.
- Mark todos that can be automated with `[scriptable:ID]` and specify script paths.
- Always update the script path if a script is moved or renamed.

## Table of Contents
1. Icons, Fonts, and Asset Tokens & Files
2. Documentation Structure
3. Enforcement Scripts
4. Component/Block/Page Templates
5. Token Management
6. SvelteKit/Svelte 5 Integration & LLM Instructions
7. Penpot Export/Mapping
8. CI & Automation
9. Script Documentation in README
10. Review & Maintenance

---

### 1. Icons, Fonts, and Asset Tokens & Files
- [x] 1.1 Define design tokens for all icons, fonts, and other assets (e.g., icon names, font families, font weights, asset types) in `/tokens` as markdown files with clear tables and usage guidelines. [scriptable:define-asset-tokens]
- [x] 1.2 Add or generate the actual icon, font, and asset files in a dedicated `/assets` directory, ensuring all referenced assets are present and versioned. [scriptable:add-asset-files]
- [ ] 1.3 Document the process for adding new icons, fonts, and assets, including naming conventions, file formats, and update workflow. [scriptable:document-asset-process]
  - [ ] 1.3.1 Document naming conventions for all asset types (e.g., kebab-case for icons, font family-weight-style for fonts).
  - [ ] 1.3.2 Specify required file formats for each asset type (e.g., .svg for icons, .woff2 for fonts).
  - [ ] 1.3.3 Describe the directory structure for assets (e.g., `/assets/icons`, `/assets/fonts`).
  - [ ] 1.3.4 Outline the workflow for adding, reviewing, and updating assets and tokens (including updating token markdown files).
  - [ ] 1.3.5 Add cross-references to relevant token files and documentation.
- [ ] 1.4 Add enforcement scripts to check that all asset tokens have corresponding files and vice versa. [scriptable:asset-token-file-enforcer] (`scripts/asset-token-file-enforcer.ts`)

---

### 1.3 Asset Addition & Update Process [scriptable:document-asset-process]

**Adding or Updating Icons, Fonts, and Assets:**

1. **Naming Conventions:**
   - **Icons:** Use kebab-case (e.g., `arrow-left.svg`).
   - **Fonts:** Use `family-weight-style` (e.g., `inter-4-normal.woff2`, `jetbrains-mono-7-bold.woff2`).
   - **Other Assets:** Use descriptive, kebab-case names.
2. **File Formats:**
   - **Icons:** `.svg` (preferred), optionally `.png` for raster assets.
   - **Fonts:** `.woff2` (required), `.woff` (optional fallback).
   - **Other Assets:** Use open, web-friendly formats (e.g., `.webp`, `.png`).
3. **Directory Structure:**
   - Place icons in `/assets/icons/`.
   - Place fonts in `/assets/fonts/`.
   - Place other assets in `/assets/` or a relevant subdirectory.
4. **Token File Updates:**
   - Add a new row to the relevant token markdown file (`icons.md`, `fonts.md`, etc.) for each new asset.
   - Ensure the table entry matches the file name and describes the asset.
   - Update usage guidelines if conventions change.
5. **Review & Approval:**
   - All asset additions/updates must be reviewed for naming, format, and documentation compliance.
   - Use enforcement scripts to check for missing or orphaned assets/tokens.
6. **Cross-References:**
   - Reference this process in all relevant token files and documentation.

---

## 2. Documentation Structure

- [ ] 2.1 **Update doc-structure.md** [scriptable:enforce-doc-structure]
  - [ ] 2.1.1 Update the documentation rules and templates in `doc-structure.md` to require:
    - [ ] 2.1.1.1 A "Token Usage" table in every component file, listing all relevant UI parts, the token used, and a short description. [scriptable:token-usage-table-enforcer]
    - [ ] 2.1.1.2 Explicit state/variant token documentation for all components, blocks, and pages. [scriptable:state-variant-docs-enforcer]
    - [ ] 2.1.1.3 An expanded accessibility section for all components, blocks, and pages (keyboard navigation, ARIA, contrast, focus indicators). [scriptable:accessibility-section-enforcer]
    - [ ] 2.1.1.4 Consistent use of tokens for all visual properties (color, spacing, radius, shadow, etc.) in all documentation. [scriptable:token-consistency-enforcer]
    - [ ] 2.1.1.5 No hardcoded values for visual properties in documentation. [scriptable:no-hardcoded-values-enforcer]
    - [ ] 2.1.1.6 (Optional) Token usage table for complex blocks/pages. [scriptable:block-page-token-table-enforcer]
    - [ ] 2.1.1.7 All references (blocks in pages, components in blocks, etc.) must use correct relative paths and be kept in sync. [scriptable:reference-sync-enforcer]
    - [ ] 2.1.1.8 Every item must be listed in its respective table of contents file (`components.md`, `blocks.md`, `pages.md`). [scriptable:toc-listing-enforcer]
    - [ ] 2.1.1.9 The rules must be clear, strict, and enforceable even if not all files are updated yet. [scriptable:doc-structure-strictness-enforcer]
  - [ ] 2.1.2 **Ensure all changes preserve the existing file style:**
    - [ ] 2.1.2.1 Do not break or remove any `<!-- RULE:... -->` comments, templates, or formatting in `doc-structure.md`.
    - [ ] 2.1.2.2 Integrate new requirements using the same style and conventions as the rest of the file (e.g., add new rules as `<!-- RULE:... -->` blocks, update templates in-place, etc.).
    - [ ] 2.1.2.3 If adding new sections, use the same heading and comment conventions as existing sections.
    - [ ] 2.1.2.4 Review the file after changes to confirm style and structure are consistent.
  - [ ] 2.1.3 **Synchronize with Component/Block/Page Templates**
    - [ ] 2.1.3.1 Whenever changes are made to documentation structure or templates, ensure corresponding updates are made in both this section and Section 4 (Component/Block/Page Templates), and vice versa. Cross-reference changes and keep both sections in sync. [scriptable:sync-doc-structure-templates]

---

## 3. Enforcement Scripts

- [ ] 3.1 **Update scripts/doc-structure-enforcer.ts** [scriptable:update-script-enforcer]
  - [ ] 3.1.1 Update the enforcement script to check for the new requirements:
    - [ ] 3.1.1.1 Presence of a "Token Usage" table in each component file. [scriptable:token-usage-table-enforcer]
    - [ ] 3.1.1.2 Explicit documentation of states and variants with token references in all components, blocks, and pages. [scriptable:state-variant-docs-enforcer]
    - [ ] 3.1.1.3 Expanded accessibility section with required details in all components, blocks, and pages. [scriptable:accessibility-section-enforcer]
    - [ ] 3.1.1.4 Consistent use of tokens for all visual properties (color, spacing, radius, shadow, etc.). [scriptable:token-consistency-enforcer]
    - [ ] 3.1.1.5 No hardcoded values for visual properties in documentation. [scriptable:no-hardcoded-values-enforcer]
    - [ ] 3.1.1.6 (Optional) Token usage table for complex blocks/pages. [scriptable:block-page-token-table-enforcer]
    - [ ] 3.1.1.7 All references (blocks in pages, components in blocks, etc.) must use correct relative paths and be kept in sync. [scriptable:reference-sync-enforcer]
    - [ ] 3.1.1.8 Every item must be listed in its respective table of contents file (`components.md`, `blocks.md`, `pages.md`). [scriptable:toc-listing-enforcer]
    - [ ] 3.1.1.9 The script should be as strict as possible, flagging any files that do not comply, even if not all files are updated yet. [scriptable:strictness-enforcer]
    - [ ] 3.1.1.10 The script should provide clear error messages and suggestions for fixing violations. [scriptable:error-messages-enforcer]
  - [ ] 3.1.2 **Ensure all script changes preserve the existing enforcement logic and style:**
    - [ ] 3.1.2.1 Do not break or remove any existing rule checks, error reporting conventions, or file structure in `doc-structure-enforcer.ts`.
    - [ ] 3.1.2.2 Integrate new checks using the same code style, error message format, and modular structure as the rest of the script.
    - [ ] 3.1.2.3 If adding new checks, use the same naming and organization conventions as existing checks.
    - [ ] 3.1.2.4 Review the script after changes to confirm style and structure are consistent.

---

## 4. Component/Block/Page Templates

> **Note:** Any changes to component/block/page documentation requirements or templates must also be reflected in Section 2 (Documentation Structure) to ensure enforcement and automation remain in sync. See related [scriptable:enforce-doc-structure] and [scriptable:enforce-component-template] todos.

This section tracks all requirements and automation tasks for the templates and documentation of components, blocks, and pages. All sub-tasks are scriptable and must be enforced via automation scripts.

- [ ] 4.1 **Review and Finalize Design Tokens**
  - [ ] 4.1.1 Ensure all design tokens in `/tokens` are present, consistent, and ready for direct use in Penpot or web development. [scriptable:review-tokens]
  - [ ] 4.1.2 Confirm that all color palettes (primary, neutral, success, warning, error) are fully defined in `color.md` and mapped in `theme-mapping.md`. [scriptable:review-color-palettes]
  - [ ] 4.1.3 Confirm that all other token files (`corner-radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `z-index.md`, `borders.md`, `opacity.md`) include usage guidelines, semantic mappings, and cross-references as needed. [scriptable:review-other-tokens]
  - [ ] 4.1.4 If you add or change tokens in the future, update both the token files and this checklist. [scriptable:enforce-token-checklist-sync]

- [ ] 4.2 **Expand the Component Template**
  - [ ] 4.2.1 For each component markdown file in `/components`, update the documentation template as follows: [scriptable:enforce-component-template]
    - [ ] 4.2.1.1 Add a "Token Usage" Table after the **Appearance** or before the **Variants** section. [scriptable:token-usage-table-enforcer]
      - [ ] 4.2.1.1.1 The table should list all relevant UI parts, the token used, and a short description. [scriptable:token-usage-table-structure-enforcer]
      - [ ] 4.2.1.1.2 Example:
        | Part        | Token Example      | Description                |
        |-------------|-------------------|----------------------------|
        | Background  | color.primary.7   | Main button background     |
        | Text        | color.neutral.11  | Button label               |
        | Border      | color.primary.5   | Border color               |
        | Radius      | radii.2           | Border radius              |
        | Shadow      | shadow.1          | Button shadow              |
    - [ ] 4.2.1.2 Document States & Variants: [scriptable:state-variant-docs-enforcer]
      - [ ] 4.2.1.2.1 Explicitly list all UI states (default, hover, active, disabled, focus, etc.). [scriptable:state-listing-enforcer]
      - [ ] 4.2.1.2.2 For each state, specify which tokens change and how (e.g., background, border, text color). [scriptable:state-token-mapping-enforcer]
      - [ ] 4.2.1.2.3 For variants, describe how token usage differs from the default. [scriptable:variant-token-mapping-enforcer]
      - [ ] 4.2.1.2.4 Example:
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
    - [ ] 4.2.1.3 Expand Accessibility Section: [scriptable:accessibility-section-enforcer]
      - [ ] 4.2.1.3.1 Clearly document:
        - [ ] 4.2.1.3.1.1 Keyboard navigation (tab order, shortcuts, etc.) [scriptable:accessibility-keyboard-enforcer]
        - [ ] 4.2.1.3.1.2 ARIA roles and attributes [scriptable:accessibility-aria-enforcer]
        - [ ] 4.2.1.3.1.3 Color contrast and focus indicators (with token references) [scriptable:accessibility-contrast-focus-enforcer]
        - [ ] 4.2.1.3.1.4 Any additional accessibility considerations [scriptable:accessibility-other-enforcer]
    - [ ] 4.2.1.4 Reference Tokens Consistently: [scriptable:token-consistency-enforcer]
      - [ ] 4.2.1.4.1 Ensure all visual properties (color, spacing, radius, shadow, etc.) are described using tokens from `/tokens`. [scriptable:token-reference-enforcer]
      - [ ] 4.2.1.4.2 Avoid hardcoded values in documentation. [scriptable:no-hardcoded-values-enforcer]
    - [ ] 4.2.1.5 Maintain Template Consistency: [scriptable:template-consistency-enforcer]
      - [ ] 4.2.1.5.1 Ensure all component files follow the same expanded template for clarity and maintainability. [scriptable:template-uniformity-enforcer]

- [ ] 4.3 **Review and Cross-Reference**
  - [ ] 4.3.1 After updating, cross-reference each component’s documentation with the relevant tokens in `/tokens` to ensure accuracy. [scriptable:token-crossref-enforcer]
  - [ ] 4.3.2 Make sure all referenced tokens exist and are up to date. [scriptable:token-exists-enforcer]

- [ ] 4.4 **Prepare for Enforcement**
  - [ ] 4.4.1 Ensure the new documentation structure aligns with the rules in `doc-structure.md` and can be checked by your enforcement script. [scriptable:doc-structure-alignment-enforcer]

- [ ] 4.5 **Update Block & Page Documentation**
  - [ ] 4.5.1 Update all `/blocks` and `/pages` markdown files to: [scriptable:block-page-template-enforcer]
    - [ ] 4.5.1.1 Reference which components/blocks are used. [scriptable:block-page-references-enforcer]
    - [ ] 4.5.1.2 Describe layout, spacing, and responsive behavior using tokens. [scriptable:block-page-layout-tokens-enforcer]
    - [ ] 4.5.1.3 (Optional) Add a token usage table for complex blocks/pages. [scriptable:block-page-token-table-enforcer]
    - [ ] 4.5.1.4 Document states/variants and accessibility where relevant. [scriptable:block-page-states-accessibility-enforcer]

- [ ] 4.6 **Review Directory Structure**
  - [ ] 4.6.1 Ensure your directory structure matches the recommended layout in `design-system.md`. [scriptable:directory-structure-enforcer]

- [ ] 4.7 **Final Review**
  - [ ] 4.7.1 Review all documentation (components, blocks, pages) for token accuracy, completeness, and consistency. [scriptable:final-review-enforcer]
  - [ ] 4.7.2 Cross-reference with `/tokens` to ensure all tokens used are defined and up to date. [scriptable:final-token-crossref-enforcer]

- [ ] 4.8 **Synchronize with Documentation Structure**
  - [ ] 4.8.1 Whenever changes are made to component/block/page templates or documentation structure, ensure corresponding updates are made in both this section and Section 2 (Documentation Structure), and vice versa. Cross-reference changes and keep both sections in sync. [scriptable:sync-doc-structure-templates]

---

## 5. Token Management

- [ ] 5.1 **Review and Finalize Design Tokens**
  - [ ] 5.1.1 Ensure all design tokens in `/tokens` are present, consistent, and ready for direct use in Penpot or web development. [scriptable:review-tokens]
  - [ ] 5.1.2 Confirm that all color palettes (primary, neutral, success, warning, error) are fully defined in `color.md` and mapped in `theme-mapping.md`. [scriptable:review-color-palettes]
  - [ ] 5.1.3 Confirm that all other token files (`corner-radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `z-index.md`, `borders.md`, `opacity.md`) include usage guidelines, semantic mappings, and cross-references as needed. [scriptable:review-other-tokens]
  - [ ] 5.1.4 If you add or change tokens in the future, update both the token files and this checklist. [scriptable:enforce-token-checklist-sync]

---

## 6. SvelteKit/Svelte 5 Integration & LLM Instructions

- [ ] 6.1 **Svelte LLM Instructions Loading**
  - [ ] 6.1.1 Add a script to load Svelte LLM instructions (https://svelte.dev/docs/llms) into memory, maximizing the instruction size within Svelte/SvelteKit/TypeScript limits. [scriptable:load-svelte-llm-instructions] (`scripts/load-svelte-llm-instructions.ts`)
  - [ ] 6.1.2 Document any Svelte/SvelteKit/TypeScript configuration or runtime limits that affect instruction size, and provide guidance for maintainers. [scriptable:llm-instructions-limits-doc]
  - [ ] 6.1.3 Add a checklist item to review and update the loading logic as Svelte or LLM capabilities evolve. [scriptable:llm-instructions-review]

- [ ] 6.2 **Create SvelteKit App for NovyUI**
  - [ ] 6.2.1 Add a script or documented process to scaffold a new SvelteKit app with TypeScript and all required dependencies for NovyUI. [scriptable:create-sveltekit-app] (`scripts/create-sveltekit-app.ts`)
  - [ ] 6.2.2 Add todos for configuring SvelteKit for design token usage, LLM instructions, and NovyUI integration. [scriptable:configure-sveltekit]
  - [ ] 6.2.3 Document the setup and configuration process in the main README. [scriptable:document-sveltekit-setup]

- [ ] 6.3 **SvelteKit/Svelte 5 + TypeScript Integration**
  - [ ] 6.3.1 For each token file, provide a code example for consuming the tokens in SvelteKit/Svelte 5 with TypeScript (e.g., as TypeScript modules, SCSS variables, or CSS custom properties). [scriptable:token-svelte-usage-examples]
  - [ ] 6.3.2 Add a script to generate Svelte/SvelteKit-compatible token files (TypeScript, JS, SCSS, CSS custom properties). [scriptable:generate-sveltekit-tokens] (`scripts/generate-sveltekit-tokens.ts`)
  - [ ] 6.3.3 Document how to keep tokens in sync between design (Penpot) and code (SvelteKit). [scriptable:token-sync-process]

---

## 7. Penpot Export/Mapping

- [ ] 7.1 **Penpot File Format & Export/Import Automation**
  - [ ] 7.1.1 Review the Penpot source code (https://github.com/penpot/penpot), the Penpot Exporter Figma Plugin (https://github.com/penpot/penpot-exporter-figma-plugin), and the Penpot import/export documentation (https://help.penpot.app/user-guide/import-export/) to understand the .penpot file format. [scriptable:review-penpot-format]
  - [ ] 7.1.2 If documentation is insufficient, reverse-engineer the .penpot file format by inspecting manually created Penpot files. [scriptable:reverse-engineer-penpot-format]
  - [ ] 7.1.3 Document findings and update automation scripts for Penpot export/import accordingly. [scriptable:document-penpot-format]

- [ ] 7.2 **Component/Block/Page Visual Parity & Live Examples**
  - [ ] 7.2.1 For each component, block, and page, add a visual reference or Penpot link to the canonical design. [scriptable:add-penpot-link]
  - [ ] 7.2.2 Add a checklist item to verify that the SvelteKit implementation matches the Penpot design for all states and variants. [scriptable:visual-parity-check]
  - [ ] 7.2.3 For each component, block, and page, provide a live interactive example in the documentation website (SvelteKit). [scriptable:live-example-sveltekit]
  - [ ] 7.2.4 Ensure all live examples demonstrate all documented states and variants. [scriptable:live-example-states-variants]

---

## 8. CI & Automation

- [ ] 8.1 **Token Coverage & Completeness**
  - [ ] 8.1.1 Add a script to check that every visual property in every component/block/page is covered by a token (no gaps). [scriptable:token-coverage-enforcer] (`scripts/token-coverage-enforcer.ts`)
  - [ ] 8.1.2 Add a script to check for unused tokens and flag them for review. [scriptable:unused-tokens-enforcer] (`scripts/unused-tokens-enforcer.ts`)

- [ ] 8.2 **Accessibility Tokens**
  - [ ] 8.2.1 Ensure that tokens for focus indicators, contrast, and ARIA-related styling are explicitly documented and mapped for both web and Penpot. [scriptable:accessibility-tokens-enforcer]

- [ ] 8.3 **Design System Versioning**
  - [ ] 8.3.1 Add a version field to each token file and to the design system documentation. [scriptable:token-versioning-enforcer] (`scripts/token-versioning-enforcer.ts`)
  - [ ] 8.3.2 Add a changelog section to each token file and to the design system documentation. [scriptable:token-changelog-enforcer] (`scripts/token-changelog-enforcer.ts`)

- [ ] 8.4 **Automation & CI**
  - [ ] 8.4.1 Add a script or CI job to run all enforcement scripts and fail the build if any rule is broken. [scriptable:ci-enforcer] (`scripts/ci-enforcer.ts`)
  - [ ] 8.4.2 Document how to run all enforcement and generation scripts locally and in CI. [scriptable:enforcement-docs]

---

## 9. Script Documentation in README

- [ ] 9.1 **Script Documentation in Main README**
  - [ ] 9.1.1 Document every script listed above in the main `README.md`, including:
    - [ ] 9.1.1.1 When to run each script (e.g., before commit, in CI, after updating tokens, etc.).
    - [ ] 9.1.1.2 How to run each script (command line examples, required arguments, etc.).
    - [ ] 9.1.1.3 Requirements for running each script (e.g., Deno version, Node.js, SvelteKit project setup, etc.).
    - [ ] 9.1.1.4 Brief description of what each script does and what files it affects.
    - [ ] 9.1.1.5 Keep this documentation up to date as scripts are added or changed. [scriptable:enforce-script-readme-docs]

---

## 10. Review & Maintenance

- [ ] Review this file and all sections regularly for completeness, accuracy, and up-to-date automation priorities.

---

**Summary:**
All documentation, enforcement, and automation tasks should be managed and tracked here. Prioritize automation and scriptable solutions for all repetitive or large-scale changes. Use the guidelines above for best practices.
