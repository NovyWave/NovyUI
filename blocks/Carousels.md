## Carousels
A block for displaying a horizontal carousel of images, cards, or custom content.
- **Id:** Carousels
- **Appearance:** Horizontally scrollable area with navigation arrows and indicators.
- **Behavior:** Allows users to scroll or swipe through items. May auto-advance.
- **Components:**
  - [Carousel](../components/Carousel.md)
  - [Button](../components/Button.md)
  - [Image](../components/Image.md)
- **Used in pages:**
  - [Gallery](../pages/Gallery.md)
  - [Landing](../pages/Landing.md)

---

### Token Usage
The following table lists all design tokens used by the Carousels block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Carousel background                |
| Text         | color.neutral.12  | Caption and label text             |
| Arrow        | color.primary.7   | Navigation arrow background        |
| Indicator    | color.secondary.7 | Slide indicator color              |
| Border       | color.border.2    | Carousel border                    |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Carousels variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard image/content carousel.             | User can scroll or swipe.                  | All above           |       |
| WithCaptions  | Carousel with captions below items.          | Captions shown for each slide.             | All above           |       |
| WithThumbnails| Carousel with thumbnail navigation.          | Thumbnails shown below main carousel.      | All above           |       |

---

### States
Carousels states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of carousel.        | All above             |
| Focused   | Arrow or indicator is focused.     | Focus Ring            |
| Active    | Slide is active/visible.           | Indicator, Arrow      |
| Disabled  | Arrow/control is disabled.         | Arrow, Indicator      |

---

### Accessibility
Accessibility features and requirements for Carousels:
- Keyboard navigation: Arrow keys to move, Enter/Space to select.
- ARIA roles/attributes: region, listbox, option, and live region for auto-advance.
- Color contrast: Sufficient for all text, arrows, and indicators.
- Focus indicator: Visible and uses the focus token.
