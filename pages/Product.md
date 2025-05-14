## Product
A product details page displaying information about a single product, including images, description, price, reviews, and purchase options.
- **Id:** Product
- **Appearance:** Product images, description, price, reviews, and purchase options.
- **Behavior:** Allows users to view product details, add to cart, and read reviews. May include image carousel and feature comparison.
- **Blocks:**
  - [ProductDetails](../blocks/ProductDetails.md)
  - [ProductReview](../blocks/ProductReview.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Product page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Product/card border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Product variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Details       | Product details with images and info.        | Images, description, price, reviews.       | All above           |       |
| Comparison    | Product comparison with other products.      | Feature comparison, reviews.               | All above           |       |

---

### States
Product states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of product.         | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Selected  | Product is selected.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Product:
- Keyboard navigation: Tab to all product info and controls, Enter/Space to activate.
- ARIA roles/attributes: region, button, img, table.
- Color contrast: Sufficient for all text, product info, and controls.
- Focus indicator: Visible and uses the focus token.
