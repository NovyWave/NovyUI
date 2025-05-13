## Badge
🏷️ A small indicator used to display status, count, or highlight information on another element.
- **Id:** Badge
- **Appearance:** A small, rounded or pill-shaped label. Can display a number, icon, or short text. Often colored to indicate status or category (e.g., red for error, green for success). May be attached to another element (e.g., avatar, button) or stand alone.
- **Behavior:** Static by default. If used as a notification badge, updates dynamically to reflect changes (e.g., unread count). Can be interactive if used as a filter or tag (clickable/removable).
- **Used in blocks:**
  - [Navbars](../blocks/Navbars.md)
  - [Stats](../blocks/Stats.md)
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)

---

### Token Usage
The following table lists all design tokens used by the Badge component:
| Part         | Token Example      | Description                              |
|--------------|-------------------|------------------------------------------|
| Background   | color.surface.3   | Badge background color                   |
| Text         | color.neutral.12  | Badge text color                         |
| Border       | color.border.2    | Border for outlined badge                |
| Icon         | color.primary.7   | Icon color (if present)                  |
| Focus Ring   | color.focus.1     | Focus indicator for interactive badge    |
| Shadow       | shadow.1          | Optional shadow for badge                |

---

### Variants
All supported Badge variants are listed below:
| Variant Name   | Description                        | Appearance/Behavior                                 | Tokens Used                | Notes    |
|---------------|------------------------------------|-----------------------------------------------------|----------------------------|----------|
| Solid         | Solid color background              | Static display, colored background                  | Background, Text           | Default  |
| Outline       | Outline border, transparent bg      | Static display, border only                         | Border, Text               |          |
| Dot           | Small dot indicator                 | Indicates status or notification                    | Background                 |          |
| WithIcon      | Includes an icon                    | Icon indicates status or category                   | Icon, Background, Text     |          |
| WithCount     | Displays a number                   | Indicates count or quantity                         | Background, Text           |          |

---

### States
Badge states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Badge is visible, not interactive                | Background, Border, Text    |
| Focus (interactive)  | Badge is focused via keyboard                    | Focus Ring, Border          |
| Hover (interactive)  | Badge is hovered                                 | Background, Border          |
| Active (interactive) | Badge is being pressed/clicked                   | Background, Border          |
| Disabled             | Badge is not interactive                         | Text (muted), Border        |
| Notification         | Badge updates to show new count/status           | Background, Text            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, background uses `color.surface.3`, etc.

---

### Accessibility
Accessibility features and requirements for Badge:
- Use `aria-label` or `aria-describedby` to describe badge meaning.
- Ensure badges with dynamic content use `aria-live` if important.
- Maintain color contrast for visibility (WCAG AA compliant).
- Badges must be keyboard accessible if interactive and have visible focus indicators.
- Badges attached to other elements should be announced with their context.
- Dot/status badges should have accessible labels for screen readers.
