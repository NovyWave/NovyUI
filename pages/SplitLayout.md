## SplitLayout
A layout page that divides the screen into two or more resizable sections, often used for side-by-side content or master-detail views.
- **Id:** SplitLayout
- **Appearance:** Two or more panes, resizable divider, horizontal or vertical layout. May include collapse/expand controls.
- **Behavior:** Users can resize panes, collapse/expand sections, and drag divider. Supports keyboard and mouse interaction.
- **Blocks:**
  - [SplitLayout](../blocks/SplitLayout.md)
- **Components:**
  - [Divider](../components/Divider.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the SplitLayout page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Divider      | border       | Divider color/style        |
| Pane         | background   | Pane background color      |
| Layout       | spacing      | Controls gap between panes |

---

### Variants
All supported SplitLayout variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Horizontal   | Panes side by side         | Horizontal divider         | border, background, spacing | |
| Vertical     | Panes stacked vertically   | Vertical divider           | border, background, spacing | |
| Collapsible  | One pane can collapse      | Collapsible control        | border, background, spacing | |

---

### States
SplitLayout states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Panes visible, resizable   | border, background, spacing |
| Dragging     | Divider being moved        | border             |
| Collapsed    | Pane hidden/collapsed      | background         |

---

### Accessibility
Accessibility features and requirements for SplitLayout:
- Keyboard navigation for divider and controls
- ARIA roles for regions and divider
- Sufficient color contrast for divider and panes
- Visible focus indicator for divider and controls
