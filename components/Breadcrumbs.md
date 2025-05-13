## Breadcrumbs
🍞 A navigation aid that displays the user's current location within a site hierarchy.
- **Id:** Breadcrumbs
- **Appearance:** A horizontal list of links separated by chevrons or slashes, representing the user's navigation path. Each item is a clickable link except the last, which is the current page and styled as inactive.
- **Behavior:** Clicking a breadcrumb navigates to that page/section. Supports keyboard navigation. May collapse into a dropdown for long paths.
- **Used in blocks:**
  - [Headers](../blocks/Headers.md)

---

### Token Usage
The following table lists all design tokens used by the Breadcrumbs component:
| Part         | Token Example      | Description                              |
|--------------|-------------------|------------------------------------------|
| Background   | color.surface.1   | Breadcrumbs background                   |
| Text         | color.neutral.12  | Breadcrumb link text color               |
| Separator    | color.border.3    | Color for chevron/slash separator        |
| Icon         | color.primary.7   | Icon color (if present)                  |
| Focus Ring   | color.focus.1     | Focus indicator for links                |
| Hover        | color.surface.2   | Background on link hover                 |

---

### Variants
All supported Breadcrumbs variants are listed below:
| Variant Name           | Description                        | Appearance/Behavior                                 | Tokens Used                | Notes    |
|-----------------------|------------------------------------|-----------------------------------------------------|----------------------------|----------|
| Basic                 | Simple horizontal list             | Static navigation                                   | Background, Text, Separator| Default  |
| WithIcons             | Includes icons in each breadcrumb  | Icons indicate type or category                     | Icon, Text, Background     |          |
| CollapsibleAndOverflow| Collapses into dropdown for long paths | Supports long navigation paths                  | Background, Text, Separator|          |

---

### States
Breadcrumbs states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Breadcrumb is visible, not focused                | Background, Text, Separator |
| Hover (link)         | Breadcrumb link is hovered                        | Hover, Text, Separator      |
| Focus (link)         | Breadcrumb link is focused                        | Focus Ring, Text, Separator |
| Active (link)        | Breadcrumb link is being pressed/clicked          | Background, Text, Separator |
| Disabled             | Breadcrumb is not interactive                     | Text (muted), Separator     |
| Current Page         | Last breadcrumb, current page                     | Text (muted), Separator     |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, separator uses `color.border.3`, etc.

---

### Accessibility
Accessibility features and requirements for Breadcrumbs:
- Use `nav` with `aria-label="breadcrumb"` for navigation region.
- Mark current page with `aria-current="page"`.
- Ensure links are keyboard accessible and have visible focus indicators.
- Ensure sufficient color contrast for text and separators (WCAG AA compliant).
- Breadcrumbs should be operable with assistive technologies and screen readers.
- If breadcrumbs collapse, ensure dropdown is accessible and announced to screen readers.
