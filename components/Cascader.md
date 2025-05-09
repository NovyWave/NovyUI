## Cascader
🌲 A multi-level dropdown for selecting options from hierarchical data.
- **Id:** Cascader
- **Appearance:** An input with a dropdown showing hierarchical options. Selecting a parent reveals child options in a new column or menu.
- **Behavior:** Clicking selects option and reveals next level. Supports keyboard navigation and search.
- **Used in blocks:**
  - [CascaderFilter](blocks.md#cascader-filter)
### Accessibility
- Use ARIA roles (`menu`, `menuitem`, `tree`, `treeitem`) as appropriate.
- Announce expanded/collapsed state with `aria-expanded`.
- Support keyboard navigation between levels.

### Variants
#### Cascader - **Multi-level dropdown**
- **Id:** MultiLevelDropdown
- **Appearance:** Hierarchical options.
- **Behavior:** Displays multi-level options.
