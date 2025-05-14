## Dashboard
A summary page displaying key metrics, charts, and recent activity for quick insights and navigation.
- **Id:** Dashboard
- **Appearance:** Navigation bar, header, grid or cards showing key metrics, charts, recent activity, and quick links.
- **Behavior:** Widgets update dynamically with data. Cards and charts may be interactive. Supports responsive layout and navigation.
- **Blocks:**
  - [Navbars](../blocks/Navbars.md)
  - [Headers](../blocks/Headers.md)
  - [Stats](../blocks/Stats.md)
  - [TableOfContents](../blocks/TableOfContents.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [ActivityFeed](../blocks/ActivityFeed.md)
  - [Footers](../blocks/Footers.md)
  - [GroupLayout](../blocks/GroupLayout.md)
  - [ResponsiveColumns](../blocks/ResponsiveColumns.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Dashboard page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Widget/table border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Dashboard variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Overview      | Summary of key metrics and widgets.          | Grid/card layout, high-level snapshot.      | All above           |       |
| Analytics     | Focus on charts, graphs, and data viz.       | Interactive charts, filtering, drill-down.  | All above           |       |
| Sales         | Sales figures, revenue, KPIs.                | Sales filters, time range, dynamic updates. | All above           |       |
| UserActivity  | Recent user actions, activity feeds.         | Real-time updates, filtering.               | All above           |       |

---

### States
Dashboard states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of dashboard.       | All above             |
| Focused   | Widget or button is focused.       | Focus Ring            |
| Selected  | Widget/card is selected.           | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Dashboard:
- Keyboard navigation: Tab to all widgets and controls, Enter/Space to activate.
- ARIA roles/attributes: region, button, navigation, table.
- Color contrast: Sufficient for all text, widgets, and controls.
- Focus indicator: Visible and uses the focus token.
