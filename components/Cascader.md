## Cascader
🌲 A multi-level dropdown for selecting options from hierarchical data.
- **Id:** Cascader
- **Appearance:** An input with a dropdown showing hierarchical options. Selecting a parent reveals child options in a new column or menu.
- **Behavior:** Clicking selects option and reveals next level. Supports keyboard navigation and search.
- **Used in blocks:**
  - [CascaderFilter](../blocks/CascaderFilter.md)

---

### Token Usage
The following table lists all design tokens used by the Cascader component:
| Part           | Token Example      | Description                                 |
|----------------|-------------------|---------------------------------------------|
| Background     | color.surface.1   | Dropdown background                         |
| Text           | color.neutral.12  | Option text color                           |
| Active Option  | color.primary.7   | Highlight for active/selected option        |
| Border         | color.border.2    | Border for dropdown and options             |
| Focus Ring     | color.focus.1     | Focus indicator for options                 |
| Hover          | color.surface.2   | Background on option hover                  |
| Disabled Text  | color.neutral.7   | Text color for disabled options             |

---

### Variants
All supported Cascader variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| MultiLevelDropdown | Hierarchical options   | Displays multi-level options               | Background, Border, Text   | Default  |

---

### States
Cascader states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Option is visible, not focused or hovered        | Background, Text, Border    |
| Hover (option)       | Option is hovered                                | Hover, Text, Border         |
| Focus (option)       | Option is focused via keyboard                   | Focus Ring, Border          |
| Active/Selected      | Option is selected                               | Active Option, Text         |
| Disabled             | Option is not interactive                        | Disabled Text, Background   |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, active uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Cascader:
- Use ARIA roles (`menu`, `menuitem`, `tree`, `treeitem`) as appropriate.
- Announce expanded/collapsed state with `aria-expanded`.
- Support keyboard navigation between levels (arrow keys, Enter, Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Cascader must be operable with assistive technologies and screen readers.
