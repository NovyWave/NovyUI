## Chips
🏷️ Compact elements representing tags, selections, or actions, often removable or selectable.
- **Id:** Chips
- **Appearance:** Small, rounded rectangles with text and/or icon. Often used for tags, filters, or selections. May include a close (remove) icon.
- **Behavior:** Can be static or interactive (selectable, removable, or clickable). Supports keyboard navigation. May be used in groups for multi-select.
- **Used in blocks:**
  - [ArticleCards](../blocks/ArticleCards.md)
### Accessibility
- Use `role="listbox"` and `role="option"` for selectable chips.
- Removable chips should have accessible remove buttons (`aria-label`).
- Support keyboard navigation and selection.

### Variants
#### Chips - **Selectable**
- **Id:** Selectable
- **Appearance:** Selectable styling.
- **Behavior:** Can be selected.
#### Chips - **Removable**
- **Id:** Removable
- **Appearance:** Includes remove icon.
- **Behavior:** Can be removed.
#### Chips - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
