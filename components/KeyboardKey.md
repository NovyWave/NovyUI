## Keyboard Key
⌨️ A component for displaying keyboard input or shortcuts in documentation or UI hints.
- **Id:** KeyboardKey
- **Appearance:** Inline element styled to look like a keyboard key or combination (e.g., Ctrl, Cmd+C). Typically uses a monospace font, border, and subtle background.
- **Behavior:** Static display. Used for documentation, tooltips, or UI hints to indicate keyboard shortcuts or keys to press.
- **Used in blocks:**
  - [KeyboardShortcutsHelp](../blocks/KeyboardShortcutsHelp.md)
### Accessibility
- Use `<kbd>` element for semantic meaning.
- Provide text alternatives for complex shortcuts.

### Variants
#### Keyboard Key - **Single key**
- **Id:** SingleKey
- **Appearance:** Displays a single key (e.g., "Esc").
- **Behavior:** Static display.
#### Keyboard Key - **Key combination**
- **Id:** KeyCombination
- **Appearance:** Displays a combination of keys (e.g., "Ctrl + S").
- **Behavior:** Static display.
