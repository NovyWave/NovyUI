# NovyUI Components

Welcome to the NovyUI Components reference. This document provides an overview of all UI components available in NovyUI, including their purpose, appearance, behavior, and available variants. Use this file to explore, plan, or implement components in your project. Each section includes a brief description to help you quickly understand the component's role.

- [Accordion](#accordion)
- [Alert](#alert)
- [Avatar](#avatar)
- [Badge](#badge)
- [Blockquote](#blockquote)
- [Breadcrumbs](#breadcrumbs)
- [Button](#button)
- [Calendar](#calendar)
- [Card](#card)
- [Checkbox](#checkbox)
- [Chips](#chips)
- [Collapse](#collapse)
- [Color Input](#color-input)
- [Combobox / Autocomplete](#combobox--autocomplete)
- [Command](#command)
- [Context Menu](#context-menu)
- [Data Table / Grid](#data-table--grid)
- [Date/Time Picker](#datetime-picker)
- [Dialog / Modal](#dialog--modal)
- [Divider / Separator](#divider--separator)
- [Drawer / Sheet / Offcanvas](#drawer--sheet--offcanvas)
- [Dropzone / Upload](#dropzone--upload)
- [File Input](#file-input)
- [Input](#input)
- [Textarea](#textarea)
- [Select](#select)
- [Radio](#radio)
- [Toggle](#toggle)
- [Slider](#slider)
- [Number Input](#number-input)
- [Password Input](#password-input)
- [Pin Input](#pin-input)
- [Input Group](#input-group)
- [Form Validation/Error Message](#form-validationerror-message)
- [Hover Card](#hover-card)
- [Image](#image)
- [List](#list)
- [Loading](#loading)
- [Map / Location Picker](#map--location-picker)
- [Menubar](#menubar)
- [Notification / Toast / Snackbar](#notification--toast--snackbar)
- [Pagination](#pagination)
- [Popconfirm](#popconfirm)
- [Popover](#popover)
- [Progress](#progress)
- [QR Code](#qr-code)
- [Rating](#rating)
- [Resizable Panel](#resizable-panel)
- [Rich Text Editor](#rich-text-editor)
- [Scroll Area](#scroll-area)
- [Scrollspy](#scrollspy)
- [Search / Spotlight](#search--spotlight)
- [Statistic](#statistic)
- [Stepper](#stepper)
- [Switch](#switch)
- [Tabs](#tabs)
- [Tag Input](#tag-input)
- [Theme Toggle](#theme-toggle)
- [Timeline](#timeline)
- [Tooltip](#tooltip)
- [Transfer List](#transfer-list)
- [Tree View / Tree Select](#tree-view--tree-select)
- [Typography](#typography)
- [Countdown](#countdown)
- [Cascader](#cascader)
- [Affix](#affix)
- [Anchor Navigation](#anchor-navigation)

## Accordion
A vertically stacked set of expandable/collapsible items, used to show and hide sections of related content.
- **Id:** Accordion
- **Appearance:** A vertically stacked list of items, each with a header. Clicking a header expands or collapses its content. Optionally, headers may include icons indicating state (expanded/collapsed).
- **Behavior:** Only one (single) or multiple (multiple) items can be open at a time. Clicking a header toggles its content. Supports keyboard navigation and smooth transitions.
- **Variants:**
  - Single
    - **Id:** Single
    - **Appearance Difference:** Only one item is visually expanded at a time; others are collapsed.
    - **Behavior Difference:** Expanding a new item automatically collapses the previously open item.
  - Multiple
    - **Id:** Multiple
    - **Appearance Difference:** Multiple items can be visually expanded at once.
    - **Behavior Difference:** Each item can be expanded or collapsed independently; no auto-collapse.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Each header includes an icon that rotates or changes to indicate expanded/collapsed state.
    - **Behavior Difference:** Icon state updates in sync with expansion/collapse; otherwise, behavior matches selected mode (single/multiple).

## Alert
A message box used to display important information, feedback, or status updates to the user.
- **Id:** Alert
- **Appearance:** A colored box with an icon and message text. Color and icon reflect the alert type (e.g., green for success, red for error). May include a close (dismiss) button.
- **Behavior:** Appears in response to events or actions. Dismissible alerts can be closed by the user. May auto-dismiss after a timeout.
- **Variants:**
  - Success
    - **Id:** Success
    - **Appearance Difference:** Green color and success icon.
    - **Behavior Difference:** Indicates a successful action or event.
  - Error
    - **Id:** Error
    - **Appearance Difference:** Red color and error icon.
    - **Behavior Difference:** Indicates an error or failure.
  - Warning
    - **Id:** Warning
    - **Appearance Difference:** Yellow color and warning icon.
    - **Behavior Difference:** Indicates a warning or caution.
  - Info
    - **Id:** Info
    - **Appearance Difference:** Blue color and info icon.
    - **Behavior Difference:** Provides informational message.
  - Dismissible
    - **Id:** Dismissible
    - **Appearance Difference:** Includes a close button.
    - **Behavior Difference:** Can be dismissed by the user.

## Avatar
A visual representation of a user or entity, typically shown as an image, initials, or icon.
- **Id:** Avatar
- **Appearance:** A circular or rounded image, initials, or icon representing a user. Can include a small status indicator (dot) or be grouped with other avatars.
- **Behavior:** Displays user image or fallback (initials/icon). Status indicator updates in real time. Grouped avatars overlap or are displayed in a row.
- **Variants:**
  - Image
    - **Id:** Image
    - **Appearance Difference:** Displays a user image.
    - **Behavior Difference:** Shows the user's image.
  - Initials
    - **Id:** Initials
    - **Appearance Difference:** Displays user initials.
    - **Behavior Difference:** Shows the user's initials.
  - With status
    - **Id:** WithStatus
    - **Appearance Difference:** Includes a small status indicator.
    - **Behavior Difference:** Status indicator updates in real time.
  - Group
    - **Id:** Group
    - **Appearance Difference:** Displays multiple avatars in a group.
    - **Behavior Difference:** Grouped avatars overlap or are displayed in a row.

## Badge
A small indicator used to display status, count, or highlight information on another element.
- **Id:** Badge
- **Appearance:** A small, rounded or pill-shaped label. Can display a number, icon, or short text. Often colored to indicate status or category (e.g., red for error, green for success). May be attached to another element (e.g., avatar, button) or stand alone.
- **Behavior:** Static by default. If used as a notification badge, updates dynamically to reflect changes (e.g., unread count). Can be interactive if used as a filter or tag (clickable/removable).
- **Variants:**
  - Solid
    - **Id:** Solid
    - **Appearance Difference:** Solid color background.
    - **Behavior Difference:** Static display.
  - Outline
    - **Id:** Outline
    - **Appearance Difference:** Outline border with transparent background.
    - **Behavior Difference:** Static display.
  - Dot
    - **Id:** Dot
    - **Appearance Difference:** Small dot indicator.
    - **Behavior Difference:** Indicates status or notification.
  - With icon
    - **Id:** WithIcon
    - **Appearance Difference:** Includes an icon.
    - **Behavior Difference:** Icon indicates status or category.
  - With count
    - **Id:** WithCount
    - **Appearance Difference:** Displays a number.
    - **Behavior Difference:** Indicates count or quantity.

## Blockquote
A styled container for displaying quoted text or citations within content.
- **Id:** Blockquote
- **Appearance:** A visually distinct section for quoting text. Typically indented, with a vertical line or different background. May include citation or author below or beside the quote.
- **Behavior:** Static display. May support copy-to-clipboard or expandable/collapsible for long quotes.
- **Variants:**
  - With author
    - **Id:** WithAuthor
    - **Appearance Difference:** Includes citation or author.
    - **Behavior Difference:** Displays author information.
  - Simple
    - **Id:** Simple
    - **Appearance Difference:** Basic indented quote.
    - **Behavior Difference:** Static display.

## Breadcrumbs
A navigation aid that displays the user's current location within a site hierarchy.
- **Id:** Breadcrumbs
- **Appearance:** A horizontal list of links separated by chevrons or slashes, representing the user's navigation path. Each item is a clickable link except the last, which is the current page and styled as inactive.
- **Behavior:** Clicking a breadcrumb navigates to that page/section. Supports keyboard navigation. May collapse into a dropdown for long paths.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple horizontal list.
    - **Behavior Difference:** Static navigation.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons in each breadcrumb.
    - **Behavior Difference:** Icons indicate type or category.
  - Collapsible/overflow
    - **Id:** CollapsibleOverflow
    - **Appearance Difference:** Collapses into a dropdown for long paths.
    - **Behavior Difference:** Supports long navigation paths.

## Button
A clickable element used to trigger actions, submit forms, or navigate.
- **Id:** Button
- **Appearance:** A rectangular or pill-shaped clickable element with text and/or icon. Visual style (color, border, shadow) changes based on variant and state (hover, active, disabled). May include loading spinner or icon.
- **Behavior:** Triggers an action when clicked or activated via keyboard. Supports disabled and loading states. May show focus ring for accessibility.
- **Variants:**
  - Primary
    - **Id:** Primary
    - **Appearance Difference:** Solid color background.
    - **Behavior Difference:** Primary action button.
  - Secondary
    - **Id:** Secondary
    - **Appearance Difference:** Outline border.
    - **Behavior Difference:** Secondary action button.
  - Outline
    - **Id:** Outline
    - **Appearance Difference:** Outline border with transparent background.
    - **Behavior Difference:** Secondary action button.
  - Ghost
    - **Id:** Ghost
    - **Appearance Difference:** Transparent background with minimal styling.
    - **Behavior Difference:** Secondary action button.
  - Icon
    - **Id:** Icon
    - **Appearance Difference:** Icon only, no text.
    - **Behavior Difference:** Icon button.
  - Loading
    - **Id:** Loading
    - **Appearance Difference:** Includes loading spinner.
    - **Behavior Difference:** Indicates loading state.
  - Group
    - **Id:** Group
    - **Appearance Difference:** Group of buttons.
    - **Behavior Difference:** Grouped button actions.
  - Social login
    - **Id:** SocialLogin
    - **Appearance Difference:** Includes social media icon.
    - **Behavior Difference:** Social login button.

## Calendar
A visual grid for selecting dates, viewing months, or displaying scheduled events.
- **Id:** Calendar
- **Appearance:** A grid of days for a month or week, with headers for days of the week. May include navigation arrows, today highlight, and event markers. Selected date(s) are visually distinct.
- **Behavior:** Allows date selection (single, range, or multiple). Supports navigation between months/years. May display events or availability. Keyboard and mouse interaction supported.
- **Variants:**
  - Month view
    - **Id:** MonthView
    - **Appearance Difference:** Displays a full month.
    - **Behavior Difference:** Month navigation.
  - Week view
    - **Id:** WeekView
    - **Appearance Difference:** Displays a week.
    - **Behavior Difference:** Week navigation.
  - With events
    - **Id:** WithEvents
    - **Appearance Difference:** Includes event markers.
    - **Behavior Difference:** Displays events or availability.

## Card
A container that groups related information, actions, or media in a visually distinct block.
- **Id:** Card
- **Appearance:** A rectangular container with optional shadow, border, or background. Can include image, title, description, actions, and footer. Used to group related content.
- **Behavior:** Static by default. May be clickable, expandable, or support hover effects. Can contain interactive elements (buttons, links).
- **Variants:**
  - With image
    - **Id:** WithImage
    - **Appearance Difference:** Includes an image.
    - **Behavior Difference:** Displays image content.
  - With actions
    - **Id:** WithActions
    - **Appearance Difference:** Includes action buttons.
    - **Behavior Difference:** Supports interactive actions.
  - Simple
    - **Id:** Simple
    - **Appearance Difference:** Basic card.
    - **Behavior Difference:** Static display.

## Checkbox
A control that allows users to select one or more options from a set.
- **Id:** Checkbox
- **Appearance:** A small square box that can be checked or unchecked. May include a label and an optional indeterminate state (horizontal line). Checked state is indicated by a checkmark or filled box.
- **Behavior:** Clicking toggles between checked, unchecked, and (if supported) indeterminate. Supports keyboard navigation and focus. Can be disabled.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple checkbox.
    - **Behavior Difference:** Basic toggle.
  - Indeterminate
    - **Id:** Indeterminate
    - **Appearance Difference:** Includes indeterminate state.
    - **Behavior Difference:** Supports indeterminate state.
  - With label
    - **Id:** WithLabel
    - **Appearance Difference:** Includes a label.
    - **Behavior Difference:** Displays label text.

## Chips
Compact elements representing tags, selections, or actions, often removable or selectable.
- **Id:** Chips
- **Appearance:** Small, rounded rectangles with text and/or icon. Often used for tags, filters, or selections. May include a close (remove) icon.
- **Behavior:** Can be static or interactive (selectable, removable, or clickable). Supports keyboard navigation. May be used in groups for multi-select.
- **Variants:**
  - Selectable
    - **Id:** Selectable
    - **Appearance Difference:** Selectable styling.
    - **Behavior Difference:** Can be selected.
  - Removable
    - **Id:** Removable
    - **Appearance Difference:** Includes remove icon.
    - **Behavior Difference:** Can be removed.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.

## Collapse
A container that can expand or collapse to show or hide its content.
- **Id:** Collapse
- **Appearance:** A container with a header and hidden or visible content. Header may include an icon indicating expanded/collapsed state. Content area animates open/closed.
- **Behavior:** Clicking the header toggles visibility of the content. Supports smooth transitions and keyboard navigation. Can be used standalone or in groups.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple collapse.
    - **Behavior Difference:** Basic toggle.
  - With animation
    - **Id:** WithAnimation
    - **Appearance Difference:** Includes animation.
    - **Behavior Difference:** Smooth transitions.
  - Panel
    - **Id:** Panel
    - **Appearance Difference:** Panel styling.
    - **Behavior Difference:** Panel toggle.
  - Nested panels
    - **Id:** NestedPanels
    - **Appearance Difference:** Nested panel styling.
    - **Behavior Difference:** Nested panel toggle.

## Color Input
An input field for selecting or entering color values, often with a color picker UI.
- **Id:** ColorInput
- **Appearance:** An input field with a color swatch. May include a color picker dialog, palette, or eyedropper tool. Shows selected color as background or border.
- **Behavior:** Clicking opens a color picker or palette. Selecting a color updates the value and swatch. May support manual hex/RGB input and validation.
- **Variants:**
  - Color picker
    - **Id:** ColorPicker
    - **Appearance Difference:** Includes color picker dialog.
    - **Behavior Difference:** Opens color picker.
  - Swatch
    - **Id:** Swatch
    - **Appearance Difference:** Displays color swatch.
    - **Behavior Difference:** Shows selected color.
  - EyeDropper
    - **Id:** EyeDropper
    - **Appearance Difference:** Includes eyedropper tool.
    - **Behavior Difference:** Selects color from screen.
  - Palette
    - **Id:** Palette
    - **Appearance Difference:** Includes color palette.
    - **Behavior Difference:** Selects color from palette.

## Combobox / Autocomplete
An input field with a dropdown list of options that filters as the user types.
- **Id:** ComboboxAutocomplete
- **Appearance:** An input field with a dropdown list of options that filters as the user types. May include clear button, icons, and tags for multi-select. Dropdown appears below input and highlights matching text.
- **Behavior:** Typing filters options. Selecting an option adds it to the input (single or multiple). Supports keyboard navigation, option creation, and async loading.
- **Variants:**
  - Autocomplete
    - **Id:** Autocomplete
    - **Appearance Difference:** Filters options as user types.
    - **Behavior Difference:** Autocompletes input.
  - Multiselect
    - **Id:** Multiselect
    - **Appearance Difference:** Supports multiple selections.
    - **Behavior Difference:** Allows multiple selections.
  - Creatable
    - **Id:** Creatable
    - **Appearance Difference:** Allows option creation.
    - **Behavior Difference:** Creates new options.
  - Tags input
    - **Id:** TagsInput
    - **Appearance Difference:** Displays tags.
    - **Behavior Difference:** Adds tags to input.
  - Typeahead
    - **Id:** Typeahead
    - **Appearance Difference:** Filters options as user types.
    - **Behavior Difference:** Typeahead input.

## Command
A modal or dropdown for searching and executing actions or commands quickly.
- **Id:** Command
- **Appearance:** A modal or dropdown with a search input and a list of actions or commands. Each item may include an icon, description, and keyboard shortcut.
- **Behavior:** Opens with a shortcut or button. Typing filters commands. Selecting an item triggers its action. Supports keyboard navigation and grouping.
- **Variants:**
  - Command palette
    - **Id:** CommandPalette
    - **Appearance Difference:** Displays command palette.
    - **Behavior Difference:** Filters commands.
  - Searchable actions
    - **Id:** SearchableActions
    - **Appearance Difference:** Displays searchable actions.
    - **Behavior Difference:** Searches actions.
  - Command menu
    - **Id:** CommandMenu
    - **Appearance Difference:** Displays command menu.
    - **Behavior Difference:** Filters commands.

## Context Menu
A menu that appears on right-click or long-press, offering context-specific actions.
- **Id:** ContextMenu
- **Appearance:** A floating menu that appears on right-click or long-press. Contains a vertical list of actions, each with optional icon and shortcut.
- **Behavior:** Opens at cursor position. Selecting an item triggers its action. Supports nested submenus and keyboard navigation.
- **Variants:**
  - Right-click menu
    - **Id:** RightClickMenu
    - **Appearance Difference:** Opens on right-click.
    - **Behavior Difference:** Displays context menu.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.
  - With actions
    - **Id:** WithActions
    - **Appearance Difference:** Includes actions.
    - **Behavior Difference:** Displays action items.

## Data Table / Grid
A component for displaying and interacting with tabular data in rows and columns.
- **Id:** DataTableGrid
- **Appearance:** A table with rows and columns, headers, and optional borders or stripes. May include sorting icons, filters, pagination controls, and action buttons.
- **Behavior:** Displays tabular data. Supports sorting, filtering, pagination, row selection, and inline actions. Columns may be resizable or reorderable.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple table.
    - **Behavior Difference:** Basic table display.
  - Filtering
    - **Id:** Filtering
    - **Appearance Difference:** Includes filter controls.
    - **Behavior Difference:** Filters table data.
  - Sorting
    - **Id:** Sorting
    - **Appearance Difference:** Includes sorting icons.
    - **Behavior Difference:** Sorts table data.
  - Pagination
    - **Id:** Pagination
    - **Appearance Difference:** Includes pagination controls.
    - **Behavior Difference:** Paginates table data.
  - Row selection
    - **Id:** RowSelection
    - **Appearance Difference:** Supports row selection.
    - **Behavior Difference:** Selects table rows.
  - With actions
    - **Id:** WithActions
    - **Appearance Difference:** Includes action buttons.
    - **Behavior Difference:** Supports inline actions.
  - Sortable
    - **Id:** Sortable
    - **Appearance Difference:** Supports column sorting.
    - **Behavior Difference:** Sorts table columns.
  - Advanced table
    - **Id:** AdvancedTable
    - **Appearance Difference:** Advanced table features.
    - **Behavior Difference:** Supports advanced table interactions.

## Date/Time Picker
An input for selecting dates and/or times, often with a calendar or clock popup.
- **Id:** DateTimePicker
- **Appearance:** An input field with a calendar or clock popup. Calendar shows days, months, or years; clock shows hours and minutes. Selected value is shown in the input.
- **Behavior:** Clicking input opens picker. Selecting a date/time updates the value. Supports keyboard navigation, range selection, and validation.
- **Variants:**
  - Date picker
    - **Id:** DatePicker
    - **Appearance Difference:** Includes calendar popup.
    - **Behavior Difference:** Selects date.
  - Date range picker
    - **Id:** DateRangePicker
    - **Appearance Difference:** Includes range selection.
    - **Behavior Difference:** Selects date range.
  - Time input
    - **Id:** TimeInput
    - **Appearance Difference:** Includes clock popup.
    - **Behavior Difference:** Selects time.

## Dialog / Modal
A popup overlay that displays content or actions requiring user attention.
- **Id:** DialogModal
- **Appearance:** A centered overlay with a box containing title, content, and actions. Background is dimmed. May include close button and icon.
- **Behavior:** Opens in response to user action. Can be closed by button, overlay click, or escape key. Traps focus and disables background interaction.
- **Variants:**
  - Centered
    - **Id:** Centered
    - **Appearance Difference:** Centered overlay.
    - **Behavior Difference:** Centered modal.
  - Fullscreen
    - **Id:** Fullscreen
    - **Appearance Difference:** Fullscreen overlay.
    - **Behavior Difference:** Fullscreen modal.
  - With form
    - **Id:** WithForm
    - **Appearance Difference:** Includes form elements.
    - **Behavior Difference:** Supports form submission.
  - Nested dialogs
    - **Id:** NestedDialogs
    - **Appearance Difference:** Supports nested dialogs.
    - **Behavior Difference:** Nested modal interactions.

## Divider / Separator
A visual line or space used to separate content into distinct sections.
- **Id:** DividerSeparator
- **Appearance:** A thin horizontal or vertical line, sometimes with text or icon in the center. Used to separate content.
- **Behavior:** Static visual separator. May be interactive if used as a drag handle.
- **Variants:**
  - Horizontal
    - **Id:** Horizontal
    - **Appearance Difference:** Horizontal line.
    - **Behavior Difference:** Static separator.
  - Vertical
    - **Id:** Vertical
    - **Appearance Difference:** Vertical line.
    - **Behavior Difference:** Static separator.

## Drawer / Sheet / Offcanvas
A panel that slides in from the edge of the screen to display additional content or actions.
- **Id:** DrawerSheetOffcanvas
- **Appearance:** A panel that slides in from the edge of the screen, overlaying content. Contains title, content, and actions. May include close button.
- **Behavior:** Opens in response to user action. Can be closed by button, overlay click, or escape key. Traps focus and disables background interaction.
- **Variants:**
  - Side panel
    - **Id:** SidePanel
    - **Appearance Difference:** Slides in from the side.
    - **Behavior Difference:** Side panel interaction.
  - Slide-over
    - **Id:** SlideOver
    - **Appearance Difference:** Slides over content.
    - **Behavior Difference:** Slide-over interaction.
  - With form
    - **Id:** WithForm
    - **Appearance Difference:** Includes form elements.
    - **Behavior Difference:** Supports form submission.
  - With actions
    - **Id:** WithActions
    - **Appearance Difference:** Includes action buttons.
    - **Behavior Difference:** Supports interactive actions.
  - Mobile navigation
    - **Id:** MobileNavigation
    - **Appearance Difference:** Mobile-friendly design.
    - **Behavior Difference:** Mobile navigation panel.

## Dropzone / Upload
A component for uploading files via drag-and-drop or file selection.
- **Id:** DropzoneUpload
- **Appearance:** A bordered area with an icon and prompt text. Shows file previews or list of uploaded files. May include progress bars and remove buttons.
- **Behavior:** Dragging files over highlights the area. Dropping or selecting files uploads them. Supports multiple files, file type restrictions, and progress display.
- **Variants:**
  - Single file
    - **Id:** SingleFile
    - **Appearance Difference:** Supports single file upload.
    - **Behavior Difference:** Uploads single file.
  - Multiple files
    - **Id:** MultipleFiles
    - **Appearance Difference:** Supports multiple file uploads.
    - **Behavior Difference:** Uploads multiple files.
  - With preview
    - **Id:** WithPreview
    - **Appearance Difference:** Includes file previews.
    - **Behavior Difference:** Displays file previews.
  - With file type restrictions
    - **Id:** WithFileTypeRestrictions
    - **Appearance Difference:** Restricts file types.
    - **Behavior Difference:** Validates file types.
  - With upload progress
    - **Id:** WithUploadProgress
    - **Appearance Difference:** Includes progress bars.
    - **Behavior Difference:** Displays upload progress.
  - Drag-and-drop
    - **Id:** DragAndDrop
    - **Appearance Difference:** Supports drag-and-drop.
    - **Behavior Difference:** Drag-and-drop file upload.

## File Input
An input field for selecting one or more files from the user's device.
- **Id:** FileInput
- **Appearance:** An input field with a button to select files. May show selected file name(s) and a clear button.
- **Behavior:** Clicking button opens file picker. Selecting files updates the value. Supports multiple files and file type restrictions.
- **Variants:**
  - Single file
    - **Id:** SingleFile
    - **Appearance Difference:** Supports single file selection.
    - **Behavior Difference:** Selects single file.
  - Multiple files
    - **Id:** MultipleFiles
    - **Appearance Difference:** Supports multiple file selection.
    - **Behavior Difference:** Selects multiple files.
  - File preview
    - **Id:** FilePreview
    - **Appearance Difference:** Includes file previews.
    - **Behavior Difference:** Displays file previews.

## Input
A field for entering and editing a single line of text or data.
- **Id:** Input
- **Appearance:** A rectangular or pill-shaped text field with optional label, icon, or button. Shows placeholder text when empty.
- **Behavior:** Accepts user text input. Supports focus, disabled, and error states. May include clear or reveal button.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple input field.
    - **Behavior Difference:** Basic text input.
  - With icon
    - **Id:** WithIcon
    - **Appearance Difference:** Includes icon.
    - **Behavior Difference:** Displays icon content.
  - With button
    - **Id:** WithButton
    - **Appearance Difference:** Includes button.
    - **Behavior Difference:** Supports button actions.

## Textarea
A multi-line input field for entering larger amounts of text.
- **Id:** Textarea
- **Appearance:** A multi-line text input box with optional label and placeholder. May show character count.
- **Behavior:** Accepts multi-line text input. Supports focus, disabled, and error states. May auto-resize to fit content.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple textarea.
    - **Behavior Difference:** Basic multi-line input.
  - Autosize
    - **Id:** Autosize
    - **Appearance Difference:** Auto-resizes to fit content.
    - **Behavior Difference:** Auto-resizing textarea.
  - With character count
    - **Id:** WithCharacterCount
    - **Appearance Difference:** Includes character count.
    - **Behavior Difference:** Displays character count.

## Select
A dropdown input for choosing one or more options from a list.
- **Id:** Select
- **Appearance:** An input field with a dropdown arrow. Clicking shows a list of options. Selected option is shown in the field.
- **Behavior:** Clicking opens dropdown. Selecting an option updates the value. Supports keyboard navigation, search, and multi-select.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple select field.
    - **Behavior Difference:** Basic dropdown.
  - Multi-select
    - **Id:** MultiSelect
    - **Appearance Difference:** Supports multiple selections.
    - **Behavior Difference:** Allows multiple selections.
  - With search
    - **Id:** WithSearch
    - **Appearance Difference:** Includes search input.
    - **Behavior Difference:** Searches options.

## Radio
A control for selecting a single option from a set of mutually exclusive choices.
- **Id:** Radio
- **Appearance:** A small circular button with a label. Selected state is indicated by a filled dot. Used in groups for single selection.
- **Behavior:** Clicking selects the radio and deselects others in the group. Supports keyboard navigation and disabled state.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple radio button.
    - **Behavior Difference:** Basic selection.
  - With label
    - **Id:** WithLabel
    - **Appearance Difference:** Includes label.
    - **Behavior Difference:** Displays label text.

## Switch/Toggle
A control for switching between two states, such as on/off or enabled/disabled.
- **Id:** Toggle
- **Appearance:** A horizontal slider with a thumb that moves between on and off positions. May include labels or icons for each state.
- **Behavior:** Clicking or dragging toggles the state. Supports keyboard navigation and disabled state. May animate thumb movement.
- **Variants:**
  - With label
    - **Id:** WithLabel
    - **Appearance Difference:** Includes label.
    - **Behavior Difference:** Displays label text.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.

## Slider
A control for selecting a value or range by sliding a handle along a track.
- **Id:** Slider
- **Appearance:** A horizontal or vertical track with a draggable thumb. May show value, min/max labels, and ticks.
- **Behavior:** Dragging the thumb or clicking the track changes the value. Supports keyboard navigation, range selection, and disabled state.
- **Variants:**
  - Single value
    - **Id:** SingleValue
    - **Appearance Difference:** Single value slider.
    - **Behavior Difference:** Adjusts single value.
  - Range
    - **Id:** Range
    - **Appearance Difference:** Range slider.
    - **Behavior Difference:** Adjusts range of values.

## Number Input
An input field for entering numeric values, often with increment/decrement controls.
- **Id:** NumberInput
- **Appearance:** An input field for numbers, often with up/down arrow buttons. May show min/max and step values.
- **Behavior:** Accepts numeric input. Arrow buttons increment/decrement value. Supports validation, min/max, and disabled state.
- **Variants:**
  - With controls
    - **Id:** WithControls
    - **Appearance Difference:** Includes up/down arrow buttons.
    - **Behavior Difference:** Adjusts value with controls.
  - Without controls
    - **Id:** WithoutControls
    - **Appearance Difference:** No arrow buttons.
    - **Behavior Difference:** Adjusts value without controls.

## Password Input
A text input that hides entered characters, used for sensitive information like passwords.
- **Id:** PasswordInput
- **Appearance:** An input field with obscured text (dots or asterisks). Includes a button to toggle visibility.
- **Behavior:** Accepts password input. Toggle button reveals/hides text. Supports validation and error state.
- **Variants:**
  - With visibility toggle
    - **Id:** WithVisibilityToggle
    - **Appearance Difference:** Includes visibility toggle button.
    - **Behavior Difference:** Toggles password visibility.

## Pin Input
A set of input fields for entering a fixed-length code, such as a PIN or verification code.
- **Id:** PinInput
- **Appearance:** A row of small input boxes for entering a fixed-length numeric or alphanumeric code.
- **Behavior:** Typing moves focus to next box. Supports paste, backspace, and validation. May mask input for security.
- **Variants:**
  - 4-digit
    - **Id:** FourDigit
    - **Appearance Difference:** Four input boxes.
    - **Behavior Difference:** Accepts 4-digit code.
  - 6-digit
    - **Id:** SixDigit
    - **Appearance Difference:** Six input boxes.
    - **Behavior Difference:** Accepts 6-digit code.

## Input Group
A combination of input fields and add-ons grouped together for related data entry.
- **Id:** InputGroup
- **Appearance:** A combination of input fields and buttons/icons grouped together in a single row. May include add-ons before or after the input.
- **Behavior:** All elements are visually and functionally grouped. Supports focus, disabled, and error states.
- **Variants:**
  - Input with button
    - **Id:** InputWithButton
    - **Appearance Difference:** Includes button.
    - **Behavior Difference:** Supports button actions.
  - Input with icon
    - **Id:** InputWithIcon
    - **Appearance Difference:** Includes icon.
    - **Behavior Difference:** Displays icon content.

## Form Validation/Error Message
A message or indicator that displays validation errors or feedback for form fields.
- **Id:** FormValidationErrorMessage
- **Appearance:** A small text message below or beside a form field, often colored red or with an error icon.
- **Behavior:** Appears when validation fails. May disappear on correction or after a timeout. Supports accessibility roles.
- **Variants:**
  - Inline error
    - **Id:** InlineError
    - **Appearance Difference:** Inline error message.
    - **Behavior Difference:** Displays inline error.
  - Tooltip error
    - **Id:** TooltipError
    - **Appearance Difference:** Tooltip error message.
    - **Behavior Difference:** Displays tooltip error.

## Hover Card
A floating card that appears when hovering over an element, showing additional information or actions.
- **Id:** HoverCard
- **Appearance:** A floating card that appears when hovering over a target element. Contains text, image, or actions. May have an arrow pointing to the target.
- **Behavior:** Appears on hover or focus. Disappears on mouse leave or blur. Supports delay and interactive content.
- **Variants:**
  - Appears on hover
    - **Id:** AppearsOnHover
    - **Appearance Difference:** Appears on hover.
    - **Behavior Difference:** Displays hover card.
  - With actions
    - **Id:** WithActions
    - **Appearance Difference:** Includes actions.
    - **Behavior Difference:** Supports interactive actions.

## Image
A component for displaying images with optional styling, captions, or overlays.
- **Id:** Image
- **Appearance:** Displays an image with optional border, shadow, or rounded corners. May include caption or overlay.
- **Behavior:** Static by default. May support zoom, lazy loading, or click to enlarge. Responsive to container size.
- **Variants:**
  - Responsive
    - **Id:** Responsive
    - **Appearance Difference:** Responsive design.
    - **Behavior Difference:** Adjusts to container size.
  - With caption
    - **Id:** WithCaption
    - **Appearance Difference:** Includes caption.
    - **Behavior Difference:** Displays caption text.
  - Gallery (grid, carousel)
    - **Id:** Gallery
    - **Appearance Difference:** Grid or carousel layout.
    - **Behavior Difference:** Displays image gallery.

## List
A vertical or horizontal arrangement of items, often with icons, avatars, or actions.
- **Id:** List
- **Appearance:** A vertical stack of items, each with text and optional icon or avatar. May be ordered (numbered) or unordered (bulleted).
- **Behavior:** Static or interactive (clickable, selectable, or reorderable). Supports keyboard navigation and nested lists.
- **Variants:**
  - Ordered
    - **Id:** Ordered
    - **Appearance Difference:** Numbered list.
    - **Behavior Difference:** Ordered list items.
  - Unordered
    - **Id:** Unordered
    - **Appearance Difference:** Bulleted list.
    - **Behavior Difference:** Unordered list items.
  - Description
    - **Id:** Description
    - **Appearance Difference:** Description list.
    - **Behavior Difference:** Displays descriptions.
  - With actions
    - **Id:** WithActions
    - **Appearance Difference:** Includes actions.
    - **Behavior Difference:** Supports interactive actions.
  - With avatars
    - **Id:** WithAvatars
    - **Appearance Difference:** Includes avatars.
    - **Behavior Difference:** Displays avatar content.

## Loading
A visual indicator that content is loading or a process is in progress.
- **Id:** Loading
- **Appearance:** Spinner (rotating icon), skeleton (gray placeholder shapes), or overlay (dimmed background with loader). Indicates loading state.
- **Behavior:** Appears while content is loading. Disappears when loading completes. May block interaction (overlay) or show progress.
- **Variants:**
  - Spinner
    - **Id:** Spinner
    - **Appearance Difference:** Rotating icon.
    - **Behavior Difference:** Indicates loading state.
  - Overlay (fullscreen, partial)
    - **Id:** Overlay
    - **Appearance Difference:** Dimmed background.
    - **Behavior Difference:** Blocks interaction.
  - Skeleton (text, avatar, card, variants)
    - **Id:** Skeleton
    - **Appearance Difference:** Gray placeholder shapes.
    - **Behavior Difference:** Indicates loading state.

## Map / Location Picker
A component for selecting or displaying a geographic location on an interactive map.
- **Id:** MapLocationPicker
- **Appearance:** An interactive map with a marker or pin. May include search input, zoom controls, and address display.
- **Behavior:** User can move marker, search for location, or click map to select. Updates value and may show address or coordinates.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple map.
    - **Behavior Difference:** Basic map interaction.
  - With search
    - **Id:** WithSearch
    - **Appearance Difference:** Includes search input.
    - **Behavior Difference:** Searches location.

## Menubar
A horizontal or vertical bar containing navigation menus and actions.
- **Id:** Menubar
- **Appearance:** A horizontal bar with menu items, each optionally with an icon or dropdown. May be styled as tabs or buttons.
- **Behavior:** Clicking or hovering opens dropdowns. Supports keyboard navigation and active state indication.
- **Variants:**
  - Horizontal menu
    - **Id:** HorizontalMenu
    - **Appearance Difference:** Horizontal layout.
    - **Behavior Difference:** Displays horizontal menu.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.
  - With dropdowns
    - **Id:** WithDropdowns
    - **Appearance Difference:** Includes dropdowns.
    - **Behavior Difference:** Displays dropdown menus.

## Notification / Toast / Snackbar
A temporary message that appears to inform the user of an event or status.
- **Id:** NotificationToastSnackbar
- **Appearance:** A small box that appears temporarily, usually at the corner or bottom of the screen. Shows message, icon, and optional action button.
- **Behavior:** Appears in response to events. Auto-dismisses after timeout or can be dismissed manually. Supports stacking and different types (success, error, etc.).
- **Variants:**
  - Success
    - **Id:** Success
    - **Appearance Difference:** Green color and success icon.
    - **Behavior Difference:** Indicates a successful action or event.
  - Error
    - **Id:** Error
    - **Appearance Difference:** Red color and error icon.
    - **Behavior Difference:** Indicates an error or failure.
  - Info
    - **Id:** Info
    - **Appearance Difference:** Blue color and info icon.
    - **Behavior Difference:** Provides informational message.
  - Warning
    - **Id:** Warning
    - **Appearance Difference:** Yellow color and warning icon.
    - **Behavior Difference:** Indicates a warning or caution.
  - Custom icon
    - **Id:** CustomIcon
    - **Appearance Difference:** Includes custom icon.
    - **Behavior Difference:** Displays custom icon.
  - With actions
    - **Id:** WithActions
    - **Appearance Difference:** Includes action button.
    - **Behavior Difference:** Supports interactive actions.
  - Temporary (snackbar)
    - **Id:** Temporary
    - **Appearance Difference:** Temporary display.
    - **Behavior Difference:** Auto-dismisses after timeout.
  - Stacking
    - **Id:** Stacking
    - **Appearance Difference:** Supports stacking.
    - **Behavior Difference:** Stacks notifications.
  - Bottom position
    - **Id:** BottomPosition
    - **Appearance Difference:** Displays at bottom.
    - **Behavior Difference:** Bottom position display.

## Pagination
A navigation control for dividing content into discrete pages and moving between them.
- **Id:** Pagination
- **Appearance:** A horizontal row of page numbers, arrows, and optional jump or page size controls. Current page is highlighted.
- **Behavior:** Clicking a number or arrow navigates to that page. Supports keyboard navigation and dynamic page range.
- **Variants:**
  - Simple
    - **Id:** Simple
    - **Appearance Difference:** Simple pagination.
    - **Behavior Difference:** Basic page navigation.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.
  - Jump to page
    - **Id:** JumpToPage
    - **Appearance Difference:** Includes jump controls.
    - **Behavior Difference:** Jumps to specific page.
  - Page size selector
    - **Id:** PageSizeSelector
    - **Appearance Difference:** Includes page size controls.
    - **Behavior Difference:** Selects page size.

## Popconfirm
A confirmation popup that asks the user to verify an action before proceeding.
- **Id:** Popconfirm
- **Appearance:** A small popup with a message and confirm/cancel buttons. Appears near the triggering element.
- **Behavior:** Appears on action (e.g., delete). Confirms or cancels the action. Disappears on selection or outside click.
- **Variants:**
  - Confirmation popover
    - **Id:** ConfirmationPopover
    - **Appearance Difference:** Confirmation message.
    - **Behavior Difference:** Confirms or cancels action.

## Popover
A floating panel anchored to a trigger element, used for displaying additional content or actions.
- **Id:** Popover
- **Appearance:** A floating panel anchored to a trigger element. Contains content, actions, or forms. May have an arrow pointing to the trigger.
- **Behavior:** Opens on click, hover, or focus. Closes on outside click or escape. Supports interactive content and keyboard navigation.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple popover.
    - **Behavior Difference:** Basic popover interaction.
  - With menu
    - **Id:** WithMenu
    - **Appearance Difference:** Includes menu.
    - **Behavior Difference:** Displays menu content.
  - With form
    - **Id:** WithForm
    - **Appearance Difference:** Includes form elements.
    - **Behavior Difference:** Supports form submission.

## Progress
A visual indicator of task completion or ongoing activity, such as a bar or spinner.
- **Id:** Progress
- **Appearance:** A horizontal bar or circular indicator showing completion percentage. May include label or value.
- **Behavior:** Fills or animates to indicate progress. Can be determinate (fixed value) or indeterminate (loading).
- **Variants:**
  - Linear
    - **Id:** Linear
    - **Appearance Difference:** Horizontal bar.
    - **Behavior Difference:** Indicates linear progress.
  - Circular (progress circle, indeterminate)
    - **Id:** Circular
    - **Appearance Difference:** Circular indicator.
    - **Behavior Difference:** Indicates circular progress.

## QR Code
A component for generating and displaying QR codes that encode data for scanning.
- **Id:** QRCode
- **Appearance:** A square grid of black and white modules encoding data. May include a label or logo in the center.
- **Behavior:** Static image or canvas. Scannable by devices. Updates when data changes.
- **Variants:**
  - Display QR codes
    - **Id:** DisplayQRCodes
    - **Appearance Difference:** Displays QR codes.
    - **Behavior Difference:** Scannable QR codes.

## Rating
A control for displaying or collecting user ratings, typically with stars or icons.
- **Id:** Rating
- **Appearance:** A row of stars or custom icons, filled to indicate value. May show numeric value or label.
- **Behavior:** Clicking or hovering sets the rating. Supports read-only and interactive modes. May allow half or custom increments.
- **Variants:**
  - Stars
    - **Id:** Stars
    - **Appearance Difference:** Star icons.
    - **Behavior Difference:** Indicates rating with stars.
  - Custom icons
    - **Id:** CustomIcons
    - **Appearance Difference:** Custom icons.
    - **Behavior Difference:** Indicates rating with custom icons.
  - Read-only
    - **Id:** ReadOnly
    - **Appearance Difference:** Read-only display.
    - **Behavior Difference:** Static rating display.

## Resizable Panel
A container that can be resized by the user, often via a drag handle or border.
- **Id:** ResizablePanel
- **Appearance:** A container with a visible drag handle or border. Can be horizontal or vertical.
- **Behavior:** User drags handle to resize panel. Supports min/max size and snapping. May animate resize.
- **Variants:**
  - Horizontal
    - **Id:** Horizontal
    - **Appearance Difference:** Horizontal layout.
    - **Behavior Difference:** Resizes horizontally.
  - Vertical
    - **Id:** Vertical
    - **Appearance Difference:** Vertical layout.
    - **Behavior Difference:** Resizes vertically.
  - With content
    - **Id:** WithContent
    - **Appearance Difference:** Includes content.
    - **Behavior Difference:** Displays panel content.

## Rich Text Editor
A text input area with formatting controls for creating styled content.
- **Id:** RichTextEditor
- **Appearance:** A text input area with a toolbar for formatting (bold, italic, lists, etc.). Shows styled content as user types.
- **Behavior:** User applies formatting via toolbar or shortcuts. Supports undo/redo, links, images, and HTML output.
- **Variants:**
  - Toolbar options (bold, italic, underline, etc.)
    - **Id:** ToolbarOptions
    - **Appearance Difference:** Includes formatting toolbar.
    - **Behavior Difference:** Supports text formatting.

## Scroll Area
A container with custom scrollbars for overflowing content.
- **Id:** ScrollArea
- **Appearance:** A container with custom scrollbars. May show only when needed or always visible.
- **Behavior:** Scrolls content horizontally or vertically. Supports keyboard and mouse interaction. May auto-scroll or snap.
- **Variants:**
  - Custom scrollbars
    - **Id:** CustomScrollbars
    - **Appearance Difference:** Custom scrollbar design.
    - **Behavior Difference:** Custom scroll interaction.
  - Scrollable content
    - **Id:** ScrollableContent
    - **Appearance Difference:** Scrollable container.
    - **Behavior Difference:** Scrolls content.

## Scrollspy
A navigation aid that highlights links based on the user's scroll position in the page.
- **Id:** Scrollspy
- **Appearance:** A vertical or horizontal list of links. Highlights the link corresponding to the visible section.
- **Behavior:** Updates highlight as user scrolls. Clicking a link scrolls to the section. Supports smooth scroll and active state.
- **Variants:**
  - Navigation highlights on scroll
    - **Id:** NavigationHighlights
    - **Appearance Difference:** Highlights active link.
    - **Behavior Difference:** Updates highlight on scroll.

## Search / Spotlight
A modal or dropdown for searching content or navigating quickly within an app.
- **Id:** SearchSpotlight
- **Appearance:** A modal or dropdown with a search input and list of results. May include icons, categories, and keyboard shortcuts.
- **Behavior:** Opens with shortcut or button. Typing filters results. Selecting an item triggers navigation or action.
- **Variants:**
  - Command palette
    - **Id:** CommandPalette
    - **Appearance Difference:** Displays command palette.
    - **Behavior Difference:** Filters commands.
  - Searchable
    - **Id:** Searchable
    - **Appearance Difference:** Search input.
    - **Behavior Difference:** Filters search results.

## Statistic
A component for displaying key metrics, numbers, or trends in a visually prominent way.
- **Id:** Statistic
- **Appearance:** A number with label, icon, or trend indicator. May be displayed in a card or grid.
- **Behavior:** Updates dynamically to reflect data changes. May animate value changes.
- **Variants:**
  - Number with label
    - **Id:** NumberWithLabel
    - **Appearance Difference:** Includes label.
    - **Behavior Difference:** Displays number with label.
  - Trend
    - **Id:** Trend
    - **Appearance Difference:** Includes trend indicator.
    - **Behavior Difference:** Displays trend data.
  - Icon
    - **Id:** Icon
    - **Appearance Difference:** Includes icon.
    - **Behavior Difference:** Displays icon content.

## Stepper
A sequence of steps or stages, often used for multi-step forms or processes.
- **Id:** Stepper
- **Appearance:** A horizontal or vertical sequence of steps, each with a label and icon. Current step is highlighted.
- **Behavior:** Clicking a step navigates to it. Supports linear or non-linear progression, validation, and completion state.
- **Variants:**
  - Horizontal
    - **Id:** Horizontal
    - **Appearance Difference:** Horizontal layout.
    - **Behavior Difference:** Displays horizontal steps.
  - Vertical
    - **Id:** Vertical
    - **Appearance Difference:** Vertical layout.
    - **Behavior Difference:** Displays vertical steps.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.
  - With progress
    - **Id:** WithProgress
    - **Appearance Difference:** Includes progress indicator.
    - **Behavior Difference:** Displays step progress.

## Switch
A toggle control for switching between two states, such as on/off or enabled/disabled.
- **Id:** Switch
- **Appearance:** A toggle switch with a sliding thumb. May include labels or icons for on/off states.
- **Behavior:** Clicking or dragging toggles state. Supports keyboard navigation and disabled state. May animate thumb.
- **Variants:**
  - With label
    - **Id:** WithLabel
    - **Appearance Difference:** Includes label.
    - **Behavior Difference:** Displays label text.
  - Without label
    - **Id:** WithoutLabel
    - **Appearance Difference:** No label.
    - **Behavior Difference:** Basic toggle switch.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.

## Tabs
A set of tabbed buttons for switching between different views or content sections.
- **Id:** Tabs
- **Appearance:** A row or column of tab buttons with an active indicator. Each tab displays different content.
- **Behavior:** Clicking a tab shows its content. Supports keyboard navigation, icons, and orientation.
- **Variants:**
  - Horizontal
    - **Id:** Horizontal
    - **Appearance Difference:** Horizontal layout.
    - **Behavior Difference:** Displays horizontal tabs.
  - Vertical
    - **Id:** Vertical
    - **Appearance Difference:** Vertical layout.
    - **Behavior Difference:** Displays vertical tabs.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.

## Tag Input
An input field for entering and managing tags, often displayed as removable chips.
- **Id:** TagInput
- **Appearance:** An input field with tags displayed as chips. May include add/remove buttons and suggestions dropdown.
- **Behavior:** Typing adds tags. Tags can be removed by clicking or keyboard. Supports validation and suggestions.
- **Variants:**
  - Create/remove tags
    - **Id:** CreateRemoveTags
    - **Appearance Difference:** Supports tag creation/removal.
    - **Behavior Difference:** Adds/removes tags.
  - With suggestions
    - **Id:** WithSuggestions
    - **Appearance Difference:** Includes suggestions dropdown.
    - **Behavior Difference:** Displays tag suggestions.

## Theme Toggle
A control for switching between light and dark (or other) visual themes.
- **Id:** ThemeToggle
- **Appearance:** A button or switch with sun/moon or light/dark icons. Indicates current theme.
- **Behavior:** Clicking toggles between light and dark themes. May animate icon or background.
- **Variants:**
  - Light/Dark switch
    - **Id:** LightDarkSwitch
    - **Appearance Difference:** Sun/moon icons.
    - **Behavior Difference:** Toggles light/dark theme.

## Timeline
A vertical or horizontal display of events in chronological order.
- **Id:** Timeline
- **Appearance:** A vertical or horizontal line with events marked by dots, icons, or cards. Each event includes label, date, and content.
- **Behavior:** Static or interactive (expand/collapse, click for details). May animate on scroll or highlight current event.
- **Variants:**
  - Vertical
    - **Id:** Vertical
    - **Appearance Difference:** Vertical layout.
    - **Behavior Difference:** Displays vertical timeline.
  - Horizontal
    - **Id:** Horizontal
    - **Appearance Difference:** Horizontal layout.
    - **Behavior Difference:** Displays horizontal timeline.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.
  - With images
    - **Id:** WithImages
    - **Appearance Difference:** Includes images.
    - **Behavior Difference:** Displays image content.

## Tooltip
A small popup that provides additional information when hovering or focusing on an element.
- **Id:** Tooltip
- **Appearance:** A small floating box with text, appearing near a target element. May have an arrow pointing to the target.
- **Behavior:** Appears on hover or focus. Disappears on mouse leave or blur. Supports delay, rich content, and positioning.
- **Variants:**
  - Top
    - **Id:** Top
    - **Appearance Difference:** Appears above target.
    - **Behavior Difference:** Displays tooltip above.
  - Bottom
    - **Id:** Bottom
    - **Appearance Difference:** Appears below target.
    - **Behavior Difference:** Displays tooltip below.
  - Left
    - **Id:** Left
    - **Appearance Difference:** Appears to the left of target.
    - **Behavior Difference:** Displays tooltip to the left.
  - Right
    - **Id:** Right
    - **Appearance Difference:** Appears to the right of target.
    - **Behavior Difference:** Displays tooltip to the right.
  - Rich content
    - **Id:** RichContent
    - **Appearance Difference:** Includes rich content.
    - **Behavior Difference:** Displays rich content.

## Transfer List
A dual-list component for moving items between two lists, often with selection and search.
- **Id:** TransferList
- **Appearance:** Two lists side by side with buttons to move items between them. May include search and selection checkboxes.
- **Behavior:** Selecting items and clicking buttons moves them between lists. Supports keyboard navigation and bulk actions.
- **Variants:**
  - Move items between lists
    - **Id:** MoveItems
    - **Appearance Difference:** Supports item transfer.
    - **Behavior Difference:** Moves items between lists.

## Tree View / Tree Select
A hierarchical list for displaying and selecting nested items or categories.
- **Id:** TreeViewTreeSelect
- **Appearance:** A hierarchical list with expandable/collapsible nodes. Each node may have a checkbox, icon, or label.
- **Behavior:** Clicking expands/collapses nodes. Selecting a node updates value. Supports keyboard navigation and multi-select.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple tree view.
    - **Behavior Difference:** Basic tree interaction.
  - With checkboxes
    - **Id:** WithCheckboxes
    - **Appearance Difference:** Includes checkboxes.
    - **Behavior Difference:** Supports checkbox selection.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Includes icons.
    - **Behavior Difference:** Displays icon content.
  - Expand/collapse all
    - **Id:** ExpandCollapseAll
    - **Appearance Difference:** Expand/collapse controls.
    - **Behavior Difference:** Expands/collapses all nodes.
  - Tree structure dropdown
    - **Id:** TreeStructureDropdown
    - **Appearance Difference:** Dropdown layout.
    - **Behavior Difference:** Displays tree structure.

## Typography
A set of styled text elements for headings, paragraphs, lists, and more.
- **Id:** Typography
- **Appearance:** Text elements styled as headings, paragraphs, blockquotes, lists, code, or highlights. Follows design system type scale and spacing.
- **Behavior:** Static display. May support copy, selection, or inline editing.
- **Variants:**
  - Headings
    - **Id:** Headings
    - **Appearance Difference:** Styled as headings.
    - **Behavior Difference:** Displays heading text.
  - Paragraphs
    - **Id:** Paragraphs
    - **Appearance Difference:** Styled as paragraphs.
    - **Behavior Difference:** Displays paragraph text.
  - Blockquotes
    - **Id:** Blockquotes
    - **Appearance Difference:** Styled as blockquotes.
    - **Behavior Difference:** Displays blockquote text.
  - Lists
    - **Id:** Lists
    - **Appearance Difference:** Styled as lists.
    - **Behavior Difference:** Displays list items.
  - Code block
    - **Id:** CodeBlock
    - **Appearance Difference:** Styled as code blocks.
    - **Behavior Difference:** Displays code content.
  - Highlight/Callout
    - **Id:** HighlightCallout
    - **Appearance Difference:** Highlighted text.
    - **Behavior Difference:** Displays highlighted text.

## Countdown
A timer that counts down to a specific time or event, often used for deadlines or launches.
- **Id:** Countdown
- **Appearance:** A numeric or digital timer showing time remaining. May include labels for days, hours, minutes, seconds.
- **Behavior:** Counts down in real time. Triggers event or changes appearance when complete.
- **Variants:**
  - Timer
    - **Id:** Timer
    - **Appearance Difference:** Digital timer.
    - **Behavior Difference:** Counts down time.

## Cascader
A multi-level dropdown for selecting options from hierarchical data.
- **Id:** Cascader
- **Appearance:** An input with a dropdown showing hierarchical options. Selecting a parent reveals child options in a new column or menu.
- **Behavior:** Clicking selects option and reveals next level. Supports keyboard navigation and search.
- **Variants:**
  - Multi-level dropdown
    - **Id:** MultiLevelDropdown
    - **Appearance Difference:** Hierarchical options.
    - **Behavior Difference:** Displays multi-level options.

## Affix
A component that fixes an element to a specific position as the user scrolls.
- **Id:** Affix
- **Appearance:** An element that remains fixed to the top, bottom, or side of the viewport as the user scrolls.
- **Behavior:** Sticks to position when scrolling past a threshold. Releases when scrolling back.
- **Variants:**
  - Sticky/fixed on scroll
    - **Id:** StickyFixedOnScroll
    - **Appearance Difference:** Fixed position.
    - **Behavior Difference:** Sticks on scroll.

## Anchor Navigation
A navigation aid that links to and highlights sections within a page as the user scrolls.
- **Id:** AnchorNavigation
- **Appearance:** A vertical or horizontal list of links to page sections. Highlights the active section as user scrolls.
- **Behavior:** Clicking a link scrolls to the section. Updates highlight as user scrolls. Supports smooth scroll and offset.
- **Variants:**
  - Sticky section links
    - **Id:** StickySectionLinks
    - **Appearance Difference:** Sticky links.
    - **Behavior Difference:** Highlights active section.
