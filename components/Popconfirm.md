## Popconfirm
❓ A confirmation popup that asks the user to verify an action before proceeding.
- **Id:** Popconfirm
- **Appearance:** A small popup with a message and confirm/cancel buttons. Appears near the triggering element.
- **Behavior:** Appears on action (e.g., delete). Confirms or cancels the action. Disappears on selection or outside click.
- **Used in blocks:** [Popconfirm Dialog](../blocks/PopconfirmDialog.md)

---

### Token Usage
The following table lists all design tokens used by the Popconfirm component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Popconfirm background      |
| Text        | color.neutral.12  | Popconfirm text color      |
| Border      | color.border.2    | Popconfirm border          |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for popconfirm |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Popconfirm variants are listed below:
| Variant Name           | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|-----------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| ConfirmationPopover   | Confirmation message       | Confirms or cancels action                 | Background, Text, Border   | Default  |

---

### States
Popconfirm states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Popconfirm is visible, not focused or selected   | Background, Text, Border    |
| Focus                | Popconfirm is focused via keyboard               | Focus Ring, Border          |
| Disabled             | Popconfirm is not interactive                    | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Popconfirm:
- Use ARIA roles (`dialog`, `alertdialog`, `aria-describedby`).
- Announce confirmation prompts and actions to screen readers.
- Support keyboard navigation and activation (Tab, Enter/Space, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Popconfirm must be operable with assistive technologies and screen readers.
