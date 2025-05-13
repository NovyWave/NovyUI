## Error
A block for displaying error messages or error states to users.
- **Id:** Error
- **Appearance:** Prominent message with icon and optional actions.
- **Behavior:** Communicates errors, may offer retry or help options.
- **Components:**
  - [Alert](../components/Alert.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Error](../pages/Error.md)
  - [Dashboard](../pages/Dashboard.md)

---

### Token Usage
The following table lists all design tokens used by the Error block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.danger.1    | Error background                   |
| Text         | color.danger.12   | Error message text                 |
| Icon         | color.danger.9    | Error icon color                   |
| Border       | color.danger.7    | Error border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Error variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Simple error message.                        | Static message with icon.                  | All above           |       |
| WithAction    | Error with retry/help button.                | Button shown for user action.              | All above           |       |
| FullPage      | Full-page error state.                       | Takes over main content area.              | All above           |       |

---

### States
Error states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal error display.              | All above             |
| Focused   | Button or alert is focused.        | Focus Ring            |
| Dismissed | Error message is dismissed.        | Background, Border    |

---

### Accessibility
Accessibility features and requirements for Error block:
- Keyboard navigation: Tab to button, Enter/Space to activate.
- ARIA roles/attributes: alert, status, and button.
- Color contrast: Sufficient for all text and icons.
- Focus indicator: Visible and uses the focus token.
