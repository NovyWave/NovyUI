## FileExplorer
A file explorer page for browsing, uploading, and managing files and folders. Features tree or grid views, file actions, and drag-and-drop.
- **Id:** FileExplorer
- **Appearance:** Tree or grid view of files/folders, with action buttons and drag-and-drop support.
- **Behavior:** Allows browsing, uploading, renaming, deleting, and moving files/folders.
- **Blocks:**
  - [FileExplorer](../blocks/FileExplorer.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the FileExplorer page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | File/folder border                 |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported FileExplorer variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| TreeView      | Hierarchical tree of files/folders.          | Tree view, expand/collapse, actions.       | All above           |       |
| GridView      | Grid of files/folders.                       | Grid view, actions, drag-and-drop.         | All above           |       |

---

### States
FileExplorer states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of files/folders.   | All above             |
| Focused   | Item or button is focused.         | Focus Ring            |
| Selected  | File/folder is selected.           | Border, Text          |

---

### Accessibility
Accessibility features and requirements for FileExplorer:
- Keyboard navigation: Tab to all items and actions, Arrow keys to navigate, Enter/Space to select.
- ARIA roles/attributes: tree, grid, button, region.
- Color contrast: Sufficient for all text, items, and controls.
- Focus indicator: Visible and uses the focus token.
