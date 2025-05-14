## Search
A search results page that displays matching items, products, or content based on user queries. Includes filters, sorting, and pagination.
- **Id:** Search
- **Appearance:** List or grid of search results, with filters, sorting, and pagination controls.
- **Behavior:** Displays results based on user queries, supports filtering, sorting, and navigation.
- **Blocks:**
  - [Search](../blocks/Search.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Search page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Result/filter border               |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Search variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| List          | List of search results.                      | List view, filters, pagination.            | All above           |       |
| Grid          | Grid of search results.                      | Grid view, filters, pagination.            | All above           |       |

---

### States
Search states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of search results.  | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Selected  | Result is selected.                | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Search:
- Keyboard navigation: Tab to all results and controls, Enter/Space to activate.
- ARIA roles/attributes: list, button, region, search.
- Color contrast: Sufficient for all text, results, and controls.
- Focus indicator: Visible and uses the focus token.
