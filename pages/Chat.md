## Chat
A page for real-time messaging between users or groups.
- **Id:** Chat
- **Appearance:** List of messages, input box, and send button.
- **Behavior:** Allows users to send, receive, and view messages in real time.
- **Blocks:**
  - [ChatMessageList](../blocks/ChatMessageList.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Chat page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Message border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Chat variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Direct        | One-on-one chat.                             | List of messages, input box.               | All above           |       |
| Group         | Group chat with multiple users.              | List of messages, user avatars.            | All above           |       |

---

### States
Chat states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of chat.            | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Unread    | Unread message.                    | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Chat:
- Keyboard navigation: Tab to all messages and input, Enter/Space to send.
- ARIA roles/attributes: list, input, button, region.
- Color contrast: Sufficient for all text, messages, and buttons.
- Focus indicator: Visible and uses the focus token.
