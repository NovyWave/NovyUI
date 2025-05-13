## Time Input
⏰ An input for selecting a time value.
- **Id:** TimeInput
- **Appearance:** An input field with a clock popup for picking a time.
- **Behavior:** Clicking input opens time picker. Selecting a time updates the value.
- **Used in blocks:**
  - [Authentication](../blocks/Authentication.md)

---

### Token Usage
The following table lists all design tokens used by the Time Input component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Input and picker bg        |
| Text        | color.neutral.12  | Input and picker text      |
| Border      | color.border.2    | Input and picker border    |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for input  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Time Input variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Standard time input        | Selects a time value                       | Background, Text, Border   | Default  |

---

### States
Time Input states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Input is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Input is focused via keyboard                    | Focus Ring, Border          |
| Disabled             | Input is not interactive                         | Disabled, Border            |
| PickerOpen           | Time picker is open                              | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Time Input:
- Provide keyboard navigation for all input fields and controls.
- Use appropriate ARIA roles and attributes for time input fields.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
