## Data Table
📊 A component for displaying and interacting with tabular data in rows and columns.
- **Id:** DataTable
- **Appearance:** A table with rows and columns, headers, and optional borders or stripes. May include sorting icons, filters, pagination controls, and action buttons.
- **Behavior:** Displays tabular data. Supports sorting, filtering, pagination, row selection, and inline actions. Columns may be resizable or reorderable.
- **Used in blocks:**
  - [DataTable](../blocks/DataTable.md)

---

### Token Usage
The following table lists all design tokens used by the Data Table component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Table background           |
| Text        | color.neutral.12  | Table text color           |
| Border      | color.border.2    | Table border               |
| Header      | color.primary.7   | Header background          |
| Focus Ring  | color.focus.1     | Focus indicator for cells  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Data Table variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple data table          | Basic table layout                         | Background, Text, Border   | Default  |
| WithHeader    | Includes header row        | Displays header background                 | Header, Background, Border |          |
| WithActions   | Includes action buttons    | Displays action controls                   | Background, Border, Text   |          |
| WithSelection | Row selection enabled      | Allows row selection                       | Background, Border, Text   |          |

---

### States
Data Table states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Table is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Cell is focused via keyboard                     | Focus Ring, Border          |
| Selected             | Row is selected                                  | Background, Text            |
| Disabled             | Table is not interactive                         | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, header uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Data Table:
- Use semantic table markup (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<td>`, `<th>`).
- Use ARIA roles/attributes as appropriate (e.g., `role="table"`, `aria-selected`).
- Announce row/column selection to screen readers.
- Support keyboard navigation (Tab, Arrow keys, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Data Table must be operable with assistive technologies and screen readers.
