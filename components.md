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
- [❗ Form Error Message](components/FormErrorMessage.md)
- [🪧 Hover Card](components/HoverCard.md)
- [🖼️ Image](components/Image.md)
- [📝 Input](components/Input.md)
- [👥 Input Group](components/InputGroup.md)
- [⌨️ Keyboard Key](components/KeyboardKey.md)
- [📋 List](components/List.md)
- [⏳ Loading](components/Loading.md)
- [🗺️ Map](components/Map.md)
- [🍔 Menubar](components/Menubar.md)
- [🔔 Notification](components/Notification.md)
- [🔢 Number Input](components/NumberInput.md)
- [📄 Pagination](components/Pagination.md)
- [🔒 Password Input](components/PasswordInput.md)
- [🔑 Pin Input](components/PinInput.md)
- [❓ Popconfirm](components/Popconfirm.md)
- [💬 Popover](components/Popover.md)
- [📈 Progress](components/Progress.md)
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

## Instructions

- Every component in `/components` must be listed here, sorted alphabetically by display name (ignoring leading emojis/symbols).
- Every link must point to an existing file.

- Use the following template for each component:
  ```md
  ## [Component Title]
  A brief description of the component's purpose.
  - **Id:** [ComponentId]
  - **Appearance:** Description of the component's layout and visual elements.
  - **Behavior:** Description of the component's interactive features or logic.
  - **Used in Blocks:**
    - [BlockId1](../blocks/BlockId1.md)
    - [BlockId2](../blocks/BlockId2.md)
    - ...
  ### Accessibility
  - Describe accessibility features, keyboard support, and ARIA usage if relevant.
  ### Variants
  #### [Component Title] - **[Variant Name]**
  - **Id:** [VariantId]
  - **Appearance:** Description of the variant's layout or features.
  - **Behavior:** Description of the variant's behavior.
  ```

- Keep the list of BlockIds and their paths in the **Used in Blocks:** section up to date.
- The **Used in Blocks:** section must not be empty; every component must be referenced by at least one real block.
- Always document accessibility and keyboard support for all components (Accessibility section is required).
- Every component file must include a `### Accessibility` section describing accessibility and keyboard support.
