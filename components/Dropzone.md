## Dropzone
🗃️ A component for uploading files via drag-and-drop or file selection.
- **Id:** Dropzone
- **Appearance:** A bordered area with an icon and prompt text. Shows file previews or list of uploaded files. May include progress bars and remove buttons.
- **Behavior:** Dragging files over highlights the area. Dropping or selecting files uploads them. Supports multiple files, file type restrictions, and progress display.
- **Used in blocks:**
  - [DragAndDrop](../blocks/DragAndDrop.md)

---

### Token Usage
The following table lists all design tokens used by the Dropzone component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Dropzone background        |
| Text        | color.neutral.12  | Dropzone text color        |
| Border      | color.border.2    | Dropzone border            |
| Focus Ring  | color.focus.1     | Focus indicator for dropzone|
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Dropzone variants are listed below:
| Variant Name   | Description         | Appearance/Behavior         | Tokens Used         | Notes    |
|---------------|---------------------|-----------------------------|---------------------|----------|
| Basic         | Simple dropzone     | Basic file drop area        | Background, Text, Border   | Default  |
| WithIcon      | Includes icon       | Displays icon content       | Background, Border, Text   |          |
| WithPreview   | Shows file preview  | Displays file preview after drop | Background, Border, Text   |          |

---

### States
Dropzone states and their token usage:
| State     | Description                                 | Token(s) affected   |
|-----------|---------------------------------------------|---------------------|
| Default   | Dropzone is visible, not focused or selected| Background, Text, Border    |
| Focus     | Dropzone is focused via keyboard            | Focus Ring, Border          |
| Disabled  | Dropzone is not interactive                 | Disabled, Border            |
| DragActive| File is being dragged over dropzone         | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`.

---

### Accessibility
Accessibility features and requirements for Dropzone:
- Use ARIA roles (`region`, `button`, `aria-label`, `aria-describedby`).
- Announce file selection and upload status to screen readers.
- Support keyboard navigation and file selection (Tab, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Dropzone must be operable with assistive technologies and screen readers.
