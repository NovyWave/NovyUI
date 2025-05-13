## FAQ
A page presenting frequently asked questions and answers, often with search and categories.
- **Id:** FAQ
- **Appearance:** A page with a list or accordion of frequently asked questions and answers. May include search and categories.
- **Behavior:** Allows expanding/collapsing answers, searching/filtering questions, and navigation. Search input filters questions in real time.
- **Blocks:**
  - [FAQ](../blocks/FAQ.md)
  - [Footers](../blocks/Footers.md)

### Token Usage
The following table lists all design tokens used by the FAQ page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Border for sections                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported FAQ page variants are listed below:
| Variant Name           | Description                                 | Appearance/Behavior                                              | Tokens Used                | Notes    |
|-----------------------|---------------------------------------------|------------------------------------------------------------------|----------------------------|----------|
| FrequentlyAskedQuestions | Simple list or accordion of questions and answers | Static display, no interactivity                                 | Background, Border, Text   | Default  |
| SearchableFAQ         | FAQ with a search bar for filtering questions| User can search and filter questions                             | Background, Border, Text   |          |

---

### States
FAQ page states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Page loaded, no interaction                      | Background, Border, Text    |
| SearchActive         | User is searching/filtering questions            | Background, Border, Text    |
| Focus (search/input) | Search or input is focused                       | Focus Ring, Border, Text    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, etc.

---

### Accessibility
- FAQ items use ARIA roles and attributes for expand/collapse.
- Keyboard navigation: arrow keys to move, Enter/Space to expand/collapse.
- Focus indicators are visible and use the focus token.
- Sufficient color contrast for all text and icons.
- Panels are hidden from tab order when collapsed.
