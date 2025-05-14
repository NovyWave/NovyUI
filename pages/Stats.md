## Stats
A page or section displaying key metrics, analytics, or statistics, often in cards or charts.
- **Id:** Stats
- **Appearance:** Cards or charts showing metrics, with icons, values, and labels. May include trend indicators and filters.
- **Behavior:** Static or dynamic display of stats. May support filtering, sorting, or live updates.
- **Blocks:**
  - [Stats](../blocks/Stats.md)
- **Components:**
  - [Card](../components/Card.md)
  - [DataTable](../components/DataTable.md)
  - [Icon](../components/Icon.md)

---

### Token Usage
The following table lists all design tokens used by the Stats page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Card         | background   | Card/chart background      |
| Value        | color        | Stat value color           |
| Layout       | spacing      | Card/chart spacing         |

---

### Variants
All supported Stats variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Card         | Stat in a card             | Card with value, label     | background, color, spacing | |
| Chart        | Stat as a chart            | Chart with value, trend    | background, color, spacing | |
| Inline       | Inline stat                | Value and label inline     | color, spacing            | |

---

### States
Stats states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Stats loaded and visible   | background, color |
| Loading      | Stats loading              | color             |
| Error        | Failed to load stats       | color, background |

---

### Accessibility
Accessibility features and requirements for Stats:
- Screen reader labels for stats and charts
- ARIA roles/attributes for charts and stat values
- Sufficient color contrast for values and backgrounds
- Keyboard navigation for interactive charts
- Visible focus indicator for all interactive elements
