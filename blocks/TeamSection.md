## TeamSection
A block for displaying team members with photos, names, and roles.
- **Id:** TeamSection
- **Appearance:** Grid or list of team member cards with images and text.
- **Behavior:** Presents team info, may include links to profiles or social media.
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [About](../pages/About.md)
  - [Team](../pages/Team.md)

---

### Token Usage
The following table lists all design tokens used by the TeamSection block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Card/list background               |
| Text         | color.neutral.12  | Name, role, and description text   |
| Border       | color.border.2    | Card/list border                   |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported TeamSection variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard team grid/list.                     | Static member cards.                       | All above           |       |
| WithLinks     | Cards include links to profiles.             | Clickable links/icons.                     | All above           |       |
| WithGroups    | Members grouped by team/role.                | Group headings for teams.                  | All above           |       |

---

### States
TeamSection states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of team section.    | All above             |
| Focused   | Card or link is focused.           | Focus Ring            |
| Selected  | Member is selected.                | Background, Border    |

---

### Accessibility
Accessibility features and requirements for TeamSection block:
- Keyboard navigation: Tab to cards and links, Enter/Space to activate.
- ARIA roles/attributes: list, listitem, and link.
- Color contrast: Sufficient for all text, backgrounds, and borders.
- Focus indicator: Visible and uses the focus token.
