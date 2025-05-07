# NovyUI Components

Welcome to the NovyUI Components reference. This document provides an overview of all UI components available in NovyUI, including their purpose, appearance, behavior, and available variants. Use this file to explore, plan, or implement components in your project. Each section includes a brief description to help you quickly understand the component's role.

- [Accordion](#accordion)
- [Affix](#affix)
- [Alert](#alert)
- [Anchor Navigation](#anchor-navigation)
- [Avatar](#avatar)
- [Badge](#badge)
- [Blockquote](#blockquote)
- [Breadcrumbs](#breadcrumbs)
- [Button](#button)
- [Calendar](#calendar)
- [Card](#card)
- [Cascader](#cascader)
- [Checkbox](#checkbox)
- [Chips](#chips)
- [Collapse](#collapse)
- [Color Input](#color-input)
- [Combobox](#combobox)
- [Command](#command)
- [Context Menu](#context-menu)
- [Countdown](#countdown)
- [Data Table](#data-table)
- [Date Picker](#date-picker)
- [Date Range Picker](#date-range-picker)
- [Dialog](#dialog)
- [Divider](#divider)
- [Drawer](#drawer)
- [Dropzone](#dropzone)
- [File Input](#file-input)
- [Form Error Message](#form-error-message)
- [Hover Card](#hover-card)
- [Image](#image)
- [Input](#input)
- [Input Group](#input-group)
- [Keyboard Key](#keyboard-key)
- [List](#list)
- [Loading](#loading)
- [Map](#map)
- [Menubar](#menubar)
- [Notification](#notification)
- [Number Input](#number-input)
- [Pagination](#pagination)
- [Password Input](#password-input)
- [Pin Input](#pin-input)
- [Popconfirm](#popconfirm)
- [Popover](#popover)
- [Progress](#progress)
- [QR Code](#qr-code)
- [Radio](#radio)
- [Rating](#rating)
- [Resizable Panel](#resizable-panel)
- [Rich Text Editor](#rich-text-editor)
- [Scroll Area](#scroll-area)
- [Scrollspy](#scrollspy)
- [Searchbox](#searchbox)
- [Select](#select)
- [Slider](#slider)
- [Statistic](#statistic)
- [Stepper](#stepper)
- [Switch](#switch)
- [Tabs](#tabs)
- [Tag Input](#tag-input)
- [Textarea](#textarea)
- [Theme Toggle](#theme-toggle)
- [Timeline](#timeline)
- [Time Input](#time-input)
- [Toggle](#toggle)
- [Tooltip](#tooltip)
- [Transfer List](#transfer-list)
- [Tree View](#tree-view)
- [Typography](#typography)

## Accordion
A vertically stacked set of expandable/collapsible items, used to show and hide sections of related content.
- **Id:** Accordion
- **Appearance:** A vertically stacked list of items, each with a header. Clicking a header expands or collapses its content. Optionally, headers may include icons indicating state (expanded/collapsed).
- **Behavior:** Only one (single) or multiple (multiple) items can be open at a time. Clicking a header toggles its content. Supports keyboard navigation and smooth transitions.
- **Used in blocks:**
  - [AccordionDemo](blocks.md#accordiondemo)
### Variants
#### Accordion - **Single**
- **Id:** Single
- **Appearance:** Only one item is visually expanded at a time; others are collapsed.
- **Behavior:** Expanding a new item automatically collapses the previously open item.
#### Accordion - **Multiple**
- **Id:** Multiple
- **Appearance:** Multiple items can be visually expanded at once.
- **Behavior:** Each item can be expanded or collapsed independently; no auto-collapse.
#### Accordion - **With icons**
- **Id:** WithIcons
- **Appearance:** Each header includes an icon that rotates or changes to indicate expanded/collapsed state.
- **Behavior:** Icon state updates in sync with expansion/collapse; otherwise, behavior matches selected mode (single/multiple).

## Affix
A component that fixes an element to a specific position as the user scrolls.
- **Id:** Affix
- **Appearance:** An element that remains fixed to the top, bottom, or side of the viewport as the user scrolls.
- **Behavior:** Sticks to position when scrolling past a threshold. Releases when scrolling back.
- **Used in blocks:**
  - [AffixBanner](blocks.md#affixbanner)
### Variants
#### Affix - **Sticky and Fixed on Scroll**
- **Id:** StickyAndFixedOnScroll
- **Appearance:** Fixed position.
- **Behavior:** Sticks on scroll.

## Alert
A message box used to display important information, feedback, or status updates to the user.
- **Id:** Alert
- **Appearance:** A colored box with an icon and message text. Color and icon reflect the alert type (e.g., green for success, red for error). May include a close (dismiss) button.
- **Behavior:** Appears in response to events or actions. Dismissible alerts can be closed by the user. May auto-dismiss after a timeout.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
  - [Banners](blocks.md#banners)
  - [CookieConsentBanner](blocks.md#cookie-consent-banner)
  - [ContactCard](blocks.md#contact-card)
  - [Error](blocks.md#error)
### Variants
#### Alert - **Success**
- **Id:** Success
- **Appearance:** Green color and success icon.
- **Behavior:** Indicates a successful action or event.
#### Alert - **Error**
- **Id:** Error
- **Appearance:** Red color and error icon.
- **Behavior:** Indicates an error or failure.
#### Alert - **Warning**
- **Id:** Warning
- **Appearance:** Yellow color and warning icon.
- **Behavior:** Indicates a warning or caution.
#### Alert - **Info**
- **Id:** Info
- **Appearance:** Blue color and info icon.
- **Behavior:** Provides informational message.
#### Alert - **Dismissible**
- **Id:** Dismissible
- **Appearance:** Includes a close button.
- **Behavior:** Can be dismissed by the user.

## Anchor Navigation
A navigation aid that links to and highlights sections within a page as the user scrolls.
- **Id:** AnchorNavigation
- **Appearance:** A vertical or horizontal list of links to page sections. Highlights the active section as user scrolls.
- **Behavior:** Clicking a link scrolls to the section. Updates highlight as user scrolls. Supports smooth scroll and offset.
- **Used in blocks:**
  - [AnchorNavigationBlock](blocks.md#anchor-navigation-block)
### Variants
#### Anchor Navigation - **Sticky section links**
- **Id:** StickySectionLinks
- **Appearance:** Sticky links.
- **Behavior:** Highlights active section.

## Avatar
A visual representation of a user or entity, typically shown as an image, initials, or icon.
- **Id:** Avatar
- **Appearance:** A circular or rounded image, initials, or icon representing a user. Can include a small status indicator (dot) or be grouped with other avatars.
- **Behavior:** Displays user image or fallback (initials/icon). Status indicator updates in real time. Grouped avatars overlap or are displayed in a row.
- **Used in blocks:**
  - [ActivityFeed](blocks.md#activity-feed)
  - [ArticleCards](blocks.md#article-cards)
  - [Comments](blocks.md#comments)
  - [Footers](blocks.md#footers)
  - [Headers](blocks.md#headers)
  - [Navbars](blocks.md#navbars)
  - [Sidebar](blocks.md#sidebar)
  - [TeamSection](blocks.md#team-section)
  - [Testimonials](blocks.md#testimonials)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
### Variants
#### Avatar - **Image**
- **Id:** Image
- **Appearance:** Displays a user image.
- **Behavior:** Shows the user's image.
#### Avatar - **Initials**
- **Id:** Initials
- **Appearance:** Displays user initials.
- **Behavior:** Shows the user's initials.
#### Avatar - **With status**
- **Id:** WithStatus
- **Appearance:** Includes a small status indicator.
- **Behavior:** Status indicator updates in real time.
#### Avatar - **Group**
- **Id:** Group
- **Appearance:** Displays multiple avatars in a group.
- **Behavior:** Grouped avatars overlap or are displayed in a row.

## Badge
A small indicator used to display status, count, or highlight information on another element.
- **Id:** Badge
- **Appearance:** A small, rounded or pill-shaped label. Can display a number, icon, or short text. Often colored to indicate status or category (e.g., red for error, green for success). May be attached to another element (e.g., avatar, button) or stand alone.
- **Behavior:** Static by default. If used as a notification badge, updates dynamically to reflect changes (e.g., unread count). Can be interactive if used as a filter or tag (clickable/removable).
- **Used in blocks:**
  - [Navbars](blocks.md#navbars)
  - [Stats](blocks.md#stats)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
### Variants
#### Badge - **Solid**
- **Id:** Solid
- **Appearance:** Solid color background.
- **Behavior:** Static display.
#### Badge - **Outline**
- **Id:** Outline
- **Appearance:** Outline border with transparent background.
- **Behavior:** Static display.
#### Badge - **Dot**
- **Id:** Dot
- **Appearance:** Small dot indicator.
- **Behavior:** Indicates status or notification.
#### Badge - **With icon**
- **Id:** WithIcon
- **Appearance:** Includes an icon.
- **Behavior:** Icon indicates status or category.
#### Badge - **With count**
- **Id:** WithCount
- **Appearance:** Displays a number.
- **Behavior:** Indicates count or quantity.

## Blockquote
A styled container for displaying quoted text or citations within content.
- **Id:** Blockquote
- **Appearance:** A visually distinct section for quoting text. Typically indented, with a vertical line or different background. May include citation or author below or beside the quote.
- **Behavior:** Static display. May support copy-to-clipboard or expandable/collapsible for long quotes.
- **Used in blocks:**
  - [BlockquoteSection](blocks.md#blockquote-section)
### Variants
#### Blockquote - **With author**
- **Id:** WithAuthor
- **Appearance:** Includes citation or author.
- **Behavior:** Displays author information.
#### Blockquote - **Simple**
- **Id:** Simple
- **Appearance:** Basic indented quote.
- **Behavior:** Static display.

## Breadcrumbs
A navigation aid that displays the user's current location within a site hierarchy.
- **Id:** Breadcrumbs
- **Appearance:** A horizontal list of links separated by chevrons or slashes, representing the user's navigation path. Each item is a clickable link except the last, which is the current page and styled as inactive.
- **Behavior:** Clicking a breadcrumb navigates to that page/section. Supports keyboard navigation. May collapse into a dropdown for long paths.
- **Used in blocks:**
  - [Headers](blocks.md#headers)
### Variants
#### Breadcrumbs - **Basic**
- **Id:** Basic
- **Appearance:** Simple horizontal list.
- **Behavior:** Static navigation.
#### Breadcrumbs - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons in each breadcrumb.
- **Behavior:** Icons indicate type or category.
#### Breadcrumbs - **Collapsible and Overflow**
- **Id:** CollapsibleAndOverflow
- **Appearance:** Collapses into a dropdown for long paths.
- **Behavior:** Supports long navigation paths.

## Button
A clickable element used to trigger actions, submit forms, or navigate.
- **Id:** Button
- **Appearance:** A rectangular or pill-shaped clickable element with text and/or icon. Visual style (color, border, shadow) changes based on variant and state (hover, active, disabled). May include loading spinner or icon.
- **Behavior:** Triggers an action when clicked or activated via keyboard. Supports disabled and loading states. May show focus ring for accessibility.
- **Used in blocks:**
  - [ActivityFeed](blocks.md#activity-feed)
  - [AppDownloadSection](blocks.md#app-download-section)
  - [ArticleCards](blocks.md#article-cards)
  - [Authentication](blocks.md#authentication)
  - [Banners](blocks.md#banners)
  - [CallToActionSection](blocks.md#call-to-action-section)
  - [Calendar](blocks.md#calendar)
  - [Carousels](blocks.md#carousels)
  - [Cart](blocks.md#cart)
  - [Checkout](blocks.md#checkout)
  - [Comments](blocks.md#comments)
  - [ContactCard](blocks.md#contact-card)
  - [CookieConsentBanner](blocks.md#cookie-consent-banner)
  - [DataTable](blocks.md#data-table)
  - [DragAndDrop](blocks.md#drag-and-drop)
  - [Error](blocks.md#error)
  - [FeaturesSection](blocks.md#features-section)
  - [Footers](blocks.md#footers)
  - [Headers](blocks.md#headers)
  - [Hero](blocks.md#hero)
  - [Navbars](blocks.md#navbars)
  - [OnboardingSteps](blocks.md#onboarding-steps)
  - [OrderHistory](blocks.md#order-history)
  - [PricingTable](blocks.md#pricing-table)
  - [ProductDetails](blocks.md#product-details)
  - [Sidebar](blocks.md#sidebar)
  - [SplitLayout](blocks.md#split-layout)
  - [Stats](blocks.md#stats)
  - [TeamSection](blocks.md#team-section)
  - [Testimonials](blocks.md#testimonials)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
  - [Wishlist](blocks.md#wishlist)
### Variants
#### Button - **Primary**
- **Id:** Primary
- **Appearance:** Solid color background.
- **Behavior:** Primary action button.
#### Button - **Secondary**
- **Id:** Secondary
- **Appearance:** Outline border.
- **Behavior:** Secondary action button.
#### Button - **Outline**
- **Id:** Outline
- **Appearance:** Outline border with transparent background.
- **Behavior:** Secondary action button.
#### Button - **Ghost**
- **Id:** Ghost
- **Appearance:** Transparent background with minimal styling.
- **Behavior:** Secondary action button.
#### Button - **Icon**
- **Id:** Icon
- **Appearance:** Icon only, no text.
- **Behavior:** Icon button.
#### Button - **Loading**
- **Id:** Loading
- **Appearance:** Includes loading spinner.
- **Behavior:** Indicates loading state.
#### Button - **Group**
- **Id:** Group
- **Appearance:** Group of buttons.
- **Behavior:** Grouped button actions.
#### Button - **Social login**
- **Id:** SocialLogin
- **Appearance:** Includes social media icon.
- **Behavior:** Social login button.

## Calendar
A visual grid for selecting dates, viewing months, or displaying scheduled events.
- **Id:** Calendar
- **Appearance:** A grid of days for a month or week, with headers for days of the week. May include navigation arrows, today highlight, and event markers. Selected date(s) are visually distinct.
- **Behavior:** Allows date selection (single, range, or multiple). Supports navigation between months/years. May display events or availability. Keyboard and mouse interaction supported.
- **Used in blocks:**
  - [Calendar](blocks.md#calendar)
### Variants
#### Calendar - **Month view**
- **Id:** MonthView
- **Appearance:** Displays a full month.
- **Behavior:** Month navigation.
#### Calendar - **Week view**
- **Id:** WeekView
- **Appearance:** Displays a week.
- **Behavior:** Week navigation.
#### Calendar - **With events**
- **Id:** WithEvents
- **Appearance:** Includes event markers.
- **Behavior:** Displays events or availability.

## Card
A container that groups related information, actions, or media in a visually distinct block.
- **Id:** Card
- **Appearance:** A rectangular container with optional shadow, border, or background. Can include image, title, description, actions, and footer. Used to group related content.
- **Behavior:** Static by default. May be clickable, expandable, or support hover effects. Can contain interactive elements (buttons, links).
- **Used in blocks:**
  - [ArticleCards](blocks.md#article-cards)
  - [Carousels](blocks.md#carousels)
  - [Comments](blocks.md#comments)
  - [FeaturesSection](blocks.md#features-section)
  - [ProductDetails](blocks.md#product-details)
  - [ResponsiveColumns](blocks.md#responsive-columns)
  - [Roadmap](blocks.md#roadmap)
  - [Stats](blocks.md#stats)
  - [TeamSection](blocks.md#team-section)
  - [Testimonials](blocks.md#testimonials)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
  - [Wishlist](blocks.md#wishlist)
### Variants
#### Card - **With image**
- **Id:** WithImage
- **Appearance:** Includes an image.
- **Behavior:** Displays image content.
#### Card - **With actions**
- **Id:** WithActions
- **Appearance:** Includes action buttons.
- **Behavior:** Supports interactive actions.
#### Card - **Simple**
- **Id:** Simple
- **Appearance:** Basic card.
- **Behavior:** Static display.

## Cascader
A multi-level dropdown for selecting options from hierarchical data.
- **Id:** Cascader
- **Appearance:** An input with a dropdown showing hierarchical options. Selecting a parent reveals child options in a new column or menu.
- **Behavior:** Clicking selects option and reveals next level. Supports keyboard navigation and search.
- **Used in blocks:**
  - [CascaderFilter](blocks.md#cascader-filter)
### Variants
#### Cascader - **Multi-level dropdown**
- **Id:** MultiLevelDropdown
- **Appearance:** Hierarchical options.
- **Behavior:** Displays multi-level options.

## Checkbox
A control that allows users to select one or more options from a set.
- **Id:** Checkbox
- **Appearance:** A small square box that can be checked or unchecked. May include a label and an optional indeterminate state (horizontal line). Checked state is indicated by a checkmark or filled box.
- **Behavior:** Clicking toggles between checked, unchecked, and (if supported) indeterminate. Supports keyboard navigation and focus. Can be disabled.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
### Variants
#### Checkbox - **Basic**
- **Id:** Basic
- **Appearance:** Simple checkbox.
- **Behavior:** Basic toggle.
#### Checkbox - **Indeterminate**
- **Id:** Indeterminate
- **Appearance:** Includes indeterminate state.
- **Behavior:** Supports indeterminate state.
#### Checkbox - **With label**
- **Id:** WithLabel
- **Appearance:** Includes a label.
- **Behavior:** Displays label text.

## Chips
Compact elements representing tags, selections, or actions, often removable or selectable.
- **Id:** Chips
- **Appearance:** Small, rounded rectangles with text and/or icon. Often used for tags, filters, or selections. May include a close (remove) icon.
- **Behavior:** Can be static or interactive (selectable, removable, or clickable). Supports keyboard navigation. May be used in groups for multi-select.
- **Used in blocks:**
  - [ArticleCards](blocks.md#article-cards)
### Variants
#### Chips - **Selectable**
- **Id:** Selectable
- **Appearance:** Selectable styling.
- **Behavior:** Can be selected.
#### Chips - **Removable**
- **Id:** Removable
- **Appearance:** Includes remove icon.
- **Behavior:** Can be removed.
#### Chips - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.

## Collapse
A container that can expand or collapse to show or hide its content.
- **Id:** Collapse
- **Appearance:** A container with a header and hidden or visible content. Header may include an icon indicating expanded/collapsed state. Content area animates open/closed.
- **Behavior:** Clicking the header toggles visibility of the content. Supports smooth transitions and keyboard navigation. Can be used standalone or in groups.
- **Used in blocks:**
  - [FAQ](blocks.md#faq)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
### Variants
#### Collapse - **Basic**
- **Id:** Basic
- **Appearance:** Simple collapse.
- **Behavior:** Basic toggle.
#### Collapse - **With animation**
- **Id:** WithAnimation
- **Appearance:** Includes animation.
- **Behavior:** Smooth transitions.
#### Collapse - **Panel**
- **Id:** Panel
- **Appearance:** Panel styling.
- **Behavior:** Panel toggle.
#### Collapse - **Nested panels**
- **Id:** NestedPanels
- **Appearance:** Nested panel styling.
- **Behavior:** Nested panel toggle.

## Color Input
An input field for selecting or entering color values, often with a color picker UI.
- **Id:** ColorInput
- **Appearance:** An input field with a color swatch. May include a color picker dialog, palette, or eyedropper tool. Shows selected color as background or border.
- **Behavior:** Clicking opens a color picker or palette. Selecting a color updates the value and swatch. May support manual hex/RGB input and validation.
- **Used in blocks:**
  - [ColorPickerSection](blocks.md#color-picker-section)
### Variants
#### Color Input - **Color picker**
- **Id:** ColorPicker
- **Appearance:** Includes color picker dialog.
- **Behavior:** Opens color picker.
#### Color Input - **Swatch**
- **Id:** Swatch
- **Appearance:** Displays color swatch.
- **Behavior:** Shows selected color.
#### Color Input - **EyeDropper**
- **Id:** EyeDropper
- **Appearance:** Includes eyedropper tool.
- **Behavior:** Selects color from screen.
#### Color Input - **Palette**
- **Id:** Palette
- **Appearance:** Includes color palette.
- **Behavior:** Selects color from palette.

## Combobox
A component that combines an input field with a dropdown list of options that filters as the user types.
- **Id:** Combobox
- **Appearance:** An input field with a dropdown list of options that filters as the user types. May include clear button, icons, and tags for multi-select. Dropdown appears below input and highlights matching text.
- **Behavior:** Typing filters options. Selecting an option adds it to the input (single or multiple). Supports keyboard navigation, option creation, and async loading.
- **Used in blocks:**
  - [ComboboxFilter](blocks.md#combobox-filter)
### Variants
#### Combobox - **Autocomplete**
- **Id:** Autocomplete
- **Appearance:** Filters options as user types.
- **Behavior:** Autocompletes input.
#### Combobox - **Multiselect**
- **Id:** Multiselect
- **Appearance:** Supports multiple selections.
- **Behavior:** Allows multiple selections.
#### Combobox - **Creatable**
- **Id:** Creatable
- **Appearance:** Allows option creation.
- **Behavior:** Creates new options.
#### Combobox - **Tags input**
- **Id:** TagsInput
- **Appearance:** Displays tags.
- **Behavior:** Adds tags to input.
#### Combobox - **Typeahead**
- **Id:** Typeahead
- **Appearance:** Filters options as user types.
- **Behavior:** Typeahead input.

## Command
A modal or dropdown for searching and executing actions or commands quickly.
- **Id:** Command
- **Appearance:** A modal or dropdown with a search input and a list of actions or commands. Each item may include an icon, description, and keyboard shortcut.
- **Behavior:** Opens with a shortcut or button. Typing filters commands. Selecting an item triggers its action. Supports keyboard navigation and grouping.
- **Used in blocks:**
  - [GlobalCommandPalette](blocks.md#global-command-palette)
### Variants
#### Command - **Command palette**
- **Id:** CommandPalette
- **Appearance:** Displays command palette.
- **Behavior:** Filters commands.
#### Command - **Searchable actions**
- **Id:** SearchableActions
- **Appearance:** Displays searchable actions.
- **Behavior:** Searches actions.
#### Command - **Command menu**
- **Id:** CommandMenu
- **Appearance:** Displays command menu.
- **Behavior:** Filters commands.

## Context Menu
A menu that appears on right-click or long-press, offering context-specific actions.
- **Id:** ContextMenu
- **Appearance:** A floating menu that appears on right-click or long-press. Contains a vertical list of actions, each with optional icon and shortcut.
- **Behavior:** Opens at cursor position. Selecting an item triggers its action. Supports nested submenus and keyboard navigation.
- **Used in blocks:**
  - [FileActionsContextMenu](blocks.md#file-actions-context-menu)
### Variants
#### Context Menu - **Right-click menu**
- **Id:** RightClickMenu
- **Appearance:** Opens on right-click.
- **Behavior:** Displays context menu.
#### Context Menu - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Context Menu - **With actions**
- **Id:** WithActions
- **Appearance:** Includes actions.
- **Behavior:** Displays action items.

## Countdown
A timer that counts down to a specific time or event, often used for deadlines or launches.
- **Id:** Countdown
- **Appearance:** A numeric or digital timer showing time remaining. May include labels for days, hours, minutes, seconds.
- **Behavior:** Counts down in real time. Triggers event or changes appearance when complete.
- **Used in blocks:**
  - [CountdownTimerBlock](blocks.md#countdown-timer-block)
### Variants
#### Countdown - **Timer**
- **Id:** Timer
- **Appearance:** Digital timer.
- **Behavior:** Counts down time.

## Data Table
A component for displaying and interacting with tabular data in rows and columns.
- **Id:** DataTable
- **Appearance:** A table with rows and columns, headers, and optional borders or stripes. May include sorting icons, filters, pagination controls, and action buttons.
- **Behavior:** Displays tabular data. Supports sorting, filtering, pagination, row selection, and inline actions. Columns may be resizable or reorderable.
- **Used in blocks:**
  - [DataTable](blocks.md#data-table)
### Variants
#### Data Table - **Basic**
- **Id:** Basic
- **Appearance:** Simple table.
- **Behavior:** Basic table display.
#### Data Table - **Filtering**
- **Id:** Filtering
- **Appearance:** Includes filter controls.
- **Behavior:** Filters table data.
#### Data Table - **Sorting**
- **Id:** Sorting
- **Appearance:** Includes sorting icons.
- **Behavior:** Sorts table data.
#### Data Table - **Pagination**
- **Id:** Pagination
- **Appearance:** Includes pagination controls.
- **Behavior:** Paginates table data.
#### Data Table - **Row selection**
- **Id:** RowSelection
- **Appearance:** Supports row selection.
- **Behavior:** Selects table rows.
#### Data Table - **With actions**
- **Id:** WithActions
- **Appearance:** Includes action buttons.
- **Behavior:** Supports inline actions.
#### Data Table - **Sortable**
- **Id:** Sortable
- **Appearance:** Supports column sorting.
- **Behavior:** Sorts table columns.
#### Data Table - **Advanced table**
- **Id:** AdvancedTable
- **Appearance:** Advanced table features.
- **Behavior:** Supports advanced table interactions.

## Date Picker
A calendar input for selecting a single date.
- **Id:** DatePicker
- **Appearance:** An input field with a calendar popup for picking a date.
- **Behavior:** Clicking input opens calendar. Selecting a date updates the value.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
### Variants
#### Date Picker - **Basic**
- **Id:** Basic
- **Appearance:** Standard date picker.
- **Behavior:** Selects a single date.

## Date Range Picker
An input for selecting a range of dates.
- **Id:** DateRangePicker
- **Appearance:** An input field with a calendar popup for picking a start and end date.
- **Behavior:** Clicking input opens calendar. Selecting two dates sets the range.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
### Variants
#### Date Range Picker - **Basic**
- **Id:** Basic
- **Appearance:** Standard date range picker.
- **Behavior:** Selects a date range.

## Dialog
A popup overlay that displays content or actions requiring user attention.
- **Id:** Dialog
- **Appearance:** A centered overlay with a box containing title, content, and actions. Background is dimmed. May include close button and icon.
- **Behavior:** Opens in response to user action. Can be closed by button, overlay click, or escape key. Traps focus and disables background interaction.
- **Used in blocks:**
  - [DialogModalBlock](blocks.md#dialog-modal-block)
### Variants
#### Dialog - **Centered**
- **Id:** Centered
- **Appearance:** Centered overlay.
- **Behavior:** Centered modal.
#### Dialog - **Fullscreen**
- **Id:** Fullscreen
- **Appearance:** Fullscreen overlay.
- **Behavior:** Fullscreen modal.
#### Dialog - **With form**
- **Id:** WithForm
- **Appearance:** Includes form elements.
- **Behavior:** Supports form submission.
#### Dialog - **Nested dialogs**
- **Id:** NestedDialogs
- **Appearance:** Supports nested dialogs.
- **Behavior:** Nested modal interactions.

## Divider
A visual line or space used to separate content into distinct sections.
- **Id:** Divider
- **Appearance:** A thin horizontal or vertical line, sometimes with text or icon in the center. Used to separate content.
- **Behavior:** Static visual separator. May be interactive if used as a drag handle.
- **Used in blocks:**
  - [Section](blocks.md#section)
### Variants
#### Divider - **Horizontal**
- **Id:** Horizontal
- **Appearance:** Horizontal line.
- **Behavior:** Static separator.
#### Divider - **Vertical**
- **Id:** Vertical
- **Appearance:** Vertical line.
- **Behavior:** Static separator.

## Drawer
A panel that slides in from the edge of the screen to display additional content or actions.
- **Id:** Drawer
- **Appearance:** A panel that slides in from the edge of the screen, overlaying content. Contains title, content, and actions. May include close button.
- **Behavior:** Opens in response to user action. Can be closed by button, overlay click, or escape key. Traps focus and disables background interaction.
- **Used in blocks:**
  - [MobileNavigationDrawer](blocks.md#mobile-navigation-drawer)
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

## Dropzone
A component for uploading files via drag-and-drop or file selection.
- **Id:** Dropzone
- **Appearance:** A bordered area with an icon and prompt text. Shows file previews or list of uploaded files. May include progress bars and remove buttons.
- **Behavior:** Dragging files over highlights the area. Dropping or selecting files uploads them. Supports multiple files, file type restrictions, and progress display.
- **Used in blocks:**
  - [DragAndDrop](blocks.md#drag-and-drop)
### Variants
#### Dropzone - **Single file**
- **Id:** SingleFile
- **Appearance:** Supports single file upload.
- **Behavior:** Uploads single file.
#### Dropzone - **Multiple files**
- **Id:** MultipleFiles
- **Appearance:** Supports multiple file uploads.
- **Behavior:** Uploads multiple files.
#### Dropzone - **With preview**
- **Id:** WithPreview
- **Appearance:** Includes file previews.
- **Behavior:** Displays file previews.
#### Dropzone - **With file type restrictions**
- **Id:** WithFileTypeRestrictions
- **Appearance:** Restricts file types.
- **Behavior:** Validates file types.
#### Dropzone - **With upload progress**
- **Id:** WithUploadProgress
- **Appearance:** Includes progress bars.
- **Behavior:** Displays upload progress.
#### Dropzone - **Drag-and-drop**
- **Id:** DragAndDrop
- **Appearance:** Supports drag-and-drop.
- **Behavior:** Drag-and-drop file upload.

## File Input
An input field for selecting one or more files from the user's device.
- **Id:** FileInput
- **Appearance:** An input field with a button to select files. May show selected file name(s) and a clear button.
- **Behavior:** Clicking button opens file picker. Selecting files updates the value. Supports multiple files and file type restrictions.
- **Used in blocks:**
  - [FileUploadBlock](blocks.md#file-upload-block)
### Variants
#### File Input - **Single file**
- **Id:** SingleFile
- **Appearance:** Supports single file selection.
- **Behavior:** Selects single file.
#### File Input - **Multiple files**
- **Id:** MultipleFiles
- **Appearance:** Supports multiple file selection.
- **Behavior:** Selects multiple files.
#### File Input - **File preview**
- **Id:** FilePreview
- **Appearance:** Includes file previews.
- **Behavior:** Displays file previews.

## Form Error Message
A message or indicator that displays validation errors or feedback for form fields.
- **Id:** FormErrorMessage
- **Appearance:** A small text message below or beside a form field, often colored red or with an error icon.
- **Behavior:** Appears when validation fails. May disappear on correction or after a timeout. Supports accessibility roles.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
  - [Checkout](blocks.md#checkout)
  - [OnboardingSteps](blocks.md#onboarding-steps)
### Variants
#### Form Error Message - **Inline error**
- **Id:** InlineError
- **Appearance:** Inline error message.
- **Behavior:** Displays inline error.
#### Form Error Message - **Tooltip error**
- **Id:** TooltipError
- **Appearance:** Tooltip error message.
- **Behavior:** Displays tooltip error.

## Hover Card
A floating card that appears when hovering over an element, showing additional information or actions.
- **Id:** HoverCard
- **Appearance:** A floating card that appears when hovering over a target element. Contains text, image, or actions. May have an arrow pointing to the target.
- **Behavior:** Appears on hover or focus. Disappears on mouse leave or blur. Supports delay and interactive content.
- **Used in blocks:**
  - [HoverCardBlock](blocks.md#hover-card-block)
### Variants
#### Hover Card - **Appears on hover**
- **Id:** AppearsOnHover
- **Appearance:** Appears on hover.
- **Behavior:** Displays hover card.
#### Hover Card - **With actions**
- **Id:** WithActions
- **Appearance:** Includes actions.
- **Behavior:** Supports interactive actions.

## Image
A component for displaying images with optional styling, captions, or overlays.
- **Id:** Image
- **Appearance:** Displays an image with optional border, shadow, or rounded corners. May include caption or overlay.
- **Behavior:** Static by default. May support zoom, lazy loading, or click to enlarge. Responsive to container size.
- **Used in blocks:**
  - [ArticleCards](blocks.md#article-cards)
  - [Carousels](blocks.md#carousels)
  - [FeaturesSection](blocks.md#features-section)
  - [Hero](blocks.md#hero)
  - [MegaMenu](blocks.md#mega-menu)
  - [ProductDetails](blocks.md#product-details)
  - [SplitLayout](blocks.md#split-layout)
  - [Testimonials](blocks.md#testimonials)
### Variants
#### Image - **Responsive**
- **Id:** Responsive
- **Appearance:** Responsive design.
- **Behavior:** Adjusts to container size.
#### Image - **With caption**
- **Id:** WithCaption
- **Appearance:** Includes caption.
- **Behavior:** Displays caption text.
#### Image - **Gallery**
- **Id:** Gallery
- **Appearance:** Grid or carousel layout.
- **Behavior:** Displays image gallery.

## Input
A field for entering and editing a single line of text or data.
- **Id:** Input
- **Appearance:** A rectangular or pill-shaped text field with optional label, icon, or button. Shows placeholder text when empty.
- **Behavior:** Accepts user text input. Supports focus, disabled, and error states. May include clear or reveal button.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
  - [Cart](blocks.md#cart)
  - [Checkout](blocks.md#checkout)
  - [Comments](blocks.md#comments)
  - [ContactCard](blocks.md#contact-card)
  - [DataTable](blocks.md#data-table)
  - [FAQ](blocks.md#faq)
  - [OnboardingSteps](blocks.md#onboarding-steps)
### Variants
#### Input - **Basic**
- **Id:** Basic
- **Appearance:** Simple input field.
- **Behavior:** Basic text input.
#### Input - **With icon**
- **Id:** WithIcon
- **Appearance:** Includes icon.
- **Behavior:** Displays icon content.
#### Input - **With button**
- **Id:** WithButton
- **Appearance:** Includes button.
- **Behavior:** Supports button actions.

## Input Group
A combination of input fields and add-ons grouped together for related data entry.
- **Id:** InputGroup
- **Appearance:** A combination of input fields and buttons/icons grouped together in a single row. May include add-ons before or after the input.
- **Behavior:** All elements are visually and functionally grouped. Supports focus, disabled, and error states.
- **Used in blocks:**
  - [InputGroupBlock](blocks.md#input-group-block)
### Variants
#### Input Group - **Input with button**
- **Id:** InputWithButton
- **Appearance:** Includes button.
- **Behavior:** Supports button actions.
#### Input Group - **Input with icon**
- **Id:** InputWithIcon
- **Appearance:** Includes icon.
- **Behavior:** Displays icon content.

## Keyboard Key
A component for displaying keyboard input or shortcuts in documentation or UI hints.
- **Id:** KeyboardKey
- **Appearance:** Inline element styled to look like a keyboard key or combination (e.g., Ctrl, Cmd+C). Typically uses a monospace font, border, and subtle background.
- **Behavior:** Static display. Used for documentation, tooltips, or UI hints to indicate keyboard shortcuts or keys to press.
- **Used in blocks:**
  - [KeyboardShortcutsHelp](blocks.md#keyboard-shortcuts-help)
### Variants
#### Keyboard Key - **Single key**
- **Id:** SingleKey
- **Appearance:** Displays a single key (e.g., "Esc").
- **Behavior:** Static display.
#### Keyboard Key - **Key combination**
- **Id:** KeyCombination
- **Appearance:** Displays a combination of keys (e.g., "Ctrl + S").
- **Behavior:** Static display.

## List
A vertical or horizontal arrangement of items, often with icons, avatars, or actions.
- **Id:** List
- **Appearance:** A vertical stack of items, each with text and optional icon or avatar. May be ordered (numbered) or unordered (bulleted).
- **Behavior:** Static or interactive (clickable, selectable, or reorderable). Supports keyboard navigation and nested lists.
- **Used in blocks:**
  - [ActivityFeed](blocks.md#activity-feed)
  - [ArticleCards](blocks.md#article-cards)
  - [Cart](blocks.md#cart)
  - [Comments](blocks.md#comments)
  - [DragAndDrop](blocks.md#drag-and-drop)
  - [FeaturesSection](blocks.md#features-section)
  - [ResponsiveColumns](blocks.md#responsive-columns)
  - [Sidebar](blocks.md#sidebar)
  - [TableOfContents](blocks.md#table-of-contents)
  - [TeamSection](blocks.md#team-section)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
### Variants
#### List - **Ordered**
- **Id:** Ordered
- **Appearance:** Numbered list.
- **Behavior:** Ordered list items.
#### List - **Unordered**
- **Id:** Unordered
- **Appearance:** Bulleted list.
- **Behavior:** Unordered list items.
#### List - **Description**
- **Id:** Description
- **Appearance:** Description list.
- **Behavior:** Displays descriptions.
#### List - **With actions**
- **Id:** WithActions
- **Appearance:** Includes actions.
- **Behavior:** Supports interactive actions.
#### List - **With avatars**
- **Id:** WithAvatars
- **Appearance:** Includes avatars.
- **Behavior:** Displays avatar content.

## Loading
A visual indicator that content is loading or a process is in progress.
- **Id:** Loading
- **Appearance:** Spinner (rotating icon), skeleton (gray placeholder shapes), or overlay (dimmed background with loader). Indicates loading state.
- **Behavior:** Appears while content is loading. Disappears when loading completes. May block interaction (overlay) or show progress.
- **Used in blocks:**
  - [PageLoaderOverlay](blocks.md#page-loader-overlay)
### Variants
#### Loading - **Spinner**
- **Id:** Spinner
- **Appearance:** Rotating icon.
- **Behavior:** Indicates loading state.
#### Loading - **Overlay**
- **Id:** Overlay
- **Appearance:** Dimmed background.
- **Behavior:** Blocks interaction.
#### Loading - **Skeleton**
- **Id:** Skeleton
- **Appearance:** Gray placeholder shapes.
- **Behavior:** Indicates loading state.

## Map
A component for selecting or displaying a geographic location on an interactive map.
- **Id:** MapLocationPicker
- **Appearance:** An interactive map with a marker or pin. May include search input, zoom controls, and address display.
- **Behavior:** User can move marker, search for location, or click map to select. Updates value and may show address or coordinates.
- **Used in blocks:**
  - [ContactCard](blocks.md#contact-card)
### Variants
#### Map - **Basic**
- **Id:** Basic
- **Appearance:** Simple map.
- **Behavior:** Basic map interaction.
#### Map - **With search**
- **Id:** WithSearch
- **Appearance:** Includes search input.
- **Behavior:** Searches location.

## Menubar
A horizontal or vertical bar containing navigation menus and actions.
- **Id:** Menubar
- **Appearance:** A horizontal bar with menu items, each optionally with an icon or dropdown. May be styled as tabs or buttons.
- **Behavior:** Clicking or hovering opens dropdowns. Supports keyboard navigation and active state indication.
- **Used in blocks:**
  - [MenubarBlock](blocks.md#menubar-block)
### Variants
#### Menubar - **Horizontal menu**
- **Id:** HorizontalMenu
- **Appearance:** Horizontal layout.
- **Behavior:** Displays horizontal menu.
#### Menubar - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Menubar - **With dropdowns**
- **Id:** WithDropdowns
- **Appearance:** Includes dropdowns.
- **Behavior:** Displays dropdown menus.

## Notification
A temporary message that appears to inform the user of an event or status.
- **Id:** NotificationToastSnackbar
- **Appearance:** A small box that appears temporarily, usually at the corner or bottom of the screen. Shows message, icon, and optional action button.
- **Behavior:** Appears in response to events. Auto-dismisses after timeout or can be dismissed manually. Supports stacking and different types (success, error, etc.).
- **Used in blocks:**
  - [NotificationCenterBlock](blocks.md#notification-center-block)
### Variants
#### Notification - **Success**
- **Id:** Success
- **Appearance:** Green color and success icon.
- **Behavior:** Indicates a successful action or event.
#### Notification - **Error**
- **Id:** Error
- **Appearance:** Red color and error icon.
- **Behavior:** Indicates an error or failure.
#### Notification - **Info**
- **Id:** Info
- **Appearance:** Blue color and info icon.
- **Behavior:** Provides informational message.
#### Notification - **Warning**
- **Id:** Warning
- **Appearance:** Yellow color and warning icon.
- **Behavior:** Indicates a warning or caution.
#### Notification - **Custom icon**
- **Id:** CustomIcon
- **Appearance:** Includes custom icon.
- **Behavior:** Displays custom icon.
#### Notification - **With actions**
- **Id:** WithActions
- **Appearance:** Includes action button.
- **Behavior:** Supports interactive actions.
#### Notification - **Temporary (snackbar)**
- **Id:** Temporary
- **Appearance:** Temporary display.
- **Behavior:** Auto-dismisses after timeout.
#### Notification - **Stacking**
- **Id:** Stacking
- **Appearance:** Supports stacking.
- **Behavior:** Stacks notifications.
#### Notification - **Bottom position**
- **Id:** BottomPosition
- **Appearance:** Displays at bottom.
- **Behavior:** Bottom position display.

## Number Input
An input field for entering numeric values, often with increment/decrement controls.
- **Id:** NumberInput
- **Appearance:** An input field for numbers, often with up/down arrow buttons. May show min/max and step values.
- **Behavior:** Accepts numeric input. Arrow buttons increment/decrement value. Supports validation, min/max, and disabled state.
- **Used in blocks:**
  - [NumberInputBlock](blocks.md#number-input-block)
### Variants
#### Number Input - **With controls**
- **Id:** WithControls
- **Appearance:** Includes up/down arrow buttons.
- **Behavior:** Adjusts value with controls.
#### Number Input - **Without controls**
- **Id:** WithoutControls
- **Appearance:** No arrow buttons.
- **Behavior:** Adjusts value without controls.

## Pagination
A navigation control for dividing content into discrete pages and moving between them.
- **Id:** Pagination
- **Appearance:** A horizontal row of page numbers, arrows, and optional jump or page size controls. Current page is highlighted.
- **Behavior:** Clicking a number or arrow navigates to that page. Supports keyboard navigation and dynamic page range.
- **Used in blocks:**
  - [DataTable](blocks.md#data-table)
### Variants
#### Pagination - **Simple**
- **Id:** Simple
- **Appearance:** Simple pagination.
- **Behavior:** Basic page navigation.
#### Pagination - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Pagination - **Jump to page**
- **Id:** JumpToPage
- **Appearance:** Includes jump controls.
- **Behavior:** Jumps to specific page.
#### Pagination - **Page size selector**
- **Id:** PageSizeSelector
- **Appearance:** Includes page size controls.
- **Behavior:** Selects page size.

## Password Input
A text input that hides entered characters, used for sensitive information like passwords.
- **Id:** PasswordInput
- **Appearance:** An input field with obscured text (dots or asterisks). Includes a button to toggle visibility.
- **Behavior:** Accepts password input. Toggle button reveals/hides text. Supports validation and error state.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
### Variants
#### Password Input - **With visibility toggle**
- **Id:** WithVisibilityToggle
- **Appearance:** Includes visibility toggle button.
- **Behavior:** Toggles password visibility.

## Pin Input
A set of input fields for entering a fixed-length code, such as a PIN or verification code.
- **Id:** PinInput
- **Appearance:** A row of small input boxes for entering a fixed-length numeric or alphanumeric code.
- **Behavior:** Typing moves focus to next box. Supports paste, backspace, and validation. May mask input for security.
- **Used in blocks:**
  - [TwoFactorAuthentication](blocks.md#two-factor-authentication)
### Variants
#### Pin Input - **4-digit**
- **Id:** FourDigit
- **Appearance:** Four input boxes.
- **Behavior:** Accepts 4-digit code.
#### Pin Input - **6-digit**
- **Id:** SixDigit
- **Appearance:** Six input boxes.
- **Behavior:** Accepts 6-digit code.

## Popconfirm
A confirmation popup that asks the user to verify an action before proceeding.
- **Id:** Popconfirm
- **Appearance:** A small popup with a message and confirm/cancel buttons. Appears near the triggering element.
- **Behavior:** Appears on action (e.g., delete). Confirms or cancels the action. Disappears on selection or outside click.
- **Used in blocks:**
  - [PopconfirmBlock](blocks.md#popconfirm-block)
### Variants
#### Popconfirm - **Confirmation popover**
- **Id:** ConfirmationPopover
- **Appearance:** Confirmation message.
- **Behavior:** Confirms or cancels action.

## Popover
A floating panel anchored to a trigger element, used for displaying additional content or actions.
- **Id:** Popover
- **Appearance:** A floating panel anchored to a trigger element. Contains content, actions, or forms. May have an arrow pointing to the trigger.
- **Behavior:** Opens on click, hover, or focus. Closes on outside click or escape. Supports interactive content and keyboard navigation.
- **Used in blocks:**
  - [UserProfilePopover](blocks.md#user-profile-popover)
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

## Progress
A visual indicator of task completion or ongoing activity, such as a bar or spinner.
- **Id:** Progress
- **Appearance:** A horizontal bar or circular indicator showing completion percentage. May include label or value.
- **Behavior:** Fills or animates to indicate progress. Can be determinate (fixed value) or indeterminate (loading).
- **Used in blocks:**
  - [Stats](blocks.md#stats)
### Variants
#### Progress - **Linear**
- **Id:** Linear
- **Appearance:** Horizontal bar.
- **Behavior:** Indicates linear progress.
#### Progress - **Circular (progress circle, indeterminate)**
- **Id:** Circular
- **Appearance:** Circular indicator.
- **Behavior:** Indicates circular progress.

## QR Code
A component for generating and displaying QR codes that encode data for scanning.
- **Id:** QRCode
- **Appearance:** A square grid of black and white modules encoding data. May include a label or logo in the center.
- **Behavior:** Static image or canvas. Scannable by devices. Updates when data changes.
- **Used in blocks:**
  - [AppDownloadSection](blocks.md#app-download-section)
### Variants
#### QR Code - **Display QR codes**
- **Id:** DisplayQRCodes
- **Appearance:** Displays QR codes.
- **Behavior:** Scannable QR codes.

## Radio
A control for selecting a single option from a set of mutually exclusive choices.
- **Id:** Radio
- **Appearance:** A small circular button with a label. Selected state is indicated by a filled dot. Used in groups for single selection.
- **Behavior:** Clicking selects the radio and deselects others in the group. Supports keyboard navigation and disabled state.
- **Used in blocks:**
  - [RadioGroupBlock](blocks.md#radio-group-block)
### Variants
#### Radio - **Basic**
- **Id:** Basic
- **Appearance:** Simple radio button.
- **Behavior:** Basic selection.
#### Radio - **With label**
- **Id:** WithLabel
- **Appearance:** Includes label.
- **Behavior:** Displays label text.

## Rating
A control for displaying or collecting user ratings, typically with stars or icons.
- **Id:** Rating
- **Appearance:** A row of stars or custom icons, filled to indicate value. May show numeric value or label.
- **Behavior:** Clicking or hovering sets the rating. Supports read-only and interactive modes. May allow half or custom increments.
- **Used in blocks:**
  - [ProductReview](blocks.md#product-review)
### Variants
#### Rating - **Stars**
- **Id:** Stars
- **Appearance:** Star icons.
- **Behavior:** Indicates rating with stars.
#### Rating - **Custom icons**
- **Id:** CustomIcons
- **Appearance:** Custom icons.
- **Behavior:** Indicates rating with custom icons.
#### Rating - **Read-only**
- **Id:** ReadOnly
- **Appearance:** Read-only display.
- **Behavior:** Static rating display.

## Resizable Panel
A container that can be resized by the user, often via a drag handle or border.
- **Id:** ResizablePanel
- **Appearance:** A container with a visible drag handle or border. Can be horizontal or vertical.
- **Behavior:** User drags handle to resize panel. Supports min/max size and snapping. May animate resize.
- **Used in blocks:**
  - [ResizablePanelBlock](blocks.md#resizable-panel-block)
### Variants
#### Resizable Panel - **Horizontal**
- **Id:** Horizontal
- **Appearance:** Horizontal layout.
- **Behavior:** Resizes horizontally.
#### Resizable Panel - **Vertical**
- **Id:** Vertical
- **Appearance:** Vertical layout.
- **Behavior:** Resizes vertically.
#### Resizable Panel - **With content**
- **Id:** WithContent
- **Appearance:** Includes content.
- **Behavior:** Displays panel content.

## Rich Text Editor
A text input area with formatting controls for creating styled content.
- **Id:** RichTextEditor
- **Appearance:** A text input area with a toolbar for formatting (bold, italic, lists, etc.). Shows styled content as user types.
- **Behavior:** User applies formatting via toolbar or shortcuts. Supports undo/redo, links, images, and HTML output.
- **Used in blocks:**
  - [BlogPostEditor](blocks.md#blog-post-editor)
### Variants
#### Rich Text Editor - **Toolbar options (bold, italic, underline, etc.)**
- **Id:** ToolbarOptions
- **Appearance:** Includes formatting toolbar.
- **Behavior:** Supports text formatting.

## Scroll Area
A container with custom scrollbars for overflowing content.
- **Id:** ScrollArea
- **Appearance:** A container with custom scrollbars. May show only when needed or always visible.
- **Behavior:** Scrolls content horizontally or vertically. Supports keyboard and mouse interaction. May auto-scroll or snap.
- **Used in blocks:**
  - [ScrollAreaBlock](blocks.md#scroll-area-block)
### Variants
#### Scroll Area - **Custom scrollbars**
- **Id:** CustomScrollbars
- **Appearance:** Custom scrollbar design.
- **Behavior:** Custom scroll interaction.
#### Scroll Area - **Scrollable content**
- **Id:** ScrollableContent
- **Appearance:** Scrollable container.
- **Behavior:** Scrolls content.

## Scrollspy
A navigation aid that highlights links based on the user's scroll position in the page.
- **Id:** Scrollspy
- **Appearance:** A vertical or horizontal list of links. Highlights the link corresponding to the visible section.
- **Behavior:** Updates highlight as user scrolls. Clicking a link scrolls to the section. Supports smooth scroll and active state.
- **Used in blocks:**
  - [ScrollspyNavigationBlock](blocks.md#scrollspy-navigation-block)
### Variants
#### Scrollspy - **Navigation highlights on scroll**
- **Id:** NavigationHighlights
- **Appearance:** Highlights active link.
- **Behavior:** Updates highlight on scroll.

## Searchbox
A modal or dropdown for searching content or navigating quickly within an app.
- **Id:** Searchbox
- **Appearance:** A modal or dropdown with a search input and list of results. May include icons, categories, and keyboard shortcuts.
- **Behavior:** Opens with shortcut or button. Typing filters results. Selecting an item triggers navigation or action.
- **Used in blocks:**
  - [Headers](blocks.md#headers)
  - [Navbars](blocks.md#navbars)
### Variants
#### Searchbox - **Command palette**
- **Id:** CommandPalette
- **Appearance:** Displays command palette.
- **Behavior:** Filters commands.
#### Searchbox - **Searchable**
- **Id:** Searchable
- **Appearance:** Search input.
- **Behavior:** Filters search results.

## Select
A dropdown input for choosing one or more options from a list.
- **Id:** Select
- **Appearance:** An input field with a dropdown arrow. Clicking shows a list of options. Selected option is shown in the field.
- **Behavior:** Clicking opens dropdown. Selecting an option updates the value. Supports keyboard navigation, search, and multi-select.
- **Used in blocks:**
  - [SelectFilterBlock](blocks.md#select-filter-block)
### Variants
#### Select - **Basic**
- **Id:** Basic
- **Appearance:** Simple select field.
- **Behavior:** Basic dropdown.
#### Select - **Multi-select**
- **Id:** MultiSelect
- **Appearance:** Supports multiple selections.
- **Behavior:** Allows multiple selections.
#### Select - **With search**
- **Id:** WithSearch
- **Appearance:** Includes search input.
- **Behavior:** Searches options.

## Slider
A control for selecting a value or range by sliding a handle along a track.
- **Id:** Slider
- **Appearance:** A horizontal or vertical track with a draggable thumb. May show value, min/max labels, and ticks.
- **Behavior:** Dragging the thumb or clicking the track changes the value. Supports keyboard navigation, range selection, and disabled state.
- **Used in blocks:**
  - [SliderInputBlock](blocks.md#slider-input-block)
### Variants
#### Slider - **Single value**
- **Id:** SingleValue
- **Appearance:** Single value slider.
- **Behavior:** Adjusts single value.
#### Slider - **Range**
- **Id:** Range
- **Appearance:** Range slider.
- **Behavior:** Adjusts range of values.

## Statistic
A component for displaying key metrics, numbers, or trends in a visually prominent way.
- **Id:** Statistic
- **Appearance:** A number with label, icon, or trend indicator. May be displayed in a card or grid.
- **Behavior:** Updates dynamically to reflect data changes. May animate value changes.
- **Used in blocks:**
  - [Stats](blocks.md#stats)
### Variants
#### Statistic - **Number with label**
- **Id:** NumberWithLabel
- **Appearance:** Includes label.
- **Behavior:** Displays number with label.
#### Statistic - **Trend**
- **Id:** Trend
- **Appearance:** Includes trend indicator.
- **Behavior:** Displays trend data.
#### Statistic - **Icon**
- **Id:** Icon
- **Appearance:** Includes icon.
- **Behavior:** Displays icon content.

## Stepper
A sequence of steps or stages, often used for multi-step forms or processes.
- **Id:** Stepper
- **Appearance:** A horizontal or vertical sequence of steps, each with a label and icon. Current step is highlighted.
- **Behavior:** Clicking a step navigates to it. Supports linear or non-linear progression, validation, and completion state.
- **Used in blocks:**
  - [OnboardingSteps](blocks.md#onboarding-steps)
### Variants
#### Stepper - **Horizontal**
- **Id:** Horizontal
- **Appearance:** Horizontal layout.
- **Behavior:** Displays horizontal steps.
#### Stepper - **Vertical**
- **Id:** Vertical
- **Appearance:** Vertical layout.
- **Behavior:** Displays vertical steps.
#### Stepper - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Stepper - **With progress**
- **Id:** WithProgress
- **Appearance:** Includes progress indicator.
- **Behavior:** Displays step progress.

## Switch
A toggle control for switching between two states, such as on/off or enabled/disabled.
- **Id:** Switch
- **Appearance:** A toggle switch with a sliding thumb. May include labels or icons for on/off states.
- **Behavior:** Clicking or dragging toggles state. Supports keyboard navigation and disabled state. May animate thumb.
- **Used in blocks:**
  - [SwitchToggleBlock](blocks.md#switch-toggle-block)
### Variants
#### Switch - **With label**
- **Id:** WithLabel
- **Appearance:** Includes label.
- **Behavior:** Displays label text.
#### Switch - **Without label**
- **Id:** WithoutLabel
- **Appearance:** No label.
- **Behavior:** Basic toggle switch.
#### Switch - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.

## Tabs
A set of tabbed buttons for switching between different views or content sections.
- **Id:** Tabs
- **Appearance:** A row or column of tab buttons with an active indicator. Each tab displays different content.
- **Behavior:** Clicking a tab shows its content. Supports keyboard navigation, icons, and orientation.
- **Used in blocks:**
  - [SettingsTabs](blocks.md#settings-tabs)
### Variants
#### Tabs - **Horizontal**
- **Id:** Horizontal
- **Appearance:** Horizontal layout.
- **Behavior:** Displays horizontal tabs.
#### Tabs - **Vertical**
- **Id:** Vertical
- **Appearance:** Vertical layout.
- **Behavior:** Displays vertical tabs.
#### Tabs - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.

## Tag Input
An input field for entering and managing tags, often displayed as removable chips.
- **Id:** TagInput
- **Appearance:** An input field with tags displayed as chips. May include add/remove buttons and suggestions dropdown.
- **Behavior:** Typing adds tags. Tags can be removed by clicking or keyboard. Supports validation and suggestions.
- **Used in blocks:**
  - [BlogPostTagging](blocks.md#blog-post-tagging)
### Variants
#### Tag Input - **Create and Remove Tags**
- **Id:** CreateAndRemoveTags
- **Appearance:** Supports tag creation/removal.
- **Behavior:** Adds/removes tags.
#### Tag Input - **With suggestions**
- **Id:** WithSuggestions
- **Appearance:** Includes suggestions dropdown.
- **Behavior:** Displays tag suggestions.

## Textarea
A multi-line input field for entering larger amounts of text.
- **Id:** Textarea
- **Appearance:** A multi-line text input box with optional label and placeholder. May show character count.
- **Behavior:** Accepts multi-line text input. Supports focus, disabled, and error states. May auto-resize to fit content.
- **Used in blocks:**
  - [Comments](blocks.md#comments)
  - [ContactCard](blocks.md#contact-card)
### Variants
#### Textarea - **Basic**
- **Id:** Basic
- **Appearance:** Simple textarea.
- **Behavior:** Basic multi-line input.
#### Textarea - **Autosize**
- **Id:** Autosize
- **Appearance:** Auto-resizes to fit content.
- **Behavior:** Auto-resizing textarea.
#### Textarea - **With character count**
- **Id:** WithCharacterCount
- **Appearance:** Includes character count.
- **Behavior:** Displays character count.

## Theme Toggle
A control for switching between light and dark (or other) visual themes.
- **Id:** ThemeToggle
- **Appearance:** A button or switch with sun/moon or light/dark icons. Indicates current theme.
- **Behavior:** Clicking toggles between light and dark themes. May animate icon or background.
- **Used in blocks:**
  - [ProfileThemeCustomization](blocks.md#profile-theme-customization)
### Variants
#### Theme Toggle - **Light and Dark Switch**
- **Id:** LightAndDarkSwitch
- **Appearance:** Sun/moon icons.
- **Behavior:** Toggles light/dark theme.

## Timeline
A vertical or horizontal display of events in chronological order.
- **Id:** Timeline
- **Appearance:** A vertical or horizontal line with events marked by dots, icons, or cards. Each event includes label, date, and content.
- **Behavior:** Static or interactive (expand/collapse, click for details). May animate on scroll or highlight current event.
- **Used in blocks:**
  - [Roadmap](blocks.md#roadmap)
### Variants
#### Timeline - **Vertical**
- **Id:** Vertical
- **Appearance:** Vertical layout.
- **Behavior:** Displays vertical timeline.
#### Timeline - **Horizontal**
- **Id:** Horizontal
- **Appearance:** Horizontal layout.
- **Behavior:** Displays horizontal timeline.
#### Timeline - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Timeline - **With images**
- **Id:** WithImages
- **Appearance:** Includes images.
- **Behavior:** Displays image content.

## Time Input
An input for selecting a time value.
- **Id:** TimeInput
- **Appearance:** An input field with a clock popup for picking a time.
- **Behavior:** Clicking input opens time picker. Selecting a time updates the value.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
### Variants
#### Time Input - **Basic**
- **Id:** Basic
- **Appearance:** Standard time input.
- **Behavior:** Selects a time value.

## Toggle
A control for switching between two states, such as on/off or enabled/disabled.
- **Id:** Toggle
- **Appearance:** A horizontal slider with a thumb that moves between on and off positions. May include labels or icons for each state.
- **Behavior:** Clicking or dragging toggles the state. Supports keyboard navigation and disabled state. May animate thumb movement.
- **Used in blocks:**
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
### Variants
#### Toggle - **With label**
- **Id:** WithLabel
- **Appearance:** Includes label.
- **Behavior:** Displays label text.
#### Toggle - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.

## Tooltip
A small popup that provides additional information when hovering or focusing on an element.
- **Id:** Tooltip
- **Appearance:** A small floating box with text, appearing near a target element. May have an arrow pointing to the target.
- **Behavior:** Appears on hover or focus. Disappears on mouse leave or blur. Supports delay, rich content, and positioning.
- **Used in blocks:**
### Variants
#### Tooltip - **Top**
- **Id:** Top
- **Appearance:** Appears above target.
- **Behavior:** Displays tooltip above.
#### Tooltip - **Bottom**
- **Id:** Bottom
- **Appearance:** Appears below target.
- **Behavior:** Displays tooltip below.
#### Tooltip - **Left**
- **Id:** Left
- **Appearance:** Appears to the left of target.
- **Behavior:** Displays tooltip to the left.
#### Tooltip - **Right**
- **Id:** Right
- **Appearance:** Appears to the right of target.
- **Behavior:** Displays tooltip to the right.
#### Tooltip - **Rich content**
- **Id:** RichContent
- **Appearance:** Includes rich content.
- **Behavior:** Displays rich content.

## Transfer List
A dual-list component for moving items between two lists, often with selection and search.
- **Id:** TransferList
- **Appearance:** Two lists side by side with buttons to move items between them. May include search and selection checkboxes.
- **Behavior:** Selecting items and clicking buttons moves them between lists. Supports keyboard navigation and bulk actions.
- **Used in blocks:**
  - [TransferListBlock](blocks.md#transfer-list-block)
### Variants
#### Transfer List - **Move items between lists**
- **Id:** MoveItems
- **Appearance:** Supports item transfer.
- **Behavior:** Moves items between lists.

## Tree View
A hierarchical list for displaying and selecting nested items or categories.
- **Id:** TreeView
- **Appearance:** A hierarchical list with expandable/collapsible nodes. Each node may have a checkbox, icon, or label.
- **Behavior:** Clicking expands/collapses nodes. Selecting a node updates value. Supports keyboard navigation and multi-select.
- **Used in blocks:**
  - [UserRoleAssignment](blocks.md#user-role-assignment)
### Variants
#### Tree View - **Basic**
- **Id:** Basic
- **Appearance:** Simple tree view.
- **Behavior:** Basic tree interaction.
#### Tree View - **With checkboxes**
- **Id:** WithCheckboxes
- **Appearance:** Includes checkboxes.
- **Behavior:** Supports checkbox selection.
#### Tree View - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Tree View - **Expand and Collapse All**
- **Id:** ExpandAndCollapseAll
- **Appearance:** Expand/collapse controls.
- **Behavior:** Expands/collapses all nodes.
#### Tree View - **Tree structure dropdown**
- **Id:** TreeStructureDropdown
- **Appearance:** Dropdown layout.
- **Behavior:** Displays tree structure.

## Typography
A set of styled text elements for headings, paragraphs, lists, and more.
- **Id:** Typography
- **Appearance:** Text elements styled as headings, paragraphs, blockquotes, lists, code, or highlights. Follows design system type scale and spacing.
- **Behavior:** Static display. May support copy, selection, or inline editing.
- **Used in blocks:**
  - [ActivityFeed](blocks.md#activity-feed)
  - [AppDownloadSection](blocks.md#app-download-section)
  - [ArticleCards](blocks.md#article-cards)
  - [Banners](blocks.md#banners)
  - [Checkout](blocks.md#checkout)
  - [Comments](blocks.md#comments)
  - [ContactCard](blocks.md#contact-card)
  - [Error](blocks.md#error)
  - [FAQ](blocks.md#faq)
  - [FeaturesSection](blocks.md#features-section)
  - [Footers](blocks.md#footers)
  - [Headers](blocks.md#headers)
  - [Hero](blocks.md#hero)
  - [Legal](blocks.md#legal)
  - [OrderHistory](blocks.md#order-history)
  - [PricingTable](blocks.md#pricing-table)
  - [ProductDetails](blocks.md#product-details)
  - [ResponsiveColumns](blocks.md#responsive-columns)
  - [Roadmap](blocks.md#roadmap)
  - [Section](blocks.md#section)
  - [SplitLayout](blocks.md#split-layout)
  - [Stats](blocks.md#stats)
  - [TeamSection](blocks.md#team-section)
  - [Testimonials](blocks.md#testimonials)
  - [Wishlist](blocks.md#wishlist)
### Variants
#### Typography - **Headings**
- **Id:** Headings
- **Appearance:** Styled as headings.
- **Behavior:** Displays heading text.
#### Typography - **Paragraphs**
- **Id:** Paragraphs
- **Appearance:** Styled as paragraphs.
- **Behavior:** Displays paragraph text.
#### Typography - **Blockquotes**
- **Id:** Blockquotes
- **Appearance:** Styled as blockquotes.
- **Behavior:** Displays blockquote text.
#### Typography - **Lists**
- **Id:** Lists
- **Appearance:** Styled as lists.
- **Behavior:** Displays list items.
#### Typography - **Code block**
- **Id:** CodeBlock
- **Appearance:** Styled as code blocks.
- **Behavior:** Displays code content.
#### Typography - **Highlight and Callout**
- **Id:** HighlightAndCallout
- **Appearance:** Highlighted text.
- **Behavior:** Displays highlighted text.
