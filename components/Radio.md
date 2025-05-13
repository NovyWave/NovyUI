## Radio
🔘 A control for selecting a single option from a set of mutually exclusive choices.
- **Id:** Radio
- **Appearance:** A small circular button with a label. Selected state is indicated by a filled dot. Used in groups for single selection.
- **Behavior:** Clicking selects the radio and deselects others in the group. Supports keyboard navigation and disabled state.
- **Used in blocks:** [FAQ](../blocks/FAQ.md)

---

### Token Usage
The following table lists all design tokens used by the Radio component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Radio background           |
| Text        | color.neutral.12  | Radio label text color     |
| Border      | color.border.2    | Radio border               |
| Icon        | color.primary.7   | Selected dot color         |
| Focus Ring  | color.focus.1     | Focus indicator for radio  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Radio variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple radio button        | Basic selection                            | Background, Text, Border   | Default  |
| WithLabel     | Includes label             | Displays label text                        | Background, Border, Text   |          |

---

### States
Radio states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Radio is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Radio is focused via keyboard                    | Focus Ring, Border          |
| Disabled             | Radio is not interactive                         | Disabled, Border            |
| Checked              | Radio is selected                                | Icon, Background, Border    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Radio:
- Use ARIA roles (`radio`, `radiogroup`, `aria-checked`).
- Announce selection and group status to screen readers.
- Support keyboard navigation and selection (Tab, Arrow keys, Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Radio must be operable with assistive technologies and screen readers.
