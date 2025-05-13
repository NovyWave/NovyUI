## Slider
🎚️ A control for selecting a value or range by sliding a handle along a track.
- **Id:** Slider
- **Appearance:** A horizontal or vertical track with a draggable thumb. May show value, min/max labels, and ticks.
- **Behavior:** Dragging the thumb or clicking the track changes the value. Supports keyboard navigation, range selection, and disabled state.
- **Used in blocks:** [Stats](../blocks/Stats.md)

---

### Token Usage
The following table lists all design tokens used by the Slider component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Track       | color.surface.1   | Slider track background    |
| Thumb       | color.primary.7   | Slider thumb color         |
| Border      | color.border.2    | Slider border              |
| Focus Ring  | color.focus.1     | Focus indicator for slider |
| Active Bg   | color.primary.7   | Active state background    |
| Disabled    | color.neutral.7   | Disabled track/thumb color |

---

### Variants
All supported Slider variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| SingleValue   | Single value slider        | Adjusts single value                       | Track, Thumb, Border       | Default  |
| Range         | Range slider               | Adjusts range of values                    | Track, Thumb, Border       |          |

---

### States
Slider states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Slider is visible, not focused or pressed        | Track, Thumb, Border        |
| Focus                | Slider is focused via keyboard                   | Focus Ring, Border          |
| Active               | Slider is being dragged or pressed               | Active Bg, Thumb            |
| Disabled             | Slider is not interactive                        | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, active uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Slider:
- Provide keyboard navigation for adjusting values (arrow keys, Tab, etc.).
- Use appropriate ARIA roles (slider) and attributes (aria-valuenow, aria-valuemin, aria-valuemax).
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
