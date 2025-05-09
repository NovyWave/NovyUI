## Rich Text Editor
📝 A text input area with formatting controls for creating styled content.
- **Id:** RichTextEditor
- **Appearance:** A text input area with a toolbar for formatting (bold, italic, lists, etc.). Shows styled content as user types.
- **Behavior:** User applies formatting via toolbar or shortcuts. Supports undo/redo, links, images, and HTML output.
- **Used in blocks:**
  - [BlogPostEditor](../blocks/BlogPostEditor.md)
### Accessibility
- Use ARIA roles (`textbox`, `toolbar`, `button`).
- Announce formatting changes and selection.
- Support keyboard shortcuts for formatting.

### Variants
#### Rich Text Editor - **Toolbar options (bold, italic, underline, etc.)**
- **Id:** ToolbarOptions
- **Appearance:** Includes formatting toolbar.
- **Behavior:** Supports text formatting.
