## Context Menu
📋 A menu that appears on right-click or long-press, offering context-specific actions.
- **Id:** ContextMenu
- **Appearance:** A floating menu that appears on right-click or long-press. Contains a vertical list of actions, each with optional icon and shortcut.
- **Behavior:** Opens at cursor position. Selecting an item triggers its action. Supports nested submenus and keyboard navigation.
- **Used in blocks:**
  - [FileActionsContextMenu](blocks.md#file-actions-context-menu)
### Accessibility
- Use ARIA roles (`menu`, `menuitem`).
- Announce menu open/close to screen readers.
- Support keyboard navigation (arrow keys, Esc to close).

### Variants
#### Context Menu - **Right-click menu**
- **Id:** RightClickMenu
- **Appearance:** Opens on right-click.
- **Behavior:** Displays context menu.
#### Context Menu - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Context Menu - **With actions**
- **Id:** WithActions
- **Appearance:** Includes actions.
- **Behavior:** Displays action items.
