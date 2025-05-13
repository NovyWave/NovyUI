## Rating
⭐ A control for displaying or collecting user ratings, typically with stars or icons.
- **Id:** Rating
- **Appearance:** A row of stars or custom icons, filled to indicate value. May show numeric value or label.
- **Behavior:** Clicking or hovering sets the rating. Supports read-only and interactive modes. May allow half or custom increments.
- **Used in blocks:**
  - [ProductReview](../blocks/ProductReview.md)

---

### Token Usage
The following table lists all design tokens used by the Rating component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Rating background          |
| Text        | color.neutral.12  | Rating label text color    |
| Border      | color.border.2    | Rating border              |
| Icon        | color.primary.7   | Star/icon color            |
| Focus Ring  | color.focus.1     | Focus indicator for rating |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Rating variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Stars         | Star icons                 | Indicates rating with stars                | Icon, Background, Border   | Default  |
| CustomIcons   | Custom icons               | Indicates rating with custom icons         | Icon, Background, Border   |          |
| ReadOnly      | Read-only display          | Static rating display                      | Background, Border, Icon   |          |

---

### States
Rating states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Rating is visible, not focused or selected       | Background, Text, Border    |
| Focus                | Rating is focused via keyboard                   | Focus Ring, Border          |
| Disabled             | Rating is not interactive                        | Disabled, Border            |
| Selected             | Rating is selected                               | Icon, Background, Border    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Rating:
- Use ARIA roles (`radiogroup`, `radio`, `aria-checked`).
- Announce rating value and selection to screen readers.
- Support keyboard navigation and selection (Tab, Arrow keys, Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for stars, text, and background in all states (WCAG AA compliant).
- Rating must be operable with assistive technologies and screen readers.
