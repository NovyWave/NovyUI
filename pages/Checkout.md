## Checkout
A page for reviewing cart items and completing a purchase.
- **Id:** Checkout
- **Appearance:** List of items, totals, payment and shipping forms, and confirmation.
- **Behavior:** Allows users to review, edit, and confirm purchase details.
- **Blocks:**
  - [Cart](../blocks/Cart.md)
  - [Checkout](../blocks/Checkout.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Checkout page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Checkout variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Standard      | Standard checkout process.                   | List of items, forms, confirmation.        | All above           |       |
| Express       | Express checkout with minimal steps.         | Fewer forms, quick confirmation.           | All above           |       |

---

### States
Checkout states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of checkout.        | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Error     | Error message shown.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Checkout:
- Keyboard navigation: Tab to all fields and buttons, Enter/Space to submit.
- ARIA roles/attributes: form, input, button, region.
- Color contrast: Sufficient for all text, forms, and buttons.
- Focus indicator: Visible and uses the focus token.
