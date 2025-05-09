## Rating
⭐ A control for displaying or collecting user ratings, typically with stars or icons.
- **Id:** Rating
- **Appearance:** A row of stars or custom icons, filled to indicate value. May show numeric value or label.
- **Behavior:** Clicking or hovering sets the rating. Supports read-only and interactive modes. May allow half or custom increments.
- **Used in blocks:**
  - [ProductReview](../blocks/ProductReview.md)
### Accessibility
- Use `role="radiogroup"` and `role="radio"` for stars/icons.
- Announce selected rating to screen readers.
- Support keyboard navigation and selection.

### Variants
#### Rating - **Stars**
- **Id:** Stars
- **Appearance:** Star icons.
- **Behavior:** Indicates rating with stars.
#### Rating - **Custom icons**
- **Id:** CustomIcons
- **Appearance:** Custom icons.
- **Behavior:** Indicates rating with custom icons.
#### Rating - **Read-only**
- **Id:** ReadOnly
- **Appearance:** Read-only display.
- **Behavior:** Static rating display.
