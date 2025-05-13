## Keyboard Key
⌨️ A component for displaying keyboard input or shortcuts in documentation or UI hints.
- **Id:** KeyboardKey
- **Appearance:** Inline element styled to look like a keyboard key or combination (e.g., Ctrl, Cmd+C). Typically uses a monospace font, border, and subtle background.
- **Behavior:** Static display. Used for documentation, tooltips, or UI hints to indicate keyboard shortcuts or keys to press.
- **Used in blocks:**
  - [KeyboardShortcutsHelp](../blocks/KeyboardShortcutsHelp.md)

---

### Token Usage
The following table lists all design tokens used by the Keyboard Key component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Key background             |
| Text        | color.neutral.12  | Key text color             |
| Border      | color.border.2    | Key border                 |
| Focus Ring  | color.focus.1     | Focus indicator for key    |
| Disabled    | color.neutral.7   | Disabled key text          |

---

### Variants
All supported Keyboard Key variants are listed below:
| Variant Name   | Description         | Appearance/Behavior         | Tokens Used         | Notes    |
|---------------|---------------------|-----------------------------|---------------------|----------|
| Basic         | Simple key          | Basic keyboard key          | Background, Text, Border   | Default  |
| WithIcon      | Includes icon       | Displays icon content       | Background, Border, Text   |          |
| WithLabel     | Includes label      | Displays label text         | Background, Border, Text   |          |

---

### States
Keyboard Key states and their token usage:
| State     | Description                                 | Token(s) affected   |
|-----------|---------------------------------------------|---------------------|
| Default   | Key is visible, not focused or selected     | Background, Text, Border    |
| Focus     | Key is focused via keyboard                 | Focus Ring, Border          |
| Disabled  | Key is not interactive                      | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`.

---

### Accessibility
Accessibility features and requirements for Keyboard Key:
- Use semantic markup (`<kbd>`) and appropriate ARIA roles/attributes.
- Announce key labels and status to screen readers.
- Support keyboard navigation to and from key elements (Tab, Shift+Tab).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for key, text, and border in all states (WCAG AA compliant).
- Keyboard Key must be operable with assistive technologies and screen readers.
