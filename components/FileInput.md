## File Input
📤 An input field for selecting one or more files from the user's device.
- **Id:** FileInput
- **Appearance:** An input field with a button to select files. May show selected file name(s) and a clear button.
- **Behavior:** Clicking button opens file picker. Selecting files updates the value. Supports multiple files and file type restrictions.
- **Used in blocks:** [File Actions Context Menu](../blocks/FileActionsContextMenu.md)

---

### Token Usage
The following table lists all design tokens used by the File Input component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Input background           |
| Text        | color.neutral.12  | Input text color           |
| Border      | color.border.2    | Input border               |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for input  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported File Input variants are listed below:
| Variant Name   | Description         | Appearance/Behavior         | Tokens Used         | Notes    |
|---------------|---------------------|-----------------------------|---------------------|----------|
| Basic         | Simple file input   | Basic file selection        | Background, Text, Border   | Default  |
| WithIcon      | Includes icon       | Displays icon content       | Icon, Background, Border   |          |
| WithPreview   | Shows file preview  | Displays file preview after selection | Background, Border, Text   |          |

---

### States
File Input states and their token usage:
| State     | Description                                 | Token(s) affected   |
|-----------|---------------------------------------------|---------------------|
| Default   | Input is visible, not focused or selected   | Background, Text, Border    |
| Focus     | Input is focused via keyboard               | Focus Ring, Border          |
| Disabled  | Input is not interactive                    | Disabled, Border            |
| FileSelected | File is selected                         | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for File Input:
- Use ARIA roles (`textbox`, `button`, `aria-label`, `aria-describedby`).
- Announce file selection and upload status to screen readers.
- Support keyboard navigation and file selection (Tab, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- File Input must be operable with assistive technologies and screen readers.
