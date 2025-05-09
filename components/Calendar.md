## Calendar
📅 A visual grid for selecting dates, viewing months, or displaying scheduled events.
- **Id:** Calendar
- **Appearance:** A grid of days for a month or week, with headers for days of the week. May include navigation arrows, today highlight, and event markers. Selected date(s) are visually distinct.
- **Behavior:** Allows date selection (single, range, or multiple). Supports navigation between months/years. May display events or availability. Keyboard and mouse interaction supported.
- **Used in blocks:**
  - [Calendar](blocks.md#calendar)
### Accessibility
- Use appropriate ARIA roles (`grid`, `gridcell`, `row`, `columnheader`).
- Announce selected and focused dates to screen readers.
- Support keyboard navigation for date selection.

### Variants
#### Calendar - **Month view**
- **Id:** MonthView
- **Appearance:** Displays a full month.
- **Behavior:** Month navigation.
#### Calendar - **Week view**
- **Id:** WeekView
- **Appearance:** Displays a week.
- **Behavior:** Week navigation.
#### Calendar - **With events**
- **Id:** WithEvents
- **Appearance:** Includes event markers.
- **Behavior:** Displays events or availability.
