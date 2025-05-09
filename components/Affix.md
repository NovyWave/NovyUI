## Affix
📌 A component that fixes an element to a specific position as the user scrolls.
- **Id:** Affix
- **Appearance:** An element that remains fixed to the top, bottom, or side of the viewport as the user scrolls.
- **Behavior:** Sticks to position when scrolling past a threshold. Releases when scrolling back.
- **Used in blocks:**
  - [StickyHeader](../blocks/StickyHeader.md)
### Accessibility
- Should not obscure important content when fixed.
- Ensure focusable elements within the affixed area remain accessible via keyboard.
- Use `aria-live` if affixed content updates dynamically.

### Variants
#### Affix - **Sticky and Fixed on Scroll**
- **Id:** StickyAndFixedOnScroll
- **Appearance:** Fixed position.
- **Behavior:** Sticks on scroll.
