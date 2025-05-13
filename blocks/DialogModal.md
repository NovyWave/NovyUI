## DialogModal
A block for displaying modal dialogs for alerts, confirmations, or forms.
- **Id:** DialogModal
- **Appearance:** Centered overlay with dialog content, title, and action buttons.
- **Behavior:** Opens/closes with animation, traps focus, and blocks background interaction.
- **Components:**
  - [Dialog](../components/Dialog.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Settings](../pages/Settings.md)
  - [Checkout](../pages/Checkout.md)

---

### Token Usage
The following table lists all design tokens used by the DialogModal block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Dialog background                  |
| Text         | color.neutral.12  | Dialog text                        |
| Overlay      | color.overlay.1   | Modal overlay background           |
| Border       | color.border.2    | Dialog border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported DialogModal variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard modal dialog.                       | Static or animated open/close.             | All above           |       |
| WithForm      | Dialog with form fields.                     | User can submit form in modal.             | All above           |       |
| Confirmation  | Dialog for confirming actions.               | Shows confirm/cancel buttons.              | All above           |       |

---

### States
DialogModal states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of dialog.          | All above             |
| Focused   | Button or input is focused.        | Focus Ring            |
| Disabled  | Button or input is disabled.       | Button, Text          |

---

### Accessibility
Accessibility features and requirements for DialogModal:
- Keyboard navigation: Tab to focusable elements, Enter/Space to activate.
- ARIA roles/attributes: dialog, alertdialog, and modal.
- Color contrast: Sufficient for all text, backgrounds, and overlays.
- Focus indicator: Visible and uses the focus token.
