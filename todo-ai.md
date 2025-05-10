# TODO: Update Component Documentation for Design System Compliance

This checklist describes the steps to update all component documentation in `/components` to align with the NovyUI design system and token usage standards.

---

## 1. Expand the Component Template

For each component markdown file in `/components`, update the documentation template as follows:

### a. Add a "Token Usage" Table
- Insert a table after the **Appearance** or before the **Variants** section.
- The table should list all relevant UI parts, the token used, and a short description.

**Example:**
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.primary.7   | Main button background     |
| Text        | color.neutral.11  | Button label               |
| Border      | color.primary.5   | Border color               |
| Radius      | radii.2           | Border radius              |
| Shadow      | shadow.1          | Button shadow              |

---

### b. Document States & Variants
- For each component, explicitly list all UI states (default, hover, active, disabled, focus, etc.).
- For each state, specify which tokens change and how (e.g., background, border, text color).
- For variants, describe how token usage differs from the default.

**Example:**
#### States
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

#### Variants
- **Outline:**  
  - Border: `color.primary.7`
  - Background: `color.transparent`

---

### c. Expand Accessibility Section
- Clearly document:
  - Keyboard navigation (tab order, shortcuts, etc.)
  - ARIA roles and attributes
  - Color contrast and focus indicators (with token references)
  - Any additional accessibility considerations

---

### d. Reference Tokens Consistently
- Ensure all visual properties (color, spacing, radius, shadow, etc.) are described using tokens from `/tokens`.
- Avoid hardcoded values in documentation.

---

### e. Maintain Template Consistency
- Ensure all component files follow the same expanded template for clarity and maintainability.

---

## 2. Review and Cross-Reference
- After updating, cross-reference each component’s documentation with the relevant tokens in `/tokens` to ensure accuracy.
- Make sure all referenced tokens exist and are up to date.

---

## 3. Prepare for Enforcement
- Ensure the new documentation structure aligns with the rules in `doc-structure.md` and can be checked by your enforcement script.

---

## 4. Update doc-structure.md
- Update the documentation rules and templates in `doc-structure.md` to require the new "Token Usage" table, explicit state/variant token documentation, and expanded accessibility section for all components.
- Ensure the rules are clear and enforceable.

---

## 5. Update scripts/enforce-doc-structure.ts
- Update the enforcement script to check for the new requirements:
  - Presence of a "Token Usage" table in each component file
  - Explicit documentation of states and variants with token references
  - Expanded accessibility section with required details
- Ensure the script validates all new rules described in `doc-structure.md`.

---

## 6. Update Block & Page Documentation
- Update all `/blocks` and `/pages` markdown files to:
  - Reference which components/blocks are used.
  - Describe layout, spacing, and responsive behavior using tokens.
  - (Optional) Add a token usage table for complex blocks/pages.
  - Document states/variants and accessibility where relevant.

---

## 7. Review Directory Structure
- Ensure your directory structure matches the recommended layout in `design-system.md`.

---

## 8. Final Review
- Review all documentation (components, blocks, pages) for token accuracy, completeness, and consistency.
- Cross-reference with `/tokens` to ensure all tokens used are defined and up to date.

---

**Summary:**
You will add a "Token Usage" table, explicitly document states and variants with token changes, expand the accessibility section for every component markdown file, and update both `doc-structure.md` and the enforcement script to match and enforce these new standards.
