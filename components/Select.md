## Select
🗳️ A dropdown input for choosing one or more options from a list.
- **Id:** Select
- **Appearance:** An input field with a dropdown arrow. Clicking shows a list of options. Selected option is shown in the field.
- **Behavior:** Clicking opens dropdown. Selecting an option updates the value. Supports keyboard navigation, search, and multi-select.
- **Used in blocks:**
  - [SelectFilterBlock](blocks.md#select-filter-block)
### Accessibility
- Use ARIA roles (`listbox`, `option`).
- Announce selected and focused options.
- Support keyboard navigation and selection.

### Variants
#### Select - **Basic**
- **Id:** Basic
- **Appearance:** Simple select field.
- **Behavior:** Basic dropdown.
#### Select - **Multi-select**
- **Id:** MultiSelect
- **Appearance:** Supports multiple selections.
- **Behavior:** Allows multiple selections.
#### Select - **With search**
- **Id:** WithSearch
- **Appearance:** Includes search input.
- **Behavior:** Searches options.
