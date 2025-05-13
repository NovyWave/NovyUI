## KeyboardShortcutsHelp
A block for displaying a list of available keyboard shortcuts and their descriptions.
- **Id:** KeyboardShortcutsHelp
- **Appearance:** Modal or panel with a table of shortcuts and actions.
- **Behavior:** Shows all available keyboard shortcuts for the app or page.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Table](../components/Table.md)
- **Used in pages:**
  - [Settings](../pages/Settings.md)
  - [Help](../pages/Help.md)

---

### Token Usage
The following table lists all design tokens used by the KeyboardShortcutsHelp block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Panel/modal background             |
| Text         | color.neutral.12  | Shortcut and description text       |
| Border       | color.border.2    | Table or panel border              |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported KeyboardShortcutsHelp variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard list of shortcuts.                  | Static table or list.                      | All above           |       |
| WithSearch    | Search/filter shortcuts.                     | Input to filter list.                      | All above           |       |
| WithCategories| Shortcuts grouped by category.               | Group headings for related shortcuts.      | All above           |       |

---

### States
KeyboardShortcutsHelp states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of shortcuts.       | All above             |
| Focused   | Row or input is focused.           | Focus Ring            |
| Disabled  | Input or row is disabled.          | Text, Border          |

---

### Accessibility
Accessibility features and requirements for KeyboardShortcutsHelp block:
- Keyboard navigation: Tab to rows and inputs, Arrow keys to navigate.
- ARIA roles/attributes: table, row, cell, and dialog.
- Color contrast: Sufficient for all text and borders.
- Focus indicator: Visible and uses the focus token.
