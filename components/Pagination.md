## Pagination
📄 A navigation control for dividing content into discrete pages and moving between them.
- **Id:** Pagination
- **Appearance:** A horizontal row of page numbers, arrows, and optional jump or page size controls. Current page is highlighted.
- **Behavior:** Clicking a number or arrow navigates to that page. Supports keyboard navigation and dynamic page range.
- **Used in blocks:**
  - [DataTable](../blocks/DataTable.md)
### Accessibility
- Use `nav` with `aria-label="pagination"`.
- Ensure all controls are keyboard accessible.
- Announce current page to screen readers.

### Variants
#### Pagination - **Simple**
- **Id:** Simple
- **Appearance:** Simple pagination.
- **Behavior:** Basic page navigation.
#### Pagination - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Pagination - **Jump to page**
- **Id:** JumpToPage
- **Appearance:** Includes jump controls.
- **Behavior:** Jumps to specific page.
#### Pagination - **Page size selector**
- **Id:** PageSizeSelector
- **Appearance:** Includes page size controls.
- **Behavior:** Selects page size.
