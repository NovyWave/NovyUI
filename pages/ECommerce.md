## E-Commerce
A set of pages for browsing products, viewing details, managing a cart, and completing purchases.
- **Id:** ECommerce
- **Appearance:** Product listing grid, product detail pages, cart, and checkout forms. Includes images, prices, filters, and action buttons. Order history and wishlist are available as lists or tables.
- **Behavior:** Add/remove items to cart, update quantities, filter/sort products, and complete checkout. Supports responsive layout and navigation. Order history allows viewing details; wishlist allows moving items to cart.
- **Blocks:**
  - [Navbars](../blocks/Navbars.md)
  - [Headers](../blocks/Headers.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [TableOfContents](../blocks/TableOfContents.md)
  - [Footers](../blocks/Footers.md)
  - [OrderHistory](../blocks/OrderHistory.md)
  - [Wishlist](../blocks/Wishlist.md)
  - [Cart](../blocks/Cart.md)
  - [Checkout](../blocks/Checkout.md)
  - [ProductDetails](../blocks/ProductDetails.md)
### Variants
#### E-Commerce - **Product listing**
- **Id:** ProductListing
- **Appearance:** Grid of products with images, prices, and action buttons.
- **Behavior:** Allows filtering and sorting of products.
#### E-Commerce - **Product details**
- **Id:** ProductDetails
- **Appearance:** Detailed view of a single product with images and descriptions.
- **Behavior:** Allows adding product to cart.
#### E-Commerce - **Cart**
- **Id:** Cart
- **Appearance:** List or table of items in the cart with quantities and prices.
- **Behavior:** Allows updating quantities and removing items from the cart.
#### E-Commerce - **Checkout**
- **Id:** Checkout
- **Appearance:** Form for entering shipping and payment information.
- **Behavior:** Completes the purchase process and validates input.
#### E-Commerce - **Order history**
- **Id:** OrderHistory
- **Appearance:** List or table of past orders with dates, status, and details link.
- **Behavior:** Allows viewing order details and status. May include filters for status/date.
#### E-Commerce - **Wishlist**
- **Id:** Wishlist
- **Appearance:** List or grid of saved products for future purchase.
- **Behavior:** Allows adding/removing items from the wishlist and moving items to cart.
