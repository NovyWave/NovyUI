## Popconfirm
❓ A confirmation popup that asks the user to verify an action before proceeding.
- **Id:** Popconfirm
- **Appearance:** A small popup with a message and confirm/cancel buttons. Appears near the triggering element.
- **Behavior:** Appears on action (e.g., delete). Confirms or cancels the action. Disappears on selection or outside click.
- **Used in blocks:** [Popconfirm Dialog](../blocks/PopconfirmDialog.md)

### Accessibility
- Use `role="dialog"` for the popup.
- Trap focus within the popconfirm while open.
- Announce confirmation message and options.

### Variants
#### Popconfirm - **Confirmation popover**
- **Id:** ConfirmationPopover
- **Appearance:** Confirmation message.
- **Behavior:** Confirms or cancels action.
