## Tree View
🌳 A hierarchical list of items with collapsible/expandable nodes.
- **Id:** TreeView
- **Appearance:** A nested list of items, with parent items having expand/collapse controls. May include icons, checkboxes, or badges.
- **Behavior:** Clicking expands or collapses nodes to show or hide children. Supports selection, drag-and-drop, and keyboard navigation.
- **Used in blocks:**
  - [FileExplorer](blocks.md#file-explorer)
### Accessibility
- Use ARIA roles (`tree`, `treeitem`, `group`).
- Announce expanded/collapsed state with `aria-expanded`.
- Support keyboard navigation (arrow keys, Home/End).

### Variants
#### Tree View - **Basic**
- **Id:** Basic
- **Appearance:** Simple tree view.
- **Behavior:** Basic tree navigation.
#### Tree View - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Tree View - **With checkboxes**
- **Id:** WithCheckboxes
- **Appearance:** Includes checkboxes.
- **Behavior:** Supports item selection.
#### Tree View - **Nested nodes**
- **Id:** NestedNodes
- **Appearance:** Multiple nesting levels.
- **Behavior:** Displays hierarchical data.
