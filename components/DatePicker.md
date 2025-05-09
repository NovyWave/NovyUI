## Date Picker
📆 A calendar input for selecting a single date.
- **Id:** DatePicker
- **Appearance:** An input field with a calendar popup for picking a date.
- **Behavior:** Clicking input opens calendar. Selecting a date updates the value.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
### Accessibility
- Use ARIA roles (`dialog`, `grid`, `gridcell`).
- Announce selected and focused dates.
- Support keyboard navigation for date selection.

### Variants
#### Date Picker - **Basic**
- **Id:** Basic
- **Appearance:** Standard date picker.
- **Behavior:** Selects a single date.
