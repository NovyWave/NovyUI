## Contacts
A page for viewing and managing contact information.
- **Id:** Contacts
- **Appearance:** List of contacts, details, and actions.
- **Behavior:** Allows users to view, add, edit, and delete contacts.
- **Blocks:**
  - [ContactCard](../blocks/ContactCard.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Contacts page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Item border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Contacts variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| List          | List of contacts.                            | List view, details panel.                  | All above           |       |
| Grid          | Grid of contacts.                            | Grid view, details panel.                  | All above           |       |

---

### States
Contacts states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of contacts.        | All above             |
| Focused   | Item or button is focused.         | Focus Ring            |
| Selected  | Contact is selected.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Contacts:
- Keyboard navigation: Tab to all items and buttons, Enter/Space to activate.
- ARIA roles/attributes: list, button, region.
- Color contrast: Sufficient for all text, items, and buttons.
- Focus indicator: Visible and uses the focus token.
