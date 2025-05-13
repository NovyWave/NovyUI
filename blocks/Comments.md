## Comments
A block for displaying and submitting user comments, including threads and replies.
- **Id:** Comments
- **Appearance:** List of comments with avatars, timestamps, and reply actions.
- **Behavior:** Supports nested replies, editing, and moderation.
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Blog](../pages/Blog.md)
  - [Article](../pages/Article.md)

---

### Token Usage
The following table lists all design tokens used by the Comments block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Comments background                |
| Text         | color.neutral.12  | Comment and label text             |
| Button       | color.primary.7   | Action button background           |
| Border       | color.border.2    | Comment border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Comments variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard comment list with reply.            | Users can reply to comments.               | All above           |       |
| Threaded      | Nested replies (threaded comments).          | Replies shown indented under parent.       | All above           |       |
| WithModeration| Comments with moderation controls.           | Admins can edit/delete comments.           | All above           |       |

---

### States
Comments states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of comments.        | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Editing   | Comment is being edited.           | Background, Border    |
| Disabled  | Button or input is disabled.       | Button, Text          |

---

### Accessibility
Accessibility features and requirements for Comments:
- Keyboard navigation: Tab to each comment, reply, and input; Enter/Space to activate.
- ARIA roles/attributes: list, listitem, button, and alert for errors.
- Color contrast: Sufficient for all text, buttons, and borders.
- Focus indicator: Visible and uses the focus token.
