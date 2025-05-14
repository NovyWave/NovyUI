## Cart
A page for viewing and managing items in the shopping cart.
- **Id:** Cart
- **Appearance:** List of cart items, totals, and checkout button.
- **Behavior:** Allows users to update quantities, remove items, and proceed to checkout.
- **Blocks:**
  - [Cart](../blocks/Cart.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Cart page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Item border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Cart variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Standard      | Standard cart layout.                        | List of items, totals, checkout button.    | All above           |       |
| MiniCart      | Compact cart for quick view.                 | Small list, subtotal, checkout link.       | All above           |       |

---

### States
Cart states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of cart.            | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Empty     | Cart is empty.                     | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Cart:
- Keyboard navigation: Tab to all items and buttons, Enter/Space to activate.
- ARIA roles/attributes: list, button, region.
- Color contrast: Sufficient for all text, items, and buttons.
- Focus indicator: Visible and uses the focus token.
