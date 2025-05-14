## QuoteSection
A page for displaying inspirational or testimonial quotes, often with author and styling options.
- **Id:** QuoteSection
- **Appearance:** Section or card with quote text, author, and optional image or icon.
- **Behavior:** Static or rotating quotes, may include animations or transitions.
- **Blocks:**
  - [QuoteSection](../blocks/QuoteSection.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the QuoteSection page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Section/card background            |
| Text         | color.neutral.12  | Quote text                         |
| Border       | color.border.2    | Card/section border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported QuoteSection variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Static        | Static quote section.                        | Single quote, author, styling.             | All above           |       |
| Rotating      | Rotating/animated quotes.                    | Multiple quotes, transitions.              | All above           |       |

---

### States
QuoteSection states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of quote section.   | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Rotating  | Quote is rotating/animated.        | Border, Text          |

---

### Accessibility
Accessibility features and requirements for QuoteSection:
- Keyboard navigation: Tab to all quotes and controls, Enter/Space to activate.
- ARIA roles/attributes: region, blockquote, button.
- Color contrast: Sufficient for all text, quotes, and controls.
- Focus indicator: Visible and uses the focus token.
