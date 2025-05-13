## Checkbox
☑️ A control that allows users to select one or more options from a set.
- **Id:** Checkbox
- **Appearance:** A small square box that can be checked or unchecked. May include a label and an optional indeterminate state (horizontal line). Checked state is indicated by a checkmark or filled box.
- **Behavior:** Clicking toggles between checked, unchecked, and (if supported) indeterminate. Supports keyboard navigation and focus. Can be disabled.
- **Used in blocks:**
  - [Authentication](../blocks/Authentication.md)

---

### Token Usage
The following table lists all design tokens used by the Checkbox component:
| Part           | Token Example      | Description                                 |
|----------------|-------------------|---------------------------------------------|
| Box            | color.surface.1   | Checkbox background                         |
| Checkmark      | color.primary.7   | Checkmark color                             |
| Border         | color.border.2    | Checkbox border color                       |
| Label          | color.neutral.12  | Label text color                            |
| Focus Ring     | color.focus.1     | Focus indicator for checkbox                |
| Hover          | color.surface.2   | Background on hover                         |
| Disabled Box   | color.surface.3   | Background when disabled                    |
| Disabled Text  | color.neutral.7   | Label color when disabled                   |

---

### Variants
All supported Checkbox variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple checkbox            | Standard checked/unchecked states          | Box, Checkmark, Border     | Default  |
| Indeterminate | Indeterminate state        | Shows horizontal line for indeterminate    | Box, Border, Checkmark     |          |
| WithLabel     | Checkbox with label        | Label displayed next to checkbox           | Label, Box, Border         |          |

---

### States
Checkbox states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Checkbox is visible, not focused or hovered      | Box, Border, Label          |
| Hover                | Checkbox is hovered                              | Hover, Border, Label        |
| Focus                | Checkbox is focused via keyboard                 | Focus Ring, Border          |
| Checked              | Checkbox is checked                              | Checkmark, Box, Border      |
| Indeterminate        | Checkbox is indeterminate                        | Checkmark, Box, Border      |
| Disabled             | Checkbox is not interactive                      | Disabled Box, Disabled Text |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, checked uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Checkbox:
- Use native `<input type="checkbox">` or `role="checkbox"`.
- Announce checked/unchecked/indeterminate state with `aria-checked`.
- Support keyboard toggle (Space key).
- Ensure label is associated with checkbox.
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for box, checkmark, border, and label in all states (WCAG AA compliant).
- Checkbox must be operable with assistive technologies and screen readers.
