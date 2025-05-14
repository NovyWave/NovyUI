## Roadmap
A timeline or milestone page outlining planned features, releases, or project progress.
- **Id:** Roadmap
- **Appearance:** A timeline or list of milestones, releases, or planned features. May include dates, status, and descriptions.
- **Behavior:** Static or interactive (expand/collapse, filter by status). May animate on scroll.
- **Blocks:**
  - [Roadmap](../blocks/Roadmap.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Roadmap page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Timeline/milestone border          |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Roadmap variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Timeline      | Timeline view of milestones and releases.    | Timeline, animations.                      | All above           |       |
| Milestones    | List of milestones with dates/descriptions.  | List, animations.                          | All above           |       |

---

### States
Roadmap states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of roadmap.         | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Expanded  | Milestone/timeline expanded.       | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Roadmap:
- Keyboard navigation: Tab to all milestones and controls, Enter/Space to activate.
- ARIA roles/attributes: list, button, region.
- Color contrast: Sufficient for all text, milestones, and controls.
- Focus indicator: Visible and uses the focus token.
