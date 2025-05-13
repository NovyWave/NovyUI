## Roadmap
A block for displaying a product or project roadmap with milestones and statuses.
- **Id:** Roadmap
- **Appearance:** Timeline or list with milestones, dates, and status indicators.
- **Behavior:** Shows progress, upcoming features, and completed items.
- **Components:**
  - [Timeline](../components/Timeline.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Product](../pages/Product.md)
  - [Dashboard](../pages/Dashboard.md)

---

### Token Usage
The following table lists all design tokens used by the Roadmap block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Roadmap background                 |
| Text         | color.neutral.12  | Milestone and status text          |
| Status       | color.success.7   | Status indicator color             |
| Border       | color.border.2    | Timeline/list border               |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Roadmap variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard roadmap timeline.                   | Static milestones and statuses.            | All above           |       |
| WithGroups    | Milestones grouped by quarter/phase.         | Group headings for milestones.             | All above           |       |
| WithProgress  | Shows progress bar/indicator.                | Progress indicator for roadmap.            | All above           |       |

---

### States
Roadmap states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of roadmap.         | All above             |
| Focused   | Milestone or status is focused.    | Focus Ring            |
| Completed | Milestone is completed.            | Status, Border        |

---

### Accessibility
Accessibility features and requirements for Roadmap block:
- Keyboard navigation: Tab to milestones and statuses, Enter/Space to activate (if interactive).
- ARIA roles/attributes: list, listitem, status, and timeline.
- Color contrast: Sufficient for all text, statuses, and borders.
- Focus indicator: Visible and uses the focus token.
