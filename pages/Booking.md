## Booking
A page for booking appointments, reservations, or events.
- **Id:** Booking
- **Appearance:** Booking form with calendar, time slots, and confirmation.
- **Behavior:** Allows users to select date/time, enter details, and confirm booking.
- **Blocks:**
  - [Calendar](../blocks/Calendar.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Booking page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Input border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Booking variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Appointment   | Book an appointment.                         | Calendar, time slots, form.                | All above           |       |
| Reservation   | Reserve a table or resource.                 | Calendar, form, confirmation.              | All above           |       |

---

### States
Booking states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of booking form.    | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Error     | Error message shown.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Booking:
- Keyboard navigation: Tab to all fields and buttons, Enter/Space to submit.
- ARIA roles/attributes: form, input, button, calendar.
- Color contrast: Sufficient for all text, inputs, and buttons.
- Focus indicator: Visible and uses the focus token.
