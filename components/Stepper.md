## Stepper
🪜 A sequence of steps or stages, often used for multi-step forms or processes.
- **Id:** Stepper
- **Appearance:** A horizontal or vertical sequence of steps, each with a label and icon. Current step is highlighted.
- **Behavior:** Clicking a step navigates to it. Supports linear or non-linear progression, validation, and completion state.
- **Used in blocks:**
  - [OnboardingSteps](../blocks/OnboardingSteps.md)

---

### Token Usage
The following table lists all design tokens used by the Stepper component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Stepper background         |
| Text        | color.neutral.12  | Step label text            |
| Border      | color.border.2    | Stepper border             |
| Icon        | color.primary.7   | Step icon color            |
| Focus Ring  | color.focus.1     | Focus indicator for steps  |
| Active Bg   | color.primary.7   | Active step background     |
| Disabled    | color.neutral.7   | Disabled step text         |

---

### Variants
All supported Stepper variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Horizontal    | Horizontal layout          | Displays horizontal steps                  | Background, Text, Border   | Default  |
| Vertical      | Vertical layout            | Displays vertical steps                    | Background, Border, Text   |          |
| WithIcons     | Includes icons             | Displays icon content                      | Icon, Background, Border   |          |
| WithProgress  | Includes progress indicator| Displays step progress                     | Background, Border, Text   |          |

---

### States
Stepper states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Step is visible, not focused or selected         | Background, Text, Border    |
| Focus                | Step is focused via keyboard                     | Focus Ring, Border          |
| Active               | Step is current/active                           | Active Bg, Text             |
| Disabled             | Step is not interactive                          | Disabled, Border            |
| Completed            | Step is completed                                | Background, Border, Text    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Stepper:
- Provide keyboard navigation for all steps and controls.
- Use appropriate ARIA roles and attributes for step indicators and navigation.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
