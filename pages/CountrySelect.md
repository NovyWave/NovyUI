## CountrySelect
A page for selecting a country from a searchable dropdown or list.
- **Id:** CountrySelect
- **Appearance:** Dropdown or list of countries, with search/filter input.
- **Behavior:** Allows users to select a country, supports keyboard navigation and filtering.
- **Blocks:**
  - [CountrySelect](../blocks/CountrySelect.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the CountrySelect page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Dropdown/list background           |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Dropdown/list border               |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported CountrySelect variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Dropdown      | Searchable dropdown of countries.            | Dropdown, search/filter input.             | All above           |       |
| List          | Scrollable list of countries.                | List view, search/filter input.            | All above           |       |

---

### States
CountrySelect states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of selector.        | All above             |
| Focused   | Input or option is focused.        | Focus Ring            |
| Selected  | Country is selected.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for CountrySelect:
- Keyboard navigation: Tab to input and options, Arrow keys to navigate, Enter/Space to select.
- ARIA roles/attributes: combobox, listbox, option.
- Color contrast: Sufficient for all text, options, and controls.
- Focus indicator: Visible and uses the focus token.
