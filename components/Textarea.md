## Textarea
📝 A multi-line input field for entering larger amounts of text.
- **Id:** Textarea
- **Appearance:** A multi-line text input box with optional label and placeholder. May show character count.
- **Behavior:** Accepts multi-line text input. Supports focus, disabled, and error states. May auto-resize to fit content.
- **Used in blocks:**
  - [Comments](blocks.md#comments)
  - [ContactCard](blocks.md#contact-card)
### Accessibility
- Use native `<textarea>` element.
- Provide associated label and instructions.
- Announce validation errors with `aria-describedby`.

### Variants
#### Textarea - **Basic**
- **Id:** Basic
- **Appearance:** Simple textarea.
- **Behavior:** Basic multi-line input.
#### Textarea - **Autosize**
- **Id:** Autosize
- **Appearance:** Auto-resizes to fit content.
- **Behavior:** Auto-resizing textarea.
#### Textarea - **With character count**
- **Id:** WithCharacterCount
- **Appearance:** Includes character count.
- **Behavior:** Displays character count.
