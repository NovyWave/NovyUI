## Activity
A feed page showing recent activity, notifications, or events, often with filters and grouping.
- **Id:** Activity
- **Appearance:** A vertical list of activity items, each with icon, description, and timestamp. May include filters, grouping by date, and navigation to details.
- **Behavior:** Updates dynamically with new activity. Supports filtering, marking as read, and navigation to details.
- **Blocks:**
  - [ActivityFeed](../blocks/ActivityFeed.md)
  - [Footers](../blocks/Footers.md)

### Token Usage
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Border for sections                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

### Accessibility
- Page structure uses semantic HTML (main, nav, section, etc.).
- Keyboard navigation: Tab to all interactive elements, arrow keys for feed navigation.
- Sufficient color contrast for all text and icons.
- Focus indicators are visible and use the focus token.
- ARIA live regions for real-time activity updates if present.

### Variants
#### Activity - **Activity feed**
- **Id:** ActivityFeed
- **Appearance:** Simple activity feed with list of items and timestamps.
- **Behavior:** Static or updates in real time.
#### Activity - **Notifications**
- **Id:** Notifications
- **Appearance:** List of notifications with timestamps.
- **Behavior:** Supports marking notifications as read.
