## Command
⌨️ A modal or dropdown for searching and executing actions or commands quickly.
- **Id:** Command
- **Appearance:** A modal or dropdown with a search input and a list of actions or commands. Each item may include an icon, description, and keyboard shortcut.
- **Behavior:** Opens with a shortcut or button. Typing filters commands. Selecting an item triggers its action. Supports keyboard navigation and grouping.
- **Used in blocks:**
  - [GlobalCommandPalette](../blocks/GlobalCommandPalette.md)
### Accessibility
- Use `role="dialog"` or `role="menu"` as appropriate.
- Announce search results and focused items.
- Support keyboard navigation and shortcuts.

### Variants
#### Command - **Command palette**
- **Id:** CommandPalette
- **Appearance:** Displays command palette.
- **Behavior:** Filters commands.
#### Command - **Searchable actions**
- **Id:** SearchableActions
- **Appearance:** Displays searchable actions.
- **Behavior:** Searches actions.
#### Command - **Command menu**
- **Id:** CommandMenu
- **Appearance:** Displays command menu.
- **Behavior:** Filters commands.
