## About
A page describing the company, team, or product mission. Includes history, values, and contact information.
- **Id:** About
- **Appearance:** Company, team, or product overview with sections for history, values, and contact info.
- **Behavior:** Static content, may include navigation to team or contact sections.
- **Blocks:**
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the About page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Link         | color.primary.7   | Link color                         |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported About variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Company       | Company overview with mission and values.    | Static content, links to team/contact.     | All above           |       |
| Team          | Team member bios and roles.                  | Grid/list of team members.                 | All above           |       |
| Contact       | Contact info and form.                       | Contact details, form, map.                | All above           |       |

---

### States
About states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of about content.   | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Hovered   | Link is hovered.                   | Link, Border          |

---

### Accessibility
Accessibility features and requirements for About:
- Keyboard navigation: Tab to links and buttons, Enter/Space to activate.
- ARIA roles/attributes: region, link, and navigation.
- Color contrast: Sufficient for all text, links, and borders.
- Focus indicator: Visible and uses the focus token.
