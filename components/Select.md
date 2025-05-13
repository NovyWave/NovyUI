## Select
🗳️ A dropdown input for choosing one or more options from a list.
- **Id:** Select
- **Appearance:** An input field with a dropdown arrow. Clicking shows a list of options. Selected option is shown in the field.
- **Behavior:** Clicking opens dropdown. Selecting an option updates the value. Supports keyboard navigation, search, and multi-select.
- **Used in blocks:** [Settings Tabs](../blocks/SettingsTabs.md)

---

### Token Usage
The following table lists all design tokens used by the Select component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Select background          |
| Text        | color.neutral.12  | Select text color          |
| Border      | color.border.2    | Select border              |
| Icon        | color.primary.7   | Dropdown arrow/icon color  |
| Focus Ring  | color.focus.1     | Focus indicator for select |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Select variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple select field        | Basic dropdown                             | Background, Text, Border   | Default  |
| MultiSelect   | Supports multiple selections| Allows multiple selections                 | Background, Border, Text   |          |
| WithSearch    | Includes search input      | Searches options                           | Background, Border, Text   |          |

---

### States
Select states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Select is visible, not focused or selected       | Background, Text, Border    |
| Focus                | Select is focused via keyboard                   | Focus Ring, Border          |
| Disabled             | Select is not interactive                        | Disabled, Border            |
| Open                 | Dropdown is open                                 | Background, Border, Text    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Select:
- Provide keyboard navigation for opening, closing, and selecting options.
- Use appropriate ARIA roles (listbox, option) and attributes (aria-selected, aria-expanded).
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
