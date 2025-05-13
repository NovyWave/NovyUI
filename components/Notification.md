## Notification
🔔 A temporary message that appears to inform the user of an event or status.
- **Id:** Notification
- **Appearance:** A small box that appears temporarily, usually at the corner or bottom of the screen. Shows message, icon, and optional action button.
- **Behavior:** Appears in response to events. Auto-dismisses after timeout or can be dismissed manually. Supports stacking and different types (success, error, etc.).
- **Used in Blocks:**
  - [NotificationCenter](../blocks/NotificationCenter.md)

---

### Token Usage
The following table lists all design tokens used by the Notification component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Notification background    |
| Text        | color.neutral.12  | Notification text color    |
| Border      | color.border.2    | Notification border        |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for notification |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Notification variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple notification        | Basic notification display                 | Background, Text, Border   | Default  |
| WithIcon      | Includes icon              | Displays icon content                      | Icon, Background, Border   |          |
| WithActions   | Includes action buttons    | Displays action controls                   | Background, Border, Text   |          |
| Success       | Success notification       | Green color for success                    | Icon, Background, Border   |          |
| Error         | Error notification         | Red color for error                        | Icon, Background, Border   |          |
| Warning       | Warning notification       | Yellow color for warning                   | Icon, Background, Border   |          |
| Info          | Info notification          | Blue color for info                        | Icon, Background, Border   |          |

---

### States
Notification states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Notification is visible, not focused or selected | Background, Text, Border    |
| Focus                | Notification is focused via keyboard             | Focus Ring, Border          |
| Disabled             | Notification is not interactive                  | Disabled, Border            |
| Success              | Notification is in success state                 | Icon, Background, Border    |
| Error                | Notification is in error state                   | Icon, Background, Border    |
| Warning              | Notification is in warning state                 | Icon, Background, Border    |
| Info                 | Notification is in info state                    | Icon, Background, Border    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Notification:
- Use ARIA roles (`status`, `alert`, `aria-live`).
- Announce notification content and updates to screen readers.
- Support keyboard navigation to and from notifications (Tab, Shift+Tab).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Notification must be operable with assistive technologies and screen readers.
