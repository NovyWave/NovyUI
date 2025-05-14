## Landing
A marketing page designed to introduce a product or service, highlight features, and drive conversions.
- **Id:** Landing
- **Appearance:** Marketing-focused page with hero, features, testimonials, pricing, and call-to-action sections.
- **Behavior:** Static by default. Buttons trigger navigation or actions. May include animations, carousels, and cookie consent interactions.
- **Blocks:**
  - [Hero](../blocks/Hero.md)
  - [FeaturesSection](../blocks/FeaturesSection.md)
  - [Banners](../blocks/Banners.md)
  - [Testimonials](../blocks/Testimonials.md)
  - [PricingTable](../blocks/PricingTable.md)
  - [CallToActionSection](../blocks/CallToActionSection.md)
  - [Footers](../blocks/Footers.md)
  - [Carousels](../blocks/Carousels.md)
  - [CookieConsentBanner](../blocks/CookieConsentBanner.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Landing page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section/card border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Landing variants are listed below:
| Variant Name         | Description                        | Appearance/Behavior                | Tokens Used         | Notes |
|---------------------|------------------------------------|------------------------------------|---------------------|-------|
| MarketingHomepage   | Hero section, bold visuals, CTA    | Static, navigation buttons         | All above           |       |
| Features            | List/grid of features               | Static, icons, descriptions        | All above           |       |
| Pricing             | Pricing table, plans                | Static, pricing info               | All above           |       |
| Testimonials        | List/carousel of testimonials       | Static or auto-advancing carousel  | All above           |       |
| CallToAction        | Strong call-to-action section       | Button triggers navigation/action  | All above           |       |

---

### States
Landing states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of landing page.    | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for Landing:
- Keyboard navigation: Tab to all sections and buttons, Enter/Space to activate.
- ARIA roles/attributes: region, button, link, banner, navigation.
- Color contrast: Sufficient for all text, sections, and controls.
- Focus indicator: Visible and uses the focus token.
