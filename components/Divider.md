## Divider
🟰 A visual line or space used to separate content into distinct sections.
- **Id:** Divider
- **Appearance:** A thin horizontal or vertical line, sometimes with text or icon in the center. Used to separate content.
- **Behavior:** Static visual separator. May be interactive if used as a drag handle.
- **Used in blocks:**
  - [Section](../blocks/Section.md)

---

### Token Usage
The following table lists all design tokens used by the Divider component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Divider background         |
| Border      | color.border.2    | Divider line color         |
| Focus Ring  | color.focus.1     | Focus indicator for divider|
| Disabled    | color.neutral.7   | Disabled divider color     |

---

### Variants
All supported Divider variants are listed below:
| Variant Name   | Description         | Appearance/Behavior         | Tokens Used         | Notes    |
|---------------|---------------------|-----------------------------|---------------------|----------|
| Horizontal    | Horizontal divider  | Horizontal line             | Border, Background  | Default  |
| Vertical      | Vertical divider    | Vertical line               | Border, Background  |          |
| WithLabel     | Includes label      | Displays label text         | Border, Background  |          |

---

### States
Divider states and their token usage:
| State     | Description                                 | Token(s) affected   |
|-----------|---------------------------------------------|---------------------|
| Default   | Divider is visible, not focused or selected | Border, Background  |
| Focus     | Divider is focused via keyboard             | Focus Ring, Border  |
| Disabled  | Divider is not interactive                  | Disabled, Border    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`.

---

### Accessibility
Accessibility features and requirements for Divider:
- Use semantic `<hr>` or `<div role="separator">` markup and appropriate ARIA roles/attributes.
- Announce divider to screen readers.
- Support keyboard navigation if interactive (Tab, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for divider in all states (WCAG AA compliant).
- Divider must be operable with assistive technologies and screen readers.
