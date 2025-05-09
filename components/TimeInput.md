## Time Input
⏰ An input for selecting a time value.
- **Id:** TimeInput
- **Appearance:** An input field with a clock popup for picking a time.
- **Behavior:** Clicking input opens time picker. Selecting a time updates the value.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
### Accessibility
- Use native `<input type="time">` if possible.
- Provide label and instructions.
- Announce selected time to screen readers.

### Variants
#### Time Input - **Basic**
- **Id:** Basic
- **Appearance:** Standard time input.
- **Behavior:** Selects a time value.
