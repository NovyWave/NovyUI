## Notification Center
A block that displays a list or stack of notifications to the user.
- **Id:** NotificationCenter
- **Appearance:** A panel or overlay showing notifications, each with message, icon, and optional actions.
- **Behavior:** Shows notifications in response to events. Supports dismiss, stacking, and different types (success, error, etc.).
- **Components:**
  - [Notification](../components/Notification.md)
  - [Button](../components/Button.md)
- **Used in Pages:**
  - [Dashboard](../pages/Dashboard.md)
### Variants
#### Notification Center - **Stacked**
- **Id:** Stacked
- **Appearance:** Multiple notifications stacked vertically.
- **Behavior:** User can dismiss or interact with each notification.
#### Notification Center - **Single**
- **Id:** Single
- **Appearance:** Only one notification visible at a time.
- **Behavior:** New notification replaces previous.
