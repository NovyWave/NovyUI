## Number Input
🔢 An input field for entering numeric values, often with increment/decrement controls.
- **Id:** NumberInput
- **Appearance:** An input field for numbers, often with up/down arrow buttons. May show min/max and step values.
- **Behavior:** Accepts numeric input. Arrow buttons increment/decrement value. Supports validation, min/max, and disabled state.
- **Used in blocks:** [Order History](../blocks/OrderHistory.md)

---

### Token Usage
The following table lists all design tokens used by the Number Input component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Input background           |
| Text        | color.neutral.12  | Input text color           |
| Border      | color.border.2    | Input border               |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for input  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Number Input variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple number input        | Basic number entry                         | Background, Text, Border   | Default  |
| WithIcon      | Includes icon              | Displays icon content                      | Icon, Background, Border   |          |
| WithLabel     | Includes label             | Displays label text                        | Background, Border, Text   |          |
| WithStepper   | Includes stepper buttons   | Allows increment/decrement                 | Icon, Background, Border   |          |

---

### States
Number Input states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Input is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Input is focused via keyboard                    | Focus Ring, Border          |
| Disabled             | Input is not interactive                         | Disabled, Border            |
| Error                | Input is in error state                          | Border, Text                |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Number Input:
- Use ARIA roles (`spinbutton`, `textbox`, `aria-valuenow`, `aria-valuemax`, `aria-valuemin`).
- Announce value changes and validation to screen readers.
- Support keyboard navigation and editing (Tab, Arrow keys, Enter, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Number Input must be operable with assistive technologies and screen readers.
