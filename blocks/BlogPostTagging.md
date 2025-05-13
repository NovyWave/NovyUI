## BlogPostTagging
A block for adding/removing tags to a blog post.
- **Id:** BlogPostTagging
- **Appearance:** An input for adding tags, displayed as chips.
- **Behavior:** Users can add/remove tags.
- **Components:**
  - [TagInput](../components/TagInput.md)
- **Used in pages:**
  - [Editor](../pages/Editor.md)

---

### Token Usage
The following table lists all design tokens used by the BlogPostTagging block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Tag input background               |
| Text         | color.neutral.12  | Main text                          |
| Chip         | color.secondary.7 | Tag chip background                |
| Chip Text    | color.neutral.12  | Tag chip text                      |
| Border       | color.border.2    | Input/chip border                  |
| Focus Ring   | color.focus.1     | Focus indicator for input/chips    |

---

### Variants
All supported BlogPostTagging variants are listed below:
| Variant Name     | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|------------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic            | Tag input with add/remove functionality.    | Users can add or remove tags.              | All above           |       |
| WithSuggestions  | Tag input with dropdown suggestions.        | Suggests tags as user types.               | All above           |       |

---

### States
BlogPostTagging states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of tag input.       | All above             |
| Focused   | Input or chip is focused.          | Focus Ring            |
| Disabled  | Input is disabled.                 | Background, Text      |

---

### Accessibility
Accessibility features and requirements for BlogPostTagging:
- Keyboard navigation: Tab to input and chips, Enter/Space to add/remove tags.
- ARIA roles/attributes: input, listbox, option, and chip roles.
- Color contrast: Sufficient for all text, chips, and input.
- Focus indicator: Visible and uses the focus token.
