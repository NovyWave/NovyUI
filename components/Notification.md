## Notification
🔔 A temporary message that appears to inform the user of an event or status.
- **Id:** Notification
- **Appearance:** A small box that appears temporarily, usually at the corner or bottom of the screen. Shows message, icon, and optional action button.
- **Behavior:** Appears in response to events. Auto-dismisses after timeout or can be dismissed manually. Supports stacking and different types (success, error, etc.).
- **Used in Blocks:**
  - [NotificationCenter](../blocks/NotificationCenter.md)

### Accessibility
- Use `role="status"` or `role="alert"` for notifications.
- Announce new notifications to screen readers.
- Ensure dismiss buttons are keyboard accessible.

### Variants
#### Notification - **Success**
- **Id:** NotificationSuccess
- **Appearance:** Green color and success icon.
- **Behavior:** Indicates a successful action or event.
#### Notification - **Error**
- **Id:** NotificationError
- **Appearance:** Red color and error icon.
- **Behavior:** Indicates an error or failure.
#### Notification - **Info**
- **Id:** NotificationInfo
- **Appearance:** Blue color and info icon.
- **Behavior:** Provides informational message.
#### Notification - **Warning**
- **Id:** NotificationWarning
- **Appearance:** Yellow color and warning icon.
- **Behavior:** Indicates a warning or caution.
#### Notification - **Custom icon**
- **Id:** NotificationCustomIcon
- **Appearance:** Includes custom icon.
- **Behavior:** Displays custom icon.
#### Notification - **With actions**
- **Id:** NotificationWithActions
- **Appearance:** Includes action button.
- **Behavior:** Supports interactive actions.
#### Notification - **Temporary (snackbar)**
- **Id:** NotificationTemporary
- **Appearance:** Temporary display.
- **Behavior:** Auto-dismisses after timeout.
#### Notification - **Stacking**
- **Id:** NotificationStacking
- **Appearance:** Supports stacking.
- **Behavior:** Stacks notifications.
#### Notification - **Bottom position**
- **Id:** NotificationBottomPosition
- **Appearance:** Displays at bottom.
- **Behavior:** Bottom position display.
