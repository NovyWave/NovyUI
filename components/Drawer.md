## Drawer
🗄️ A panel that slides in from the edge of the screen to display additional content or actions.
- **Id:** Drawer
- **Appearance:** A panel that slides in from the edge of the screen, overlaying content. Contains title, content, and actions. May include close button.
- **Behavior:** Opens in response to user action. Can be closed by button, overlay click, or escape key. Traps focus and disables background interaction.
- **Used in blocks:**
  - [MobileNavigationDrawer](blocks.md#mobile-navigation-drawer)
### Accessibility
- Use `role="dialog"` or `role="complementary"`.
- Trap focus within drawer while open.
- Announce drawer title and content.
- Support closing with Esc key.

### Variants
#### Drawer - **Side panel**
- **Id:** SidePanel
- **Appearance:** Slides in from the side.
- **Behavior:** Side panel interaction.
#### Drawer - **Slide-over**
- **Id:** SlideOver
- **Appearance:** Slides over content.
- **Behavior:** Slide-over interaction.
#### Drawer - **With form**
- **Id:** WithForm
- **Appearance:** Includes form elements.
- **Behavior:** Supports form submission.
#### Drawer - **With actions**
- **Id:** WithActions
- **Appearance:** Includes action buttons.
- **Behavior:** Supports interactive actions.
#### Drawer - **Mobile navigation**
- **Id:** MobileNavigation
- **Appearance:** Mobile-friendly design.
- **Behavior:** Mobile navigation panel.
