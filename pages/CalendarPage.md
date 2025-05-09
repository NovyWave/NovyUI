## Calendar Page
A scheduling page with calendar views, event lists, and event management features.
- **Id:** CalendarPage
- **Appearance:** A page with a calendar view (month, week), event list, and event details. May include filters, navigation controls, and add event button.
- **Behavior:** Clicking a date or event shows details. Supports adding, editing, and deleting events. Responsive layout. Calendar grid highlights today and event days.
- **Blocks:**
  - [Calendar](../blocks/Calendar.md)
  - [Footers](../blocks/Footers.md)
### Variants
#### Calendar Page - **Month view**
- **Id:** MonthView
- **Appearance:** Calendar shows a full month with event markers.
- **Behavior:** User can select dates and view events for the month.
#### Calendar Page - **Week view**
- **Id:** WeekView
- **Appearance:** Calendar shows a single week with event markers.
- **Behavior:** User can select dates and view events for the week.
#### Calendar Page - **Event details**
- **Id:** EventDetails
- **Appearance:** Detailed view of a single event with all info.
- **Behavior:** Allows editing and deleting events.
