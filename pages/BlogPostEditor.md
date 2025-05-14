## BlogPostEditor
A page for writing and formatting blog posts with tags and a formatting toolbar.
- **Id:** BlogPostEditor
- **Appearance:** Rich text editor with formatting toolbar, tag input, and content area.
- **Behavior:** Supports text formatting, tagging, and live preview. Tag input allows adding/removing tags, and toolbar provides formatting options.
- **Blocks:**
  - [BlogPostEditor](../blocks/BlogPostEditor.md)
  - [BlogPostTagging](../blocks/BlogPostTagging.md)
  - [TextEditorToolbar](../blocks/TextEditorToolbar.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the BlogPostEditor page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Editor background                  |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Editor border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported BlogPostEditor variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Standard      | Standard blog post editor.                   | Editor with formatting toolbar, tags.      | All above           |       |
| Minimal       | Minimal editor with basic formatting.        | Simple textarea, minimal toolbar.          | All above           |       |

---

### States
BlogPostEditor states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of editor.          | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Disabled  | Editor is disabled.                | Border, Text          |

---

### Accessibility
Accessibility features and requirements for BlogPostEditor:
- Keyboard navigation: Tab to all fields and toolbar buttons, Enter/Space to activate.
- ARIA roles/attributes: form, input, button, toolbar.
- Color contrast: Sufficient for all text, inputs, and toolbar.
- Focus indicator: Visible and uses the focus token.
