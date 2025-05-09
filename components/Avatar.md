## Avatar
👤 A visual representation of a user or entity, typically shown as an image, initials, or icon.
- **Id:** Avatar
- **Appearance:** A circular or rounded image, initials, or icon representing a user. Can include a small status indicator (dot) or be grouped with other avatars.
- **Behavior:** Displays user image or fallback (initials/icon). Status indicator updates in real time. Grouped avatars overlap or are displayed in a row.
- **Used in blocks:**
  - [ActivityFeed](../blocks/ActivityFeed.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Comments](../blocks/Comments.md)
  - [Footers](../blocks/Footers.md)
  - [Headers](../blocks/Headers.md)
  - [Navbars](../blocks/Navbars.md)
  - [Sidebar](../blocks/Sidebar.md)
  - [TeamSection](../blocks/TeamSection.md)
  - [Testimonials](../blocks/Testimonials.md)
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)
### Accessibility
- Provide `alt` text for images or use `aria-label` for initials/icons.
- Status indicators should have accessible labels (e.g., `aria-label="Online"`).
- Grouped avatars should be described for screen readers.

### Variants
#### Avatar - **Image**
- **Id:** Image
- **Appearance:** Displays a user image.
- **Behavior:** Shows the user's image.
#### Avatar - **Initials**
- **Id:** Initials
- **Appearance:** Displays user initials.
- **Behavior:** Shows the user's initials.
#### Avatar - **With status**
- **Id:** WithStatus
- **Appearance:** Includes a small status indicator.
- **Behavior:** Status indicator updates in real time.
#### Avatar - **Group**
- **Id:** Group
- **Appearance:** Displays multiple avatars in a group.
- **Behavior:** Grouped avatars overlap or are displayed in a row.
