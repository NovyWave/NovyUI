## Tree View
🌳 A hierarchical list of items with collapsible/expandable nodes.
- **Id:** TreeView
- **Appearance:** A nested list of items, with parent items having expand/collapse controls. May include icons, checkboxes, or badges.
- **Behavior:** Clicking expands or collapses nodes to show or hide children. Supports selection, drag-and-drop, and keyboard navigation.
- **Used in blocks:**
  - [FileExplorer](../blocks/FileExplorer.md)

---

### Token Usage
The following table lists all design tokens used by the Tree View component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Tree background            |
| Text        | color.neutral.12  | Item text color            |
| Icon        | color.primary.7   | Icon color                 |
| Border      | color.border.2    | Border for tree container  |
| Focus Ring  | color.focus.1     | Focus indicator for items  |
| Selected Bg | color.primary.7   | Selected item background   |
| Disabled    | color.neutral.7   | Disabled item text         |

---

### Variants
All supported Tree View variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple tree view           | Basic tree navigation                      | Background, Text, Border   | Default  |
| WithIcons     | Includes icons             | Displays icon content                      | Icon, Background, Border   |          |
| WithCheckboxes| Includes checkboxes        | Supports item selection                    | Background, Border, Text   |          |
| NestedNodes   | Multiple nesting levels    | Displays hierarchical data                 | Background, Border, Text   |          |

---

### States
Tree View states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Item is visible, not focused or selected         | Background, Text, Border    |
| Focus                | Item is focused via keyboard                     | Focus Ring, Border          |
| Selected             | Item is selected                                 | Selected Bg, Text           |
| Disabled             | Item is not interactive                          | Disabled, Border            |
| Expanded             | Node is expanded                                 | Background, Border          |
| Collapsed            | Node is collapsed                                | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, selected uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Tree View:
- Provide keyboard navigation (arrow keys, Enter/Space to expand/collapse).
- Use appropriate ARIA roles (tree, treeitem, group) and attributes (aria-expanded, aria-selected).
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
