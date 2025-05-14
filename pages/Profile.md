## Profile
A user-focused page showing personal details, avatar, and editable profile information.
- **Id:** Profile
- **Appearance:** User avatar, name, profile details, and editable fields. May include tabs for account, settings, and activity.
- **Behavior:** Allows editing and saving profile info. Supports avatar upload, validation, navigation between sections, and user stats or badges.
- **Blocks:**
  - [Headers](../blocks/Headers.md)
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Profile page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Card/section border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Profile variants are listed below:
| Variant Name     | Description                        | Appearance/Behavior                | Tokens Used         | Notes |
|------------------|------------------------------------|------------------------------------|---------------------|-------|
| UserProfile      | Displays user information and avatar| Static layout                      | All above           |       |
| EditProfile      | Editable fields for user info       | Edit/save controls                 | All above           |       |
| AccountSettings  | Tabs/sections for account settings  | Update/save settings               | All above           |       |

---

### States
Profile states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of profile.         | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Editing   | Profile is being edited.           | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Profile:
- Keyboard navigation: Tab to all fields and controls, Enter/Space to activate.
- ARIA roles/attributes: form, input, button, region.
- Color contrast: Sufficient for all text, fields, and controls.
- Focus indicator: Visible and uses the focus token.
