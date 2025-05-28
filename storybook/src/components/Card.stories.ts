import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Card from './Card.vue';
import Button from './Button.vue';
import { icons } from '../tokens.ts';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'elevated', 'outlined'],
      description: 'Visual style of the card.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the card.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    title: {
      control: 'text',
      description: 'Card title text.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle text.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    description: {
      control: 'text',
      description: 'Card description text.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    image: {
      control: 'text',
      description: 'Card image URL.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the card image.',
      table: { category: 'Accessibility', defaultValue: { summary: '' } },
    },
    headerIcon: {
      control: { type: 'select' },
      options: [null, ...Object.keys(icons)],
      description: 'Icon to display in the card header.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    actionIcon: {
      control: { type: 'select' },
      options: [null, ...Object.keys(icons)],
      description: 'Action icon in the card header.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    closable: {
      control: 'boolean',
      description: 'Shows a close button in the card header.',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    interactive: {
      control: 'boolean',
      description: 'Makes the card interactive with hover effects.',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    href: {
      control: 'text',
      description: 'Makes the card a link.',
      table: { category: 'Behavior', defaultValue: { summary: '' } },
    },
    target: {
      control: 'text',
      description: 'Link target attribute.',
      table: { category: 'Behavior', defaultValue: { summary: '' } },
    },
  },
  args: {
    variant: 'default',
    size: 'medium',
    interactive: false,
    closable: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'A flexible container component for grouping related content and actions. Perfect for displaying information in a structured, visually appealing way.\n\n**Features:**\n\n- Multiple variants (default, bordered, elevated, outlined)\n- Three sizes (small, medium, large)\n- Optional header with title, subtitle, and actions\n- Image support\n- Footer area for additional content\n- Interactive and link modes\n- Slot support for custom content\n\n**Usage:**\n\n```vue\n<Card title="Card Title" description="Card description" />\n<Card variant="elevated" interactive />\n<Card href="/link" title="Clickable Card" />\n```',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a basic card with a title and description. Cards are flexible containers for grouping related content.',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    description: 'This card includes both a title and subtitle in the header area.',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Settings',
    subtitle: 'Manage your preferences',
    description: 'Configure your account settings and preferences.',
    headerIcon: 'settings',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'Nature Photography',
    description: 'A stunning view of mountains and valleys captured during golden hour.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    imageAlt: 'Mountain landscape at sunset',
  },
};

export const Bordered: Story = {
  args: {
    title: 'Bordered Card',
    description: 'This card has a border around it.',
    variant: 'bordered',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    description: 'This card has a shadow to appear elevated.',
    variant: 'elevated',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    description: 'This card has a thicker border outline.',
    variant: 'outlined',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Card',
    description: 'This card responds to hover and focus interactions.',
    variant: 'elevated',
    interactive: true,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    subtitle: 'Multiple action buttons',
    description: 'This card includes action buttons in the header.',
    actionIcon: 'more-horizontal',
    closable: true,
  },
};

export const AsLink: Story = {
  args: {
    title: 'Clickable Card',
    description: 'This entire card is a clickable link.',
    href: '#',
    variant: 'bordered',
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Small</h3>
          <Card 
            size="small" 
            title="Small Card" 
            description="This is a small card with compact spacing."
            variant="bordered"
          />
        </div>
        <div>
          <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Medium</h3>
          <Card 
            size="medium" 
            title="Medium Card" 
            description="This is a medium card with standard spacing."
            variant="bordered"
          />
        </div>
        <div>
          <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Large</h3>
          <Card 
            size="large" 
            title="Large Card" 
            description="This is a large card with generous spacing."
            variant="bordered"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Card component in different sizes.',
      },
    },
  },
};

export const WithCustomContent: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <Card 
        title="Custom Content Card" 
        subtitle="With slot content"
        variant="bordered"
      >
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <p style="margin: 0; color: #6b7280;">
            This card uses the default slot to display custom content instead of just a description.
          </p>
          <div style="display: flex; gap: 8px;">
            <Button variant="Primary" label="Primary Action" size="small" />
            <Button variant="Secondary" label="Secondary" size="small" />
          </div>
        </div>
        
        <template #footer>
          <span style="font-size: 12px; color: #9ca3af;">Last updated 2 hours ago</span>
        </template>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Card with custom slot content and footer.',
      },
    },
  },
};

export const ProductCard: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <div style="max-width: 300px;">
        <Card 
          title="Wireless Headphones" 
          subtitle="Premium Audio"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
          imageAlt="Wireless headphones"
          variant="bordered"
        >
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 24px; font-weight: 600; color: #059669;">$199</span>
              <span style="font-size: 16px; color: #9ca3af; text-decoration: line-through;">$249</span>
            </div>
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              High-quality wireless headphones with noise cancellation and 30-hour battery life.
            </p>
            <div style="display: flex; gap: 8px; margin-top: 8px;">
              <Button variant="Primary" label="Add to Cart" size="small" style="flex: 1;" />
              <Button variant="Outline" leftIcon="heart" size="small" />
            </div>
          </div>
        </Card>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Product card example with image, pricing, and actions.',
      },
    },
  },
};
