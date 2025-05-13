## CountrySelect
A block for selecting a country from a searchable dropdown or list.
- **Id:** CountrySelect
- **Appearance:** Input or dropdown with country names and flags.
- **Behavior:** Allows searching and selecting a country. May show flags and country codes.
- **Components:**
  - [Combobox](../components/Combobox.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Signup](../pages/Signup.md)
  - [Profile](../pages/Profile.md)

---

### Token Usage
The following table lists all design tokens used by the CountrySelect block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Dropdown background                |
| Text         | color.neutral.12  | Country name text                  |
| Flag Border  | color.border.2    | Border around flag icon            |
| Focus Ring   | color.focus.1     | Focus indicator for input/dropdown |

---

### Variants
All supported CountrySelect variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard searchable dropdown.                | User can search and select country.        | All above           |       |
| WithFlags     | Dropdown shows country flags.                | Flags displayed next to country names.     | All above           |       |
| WithCodes     | Shows country codes (e.g., +1, +44).         | Codes displayed with country names.        | All above           |       |

---

### States
CountrySelect states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of dropdown.        | All above             |
| Focused   | Input or option is focused.        | Focus Ring            |
| Selected  | Country is selected.               | Text, Flag Border     |
| Disabled  | Input is disabled.                 | Background, Text      |

---

### Accessibility
Accessibility features and requirements for CountrySelect:
- Keyboard navigation: Tab to input and options, Arrow keys to navigate, Enter/Space to select.
- ARIA roles/attributes: combobox, listbox, option, and group.
- Color contrast: Sufficient for all text and flags.
- Focus indicator: Visible and uses the focus token.
