# NovyUI Automation & Documentation TODOs

## Guidelines
- Do not edit too many files one by one (e.g., components, pages, blocks) manually. Use scripts to automate bulk changes and enforcement wherever possible, as manual editing is too slow and you have limited usage. Prioritize scriptable automation for all repetitive or large-scale updates.
- If you are not sure about file content or codebase structure pertaining to the user’s request, use your tools to read files and gather the relevant information: do NOT guess or make up an answer.
- You MUST plan extensively before each function call, and reflect extensively on the outcomes of the previous function calls. DO NOT do this entire process by making function calls only, as this can impair your ability to solve the problem and think insightfully.
- Mark todos that can be automated with `[scriptable:ID]` and specify script paths.
- Always update the script path if a script is moved or renamed.

## Table of Contents
1. Documentation Structure
2. Enforcement Scripts
3. Component/Block/Page Templates
4. Token Management
5. SvelteKit/Svelte 5 Integration & LLM Instructions
6. Penpot Export/Mapping
7. CI & Automation
8. Script Documentation in README
9. Review & Maintenance

---

## 1. Documentation Structure

- [ ] 1. **Update doc-structure.md** [scriptable:enforce-doc-structure]
  - [ ] 1.1 Update the documentation rules and templates in `doc-structure.md` to require:
    - [ ] 1.1.1 A "Token Usage" table in every component file, listing all relevant UI parts, the token used, and a short description. [scriptable:enforce-token-usage-table]
    - [ ] 1.1.2 Explicit state/variant token documentation for all components, blocks, and pages. [scriptable:enforce-state-variant-docs]
    - [ ] 1.1.3 An expanded accessibility section for all components, blocks, and pages (keyboard navigation, ARIA, contrast, focus indicators). [scriptable:enforce-accessibility-section]
    - [ ] 1.1.4 Consistent use of tokens for all visual properties (color, spacing, radius, shadow, etc.) in all documentation. [scriptable:enforce-token-consistency]
    - [ ] 1.1.5 No hardcoded values for visual properties in documentation. [scriptable:enforce-no-hardcoded-values]
    - [ ] 1.1.6 (Optional) Token usage table for complex blocks/pages. [scriptable:enforce-block-page-token-table]
    - [ ] 1.1.7 All references (blocks in pages, components in blocks, etc.) must use correct relative paths and be kept in sync. [scriptable:enforce-reference-sync]
    - [ ] 1.1.8 Every item must be listed in its respective table of contents file (`components.md`, `blocks.md`, `pages.md`). [scriptable:enforce-toc-listing]
    - [ ] 1.1.9 The rules must be clear, strict, and enforceable even if not all files are updated yet. [scriptable:enforce-doc-structure-strictness]
  - [ ] 1.2 **Ensure all changes preserve the existing file style:**
    - [ ] 1.2.1 Do not break or remove any `<!-- RULE:... -->` comments, templates, or formatting in `doc-structure.md`.
    - [ ] 1.2.2 Integrate new requirements using the same style and conventions as the rest of the file (e.g., add new rules as `<!-- RULE:... -->` blocks, update templates in-place, etc.).
    - [ ] 1.2.3 If adding new sections, use the same heading and comment conventions as existing sections.
    - [ ] 1.2.4 Review the file after changes to confirm style and structure are consistent.
  - [ ] 1.3 **Synchronize with Component/Block/Page Templates**
    - [ ] 1.3.1 Whenever changes are made to documentation structure or templates, ensure corresponding updates are made in both this section and Section 3 (Component/Block/Page Templates), and vice versa. Cross-reference changes and keep both sections in sync. [scriptable:sync-doc-structure-templates]

---

## 2. Enforcement Scripts

- [ ] 2. **Update scripts/enforce-doc-structure.ts** [scriptable:update-enforcement-script]
  - [ ] 2.1 Update the enforcement script to check for the new requirements:
    - [ ] 2.1.1 Presence of a "Token Usage" table in each component file. [scriptable:enforce-token-usage-table]
    - [ ] 2.1.2 Explicit documentation of states and variants with token references in all components, blocks, and pages. [scriptable:enforce-state-variant-docs]
    - [ ] 2.1.3 Expanded accessibility section with required details in all components, blocks, and pages. [scriptable:enforce-accessibility-section]
    - [ ] 2.1.4 Consistent use of tokens for all visual properties (color, spacing, radius, shadow, etc.). [scriptable:enforce-token-consistency]
    - [ ] 2.1.5 No hardcoded values for visual properties in documentation. [scriptable:enforce-no-hardcoded-values]
    - [ ] 2.1.6 (Optional) Token usage table for complex blocks/pages. [scriptable:enforce-block-page-token-table]
    - [ ] 2.1.7 All references (blocks in pages, components in blocks, etc.) must use correct relative paths and be kept in sync. [scriptable:enforce-reference-sync]
    - [ ] 2.1.8 Every item must be listed in its respective table of contents file (`components.md`, `blocks.md`, `pages.md`). [scriptable:enforce-toc-listing]
    - [ ] 2.1.9 The script should be as strict as possible, flagging any files that do not comply, even if not all files are updated yet. [scriptable:enforce-strictness]
    - [ ] 2.1.10 The script should provide clear error messages and suggestions for fixing violations. [scriptable:enforce-error-messages]
  - [ ] 2.2 **Ensure all script changes preserve the existing enforcement logic and style:**
    - [ ] 2.2.1 Do not break or remove any existing rule checks, error reporting conventions, or file structure in `enforce-doc-structure.ts`.
    - [ ] 2.2.2 Integrate new checks using the same code style, error message format, and modular structure as the rest of the script.
    - [ ] 2.2.3 If adding new checks, use the same naming and organization conventions as existing checks.
    - [ ] 2.2.4 Review the script after changes to confirm style and structure are consistent.

---

## 3. Component/Block/Page Templates

> **Note:** Any changes to component/block/page documentation requirements or templates must also be reflected in Section 1 (Documentation Structure) to ensure enforcement and automation remain in sync. See related [scriptable:enforce-doc-structure] and [scriptable:enforce-component-template] todos.

This section tracks all requirements and automation tasks for the templates and documentation of components, blocks, and pages. All sub-tasks are scriptable and must be enforced via automation scripts.

- [ ] 3. **Review and Finalize Design Tokens**
  - [ ] 3.1 Ensure all design tokens in `/tokens` are present, consistent, and ready for direct use in Penpot or web development. [scriptable:review-tokens]
  - [ ] 3.2 Confirm that all color palettes (primary, neutral, success, warning, error) are fully defined in `color.md` and mapped in `theme-mapping.md`. [scriptable:review-color-palettes]
  - [ ] 3.3 Confirm that all other token files (`corner-radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `z-index.md`, `borders.md`, `opacity.md`) include usage guidelines, semantic mappings, and cross-references as needed. [scriptable:review-other-tokens]
  - [ ] 3.4 If you add or change tokens in the future, update both the token files and this checklist. [scriptable:enforce-token-checklist-sync]

- [ ] 4. **Expand the Component Template**
  - [ ] 4.1 For each component markdown file in `/components`, update the documentation template as follows: [scriptable:enforce-component-template]
    - [ ] 4.1.1 Add a "Token Usage" Table after the **Appearance** or before the **Variants** section. [scriptable:enforce-token-usage-table]
      - [ ] 4.1.1.1 The table should list all relevant UI parts, the token used, and a short description. [scriptable:enforce-token-usage-table-structure]
      - [ ] 4.1.1.2 Example:
        | Part        | Token Example      | Description                |
        |-------------|-------------------|----------------------------|
        | Background  | color.primary.7   | Main button background     |
        | Text        | color.neutral.11  | Button label               |
        | Border      | color.primary.5   | Border color               |
        | Radius      | radii.2           | Border radius              |
        | Shadow      | shadow.1          | Button shadow              |
    - [ ] 4.1.2 Document States & Variants: [scriptable:enforce-state-variant-docs]
      - [ ] 4.1.2.1 Explicitly list all UI states (default, hover, active, disabled, focus, etc.). [scriptable:enforce-state-listing]
      - [ ] 4.1.2.2 For each state, specify which tokens change and how (e.g., background, border, text color). [scriptable:enforce-state-token-mapping]
      - [ ] 4.1.2.3 For variants, describe how token usage differs from the default. [scriptable:enforce-variant-token-mapping]
      - [ ] 4.1.2.4 Example:
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
    - [ ] 4.1.3 Expand Accessibility Section: [scriptable:enforce-accessibility-section]
      - [ ] 4.1.3.1 Clearly document:
        - [ ] 4.1.3.1.1 Keyboard navigation (tab order, shortcuts, etc.) [scriptable:enforce-accessibility-keyboard]
        - [ ] 4.1.3.1.2 ARIA roles and attributes [scriptable:enforce-accessibility-aria]
        - [ ] 4.1.3.1.3 Color contrast and focus indicators (with token references) [scriptable:enforce-accessibility-contrast-focus]
        - [ ] 4.1.3.1.4 Any additional accessibility considerations [scriptable:enforce-accessibility-other]
    - [ ] 4.1.4 Reference Tokens Consistently: [scriptable:enforce-token-consistency]
      - [ ] 4.1.4.1 Ensure all visual properties (color, spacing, radius, shadow, etc.) are described using tokens from `/tokens`. [scriptable:enforce-token-reference]
      - [ ] 4.1.4.2 Avoid hardcoded values in documentation. [scriptable:enforce-no-hardcoded-values]
    - [ ] 4.1.5 Maintain Template Consistency: [scriptable:enforce-template-consistency]
      - [ ] 4.1.5.1 Ensure all component files follow the same expanded template for clarity and maintainability. [scriptable:enforce-template-uniformity]

- [ ] 5. **Review and Cross-Reference**
  - [ ] 5.1 After updating, cross-reference each component’s documentation with the relevant tokens in `/tokens` to ensure accuracy. [scriptable:enforce-token-crossref]
  - [ ] 5.2 Make sure all referenced tokens exist and are up to date. [scriptable:enforce-token-exists]

- [ ] 6. **Prepare for Enforcement**
  - [ ] 6.1 Ensure the new documentation structure aligns with the rules in `doc-structure.md` and can be checked by your enforcement script. [scriptable:enforce-doc-structure-alignment]

- [ ] 7. **Update Block & Page Documentation**
  - [ ] 7.1 Update all `/blocks` and `/pages` markdown files to: [scriptable:enforce-block-page-template]
    - [ ] 7.1.1 Reference which components/blocks are used. [scriptable:enforce-block-page-references]
    - [ ] 7.1.2 Describe layout, spacing, and responsive behavior using tokens. [scriptable:enforce-block-page-layout-tokens]
    - [ ] 7.1.3 (Optional) Add a token usage table for complex blocks/pages. [scriptable:enforce-block-page-token-table]
    - [ ] 7.1.4 Document states/variants and accessibility where relevant. [scriptable:enforce-block-page-states-accessibility]

- [ ] 8. **Review Directory Structure**
  - [ ] 8.1 Ensure your directory structure matches the recommended layout in `design-system.md`. [scriptable:enforce-directory-structure]

- [ ] 9. **Final Review**
  - [ ] 9.1 Review all documentation (components, blocks, pages) for token accuracy, completeness, and consistency. [scriptable:enforce-final-review]
  - [ ] 9.2 Cross-reference with `/tokens` to ensure all tokens used are defined and up to date. [scriptable:enforce-final-token-crossref]

- [ ] 10. **Synchronize with Documentation Structure**
  - [ ] 10.1 Whenever changes are made to component/block/page templates or documentation structure, ensure corresponding updates are made in both this section and Section 1 (Documentation Structure), and vice versa. Cross-reference changes and keep both sections in sync. [scriptable:sync-doc-structure-templates]

---

## 5. SvelteKit/Svelte 5 Integration & LLM Instructions

- [ ] 11. **Svelte LLM Instructions Loading**
  - [ ] 11.1 Add a script to load Svelte LLM instructions (https://svelte.dev/docs/llms) into memory, maximizing the instruction size within Svelte/SvelteKit/TypeScript limits. [scriptable:load-svelte-llm-instructions] (`scripts/load-svelte-llm-instructions.ts`)
  - [ ] 11.2 Document any Svelte/SvelteKit/TypeScript configuration or runtime limits that affect instruction size, and provide guidance for maintainers. [scriptable:llm-instructions-limits-doc]
  - [ ] 11.3 Add a checklist item to review and update the loading logic as Svelte or LLM capabilities evolve. [scriptable:llm-instructions-review]

- [ ] 12. **Create SvelteKit App for NovyUI**
  - [ ] 12.1 Add a script or documented process to scaffold a new SvelteKit app with TypeScript and all required dependencies for NovyUI. [scriptable:create-sveltekit-app] (`scripts/create-sveltekit-app.ts`)
  - [ ] 12.2 Add todos for configuring SvelteKit for design token usage, LLM instructions, and NovyUI integration. [scriptable:configure-sveltekit]
  - [ ] 12.3 Document the setup and configuration process in the main README. [scriptable:document-sveltekit-setup]

- [ ] 13. **SvelteKit/Svelte 5 + TypeScript Integration**
  - [ ] 13.1 For each token file, provide a code example for consuming the tokens in SvelteKit/Svelte 5 with TypeScript (e.g., as TypeScript modules, SCSS variables, or CSS custom properties). [scriptable:token-svelte-usage-examples]
  - [ ] 13.2 Add a script to generate Svelte/SvelteKit-compatible token files (TypeScript, JS, SCSS, CSS custom properties). [scriptable:generate-sveltekit-tokens] (`scripts/generate-sveltekit-tokens.ts`)
  - [ ] 13.3 Document how to keep tokens in sync between design (Penpot) and code (SvelteKit). [scriptable:token-sync-process]

---

## 6. Penpot Export/Mapping

- [ ] 12. **Penpot File Format & Export/Import Automation**
  - [ ] 12.1 Review the Penpot source code (https://github.com/penpot/penpot), the Penpot Exporter Figma Plugin (https://github.com/penpot/penpot-exporter-figma-plugin), and the Penpot import/export documentation (https://help.penpot.app/user-guide/import-export/) to understand the .penpot file format. [scriptable:review-penpot-format]
  - [ ] 12.2 If documentation is insufficient, reverse-engineer the .penpot file format by inspecting manually created Penpot files. [scriptable:reverse-engineer-penpot-format]
  - [ ] 12.3 Document findings and update automation scripts for Penpot export/import accordingly. [scriptable:document-penpot-format]

- [ ] 13. **Component/Block/Page Visual Parity & Live Examples**
  - [ ] 13.1 For each component, block, and page, add a visual reference or Penpot link to the canonical design. [scriptable:add-penpot-link]
  - [ ] 13.2 Add a checklist item to verify that the SvelteKit implementation matches the Penpot design for all states and variants. [scriptable:visual-parity-check]
  - [ ] 13.3 For each component, block, and page, provide a live interactive example in the documentation website (SvelteKit). [scriptable:live-example-sveltekit]
  - [ ] 13.4 Ensure all live examples demonstrate all documented states and variants. [scriptable:live-example-states-variants]

---

## 7. CI & Automation

- [ ] 13. **Token Coverage & Completeness**
  - [ ] 13.1 Add a script to check that every visual property in every component/block/page is covered by a token (no gaps). [scriptable:enforce-token-coverage] (`scripts/enforce-token-coverage.ts`)
  - [ ] 13.2 Add a script to check for unused tokens and flag them for review. [scriptable:enforce-unused-tokens] (`scripts/enforce-unused-tokens.ts`)

- [ ] 14. **Accessibility Tokens**
  - [ ] 14.1 Ensure that tokens for focus indicators, contrast, and ARIA-related styling are explicitly documented and mapped for both web and Penpot. [scriptable:enforce-accessibility-tokens]

- [ ] 15. **Design System Versioning**
  - [ ] 15.1 Add a version field to each token file and to the design system documentation. [scriptable:enforce-token-versioning] (`scripts/enforce-token-versioning.ts`)
  - [ ] 15.2 Add a changelog section to each token file and to the design system documentation. [scriptable:enforce-token-changelog] (`scripts/enforce-token-changelog.ts`)

- [ ] 16. **Automation & CI**
  - [ ] 16.1 Add a script or CI job to run all enforcement scripts and fail the build if any rule is broken. [scriptable:ci-enforcement] (`scripts/ci-enforcement.ts`)
  - [ ] 16.2 Document how to run all enforcement and generation scripts locally and in CI. [scriptable:enforcement-docs]

---

## 8. Script Documentation in README

- [ ] 17. **Script Documentation in Main README**
  - [ ] 17.1 Document every script listed above in the main `README.md`, including:
    - [ ] 17.1.1 When to run each script (e.g., before commit, in CI, after updating tokens, etc.).
    - [ ] 17.1.2 How to run each script (command line examples, required arguments, etc.).
    - [ ] 17.1.3 Requirements for running each script (e.g., Deno version, Node.js, SvelteKit project setup, etc.).
    - [ ] 17.1.4 Brief description of what each script does and what files it affects.
    - [ ] 17.1.5 Keep this documentation up to date as scripts are added or changed. [scriptable:enforce-script-readme-docs]

---

## 9. Review & Maintenance

- [ ] Review this file and all sections regularly for completeness, accuracy, and up-to-date automation priorities.

---

**Summary:**
All documentation, enforcement, and automation tasks should be managed and tracked here. Prioritize automation and scriptable solutions for all repetitive or large-scale changes. Use the guidelines above for best practices.
