## NotificationCenter
A block for displaying a list of notifications in a panel or dropdown.
- **Id:** NotificationCenter
- **Appearance:** Panel or dropdown with notification items, icons, and actions.
- **Behavior:** Shows unread/read notifications, allows marking as read or clearing.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
  - [List](../components/List.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Settings](../pages/Settings.md)

---

### Token Usage
The following table lists all design tokens used by the NotificationCenter block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Panel background                   |
| Text         | color.neutral.12  | Notification text                  |
| Icon         | color.primary.7   | Notification icon color            |
| Border       | color.border.2    | Panel border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported NotificationCenter variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard notification panel.                 | Static list of notifications.              | All above           |       |
| WithActions   | Notifications have action buttons.           | Buttons for each notification.             | All above           |       |
| WithTabs      | Panel with tabs for notification types.      | Tabs for grouping notifications.           | All above           |       |

---

### States
NotificationCenter states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of notifications.   | All above             |
| Focused   | Notification or button is focused. | Focus Ring            |
| Unread    | Notification is unread.            | Background, Border    |

---

### Accessibility
Accessibility features and requirements for NotificationCenter block:
- Keyboard navigation: Tab to notifications and actions, Enter/Space to activate.
- ARIA roles/attributes: list, listitem, button, and region.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
