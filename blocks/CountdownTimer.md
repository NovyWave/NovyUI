## CountdownTimer
A block for displaying a countdown to a specific date or time.
- **Id:** CountdownTimer
- **Appearance:** Numeric or graphical timer showing time remaining.
- **Behavior:** Counts down in real time, triggers an event or action when complete.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Events](../pages/Events.md)

---

### Token Usage
The following table lists all design tokens used by the CountdownTimer block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Timer background                   |
| Text         | color.neutral.12  | Timer text                         |
| Number       | color.primary.7   | Countdown number color             |
| Border       | color.border.2    | Timer border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported CountdownTimer variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Simple numeric countdown.                    | Static or real-time update.                | All above           |       |
| WithButton    | Countdown with action button.                | Button shown to trigger action.            | All above           |       |
| Circular      | Graphical circular countdown.                | Animated SVG or canvas.                    | All above           |       |

---

### States
CountdownTimer states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of timer.           | All above             |
| Running   | Timer is counting down.            | Number, Text          |
| Finished  | Countdown complete.                | Text, Background      |
| Focused   | Button or timer is focused.        | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for CountdownTimer:
- Keyboard navigation: Tab to button, Enter/Space to activate.
- ARIA roles/attributes: timer, status, and button.
- Color contrast: Sufficient for all text and numbers.
- Focus indicator: Visible and uses the focus token.
