## Checkout
A block for displaying the checkout process, including forms, summary, and payment actions.
- **Id:** Checkout
- **Appearance:** Multi-step form or summary with order details, payment, and confirmation.
- **Behavior:** Guides user through checkout steps, validates input, and processes payment.
- **Components:**
  - [Form](../components/Form.md)
  - [Button](../components/Button.md)
  - [DataTable](../components/DataTable.md)
- **Used in pages:**
  - [Checkout](../pages/Checkout.md)
  - [OrderHistory](../pages/OrderHistory.md)

---

### Token Usage
The following table lists all design tokens used by the Checkout block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Checkout background                |
| Text         | color.neutral.12  | Form and summary text              |
| Button       | color.primary.7   | Action button background           |
| Border       | color.border.2    | Section and input border           |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Checkout variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard checkout with form and summary.     | User enters info and reviews order.        | All above           |       |
| WithSteps     | Multi-step checkout process.                 | Progress bar and step navigation.          | All above           |       |
| WithPromo     | Checkout with promo code input.              | Allows entering promo codes.               | All above           |       |

---

### States
Checkout states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of checkout.        | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Error     | Validation error shown.            | Border, Text          |
| Disabled  | Button or input is disabled.       | Button, Text          |

---

### Accessibility
Accessibility features and requirements for Checkout:
- Keyboard navigation: Tab to each input and button, Enter/Space to submit.
- ARIA roles/attributes: form, alert, and required fields.
- Color contrast: Sufficient for all text, buttons, and borders.
- Focus indicator: Visible and uses the focus token.
