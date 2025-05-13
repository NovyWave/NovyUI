## Switch
🔀 A toggle control for switching between two states, such as on/off or enabled/disabled.
- **Id:** Switch
- **Appearance:** A toggle switch with a sliding thumb. May include labels or icons for on/off states.
- **Behavior:** Clicking or dragging toggles state. Supports keyboard navigation and disabled state. May animate thumb.
- **Used in blocks:**
  - [SettingsTabs](../blocks/SettingsTabs.md)

---

### Token Usage
The following table lists all design tokens used by the Switch component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Track       | color.surface.1   | Switch track background    |
| Thumb       | color.primary.7   | Switch thumb color         |
| Border      | color.border.2    | Switch border              |
| Focus Ring  | color.focus.1     | Focus indicator for switch |
| Active Bg   | color.primary.7   | Active state background    |
| Disabled    | color.neutral.7   | Disabled track/thumb color |

---

### Variants
All supported Switch variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| WithLabel     | Includes label             | Displays label text                        | Track, Thumb, Border       | Default  |
| WithoutLabel  | No label                   | Basic toggle switch                        | Track, Thumb, Border       |          |
| WithIcons     | Includes icons             | Displays icon content                      | Track, Thumb, Border       |          |

---

### States
Switch states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Switch is visible, not focused or pressed        | Track, Thumb, Border        |
| Focus                | Switch is focused via keyboard                   | Focus Ring, Border          |
| Checked              | Switch is on (active)                            | Active Bg, Thumb            |
| Disabled             | Switch is not interactive                        | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, active uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Switch:
- Provide keyboard navigation (Tab, Space/Enter to toggle).
- Use appropriate ARIA roles (switch) and attributes (aria-checked, aria-label).
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
