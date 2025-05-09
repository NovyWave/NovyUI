## Data Table
📊 A component for displaying and interacting with tabular data in rows and columns.
- **Id:** DataTable
- **Appearance:** A table with rows and columns, headers, and optional borders or stripes. May include sorting icons, filters, pagination controls, and action buttons.
- **Behavior:** Displays tabular data. Supports sorting, filtering, pagination, row selection, and inline actions. Columns may be resizable or reorderable.
- **Used in blocks:**
  - [DataTable](../blocks/DataTable.md)
### Accessibility
- Use semantic `<table>`, `<th>`, `<tr>`, `<td>` elements.
- Provide table captions and summaries.
- Support keyboard navigation for rows and cells.
- Announce sorting/filtering changes.

### Variants
#### Data Table - **Basic**
- **Id:** Basic
- **Appearance:** Simple table.
- **Behavior:** Basic table display.
#### Data Table - **Filtering**
- **Id:** Filtering
- **Appearance:** Includes filter controls.
- **Behavior:** Filters table data.
#### Data Table - **Sorting**
- **Id:** Sorting
- **Appearance:** Includes sorting icons.
- **Behavior:** Sorts table data.
#### Data Table - **Pagination**
- **Id:** Pagination
- **Appearance:** Includes pagination controls.
- **Behavior:** Paginates table data.
#### Data Table - **Row selection**
- **Id:** RowSelection
- **Appearance:** Supports row selection.
- **Behavior:** Selects table rows.
#### Data Table - **With actions**
- **Id:** WithActions
- **Appearance:** Includes action buttons.
- **Behavior:** Supports inline actions.
#### Data Table - **Sortable**
- **Id:** Sortable
- **Appearance:** Supports column sorting.
- **Behavior:** Sorts table columns.
#### Data Table - **Advanced table**
- **Id:** AdvancedTable
- **Appearance:** Advanced table features.
- **Behavior:** Supports advanced table interactions.
