## Blog Post Editor
A block for writing and formatting blog posts with rich text.
- **Id:** BlogPostEditor
- **Appearance:** A rich text editor with formatting toolbar and content area.
- **Behavior:** Supports text formatting, images, and links.
- **Components:**
  - [RichTextEditor](../components/RichTextEditor.md)
- **Used in pages:**
  - [Editor](../pages/Editor.md)

---

### Token Usage
The following table lists all design tokens used by the BlogPostEditor block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Editor background                  |
| Text         | color.neutral.12  | Main text                          |
| Toolbar      | color.surface.2   | Toolbar background                 |
| Button       | color.primary.7   | Toolbar button background          |
| Border       | color.border.2    | Editor border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported BlogPostEditor variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Simple editor with formatting toolbar.       | Supports basic text formatting.            | All above           |       |
| WithPreview   | Editor with live preview pane.               | Shows formatted content as you type.       | All above           |       |

---

### States
BlogPostEditor states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of editor.          | All above             |
| Focused   | Editor or toolbar button focused.  | Focus Ring            |
| Disabled  | Editor is disabled/read-only.      | Toolbar, Text         |

---

### Accessibility
Accessibility features and requirements for BlogPostEditor:
- Keyboard navigation: Tab to toolbar and content area, Enter/Space to activate buttons.
- ARIA roles/attributes: toolbar, button, textbox, and formatting controls.
- Color contrast: Sufficient for all text, toolbar, and buttons.
- Focus indicator: Visible and uses the focus token.
