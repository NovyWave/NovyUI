## Testimonials
A testimonials page featuring user or client feedback, endorsements, and success stories. Includes quotes, ratings, and photos. Used to build trust and credibility for products or services.
- **Id:** Testimonials
- **Appearance:** List or grid of testimonial cards with quotes, ratings, and user photos. May include featured testimonials or video.
- **Behavior:** Static display of testimonials. May support carousel or expand/collapse for long quotes.
- **Blocks:**
  - [QuoteSection](../blocks/QuoteSection.md)
  - [Carousels](../blocks/Carousels.md)
- **Components:**
  - [Avatar](../components/Avatar.md)
  - [Rating](../components/Rating.md)
  - [Carousel](../components/Carousel.md)

---

### Token Usage
The following table lists all design tokens used by the Testimonials page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Card         | background   | Card background color      |
| Quote        | color        | Quote text color           |
| Rating       | color        | Star color                 |

---

### Variants
All supported Testimonials variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Default      | Standard testimonials list | List/grid, static display  | background, color | |
| Carousel     | Rotating testimonials      | Carousel, auto-advance     | color, background | |

---

### States
Testimonials states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Testimonials visible       | background, color |
| Loading      | Fetching testimonials      | color             |
| Error        | Failed to load testimonials| color, background |

---

### Accessibility
Accessibility features and requirements for Testimonials:
- Keyboard navigation for carousel and cards
- ARIA roles for testimonial list and carousel
- Sufficient color contrast for text and backgrounds
- Visible focus indicator for all interactive elements
