## Analytics
A dashboard page showing key metrics, charts, and insights for user behavior, sales, or system performance.
- **Id:** Analytics
- **Appearance:** Analytics dashboard with charts, tables, and summary cards.
- **Behavior:** Displays real-time or historical data, supports filtering and drill-down. Charts and tables are interactive.
- **Blocks:**
  - [Stats](../blocks/Stats.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)

---

### Token Usage
The following table lists all design tokens used by the Analytics page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Dashboard background               |
| Text         | color.neutral.12  | Main text                          |
| Chart        | color.primary.7   | Chart lines/bars                   |
| Border       | color.border.2    | Card/table border                  |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Analytics variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Overview      | High-level metrics and charts.               | Summary cards, charts.                     | All above           |       |
| Detailed      | Detailed analytics with filters.             | Interactive charts, tables.                | All above           |       |

---

### States
Analytics states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of analytics.       | All above             |
| Focused   | Chart/table is focused.            | Focus Ring            |
| Hovered   | Chart/table is hovered.            | Chart, Border         |

---

### Accessibility
Accessibility features and requirements for Analytics:
- Keyboard navigation: Tab to all controls, Enter/Space to activate.
- ARIA roles/attributes: region, table, chart, button.
- Color contrast: Sufficient for all text, charts, and borders.
- Focus indicator: Visible and uses the focus token.
