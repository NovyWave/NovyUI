## ProductPage
A page for viewing product details and submitting reviews.
- **Id:** ProductPage
- **Appearance:** Product information, images, reviews, and review submission form. May include add-to-cart button and user-uploaded review images.
- **Behavior:** User can view product details, submit reviews (with optional images), and add to cart. Reviews are displayed with ratings and may include images.
- **Blocks:**
  - [ProductDetails](../blocks/ProductDetails.md)
  - [ProductReview](../blocks/ProductReview.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the ProductPage page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Product/card border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ProductPage variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| ProductDetails| Product information with reviews, add-to-cart, and review images. | View details, submit reviews, add to cart. | All above           |       |

---

### States
ProductPage states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of product page.     | All above             |
| Focused   | Button or input is focused.         | Focus Ring            |
| Selected  | Review or product is selected.      | Border, Text          |

---

### Accessibility
Accessibility features and requirements for ProductPage:
- Keyboard navigation: Tab to all product info and controls, Enter/Space to activate.
- ARIA roles/attributes: region, button, img, form.
- Color contrast: Sufficient for all text, product info, and controls.
- Focus indicator: Visible and uses the focus token.
