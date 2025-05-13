## Pagination
📄 A navigation control for dividing content into discrete pages and moving between them.
- **Id:** Pagination
- **Appearance:** A horizontal row of page numbers, arrows, and optional jump or page size controls. Current page is highlighted.
- **Behavior:** Clicking a number or arrow navigates to that page. Supports keyboard navigation and dynamic page range.
- **Used in blocks:**
  - [DataTable](../blocks/DataTable.md)

---

### Token Usage
The following table lists all design tokens used by the Pagination component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Pagination background      |
| Text        | color.neutral.12  | Pagination text color      |
| Border      | color.border.2    | Pagination border          |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for pagination |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Pagination variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple pagination          | Basic page navigation                      | Background, Text, Border   | Default  |
| WithIcons     | Includes icons             | Displays icon content                      | Icon, Background, Border   |          |
| WithInput     | Includes input             | Allows direct page entry                   | Background, Border, Text   |          |

---

### States
Pagination states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Pagination is visible, not focused or selected   | Background, Text, Border    |
| Focus                | Pagination is focused via keyboard               | Focus Ring, Border          |
| Disabled             | Pagination is not interactive                    | Disabled, Border            |
| Active               | Current page is active                           | Background, Border, Text    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Pagination:
- Use ARIA roles (`navigation`, `list`, `listitem`, `button`).
- Announce current page and navigation to screen readers.
- Support keyboard navigation and activation (Tab, Arrow keys, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Pagination must be operable with assistive technologies and screen readers.
