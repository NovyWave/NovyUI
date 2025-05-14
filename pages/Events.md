## Events
A page listing upcoming or past events, with details such as date, location, description, and registration options.
- **Id:** Events
- **Appearance:** List or grid of events, each with date, location, description, and registration button.
- **Behavior:** Allows users to view event details, register, and filter by date or type.
- **Blocks:**
  - [Events](../blocks/Events.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Events page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Event card border                  |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Events variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| List          | List of events.                              | List view, event details, register button. | All above           |       |
| Grid          | Grid of events.                              | Grid view, event details, register button. | All above           |       |

---

### States
Events states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of events.          | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Registered| User has registered for event.     | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Events:
- Keyboard navigation: Tab to all events and buttons, Enter/Space to register.
- ARIA roles/attributes: list, button, region.
- Color contrast: Sufficient for all text, events, and buttons.
- Focus indicator: Visible and uses the focus token.
