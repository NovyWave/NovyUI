## Date Range Picker
🗓️ An input for selecting a range of dates.
- **Id:** DateRangePicker
- **Appearance:** An input field with a calendar popup for picking a start and end date.
- **Behavior:** Clicking input opens calendar. Selecting two dates sets the range.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
### Accessibility
- Use ARIA roles (`dialog`, `grid`, `gridcell`).
- Announce start and end date selection.
- Support keyboard navigation for range selection.

### Variants
#### Date Range Picker - **Basic**
- **Id:** Basic
- **Appearance:** Standard date range picker.
- **Behavior:** Selects a date range.
