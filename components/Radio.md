## Radio
🔘 A control for selecting a single option from a set of mutually exclusive choices.
- **Id:** Radio
- **Appearance:** A small circular button with a label. Selected state is indicated by a filled dot. Used in groups for single selection.
- **Behavior:** Clicking selects the radio and deselects others in the group. Supports keyboard navigation and disabled state.
- **Used in blocks:** [FAQ](../blocks/FAQ.md)
### Accessibility
- Use native `<input type="radio">` or `role="radio"`.
- Announce checked state with `aria-checked`.
- Group radios with `role="radiogroup"` and label.
- Support keyboard navigation (arrow keys).

### Variants
#### Radio - **Basic**
- **Id:** Basic
- **Appearance:** Simple radio button.
- **Behavior:** Basic selection.
#### Radio - **With label**
- **Id:** WithLabel
- **Appearance:** Includes label.
- **Behavior:** Displays label text.
