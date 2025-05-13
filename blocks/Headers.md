## Headers
A block for displaying page or section headers with titles, subtitles, and optional actions.
- **Id:** Headers
- **Appearance:** Prominent title, optional subtitle, and action buttons.
- **Behavior:** Introduces content, may include navigation or actions.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Landing](../pages/Landing.md)

---

### Token Usage
The following table lists all design tokens used by the Headers block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Header background                   |
| Text         | color.neutral.12  | Header title and subtitle text      |
| Border       | color.border.2    | Header border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Headers variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard header with title.                  | Static title and subtitle.                 | All above           |       |
| WithActions   | Header includes action buttons.              | Buttons for actions.                       | All above           |       |
| WithNavigation| Header includes navigation elements.         | Navigation links/buttons.                  | All above           |       |

---

### States
Headers states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of header.          | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Hovered   | Link or button is hovered.         | Border                |

---

### Accessibility
Accessibility features and requirements for Headers block:
- Keyboard navigation: Tab to buttons and links, Enter/Space to activate.
- ARIA roles/attributes: banner, heading, and navigation.
- Color contrast: Sufficient for all text and borders.
- Focus indicator: Visible and uses the focus token.
