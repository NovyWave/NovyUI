## Help
A help center page with guides, tutorials, and troubleshooting resources. Users can browse topics, search for answers, and contact support.
- **Id:** Help
- **Appearance:** List or grid of help topics, search bar, and contact/support options.
- **Behavior:** Allows browsing, searching, and accessing help articles or contacting support.
- **Blocks:**
  - [FAQ](../blocks/FAQ.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Help page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section or card border             |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Help variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| List          | List of help topics.                         | List view, search, contact support.        | All above           |       |
| Grid          | Grid of help topics.                         | Grid view, search, contact support.        | All above           |       |

---

### States
Help states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of help topics.     | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Contacted | User has contacted support.        | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Help:
- Keyboard navigation: Tab to all topics and controls, Enter/Space to activate.
- ARIA roles/attributes: list, button, region, search.
- Color contrast: Sufficient for all text, topics, and controls.
- Focus indicator: Visible and uses the focus token.
