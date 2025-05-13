## CascaderFilter
A block for filtering data using a multi-level cascading menu or dropdown.
- **Id:** CascaderFilter
- **Appearance:** Input or button that opens a cascading menu for multi-level selection.
- **Behavior:** Allows users to select nested options for filtering data.
- **Components:**
  - [Cascader](../components/Cascader.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [DataTable](../pages/DataTable.md)
  - [Search](../pages/Search.md)

---

### Token Usage
The following table lists all design tokens used by the CascaderFilter block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Menu background                    |
| Text         | color.neutral.12  | Option and label text              |
| Selected     | color.primary.7   | Selected option background         |
| Border       | color.border.2    | Menu border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported CascaderFilter variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard cascader for multi-level selection. | User can select nested options.            | All above           |       |
| WithSearch    | Cascader with search input.                  | Allows searching/filtering options.        | All above           |       |
| WithTags      | Selected options shown as tags.              | Tags displayed for selected items.         | All above           |       |

---

### States
CascaderFilter states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of cascader.        | All above             |
| Focused   | Input or option is focused.        | Focus Ring            |
| Selected  | Option is selected.                | Selected              |
| Disabled  | Input or option is disabled.       | Background, Text      |

---

### Accessibility
Accessibility features and requirements for CascaderFilter:
- Keyboard navigation: Tab to input and options, Arrow keys to navigate, Enter/Space to select.
- ARIA roles/attributes: combobox, listbox, option, and group.
- Color contrast: Sufficient for all text, backgrounds, and borders.
- Focus indicator: Visible and uses the focus token.
