## Checkbox
☑️ A control that allows users to select one or more options from a set.
- **Id:** Checkbox
- **Appearance:** A small square box that can be checked or unchecked. May include a label and an optional indeterminate state (horizontal line). Checked state is indicated by a checkmark or filled box.
- **Behavior:** Clicking toggles between checked, unchecked, and (if supported) indeterminate. Supports keyboard navigation and focus. Can be disabled.
- **Used in blocks:**
  - [Authentication](../blocks/Authentication.md)
### Accessibility
- Use native `<input type="checkbox">` or `role="checkbox"`.
- Announce checked/unchecked/indeterminate state with `aria-checked`.
- Support keyboard toggle (Space key).
- Ensure label is associated with checkbox.

### Variants
#### Checkbox - **Basic**
- **Id:** Basic
- **Appearance:** Simple checkbox.
- **Behavior:** Basic toggle.
#### Checkbox - **Indeterminate**
- **Id:** Indeterminate
- **Appearance:** Includes indeterminate state.
- **Behavior:** Supports indeterminate state.
#### Checkbox - **With label**
- **Id:** WithLabel
- **Appearance:** Includes a label.
- **Behavior:** Displays label text.
