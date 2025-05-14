## Kanban
A kanban board page for visualizing and managing tasks or projects. Features columns for task states, drag-and-drop, and task details.
- **Id:** Kanban
- **Appearance:** Columns for task states, cards for tasks, drag-and-drop between columns.
- **Behavior:** Allows adding, editing, moving, and deleting tasks; supports drag-and-drop and task details.
- **Blocks:**
  - [DragAndDrop](../blocks/DragAndDrop.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Kanban page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Card/column border                 |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Kanban variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Basic kanban board.                          | Columns, cards, drag-and-drop.             | All above           |       |
| WithSwimlanes | Kanban with swimlanes for grouping tasks.    | Swimlanes, columns, cards, drag-and-drop.  | All above           |       |

---

### States
Kanban states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of board.           | All above             |
| Focused   | Card or button is focused.         | Focus Ring            |
| Selected  | Task/card is selected.             | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Kanban:
- Keyboard navigation: Tab to all cards and columns, Arrow keys to move, Enter/Space to select/move.
- ARIA roles/attributes: list, button, region, grid.
- Color contrast: Sufficient for all text, cards, and controls.
- Focus indicator: Visible and uses the focus token.
