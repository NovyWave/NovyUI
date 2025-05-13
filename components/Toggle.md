## Toggle
🔁 A control that can be switched between pressed and unpressed states.
- **Id:** Toggle
- **Appearance:** A button that can be toggled between active and inactive states. May have different styling for each state.
- **Behavior:** Clicking toggles between states. Used for simple on/off or active/inactive states.
- **Used in blocks:** [Section](../blocks/Section.md)

---

### Token Usage
The following table lists all design tokens used by the Toggle component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Button background          |
| Text        | color.neutral.12  | Button text color          |
| Border      | color.border.2    | Button border              |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for button |
| Active Bg   | color.primary.7   | Active state background    |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Toggle variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Button        | Button styling             | Toggles between states                     | Background, Text, Border   | Default  |
| Icon          | Icon styling               | Toggles icon state                         | Icon, Background, Border   |          |

---

### States
Toggle states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Button is visible, not focused or pressed        | Background, Text, Border    |
| Focus                | Button is focused via keyboard                   | Focus Ring, Border          |
| Pressed              | Button is pressed (active)                       | Active Bg, Text             |
| Disabled             | Button is not interactive                        | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, active uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Toggle:
- Provide keyboard navigation (Tab, Space/Enter to toggle).
- Use appropriate ARIA roles (switch) and attributes (aria-checked, aria-label).
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
