## Team
A page introducing team members, their roles, and profiles, often with photos and bios.
- **Id:** Team
- **Appearance:** Section with team member profiles, avatars, names, roles, and contact links. Arranged in a grid or list, may include group photo or sections by team.
- **Behavior:** Static by default. Profiles may be clickable or support hover effects. Contact links open email or social profiles.
- **Blocks:**
  - [TeamSection](../blocks/TeamSection.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [List](../components/List.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Team page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Profile      | background   | Profile card background    |
| Avatar       | color        | Avatar border color        |
| Layout       | spacing      | Grid/list spacing          |

---

### Variants
All supported Team variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Default      | Standard team grid         | Grid of profiles           | background, color, spacing | |
| List         | List of team members       | List layout                | background, color, spacing | |
| Grouped      | Grouped by team/role       | Sections by team/role      | background, color, spacing | |

---

### States
Team states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Team profiles visible      | background, color |
| Hover        | Profile hovered            | color             |
| Clicked      | Profile clicked            | color, background |

---

### Accessibility
Accessibility features and requirements for Team:
- Keyboard navigation for all profiles and links
- ARIA roles/attributes for profile list and items
- Sufficient color contrast for text and backgrounds
- Visible focus indicator for all interactive elements
