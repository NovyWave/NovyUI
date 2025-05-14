## FileManagement
A page for browsing files, assigning roles, and file actions.
- **Id:** FileManagement
- **Appearance:** File explorer with expandable/collapsible folders and files, user role assignment, and context menu for file actions.
- **Behavior:** Allows navigation, selection, file management actions (rename, delete, etc.), assigning users to roles, and drag-and-drop sorting or uploads.
- **Blocks:**
  - [FileExplorer](../blocks/FileExplorer.md)
  - [UserRoleAssignment](../blocks/UserRoleAssignment.md)
  - [FileActionsContextMenu](../blocks/FileActionsContextMenu.md)
  - [DragAndDrop](../blocks/DragAndDrop.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the FileManagement page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | File/folder border                 |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported FileManagement variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| FileExplorer  | File browser with folder tree, file actions, and drag handles. | Navigation, selection, file management, drag-and-drop. | All above           |       |

---

### States
FileManagement states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of files/folders.   | All above             |
| Focused   | Item or button is focused.         | Focus Ring            |
| Selected  | File/folder is selected.           | Border, Text          |

---

### Accessibility
Accessibility features and requirements for FileManagement:
- Keyboard navigation: Tab to all items and actions, Arrow keys to navigate, Enter/Space to select.
- ARIA roles/attributes: tree, grid, button, region.
- Color contrast: Sufficient for all text, items, and controls.
- Focus indicator: Visible and uses the focus token.
