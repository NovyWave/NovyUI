## FileActionsContextMenu
A block for displaying a context menu with file-related actions.
- **Id:** FileActionsContextMenu
- **Appearance:** Menu with list of actions, icons, and separators.
- **Behavior:** Opens on right-click or button, allows selection of file actions.
- **Components:**
  - [ContextMenu](../components/ContextMenu.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [FileExplorer](../pages/FileExplorer.md)
  - [Dashboard](../pages/Dashboard.md)

---

### Token Usage
The following table lists all design tokens used by the FileActionsContextMenu block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Menu background                    |
| Text         | color.neutral.12  | Menu item text                     |
| Icon         | color.neutral.8   | Action icon color                  |
| Border       | color.border.2    | Menu border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported FileActionsContextMenu variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard context menu.                       | Static list of actions.                    | All above           |       |
| WithIcons     | Menu items have icons.                       | Icon shown for each action.                | All above           |       |
| WithGroups    | Actions grouped by type.                     | Group headings and separators.             | All above           |       |

---

### States
FileActionsContextMenu states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of menu.            | All above             |
| Focused   | Menu item is focused.              | Focus Ring            |
| Disabled  | Action is disabled.                | Text, Icon            |

---

### Accessibility
Accessibility features and requirements for FileActionsContextMenu block:
- Keyboard navigation: Tab/Arrow keys to menu items, Enter/Space to activate.
- ARIA roles/attributes: menu, menuitem, separator, and group.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
