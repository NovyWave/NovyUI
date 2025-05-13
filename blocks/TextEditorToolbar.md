## TextEditorToolbar
A block for displaying a toolbar with formatting and editing controls for a text editor.
- **Id:** TextEditorToolbar
- **Appearance:** Horizontal bar with buttons/icons for formatting actions.
- **Behavior:** Allows users to format, style, and manipulate text in an editor.
- **Components:**
  - [Button](../components/Button.md)
  - [Icon](../components/Icon.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Editor](../pages/Editor.md)
  - [BlogPostEditor](../pages/BlogPostEditor.md)

---

### Token Usage
The following table lists all design tokens used by the TextEditorToolbar block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Toolbar background                 |
| Text         | color.neutral.12  | Button and label text              |
| Icon         | color.primary.7   | Icon color                         |
| Border       | color.border.2    | Toolbar border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported TextEditorToolbar variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard toolbar with formatting buttons.    | Static set of actions.                     | All above           |       |
| WithDropdowns | Toolbar includes dropdowns for styles.       | Dropdown menus for formatting.             | All above           |       |
| WithCustom    | Customizable toolbar actions.                | User can add/remove actions.               | All above           |       |

---

### States
TextEditorToolbar states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of toolbar.         | All above             |
| Focused   | Button or dropdown is focused.     | Focus Ring            |
| Disabled  | Action is disabled.                | Text, Icon            |

---

### Accessibility
Accessibility features and requirements for TextEditorToolbar block:
- Keyboard navigation: Tab to buttons and dropdowns, Enter/Space to activate.
- ARIA roles/attributes: toolbar, button, and menu.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
