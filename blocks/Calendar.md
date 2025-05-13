## Calendar
A block for displaying a calendar view with selectable dates and events.
- **Id:** Calendar
- **Appearance:** Grid of days/weeks/months, with event markers and navigation controls.
- **Behavior:** Allows date selection, event display, and navigation between months/years.
- **Components:**
  - [Calendar](../components/Calendar.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Events](../pages/Events.md)
  - [Booking](../pages/Booking.md)

---

### Token Usage
The following table lists all design tokens used by the Calendar block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Calendar background                |
| Text         | color.neutral.12  | Day and label text                 |
| Selected Day | color.primary.7   | Selected day background            |
| Event Dot    | color.secondary.7 | Event marker dot                   |
| Border       | color.border.2    | Calendar border                    |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Calendar variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard calendar with date selection.       | User can select a date.                    | All above           |       |
| WithEvents    | Calendar with event markers.                 | Events shown as dots or highlights.        | All above           |       |
| RangeSelect   | Allows selecting a date range.               | User can select start and end dates.       | All above           |       |

---

### States
Calendar states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of calendar.        | All above             |
| Focused   | Day or control is focused.         | Focus Ring            |
| Selected  | Day is selected.                   | Selected Day          |
| Disabled  | Day/control is disabled.           | Text, Background      |

---

### Accessibility
Accessibility features and requirements for Calendar:
- Keyboard navigation: Arrow keys to move, Enter/Space to select.
- ARIA roles/attributes: grid, gridcell, selected, disabled.
- Color contrast: Sufficient for all text and event markers.
- Focus indicator: Visible and uses the focus token.
