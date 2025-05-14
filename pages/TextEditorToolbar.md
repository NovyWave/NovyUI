## TextEditorToolbar
A toolbar for a text or rich text editor, providing formatting and editing controls.
- **Id:** TextEditorToolbar
- **Appearance:** Horizontal toolbar with icons/buttons for formatting, undo/redo, and custom controls. May include dropdowns or color pickers.
- **Behavior:** Users can apply formatting, insert elements, and use keyboard shortcuts. Supports disabled and active states.
- **Blocks:**
  - [TextEditorToolbar](../blocks/TextEditorToolbar.md)
- **Components:**
  - [Button](../components/Button.md)
  - [Icon](../components/Icon.md)
  - [Dropdown](../components/Dropdown.md)

---

### Token Usage
The following table lists all design tokens used by the TextEditorToolbar page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Toolbar      | background   | Toolbar background color   |
| Button       | color        | Icon/button color          |
| Layout       | spacing      | Button spacing             |

---

### Variants
All supported TextEditorToolbar variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Basic        | Basic formatting controls  | Bold, italic, underline    | color, background, spacing | |
| Advanced     | Advanced formatting        | Lists, links, code, etc.   | color, background, spacing | |
| Custom       | With custom controls       | Custom buttons, dropdowns  | color, background, spacing | |

---

### States
TextEditorToolbar states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Toolbar ready for use      | background, color |
| Disabled     | Controls disabled          | color, background |
| Active       | Button active/pressed      | color, background |

---

### Accessibility
Accessibility features and requirements for TextEditorToolbar:
- Keyboard accessible controls for all actions
- ARIA labels for buttons and toolbar
- Sufficient color contrast for icons and background
- Visible focus indicator for all interactive elements
