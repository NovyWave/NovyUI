## PopconfirmDialog
A block for displaying a confirmation dialog before performing a critical action.
- **Id:** PopconfirmDialog
- **Appearance:** Small modal or popover with message and confirm/cancel buttons.
- **Behavior:** Blocks action until user confirms or cancels.
- **Components:**
  - [Dialog](../components/Dialog.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Settings](../pages/Settings.md)

---

### Token Usage
The following table lists all design tokens used by the PopconfirmDialog block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Dialog background                  |
| Text         | color.neutral.12  | Dialog text                        |
| Button       | color.primary.7   | Confirm button color               |
| Border       | color.border.2    | Dialog border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported PopconfirmDialog variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard confirm dialog.                     | Confirm/cancel buttons.                    | All above           |       |
| WithWarning   | Dialog with warning styling.                 | Emphasized warning color.                  | All above           |       |
| WithDetails   | Dialog includes extra details.               | Additional message or info.                | All above           |       |

---

### States
PopconfirmDialog states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Dialog hidden.                     | All above             |
| Visible   | Dialog shown.                      | Background, Border    |
| Focused   | Button is focused.                 | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for PopconfirmDialog block:
- Keyboard navigation: Tab to buttons, Enter/Space to confirm/cancel.
- ARIA roles/attributes: dialog, alertdialog, and button.
- Color contrast: Sufficient for all text, buttons, and borders.
- Focus indicator: Visible and uses the focus token.
