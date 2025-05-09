## Searchbox
🔍 A modal or dropdown for searching content or navigating quickly within an app.
- **Id:** Searchbox
- **Appearance:** A modal or dropdown with a search input and list of results. May include icons, categories, and keyboard shortcuts.
- **Behavior:** Opens with shortcut or button. Typing filters results. Selecting an item triggers navigation or action.
- **Used in blocks:**
  - [Headers](../blocks/Headers.md)
  - [Navbars](../blocks/Navbars.md)
### Accessibility
- Use `role="search"` or `role="dialog"` as appropriate.
- Announce search results and focused items.
- Support keyboard navigation and shortcuts.

### Variants
#### Searchbox - **Command palette**
- **Id:** CommandPalette
- **Appearance:** Displays command palette.
- **Behavior:** Filters commands.
#### Searchbox - **Searchable**
- **Id:** Searchable
- **Appearance:** Search input.
- **Behavior:** Filters search results.
