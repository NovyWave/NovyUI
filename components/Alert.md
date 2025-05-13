## Alert
⚠️ A message box used to display important information, feedback, or status updates to the user.
- **Id:** Alert
- **Appearance:** A colored box with an icon and message text. Color and icon reflect the alert type (e.g., green for success, red for error). May include a close (dismiss) button.
- **Behavior:** Appears in response to events or actions. Dismissible alerts can be closed by the user. May auto-dismiss after a timeout.
- **Used in blocks:**
  - [Authentication](../blocks/Authentication.md)
  - [Banners](../blocks/Banners.md)
  - [CookieConsentBanner](../blocks/CookieConsentBanner.md)
  - [ContactCard](../blocks/ContactCard.md)
  - [Error](../blocks/Error.md)

---

### Token Usage
The following table lists all design tokens used by the Alert component:
| Part         | Token Example      | Description                              |
|--------------|-------------------|------------------------------------------|
| Background   | color.surface.2   | Alert background color                   |
| Text         | color.neutral.12  | Alert message text color                 |
| Border       | color.border.2    | Border color for alert box               |
| Icon         | color.primary.7   | Icon color (varies by alert type)        |
| Focus Ring   | color.focus.1     | Focus indicator for dismiss button       |
| Shadow       | shadow.1          | Optional shadow for alert box            |

---

### Variants
All supported Alert variants are listed below:
| Variant Name   | Description                        | Appearance/Behavior                                 | Tokens Used                | Notes    |
|---------------|------------------------------------|-----------------------------------------------------|----------------------------|----------|
| Success       | Indicates a successful action      | Green color, success icon                          | Background, Icon, Text     |          |
| Error         | Indicates an error or failure      | Red color, error icon                              | Background, Icon, Text     |          |
| Warning       | Indicates a warning or caution     | Yellow color, warning icon                         | Background, Icon, Text     |          |
| Info          | Provides informational message     | Blue color, info icon                              | Background, Icon, Text     |          |
| Dismissible   | Can be dismissed by the user       | Includes close button, any alert type              | Focus Ring, Icon, Border   |          |

---

### States
Alert states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Alert is visible, not focused                    | Background, Border, Text    |
| Hover (dismiss btn)  | Dismiss button is hovered                        | Background, Border, Icon    |
| Focus (dismiss btn)  | Dismiss button is focused                        | Focus Ring, Border, Icon    |
| Active (dismiss btn) | Dismiss button is being pressed/clicked          | Background, Border, Icon    |
| Disabled             | Alert is not interactive                         | Text (muted), Icon (muted)  |
| Dismissed            | Alert is hidden/removed                          | N/A                        |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, background uses `color.surface.2`, etc.

---

### Accessibility
Accessibility features and requirements for Alert:
- Uses `role="alert"` or `role="status"` for screen reader announcement.
- Should be focusable if interactive (e.g., dismiss button).
- Dismiss button must be keyboard accessible and have visible focus indicator.
- Ensure sufficient color contrast for text and icons (WCAG AA compliant).
- Alert content should be concise and clearly describe the status or feedback.
- Auto-dismissed alerts should be announced to screen readers before removal.
