## FileExplorer
A block for browsing and managing files and folders in a hierarchical view.
- **Id:** FileExplorer
- **Appearance:** Tree view of files/folders with icons and actions.
- **Behavior:** Allows navigation, selection, and file actions.
- **Components:**
  - [TreeView](../components/TreeView.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [FileExplorer](../pages/FileExplorer.md)

---

### Token Usage
The following table lists all design tokens used by the FileExplorer block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Explorer background                |
| Text         | color.neutral.12  | File/folder name text              |
| Icon         | color.neutral.8   | File/folder icon color             |
| Border       | color.border.2    | Tree border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported FileExplorer variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard file tree.                          | Static tree of files/folders.              | All above           |       |
| WithActions   | Tree with file/folder actions.               | Action buttons/icons for each item.        | All above           |       |
| WithPreviews  | Shows file previews.                         | Preview pane for selected file.            | All above           |       |

---

### States
FileExplorer states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of tree.            | All above             |
| Focused   | Item or action is focused.         | Focus Ring            |
| Selected  | File/folder is selected.           | Background, Border    |
| Disabled  | Item or action is disabled.        | Text, Icon            |

---

### Accessibility
Accessibility features and requirements for FileExplorer block:
- Keyboard navigation: Tab/Arrow keys to items, Enter/Space to select/activate.
- ARIA roles/attributes: tree, treeitem, group, and button.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
