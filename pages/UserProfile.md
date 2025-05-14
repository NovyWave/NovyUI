## UserProfile
A page for managing user profile, theme, and notification preferences.
- **Id:** UserProfile
- **Appearance:** Profile info, theme color picker, and notification toggles. May include user stats, avatar, and editable fields.
- **Behavior:** User can update profile info, pick a theme color, and toggle notification preferences. Theme updates in real time; notification toggles update preferences. Supports saving changes and updating user info.
- **Blocks:**
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)
  - [ProfileThemeCustomization](../blocks/ProfileThemeCustomization.md)
  - [NotificationPreferences](../blocks/NotificationPreferences.md)
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [Input](../components/Input.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the UserProfile page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Profile      | background   | Profile card background    |
| Input        | color        | Input text color           |
| Button       | color        | Button color               |

---

### Variants
All supported UserProfile variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Overview     | Profile overview           | Info, theme, notifications | background, color | |
| Edit         | Edit profile info          | Editable fields, save      | background, color | |

---

### States
UserProfile states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Profile loaded             | background, color |
| Editing      | Editing profile info       | color, background |
| Error        | Failed to update info      | color             |

---

### Accessibility
Accessibility features and requirements for UserProfile:
- Keyboard navigation for all fields and controls
- ARIA roles/attributes for profile sections
- Sufficient color contrast for text and controls
- Visible focus indicator for all interactive elements
