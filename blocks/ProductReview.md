## ProductReview
A block for displaying user reviews and ratings for a product.
- **Id:** ProductReview
- **Appearance:** List or card of reviews with user info, rating, and comments.
- **Behavior:** Shows reviews, allows sorting/filtering, may allow adding a review.
- **Components:**
  - [Rating](../components/Rating.md)
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Product](../pages/Product.md)
  - [Reviews](../pages/Reviews.md)

---

### Token Usage
The following table lists all design tokens used by the ProductReview block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Review card background             |
| Text         | color.neutral.12  | Review text                        |
| Rating       | color.warning.7   | Star rating color                  |
| Border       | color.border.2    | Card border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ProductReview variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard review list.                        | Static list of reviews.                    | All above           |       |
| WithSorting   | Reviews can be sorted/filtered.              | Sorting/filter controls.                   | All above           |       |
| WithForm      | Allows adding a new review.                  | Review form below list.                    | All above           |       |

---

### States
ProductReview states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of reviews.         | All above             |
| Focused   | Button or input is focused.        | Focus Ring            |
| Selected  | Review is selected.                | Background, Border    |

---

### Accessibility
Accessibility features and requirements for ProductReview block:
- Keyboard navigation: Tab to reviews and controls, Enter/Space to activate.
- ARIA roles/attributes: list, listitem, button, and rating.
- Color contrast: Sufficient for all text, ratings, and borders.
- Focus indicator: Visible and uses the focus token.
