## Context Menu
📋 A menu that appears on right-click or long-press, offering context-specific actions.
- **Id:** ContextMenu
- **Appearance:** A floating menu that appears on right-click or long-press. Contains a vertical list of actions, each with optional icon and shortcut.
- **Behavior:** Opens at cursor position. Selecting an item triggers its action. Supports nested submenus and keyboard navigation.
- **Used in blocks:**
  - [FileActionsContextMenu](../blocks/FileActionsContextMenu.md)

---

### Token Usage
The following table lists all design tokens used by the Context Menu component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Menu background            |
| Text        | color.neutral.12  | Menu item text color       |
| Border      | color.border.2    | Menu border                |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for items  |
| Disabled    | color.neutral.7   | Disabled item text         |

---

### Variants
All supported Context Menu variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple context menu        | Basic right-click menu                     | Background, Text, Border   | Default  |
| WithIcons     | Includes icons             | Displays icon content                      | Icon, Background, Border   |          |
| WithGroups    | Grouped menu items         | Groups items by category                   | Background, Border, Text   |          |

---

### States
Context Menu states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Menu is visible, not focused or selected         | Background, Text, Border    |
| Focus                | Menu item is focused via keyboard                | Focus Ring, Border          |
| Selected             | Menu item is selected                            | Background, Text            |
| Disabled             | Menu item is not interactive                     | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Context Menu:
- Use ARIA roles (`menu`, `menuitem`).
- Announce selection and navigation to screen readers.
- Support keyboard navigation (Tab, Arrow keys, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Context Menu must be operable with assistive technologies and screen readers.
