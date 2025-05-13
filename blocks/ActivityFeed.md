## Activity Feed
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

### Token Usage
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Feed background                    |
| Text         | color.neutral.12  | Activity item text                 |
| Icon         | color.primary.7   | Activity type icon color           |
| Timestamp    | color.neutral.8   | Timestamp text color               |
| Border       | color.border.2    | Border between items               |
| Focus Ring   | color.focus.1     | Focus indicator for interactive items|

### Accessibility
- List items use semantic roles (list, listitem).
- Keyboard navigation: Tab to each item, Enter/Space to activate if interactive.
- Sufficient color contrast for all text and icons.
- Focus indicators are visible and use the focus token.
- ARIA live region for real-time updates if applicable.

### Variants
#### Activity Feed - **Basic**
- **Id:** Basic
- **Appearance:** Simple activity feed with list of items.
- **Behavior:** Static or updates in real time.
#### Activity Feed - **With filters**
- **Id:** WithFilters
- **Appearance:** Activity feed with filter controls (e.g., by type or date).
- **Behavior:** User can filter activity items.
