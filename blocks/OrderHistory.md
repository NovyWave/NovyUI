## OrderHistory
A block for displaying a user's past orders in a list or table format.
- **Id:** OrderHistory
- **Appearance:** Table or list with order details, dates, and statuses.
- **Behavior:** Allows users to view, filter, and interact with past orders.
- **Components:**
  - [DataTable](../components/DataTable.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Profile](../pages/Profile.md)
  - [Orders](../pages/Orders.md)

---

### Token Usage
The following table lists all design tokens used by the OrderHistory block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Table/list background              |
| Text         | color.neutral.12  | Order details text                 |
| Status       | color.success.7   | Status indicator color             |
| Border       | color.border.2    | Table/list border                  |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported OrderHistory variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard order list/table.                   | Static display of orders.                  | All above           |       |
| WithFilters   | Includes filters for date/status.            | Filter controls above list.                | All above           |       |
| WithActions   | Includes actions (e.g., reorder, view).      | Action buttons for each order.             | All above           |       |

---

### States
OrderHistory states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of orders.          | All above             |
| Focused   | Row or button is focused.          | Focus Ring            |
| Selected  | Order is selected.                 | Background, Border    |

---

### Accessibility
Accessibility features and requirements for OrderHistory block:
- Keyboard navigation: Tab to rows and actions, Enter/Space to activate.
- ARIA roles/attributes: table, row, cell, button, and status.
- Color contrast: Sufficient for all text, statuses, and borders.
- Focus indicator: Visible and uses the focus token.
