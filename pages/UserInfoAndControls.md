## UserInfoAndControls
A block or section for displaying user information and providing controls for profile management, such as editing, logging out, or accessing settings.
- **Id:** UserInfoAndControls
- **Appearance:** User info display with avatar, name, and action buttons. May include edit, logout, and settings controls.
- **Behavior:** Users can view info, edit profile, log out, or access settings. Supports disabled and editing states.
- **Blocks:**
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [Button](../components/Button.md)
  - [Input](../components/Input.md)

---

### Token Usage
The following table lists all design tokens used by the UserInfoAndControls page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Info         | color        | Text/icon color            |
| Block        | background   | Block background color     |
| Layout       | spacing      | Padding/margin             |

---

### Variants
All supported UserInfoAndControls variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Basic        | Info only                  | Avatar, name, no actions   | color, background, spacing | |
| WithActions  | Includes action buttons    | Edit, logout, settings     | color, background, spacing | |
| Editing      | Editable fields            | Input fields, save/cancel  | color, background, spacing | |

---

### States
UserInfoAndControls states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Info visible, actions ready| color, background |
| Editing      | Editing profile info       | color, background |
| Disabled     | Controls disabled          | color, background |

---

### Accessibility
Accessibility features and requirements for UserInfoAndControls:
- Keyboard accessible controls for all actions
- ARIA labels for actions and info
- Sufficient color contrast for text and controls
- Visible focus indicator for all interactive elements
