## Cart
A block for displaying the user's shopping cart with items, totals, and actions.
- **Id:** Cart
- **Appearance:** List of cart items, subtotal, and checkout button.
- **Behavior:** Allows item removal, quantity adjustment, and checkout initiation.
- **Components:**
  - [DataTable](../components/DataTable.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Cart](../pages/Cart.md)
  - [Checkout](../pages/Checkout.md)

---

### Token Usage
The following table lists all design tokens used by the Cart block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Cart background                    |
| Text         | color.neutral.12  | Item and label text                |
| Button       | color.primary.7   | Checkout and action button         |
| Border       | color.border.2    | Cart border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Cart variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard cart with item list and checkout.   | User can adjust quantity, remove items.    | All above           |       |
| MiniCart      | Compact cart for quick view.                 | Shows summary and quick actions.           | All above           |       |
| WithPromo     | Cart with promo code input.                  | Allows entering promo codes.               | All above           |       |

---

### States
Cart states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of cart.            | All above             |
| Focused   | Button or input is focused.        | Focus Ring            |
| Empty     | Cart is empty.                     | Background, Text      |
| Disabled  | Button is disabled.                | Button                |

---

### Accessibility
Accessibility features and requirements for Cart:
- Keyboard navigation: Tab to each item, button, and input; Enter/Space to activate.
- ARIA roles/attributes: list, listitem, button, and alert for errors.
- Color contrast: Sufficient for all text, buttons, and borders.
- Focus indicator: Visible and uses the focus token.
