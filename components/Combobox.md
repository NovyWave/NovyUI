## Combobox
🧰 A component that combines an input field with a dropdown list of options that filters as the user types.
- **Id:** Combobox
- **Appearance:** An input field with a dropdown list of options that filters as the user types. May include clear button, icons, and tags for multi-select. Dropdown appears below input and highlights matching text.
- **Behavior:** Typing filters options. Selecting an option adds it to the input (single or multiple). Supports keyboard navigation, option creation, and async loading.
- **Used in blocks:**
### Accessibility
- Use ARIA roles (`combobox`, `listbox`, `option`).
- Announce filtered options and selection to screen readers.
- Support keyboard navigation and selection.

### Variants
#### Combobox - **Autocomplete**
- **Id:** Autocomplete
- **Appearance:** Filters options as user types.
- **Behavior:** Autocompletes input.
#### Combobox - **Multiselect**
- **Id:** Multiselect
- **Appearance:** Supports multiple selections.
- **Behavior:** Allows multiple selections.
#### Combobox - **Creatable**
- **Id:** Creatable
- **Appearance:** Allows option creation.
- **Behavior:** Creates new options.
#### Combobox - **Tags input**
- **Id:** TagsInput
- **Appearance:** Displays tags.
- **Behavior:** Adds tags to input.
#### Combobox - **Typeahead**
- **Id:** Typeahead
- **Appearance:** Filters options as user types.
- **Behavior:** Typeahead input.
