## Support
A support page providing help resources, FAQs, and contact options. Users can search for solutions, submit tickets, or chat with support agents. Includes links to documentation and troubleshooting guides.
- **Id:** Support
- **Appearance:** Help resources, FAQ list, contact form, and chat widget. May include links to docs and troubleshooting guides.
- **Behavior:** Users can search, submit tickets, or chat. Contact form validates input and submits requests. FAQ expands/collapses answers.
- **Blocks:**
  - [FAQ](../blocks/FAQ.md)
  - [ContactCard](../blocks/ContactCard.md)
- **Components:**
  - [Input](../components/Input.md)
  - [Button](../components/Button.md)
  - [ChatMessageList](../blocks/ChatMessageList.md)

---

### Token Usage
The following table lists all design tokens used by the Support page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| FAQ          | spacing      | Controls FAQ spacing       |
| ContactForm  | color        | Form field color           |
| ChatWidget   | background   | Chat background color      |

---

### Variants
All supported Support variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Default      | Standard support page      | FAQ, contact, chat         | spacing, color, background | |
| Minimal      | FAQ and contact only       | No chat widget             | spacing, color            | |

---

### States
Support states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | All resources available    | spacing, color    |
| Loading      | Submitting ticket/chat     | color             |
| Error        | Submission failed          | color, background |

---

### Accessibility
Accessibility features and requirements for Support:
- Keyboard navigation for all interactive elements
- ARIA roles for FAQ, contact form, and chat
- Sufficient color contrast for text and controls
- Visible focus indicator for all actionable elements
