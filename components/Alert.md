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
### Accessibility
- Uses `role="alert"` or `role="status"` for screen reader announcement.
- Should be focusable if interactive (e.g., dismiss button).
- Ensure sufficient color contrast for text and icons.

### Variants
#### Alert - **Success**
- **Id:** Success
- **Appearance:** Green color and success icon.
- **Behavior:** Indicates a successful action or event.
#### Alert - **Error**
- **Id:** Error
- **Appearance:** Red color and error icon.
- **Behavior:** Indicates an error or failure.
#### Alert - **Warning**
- **Id:** Warning
- **Appearance:** Yellow color and warning icon.
- **Behavior:** Indicates a warning or caution.
#### Alert - **Info**
- **Id:** Info
- **Appearance:** Blue color and info icon.
- **Behavior:** Provides informational message.
#### Alert - **Dismissible**
- **Id:** Dismissible
- **Appearance:** Includes a close button.
- **Behavior:** Can be dismissed by the user.
