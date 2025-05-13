## Tooltip
💡 A small popup that displays additional information when hovering or focusing on an element.
- **Id:** Tooltip
- **Appearance:** A small popup with text, appearing near the trigger element. May have an arrow pointing to the trigger.
- **Behavior:** Appears on hover or focus. Disappears on mouse leave or blur. May have a delay.
- **Used in blocks:**
  - [IconTooltips](../blocks/IconTooltips.md)

---

### Token Usage
The following table lists all design tokens used by the Tooltip component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.neutral.12  | Tooltip background         |
| Text        | color.surface.1   | Tooltip text color         |
| Border      | color.border.2    | Tooltip border             |
| Arrow       | color.neutral.12  | Arrow color                |
| Shadow      | shadow.1          | Tooltip shadow             |
| Focus Ring  | color.focus.1     | Focus indicator for trigger|

---

### Variants
All supported Tooltip variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple tooltip             | Basic tooltip display                      | Background, Text, Border   | Default  |
| WithArrow     | Includes arrow             | Points to trigger element                  | Arrow, Background, Border  |          |

---

### States
Tooltip states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Tooltip is hidden                                | N/A                        |
| Visible              | Tooltip is shown                                 | Background, Text, Border    |
| Focus                | Trigger is focused via keyboard                  | Focus Ring, Border          |
| Disabled             | Tooltip is not interactive                       | N/A                        |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, background uses `color.neutral.12`, etc.

---

### Accessibility
Accessibility features and requirements for Tooltip:
- Provide keyboard and mouse access to tooltips.
- Use appropriate ARIA roles (tooltip) and attributes (aria-describedby).
- Ensure tooltips are accessible to screen readers.
- Ensure sufficient color contrast for tooltip text and background (WCAG AA compliant).
- Tooltips must not trap focus and should be dismissible via keyboard.
