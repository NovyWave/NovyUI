## ContactCard
A block for displaying contact information, such as name, email, phone, and address.
- **Id:** ContactCard
- **Appearance:** Card layout with contact details, avatar, and action buttons.
- **Behavior:** Allows users to copy, email, or call the contact.
- **Components:**
  - [Card](../components/Card.md)
  - [Avatar](../components/Avatar.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Contacts](../pages/Contacts.md)
  - [Profile](../pages/Profile.md)

---

### Token Usage
The following table lists all design tokens used by the ContactCard block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Card background                    |
| Text         | color.neutral.12  | Contact info text                  |
| Button       | color.primary.7   | Action button background           |
| Border       | color.border.2    | Card border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ContactCard variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard contact card.                       | Static display of contact info.            | All above           |       |
| WithActions   | Card with call/email/copy buttons.           | Action buttons for contact methods.        | All above           |       |
| WithAvatar    | Card includes avatar/photo.                  | Avatar shown for contact.                  | All above           |       |

---

### States
ContactCard states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of contact card.    | All above             |
| Focused   | Button or input is focused.        | Focus Ring            |
| Selected  | Card is selected/highlighted.      | Border, Background    |
| Disabled  | Button is disabled.                | Button                |

---

### Accessibility
Accessibility features and requirements for ContactCard:
- Keyboard navigation: Tab to each button, Enter/Space to activate.
- ARIA roles/attributes: card, button, and contact info as text.
- Color contrast: Sufficient for all text, buttons, and borders.
- Focus indicator: Visible and uses the focus token.
