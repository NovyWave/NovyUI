# NovyUI Blocks

This document provides an overview of all UI blocks available in NovyUI. Each block is a higher-level composition of components, designed to address common page sections and layouts. Use this file to explore, plan, or implement blocks in your project. Each section includes a brief one-line description to help you quickly understand the block's role.

- [Article Cards](#article-cards)
- [Authentication](#authentication)
- [Banners](#banners)
- [Carousels](#carousels)
- [Comments](#comments)
- [Contact Card](#contact-card)
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
- **Components:**
  - [Card](components.md#card)
  - [Image](components.md#image)
  - [Avatar](components.md#avatar)
  - [Chips](components.md#chips)
  - [Button](components.md#button)
  - [Typography](components.md#typography)
### Variants
#### Basic
- **Id:** Basic
- **Appearance:** Minimal card with title and excerpt only.
- **Behavior:** Static display, no interactivity.
#### With image
- **Id:** WithImage
- **Appearance:** Card includes a featured image at the top or side.
- **Behavior:** Image may be clickable or open in a lightbox.
#### With author
- **Id:** WithAuthor
- **Appearance:** Card displays author avatar and name.
- **Behavior:** Author info may link to profile or filter by author.
#### With tags
- **Id:** WithTags
- **Appearance:** Card displays tags or categories as chips.
- **Behavior:** Tags may be clickable to filter articles.
#### Featured
- **Id:** Featured
- **Appearance:** Highlighted styling, larger or more prominent card.
- **Behavior:** May be prioritized in layout or carousel.
#### Compact
- **Id:** Compact
- **Appearance:** Smaller card with condensed content.
- **Behavior:** Static, optimized for dense layouts.
#### List
- **Id:** List
- **Appearance:** Cards are arranged in a vertical list rather than a grid.
- **Behavior:** May support drag-and-drop or reordering.

## Authentication
A block containing forms for user login, registration, or password management.
- **Id:** Authentication
- **Appearance:** A form for user login, registration, or password reset. Includes input fields, labels, buttons, and optional links (e.g., forgot password). May be centered on the page or in a card.
- **Behavior:** Submits user credentials or registration info. Shows validation errors and loading state. May redirect or show success message on completion.
- **Components:**
  - [Input](components.md#input)
  - [PasswordInput](components.md#passwordinput)
  - [Button](components.md#button)
  - [Checkbox](components.md#checkbox)
  - [Alert](components.md#alert)
  - [Link](components.md#link)
  - [FormErrorMessage](components.md#formerrormessage)
  - [DatePicker](components.md#datepicker)
  - [DateRangePicker](components.md#daterangepicker)
  - [TimeInput](components.md#timeinput)
### Variants
#### Login
- **Id:** Login
- **Appearance:** Shows username/email and password fields, login button, and optional 'forgot password' link.
- **Behavior:** Submits credentials for authentication.
#### Register
- **Id:** Register
- **Appearance:** Shows fields for new account creation (e.g., name, email, password, confirm password).
- **Behavior:** Submits registration data to create a new account.
#### Forgot password
- **Id:** ForgotPassword
- **Appearance:** Shows email input and submit button for password reset request.
- **Behavior:** Sends password reset instructions to email.
#### Reset password
- **Id:** ResetPassword
- **Appearance:** Shows new password and confirm password fields.
- **Behavior:** Submits new password to reset account credentials.

## Banners
A horizontal bar or box used to display important messages, promotions, or alerts.
- **Id:** Banners
- **Appearance:** A horizontal bar or box with a message, icon, and optional action button. May be colored to indicate importance or type (e.g., warning, promo).
- **Behavior:** Static or dismissible. May animate in/out or auto-dismiss after a timeout.
- **Components:**
  - [Alert](components.md#alert)
  - [Button](components.md#button)
  - [Icon](components.md#icon)
  - [Typography](components.md#typography)
### Variants
#### Announcement
- **Id:** Announcement
- **Appearance:** Neutral or info color, message text, and optional icon.
- **Behavior:** Static or may auto-dismiss after a timeout.
#### Promo
- **Id:** Promo
- **Appearance:** Highlighted with promotional color or style, may include call-to-action button.
- **Behavior:** May be clickable or dismissible.
#### Warning
- **Id:** Warning
- **Appearance:** Warning color (e.g., yellow/orange), warning icon, and message.
- **Behavior:** May require user dismissal or action.

## Carousels
A horizontally scrollable area for showcasing images, cards, or featured content.
- **Id:** Carousels
- **Appearance:** A horizontally scrollable area with images or cards, navigation arrows, and indicators. May auto-advance or loop.
- **Behavior:** Users can scroll, swipe, or click arrows to navigate. Supports autoplay, pause on hover, and responsive layout.
- **Components:**
  - [Carousel](components.md#carousel)
  - [Image](components.md#image)
  - [Card](components.md#card)
  - [Button](components.md#button)
  - [Icon](components.md#icon)
### Variants
#### Image carousel
- **Id:** ImageCarousel
- **Appearance:** Displays a series of images with navigation controls.
- **Behavior:** Users can scroll or swipe through images; may auto-advance.
#### Card carousel
- **Id:** CardCarousel
- **Appearance:** Displays cards (with text, images, or actions) in a carousel layout.
- **Behavior:** Users can scroll or swipe through cards; may support card actions.

## Comments
A section for displaying and submitting user comments, often with threading and moderation features.
- **Id:** Comments
- **Appearance:** A list of user comments, each with avatar, author, timestamp, and content. May support threading (nested replies).
- **Behavior:** Users can add, reply, or delete comments. Supports keyboard navigation, editing, and moderation actions.
- **Components:**
  - [Avatar](components.md#avatar)
  - [Input](components.md#input)
  - [Textarea](components.md#textarea)
  - [Button](components.md#button)
  - [List](components.md#list)
  - [Card](components.md#card)
  - [Typography](components.md#typography)
### Variants
  - Basic
    - **Id:** Basic
    - **Appearance:** Flat list of comments, no nesting.
    - **Behavior:** Users can add, edit, or delete their own comments.
  - Threaded
    - **Id:** Threaded
    - **Appearance:** Comments can be nested to show replies.
    - **Behavior:** Users can reply to comments, creating threads.

## Contact Card
A section providing contact information and/or a form for users to reach out.
- **Id:** ContactCard
- **Appearance:** A section with a contact form (inputs, textarea, button), contact details, and optional map or icons for communication methods.
- **Behavior:** Submits form data, shows validation and success/error messages. May include interactive map or clickable contact links.
- **Components:**
  - [Input](components.md#input)
  - [Textarea](components.md#textarea)
  - [Button](components.md#button)
  - [Icon](components.md#icon)
  - [MapLocationPicker](components.md#maplocationpicker)
  - [Alert](components.md#alert)
### Variants
  - With map
    - **Id:** WithMap
    - **Appearance:** Includes an embedded map next to or below the form.
    - **Behavior:** Map is interactive; user can select or view location.
  - With social links
    - **Id:** WithSocialLinks
    - **Appearance:** Includes icons or links for social/contact methods.
    - **Behavior:** Social/contact links are clickable and may open external apps or sites.

## Container
A responsive wrapper that centers and constrains content width for consistent layouts.
- **Id:** Container
- **Appearance:** A responsive wrapper that centers and constrains content width. May include padding and background.
- **Behavior:** Static. Adjusts size based on screen width and breakpoints.
- **Components:**
  - [Container](components.md#container)
### Variants
  - Responsive wrapper for page content
    - **Id:** ResponsiveWrapper
    - **Appearance:** Centers and constrains content with responsive width.
    - **Behavior:** Adjusts layout responsively.

## Cookie Consent Banner
A banner that informs users about cookie usage and requests their consent.
- **Id:** CookieConsentBanner
- **Appearance:** A horizontal banner at the bottom or top of the page, with message, action buttons, and optional link to privacy policy.
- **Behavior:** Appears on first visit or when required. Dismisses on button click. May store consent in cookies/local storage.
- **Components:**
  - [Alert](components.md#alert)
  - [Button](components.md#button)
  - [Typography](components.md#typography)
  - [Link](components.md#link)
### Variants
  - Consent options
    - **Id:** ConsentOptions
    - **Appearance:** Banner with multiple consent choices (e.g., accept, reject, customize).
    - **Behavior:** User can select consent level; stores choice.
  - Dismiss button
    - **Id:** DismissButton
    - **Appearance:** Banner with a single dismiss/accept button.
    - **Behavior:** User can dismiss banner with one click.

## Drag and Drop
A block enabling drag-and-drop sorting, reordering, or file uploads within a list or grid.
- **Id:** DragAndDrop
- **Appearance:** A list or grid of items with drag handles. Items may be cards, images, or list elements. Dropzone highlights on drag.
- **Behavior:** Items can be reordered or moved between lists by dragging. Supports keyboard and mouse interaction, and drop feedback.
- **Components:**
  - [List](components.md#list)
  - [Card](components.md#card)
  - [Icon](components.md#icon)
  - [Dropzone](components.md#dropzone)
### Variants
  - Sortable list
    - **Id:** SortableList
    - **Appearance:** List of items with drag handles.
    - **Behavior:** Items can be reordered by dragging.
  - Sortable grid
    - **Id:** SortableGrid
    - **Appearance:** Grid of items with drag handles.
    - **Behavior:** Items can be reordered by dragging in a grid layout.
  - File upload (sortable)
    - **Id:** FileUploadSortable
    - **Appearance:** List or grid of uploaded files, each with drag handle.
    - **Behavior:** Files can be reordered by dragging; supports file upload actions.

## Features Section
A section that highlights key features, benefits, or selling points, often arranged in a grid or list.
- **Id:** FeaturesSection
- **Appearance:** A section highlighting key features or benefits, often arranged in a grid or list. Each feature may include an icon, heading, and description.
- **Behavior:** Static by default. May include hover effects, reveal animations, or clickable features for more details.
- **Components:**
  - [Heading](components.md#heading)
  - [Icon](components.md#icon)
  - [Card](components.md#card)
  - [List](components.md#list)
  - [Button](components.md#button)
  - [Grid](components.md#grid)
### Variants
  - Grid
    - **Id:** Grid
    - **Appearance:** Features are arranged in a grid layout.
    - **Behavior:** Static; may support responsive rearrangement.
  - With icons
    - **Id:** WithIcons
    - **Appearance:** Each feature includes an icon.
    - **Behavior:** Icons visually reinforce feature meaning.
  - With images
    - **Id:** WithImages
    - **Appearance:** Each feature includes an image or illustration.
    - **Behavior:** Images may be static or support lightbox/zoom.
  - Steps
    - **Id:** Steps
    - **Appearance:** Features are presented as a numbered or sequential process.
    - **Behavior:** May highlight current step or animate transitions.
  - List
    - **Id:** List
    - **Appearance:** Features are listed vertically with minimal layout.
    - **Behavior:** Static; may support click to expand details.

## Flexbox Layouts
A layout system arranging children in a row or column with flexible sizing and alignment.
- **Id:** FlexboxLayouts
- **Appearance:** A layout system arranging children in a row or column with flexible sizing and alignment. May wrap or justify content.
- **Behavior:** Static. Children are arranged according to flexbox rules. Supports responsive direction and alignment.
- **Components:**
  - [FlexboxLayouts](components.md#flexboxlayouts)
### Variants
  - Flexible row/column arrangements
    - **Id:** FlexibleRowColumnArrangements
    - **Appearance:** Children arranged in flexible rows or columns.
    - **Behavior:** Layout adapts to available space.

## Footers
A section at the bottom of a page containing links, copyright, and additional information.
- **Id:** Footers
- **Appearance:** A section at the bottom of a page with links, copyright, social icons, and optional newsletter signup. May be simple or multi-column.
- **Behavior:** Static by default. Newsletter form submits email. Social icons and links are clickable.
- **Components:**
  - [Link](components.md#link)
  - [Icon](components.md#icon)
  - [Button](components.md#button)
  - [Input](components.md#input)
  - [Typography](components.md#typography)
### Variants
  - Simple
    - **Id:** Simple
    - **Appearance:** Minimal layout with just copyright and a few links.
    - **Behavior:** Static, no interactive elements except links.
  - With links
    - **Id:** WithLinks
    - **Appearance:** Includes additional navigation or resource links.
    - **Behavior:** Links are clickable for navigation.
  - With social icons
    - **Id:** WithSocialIcons
    - **Appearance:** Displays social media icons.
    - **Behavior:** Icons link to social profiles.
  - With newsletter
    - **Id:** WithNewsletter
    - **Appearance:** Includes a newsletter signup form.
    - **Behavior:** Form submits email for newsletter subscription.

## Grid
A layout system dividing content into columns and rows with consistent spacing.
- **Id:** Grid
- **Appearance:** A layout system dividing content into columns and rows with consistent spacing. May be responsive and support gaps.
- **Behavior:** Static. Children are placed in grid cells. Adjusts layout based on screen size.
- **Components:**
  - [Grid](components.md#grid)
### Variants
  - Responsive grid layouts for arranging content
    - **Id:** ResponsiveGridLayouts
    - **Appearance:** Content arranged in a responsive grid.
    - **Behavior:** Grid adapts to screen size.

## Group Layout
A container for arranging child elements in a stack, grid, or flexible layout.
- **Id:** GroupLayout
- **Appearance:** A container for arranging child elements in a stack, grid, or flex layout. May include spacing, alignment, and responsive behavior.
- **Behavior:** Static by default. Children are arranged according to layout rules. May support drag-and-drop or reordering.
- **Components:**
  - [Container](components.md#container)
  - [Grid](components.md#grid)
  - [FlexboxLayouts](components.md#flexboxlayouts)
### Variants
  - Stack
    - **Id:** Stack
    - **Appearance:** Children are arranged vertically with spacing.
    - **Behavior:** Static vertical layout.
  - Grid
    - **Id:** Grid
    - **Appearance:** Children are arranged in a grid with rows and columns.
    - **Behavior:** Static grid layout.
  - Flex
    - **Id:** Flex
    - **Appearance:** Children are arranged in a row or column with flexible sizing.
    - **Behavior:** Static flexbox layout.

## Headers
A section at the top of a page or card, typically containing a title, actions, and navigation aids.
- **Id:** Headers
- **Appearance:** A section at the top of a page or card, with title, breadcrumbs, actions, and optional avatar or search. May include background or divider.
- **Behavior:** Static by default. Actions trigger navigation or open menus. Breadcrumbs are clickable.
- **Components:**
  - [Heading](components.md#heading)
  - [Breadcrumbs](components.md#breadcrumbs)
  - [Button](components.md#button)
  - [Avatar](components.md#avatar)
  - [Icon](components.md#icon)
  - [Searchbox](components.md#searchbox)
### Variants
  - Basic
    - **Id:** Basic
    - **Appearance:** Simple header with title only.
    - **Behavior:** Static, no actions or navigation.
  - With actions
    - **Id:** WithActions
    - **Appearance:** Includes action buttons (e.g., add, edit, delete).
    - **Behavior:** Actions trigger navigation or open dialogs.
  - With breadcrumbs
    - **Id:** WithBreadcrumbs
    - **Appearance:** Includes breadcrumb navigation below or beside the title.
    - **Behavior:** Breadcrumbs are clickable for navigation.
  - With search
    - **Id:** WithSearch
    - **Appearance:** Includes a search input field.
    - **Behavior:** Allows searching from the header.
  - With avatar
    - **Id:** WithAvatar
    - **Appearance:** Includes user avatar or profile picture.
    - **Behavior:** Avatar may open a user menu or profile.
  - Sticky
    - **Id:** Sticky
    - **Appearance:** Header remains fixed at the top of the page when scrolling.
    - **Behavior:** Always visible during scroll.

## Hero
A prominent section at the top of a page, typically featuring a headline, supporting text, and a call-to-action.
- **Id:** Hero
- **Appearance:** A prominent section at the top of a page, typically with a large heading, supporting text, call-to-action button(s), and an image or illustration. May have a background color, gradient, or image.
- **Behavior:** Static by default. Buttons trigger navigation or actions. May include animation or parallax effects.
- **Components:**
  - [Heading](components.md#heading)
  - [Paragraph](components.md#paragraphs)
  - [Button](components.md#button)
  - [Image](components.md#image)
  - [Container](components.md#container)
  - [Icon](components.md#icon)
### Variants
  - Basic hero
    - **Id:** BasicHero
    - **Appearance:** Standard layout with heading, text, and button, no image or special styling.
    - **Behavior:** Static, no animation or interactivity beyond button action.
  - With image
    - **Id:** WithImage
    - **Appearance:** Includes a prominent image or illustration alongside text.
    - **Behavior:** Image may animate or be interactive (e.g., lightbox), otherwise static.
  - With actions
    - **Id:** WithActions
    - **Appearance:** Includes multiple call-to-action buttons or links.
    - **Behavior:** Multiple actions can be triggered from the hero.
  - Centered
    - **Id:** Centered
    - **Appearance:** Content is centered both vertically and horizontally.
    - **Behavior:** No behavioral difference, just layout.
  - Split
    - **Id:** Split
    - **Appearance:** Content and image are split into two columns.
    - **Behavior:** Responsive stacking on small screens.
  - Minimal
    - **Id:** Minimal
    - **Appearance:** Reduced styling, minimal text and elements.
    - **Behavior:** No behavioral difference, just minimal appearance.

## Mega Menu
A large dropdown menu with multiple columns, categories, and rich content for site navigation.
- **Id:** MegaMenu
- **Appearance:** A large dropdown menu with multiple columns, links, icons, and images. Appears below or beside a navigation item.
- **Behavior:** Opens on click or hover. Supports keyboard navigation and responsive layout. Clicking links navigates to pages.
- **Components:**
  - [Dropdown](components.md#dropdown)
  - [Link](components.md#link)
  - [Icon](components.md#icon)
  - [Image](components.md#image)
  - [Grid](components.md#grid)
### Variants
  - With images
    - **Id:** WithImages
    - **Appearance:** Includes images or illustrations in menu columns.
    - **Behavior:** Images may be clickable or static.
  - With columns
    - **Id:** WithColumns
    - **Appearance:** Menu is organized into multiple columns for categories or sections.
    - **Behavior:** Columns group related links for easier navigation.

## Navbars
A horizontal or vertical navigation bar providing links to main sections of a site or app.
- **Id:** Navbars
- **Appearance:** A horizontal or vertical bar with navigation links, logo, and optional user avatar, search, or menu. May be fixed or sticky.
- **Behavior:** Clicking links navigates to pages. Dropdowns open on click/hover. Responsive to screen size (collapsible on mobile).
- **Components:**
  - [Button](components.md#button)
  - [Icon](components.md#icon)
  - [Avatar](components.md#avatar)
  - [Dropdown](components.md#dropdown)
  - [Link](components.md#link)
  - [Badge](components.md#badge)
  - [Searchbox](components.md#searchbox)
### Variants
  - Basic
    - **Id:** Basic
    - **Appearance:** Simple bar with links and logo only.
    - **Behavior:** Static navigation, no dropdowns or user info.
  - With user info
    - **Id:** WithUserInfo
    - **Appearance:** Includes user avatar and name.
    - **Behavior:** User info may open a dropdown or menu.
  - With search
    - **Id:** WithSearch
    - **Appearance:** Includes a search input field.
    - **Behavior:** Allows searching from the navbar.
  - With menu
    - **Id:** WithMenu
    - **Appearance:** Includes dropdown or mega menu.
    - **Behavior:** Dropdown/mega menu opens on click/hover.
  - Collapsible
    - **Id:** Collapsible
    - **Appearance:** Collapses into a hamburger menu on small screens.
    - **Behavior:** Menu toggles open/close on mobile.
  - Vertical
    - **Id:** Vertical
    - **Appearance:** Arranged vertically on the side of the page.
    - **Behavior:** Navigation links stack vertically.
  - Horizontal
    - **Id:** Horizontal
    - **Appearance:** Arranged horizontally at the top of the page.
    - **Behavior:** Navigation links align in a row.

## Page Wrapper
A top-level container that wraps the entire page, providing background, padding, and layout constraints.
- **Id:** PageWrapper
- **Appearance:** A top-level container for the entire page, providing background, padding, and layout constraints.
- **Behavior:** Static. Wraps all page content and ensures consistent spacing.
- **Components:**
  - [Container](components.md#container)
### Variants
  - Main layout container for the whole page
    - **Id:** MainLayoutContainer
    - **Appearance:** Full-page wrapper with consistent padding and background.
    - **Behavior:** Static, wraps all content.

## Responsive Columns
A multi-column layout that adapts to screen size, stacking columns vertically on small screens.
- **Id:** ResponsiveColumns
- **Appearance:** A multi-column layout that adapts to screen size, stacking columns vertically on small screens.
- **Behavior:** Static. Columns adjust or stack responsively. May support equal or variable widths.
- **Components:**
  - [Grid](components.md#grid)
  - [Card](components.md#card)
  - [Typography](components.md#typography)
### Variants
  - Multi-column layouts that adapt to screen size
    - **Id:** MultiColumnLayouts
    - **Appearance:** Multiple columns that stack on small screens.
    - **Behavior:** Columns rearrange responsively.

## Section
A content area used to separate and organize different parts of a page.
- **Id:** Section
- **Appearance:** A content area with optional heading, divider, and background. Used to separate page content into logical parts.
- **Behavior:** Static. May support show/hide or expand/collapse for content.
- **Components:**
  - [Container](components.md#container)
  - [Heading](components.md#heading)
  - [Typography](components.md#typography)
  - [DividerSeparator](components.md#dividerseparator)
### Variants
  - Themed or separated page areas (with background, with divider)
    - **Id:** ThemedOrSeparatedPageAreas
    - **Appearance:** Section with themed background or divider.
    - **Behavior:** Static or may support expand/collapse.

## Sidebar
A vertical panel providing navigation links, actions, or additional content alongside the main area.
- **Id:** Sidebar
- **Appearance:** A vertical panel with navigation links, icons, and optional avatar or actions. May be collapsible or fixed.
- **Behavior:** Clicking links navigates to sections. May expand/collapse on toggle. Supports keyboard navigation.
- **Components:**
  - [List](components.md#list)
  - [Link](components.md#link)
  - [Icon](components.md#icon)
  - [Button](components.md#button)
  - [Avatar](components.md#avatar)
### Variants
  - Vertical navigation or content area
    - **Id:** VerticalNavigationOrContentArea
    - **Appearance:** Vertical panel with navigation links and content.
    - **Behavior:** Navigation links stack vertically; may expand/collapse.

## Split Layout
A layout dividing content into two or more columns, often with image and text side by side.
- **Id:** SplitLayout
- **Appearance:** A layout with two or more columns, typically with image on one side and text on the other. May be responsive and stack on small screens.
- **Behavior:** Static. Columns adjust or stack based on screen size. May support animation or reveal effects.
- **Components:**
  - [Container](components.md#container)
  - [Grid](components.md#grid)
  - [Image](components.md#image)
  - [Typography](components.md#typography)
  - [Button](components.md#button)
### Variants
  - Side-by-side content, e.g., image + text
    - **Id:** SideBySideContent
    - **Appearance:** Two columns, one with image, one with text.
    - **Behavior:** Columns stack on small screens.

## Stats
A section displaying key metrics, statistics, or trends, often in a grid or card layout.
- **Id:** Stats
- **Appearance:** A section with one or more statistic cards, each showing a number, label, icon, and optional trend or progress bar.
- **Behavior:** Numbers may animate on load. Cards may be clickable for more details. Updates dynamically with data.
- **Components:**
  - [Statistic](components.md#statistic)
  - [Icon](components.md#icon)
  - [Card](components.md#card)
  - [Progress](components.md#progress)
  - [Badge](components.md#badge)
### Variants
  - Stat grid
    - **Id:** StatGrid
    - **Appearance:** Statistics are arranged in a grid layout.
    - **Behavior:** Static or may animate numbers.
  - Stat with icon
    - **Id:** StatWithIcon
    - **Appearance:** Each stat includes an icon.
    - **Behavior:** Icon visually reinforces the stat meaning.
  - Stat with progress
    - **Id:** StatWithProgress
    - **Appearance:** Includes a progress bar or indicator.
    - **Behavior:** Progress bar animates to show value.
  - Stat card
    - **Id:** StatCard
    - **Appearance:** Each stat is displayed in a card with border or shadow.
    - **Behavior:** Card may be clickable for more details.
  - Stat list
    - **Id:** StatList
    - **Appearance:** Statistics are listed vertically.
    - **Behavior:** Static, no interactivity.
  - Stat with chart
    - **Id:** StatWithChart
    - **Appearance:** Includes a small chart or sparkline.
    - **Behavior:** Chart animates or updates with data.
  - Stat with description
    - **Id:** StatWithDescription
    - **Appearance:** Includes a descriptive text below the stat.
    - **Behavior:** Static, provides additional context.
  - Stat with actions
    - **Id:** StatWithActions
    - **Appearance:** Includes action buttons or links.
    - **Behavior:** Actions trigger navigation or updates.
  - Stat with avatar
    - **Id:** StatWithAvatar
    - **Appearance:** Includes an avatar or user image.
    - **Behavior:** Avatar may link to user profile.
  - Stat with badge
    - **Id:** StatWithBadge
    - **Appearance:** Includes a badge to indicate status or change.
    - **Behavior:** Badge updates dynamically with status.

## Table of Contents
A navigational block listing links to sections within a page for easy access.
- **Id:** TableOfContents
- **Appearance:** A vertical or horizontal list of links to sections of a page. May be styled as a sidebar or sticky element.
- **Behavior:** Clicking a link scrolls to the section. Highlights the active section as user scrolls. May collapse/expand for long lists.
- **Components:**
  - [List](components.md#list)
  - [Link](components.md#link)
  - [Heading](components.md#heading)
### Variants
  - Simple
    - **Id:** Simple
    - **Appearance:** Basic list of links, no sticky or advanced styling.
    - **Behavior:** Static navigation, no highlight or sticky behavior.
  - Sticky
    - **Id:** Sticky
    - **Appearance:** List is fixed to the viewport as user scrolls.
    - **Behavior:** Remains visible while scrolling, may highlight active section.

## TeamSection
A section showcasing team members, their roles, and contact information.
- **Id:** TeamSection
- **Appearance:** A section with team member profiles, including avatar, name, role, and contact links. May be arranged in a grid or list.
- **Behavior:** Static by default. Profiles may be clickable or support hover effects. Contact links open email or social profiles.
- **Components:**
  - [Avatar](components.md#avatar)
  - [Card](components.md#card)
  - [Grid](components.md#grid)
  - [List](components.md#list)
  - [Link](components.md#link)
  - [Typography](components.md#typography)
### Variants
  - Grid
    - **Id:** Grid
    - **Appearance:** Team members are arranged in a grid layout.
    - **Behavior:** Static; may support responsive rearrangement.
  - List
    - **Id:** List
    - **Appearance:** Team members are listed vertically.
    - **Behavior:** Static; may support click to expand details.

## User Info and Controls
A block presenting user profile information and related actions or settings.
- **Id:** UserInfoAndControls
- **Appearance:** A section or card with user avatar, name, status, and controls (dropdown, toggle, actions). May include stats or settings.
- **Behavior:** Controls trigger actions (e.g., switch user, open menu). Status updates in real time. Supports keyboard navigation.
- **Components:**
  - [Avatar](components.md#avatar)
  - [Dropdown](components.md#dropdown)
  - [Button](components.md#button)
  - [List](components.md#list)
  - [Badge](components.md#badge)
  - [Card](components.md#card)
  - [Toggle](components.md#toggle)
  - [Collapse](components.md#collapse)
### Variants
  - Profile menu
    - **Id:** ProfileMenu
    - **Appearance:** Dropdown or menu with user actions (profile, logout, etc.).
    - **Behavior:** Menu opens on click; actions trigger navigation or dialogs.
  - User card
    - **Id:** UserCard
    - **Appearance:** Card layout with user info and controls.
    - **Behavior:** Card may be clickable or support inline actions.
  - User dropdown
    - **Id:** UserDropdown
    - **Appearance:** Dropdown with user info and settings.
    - **Behavior:** Dropdown opens on click; settings/actions available.
  - User avatar with status
    - **Id:** UserAvatarWithStatus
    - **Appearance:** Avatar includes a status indicator (dot, color, etc.).
    - **Behavior:** Status updates in real time.
  - User settings
    - **Id:** UserSettings
    - **Appearance:** Section or modal for user preferences/settings.
    - **Behavior:** Allows updating and saving settings.
  - User stats
    - **Id:** UserStats
    - **Appearance:** Displays user-related statistics (posts, followers, etc.).
    - **Behavior:** Stats update dynamically.
  - User switcher
    - **Id:** UserSwitcher
    - **Appearance:** Control to switch between multiple users/accounts.
    - **Behavior:** Changes active user context.
  - User badge
    - **Id:** UserBadge
    - **Appearance:** Badge or label indicating user role/status.
    - **Behavior:** Badge updates with user status/role.
  - User list
    - **Id:** UserList
    - **Appearance:** List of users with avatars and names.
    - **Behavior:** List may be selectable or support actions.
