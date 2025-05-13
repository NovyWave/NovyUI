## SettingsTabs
A block for displaying settings or preferences in a tabbed interface.
- **Id:** SettingsTabs
- **Appearance:** Horizontal or vertical tabs with content panels.
- **Behavior:** Allows users to switch between different settings categories.
- **Components:**
  - [Tabs](../components/Tabs.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Settings](../pages/Settings.md)
  - [Profile](../pages/Profile.md)

---

### Token Usage
The following table lists all design tokens used by the SettingsTabs block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Tabs background                    |
| Text         | color.neutral.12  | Tab label and content text         |
| Active Tab   | color.primary.7   | Active tab indicator               |
| Border       | color.border.2    | Tabs border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported SettingsTabs variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard horizontal tabs.                    | Static tab labels and panels.              | All above           |       |
| Vertical      | Vertical tabs layout.                        | Tabs shown vertically.                     | All above           |       |
| WithIcons     | Tabs include icons.                          | Icon shown with tab label.                 | All above           |       |

---

### States
SettingsTabs states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of tabs.            | All above             |
| Focused   | Tab or panel is focused.           | Focus Ring            |
| Active    | Tab is active.                     | Active Tab, Border    |

---

### Accessibility
Accessibility features and requirements for SettingsTabs block:
- Keyboard navigation: Tab/Arrow keys to tabs, Enter/Space to activate.
- ARIA roles/attributes: tablist, tab, tabpanel, and group.
- Color contrast: Sufficient for all text, tabs, and borders.
- Focus indicator: Visible and uses the focus token.
