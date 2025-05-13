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

---

### Token Usage
The following table lists all design tokens used by the Avatar component:
| Part         | Token Example      | Description                              |
|--------------|-------------------|------------------------------------------|
| Background   | color.surface.2   | Avatar background color                  |
| Text         | color.neutral.12  | Initials or icon color                   |
| Border       | color.border.2    | Border for avatar circle                 |
| Status       | color.success.7   | Status indicator color                   |
| Focus Ring   | color.focus.1     | Focus indicator for interactive avatar   |
| Shadow       | shadow.1          | Optional shadow for avatar               |

---

### Variants
All supported Avatar variants are listed below:
| Variant Name   | Description                        | Appearance/Behavior                                 | Tokens Used                | Notes    |
|---------------|------------------------------------|-----------------------------------------------------|----------------------------|----------|
| Image         | Displays a user image              | Shows the user's image                              | Background, Border, Shadow | Default  |
| Initials      | Displays user initials             | Shows the user's initials                           | Background, Text, Border   |          |
| WithStatus    | Includes a small status indicator  | Status indicator updates in real time               | Status, Border, Background |          |
| Group         | Displays multiple avatars in group | Grouped avatars overlap or are displayed in a row   | Background, Border         |          |

---

### States
Avatar states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Avatar is visible, not focused                   | Background, Border, Text    |
| Focus (interactive)  | Avatar is focused via keyboard                   | Focus Ring, Border          |
| Hover (interactive)  | Avatar is hovered                                | Background, Border          |
| Active (interactive) | Avatar is being pressed/clicked                  | Background, Border          |
| Disabled             | Avatar is not interactive                        | Text (muted), Border        |
| Status Online        | Status indicator shows online                    | Status                     |
| Status Offline       | Status indicator shows offline                   | Status (muted)             |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, status uses `color.success.7`, etc.

---

### Accessibility
Accessibility features and requirements for Avatar:
- Provide `alt` text for images or use `aria-label` for initials/icons.
- Status indicators should have accessible labels (e.g., `aria-label="Online"`).
- Grouped avatars should be described for screen readers.
- Avatars must be keyboard accessible if interactive and have visible focus indicators.
- Ensure sufficient color contrast for text, status, and borders (WCAG AA compliant).
- Avatar groups should have a group label and each avatar should be individually accessible.
