## Global Command Palette
A block for searching and executing global app actions, inspired by VS Code and Slack.
- **Id:** GlobalCommandPalette
- **Appearance:** A modal with a search input and list of commands.
- **Behavior:** Opens with a keyboard shortcut, filters commands as you type.
- **Components:**
  - [Command](components.md#command)
- **Used in pages:**
  - [AppShell](pages.md#app-shell)
### Variants
#### Global Command Palette - **Basic**
- **Id:** Basic
- **Appearance:** Simple command palette with search input.
- **Behavior:** Static display, no interactivity.
#### Global Command Palette - **With categories**
- **Id:** WithCategories
- **Appearance:** Command palette includes categories for commands.
- **Behavior:** Commands are grouped by category for easier navigation.
