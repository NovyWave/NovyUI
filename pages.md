# NovyUI Pages

This document provides an overview of all page templates and layouts available in NovyUI. Each page combines blocks and components to address common application and website needs. Use this file to explore, plan, or implement pages in your project. Each section includes a brief one-line description to help you quickly understand the page's role.

- [Activity](#activity)
- [App Shell](#app-shell)
- [Authentication](#authentication)
- [Blog](#blog)
- [Calendar](#calendarpage)
- [Contact](#contact)
- [Dashboard](#dashboard)
- [Data Table](#datatable)
- [Download](#download)
- [E-commerce](#e-commerce)
- [Error](#error)
- [FAQ](#faq)
- [Landing](#landing)
- [Legal](#legal)
- [Onboarding](#onboarding)
- [Portfolio](#portfolio)
- [Profile](#profile)
- [Roadmap](#roadmap)
- [Settings](#settings)
- [Team](#team)

## Activity
A feed page showing recent activity, notifications, or events, often with filters and grouping.
- **Id:** Activity
- **Appearance:** A page with a feed of recent activity, notifications, or events. May include filters and grouping by date.
- **Behavior:** Updates dynamically with new activity. Supports marking as read, filtering, and navigation to details.
- **Blocks:**
  - ActivityFeed
  - Footers
### Variants
#### Activity feed
- **Id:** ActivityFeed
- **Appearance:** List of recent activities with timestamps.
- **Behavior:** Updates dynamically with new activity.
#### Notifications
- **Id:** Notifications
- **Appearance:** List of notifications with timestamps.
- **Behavior:** Supports marking notifications as read.

## App Shell
A structural layout providing navigation, sidebar, and main content area for app-like experiences.
- **Id:** AppShell
- **Appearance:** A layout with sidebar, topbar, and main content area. May include navigation, user info, and responsive design.
- **Behavior:** Sidebar may collapse/expand. Navigation links update main content. Supports keyboard navigation and accessibility.
- **Blocks:**
  - Navbars
  - Sidebar
  - PageWrapper
  - Footers
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
- **Appearance:** A page with a centered card or form for login, registration, or password reset. Includes input fields, buttons, and links for navigation between forms.
- **Behavior:** Submits user credentials or registration info. Shows validation errors and loading state. May redirect or show success message on completion.
- **Blocks:**
  - Authentication
  - Footers
### Variants
#### Login
- **Id:** Login
- **Appearance:** Standard login form with email/username and password fields.
- **Behavior:** Validates credentials and redirects on success.
#### Register
- **Id:** Register
- **Appearance:** Registration form with additional fields for user details.
- **Behavior:** Validates input, creates account, and may send confirmation email.
#### Forgot password
- **Id:** ForgotPassword
- **Appearance:** Form to enter email for password reset link.
- **Behavior:** Sends password reset link to the provided email.
#### Reset password
- **Id:** ResetPassword
- **Appearance:** Form to enter new password after clicking reset link.
- **Behavior:** Validates and updates the password.

## Blog
A content-driven page listing articles, with support for reading, commenting, and filtering posts.
- **Id:** Blog
- **Appearance:** A page with a list or grid of articles, each with image, title, excerpt, and author. Article page shows full content, comments, and related posts.
- **Behavior:** Clicking an article opens the full post. Supports pagination, filtering, and commenting.
- **Blocks:**
  - Navbars
  - Headers
  - ArticleCards
  - TableOfContents
  - Comments
  - Footers
### Variants
#### Blog home
- **Id:** BlogHome
- **Appearance:** List or grid of articles with images and excerpts.
- **Behavior:** Allows filtering and pagination.
#### Article Detail
- **Id:** ArticleDetail
- **Appearance:** Full content of a single article with comments section.
- **Behavior:** Allows commenting and sharing.
#### Author profile
- **Id:** AuthorProfile
- **Appearance:** Profile of the author with bio and list of articles.
- **Behavior:** Static display of author information only.
#### Categories and Tags
- **Id:** CategoriesAndTags
- **Appearance:** List of categories or tags for filtering articles.
- **Behavior:** Allows filtering articles by category or tag.
#### Comments
- **Id:** Comments
- **Appearance:** List of comments with input field for new comments.
- **Behavior:** Allows adding and replying to comments.

## Calendar Page
A scheduling page with calendar views, event lists, and event management features.
- **Id:** CalendarPage
- **Appearance:** A page with a calendar view (month, week), event list, and event details. May include filters and add event button.
- **Behavior:** Clicking a date or event shows details. Supports adding, editing, and deleting events. Responsive layout.
- **Blocks:**
  - Calendar
  - Footers
### Variants
#### Month view
- **Id:** MonthView
- **Appearance:** Calendar view showing the entire month.
- **Behavior:** Allows viewing and adding events.
#### Week view
- **Id:** WeekView
- **Appearance:** Calendar view showing the week.
- **Behavior:** Allows viewing and adding events.
#### Event details
- **Id:** EventDetails
- **Appearance:** Detailed view of a single event.
- **Behavior:** Allows editing and deleting events.

## Contact
A page for users to get in touch, featuring a contact form, details, and optional map or links.
- **Id:** Contact
- **Appearance:** A page with a contact form, contact details, and optional map or social links. May be split into form and info sections.
- **Behavior:** Submits form data, shows validation and success/error messages. Contact links are clickable.
- **Blocks:**
  - ContactCardSection
  - Footers
### Variants
#### Contact form
- **Id:** ContactForm
- **Appearance:** Standard contact form with input fields.
- **Behavior:** Submits form data and shows validation messages.
#### With map
- **Id:** WithMap
- **Appearance:** Contact form with an embedded map.
- **Behavior:** Submits form data and shows validation messages.
#### Support/help
- **Id:** SupportHelp
- **Appearance:** Contact form with additional fields for support queries.
- **Behavior:** Submits form data and shows validation messages.

## Dashboard
A summary page displaying key metrics, charts, and recent activity for quick insights and navigation.
- **Id:** Dashboard
- **Appearance:** A page with a navigation bar, header, and a grid or cards showing key metrics, charts, recent activity, and quick links. May include tables, stats, and notifications.
- **Behavior:** Widgets update dynamically with data. Cards and charts may be interactive (clickable, filterable). Supports responsive layout and navigation.
- **Blocks:**
  - Navbars
  - Headers
  - Stats
  - TableOfContents
  - ArticleCards
  - ActivityFeed
  - Footers
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
- **Appearance:** A page with a data table or list, filters, and actions. May include pagination, search, and bulk actions.
- **Behavior:** Supports sorting, filtering, selection, and inline actions. Responsive layout for mobile.
- **Blocks:**
  - TableOfContents
  - ArticleCards
  - Footers
### Variants
#### Data table
- **Id:** DataTable
- **Appearance:** Table with rows and columns of data.
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
- **Appearance:** A page with download links or buttons for apps/resources. May include QR codes, platform icons, and instructions.
- **Behavior:** Clicking a button starts download or opens app store. May track downloads or show version info.
- **Blocks:**
  - AppDownloadSection
  - Footers
### Variants
#### App download
- **Id:** AppDownload
- **Appearance:** List of download links or buttons for apps.
- **Behavior:** Clicking a button starts the download.
#### Resources
- **Id:** Resources
- **Appearance:** List of downloadable resources with descriptions.
- **Behavior:** Clicking a link starts the download.

## E-commerce
A set of pages for browsing products, viewing details, managing a cart, and completing purchases.
- **Id:** ECommerce
- **Appearance:** Product listing grid, product detail pages, cart, and checkout forms. Includes images, prices, filters, and action buttons.
- **Behavior:** Add/remove items to cart, update quantities, filter/sort products, and complete checkout. Supports responsive layout and navigation.
- **Blocks:**
  - Navbars
  - Headers
  - ArticleCards
  - TableOfContents
  - Footers
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
- **Appearance:** List of items in the cart with quantities and prices.
- **Behavior:** Allows updating quantities and removing items from the cart.
#### Checkout
- **Id:** Checkout
- **Appearance:** Form for entering shipping and payment information.
- **Behavior:** Completes the purchase process and validates input.
#### Order history
- **Id:** OrderHistory
- **Appearance:** List of past orders with details.
- **Behavior:** Allows viewing order details only.
#### Wishlist
- **Id:** Wishlist
- **Appearance:** List of saved products for future purchase.
- **Behavior:** Allows adding/removing items from the wishlist.

## Error
A page for displaying error messages, such as 404 or 500, with navigation options for recovery.
- **Id:** Error
- **Appearance:** A page with a large error code/message, icon or illustration, and navigation options (e.g., back to home). May be minimal or branded.
- **Behavior:** Static. May auto-redirect after a timeout or provide links for user action.
- **Blocks:**
  - ErrorPages
  - Footers
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
- **Behavior:** Clicking a question expands/collapses the answer. Supports search/filter and navigation.
- **Blocks:**
  - FrequentlyAskedQuestions
  - Footers
### Variants
#### Frequently asked questions
- **Id:** FrequentlyAskedQuestions
- **Appearance:** List or accordion of questions and answers.
- **Behavior:** Allows expanding/collapsing answers.
#### Searchable FAQ
- **Id:** SearchableFAQ
- **Appearance:** FAQ with a search bar for filtering questions.
- **Behavior:** Allows searching and filtering questions.

## Landing
A marketing page designed to introduce a product or service, highlight features, and drive conversions.
- **Id:** Landing
- **Appearance:** A marketing-focused page with hero, features, testimonials, pricing, and call-to-action sections. Uses bold visuals and clear messaging.
- **Behavior:** Static by default. Buttons trigger navigation or actions. May include animations or interactive elements.
- **Blocks:**
  - Hero
  - FeaturesSection
  - Banners
  - Testimonials
  - PricingTable
  - CallToActionSection
  - Footers
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
- **Appearance:** List of testimonials with user photos and quotes.
- **Behavior:** Static display of testimonials only.
#### Call to action
- **Id:** CallToAction
- **Appearance:** Section with a strong call-to-action button.
- **Behavior:** Button triggers navigation or action.

## Legal
A page for legal documents such as privacy policy or terms of service, with headings and navigation.
- **Id:** Legal
- **Appearance:** A page with legal text, such as privacy policy or terms of service. May include headings, links, and last updated date.
- **Behavior:** Static. May support search or navigation within the document.
- **Blocks:**
  - Footers
### Variants
#### Privacy policy
- **Id:** PrivacyPolicy
- **Appearance:** Legal text with headings and links.
- **Behavior:** Static display of privacy policy only.
#### Terms of service
- **Id:** TermsOfService
- **Appearance:** Legal text with headings and links.
- **Behavior:** Static display of terms of service only.

## Onboarding
A multi-step guide or wizard to help new users get started with the application.
- **Id:** Onboarding
- **Appearance:** A multi-step guide or wizard with progress indicator, instructions, and forms. May include illustrations or checklists.
- **Behavior:** Navigates between steps, validates input, and shows completion message. Supports back/next navigation.
- **Blocks:**
  - OnboardingSteps
  - Footers
### Variants
#### Welcome
- **Id:** Welcome
- **Appearance:** Introduction screen with welcome message and instructions.
- **Behavior:** Static display with navigation to next step.
#### Step-by-step guide
- **Id:** StepByStepGuide
- **Appearance:** Multi-step form with progress indicator.
- **Behavior:** Validates input and navigates between steps.
#### Completion
- **Id:** Completion
- **Appearance:** Final screen with completion message and next steps.
- **Behavior:** Static display with possible navigation options.

## Portfolio
A showcase page for projects or work samples, with filtering and detailed views.
- **Id:** Portfolio
- **Appearance:** A grid or list of projects, each with image, title, and description. Project detail page shows full info and images.
- **Behavior:** Clicking a project opens details. Supports filtering, sorting, and responsive layout.
- **Blocks:**
  - Hero
  - ArticleCards
  - Footers
### Variants
#### Projects grid
- **Id:** ProjectsGrid
- **Appearance:** Grid of projects with images and titles.
- **Behavior:** Allows filtering and sorting of projects.
#### Project details
- **Id:** ProjectDetails
- **Appearance:** Detailed view of a single project with images and descriptions.
- **Behavior:** Static display of project details only.

## Profile
A user-focused page showing personal details, avatar, and editable profile information.
- **Id:** Profile
- **Appearance:** A page showing user avatar, name, profile details, and editable fields. May include tabs for account, settings, and activity.
- **Behavior:** Allows editing and saving profile info. Supports avatar upload, validation, and navigation between sections.
- **Blocks:**
  - Headers
  - UserInfoAndControls
  - ArticleCards
  - Footers
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
  - Roadmap
  - Footers
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
- **Appearance:** A page with grouped settings forms, toggles, and inputs. May use tabs or sections for categories (general, security, notifications, billing).
- **Behavior:** Allows updating settings, toggling switches, and saving changes. Shows validation and success/error messages.
- **Blocks:**
  - Headers
  - UserInfoAndControls
  - Footers
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
- **Appearance:** A page with profiles of team members, each with avatar, name, role, and bio. May include group photo or sections by team.
- **Behavior:** Static by default. Clicking a member may show more details or profile page.
- **Blocks:**
  - TeamSection
  - Footers
### Variants
#### Team members
- **Id:** TeamMembers
- **Appearance:** List of team members with avatars and roles.
- **Behavior:** Static display of team member information only.
#### Member profile
- **Id:** MemberProfile
- **Appearance:** Detailed profile of a team member with bio and contact info.
- **Behavior:** Static display of member profile only.

