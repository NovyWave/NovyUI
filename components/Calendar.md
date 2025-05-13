## Calendar
📅 A visual grid for selecting dates, viewing months, or displaying scheduled events.
- **Id:** Calendar
- **Appearance:** A grid of days for a month or week, with headers for days of the week. May include navigation arrows, today highlight, and event markers. Selected date(s) are visually distinct.
- **Behavior:** Allows date selection (single, range, or multiple). Supports navigation between months/years. May display events or availability. Keyboard and mouse interaction supported.
- **Used in blocks:**
  - [Calendar](../blocks/Calendar.md)

---

### Token Usage
The following table lists all design tokens used by the Calendar component:
| Part           | Token Example      | Description                                 |
|----------------|-------------------|---------------------------------------------|
| Background     | color.surface.1   | Calendar background                         |
| Text           | color.neutral.12  | Day and header text color                   |
| Selected Day   | color.primary.7   | Background for selected day                 |
| Today          | color.info.7      | Highlight for today                         |
| Event Marker   | color.success.7   | Color for event dots/markers                |
| Border         | color.border.2    | Border for grid and cells                   |
| Focus Ring     | color.focus.1     | Focus indicator for cells                   |
| Hover          | color.surface.2   | Background on cell hover                    |
| Disabled Text  | color.neutral.7   | Text color for disabled days                |

---

### Variants
All supported Calendar variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| MonthView     | Displays a full month      | Month navigation                           | Background, Border, Text   | Default  |
| WeekView      | Displays a week            | Week navigation                            | Background, Border, Text   |          |
| WithEvents    | Includes event markers     | Displays events or availability            | Event Marker, Background   |          |

---

### States
Calendar states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Calendar is visible, not focused or hovered      | Background, Text, Border    |
| Hover (cell)         | Day cell is hovered                              | Hover, Text, Border         |
| Focus (cell)         | Day cell is focused via keyboard                 | Focus Ring, Border          |
| Selected             | Day is selected                                  | Selected Day, Text          |
| Today                | Day is today                                     | Today, Text                 |
| Disabled             | Day is not selectable                            | Disabled Text, Background   |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, selected uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Calendar:
- Use appropriate ARIA roles (`grid`, `gridcell`, `row`, `columnheader`).
- Announce selected and focused dates to screen readers.
- Support keyboard navigation for date selection (arrow keys, Enter, Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, selected, today, and disabled states (WCAG AA compliant).
- Calendar must be operable with assistive technologies and screen readers.
