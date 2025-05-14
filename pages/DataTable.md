## DataTable
A data-centric page for displaying tables or lists with filtering, sorting, and actions.
- **Id:** DataTable
- **Appearance:** A page with a data table or list, filters, and actions. May include pagination, search, and bulk actions. Table rows and columns may include action buttons and inline editing.
- **Behavior:** Supports sorting, filtering, pagination, selection, and inline actions. Responsive layout for mobile.
- **Blocks:**
  - [DataTable](../blocks/DataTable.md)
  - [TableOfContents](../blocks/TableOfContents.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the DataTable page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Table background                   |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Table border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported DataTable variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| DataTable     | Table with rows and columns of data.         | Filters, actions, sorting.                 | All above           |       |
| ListWithActions| List of items with action buttons.          | Inline actions on list items.              | All above           |       |
| FilterableAndSortableTable| Table with filters and sorting.    | Filtering and sorting of data.             | All above           |       |

---

### States
DataTable states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of table.           | All above             |
| Focused   | Row, cell, or button is focused.   | Focus Ring            |
| Selected  | Row or item is selected.           | Border, Text          |

---

### Accessibility
Accessibility features and requirements for DataTable:
- Keyboard navigation: Tab to all rows, cells, and controls, Enter/Space to activate.
- ARIA roles/attributes: table, row, cell, button, region.
- Color contrast: Sufficient for all text, table elements, and controls.
- Focus indicator: Visible and uses the focus token.
