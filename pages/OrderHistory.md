## OrderHistory
A page where users can view their past orders, including order details, status, and actions like reordering or tracking shipments.
- **Id:** OrderHistory
- **Appearance:** List or table of past orders, with details, status, and action buttons.
- **Behavior:** Allows users to view, reorder, or track shipments. Supports filtering and sorting.
- **Blocks:**
  - [OrderHistory](../blocks/OrderHistory.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the OrderHistory page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Table/order border                 |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported OrderHistory variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| List          | List of past orders.                         | List view, order details, actions.         | All above           |       |
| Table         | Table of past orders.                        | Table view, order details, actions.        | All above           |       |

---

### States
OrderHistory states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of order history.   | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Selected  | Order is selected.                 | Border, Text          |

---

### Accessibility
Accessibility features and requirements for OrderHistory:
- Keyboard navigation: Tab to all orders and controls, Enter/Space to activate.
- ARIA roles/attributes: table, row, button, region.
- Color contrast: Sufficient for all text, orders, and controls.
- Focus indicator: Visible and uses the focus token.
