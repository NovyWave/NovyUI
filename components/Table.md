# Table

**Id:** Table
**Appearance:** Tabular grid with rows and columns, header row, optional borders, zebra striping, and responsive layout.
**Behavior:** Supports sorting, selection, pagination, and keyboard navigation. Can be static or interactive.
**Components:**
- [Pagination](../components/Pagination.md) (for paged tables)
- [Checkbox](../components/Checkbox.md) (for row selection)
- [Button](../components/Button.md) (for actions)
**Used in pages:**
- [PricingTable](../pages/PricingTable.md)
- [KeyboardShortcutsHelp](../pages/KeyboardShortcutsHelp.md)

---

## Table

A component for displaying structured data in rows and columns, supporting sorting, selection, and pagination.

---

### Token Usage
The following table lists all design tokens used by the Table component:
| Part         | Token Example         | Description                      |
|--------------|----------------------|----------------------------------|
| Header       | color.bg.header      | Table header background color    |
| Row          | color.bg.row         | Table row background color       |
| Border       | border.table         | Table border style               |
| Text         | color.text.table     | Table text color                 |
| Hover        | color.bg.hover       | Row hover background             |
| Selected     | color.bg.selected    | Selected row background          |

---

### Variants
All supported Table variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used           | Notes                |
|--------------|---------------------------|----------------------------|-----------------------|----------------------|
| Default      | Standard table            | Static, no interactivity   | color.bg.row          |                      |
| Sortable     | Columns sortable          | Sort icons, click headers  | color.icon.primary    |                      |
| Selectable   | Row selection             | Checkboxes in rows         | color.bg.selected     |                      |
| Paginated    | With pagination           | Footer with controls       | color.bg.header       | Uses [Pagination]    |
| Zebra        | Alternating row colors    | Zebra striping            | color.bg.zebra        |                      |

---

### States
Table states and their token usage:
| State    | Description                | Token(s) affected         |
|----------|----------------------------|---------------------------|
| Default  | Normal display             | color.bg.row              |
| Hover    | Row hovered                | color.bg.hover            |
| Selected | Row selected               | color.bg.selected         |
| Disabled | Table disabled             | color.bg.disabled         |

---

### Accessibility
Accessibility features and requirements for Table:
- Use semantic `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` elements.
- Provide table captions and header associations.
- Ensure keyboard navigation for all interactive elements.
- Use `aria-sort`, `aria-selected`, and `aria-label` as needed.
- Ensure sufficient color contrast for all table elements.
- Ensure focus indicator is visible for all interactive elements.
