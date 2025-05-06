# NovyUI Blocks

This document provides an overview of all UI blocks available in NovyUI. Each block is a higher-level composition of components, designed to address common page sections and layouts. Use this file to explore, plan, or implement blocks in your project. Each section includes a brief one-line description to help you quickly understand the block's role.

- [Article Cards](#article-cards)
- [Authentication](#authentication)
- [Banners](#banners)
- [Carousels](#carousels)
- [Comments](#comments)
- [Contact Card/Section](#contact-cardsection)
- [Container](#container)
- [Cookie Consent Banner](#cookie-consent-banner)
- [Drag and Drop](#drag-and-drop)
- [Features Section](#features-section)
- [Flexbox Layouts](#flexbox-layouts)
- [Footers](#footers)
- [Grid](#grid)
- [Group Layout](#group-layout)
- [Headers](#headers)
- [Hero](#hero)
- [Mega Menu](#mega-menu)
- [Navbars](#navbars)
- [Page Wrapper](#page-wrapper)
- [Responsive Columns](#responsive-columns)
- [Section](#section)
- [Sidebar](#sidebar)
- [Split Layout](#split-layout)
- [Stats](#stats)
- [Table of Contents](#table-of-contents)
- [TeamSection](#teamsection)
- [User Info and Controls](#user-info-and-controls)

## Article Cards
A grid or list of cards showcasing articles, blog posts, or news items.
- **Id:** ArticleCards
- **Appearance:** A card layout for articles or blog posts, including image, title, excerpt, author avatar, tags, and action button(s).
- **Behavior:** Static by default. May be clickable, support hover effects, or include actions (e.g., share, bookmark).
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Minimal card with title and excerpt only.
    - **Behavior Difference:** Static display, no interactivity.
  - With image
    - **Id:** WithImage
    - **Appearance Difference:** Card includes a featured image at the top or side.
    - **Behavior Difference:** Image may be clickable or open in a lightbox.
  - With author
    - **Id:** WithAuthor
    - **Appearance Difference:** Card displays author avatar and name.
    - **Behavior Difference:** Author info may link to profile or filter by author.
  - With tags
    - **Id:** WithTags
    - **Appearance Difference:** Card displays tags or categories as chips.
    - **Behavior Difference:** Tags may be clickable to filter articles.
  - Featured
    - **Id:** Featured
    - **Appearance Difference:** Highlighted styling, larger or more prominent card.
    - **Behavior Difference:** May be prioritized in layout or carousel.
  - Compact
    - **Id:** Compact
    - **Appearance Difference:** Smaller card with condensed content.
    - **Behavior Difference:** Static, optimized for dense layouts.
  - List
    - **Id:** List
    - **Appearance Difference:** Cards are arranged in a vertical list rather than a grid.
    - **Behavior Difference:** May support drag-and-drop or reordering.
- **Components:**
  - Card
  - Image
  - Avatar
  - Chips
  - Button
  - Typography

## Authentication
A block containing forms for user login, registration, or password management.
- **Id:** Authentication
- **Appearance:** A form for user login, registration, or password reset. Includes input fields, labels, buttons, and optional links (e.g., forgot password). May be centered on the page or in a card.
- **Behavior:** Submits user credentials or registration info. Shows validation errors and loading state. May redirect or show success message on completion.
- **Variants:**
  - Login
    - **Id:** Login
    - **Appearance Difference:** Shows username/email and password fields, login button, and optional 'forgot password' link.
    - **Behavior Difference:** Submits credentials for authentication.
  - Register
    - **Id:** Register
    - **Appearance Difference:** Shows fields for new account creation (e.g., name, email, password, confirm password).
    - **Behavior Difference:** Submits registration data to create a new account.
  - Forgot password
    - **Id:** ForgotPassword
    - **Appearance Difference:** Shows email input and submit button for password reset request.
    - **Behavior Difference:** Sends password reset instructions to email.
  - Reset password
    - **Id:** ResetPassword
    - **Appearance Difference:** Shows new password and confirm password fields.
    - **Behavior Difference:** Submits new password to reset account credentials.
- **Components:**
  - Input
  - PasswordInput
  - Button
  - Checkbox
  - Alert
  - Link
  - FormErrorMessage
  - DatePicker
  - DateRangePicker
  - TimeInput

## Banners
A horizontal bar or box used to display important messages, promotions, or alerts.
- **Id:** Banners
- **Appearance:** A horizontal bar or box with a message, icon, and optional action button. May be colored to indicate importance or type (e.g., warning, promo).
- **Behavior:** Static or dismissible. May animate in/out or auto-dismiss after a timeout.
- **Variants:**
  - Announcement
    - **Id:** Announcement
    - **Appearance Difference:** Neutral or info color, message text, and optional icon.
    - **Behavior Difference:** Static or may auto-dismiss after a timeout.
  - Promo
    - **Id:** Promo
    - **Appearance Difference:** Highlighted with promotional color or style, may include call-to-action button.
    - **Behavior Difference:** May be clickable or dismissible.
  - Warning
    - **Id:** Warning
    - **Appearance Difference:** Warning color (e.g., yellow/orange), warning icon, and message.
    - **Behavior Difference:** May require user dismissal or action.
- **Components:**
  - Alert
  - Button
  - Icon
  - Typography

## Carousels
A horizontally scrollable area for showcasing images, cards, or featured content.
- **Id:** Carousels
- **Appearance:** A horizontally scrollable area with images or cards, navigation arrows, and indicators. May auto-advance or loop.
- **Behavior:** Users can scroll, swipe, or click arrows to navigate. Supports autoplay, pause on hover, and responsive layout.
- **Variants:**
  - Image carousel
    - **Id:** ImageCarousel
    - **Appearance Difference:** Displays a series of images with navigation controls.
    - **Behavior Difference:** Users can scroll or swipe through images; may auto-advance.
  - Card carousel
    - **Id:** CardCarousel
    - **Appearance Difference:** Displays cards (with text, images, or actions) in a carousel layout.
    - **Behavior Difference:** Users can scroll or swipe through cards; may support card actions.
- **Components:**
  - Carousel
  - Image
  - Card
  - Button
  - Icon

## Comments
A section for displaying and submitting user comments, often with threading and moderation features.
- **Id:** Comments
- **Appearance:** A list of user comments, each with avatar, author, timestamp, and content. May support threading (nested replies).
- **Behavior:** Users can add, reply, or delete comments. Supports keyboard navigation, editing, and moderation actions.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Flat list of comments, no nesting.
    - **Behavior Difference:** Users can add, edit, or delete their own comments.
  - Threaded
    - **Id:** Threaded
    - **Appearance Difference:** Comments can be nested to show replies.
    - **Behavior Difference:** Users can reply to comments, creating threads.
- **Components:**
  - Avatar
  - Input
  - Textarea
  - Button
  - List
  - Card
  - Typography

## Contact Card/Section
A section providing contact information and/or a form for users to reach out.
- **Id:** ContactCardSection
- **Appearance:** A section with a contact form (inputs, textarea, button), contact details, and optional map or icons for communication methods.
- **Behavior:** Submits form data, shows validation and success/error messages. May include interactive map or clickable contact links.
- **Variants:**
  - With map
    - **Id:** WithMap
    - **Appearance Difference:** Includes an embedded map next to or below the form.
    - **Behavior Difference:** Map is interactive; user can select or view location.
  - With social links
    - **Id:** WithSocialLinks
    - **Appearance Difference:** Includes icons or links for social/contact methods.
    - **Behavior Difference:** Social/contact links are clickable and may open external apps or sites.
- **Components:**
  - Input
  - Textarea
  - Button
  - Icon
  - MapLocationPicker
  - Alert

## Container
A responsive wrapper that centers and constrains content width for consistent layouts.
- **Id:** Container
- **Appearance:** A responsive wrapper that centers and constrains content width. May include padding and background.
- **Behavior:** Static. Adjusts size based on screen width and breakpoints.
- **Variants:**
  - Responsive wrapper for page content
    - **Id:** ResponsiveWrapper
    - **Appearance Difference:** Centers and constrains content with responsive width.
    - **Behavior Difference:** Adjusts layout responsively.
- **Components:**
  - Container

## Cookie Consent Banner
A banner that informs users about cookie usage and requests their consent.
- **Id:** CookieConsentBanner
- **Appearance:** A horizontal banner at the bottom or top of the page, with message, action buttons, and optional link to privacy policy.
- **Behavior:** Appears on first visit or when required. Dismisses on button click. May store consent in cookies/local storage.
- **Variants:**
  - Consent options
    - **Id:** ConsentOptions
    - **Appearance Difference:** Banner with multiple consent choices (e.g., accept, reject, customize).
    - **Behavior Difference:** User can select consent level; stores choice.
  - Dismiss button
    - **Id:** DismissButton
    - **Appearance Difference:** Banner with a single dismiss/accept button.
    - **Behavior Difference:** User can dismiss banner with one click.
- **Components:**
  - Alert
  - Button
  - Typography
  - Link

## Drag and Drop
A block enabling drag-and-drop sorting, reordering, or file uploads within a list or grid.
- **Id:** DragAndDrop
- **Appearance:** A list or grid of items with drag handles. Items may be cards, images, or list elements. Dropzone highlights on drag.
- **Behavior:** Items can be reordered or moved between lists by dragging. Supports keyboard and mouse interaction, and drop feedback.
- **Variants:**
  - Sortable list
    - **Id:** SortableList
    - **Appearance Difference:** List of items with drag handles.
    - **Behavior Difference:** Items can be reordered by dragging.
  - Sortable grid
    - **Id:** SortableGrid
    - **Appearance Difference:** Grid of items with drag handles.
    - **Behavior Difference:** Items can be reordered by dragging in a grid layout.
  - File upload (sortable)
    - **Id:** FileUploadSortable
    - **Appearance Difference:** List or grid of uploaded files, each with drag handle.
    - **Behavior Difference:** Files can be reordered by dragging; supports file upload actions.
- **Components:**
  - List
  - Card
  - Icon (drag handle)
  - Dropzone

## Features Section
A section that highlights key features, benefits, or selling points, often arranged in a grid or list.
- **Id:** FeaturesSection
- **Appearance:** A section highlighting key features or benefits, often arranged in a grid or list. Each feature may include an icon, heading, and description.
- **Behavior:** Static by default. May include hover effects, reveal animations, or clickable features for more details.
- **Variants:**
  - Grid
    - **Id:** Grid
    - **Appearance Difference:** Features are arranged in a grid layout.
    - **Behavior Difference:** Static; may support responsive rearrangement.
  - With icons
    - **Id:** WithIcons
    - **Appearance Difference:** Each feature includes an icon.
    - **Behavior Difference:** Icons visually reinforce feature meaning.
  - With images
    - **Id:** WithImages
    - **Appearance Difference:** Each feature includes an image or illustration.
    - **Behavior Difference:** Images may be static or support lightbox/zoom.
  - Steps
    - **Id:** Steps
    - **Appearance Difference:** Features are presented as a numbered or sequential process.
    - **Behavior Difference:** May highlight current step or animate transitions.
  - List
    - **Id:** List
    - **Appearance Difference:** Features are listed vertically with minimal layout.
    - **Behavior Difference:** Static; may support click to expand details.
- **Components:**
  - Heading
  - Icon
  - Card
  - List
  - Button (optional)
  - Grid

## Flexbox Layouts
A layout system arranging children in a row or column with flexible sizing and alignment.
- **Id:** FlexboxLayouts
- **Appearance:** A layout system arranging children in a row or column with flexible sizing and alignment. May wrap or justify content.
- **Behavior:** Static. Children are arranged according to flexbox rules. Supports responsive direction and alignment.
- **Variants:**
  - Flexible row/column arrangements
    - **Id:** FlexibleRowColumnArrangements
    - **Appearance Difference:** Children arranged in flexible rows or columns.
    - **Behavior Difference:** Layout adapts to available space.
- **Components:**
  - FlexboxLayouts

## Footers
A section at the bottom of a page containing links, copyright, and additional information.
- **Id:** Footers
- **Appearance:** A section at the bottom of a page with links, copyright, social icons, and optional newsletter signup. May be simple or multi-column.
- **Behavior:** Static by default. Newsletter form submits email. Social icons and links are clickable.
- **Variants:**
  - Simple
    - **Id:** Simple
    - **Appearance Difference:** Minimal layout with just copyright and a few links.
    - **Behavior Difference:** Static, no interactive elements except links.
  - With links
    - **Id:** WithLinks
    - **Appearance Difference:** Includes additional navigation or resource links.
    - **Behavior Difference:** Links are clickable for navigation.
  - With social icons
    - **Id:** WithSocialIcons
    - **Appearance Difference:** Displays social media icons.
    - **Behavior Difference:** Icons link to social profiles.
  - With newsletter
    - **Id:** WithNewsletter
    - **Appearance Difference:** Includes a newsletter signup form.
    - **Behavior Difference:** Form submits email for newsletter subscription.
- **Components:**
  - Link
  - Icon
  - Button
  - Input
  - Typography

## Grid
A layout system dividing content into columns and rows with consistent spacing.
- **Id:** Grid
- **Appearance:** A layout system dividing content into columns and rows with consistent spacing. May be responsive and support gaps.
- **Behavior:** Static. Children are placed in grid cells. Adjusts layout based on screen size.
- **Variants:**
  - Responsive grid layouts for arranging content
    - **Id:** ResponsiveGridLayouts
    - **Appearance Difference:** Content arranged in a responsive grid.
    - **Behavior Difference:** Grid adapts to screen size.
- **Components:**
  - Grid

## Group Layout
A container for arranging child elements in a stack, grid, or flexible layout.
- **Id:** GroupLayout
- **Appearance:** A container for arranging child elements in a stack, grid, or flex layout. May include spacing, alignment, and responsive behavior.
- **Behavior:** Static by default. Children are arranged according to layout rules. May support drag-and-drop or reordering.
- **Variants:**
  - Stack
    - **Id:** Stack
    - **Appearance Difference:** Children are arranged vertically with spacing.
    - **Behavior Difference:** Static vertical layout.
  - Grid
    - **Id:** Grid
    - **Appearance Difference:** Children are arranged in a grid with rows and columns.
    - **Behavior Difference:** Static grid layout.
  - Flex
    - **Id:** Flex
    - **Appearance Difference:** Children are arranged in a row or column with flexible sizing.
    - **Behavior Difference:** Static flexbox layout.
- **Components:**
  - Container
  - Grid
  - FlexboxLayouts

## Headers
A section at the top of a page or card, typically containing a title, actions, and navigation aids.
- **Id:** Headers
- **Appearance:** A section at the top of a page or card, with title, breadcrumbs, actions, and optional avatar or search. May include background or divider.
- **Behavior:** Static by default. Actions trigger navigation or open menus. Breadcrumbs are clickable.
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple header with title only.
    - **Behavior Difference:** Static, no actions or navigation.
  - With actions
    - **Id:** WithActions
    - **Appearance Difference:** Includes action buttons (e.g., add, edit, delete).
    - **Behavior Difference:** Actions trigger navigation or open dialogs.
  - With breadcrumbs
    - **Id:** WithBreadcrumbs
    - **Appearance Difference:** Includes breadcrumb navigation below or beside the title.
    - **Behavior Difference:** Breadcrumbs are clickable for navigation.
  - With search
    - **Id:** WithSearch
    - **Appearance Difference:** Includes a search input field.
    - **Behavior Difference:** Allows searching from the header.
  - With avatar
    - **Id:** WithAvatar
    - **Appearance Difference:** Includes user avatar or profile picture.
    - **Behavior Difference:** Avatar may open a user menu or profile.
  - Sticky
    - **Id:** Sticky
    - **Appearance Difference:** Header remains fixed at the top of the page when scrolling.
    - **Behavior Difference:** Always visible during scroll.
- **Components:**
  - Heading
  - Breadcrumbs
  - Button
  - Avatar
  - Icon
  - Searchbox

## Hero
A prominent section at the top of a page, typically featuring a headline, supporting text, and a call-to-action.
- **Id:** Hero
- **Appearance:** A prominent section at the top of a page, typically with a large heading, supporting text, call-to-action button(s), and an image or illustration. May have a background color, gradient, or image.
- **Behavior:** Static by default. Buttons trigger navigation or actions. May include animation or parallax effects.
- **Variants:**
  - Basic hero
    - **Id:** BasicHero
    - **Appearance Difference:** Standard layout with heading, text, and button, no image or special styling.
    - **Behavior Difference:** Static, no animation or interactivity beyond button action.
  - With image
    - **Id:** WithImage
    - **Appearance Difference:** Includes a prominent image or illustration alongside text.
    - **Behavior Difference:** Image may animate or be interactive (e.g., lightbox), otherwise static.
  - With actions
    - **Id:** WithActions
    - **Appearance Difference:** Includes multiple call-to-action buttons or links.
    - **Behavior Difference:** Multiple actions can be triggered from the hero.
  - Centered
    - **Id:** Centered
    - **Appearance Difference:** Content is centered both vertically and horizontally.
    - **Behavior Difference:** No behavioral difference, just layout.
  - Split
    - **Id:** Split
    - **Appearance Difference:** Content and image are split into two columns.
    - **Behavior Difference:** Responsive stacking on small screens.
  - Minimal
    - **Id:** Minimal
    - **Appearance Difference:** Reduced styling, minimal text and elements.
    - **Behavior Difference:** No behavioral difference, just minimal appearance.
- **Components:**
  - Heading
  - Paragraph
  - Button
  - Image
  - Container
  - Icon (optional)

## Mega Menu
A large dropdown menu with multiple columns, categories, and rich content for site navigation.
- **Id:** MegaMenu
- **Appearance:** A large dropdown menu with multiple columns, links, icons, and images. Appears below or beside a navigation item.
- **Behavior:** Opens on click or hover. Supports keyboard navigation and responsive layout. Clicking links navigates to pages.
- **Variants:**
  - With images
    - **Id:** WithImages
    - **Appearance Difference:** Includes images or illustrations in menu columns.
    - **Behavior Difference:** Images may be clickable or static.
  - With columns
    - **Id:** WithColumns
    - **Appearance Difference:** Menu is organized into multiple columns for categories or sections.
    - **Behavior Difference:** Columns group related links for easier navigation.
- **Components:**
  - Dropdown
  - Link
  - Icon
  - Image
  - Grid

## Navbars
A horizontal or vertical navigation bar providing links to main sections of a site or app.
- **Id:** Navbars
- **Appearance:** A horizontal or vertical bar with navigation links, logo, and optional user avatar, search, or menu. May be fixed or sticky.
- **Behavior:** Clicking links navigates to pages. Dropdowns open on click/hover. Responsive to screen size (collapsible on mobile).
- **Variants:**
  - Basic
    - **Id:** Basic
    - **Appearance Difference:** Simple bar with links and logo only.
    - **Behavior Difference:** Static navigation, no dropdowns or user info.
  - With user info
    - **Id:** WithUserInfo
    - **Appearance Difference:** Includes user avatar and name.
    - **Behavior Difference:** User info may open a dropdown or menu.
  - With search
    - **Id:** WithSearch
    - **Appearance Difference:** Includes a search input field.
    - **Behavior Difference:** Allows searching from the navbar.
  - With menu
    - **Id:** WithMenu
    - **Appearance Difference:** Includes dropdown or mega menu.
    - **Behavior Difference:** Dropdown/mega menu opens on click/hover.
  - Collapsible
    - **Id:** Collapsible
    - **Appearance Difference:** Collapses into a hamburger menu on small screens.
    - **Behavior Difference:** Menu toggles open/close on mobile.
  - Vertical
    - **Id:** Vertical
    - **Appearance Difference:** Arranged vertically on the side of the page.
    - **Behavior Difference:** Navigation links stack vertically.
  - Horizontal
    - **Id:** Horizontal
    - **Appearance Difference:** Arranged horizontally at the top of the page.
    - **Behavior Difference:** Navigation links align in a row.
- **Components:**
  - Button
  - Icon
  - Avatar
  - Dropdown
  - Link
  - Badge
  - Searchbox

## Page Wrapper
A top-level container that wraps the entire page, providing background, padding, and layout constraints.
- **Id:** PageWrapper
- **Appearance:** A top-level container for the entire page, providing background, padding, and layout constraints.
- **Behavior:** Static. Wraps all page content and ensures consistent spacing.
- **Variants:**
  - Main layout container for the whole page
    - **Id:** MainLayoutContainer
    - **Appearance Difference:** Full-page wrapper with consistent padding and background.
    - **Behavior Difference:** Static, wraps all content.
- **Components:**
  - Container

## Responsive Columns
A multi-column layout that adapts to screen size, stacking columns vertically on small screens.
- **Id:** ResponsiveColumns
- **Appearance:** A multi-column layout that adapts to screen size, stacking columns vertically on small screens.
- **Behavior:** Static. Columns adjust or stack responsively. May support equal or variable widths.
- **Variants:**
  - Multi-column layouts that adapt to screen size
    - **Id:** MultiColumnLayouts
    - **Appearance Difference:** Multiple columns that stack on small screens.
    - **Behavior Difference:** Columns rearrange responsively.
- **Components:**
  - Grid
  - Card
  - Typography

## Section
A content area used to separate and organize different parts of a page.
- **Id:** Section
- **Appearance:** A content area with optional heading, divider, and background. Used to separate page content into logical parts.
- **Behavior:** Static. May support show/hide or expand/collapse for content.
- **Variants:**
  - Themed or separated page areas (with background, with divider)
    - **Id:** ThemedOrSeparatedPageAreas
    - **Appearance Difference:** Section with themed background or divider.
    - **Behavior Difference:** Static or may support expand/collapse.
- **Components:**
  - Container
  - Heading
  - Typography
  - DividerSeparator

## Sidebar
A vertical panel providing navigation links, actions, or additional content alongside the main area.
- **Id:** Sidebar
- **Appearance:** A vertical panel with navigation links, icons, and optional avatar or actions. May be collapsible or fixed.
- **Behavior:** Clicking links navigates to sections. May expand/collapse on toggle. Supports keyboard navigation.
- **Variants:**
  - Vertical navigation or content area
    - **Id:** VerticalNavigationOrContentArea
    - **Appearance Difference:** Vertical panel with navigation links and content.
    - **Behavior Difference:** Navigation links stack vertically; may expand/collapse.
- **Components:**
  - List
  - Link
  - Icon
  - Button
  - Avatar

## Split Layout
A layout dividing content into two or more columns, often with image and text side by side.
- **Id:** SplitLayout
- **Appearance:** A layout with two or more columns, typically with image on one side and text on the other. May be responsive and stack on small screens.
- **Behavior:** Static. Columns adjust or stack based on screen size. May support animation or reveal effects.
- **Variants:**
  - Side-by-side content, e.g., image + text
    - **Id:** SideBySideContent
    - **Appearance Difference:** Two columns, one with image, one with text.
    - **Behavior Difference:** Columns stack on small screens.
- **Components:**
  - Container
  - Grid
  - Image
  - Typography
  - Button

## Stats
A section displaying key metrics, statistics, or trends, often in a grid or card layout.
- **Id:** Stats
- **Appearance:** A section with one or more statistic cards, each showing a number, label, icon, and optional trend or progress bar.
- **Behavior:** Numbers may animate on load. Cards may be clickable for more details. Updates dynamically with data.
- **Variants:**
  - Stat grid
    - **Id:** StatGrid
    - **Appearance Difference:** Statistics are arranged in a grid layout.
    - **Behavior Difference:** Static or may animate numbers.
  - Stat with icon
    - **Id:** StatWithIcon
    - **Appearance Difference:** Each stat includes an icon.
    - **Behavior Difference:** Icon visually reinforces the stat meaning.
  - Stat with progress
    - **Id:** StatWithProgress
    - **Appearance Difference:** Includes a progress bar or indicator.
    - **Behavior Difference:** Progress bar animates to show value.
  - Stat card
    - **Id:** StatCard
    - **Appearance Difference:** Each stat is displayed in a card with border or shadow.
    - **Behavior Difference:** Card may be clickable for more details.
  - Stat list
    - **Id:** StatList
    - **Appearance Difference:** Statistics are listed vertically.
    - **Behavior Difference:** Static, no interactivity.
  - Stat with chart
    - **Id:** StatWithChart
    - **Appearance Difference:** Includes a small chart or sparkline.
    - **Behavior Difference:** Chart animates or updates with data.
  - Stat with description
    - **Id:** StatWithDescription
    - **Appearance Difference:** Includes a descriptive text below the stat.
    - **Behavior Difference:** Static, provides additional context.
  - Stat with actions
    - **Id:** StatWithActions
    - **Appearance Difference:** Includes action buttons or links.
    - **Behavior Difference:** Actions trigger navigation or updates.
  - Stat with avatar
    - **Id:** StatWithAvatar
    - **Appearance Difference:** Includes an avatar or user image.
    - **Behavior Difference:** Avatar may link to user profile.
  - Stat with badge
    - **Id:** StatWithBadge
    - **Appearance Difference:** Includes a badge to indicate status or change.
    - **Behavior Difference:** Badge updates dynamically with status.
- **Components:**
  - Statistic
  - Icon
  - Card
  - Progress
  - Badge

## Table of Contents
A navigational block listing links to sections within a page for easy access.
- **Id:** TableOfContents
- **Appearance:** A vertical or horizontal list of links to sections of a page. May be styled as a sidebar or sticky element.
- **Behavior:** Clicking a link scrolls to the section. Highlights the active section as user scrolls. May collapse/expand for long lists.
- **Variants:**
  - Simple
    - **Id:** Simple
    - **Appearance Difference:** Basic list of links, no sticky or advanced styling.
    - **Behavior Difference:** Static navigation, no highlight or sticky behavior.
  - Sticky
    - **Id:** Sticky
    - **Appearance Difference:** List is fixed to the viewport as user scrolls.
    - **Behavior Difference:** Remains visible while scrolling, may highlight active section.
- **Components:**
  - List
  - Link
  - Heading

## TeamSection
A section showcasing team members, their roles, and contact information.
- **Id:** TeamSection
- **Appearance:** A section with team member profiles, including avatar, name, role, and contact links. May be arranged in a grid or list.
- **Behavior:** Static by default. Profiles may be clickable or support hover effects. Contact links open email or social profiles.
- **Variants:**
  - Grid
    - **Id:** Grid
    - **Appearance Difference:** Team members are arranged in a grid layout.
    - **Behavior Difference:** Static; may support responsive rearrangement.
  - List
    - **Id:** List
    - **Appearance Difference:** Team members are listed vertically.
    - **Behavior Difference:** Static; may support click to expand details.
- **Components:**
  - Avatar
  - Card
  - Grid
  - List
  - Link
  - Typography

## User Info and Controls
A block presenting user profile information and related actions or settings.
- **Id:** UserInfoAndControls
- **Appearance:** A section or card with user avatar, name, status, and controls (dropdown, toggle, actions). May include stats or settings.
- **Behavior:** Controls trigger actions (e.g., switch user, open menu). Status updates in real time. Supports keyboard navigation.
- **Variants:**
  - Profile menu
    - **Id:** ProfileMenu
    - **Appearance Difference:** Dropdown or menu with user actions (profile, logout, etc.).
    - **Behavior Difference:** Menu opens on click; actions trigger navigation or dialogs.
  - User card
    - **Id:** UserCard
    - **Appearance Difference:** Card layout with user info and controls.
    - **Behavior Difference:** Card may be clickable or support inline actions.
  - User dropdown
    - **Id:** UserDropdown
    - **Appearance Difference:** Dropdown with user info and settings.
    - **Behavior Difference:** Dropdown opens on click; settings/actions available.
  - User avatar with status
    - **Id:** UserAvatarWithStatus
    - **Appearance Difference:** Avatar includes a status indicator (dot, color, etc.).
    - **Behavior Difference:** Status updates in real time.
  - User settings
    - **Id:** UserSettings
    - **Appearance Difference:** Section or modal for user preferences/settings.
    - **Behavior Difference:** Allows updating and saving settings.
  - User stats
    - **Id:** UserStats
    - **Appearance Difference:** Displays user-related statistics (posts, followers, etc.).
    - **Behavior Difference:** Stats update dynamically.
  - User switcher
    - **Id:** UserSwitcher
    - **Appearance Difference:** Control to switch between multiple users/accounts.
    - **Behavior Difference:** Changes active user context.
  - User badge
    - **Id:** UserBadge
    - **Appearance Difference:** Badge or label indicating user role/status.
    - **Behavior Difference:** Badge updates with user status/role.
  - User list
    - **Id:** UserList
    - **Appearance Difference:** List of users with avatars and names.
    - **Behavior Difference:** List may be selectable or support actions.
- **Components:**
  - Avatar
  - Dropdown
  - Button
  - List
  - Badge
  - Card
  - Toggle
  - Collapse
