## Cascader Filter
A block for filtering results using a multi-level cascader (e.g., category → subcategory) in product or job listings.
- **Id:** CascaderFilter
- **Appearance:** A compact input or button that opens a multi-level dropdown. Each level represents a category, subcategory, etc. Selected path is shown as a breadcrumb or label.
- **Behavior:** Selecting a category reveals subcategories. Selecting a leaf node applies the filter. Supports clearing the filter. Can be used in sidebars or toolbars.
- **Components:**
  - [Cascader](../components/Cascader.md)
- **Used in pages:**
  - [ProductFilters](../pages/ProductFilters.md)

### Variants
#### Cascader Filter - **Sidebar**
- **Id:** Sidebar
- **Appearance:** Placed in a sidebar with other filters.
- **Behavior:** Updates results as user selects categories.

#### Cascader Filter - **Toolbar**
- **Id:** Toolbar
- **Appearance:** Placed in a toolbar as a dropdown button.
- **Behavior:** Applies filter on selection or confirmation.
