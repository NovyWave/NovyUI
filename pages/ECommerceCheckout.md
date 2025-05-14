## ECommerceCheckout
A page for completing the purchase process in an e-commerce flow.
- **Id:** ECommerceCheckout
- **Appearance:** Checkout form with order summary, payment, and shipping details.
- **Behavior:** Allows users to review and confirm purchase, enter payment/shipping info, and place order.
- **Blocks:**
  - [Cart](../blocks/Cart.md)
  - [Checkout](../blocks/Checkout.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the ECommerceCheckout page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ECommerceCheckout variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Standard      | Standard checkout process.                   | Forms, order summary, confirmation.        | All above           |       |
| Express       | Express checkout with minimal steps.         | Fewer forms, quick confirmation.           | All above           |       |

---

### States
ECommerceCheckout states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of checkout.        | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Error     | Error message shown.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for ECommerceCheckout:
- Keyboard navigation: Tab to all fields and buttons, Enter/Space to submit.
- ARIA roles/attributes: form, input, button, region.
- Color contrast: Sufficient for all text, forms, and buttons.
- Focus indicator: Visible and uses the focus token.
