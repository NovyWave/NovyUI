## ActivityFeed
A block for displaying a feed of recent activity, notifications, or events.
- **Id:** ActivityFeed
- **Appearance:** A vertical list of activity items, each with icon, description, and timestamp.
- **Behavior:** Updates dynamically with new activity. Supports filtering and marking as read.
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Activity](../pages/Activity.md)
  - [Dashboard](../pages/Dashboard.md)

---

### Token Usage
The following table lists all design tokens used by the ActivityFeed block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Feed background                    |
| Text         | color.neutral.12  | Activity item text                 |
| Icon         | color.primary.7   | Activity type icon color           |
| Timestamp    | color.neutral.8   | Timestamp text color               |
| Border       | color.border.2    | Border between items               |
| Focus Ring   | color.focus.1     | Focus indicator for interactive items|

---

### Variants
All supported ActivityFeed variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Simple activity feed with list of items.     | Static or updates in real time.            | All above           |       |
| WithFilters   | Activity feed with filter controls.          | User can filter activity items.            | All above           |       |

---

### States
ActivityFeed states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of activity items.  | All above             |
| Focused   | Item is focused for keyboard nav.  | Focus Ring            |
| Read      | Item marked as read.               | Text, Background      |
| Unread    | New/unread activity item.          | Text (bold), Background (highlight) |

---

### Accessibility
Accessibility features and requirements for ActivityFeed:
- Keyboard navigation: Tab to each item, Enter/Space to activate if interactive.
- ARIA roles/attributes: list, listitem, and live region for updates.
- Color contrast: Sufficient for all text and icons.
- Focus indicator: Visible and uses the focus token.
