## Comments
A section for displaying and submitting user comments, often with threading and moderation features.
- **Id:** Comments
- **Appearance:** A list of user comments, each with avatar, author, timestamp, and content. May support threading (nested replies).
- **Behavior:** Users can add, reply, or delete comments. Supports keyboard navigation, editing, and moderation actions.
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [Input](../components/Input.md)
  - [Textarea](../components/Textarea.md)
  - [Button](../components/Button.md)
  - [List](../components/List.md)
  - [Card](../components/Card.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Blog](../pages/Blog.md)
### Variants
#### Comments - **Basic**
- **Id:** Basic
- **Appearance:** Flat list of comments, no nesting.
- **Behavior:** Users can add, edit, or delete their own comments.
#### Comments - **Threaded**
- **Id:** Threaded
- **Appearance:** Comments can be nested to show replies.
- **Behavior:** Users can reply to comments, creating threads.
