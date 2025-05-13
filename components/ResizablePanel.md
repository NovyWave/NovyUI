## Resizable Panel
↔️ A container that can be resized by the user, often via a drag handle or border.
- **Id:** ResizablePanel
- **Appearance:** A container with a visible drag handle or border. Can be horizontal or vertical.
- **Behavior:** User drags handle to resize panel. Supports min/max size and snapping. May animate resize.
- **Used in Blocks:**
  - [SplitLayout](../blocks/SplitLayout.md)

---

### Token Usage
The following table lists all design tokens used by the Resizable Panel component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Panel background           |
| Border      | color.border.2    | Panel border and handle    |
| Focus Ring  | color.focus.1     | Focus indicator for handle |
| Disabled    | color.neutral.7   | Disabled overlay           |

---

### Variants
All supported Resizable Panel variants are listed below:
| Variant Name   | Description         | Appearance/Behavior         | Tokens Used         | Notes    |
|---------------|---------------------|-----------------------------|---------------------|----------|
| Horizontal    | Horizontal layout   | Resizes horizontally        | Background, Border  | Default  |
| Vertical      | Vertical layout     | Resizes vertically          | Background, Border  |          |
| WithContent   | Includes content    | Displays panel content      | Background, Border  |          |

---

### States
Resizable Panel states and their token usage:
| State     | Description                                 | Token(s) affected   |
|-----------|---------------------------------------------|---------------------|
| Default   | Panel is visible, not focused or selected   | Background, Border  |
| Focus     | Handle is focused via keyboard              | Focus Ring, Border  |
| Disabled  | Panel is not interactive                    | Disabled, Border    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`.

---

### Accessibility
Accessibility features and requirements for Resizable Panel:
- Provide keyboard navigation for resizing and moving the panel.
- Use appropriate ARIA roles and attributes for panel and resize handles.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
