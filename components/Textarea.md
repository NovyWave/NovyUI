## Textarea
📝 A multi-line input field for entering larger amounts of text.
- **Id:** Textarea
- **Appearance:** A multi-line text input box with optional label and placeholder. May show character count.
- **Behavior:** Accepts multi-line text input. Supports focus, disabled, and error states. May auto-resize to fit content.
- **Used in blocks:**
  - [Comments](../blocks/Comments.md)
  - [ContactCard](../blocks/ContactCard.md)

---

### Token Usage
The following table lists all design tokens used by the Textarea component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Textarea background        |
| Text        | color.neutral.12  | Textarea text color        |
| Border      | color.border.2    | Textarea border            |
| Focus Ring  | color.focus.1     | Focus indicator for textarea |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Textarea variants are listed below:
| Variant Name       | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|-------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic             | Simple textarea            | Basic multi-line input                     | Background, Text, Border   | Default  |
| Autosize          | Auto-resizes to fit content| Auto-resizing textarea                     | Background, Border, Text   |          |
| WithCharacterCount| Includes character count   | Displays character count                   | Background, Border, Text   |          |

---

### States
Textarea states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Textarea is visible, not focused or selected     | Background, Text, Border    |
| Focus                | Textarea is focused via keyboard                 | Focus Ring, Border          |
| Disabled             | Textarea is not interactive                      | Disabled, Border            |
| Error                | Textarea is in error state                       | Border, Text                |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`.

---

### Accessibility
Accessibility features and requirements for Textarea:
- Provide keyboard navigation for all textarea controls.
- Use appropriate ARIA roles and attributes for textarea fields.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).

- Use native `<textarea>` element and appropriate `aria-*` attributes.
- Provide associated label and instructions for use.
- Announce validation errors with `aria-describedby` to screen readers.
- Support keyboard navigation and editing (Tab, Enter, typing).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Textarea must be operable with assistive technologies and screen readers.
