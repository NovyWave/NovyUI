## Dialog
🗨️ A popup overlay that displays content or actions requiring user attention.
- **Id:** Dialog
- **Appearance:** A centered overlay with a box containing title, content, and actions. Background is dimmed. May include close button and icon.
- **Behavior:** Opens in response to user action. Can be closed by button, overlay click, or escape key. Traps focus and disables background interaction.
- **Used in Blocks:**
  - [DialogModal](../blocks/DialogModal.md)
### Accessibility
- Use `role="dialog"` and `aria-modal="true"`.
- Trap focus within dialog while open.
- Announce dialog title and content to screen readers.
- Support closing with Esc key.

### Variants
#### Dialog - **Centered**
- **Id:** Centered
- **Appearance:** Centered overlay.
- **Behavior:** Centered modal.
#### Dialog - **Fullscreen**
- **Id:** Fullscreen
- **Appearance:** Fullscreen overlay.
- **Behavior:** Fullscreen modal.
#### Dialog - **With form**
- **Id:** WithForm
- **Appearance:** Includes form elements.
- **Behavior:** Supports form submission.
#### Dialog - **Nested dialogs**
- **Id:** NestedDialogs
- **Appearance:** Supports nested dialogs.
- **Behavior:** Nested modal interactions.
