## Blockquote
💬 A styled container for displaying quoted text or citations within content.
- **Id:** Blockquote
- **Appearance:** A visually distinct section for quoting text. Typically indented, with a vertical line or different background. May include citation or author below or beside the quote.
- **Behavior:** Static display. May support copy-to-clipboard or expandable/collapsible for long quotes.
- **Used in blocks:**
  - [QuoteSection](../blocks/QuoteSection.md)

---

### Token Usage
The following table lists all design tokens used by the Blockquote component:
| Part         | Token Example      | Description                              |
|--------------|-------------------|------------------------------------------|
| Background   | color.surface.2   | Blockquote background color              |
| Text         | color.neutral.12  | Quoted text color                        |
| Border       | color.border.3    | Vertical line or border for blockquote   |
| Citation     | color.neutral.9   | Citation/author text color               |
| Focus Ring   | color.focus.1     | Focus indicator for interactive actions  |
| Shadow       | shadow.1          | Optional shadow for blockquote           |

---

### Variants
All supported Blockquote variants are listed below:
| Variant Name   | Description                        | Appearance/Behavior                                 | Tokens Used                | Notes    |
|---------------|------------------------------------|-----------------------------------------------------|----------------------------|----------|
| WithAuthor    | Includes citation or author         | Displays author/citation below or beside quote      | Citation, Background, Text | Default  |
| Simple        | Basic indented quote                | Indented, vertical line or background only          | Border, Background, Text   |          |
| Expandable    | Expand/collapse for long quotes     | Collapsible content, shows more/less                | Background, Border         | Optional |

---

### States
Blockquote states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Blockquote is visible, not interactive           | Background, Border, Text    |
| Focus (interactive)  | Blockquote/copy button is focused                | Focus Ring, Border          |
| Hover (interactive)  | Blockquote/copy button is hovered                | Background, Border          |
| Active (interactive) | Blockquote/copy button is pressed/clicked        | Background, Border          |
| Disabled             | Blockquote is not interactive                    | Text (muted), Border        |
| Expanded             | Blockquote is expanded (if expandable)           | Background, Shadow          |
| Collapsed            | Blockquote is collapsed (if expandable)          | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, border uses `color.border.3`, etc.

---

### Accessibility
Accessibility features and requirements for Blockquote:
- Use semantic `<blockquote>` element.
- Provide citation or author information if available.
- Ensure sufficient contrast for quoted text and citation (WCAG AA compliant).
- Copy/expand actions (if present) must be keyboard accessible and have visible focus indicators.
- Blockquotes should be announced as quotes by screen readers (use `aria-label` or similar if needed).
- If blockquote is interactive, ensure ARIA roles/attributes are used appropriately.
