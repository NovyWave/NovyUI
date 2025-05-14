## UserProfilePopover
A popover component or page for quick access to user profile actions, such as viewing profile, settings, or logging out.
- **Id:** UserProfilePopover
- **Appearance:** Popover with user info, avatar, and quick action links. May include settings, logout, and profile link.
- **Behavior:** Opens on click/hover, allows quick actions. Supports keyboard and mouse interaction.
- **Blocks:**
  - [UserProfilePopover](../blocks/UserProfilePopover.md)
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [Button](../components/Button.md)
  - [List](../components/List.md)

---

### Token Usage
The following table lists all design tokens used by the UserProfilePopover page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Popover      | background   | Popover background color   |
| Info         | color        | Text/icon color            |
| Layout       | spacing      | Padding/margin             |

---

### Variants
All supported UserProfilePopover variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Basic        | Info and actions           | Avatar, name, links        | background, color, spacing | |
| WithAvatar   | Includes avatar            | Avatar, name, actions      | background, color, spacing | |
| WithLinks    | Quick links to profile     | Profile/settings/logout    | background, color, spacing | |

---

### States
UserProfilePopover states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Popover closed             | background, color |
| Open         | Popover open               | background, color |
| Disabled     | Actions disabled           | color, background |

---

### Accessibility
Accessibility features and requirements for UserProfilePopover:
- Keyboard accessible for all actions
- ARIA roles/attributes for popover and actions
- Sufficient color contrast for text and controls
- Visible focus indicator for all interactive elements
