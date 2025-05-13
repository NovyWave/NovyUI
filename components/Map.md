## Map
🗺️ A component for selecting or displaying a geographic location on an interactive map.
- **Id:** Map
- **Appearance:** An interactive map with a marker or pin. May include search input, zoom controls, and address display.
- **Behavior:** User can move marker, search for location, or click map to select. Updates value and may show address or coordinates.
- **Used in blocks:**
  - [ContactCard](../blocks/ContactCard.md)

---

### Token Usage
The following table lists all design tokens used by the Map component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Map background             |
| Border      | color.border.2    | Map border                 |
| Marker      | color.primary.7   | Marker color               |
| Focus Ring  | color.focus.1     | Focus indicator for map    |
| Disabled    | color.neutral.7   | Disabled overlay           |

---

### Variants
All supported Map variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple map                 | Basic map display                          | Background, Border         | Default  |
| WithMarkers   | Includes markers           | Displays markers on map                    | Marker, Background, Border |          |
| WithControls  | Includes controls          | Displays zoom/pan controls                 | Background, Border         |          |

---

### States
Map states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Map is visible, not focused or selected          | Background, Border          |
| Focus                | Map is focused via keyboard                      | Focus Ring, Border          |
| Disabled             | Map is not interactive                           | Disabled, Border            |
| MarkerActive         | Marker is active/selected                        | Marker, Border              |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, marker uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Map:
- Use ARIA roles (`application`, `region`, `img`, `aria-label`, `aria-describedby`).
- Announce map content and updates to screen readers.
- Support keyboard navigation and interaction (Tab, Arrow keys, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for map overlays, markers, and text (WCAG AA compliant).
- Map must be operable with assistive technologies and screen readers.
