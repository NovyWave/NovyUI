## Accordion 
🔽 A vertically stacked set of expandable/collapsible items, used to show and hide sections of related content.
- **Id:** Accordion
- **Appearance:** A vertically stacked list of items, each with a header button and collapsible content panel. Headers include expand/collapse icons and support custom icons. Multiple visual variants available.
- **Behavior:** Supports single mode (only one item open) or multiple mode (multiple items can be open). Includes keyboard navigation, smooth animations, and full accessibility support.
- **Used in blocks:**
  - [AccordionFAQ](../blocks/AccordionFAQ.md)

---

### Component Structure
The Accordion component consists of two main parts:
- **Accordion.vue**: Container component that manages state and renders AccordionItem components
- **AccordionItem.vue**: Individual accordion item with header button and collapsible content

### Props Interface
```typescript
interface AccordionItemData {
  id: string;
  title: string;
  content: string;
  disabled?: boolean;
  icon?: string; // IconToken name
}

interface AccordionProps {
  items: AccordionItemData[];
  type?: 'single' | 'multiple';
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'bordered' | 'separated';
  iconPosition?: 'left' | 'right';
  defaultOpenItems?: string[];
  openItems?: string[]; // For controlled mode
}
```

---

### Token Usage
The following table lists all design tokens used by the Accordion component:
| Part                | Token Example           | Description                              |
|---------------------|------------------------|------------------------------------------|
| Background          | color.surface.primary  | Accordion background                     |
| Item Background     | color.surface.secondary| Individual item background               |
| Header Background   | color.surface.secondary| Header button background                 |
| Text                | color.text.primary     | Header and content text                  |
| Disabled Text       | color.text.disabled    | Disabled item text                       |
| Border              | color.border.primary   | Borders between items and around container|
| Radius              | radii.medium           | Border radius for components             |
| Icon                | color.text.secondary   | Default expand/collapse icon color       |
| Focus Ring          | color.border.focus     | Focus indicator for keyboard navigation  |
| Hover Background    | color.surface.hover    | Header hover state background            |
| Transition          | transition.medium      | Animation duration for expand/collapse   |
| Spacing             | spacing.*              | Padding and margins for all size variants|
| Typography          | fontSize.*, lineHeight.*| Text sizing for different size variants |

---

### Variants
All supported Accordion variants are listed below:
| Variant Name | Description                                 | Appearance/Behavior                                              | Tokens Used                | Notes    |
|--------------|---------------------------------------------|------------------------------------------------------------------|----------------------------|----------|
| Default      | Clean minimal style with subtle borders    | Light borders, hover effects, smooth transitions                | All base tokens            | Default  |
| Bordered     | Stronger border styling                     | More prominent borders around entire component                   | Enhanced border tokens     |          |
| Separated    | Items have gaps between them               | Visual separation between items for spacious layout              | Additional spacing tokens  |          |

### Size Variants
| Size    | Description                           | Font Size    | Padding    | Icon Size  |
|---------|---------------------------------------|--------------|------------|------------|
| Small   | Compact size for dense interfaces     | fontSize.sm  | spacing.sm | Smaller    |
| Medium  | Default balanced size                 | fontSize.base| spacing.md | Standard   |
| Large   | Larger size for prominent sections    | fontSize.lg  | spacing.lg | Larger     |

---

### States
Accordion states and their token usage:
| State                | Description                                      | Token(s) affected                      |
|----------------------|--------------------------------------------------|---------------------------------------|
| Default              | Item is collapsed and not focused                | color.surface.secondary, color.text.primary, color.border.primary |
| Hover (header)       | Header is hovered by pointer                     | color.surface.hover, color.text.primary |
| Focus (header)       | Header is focused via keyboard                   | color.border.focus, outline styling   |
| Active (header)      | Header is being pressed/clicked                  | color.surface.active                  |
| Disabled             | Item is not interactive                          | color.text.disabled, reduced opacity  |
| Expanded             | Item is expanded, content visible                | Icon rotation, content panel visible  |
| Collapsed            | Item is collapsed, content hidden                | Icon in default position, content hidden |

---

### Behavior & Features
- **Single/Multiple Modes**: Control via `type` prop whether one or multiple items can be open
- **Keyboard Navigation**: 
  - Tab to focus accordion headers
  - Enter/Space to toggle expanded state
  - Arrow keys navigate between headers (optional enhancement)
- **Controlled/Uncontrolled State**: 
  - Uncontrolled: Use `defaultOpenItems` for initial state
  - Controlled: Use `openItems` prop with `@update:openItems` event
- **Smooth Animations**: CSS transitions for expand/collapse with `transition.medium` token
- **Icon Support**: 
  - Built-in expand/collapse chevron icon with rotation animation
  - Custom icons per item via `icon` property in item data
  - Configurable icon position (left/right) via `iconPosition` prop
- **Rich Content**: Supports HTML content in both title and content areas

---

### Accessibility
Accessibility features and requirements for Accordion:
- **ARIA Support**: 
  - `role="button"` on headers for screen reader compatibility
  - `aria-expanded` indicates current expanded state
  - `aria-controls` links headers to their content panels
  - `role="region"` on content panels for landmark navigation
- **Keyboard Navigation**: 
  - Headers are focusable and keyboard operable (Enter/Space)
  - Tab key moves focus between accordion headers
  - Focus indicators use `color.border.focus` token
- **Screen Reader Support**:
  - Proper heading hierarchy and semantic structure
  - Content panels are properly labeled and associated
  - Disabled items are announced as unavailable
- **Color Contrast**: 
  - All text meets WCAG AA contrast requirements
  - Focus indicators are clearly visible
  - Disabled states have appropriate contrast ratios

---

### Usage Examples

#### Basic Usage
```vue
<Accordion 
  :items="accordionItems" 
  type="single"
  size="medium"
  variant="default"
/>
```

#### Multiple Mode with Default Open Items
```vue
<Accordion 
  :items="accordionItems" 
  type="multiple"
  :defaultOpenItems="['item1', 'item3']"
  variant="separated"
/>
```

#### Controlled Mode
```vue
<Accordion 
  :items="accordionItems" 
  :openItems="openItems"
  @update:openItems="openItems = $event"
  type="multiple"
/>
```

#### With Custom Icons
```vue
<script setup>
const items = [
  {
    id: 'user',
    title: 'User Settings',
    content: 'Manage your account settings and preferences.',
    icon: 'user'
  },
  {
    id: 'security', 
    title: 'Security',
    content: 'Configure security and privacy settings.',
    icon: 'shield-check'
  }
];
</script>

<template>
  <Accordion :items="items" type="multiple" iconPosition="left" />
</template>
```
