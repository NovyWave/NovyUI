## Dialog
🗨️ A popup overlay that displays content or actions requiring user attention.
- **Id:** Dialog
- **Appearance:** A centered overlay with a box containing title, content, and actions. Background is dimmed. May include close button and icon.
- **Behavior:** Opens in response to user action. Can be closed by button, overlay click, or escape key. Traps focus and disables background interaction.
- **Used in Blocks:**
  - [DialogModal](../blocks/DialogModal.md)

---

### Token Usage
The following table lists all design tokens used by the Dialog component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Dialog background          |
| Text        | color.neutral.12  | Dialog text color          |
| Border      | color.border.2    | Dialog border              |
| Header      | color.primary.7   | Header background          |
| Focus Ring  | color.focus.1     | Focus indicator for dialog |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Dialog variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple dialog              | Basic modal dialog                         | Background, Text, Border   | Default  |
| WithHeader    | Includes header            | Displays header background                 | Header, Background, Border |          |
| WithActions   | Includes action buttons    | Displays action controls                   | Background, Border, Text   |          |
| Fullscreen    | Fullscreen dialog          | Covers entire viewport                     | Background, Border, Text   |          |

---

### States
Dialog states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Dialog is visible, not focused or selected       | Background, Text, Border    |
| Focus                | Dialog is focused via keyboard                   | Focus Ring, Border          |
| Disabled             | Dialog is not interactive                        | Disabled, Border            |
| Open                 | Dialog is open                                   | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, header uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Dialog:
- Use ARIA roles (`dialog`, `document`).
- Announce dialog open/close and navigation to screen readers.
- Support keyboard navigation and focus trap (Tab, Shift+Tab, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Dialog must be operable with assistive technologies and screen readers.
