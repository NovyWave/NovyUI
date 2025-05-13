## Theme Toggle
🌗 A control for switching between light and dark (or other) visual themes.
- **Id:** ThemeToggle
- **Appearance:** A button or switch with sun/moon or light/dark icons. Indicates current theme.
- **Behavior:** Clicking toggles between light and dark themes. May animate icon or background.
- **Used in blocks:**
  - [ProfileThemeCustomization](../blocks/ProfileThemeCustomization.md)

---

### Token Usage
The following table lists all design tokens used by the Theme Toggle component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Toggle background          |
| Icon        | color.primary.7   | Icon color                 |
| Border      | color.border.2    | Toggle border              |
| Focus Ring  | color.focus.1     | Focus indicator for toggle |
| Active Bg   | color.primary.7   | Active state background    |
| Disabled    | color.neutral.7   | Disabled icon color        |

---

### Variants
All supported Theme Toggle variants are listed below:
| Variant Name        | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|--------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| LightAndDarkSwitch | Sun/moon icons             | Toggles light/dark theme                   | Background, Icon, Border   | Default  |

---

### States
Theme Toggle states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Toggle is visible, not focused or pressed        | Background, Icon, Border    |
| Focus                | Toggle is focused via keyboard                   | Focus Ring, Border          |
| Pressed              | Toggle is pressed (active)                       | Active Bg, Icon             |
| Disabled             | Toggle is not interactive                        | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, active uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Theme Toggle:
- Provide keyboard navigation (Tab, Space/Enter to toggle).
- Use appropriate ARIA roles and attributes.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
