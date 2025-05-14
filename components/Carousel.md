# Carousel

**Id:** Carousel
**Appearance:** Horizontal or vertical sliding panel of images or content cards, with navigation controls and indicators.
**Behavior:** Supports auto-play, manual navigation, swipe/drag gestures, and looping. Can pause on hover or focus.
**Components:**
- [Button](../components/Button.md) (navigation arrows)
- [Pagination](../components/Pagination.md) (slide indicators)
- [Image](../components/Image.md) (for image carousels)
**Used in pages:**
- [Carousels](../pages/Carousels.md)
- [Testimonials](../pages/Testimonials.md)

---

## Carousel

A component for displaying a sequence of content panels or images with sliding transitions and navigation controls.

---

### Token Usage
The following table lists all design tokens used by the Carousel component:
| Part         | Token Example         | Description                      |
|--------------|----------------------|----------------------------------|
| Background   | color.bg.default     | Carousel background color        |
| Arrow        | color.icon.primary   | Navigation arrow color           |
| Indicator    | color.icon.secondary | Pagination/indicator color       |
| Border       | border.carousel      | Carousel border style            |
| Shadow       | shadow.carousel      | Carousel drop shadow             |

---

### Variants
All supported Carousel variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used           | Notes                |
|--------------|---------------------------|----------------------------|-----------------------|----------------------|
| Default      | Standard horizontal       | Arrows, indicators         | color.bg.default      |                      |
| Vertical     | Vertical sliding          | Up/down arrows             | color.icon.primary    |                      |
| Auto-play    | Slides automatically      | Timer, pause on hover      | color.icon.secondary  |                      |
| Looping      | Infinite loop navigation  | Wraps at ends              | border.carousel       |                      |
| With Images  | Image carousel            | Uses [Image] component     | color.bg.default      |                      |

---

### States
Carousel states and their token usage:
| State    | Description                | Token(s) affected         |
|----------|----------------------------|---------------------------|
| Default  | Normal display             | color.bg.default          |
| Hover    | Mouse over navigation      | color.icon.primary        |
| Active   | Arrow/indicator pressed    | color.icon.active         |
| Disabled | Navigation disabled        | color.icon.disabled       |

---

### Accessibility
Accessibility features and requirements for Carousel:
- Provide visible focus indicators for navigation controls.
- Use `aria-roledescription="carousel"` and `aria-label` for the region.
- Announce slide changes to screen readers (e.g., `aria-live`).
- Ensure all controls are keyboard accessible.
- Provide pause/stop controls for auto-play.
- Ensure sufficient color contrast for all elements.
