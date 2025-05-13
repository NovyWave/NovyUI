## Banners
A horizontal bar or box used to display important messages, promotions, or alerts.
- **Id:** Banners
- **Appearance:** A horizontal bar or box with a message, icon, and optional action button. May be colored to indicate importance or type (e.g., warning, promo).
- **Behavior:** Static or dismissible. May animate in/out or auto-dismiss after a timeout.
- **Components:**
  - [Alert](../components/Alert.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)

---

### Token Usage
The following table lists all design tokens used by the Banners block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Banner background                  |
| Text         | color.neutral.12  | Banner message text                |
| Icon         | color.primary.7   | Icon color                         |
| Button       | color.primary.7   | Action button background           |
| Border       | color.border.2    | Banner border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Banners variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Announcement  | Neutral/info color, message text, optional icon. | Static or may auto-dismiss after timeout. | All above           |       |
| Promo         | Highlighted with promo color/style, may include CTA button. | May be clickable or dismissible. | All above           |       |
| Warning       | Warning color, warning icon, and message.    | May require user dismissal or action.      | All above           |       |

---

### States
Banners states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of banner.          | All above             |
| Focused   | Banner or button is focused.       | Focus Ring            |
| Dismissed | Banner is dismissed/hidden.        | Background, Border    |

---

### Accessibility
Accessibility features and requirements for Banners:
- Keyboard navigation: Tab to banner and action button, Enter/Space to activate.
- ARIA roles/attributes: role="alert" or "status" for live messages.
- Color contrast: Sufficient for all text, icons, and buttons.
- Focus indicator: Visible and uses the focus token.
