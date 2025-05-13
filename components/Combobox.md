## Combobox
🧰 A component that combines an input field with a dropdown list of options that filters as the user types.
- **Id:** Combobox
- **Appearance:** An input field with a dropdown list of options that filters as the user types. May include clear button, icons, and tags for multi-select. Dropdown appears below input and highlights matching text.
- **Behavior:** Typing filters options. Selecting an option adds it to the input (single or multiple). Supports keyboard navigation, option creation, and async loading.
- **Used in blocks:**
  - [CountrySelect](../blocks/CountrySelect.md)

---

### Token Usage
The following table lists all design tokens used by the Combobox component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Input and dropdown bg      |
| Text        | color.neutral.12  | Input and option text      |
| Border      | color.border.2    | Input and dropdown border  |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for input  |
| Selected Bg | color.primary.7   | Selected option background |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Combobox variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Autocomplete  | Filters options as user types| Autocompletes input                       | Background, Text, Border   | Default  |
| Multiselect   | Supports multiple selections| Allows multiple selections                 | Background, Border, Text   |          |
| Creatable     | Allows option creation      | Creates new options                        | Background, Border, Text   |          |
| TagsInput     | Displays tags               | Adds tags to input                         | Background, Border, Text   |          |
| Typeahead     | Filters options as user types| Typeahead input                           | Background, Border, Text   |          |

---

### States
Combobox states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Input is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Input is focused via keyboard                    | Focus Ring, Border          |
| Selected             | Option is selected                               | Selected Bg, Text           |
| Disabled             | Input is not interactive                         | Disabled, Border            |
| DropdownOpen         | Dropdown is open                                 | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, selected uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Combobox:
- Use ARIA roles (`combobox`, `listbox`, `option`).
- Announce filtered options and selection to screen readers.
- Support keyboard navigation and selection (Tab, Arrow keys, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Combobox must be operable with assistive technologies and screen readers.
