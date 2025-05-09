## Tag Input
🏷️ An input field for entering and managing tags, often displayed as removable chips.
- **Id:** TagInput
- **Appearance:** An input field with tags displayed as chips. May include add/remove buttons and suggestions dropdown.
- **Behavior:** Typing adds tags. Tags can be removed by clicking or keyboard. Supports validation and suggestions.
- **Used in blocks:**
  - [BlogPostTagging](../blocks/BlogPostTagging.md)
### Accessibility
- Use ARIA roles (`listbox`, `option`).
- Announce tag addition/removal.
- Support keyboard navigation and removal.

### Variants
#### Tag Input - **Create and Remove Tags**
- **Id:** CreateAndRemoveTags
- **Appearance:** Supports tag creation/removal.
- **Behavior:** Adds/removes tags.
#### Tag Input - **With suggestions**
- **Id:** WithSuggestions
- **Appearance:** Includes suggestions dropdown.
- **Behavior:** Displays tag suggestions.
