## StickyCartSummary
A block for displaying a persistent cart summary at the bottom or side of the page.
- **Id:** StickyCartSummary
- **Appearance:** Fixed bar or panel with cart total, items, and checkout button.
- **Behavior:** Stays visible as user scrolls, updates in real time.
- **Components:**
  - [Card](../components/Card.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Cart](../pages/Cart.md)
  - [Checkout](../pages/Checkout.md)

---

### Token Usage
The following table lists all design tokens used by the StickyCartSummary block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Summary bar/panel background       |
| Text         | color.neutral.12  | Cart item and total text           |
| Button       | color.primary.7   | Checkout button color              |
| Border       | color.border.2    | Panel border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported StickyCartSummary variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard sticky cart summary.                | Static cart info and checkout button.      | All above           |       |
| WithDiscounts | Shows discounts or promo codes.              | Discount info in summary.                  | All above           |       |
| WithItems     | Shows item thumbnails in summary.            | Item images beside text.                   | All above           |       |

---

### States
StickyCartSummary states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of summary.         | All above             |
| Focused   | Button or item is focused.         | Focus Ring            |
| Highlighted| Summary is highlighted.            | Button, Border        |

---

### Accessibility
Accessibility features and requirements for StickyCartSummary block:
- Keyboard navigation: Tab to button and items, Enter/Space to activate.
- ARIA roles/attributes: region, button, and list.
- Color contrast: Sufficient for all text, buttons, and borders.
- Focus indicator: Visible and uses the focus token.
