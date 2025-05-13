## Testimonials
A block for displaying user testimonials or reviews in a carousel or grid.
- **Id:** Testimonials
- **Appearance:** Cards or slides with testimonial text, author, and optional image.
- **Behavior:** Rotates or displays multiple testimonials, may include navigation.
- **Components:**
  - [Carousel](../components/Carousel.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Testimonials](../pages/Testimonials.md)

---

### Token Usage
The following table lists all design tokens used by the Testimonials block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Card/slide background              |
| Text         | color.neutral.12  | Testimonial and author text        |
| Border       | color.border.2    | Card/slide border                  |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Testimonials variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard testimonial grid.                   | Static cards or slides.                    | All above           |       |
| Carousel      | Rotating carousel of testimonials.           | Auto/manual slide navigation.              | All above           |       |
| WithImages    | Includes author images/avatars.              | Avatar shown with testimonial.             | All above           |       |

---

### States
Testimonials states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of testimonials.    | All above             |
| Focused   | Card or navigation is focused.     | Focus Ring            |
| Selected  | Testimonial is selected.           | Background, Border    |

---

### Accessibility
Accessibility features and requirements for Testimonials block:
- Keyboard navigation: Tab to cards and navigation, Enter/Space to activate.
- ARIA roles/attributes: list, listitem, and button.
- Color contrast: Sufficient for all text, backgrounds, and borders.
- Focus indicator: Visible and uses the focus token.
