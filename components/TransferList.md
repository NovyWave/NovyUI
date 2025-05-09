## Transfer List
🔄 A component for transferring items between two lists or columns.
- **Id:** TransferList
- **Appearance:** Two lists with items that can be transferred between them. Includes transfer buttons in the middle.
- **Behavior:** Selecting items and clicking transfer buttons moves them between lists. Supports search, filtering, and bulk actions.
### Accessibility
- Use ARIA roles (`listbox`, `option`, `button`).
- Announce selection and transfer actions.
- Support keyboard navigation and transfer.

### Variants
#### Transfer List - **Basic**
- **Id:** Basic
- **Appearance:** Simple transfer list.
- **Behavior:** Basic item transfer.
#### Transfer List - **With search**
- **Id:** WithSearch
- **Appearance:** Includes search inputs.
- **Behavior:** Searches items in lists.
#### Transfer List - **With filtering**
- **Id:** WithFiltering
- **Appearance:** Includes filter controls.
- **Behavior:** Filters items in lists.
