## Product Filters
A page for filtering products using a multi-level cascader filter block.
- **Id:** ProductFilters
- **Appearance:** A page with a sidebar or toolbar filter, product list/grid, and filter summary. Filter UI uses a cascader for category/subcategory selection.
- **Behavior:** User selects a category path in the cascader filter; product list updates to match. Supports clearing and changing filters.
- **Blocks:**
  - [CascaderFilter](../blocks/CascaderFilter.md)
### Variants
#### Product Filters - **Sidebar filter**
- **Id:** Sidebar
- **Appearance:** Cascader filter in a sidebar with other filters.
- **Behavior:** Updates product list as user selects categories.
#### Product Filters - **Toolbar filter**
- **Id:** Toolbar
- **Appearance:** Cascader filter in a toolbar above the product list.
- **Behavior:** Applies filter on selection or confirmation.

### Example: E-commerce Product Filtering
Use the [CascaderFilter](../blocks/CascaderFilter.md) block to let users filter products by Department, Category, and Subcategory. This improves navigation and helps users quickly find relevant products.

#### Related Blocks
- [CascaderFilter](../blocks/CascaderFilter.md)

#### Related Components
- [Cascader](../components/Cascader.md)

---

**Usage Example:**

- User clicks the filter input.
- Selects "Electronics" → "Computers" → "Laptops".
- Product list updates to show only laptops.

---

This pattern can be reused for job boards, real estate, and other multi-level filtering scenarios.
