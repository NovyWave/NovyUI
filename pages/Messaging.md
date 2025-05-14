## Messaging
A page for chat with scrollable message list and user popovers.
- **Id:** Messaging
- **Appearance:** Chat message list in a vertically scrollable area, with user profile popover on avatar hover or click.
- **Behavior:** Scrolls to newest message, supports infinite scroll. User popover opens on hover/click and closes on outside click.
- **Blocks:**
  - [ChatMessageList](../blocks/ChatMessageList.md)
  - [UserProfilePopover](../blocks/UserProfilePopover.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Messaging page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Message border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Messaging variants are listed below:
| Variant Name     | Description                        | Appearance/Behavior                | Tokens Used         | Notes |
|------------------|------------------------------------|------------------------------------|---------------------|-------|
| DirectMessages   | One-on-one chat with message list and user popover. | Real-time messaging, user info popover. | All above           |       |

---

### States
Messaging states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of chat.            | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| NewMessage| New message received.              | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Messaging:
- Keyboard navigation: Tab to all messages and controls, Enter/Space to send or interact.
- ARIA roles/attributes: list, button, region, textbox.
- Color contrast: Sufficient for all text, messages, and controls.
- Focus indicator: Visible and uses the focus token.
