## CalendarPage
A page for displaying and managing calendar events, schedules, and reminders. Supports event creation, editing, and viewing in various calendar views.
- **Id:** CalendarPage
- **Appearance:** Calendar grid or list, event cards, date picker, and navigation controls. May include color-coded events and tooltips.
- **Behavior:** Users can add, edit, and delete events. Supports drag-and-drop, recurring events, and filtering by date or category.
- **Blocks:**
  - [Calendar](../blocks/Calendar.md)
  - [EventCard](../blocks/EventCard.md)
- **Components:**
  - [DatePicker](../components/DatePicker.md)
  - [Button](../components/Button.md)
  - [Input](../components/Input.md)

---

### Token Usage
The following table lists all design tokens used by the CalendarPage page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Grid         | spacing      | Controls grid spacing      |
| Event        | color        | Event color                |
| Header       | background   | Header background color    |

---

### Variants
All supported CalendarPage variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| MonthView    | Month grid view            | Full month calendar        | spacing, color, background | |
| WeekView     | Week grid view             | One week calendar          | spacing, color, background | |
| ListView     | List of events             | Events in a list           | color, background         | |

---

### States
CalendarPage states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Calendar loaded            | background, color |
| Editing      | Editing event              | color, background |
| Disabled     | Calendar disabled          | color, background |

---

### Accessibility
Accessibility features and requirements for CalendarPage:
- Keyboard navigation for calendar and events
- ARIA roles/attributes for calendar and events
- Sufficient color contrast for text and events
- Visible focus indicator for all interactive elements
