## Portfolio
A showcase page for projects or work samples, with filtering and detailed views.
- **Id:** Portfolio
- **Appearance:** Grid or list of projects, each with image, title, and description. Project detail page shows full info and images.
- **Behavior:** Clicking a project opens details. Supports filtering, sorting, responsive layout, and carousel navigation for images.
- **Blocks:**
  - [Hero](../blocks/Hero.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Footers](../blocks/Footers.md)
  - [Carousels](../blocks/Carousels.md)
  - [SplitLayout](../blocks/SplitLayout.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Portfolio page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Project/card border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Portfolio variants are listed below:
| Variant Name     | Description                        | Appearance/Behavior                | Tokens Used         | Notes |
|------------------|------------------------------------|------------------------------------|---------------------|-------|
| ProjectsGrid     | Grid of projects with images/titles | Filtering, sorting, grid layout    | All above           |       |
| ProjectDetails   | Detailed view of a single project   | Images, descriptions, carousel     | All above           |       |

---

### States
Portfolio states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of portfolio.       | All above             |
| Focused   | Card or button is focused.         | Focus Ring            |
| Selected  | Project is selected.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Portfolio:
- Keyboard navigation: Tab to all projects and controls, Enter/Space to activate.
- ARIA roles/attributes: grid, button, region, img.
- Color contrast: Sufficient for all text, projects, and controls.
- Focus indicator: Visible and uses the focus token.
