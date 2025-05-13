## GlobalCommandPalette
A block for displaying a searchable command palette for quick navigation and actions.
- **Id:** GlobalCommandPalette
- **Appearance:** Overlay modal with input and list of commands.
- **Behavior:** Opens with keyboard shortcut, allows searching and executing commands.
- **Components:**
  - [Command](../components/Command.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Settings](../pages/Settings.md)

---

### Token Usage
The following table lists all design tokens used by the GlobalCommandPalette block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Palette background                 |
| Text         | color.neutral.12  | Command text                       |
| Highlight    | color.primary.7   | Highlighted command or match       |
| Border       | color.border.2    | Palette border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported GlobalCommandPalette variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard command palette.                    | Search and execute commands.               | All above           |       |
| WithCategories| Commands grouped by category.                | Group headings for commands.               | All above           |       |
| WithShortcuts | Shows keyboard shortcuts for commands.       | Shortcut hints in list.                    | All above           |       |

---

### States
GlobalCommandPalette states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of palette.         | All above             |
| Focused   | Input or command is focused.       | Focus Ring            |
| Selected  | Command is selected.               | Highlight, Border     |

---

### Accessibility
Accessibility features and requirements for GlobalCommandPalette block:
- Keyboard navigation: Tab/Arrow keys to commands, Enter/Space to execute.
- ARIA roles/attributes: dialog, listbox, option, and group.
- Color contrast: Sufficient for all text, highlights, and borders.
- Focus indicator: Visible and uses the focus token.
