## ECommerce
A page for browsing and purchasing products online.
- **Id:** ECommerce
- **Appearance:** Product grid or list, filters, and shopping cart.
- **Behavior:** Allows users to browse, filter, and add products to cart. Supports sorting, pagination, and responsive layout.
- **Blocks:**
  - [ProductFilters](../blocks/ProductFilters.md)
  - [ProductPage](../blocks/ProductPage.md)
  - [Cart](../blocks/Cart.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the ECommerce page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Product/card border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ECommerce variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| ProductGrid   | Grid of products.                            | Product cards, filters, add to cart.       | All above           |       |
| ProductList   | List of products.                            | List view, filters, add to cart.           | All above           |       |

---

### States
ECommerce states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of products.        | All above             |
| Focused   | Product or button is focused.      | Focus Ring            |
| Selected  | Product is selected.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for ECommerce:
- Keyboard navigation: Tab to all products and controls, Enter/Space to activate.
- ARIA roles/attributes: list, button, region.
- Color contrast: Sufficient for all text, products, and controls.
- Focus indicator: Visible and uses the focus token.
