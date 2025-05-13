## UserProfilePopover
A block for displaying a popover with user profile info and quick actions.
- **Id:** UserProfilePopover
- **Appearance:** Popover with avatar, name, and action buttons or links.
- **Behavior:** Opens on click/hover, allows access to profile, settings, or logout.
- **Components:**
  - [Popover](../components/Popover.md)
  - [Avatar](../components/Avatar.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Navbars](../pages/Navbars.md)
  - [Profile](../pages/Profile.md)

---

### Token Usage
The following table lists all design tokens used by the UserProfilePopover block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Popover background                 |
| Text         | color.neutral.12  | User name and label text           |
| Icon         | color.primary.7   | Icon color                         |
| Border       | color.border.2    | Popover border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported UserProfilePopover variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard user profile popover.               | Static info and actions.                   | All above           |       |
| WithMenu      | Includes dropdown menu for actions.          | Menu for account controls.                 | All above           |       |
| WithStatus    | Shows user status/availability.              | Status indicator beside avatar.            | All above           |       |

---

### States
UserProfilePopover states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of popover.         | All above             |
| Focused   | Button or menu is focused.         | Focus Ring            |
| Selected  | User is selected.                  | Background, Border    |

---

### Accessibility
Accessibility features and requirements for UserProfilePopover block:
- Keyboard navigation: Tab to buttons and menu, Enter/Space to activate.
- ARIA roles/attributes: group, button, and menu.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
