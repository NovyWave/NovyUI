## Menubar
🍔 A horizontal or vertical bar containing navigation menus and actions.
- **Id:** Menubar
- **Appearance:** A horizontal bar with menu items, each optionally with an icon or dropdown. May be styled as tabs or buttons.
- **Behavior:** Clicking or hovering opens dropdowns. Supports keyboard navigation and active state indication.
- **Used in blocks:**
  - [MenubarBlock](../blocks/MenubarBlock.md)
### Accessibility
- Use ARIA roles (`menubar`, `menuitem`).
- Support keyboard navigation (arrow keys, Enter, Esc).
- Announce active menu and items.

### Variants
#### Menubar - **Horizontal menu**
- **Id:** HorizontalMenu
- **Appearance:** Horizontal layout.
- **Behavior:** Displays horizontal menu.
#### Menubar - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Menubar - **With dropdowns**
- **Id:** WithDropdowns
- **Appearance:** Includes dropdowns.
- **Behavior:** Displays dropdown menus.
