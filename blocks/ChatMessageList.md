## ChatMessageList
A block for displaying a list of chat messages in a conversation view.
- **Id:** ChatMessageList
- **Appearance:** Vertical list of message bubbles, with avatars, timestamps, and status indicators.
- **Behavior:** Supports scrolling, new message animation, and read/unread status.
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Chat](../pages/Chat.md)
  - [Support](../pages/Support.md)

---

### Token Usage
The following table lists all design tokens used by the ChatMessageList block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Chat background                    |
| Text         | color.neutral.12  | Message text                       |
| SenderBubble | color.primary.7   | Sender message bubble              |
| ReceiverBubble| color.surface.2  | Receiver message bubble            |
| Timestamp    | color.neutral.8   | Timestamp text color               |
| Border       | color.border.2    | Message bubble border              |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ChatMessageList variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard chat message list.                  | Static or real-time updates.               | All above           |       |
| WithAvatars   | Messages include user avatars.               | Avatars shown for each message.            | All above           |       |
| WithStatus    | Messages show read/unread/delivered status.  | Status indicators for each message.        | All above           |       |

---

### States
ChatMessageList states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of messages.        | All above             |
| Focused   | Message or input is focused.       | Focus Ring            |
| Unread    | Message is unread.                 | SenderBubble, Text    |
| Selected  | Message is selected.               | Border, Background    |

---

### Accessibility
Accessibility features and requirements for ChatMessageList:
- Keyboard navigation: Tab to each message and input, Enter/Space to activate.
- ARIA roles/attributes: list, listitem, status, and live region for updates.
- Color contrast: Sufficient for all text, bubbles, and borders.
- Focus indicator: Visible and uses the focus token.
