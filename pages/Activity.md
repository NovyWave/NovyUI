## Activity
A feed page showing recent activity, notifications, or events, often with filters and grouping.
- **Id:** Activity
- **Appearance:** A vertical list of activity items, each with icon, description, and timestamp. May include filters, grouping by date, and navigation to details.
- **Behavior:** Updates dynamically with new activity. Supports filtering, marking as read, and navigation to details.
- **Blocks:**
  - [ActivityFeed](../blocks/ActivityFeed.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Activity page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Border for sections                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Activity variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Feed          | Simple activity feed with list of items.     | List of items, timestamps.                 | All above           |       |
| Notifications | List of notifications.                       | List with timestamps, mark as read.        | All above           |       |

---

### States
Activity states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of activity feed.   | All above             |
| Focused   | Item or button is focused.         | Focus Ring            |
| Hovered   | Item is hovered.                   | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Activity:
- Keyboard navigation: Tab to all interactive elements, arrow keys for feed navigation.
- ARIA roles/attributes: list, region, button.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
