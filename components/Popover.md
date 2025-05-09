## Popover
💬 A floating panel anchored to a trigger element, used for displaying additional content or actions.
- **Id:** Popover
- **Appearance:** A floating panel anchored to a trigger element. Contains content, actions, or forms. May have an arrow pointing to the trigger.
- **Behavior:** Opens on click, hover, or focus. Closes on outside click or escape. Supports interactive content and keyboard navigation.
- **Used in blocks:**
  - [UserProfilePopover](blocks.md#user-profile-popover)
### Accessibility
- Use ARIA roles (`dialog`, `tooltip`, `menu`) as appropriate.
- Announce popover content to screen readers.
- Support keyboard navigation and dismissal.

### Variants
#### Popover - **Basic**
- **Id:** Basic
- **Appearance:** Simple popover.
- **Behavior:** Basic popover interaction.
#### Popover - **With menu**
- **Id:** WithMenu
- **Appearance:** Includes menu.
- **Behavior:** Displays menu content.
#### Popover - **With form**
- **Id:** WithForm
- **Appearance:** Includes form elements.
- **Behavior:** Supports form submission.
