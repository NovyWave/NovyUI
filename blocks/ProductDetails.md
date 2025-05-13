## ProductDetails
A block for displaying detailed information about a product, including images, description, and actions.
- **Id:** ProductDetails
- **Appearance:** Section with product image, title, description, price, and action buttons.
- **Behavior:** Allows users to view product info and interact (e.g., add to cart).
- **Components:**
  - [Image](../components/Image.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Product](../pages/Product.md)
  - [Cart](../pages/Cart.md)

---

### Token Usage
The following table lists all design tokens used by the ProductDetails block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Product details background         |
| Text         | color.neutral.12  | Product title and description      |
| Price        | color.success.7   | Price text color                   |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ProductDetails variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard product details section.            | Static info and actions.                   | All above           |       |
| WithGallery   | Includes image gallery.                      | Multiple images with navigation.           | All above           |       |
| WithReviews   | Includes product reviews.                    | Review section below details.              | All above           |       |

---

### States
ProductDetails states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of product.         | All above             |
| Focused   | Button or image is focused.        | Focus Ring            |
| Selected  | Product is selected.               | Background, Border    |

---

### Accessibility
Accessibility features and requirements for ProductDetails block:
- Keyboard navigation: Tab to buttons and images, Enter/Space to activate.
- ARIA roles/attributes: region, button, and image.
- Color contrast: Sufficient for all text, price, and borders.
- Focus indicator: Visible and uses the focus token.
