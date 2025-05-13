## DataTable
A block for displaying tabular data with sorting, filtering, and pagination.
- **Id:** DataTable
- **Appearance:** Table with header, rows, and optional controls for sorting/filtering.
- **Behavior:** Supports sorting, filtering, pagination, and row selection.
- **Components:**
  - [DataTable](../components/DataTable.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Admin](../pages/Admin.md)
  - [Dashboard](../pages/Dashboard.md)

---

### Token Usage
The following table lists all design tokens used by the DataTable block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Table background                   |
| Text         | color.neutral.12  | Table text                         |
| Header       | color.surface.2   | Table header background            |
| Border       | color.border.2    | Table border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported DataTable variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard table with sorting/filtering.       | User can sort/filter columns.              | All above           |       |
| WithPagination| Table with pagination controls.              | User can navigate pages.                   | All above           |       |
| Selectable    | Table with row selection.                    | User can select rows.                      | All above           |       |

---

### States
DataTable states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of table.           | All above             |
| Focused   | Row or control is focused.         | Focus Ring            |
| Selected  | Row is selected.                   | Background, Border    |
| Disabled  | Control is disabled.               | Text, Border          |

---

### Accessibility
Accessibility features and requirements for DataTable:
- Keyboard navigation: Tab to cells and controls, Arrow keys to move, Enter/Space to select.
- ARIA roles/attributes: table, row, cell, columnheader, and grid.
- Color contrast: Sufficient for all text, backgrounds, and borders.
- Focus indicator: Visible and uses the focus token.
