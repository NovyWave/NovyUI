## Breadcrumbs
🍞 A navigation aid that displays the user's current location within a site hierarchy.
- **Id:** Breadcrumbs
- **Appearance:** A horizontal list of links separated by chevrons or slashes, representing the user's navigation path. Each item is a clickable link except the last, which is the current page and styled as inactive.
- **Behavior:** Clicking a breadcrumb navigates to that page/section. Supports keyboard navigation. May collapse into a dropdown for long paths.
- **Used in blocks:**
  - [Headers](blocks.md#headers)
### Accessibility
- Use `nav` with `aria-label="breadcrumb"`.
- Mark current page with `aria-current="page"`.
- Ensure links are keyboard accessible.

### Variants
#### Breadcrumbs - **Basic**
- **Id:** Basic
- **Appearance:** Simple horizontal list.
- **Behavior:** Static navigation.
#### Breadcrumbs - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons in each breadcrumb.
- **Behavior:** Icons indicate type or category.
#### Breadcrumbs - **Collapsible and Overflow**
- **Id:** CollapsibleAndOverflow
- **Appearance:** Collapses into a dropdown for long paths.
- **Behavior:** Supports long navigation paths.
