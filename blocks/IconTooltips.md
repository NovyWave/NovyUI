## IconTooltips
A block for displaying tooltips when hovering or focusing on icons.
- **Id:** IconTooltips
- **Appearance:** Small popup with text near an icon.
- **Behavior:** Shows tooltip on hover/focus, hides on blur/leave.
- **Components:**
  - [Tooltip](../components/Tooltip.md)
  - [Icon](../components/Icon.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Settings](../pages/Settings.md)

---

### Token Usage
The following table lists all design tokens used by the IconTooltips block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Tooltip background                 |
| Text         | color.neutral.12  | Tooltip text                       |
| Border       | color.border.2    | Tooltip border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported IconTooltips variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard tooltip on icon.                    | Shows on hover/focus.                      | All above           |       |
| WithDelay     | Tooltip appears after a delay.               | Delayed show/hide.                         | All above           |       |
| Persistent    | Tooltip remains visible until dismissed.     | Manual close or persistent.                | All above           |       |

---

### States
IconTooltips states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Tooltip hidden.                    | All above             |
| Visible   | Tooltip shown.                     | Background, Border    |
| Focused   | Icon is focused.                   | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for IconTooltips block:
- Keyboard navigation: Tab to icon, Enter/Space to show tooltip.
- ARIA roles/attributes: tooltip, describedby, and button.
- Color contrast: Sufficient for all text and borders.
- Focus indicator: Visible and uses the focus token.
