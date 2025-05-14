## Gallery
A gallery page for browsing images, videos, or media collections. Features grid or masonry layouts, filtering, and lightbox previews.
- **Id:** Gallery
- **Appearance:** Grid or masonry layout of media items, with filtering and preview options.
- **Behavior:** Allows browsing, filtering, and previewing media in a lightbox or modal.
- **Blocks:**
  - [Carousels](../blocks/Carousels.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Gallery page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Media item border                  |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Gallery variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Grid          | Grid of media items.                         | Grid layout, filter, preview.              | All above           |       |
| Masonry       | Masonry layout of media items.               | Masonry layout, filter, preview.           | All above           |       |

---

### States
Gallery states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of gallery.         | All above             |
| Focused   | Item or button is focused.         | Focus Ring            |
| Selected  | Media item is selected.            | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Gallery:
- Keyboard navigation: Tab to all items and buttons, Enter/Space to preview.
- ARIA roles/attributes: grid, button, region, img.
- Color contrast: Sufficient for all text, items, and controls.
- Focus indicator: Visible and uses the focus token.
