## Rich Text Editor
📝 A text input area with formatting controls for creating styled content.
- **Id:** RichTextEditor
- **Appearance:** A text input area with a toolbar for formatting (bold, italic, lists, etc.). Shows styled content as user types.
- **Behavior:** User applies formatting via toolbar or shortcuts. Supports undo/redo, links, images, and HTML output.
- **Used in blocks:**
  - [BlogPostEditor](../blocks/BlogPostEditor.md)

---

### Token Usage
The following table lists all design tokens used by the Rich Text Editor component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Editor background          |
| Text        | color.neutral.12  | Editor text color          |
| Border      | color.border.2    | Editor border              |
| Icon        | color.primary.7   | Toolbar icon color         |
| Focus Ring  | color.focus.1     | Focus indicator for editor |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Rich Text Editor variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| ToolbarOptions| Includes formatting toolbar| Supports text formatting                   | Background, Text, Border, Icon | Default  |

---

### States
Rich Text Editor states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Editor is visible, not focused or selected       | Background, Text, Border    |
| Focus                | Editor is focused via keyboard                   | Focus Ring, Border          |
| Disabled             | Editor is not interactive                        | Disabled, Border            |
| Error                | Editor is in error state                         | Border, Text                |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Rich Text Editor:
- Provide keyboard navigation for all editor controls and content.
- Use appropriate ARIA roles and attributes for editor regions.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
