## Error
A page for displaying error messages, such as 404 or 500, with navigation options for recovery.
- **Id:** Error
- **Appearance:** Large error code/message, icon or illustration, and navigation buttons.
- **Behavior:** Static or may auto-redirect or provide links for user action.
- **Blocks:**
  - [Error](../blocks/Error.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Error page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Card or message border             |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Error variants are listed below:
| Variant Name     | Description                        | Appearance/Behavior                | Tokens Used         | Notes |
|------------------|------------------------------------|------------------------------------|---------------------|-------|
| 404 Not Found    | "404 Not Found" message            | Large message, navigation options  | All above           |       |
| 500 Internal     | "500 Internal Error" message       | Large message, navigation options  | All above           |       |
| Maintenance      | Site under maintenance message      | Maintenance message, nav options   | All above           |       |
| Access Denied    | Access denied message               | Denied message, nav options        | All above           |       |
| Coming Soon      | Feature coming soon message         | Coming soon message, nav options   | All above           |       |

---

### States
Error states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of error.           | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for Error:
- Keyboard navigation: Tab to all links and buttons, Enter/Space to activate.
- ARIA roles/attributes: region, alert, button.
- Color contrast: Sufficient for all text, messages, and buttons.
- Focus indicator: Visible and uses the focus token.
