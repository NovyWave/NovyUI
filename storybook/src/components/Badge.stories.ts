import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Badge from './Badge.vue';
import { icons } from '../tokens.ts';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'outline'],
      description: 'Visual style of the badge.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    label: {
      control: 'text',
      description: 'Badge label text. Optional: will be replaced if slot content is provided.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    leftIcon: {
      control: { type: 'select' },
      options: [null, ...Object.keys(icons)],
      description: 'Icon to display on the left side of the badge.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    rightIcon: {
      control: { type: 'select' },
      options: [null, ...Object.keys(icons)],
      description: 'Icon to display on the right side of the badge.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    removable: {
      control: 'boolean',
      description: 'Shows a remove/close button on the badge.',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    removeAriaLabel: {
      control: 'text',
      description: 'Aria label for the remove button.',
      table: { category: 'Accessibility', defaultValue: { summary: 'Remove badge' } },
    },
  },
  args: {
    label: 'Badge',
    variant: 'default',
    size: 'medium',
    removable: false,
    removeAriaLabel: 'Remove badge',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A small status indicator or label used to highlight information, show counts, or categorize content. Supports various visual styles, sizes, icons, and removable functionality.\n\n**Features:**\n\n- Multiple variants (default, primary, secondary, success, warning, error, outline)\n- Three sizes (small, medium, large)\n- Optional left and right icons\n- Removable functionality with close button\n- Slot support for custom content\n- Full accessibility support\n\n**Usage:**\n\n```vue\n<Badge variant="primary" label="New" />\n<Badge variant="success" leftIcon="check" label="Completed" />\n<Badge variant="warning" label="Pending" removable @remove="handleRemove" />\n```',
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
    label: 'Default',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
    leftIcon: 'check',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
    leftIcon: 'alert-triangle',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'error',
    leftIcon: 'x-circle',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'With Icons',
    variant: 'primary',
    leftIcon: 'star',
    rightIcon: 'arrow-right',
  },
};

export const Removable: Story = {
  args: {
    label: 'Removable',
    variant: 'secondary',
    removable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge with remove functionality. Click the × button to trigger the remove event.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <Badge size="small" label="Small" variant="primary" />
        <Badge size="medium" label="Medium" variant="primary" />
        <Badge size="large" label="Large" variant="primary" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Badge component in different sizes.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <Badge variant="default" label="Default" />
        <Badge variant="primary" label="Primary" />
        <Badge variant="secondary" label="Secondary" />
        <Badge variant="success" label="Success" />
        <Badge variant="warning" label="Warning" />
        <Badge variant="error" label="Error" />
        <Badge variant="outline" label="Outline" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All badge variants displayed together.',
      },
    },
  },
};

export const StatusBadges: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <Badge variant="success" leftIcon="check" label="Completed" />
        <Badge variant="warning" leftIcon="clock" label="Pending" />
        <Badge variant="error" leftIcon="x-circle" label="Failed" />
        <Badge variant="primary" leftIcon="info" label="Info" />
        <Badge variant="secondary" leftIcon="user" label="Draft" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Common status badge patterns with appropriate icons.',
      },
    },
  },
};

export const CountBadges: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <div style="position: relative; display: inline-block;">
          <span style="padding: 8px 16px; background: #f3f4f6; border-radius: 8px;">Inbox</span>
          <Badge 
            variant="error" 
            label="3" 
            size="small"
            style="position: absolute; top: -8px; right: -8px;"
          />
        </div>
        <div style="position: relative; display: inline-block;">
          <span style="padding: 8px 16px; background: #f3f4f6; border-radius: 8px;">Notifications</span>
          <Badge 
            variant="primary" 
            label="12" 
            size="small"
            style="position: absolute; top: -8px; right: -8px;"
          />
        </div>
        <div style="position: relative; display: inline-block;">
          <span style="padding: 8px 16px; background: #f3f4f6; border-radius: 8px;">Messages</span>
          <Badge 
            variant="success" 
            label="99+" 
            size="small"
            style="position: absolute; top: -8px; right: -8px;"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Badge used as notification counters positioned over other elements.',
      },
    },
  },
};
