# Menu

**Id:** Menu
**Appearance:** Vertical or horizontal list of menu items, with optional icons, separators, and submenus. Can be inline or in a dropdown/popover.
**Behavior:** Supports keyboard navigation, mouse interaction, and nested submenus. Can be used for navigation or actions.
**Components:**
- [Button](../components/Button.md) (for menu triggers)
- [Icon](../components/Icon.md) (for menu item icons)
- [Popover](../components/Popover.md) (for dropdown menus)
**Used in pages:**
- [Navbars](../pages/Navbars.md)
- [MegaMenu](../pages/MegaMenu.md)

---

## Menu

A component for displaying a list of actions or navigation links, supporting nested submenus and keyboard accessibility.

---

### Token Usage
The following table lists all design tokens used by the Menu component:
| Part         | Token Example         | Description                      |
|--------------|----------------------|----------------------------------|
| Background   | color.bg.menu        | Menu background color            |
| Item         | color.text.menu      | Menu item text color             |
| Icon         | color.icon.menu      | Menu item icon color             |
| Divider      | border.menu.divider  | Divider/separator color          |
| Hover        | color.bg.hover       | Menu item hover background       |
| Selected     | color.bg.selected    | Selected item background         |

---

### Variants
All supported Menu variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used           | Notes                |
|--------------|---------------------------|----------------------------|-----------------------|----------------------|
| Default      | Standard menu             | Vertical list              | color.bg.menu         |                      |
| Horizontal   | Horizontal menu           | Inline items               | color.bg.menu         |                      |
| With Icons   | Menu items with icons     | Icon before label          | color.icon.menu       | Uses [Icon]          |
| With Submenu | Nested submenus           | Expandable/collapsible     | color.bg.menu         |                      |
| Disabled     | Disabled state            | Dimmed, not interactive    | color.text.disabled   |                      |

---

### States
Menu states and their token usage:
| State    | Description                | Token(s) affected         |
|----------|----------------------------|---------------------------|
| Default  | Normal display             | color.bg.menu             |
| Hover    | Item hovered               | color.bg.hover            |
| Selected | Item selected              | color.bg.selected         |
| Disabled | Item disabled              | color.text.disabled       |

---

### Accessibility
Accessibility features and requirements for Menu:
- Use semantic `<nav>` or `<ul>`/`<li>` structure for navigation menus.
- Support keyboard navigation (arrow keys, Enter, Esc).
- Use `aria-haspopup`, `aria-expanded`, and `aria-controls` for submenus.
- Provide visible focus indicators for all items.
- Ensure sufficient color contrast for all menu elements.
- Announce menu open/close state to assistive technology.
