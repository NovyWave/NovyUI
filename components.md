# NovyUI Components

Welcome to the NovyUI Components reference. This document provides an overview of all UI components available in NovyUI. Each component has its own dedicated file in the `/components` directory.

- [🔽 Accordion](components/Accordion.md)
- [📌 Affix](components/Affix.md)
- [⚠️ Alert](components/Alert.md)
- [🔗 Anchor Navigation](components/AnchorNavigation.md)
- [👤 Avatar](components/Avatar.md)
- [🏷️ Badge](components/Badge.md)
- [💬 Blockquote](components/Blockquote.md)
- [🍞 Breadcrumbs](components/Breadcrumbs.md)
- [🆗 Button](components/Button.md)
- [📅 Calendar](components/Calendar.md)
- [🗂️ Card](components/Card.md)
- [🎠 Carousel](components/Carousel.md)
- [🌲 Cascader](components/Cascader.md)
- [☑️ Checkbox](components/Checkbox.md)
- [🏷️ Chips](components/Chips.md)
- [➖ Collapse](components/Collapse.md)
- [🎨 Color Input](components/ColorInput.md)
- [🧰 Combobox](components/Combobox.md)
- [⌨️ Command](components/Command.md)
- [📋 Context Menu](components/ContextMenu.md)
- [⏳ Countdown](components/Countdown.md)
- [📊 Data Table](components/DataTable.md)
- [📆 Date Picker](components/DatePicker.md)
- [🗓️ Date Range Picker](components/DateRangePicker.md)
- [🗨️ Dialog](components/Dialog.md)
- [🟰 Divider](components/Divider.md)
- [🗄️ Drawer](components/Drawer.md)
- [🗃️ Dropzone](components/Dropzone.md)
- [📤 File Input](components/FileInput.md)
- [📝 Form](components/Form.md)
- [❗ Form Error Message](components/FormErrorMessage.md)
- [🔲 Grid](components/Grid.md)
- [🪧 Hover Card](components/HoverCard.md)
- [🔤 Icon](components/Icon.md)
- [🖼️ Image](components/Image.md)
- [📝 Input](components/Input.md)
- [👥 Input Group](components/InputGroup.md)
- [⌨️ Kbd](components/Kbd.md)
- [📋 List](components/List.md)
- [⏳ Loading](components/Loading.md)
- [🗺️ Map](components/Map.md)
- [🍔 Menu](components/Menu.md)
- [🍔 Menubar](components/Menubar.md)
- [🔔 Notification](components/Notification.md)
- [🔢 Number Input](components/NumberInput.md)
- [📄 Pagination](components/Pagination.md)
- [🔒 Password Input](components/PasswordInput.md)
- [🔑 Pin Input](components/PinInput.md)
- [❓ Popconfirm](components/Popconfirm.md)
- [💬 Popover](components/Popover.md)
- [📊 Progress](components/Progress.md)
- [🔳 QR Code](components/QRCode.md)
- [🔘 Radio](components/Radio.md)
- [⭐ Rating](components/Rating.md)
- [↔️ Resizable Panel](components/ResizablePanel.md)
- [📝 Rich Text Editor](components/RichTextEditor.md)
- [🖱️ Scroll Area](components/ScrollArea.md)
- [🕵️ Scrollspy](components/Scrollspy.md)
- [🔍 Searchbox](components/Searchbox.md)
- [🗳️ Select](components/Select.md)
- [🎚️ Slider](components/Slider.md)
- [📊 Statistic](components/Statistic.md)
- [🗒️ Table](components/Table.md)
- [🪜 Stepper](components/Stepper.md)
- [🔀 Switch](components/Switch.md)
- [🗂️ Tabs](components/Tabs.md)
- [🏷️ Tag Input](components/TagInput.md)
- [📝 Textarea](components/Textarea.md)
- [🌗 Theme Toggle](components/ThemeToggle.md)
- [⏰ Time Input](components/TimeInput.md)
- [🕒 Timeline](components/Timeline.md)
- [🔁 Toggle](components/Toggle.md)
- [💡 Tooltip](components/Tooltip.md)
- [🔄 Transfer List](components/TransferList.md)
- [🌳 Tree View](components/TreeView.md)
- [🔤 Typography](components/Typography.md)

# NovyUI Component Documentation Format

All NovyUI component documentation **must** strictly follow the structure and formatting exemplified in `Accordion.md`. This format is required for all component docs—no legacy or alternative formats are permitted. The enforcer script will flag any deviation.

## Required Section Order
1. **Header**
   - Component name as H2 (e.g., `## Accordion`)
   - One-line summary with emoji (if applicable)
   - Bullet list: **Id** (must match filename, CamelCase), **Appearance**, **Behavior**, **Used in blocks** (with links to existing blocks in `blocks.md`)
2. **Token Usage**
   - H3: `### Token Usage`
   - Intro sentence: "The following table lists all design tokens used by the [Component] component:"
   - Table with columns: Part | Token Example | Description (no extra or missing columns)
   - Horizontal rule (`---`) after section
3. **Variants**
   - H3: `### Variants`
   - Intro sentence: "All supported [Component] variants are listed below:"
   - Table with columns: Variant Name | Description | Appearance/Behavior | Tokens Used | Notes (no extra or missing columns)
   - Horizontal rule (`---`) after section
4. **States**
   - H3: `### States`
   - Intro sentence: "[Component] states and their token usage:"
   - Table with columns: State | Description | Token(s) affected (no extra or missing columns)
   - Additional notes as bullet points (if needed)
   - Horizontal rule (`---`) after section
5. **Accessibility**
   - H3: `### Accessibility`
   - Must start with: "Accessibility features and requirements for [Component]:"
   - Must be a bullet list of accessibility features and requirements
   - Must mention: keyboard navigation, ARIA roles/attributes, color contrast, and focus indicator

## Table Formats
- All tables must use the exact columns and order as shown above.
- No extra or missing columns.
- No alternative table layouts.

## Section Details
- Each section must begin with the required intro sentence (except Header and Accessibility).
- Section order is strict—no reordering or omission.
- Use horizontal rules (`---`) between major sections (after each except the last).

## Header Section
- Component name as H2 (e.g., `## Accordion`)
- One-line summary with emoji (if applicable)
- Bullet list:
  - **Id:** (must match filename, CamelCase)
  - **Appearance:**
  - **Behavior:**
  - **Used in blocks:** (with links to existing blocks in `blocks.md`)

## Accessibility Section
- Must start with: "Accessibility features and requirements for [Component]:"
- Must be a bullet list
- Must mention:
  - Keyboard navigation
  - ARIA roles/attributes
  - Color contrast
  - Focus indicator

## Additional Enforcement
- Filename must be CamelCase and match the `**Id:**` in the file.
- No hardcoded values (hex colors, px) in documentation—must reference tokens.
- "Used in blocks" references must exist in `blocks.md`.
- Component must be listed in `components.md` TOC (with correct name, ignoring emoji).
- State/Variant documentation must exist (explicitly document all states/variants).
- All sections must be present (no omission).

## Enforcement
- The enforcer script (`component-markdown-enforcer.ts`) will flag any file that does not strictly follow this format, including:
  - Missing or out-of-order sections
  - Missing or incorrect intro sentences
  - Incorrect table columns or order
  - Missing horizontal rules
  - Any deviation from the canonical example
  - Missing or mismatched `**Id:**`
  - Hardcoded values
  - Broken block references
  - Not listed in TOC

**This format is required for all NovyUI component docs.**
