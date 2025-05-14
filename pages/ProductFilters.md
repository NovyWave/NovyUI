## ProductFilters
A page for filtering products using a multi-level cascader filter block.
- **Id:** ProductFilters
- **Appearance:** Sidebar or toolbar filter, product list/grid, and filter summary. Filter UI uses a cascader for category/subcategory selection.
- **Behavior:** User selects a category path in the cascader filter; product list updates to match. Supports clearing and changing filters.
- **Blocks:**
  - [CascaderFilter](../blocks/CascaderFilter.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Cascader](../components/Cascader.md)
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the ProductFilters page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Filter/sidebar border              |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ProductFilters variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Sidebar       | Cascader filter in a sidebar.                | Sidebar, product list updates.             | All above           |       |
| Toolbar       | Cascader filter in a toolbar.                | Toolbar, product list updates.             | All above           |       |

---

### States
ProductFilters states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of filters.         | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Selected  | Filter is selected.                | Border, Text          |

---

### Accessibility
Accessibility features and requirements for ProductFilters:
- Keyboard navigation: Tab to all filters and controls, Enter/Space to activate.
- ARIA roles/attributes: form, input, button, region.
- Color contrast: Sufficient for all text, filters, and controls.
- Focus indicator: Visible and uses the focus token.
