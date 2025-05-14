## Contact
A page for users to get in touch, submit inquiries, or request support. Includes a contact form, contact details, and possibly a map or social links.
- **Id:** Contact
- **Appearance:** Contact form, contact info section, and optional map or social links. Clean layout with clear call-to-action.
- **Behavior:** Users can submit messages via the form. Form validates input and provides feedback. May include spam protection.
- **Blocks:**
  - [ContactCard](../blocks/ContactCard.md)
  - [FAQ](../blocks/FAQ.md)
- **Components:**
  - [Input](../components/Input.md)
  - [Button](../components/Button.md)
  - [Map](../components/Map.md)

---

### Token Usage
The following table lists all design tokens used by the Contact page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Form         | spacing      | Controls form spacing      |
| Button       | color        | Button color               |
| Info         | color        | Contact info text color    |

---

### Variants
All supported Contact variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Default      | Standard contact form      | Form, info, map            | spacing, color | |
| Minimal      | Form only                  | Form only, no extras       | spacing, color | |

---

### States
Contact states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Form ready for input       | spacing, color    |
| Loading      | Submitting form            | color             |
| Error        | Input validation failed    | color             |

---

### Accessibility
Accessibility features and requirements for Contact:
- Keyboard navigation for all fields and buttons
- ARIA labels for form fields and error messages
- Sufficient color contrast for text and controls
- Visible focus indicator for all interactive elements
