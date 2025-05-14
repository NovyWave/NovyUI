## Legal
A page for legal documents such as privacy policy or terms of service, with headings and navigation.
- **Id:** Legal
- **Appearance:** Page with legal text, headings, links, and last updated date.
- **Behavior:** Static display, may support search or navigation within the document.
- **Blocks:**
  - [Legal](../blocks/Legal.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Legal page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Legal variants are listed below:
| Variant Name     | Description                        | Appearance/Behavior                | Tokens Used         | Notes |
|------------------|------------------------------------|------------------------------------|---------------------|-------|
| PrivacyPolicy    | Privacy policy legal text           | Static, headings, links            | All above           |       |
| TermsOfService   | Terms of service legal text         | Static, headings, links            | All above           |       |

---

### States
Legal states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of legal text.      | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for Legal:
- Keyboard navigation: Tab to all links and sections, Enter/Space to activate.
- ARIA roles/attributes: region, link, navigation.
- Color contrast: Sufficient for all text, links, and sections.
- Focus indicator: Visible and uses the focus token.
