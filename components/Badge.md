## Badge
🏷️ A small indicator used to display status, count, or highlight information on another element.
- **Id:** Badge
- **Appearance:** A small, rounded or pill-shaped label. Can display a number, icon, or short text. Often colored to indicate status or category (e.g., red for error, green for success). May be attached to another element (e.g., avatar, button) or stand alone.
- **Behavior:** Static by default. If used as a notification badge, updates dynamically to reflect changes (e.g., unread count). Can be interactive if used as a filter or tag (clickable/removable).
- **Used in blocks:**
  - [Navbars](../blocks/Navbars.md)
  - [Stats](../blocks/Stats.md)
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)
### Accessibility
- Use `aria-label` or `aria-describedby` to describe badge meaning.
- Ensure badges with dynamic content use `aria-live` if important.
- Maintain color contrast for visibility.

### Variants
#### Badge - **Solid**
- **Id:** Solid
- **Appearance:** Solid color background.
- **Behavior:** Static display.
#### Badge - **Outline**
- **Id:** Outline
- **Appearance:** Outline border with transparent background.
- **Behavior:** Static display.
#### Badge - **Dot**
- **Id:** Dot
- **Appearance:** Small dot indicator.
- **Behavior:** Indicates status or notification.
#### Badge - **With icon**
- **Id:** WithIcon
- **Appearance:** Includes an icon.
- **Behavior:** Icon indicates status or category.
#### Badge - **With count**
- **Id:** WithCount
- **Appearance:** Displays a number.
- **Behavior:** Indicates count or quantity.
