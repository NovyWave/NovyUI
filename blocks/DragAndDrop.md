## DragAndDrop
A block for enabling drag-and-drop interactions for items or lists.
- **Id:** DragAndDrop
- **Appearance:** List or grid of draggable items, with visual feedback during drag.
- **Behavior:** Allows users to drag items to reorder or move between lists/areas.
- **Components:**
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Kanban](../pages/Kanban.md)

---

### Token Usage
The following table lists all design tokens used by the DragAndDrop block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Item background                    |
| Text         | color.neutral.12  | Item text                          |
| Drag Handle  | color.primary.7   | Drag handle color                  |
| Border       | color.border.2    | Item border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported DragAndDrop variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard draggable list.                     | User can drag to reorder items.            | All above           |       |
| WithZones     | Drag between multiple drop zones.            | Items can be moved between lists/areas.    | All above           |       |
| WithHandles   | Items have visible drag handles.             | Drag handle shown for each item.           | All above           |       |

---

### States
DragAndDrop states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of items.           | All above             |
| Dragging  | Item is being dragged.             | Drag Handle, Border   |
| Dropped   | Item has been dropped.             | Background, Border    |
| Focused   | Item or handle is focused.         | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for DragAndDrop:
- Keyboard navigation: Tab to items and handles, Enter/Space to pick up/drop.
- ARIA roles/attributes: list, listitem, button, and drag-and-drop attributes.
- Color contrast: Sufficient for all text, backgrounds, and borders.
- Focus indicator: Visible and uses the focus token.
