# NovyUI Pages

This document provides an overview of all page templates and layouts available in NovyUI. Each page combines blocks and components to address common application and website needs. Use this file to explore, plan, or implement pages in your project. Each section includes a brief one-line description to help you quickly understand the page's role.

- [Activity](#activity)
- [App Shell](#app-shell)
- [Authentication](#authentication)
- [Blog](#blog)
- [Calendar Page](#calendar-page)
- [Contact](#contact)
- [Dashboard](#dashboard)
- [Data Table](#data-table)
- [Download](#download)
- [E-Commerce Checkout](#e-commerce-checkout)
- [E-Commerce](#e-commerce)
- [Editor](#editor)
- [Error](#error)
- [FAQ](#faq)
- [File Management](#file-management)
- [Landing](#landing)
- [Legal](#legal)
- [Login and Security](#login-and-security)
- [Messaging](#messaging)
- [Onboarding](#onboarding)
- [Portfolio](#portfolio)
- [Product Page](#product-page)
- [Profile](#profile)
- [Roadmap](#roadmap)
- [Settings](#settings)
- [Team](#team)
- [User Profile](#user-profile)

## Activity
A feed page showing recent activity, notifications, or events, often with filters and grouping.
- **Id:** Activity
- **Appearance:** A vertical list of activity items, each with icon, description, and timestamp. May include filters, grouping by date, and navigation to details.
- **Behavior:** Updates dynamically with new activity. Supports filtering, marking as read, and navigation to details.
- **Blocks:**
  - [ActivityFeed](blocks.md#activityfeed)
  - [Footers](blocks.md#footers)
### Variants
#### Activity feed
- **Id:** ActivityFeed
- **Appearance:** Simple activity feed with list of items and timestamps.
- **Behavior:** Static or updates in real time.
#### Notifications
- **Id:** Notifications
- **Appearance:** List of notifications with timestamps.
- **Behavior:** Supports marking notifications as read.

## App Shell
A structural layout providing navigation, sidebar, and main content area for app-like experiences.
- **Id:** AppShell
- **Appearance:** A layout with sidebar, topbar, and main content area. Includes navigation links, user info, and responsive design. Navbars and sidebars may include logo, links, user avatar, search, and dropdown/mega menus.
- **Behavior:** Sidebar may collapse/expand. Navigation links update main content. Supports keyboard navigation, accessibility, and responsive design. Global command palette opens with shortcut. Mobile navigation drawer and mega menu open on click/hover.
- **Blocks:**
  - [Navbars](blocks.md#navbars)
  - [Sidebar](blocks.md#sidebar)
  - [Footers](blocks.md#footers)
  - [GlobalCommandPalette](blocks.md#global-command-palette)
  - [MobileNavigationDrawer](blocks.md#mobile-navigation-drawer)
  - [MegaMenu](blocks.md#mega-menu)
### Variants
#### Sidebar layout
- **Id:** SidebarLayout
- **Appearance:** Layout with a collapsible sidebar and main content area.
- **Behavior:** Sidebar can be collapsed or expanded.
#### Topbar layout
- **Id:** TopbarLayout
- **Appearance:** Layout with a topbar and main content area.
- **Behavior:** Topbar contains navigation links and user info.
#### Responsive shell
- **Id:** ResponsiveShell
- **Appearance:** Responsive layout that adapts to different screen sizes.
- **Behavior:** Supports responsive design and navigation.

## Authentication
A page for user login, registration, and password management, providing secure access to the application.
- **Id:** Authentication
- **Appearance:** A page with a centered card or form for login, registration, or password reset. Includes input fields, labels, buttons, and links for navigation between forms. May be centered or in a card.
- **Behavior:** Submits user credentials or registration info. Shows validation errors and loading state. May redirect or show success message on completion.
- **Blocks:**
  - [Authentication](blocks.md#authentication)
  - [Footers](blocks.md#footers)
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

## Blog
A content-driven page listing articles, with support for reading, commenting, and filtering posts.
- **Id:** Blog
- **Appearance:** A page with a list or grid of articles, each with image, title, excerpt, author avatar, tags, and action buttons. Article page shows full content, comments, and related posts. May include section dividers and navigation.
- **Behavior:** Clicking an article opens the full post. Supports pagination, filtering, and commenting. Comments may be threaded and support moderation. Table of contents enables navigation within articles.
- **Blocks:**
  - [Navbars](blocks.md#navbars)
  - [Headers](blocks.md#headers)
  - [ArticleCards](blocks.md#article-cards)
  - [TableOfContents](blocks.md#table-of-contents)
  - [Comments](blocks.md#comments)
  - [Footers](blocks.md#footers)
  - [Section](blocks.md#section)
### Variants
#### Blog home
- **Id:** BlogHome
- **Appearance:** List or grid of articles with images, excerpts, author, and tags.
- **Behavior:** Allows filtering, pagination, and navigation to article details.
#### Article Detail
- **Id:** ArticleDetail
- **Appearance:** Full content of a single article with comments section and table of contents.
- **Behavior:** Allows commenting, sharing, and navigation within the article.
#### Author profile
- **Id:** AuthorProfile
- **Appearance:** Profile of the author with bio, avatar, and list of articles.
- **Behavior:** Static display of author information only.
#### Categories and Tags
- **Id:** CategoriesAndTags
- **Appearance:** List of categories or tags for filtering articles.
- **Behavior:** Allows filtering articles by category or tag.
#### Comments
- **Id:** Comments
- **Appearance:** List of comments with input field for new comments, may be threaded.
- **Behavior:** Allows adding, replying, editing, and moderating comments.

## Calendar Page
A scheduling page with calendar views, event lists, and event management features.
- **Id:** CalendarPage
- **Appearance:** A page with a calendar view (month, week), event list, and event details. May include filters, navigation controls, and add event button.
- **Behavior:** Clicking a date or event shows details. Supports adding, editing, and deleting events. Responsive layout. Calendar grid highlights today and event days.
- **Blocks:**
  - [Calendar](blocks.md#calendar)
  - [Footers](blocks.md#footers)
### Variants
#### Month view
- **Id:** MonthView
- **Appearance:** Calendar shows a full month with event markers.
- **Behavior:** User can select dates and view events for the month.
#### Week view
- **Id:** WeekView
- **Appearance:** Calendar shows a single week with event markers.
- **Behavior:** User can select dates and view events for the week.
#### Event details
- **Id:** EventDetails
- **Appearance:** Detailed view of a single event with all info.
- **Behavior:** Allows editing and deleting events.

## Contact
A page for users to get in touch, featuring a contact form, details, and optional map or links.
- **Id:** Contact
- **Appearance:** A section with a contact form (inputs, textarea, button), contact details, and optional map or icons for communication methods. May be split into form and info sections.
- **Behavior:** Submits form data, shows validation and success/error messages. May include interactive map or clickable contact links.
- **Blocks:**
  - [ContactCard](blocks.md#contact-card)
  - [Footers](blocks.md#footers)
### Variants
#### Contact form
- **Id:** ContactForm
- **Appearance:** Standard contact form with input fields.
- **Behavior:** Submits form data and shows validation messages.
#### With map
- **Id:** WithMap
- **Appearance:** Contact form with an embedded map next to or below the form.
- **Behavior:** Map is interactive; user can select or view location. Submits form data and shows validation messages.
#### Support/help
- **Id:** SupportHelp
- **Appearance:** Contact form with additional fields for support queries.
- **Behavior:** Submits form data and shows validation messages.

## Dashboard
A summary page displaying key metrics, charts, and recent activity for quick insights and navigation.
- **Id:** Dashboard
- **Appearance:** A page with a navigation bar, header, and a grid or cards showing key metrics, charts, recent activity, and quick links. May include tables, stats, notifications, and responsive columns.
- **Behavior:** Widgets update dynamically with data. Cards and charts may be interactive (clickable, filterable). Supports responsive layout and navigation. Activity feed and stats may animate or update in real time.
- **Blocks:**
  - [Navbars](blocks.md#navbars)
  - [Headers](blocks.md#headers)
  - [Stats](blocks.md#stats)
  - [TableOfContents](blocks.md#table-of-contents)
  - [ArticleCards](blocks.md#article-cards)
  - [ActivityFeed](blocks.md#activityfeed)
  - [Footers](blocks.md#footers)
  - [GroupLayout](blocks.md#group-layout)
  - [ResponsiveColumns](blocks.md#responsive-columns)
### Variants
#### Overview
- **Id:** Overview
- **Appearance:** Shows a summary of key metrics and widgets in a grid or card layout.
- **Behavior:** Static display or periodically refreshed; provides a high-level snapshot only.
#### Analytics
- **Id:** Analytics
- **Appearance:** Focuses on charts, graphs, and data visualizations.
- **Behavior:** Interactive charts with filtering and drill-down capabilities.
#### Sales
- **Id:** Sales
- **Appearance:** Highlights sales figures, revenue, and related KPIs in a dedicated section.
- **Behavior:** Includes sales filters, time range selectors, and dynamic updates.
#### User activity
- **Id:** UserActivity
- **Appearance:** Displays recent user actions, activity feeds, or engagement stats.
- **Behavior:** Updates in real time or on refresh; supports filtering by user or type.

## Data Table
A data-centric page for displaying tables or lists with filtering, sorting, and actions.
- **Id:** DataTable
- **Appearance:** A page with a data table or list, filters, and actions. May include pagination, search, and bulk actions. Table rows and columns may include action buttons and inline editing.
- **Behavior:** Supports sorting, filtering, pagination, selection, and inline actions. Responsive layout for mobile.
- **Blocks:**
  - [TableOfContents](blocks.md#table-of-contents)
  - [ArticleCards](blocks.md#article-cards)
  - [Footers](blocks.md#footers)
### Variants
#### Data table
- **Id:** DataTable
- **Appearance:** Table with rows and columns of data, may include filters and actions.
- **Behavior:** Supports sorting and filtering of data.
#### List with actions
- **Id:** ListWithActions
- **Appearance:** List of items with action buttons.
- **Behavior:** Supports inline actions on list items.
#### Filterable and Sortable Table
- **Id:** FilterableAndSortableTable
- **Appearance:** Table with filters and sorting options.
- **Behavior:** Supports filtering and sorting of data.

## Download
A page offering downloads for apps or resources, with links, QR codes, and instructions.
- **Id:** Download
- **Appearance:** A section with download buttons, platform icons, and QR codes. May include instructions and version info.
- **Behavior:** Clicking a button starts download or opens app store. May show version info or track downloads.
- **Blocks:**
  - [AppDownloadSection](blocks.md#appdownloadsection)
  - [Footers](blocks.md#footers)
### Variants
#### App download
- **Id:** AppDownload
- **Appearance:** List of download links or buttons for apps, may include QR codes and platform icons.
- **Behavior:** Clicking a button starts the download or opens the app store.
#### Resources
- **Id:** Resources
- **Appearance:** List of downloadable resources with descriptions.
- **Behavior:** Clicking a link starts the download.

## E-Commerce Checkout
A page for checkout with sticky cart summary and loading overlay.
- **Id:** ECommerceCheckout
- **Appearance:** Checkout form, sticky cart summary box affixed to the side or bottom, and loading overlay during processing.
- **Behavior:** Validates input, processes payment, and completes purchase. Loading overlay appears during processing. Cart summary remains visible as user scrolls.
- **Blocks:**
  - [Checkout](blocks.md#checkout)
  - [StickyCartSummary](blocks.md#sticky-cart-summary)
  - [PageLoaderOverlay](blocks.md#page-loader-overlay)
### Variants
#### Standard Checkout
- **Id:** StandardCheckout
- **Appearance:** Checkout form with cart summary and loading overlay.
- **Behavior:** User completes purchase with real-time feedback. Cart summary is sticky during checkout.

## E-Commerce
A set of pages for browsing products, viewing details, managing a cart, and completing purchases.
- **Id:** ECommerce
- **Appearance:** Product listing grid, product detail pages, cart, and checkout forms. Includes images, prices, filters, and action buttons. Order history and wishlist are available as lists or tables.
- **Behavior:** Add/remove items to cart, update quantities, filter/sort products, and complete checkout. Supports responsive layout and navigation. Order history allows viewing details; wishlist allows moving items to cart.
- **Blocks:**
  - [Navbars](blocks.md#navbars)
  - [Headers](blocks.md#headers)
  - [ArticleCards](blocks.md#article-cards)
  - [TableOfContents](blocks.md#table-of-contents)
  - [Footers](blocks.md#footers)
  - [OrderHistory](blocks.md#order-history)
  - [Wishlist](blocks.md#wishlist)
### Variants
#### Product listing
- **Id:** ProductListing
- **Appearance:** Grid of products with images, prices, and action buttons.
- **Behavior:** Allows filtering and sorting of products.
#### Product details
- **Id:** ProductDetails
- **Appearance:** Detailed view of a single product with images and descriptions.
- **Behavior:** Allows adding product to cart.
#### Cart
- **Id:** Cart
- **Appearance:** List or table of items in the cart with quantities and prices.
- **Behavior:** Allows updating quantities and removing items from the cart.
#### Checkout
- **Id:** Checkout
- **Appearance:** Form for entering shipping and payment information.
- **Behavior:** Completes the purchase process and validates input.
#### Order history
- **Id:** OrderHistory
- **Appearance:** List or table of past orders with dates, status, and details link.
- **Behavior:** Allows viewing order details and status. May include filters for status/date.
#### Wishlist
- **Id:** Wishlist
- **Appearance:** List or grid of saved products for future purchase.
- **Behavior:** Allows adding/removing items from the wishlist and moving items to cart.

## Editor
A page for writing and formatting blog posts with tags and a formatting toolbar.
- **Id:** Editor
- **Appearance:** Rich text editor with formatting toolbar, tag input, and content area.
- **Behavior:** Supports text formatting, tagging, and live preview. Tag input allows adding/removing tags, and toolbar provides formatting options.
- **Blocks:**
  - [BlogPostEditor](blocks.md#blog-post-editor)
  - [BlogPostTagging](blocks.md#blog-post-tagging)
  - [TextEditorToolbar](blocks.md#text-editor-toolbar)
### Variants
#### Blog Post Editor
- **Id:** BlogPostEditor
- **Appearance:** Editor for writing and formatting blog posts, with tag input and formatting toolbar.
- **Behavior:** Supports text formatting, tagging, and preview.

## Error
A page for displaying error messages, such as 404 or 500, with navigation options for recovery.
- **Id:** Error
- **Appearance:** A page with a large error code/message, icon or illustration, and navigation buttons. May be minimal or branded.
- **Behavior:** Static or may auto-redirect or provide links for user action.
- **Blocks:**
  - [Error](blocks.md#error)
  - [Footers](blocks.md#footers)
### Variants
#### 404 Not Found
- **Id:** NotFound
- **Appearance:** Large "404 Not Found" message with navigation options.
- **Behavior:** Static display with possible auto-redirect.
#### 500 Internal Error
- **Id:** InternalError
- **Appearance:** Large "500 Internal Error" message with navigation options.
- **Behavior:** Static display with possible auto-redirect.
#### Maintenance
- **Id:** Maintenance
- **Appearance:** Message indicating the site is under maintenance.
- **Behavior:** Static display with possible auto-redirect.
#### Access Denied
- **Id:** AccessDenied
- **Appearance:** Message indicating access is denied.
- **Behavior:** Static display with possible auto-redirect.
#### Coming Soon
- **Id:** ComingSoon
- **Appearance:** Message indicating the feature is coming soon.
- **Behavior:** Static display with possible auto-redirect.

## FAQ
A page presenting frequently asked questions and answers, often with search and categories.
- **Id:** FAQ
- **Appearance:** A page with a list or accordion of frequently asked questions and answers. May include search and categories.
- **Behavior:** Allows expanding/collapsing answers, searching/filtering questions, and navigation. Search input filters questions in real time.
- **Blocks:**
  - [FAQ](blocks.md#faq)
  - [Footers](blocks.md#footers)
### Variants
#### Frequently asked questions
- **Id:** FrequentlyAskedQuestions
- **Appearance:** Simple list or accordion of questions and answers.
- **Behavior:** Static display, no interactivity.
#### Searchable FAQ
- **Id:** SearchableFAQ
- **Appearance:** FAQ with a search bar for filtering questions.
- **Behavior:** User can search and filter questions.

## File Management
A page for browsing files, assigning roles, and file actions.
- **Id:** FileManagement
- **Appearance:** File explorer with expandable/collapsible folders and files, user role assignment, and context menu for file actions. Drag-and-drop enables sorting or file uploads.
- **Behavior:** Allows navigation, selection, file management actions (rename, delete, etc.), assigning users to roles, and drag-and-drop sorting or uploads. Context menu opens on right-click.
- **Blocks:**
  - [FileExplorer](blocks.md#file-explorer)
  - [UserRoleAssignment](blocks.md#user-role-assignment)
  - [FileActionsContextMenu](blocks.md#file-actions-context-menu)
  - [DragAndDrop](blocks.md#drag-and-drop)
### Variants
#### File Explorer
- **Id:** FileExplorer
- **Appearance:** File browser with folder tree, file actions, and drag handles.
- **Behavior:** Allows navigation, selection, file management, and drag-and-drop sorting.

## Landing
A marketing page designed to introduce a product or service, highlight features, and drive conversions.
- **Id:** Landing
- **Appearance:** A marketing-focused page with hero, features, testimonials, pricing, and call-to-action sections. Uses bold visuals, clear messaging, banners, carousels, and cookie consent banner.
- **Behavior:** Static by default. Buttons trigger navigation or actions. May include animations, interactive carousels, and cookie consent interactions.
- **Blocks:**
  - [Hero](blocks.md#hero)
  - [FeaturesSection](blocks.md#features-section)
  - [Banners](blocks.md#banners)
  - [Testimonials](blocks.md#testimonials)
  - [PricingTable](blocks.md#pricingtable)
  - [CallToActionSection](blocks.md#calltoactionsection)
  - [Footers](blocks.md#footers)
  - [Carousels](blocks.md#carousels)
  - [CookieConsentBanner](blocks.md#cookie-consent-banner)
### Variants
#### Marketing homepage
- **Id:** MarketingHomepage
- **Appearance:** Hero section with bold visuals and clear messaging.
- **Behavior:** Static display with navigation buttons.
#### Features
- **Id:** Features
- **Appearance:** List or grid of features with icons and descriptions.
- **Behavior:** Static display of features only.
#### Pricing
- **Id:** Pricing
- **Appearance:** Pricing table with different plans and features.
- **Behavior:** Static display of pricing information only.
#### Testimonials
- **Id:** Testimonials
- **Appearance:** List or carousel of testimonials with user photos and quotes.
- **Behavior:** Static display or auto-advancing carousel.
#### Call to action
- **Id:** CallToAction
- **Appearance:** Section with a strong call-to-action button.
- **Behavior:** Button triggers navigation or action.

## Legal
A page for legal documents such as privacy policy or terms of service, with headings and navigation.
- **Id:** Legal
- **Appearance:** A page with legal text, such as privacy policy or terms of service. May include headings, links, and last updated date.
- **Behavior:** Static display, may support search or navigation within the document.
- **Blocks:**
  - [Legal](blocks.md#legal)
  - [Footers](blocks.md#footers)
### Variants
#### Privacy policy
- **Id:** PrivacyPolicy
- **Appearance:** Legal text with headings and links.
- **Behavior:** Static display of privacy policy only.
#### Terms of service
- **Id:** TermsOfService
- **Appearance:** Legal text with headings and links.
- **Behavior:** Static display of terms of service only.

## Login and Security
A page for user authentication, including two-factor verification.
- **Id:** LoginAndSecurity
- **Appearance:** Login form with optional two-factor authentication step. May include PinInput for code entry.
- **Behavior:** User logs in, then verifies with a code. Two-factor authentication form validates and submits code.
- **Blocks:**
  - [Authentication](blocks.md#authentication)
  - [TwoFactorAuthentication](blocks.md#two-factor-authentication)
### Variants
#### Login with 2FA
- **Id:** LoginWith2FA
- **Appearance:** Login form followed by two-factor authentication step with PinInput.
- **Behavior:** User logs in and verifies with a code.

## Messaging
A page for chat with scrollable message list and user popovers.
- **Id:** Messaging
- **Appearance:** Chat message list in a vertically scrollable area, with user profile popover on avatar hover or click.
- **Behavior:** Scrolls to newest message, supports infinite scroll. User popover opens on hover/click and closes on outside click.
- **Blocks:**
  - [ChatMessageList](blocks.md#chat-message-list)
  - [UserProfilePopover](blocks.md#user-profile-popover)
### Variants
#### Direct Messages
- **Id:** DirectMessages
- **Appearance:** One-on-one chat with message list and user popover.
- **Behavior:** Real-time messaging and user info on hover/click.

## Onboarding
A multi-step guide or wizard to help new users get started with the application.
- **Id:** Onboarding
- **Appearance:** A multi-step guide or wizard with progress indicator, instructions, and forms. May include illustrations, checklists, and video instructions.
- **Behavior:** Navigates between steps, validates input, and shows completion message. Supports back/next navigation. May include video instructions for each step.
- **Blocks:**
  - [OnboardingSteps](blocks.md#onboardingsteps)
  - [Footers](blocks.md#footers)
### Variants
#### Welcome
- **Id:** Welcome
- **Appearance:** Introduction screen with welcome message and instructions.
- **Behavior:** Static display with navigation to next step.
#### Step-by-step guide
- **Id:** StepByStepGuide
- **Appearance:** Multi-step form with progress indicator. May include video instructions.
- **Behavior:** Validates input and navigates between steps.
#### Completion
- **Id:** Completion
- **Appearance:** Final screen with completion message and next steps.
- **Behavior:** Static display with possible navigation options.

## Portfolio
A showcase page for projects or work samples, with filtering and detailed views.
- **Id:** Portfolio
- **Appearance:** A grid or list of projects, each with image, title, and description. Project detail page shows full info and images. May include carousels and split layouts for project presentation.
- **Behavior:** Clicking a project opens details. Supports filtering, sorting, responsive layout, and carousel navigation for images.
- **Blocks:**
  - [Hero](blocks.md#hero)
  - [ArticleCards](blocks.md#article-cards)
  - [Footers](blocks.md#footers)
  - [Carousels](blocks.md#carousels)
  - [SplitLayout](blocks.md#split-layout)
### Variants
#### Projects grid
- **Id:** ProjectsGrid
- **Appearance:** Grid of projects with images and titles.
- **Behavior:** Allows filtering and sorting of projects.
#### Project details
- **Id:** ProjectDetails
- **Appearance:** Detailed view of a single project with images, descriptions, and carousel.
- **Behavior:** Static display of project details only.

## Product Page
A page for viewing product details and submitting reviews.
- **Id:** ProductPage
- **Appearance:** Product information, images, reviews, and review submission form. May include add-to-cart button and user-uploaded review images.
- **Behavior:** User can view product details, submit reviews (with optional images), and add to cart. Reviews are displayed with ratings and may include images.
- **Blocks:**
  - [ProductDetails](blocks.md#product-details)
  - [ProductReview](blocks.md#product-review)
### Variants
#### Product Details
- **Id:** ProductDetails
- **Appearance:** Product information with reviews, add-to-cart, and review images.
- **Behavior:** User can view details, submit reviews (with images), and add to cart.

## Profile
A user-focused page showing personal details, avatar, and editable profile information.
- **Id:** Profile
- **Appearance:** A page showing user avatar, name, profile details, and editable fields. May include tabs for account, settings, and activity.
- **Behavior:** Allows editing and saving profile info. Supports avatar upload, validation, navigation between sections, and user stats or badges. User info and controls may include dropdowns, cards, or status indicators.
- **Blocks:**
  - [Headers](blocks.md#headers)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
  - [ArticleCards](blocks.md#article-cards)
  - [Footers](blocks.md#footers)
### Variants
#### User profile
- **Id:** UserProfile
- **Appearance:** Displays user information and avatar in a static layout.
- **Behavior:** Static display of user details only.
#### Edit profile
- **Id:** EditProfile
- **Appearance:** Editable fields for user information, with save/cancel controls.
- **Behavior:** Allows updating and saving profile details.
#### Account settings
- **Id:** AccountSettings
- **Appearance:** Tabs or sections for different account settings.
- **Behavior:** Allows updating settings and saving changes.

## Roadmap
A timeline or milestone page outlining planned features, releases, or project progress.
- **Id:** Roadmap
- **Appearance:** A timeline or list of milestones, releases, or planned features. May include dates, status, and descriptions.
- **Behavior:** Static or interactive (expand/collapse, filter by status). May animate on scroll.
- **Blocks:**
  - [Roadmap](blocks.md#roadmap)
  - [Footers](blocks.md#footers)
### Variants
#### Timeline
- **Id:** Timeline
- **Appearance:** Timeline view of milestones and releases.
- **Behavior:** Static display with possible animations.
#### Milestones
- **Id:** Milestones
- **Appearance:** List of milestones with dates and descriptions.
- **Behavior:** Static display with possible animations.

## Settings
A page for managing user or application preferences, grouped into categories like general, security, and notifications.
- **Id:** Settings
- **Appearance:** A page with grouped settings forms, toggles, and inputs. May use tabs or sections for categories (general, security, notifications, billing). Includes keyboard shortcuts help and image brightness adjustment.
- **Behavior:** Allows updating settings, toggling switches, and saving changes. Shows validation and success/error messages. Tabs organize settings by category; keyboard shortcuts help and image brightness adjustment are interactive.
- **Blocks:**
  - [Headers](blocks.md#headers)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
  - [Footers](blocks.md#footers)
  - [SettingsTabs](blocks.md#settings-tabs)
  - [KeyboardShortcutsHelp](blocks.md#keyboard-shortcuts-help)
  - [ImageBrightnessAdjustment](blocks.md#image-brightness-adjustment)
### Variants
#### General settings
- **Id:** GeneralSettings
- **Appearance:** General settings form with various input fields.
- **Behavior:** Allows updating general settings and saving changes.
#### Security
- **Id:** Security
- **Appearance:** Security settings form with password and 2FA options.
- **Behavior:** Allows updating security settings and saving changes.
#### Notifications
- **Id:** Notifications
- **Appearance:** Notification settings form with toggles for different notifications.
- **Behavior:** Allows updating notification preferences and saving changes.
#### Billing
- **Id:** Billing
- **Appearance:** Billing settings form with payment method and billing info.
- **Behavior:** Allows updating billing information and saving changes.

## Team
A page introducing team members, their roles, and profiles, often with photos and bios.
- **Id:** Team
- **Appearance:** A section with team member profiles, including avatar, name, role, and contact links. May be arranged in a grid or list, and may include group photo or sections by team.
- **Behavior:** Static by default. Profiles may be clickable or support hover effects. Contact links open email or social profiles.
- **Blocks:**
  - [TeamSection](blocks.md#teamsection)
  - [Footers](blocks.md#footers)
### Variants
#### Team members
- **Id:** TeamMembers
- **Appearance:** List or grid of team members with avatars and roles.
- **Behavior:** Static display of team member information only.
#### Member profile
- **Id:** MemberProfile
- **Appearance:** Detailed profile of a team member with bio and contact info.
- **Behavior:** Static display of member profile only.

## User Profile
A page for managing user profile, theme, and notification preferences.
- **Id:** UserProfile
- **Appearance:** Profile info, theme color picker, and notification toggles. May include user stats, avatar, and editable fields.
- **Behavior:** User can update profile info, pick a theme color, and toggle notification preferences. Theme updates in real time; notification toggles update preferences. Supports saving changes and updating user info.
- **Blocks:**
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
  - [ProfileThemeCustomization](blocks.md#profile-theme-customization)
  - [NotificationPreferences](blocks.md#notification-preferences)
### Variants
#### Profile Overview
- **Id:** ProfileOverview
- **Appearance:** User profile with theme and notification settings.
- **Behavior:** User can update profile info, theme, and preferences.

