## FAQ
A page presenting frequently asked questions and answers, often with search and categories.
- **Id:** FAQ
- **Appearance:** List or accordion of questions and answers, with optional search and categories.
- **Behavior:** Allows expanding/collapsing answers, searching/filtering questions, and navigation.
- **Blocks:**
  - [FAQ](../blocks/FAQ.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the FAQ page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section or accordion border        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported FAQ variants are listed below:
| Variant Name           | Description                                 | Appearance/Behavior                                              | Tokens Used                | Notes    |
|-----------------------|---------------------------------------------|------------------------------------------------------------------|----------------------------|----------|
| FrequentlyAskedQuestions | Simple list or accordion of questions and answers | Static display, no interactivity                                 | All above                  | Default  |
| SearchableFAQ         | FAQ with a search bar for filtering questions| User can search and filter questions                             | All above                  |          |

---

### States
FAQ states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Page loaded, no interaction                      | All above                   |
| SearchActive         | User is searching/filtering questions            | All above                   |
| Focused (search/input)| Search or input is focused                      | Focus Ring                  |

---

### Accessibility
Accessibility features and requirements for FAQ:
- Keyboard navigation: Tab to all questions and search, Enter/Space to expand/collapse.
- ARIA roles/attributes: list, button, region, search.
- Color contrast: Sufficient for all text, questions, and controls.
- Focus indicator: Visible and uses the focus token.
