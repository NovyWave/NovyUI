## Comments
A section for displaying and submitting user comments, often with threading and moderation features.
- **Id:** Comments
- **Appearance:** A list of user comments, each with avatar, author, timestamp, and content. May support threading (nested replies).
- **Behavior:** Users can add, reply, or delete comments. Supports keyboard navigation, editing, and moderation actions.
- **Components:**
  - [Avatar](components.md#avatar)
  - [Input](components.md#input)
  - [Textarea](components.md#textarea)
  - [Button](components.md#button)
  - [List](components.md#list)
  - [Card](components.md#card)
  - [Typography](components.md#typography)
- **Used in pages:**
  - [Blog](pages.md#blog)
### Variants
#### Comments - **Basic**
- **Id:** Basic
- **Appearance:** Flat list of comments, no nesting.
- **Behavior:** Users can add, edit, or delete their own comments.
#### Comments - **Threaded**
- **Id:** Threaded
- **Appearance:** Comments can be nested to show replies.
- **Behavior:** Users can reply to comments, creating threads.
