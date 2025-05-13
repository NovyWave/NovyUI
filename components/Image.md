## Image
🖼️ A component for displaying images with optional styling, captions, or overlays.
- **Id:** Image
- **Appearance:** Displays an image with optional border, shadow, or rounded corners. May include caption or overlay.
- **Behavior:** Static by default. May support zoom, lazy loading, or click to enlarge. Responsive to container size.
- **Used in blocks:**
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Carousels](../blocks/Carousels.md)
  - [FeaturesSection](../blocks/FeaturesSection.md)
  - [Hero](../blocks/Hero.md)
  - [MegaMenu](../blocks/MegaMenu.md)
  - [ProductDetails](../blocks/ProductDetails.md)
  - [SplitLayout](../blocks/SplitLayout.md)
  - [Testimonials](../blocks/Testimonials.md)

---

### Token Usage
The following table lists all design tokens used by the Image component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Border      | color.border.2    | Image border               |
| Shadow      | shadow.1          | Image shadow               |
| Focus Ring  | color.focus.1     | Focus indicator for image  |
| Disabled    | color.neutral.7   | Disabled overlay           |

---

### Variants
All supported Image variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple image               | Basic image display                        | Border, Shadow             | Default  |
| WithBorder    | Includes border            | Displays border around image               | Border                     |          |
| WithShadow    | Includes shadow            | Displays shadow around image               | Shadow                     |          |
| WithCaption   | Includes caption           | Displays caption below image               | Border, Shadow             |          |

---

### States
Image states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Image is visible, not focused or selected        | Border, Shadow              |
| Focus                | Image is focused via keyboard                    | Focus Ring, Border          |
| Disabled             | Image is not interactive                         | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`.

---

### Accessibility
Accessibility features and requirements for Image:
- Use semantic `<img>` markup and appropriate ARIA roles/attributes.
- Provide descriptive alt text for all images.
- Announce image content and status to screen readers if relevant.
- Support keyboard navigation to and from images (Tab, Shift+Tab).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for overlays, borders, and text (WCAG AA compliant).
- Image must be operable with assistive technologies and screen readers.
