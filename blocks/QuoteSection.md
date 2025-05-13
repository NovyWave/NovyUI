## QuoteSection
A block for displaying a highlighted quote or testimonial with attribution.
- **Id:** QuoteSection
- **Appearance:** Prominent quote text, author name, and optional image or icon.
- **Behavior:** Emphasizes a key message or testimonial.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Avatar](../components/Avatar.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Testimonials](../pages/Testimonials.md)

---

### Token Usage
The following table lists all design tokens used by the QuoteSection block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Quote section background           |
| Text         | color.neutral.12  | Quote and author text              |
| Icon         | color.primary.7   | Quote icon color                   |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported QuoteSection variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard quote section.                      | Static quote and author.                   | All above           |       |
| WithImage     | Includes author image/avatar.                | Avatar shown with quote.                   | All above           |       |
| WithIcon      | Includes quote icon.                         | Icon shown with quote.                     | All above           |       |

---

### States
QuoteSection states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of quote.           | All above             |
| Focused   | Author or icon is focused.         | Focus Ring            |
| Selected  | Quote is selected.                 | Background, Border    |

---

### Accessibility
Accessibility features and requirements for QuoteSection block:
- Keyboard navigation: Tab to quote and author, Enter/Space to activate (if interactive).
- ARIA roles/attributes: region, blockquote, and attribution.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
