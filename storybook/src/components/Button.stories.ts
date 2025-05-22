import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Button from './Button.vue';
import { tokens, icons, getWidthOptions } from '../tokens.ts';

// Use key-value pairs for minWidthOptions for better Storybook labels
const minWidthOptions = getWidthOptions(tokens.width);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'Primary',
        'Secondary',
        'Outline',
        'Ghost',
        'Link',
        'Destructive',
      ],
      description: 'Visual style of the button.',
      table: { category: 'Appearance', defaultValue: { summary: 'Primary' } },
    },
    label: {
      control: 'text',
      description: 'Button label text. Optional: will be replaced if slot content is provided.',
      table: { category: 'Content', defaultValue: { summary: '' } },
      type: { name: 'string', required: false }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    leftIcon: {
      control: { type: 'select' },
      options: [null, ...icons],
      description: 'Icon on the left (IconToken name, or None).',
      table: { category: 'Content', defaultValue: { summary: null } },
    },
    rightIcon: {
      control: { type: 'select' },
      options: [null, ...icons],
      description: 'Icon on the right (IconToken name, or None).',
      table: { category: 'Content', defaultValue: { summary: null } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    leftIconAriaLabel: {
      control: 'text',
      description: 'Accessible label for the left icon (improves screen reader accessibility).',
      table: { category: 'Accessibility', defaultValue: { summary: 'leftIcon' } },
    },
    rightIconAriaLabel: {
      control: 'text',
      description: 'Accessible label for the right icon (improves screen reader accessibility).',
      table: { category: 'Accessibility', defaultValue: { summary: 'rightIcon' } },
    },
    minWidth: {
      control: { type: 'select' },
      options: minWidthOptions,
      description: 'Minimum width of the button (from design tokens or custom value, e.g. 140px, 20em, or 100%).',
      table: { category: 'Appearance', defaultValue: { summary: '' } },
    },
    default: {
      name: 'default',
      description: 'Default slot for custom content in the button label area. When provided, replaces the label prop but icons and spinner still render as usual. Use for rich or formatted content.',
      table: {
        category: 'Slots',
        type: { summary: 'VNode | HTML | String' },
        defaultValue: { summary: '—' },
      },
      control: false,
      type: { name: 'other', required: false },
      defaultValue: undefined,
      story: `\n**Example:**\n\n\u0060\u0060\u0060vue\n<Button leftIcon=\"star\" rightIcon=\"arrow-right\">\n  <span style=\"font-weight: bold; color: #eab308; padding: 0 12px;\">Custom <em>slot</em> <u>content</u></span>\n</Button>\n\u0060\u0060\u0060\n`
    },
  },
  args: {
    variant: 'Primary',
    label: 'Button',
    disabled: false,
    loading: false,
    leftIcon: null,
    rightIcon: null,
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A clickable element used to trigger actions, submit forms, or navigate. Visual style changes based on variant and state. Uses design tokens for all appearance. See components/Button.md for full documentation.\n\n**Slot usage:**\n\nThe default slot replaces the label area, but icons and spinner still render as usual.\n\n**Example:**\n\n```vue\n<Button leftIcon="star" rightIcon="arrow-right">\n  <span style="font-weight: bold; color: #eab308; padding: 0 12px;">Custom <em>slot</em> <u>content</u></span>\n</Button>\n```\n',
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

export const Primary: Story = {
  args: { variant: 'Primary' },
};
export const Secondary: Story = {
  args: { variant: 'Secondary' },
};
export const Outline: Story = {
  args: { variant: 'Outline' },
};
export const Ghost: Story = {
  args: { variant: 'Ghost' },
};
export const Loading: Story = {
  args: { variant: 'Primary', loading: true },
};
export const Link: Story = {
  args: { variant: 'Link', label: 'Link Button' },
};
export const Destructive: Story = {
  args: { variant: 'Destructive', label: 'Delete', leftIcon: 'trash' },
};
export const DynamicIconSwitch: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      let toggled = false;
      function toggleIcon() {
        Object.assign(args, {
          leftIcon: toggled ? 'plus' : 'minus',
          label: toggled ? 'Expand' : 'Collapse',
        });
        toggled = !toggled;
      }
      return { args, toggleIcon };
    },
    template: `<Button v-bind="args" @click="toggleIcon" :minWidth="140" />`,
  }),
  args: { leftIcon: 'plus', label: 'Expand' },
};

export const IconOnly: Story = {
  args: {
    leftIcon: 'user',
    label: '',
    variant: 'Primary',
  },
};

export const AllSizes: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
    <div style="display: flex; align-items: center;">
      <Button v-bind="{...args, size: 'small'}" label="Small" />
      <Button v-bind="{...args, size: 'medium'}" label="Medium" style="margin-left: 16px;" />
      <Button v-bind="{...args, size: 'large'}" label="Large" style="margin-left: 16px;" />
    </div>
  `,
  }),
  args: {
    variant: 'Primary',
    leftIcon: null,
    rightIcon: null,
    loading: false,
    disabled: false,
  },
};

export const WithIcons: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
    <div style="display: flex; align-items: center;">
      <Button v-bind="{...args, leftIcon: 'plus', rightIcon: undefined}" label="Left Icon" />
      <Button v-bind="{...args, leftIcon: undefined, rightIcon: 'arrow-right'}" label="Right Icon" style="margin-left: 16px;" />
      <Button v-bind="{...args, leftIcon: 'chevron-left', rightIcon: 'chevron-right'}" label="Both Icons" style="margin-left: 16px;" />
    </div>
  `,
  }),
  args: {
    variant: 'Primary',
    loading: false,
    disabled: false,
    size: 'medium',
  },
};

export const SlotContent: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args" leftIcon="star" rightIcon="arrow-right">
        <span style="font-weight: bold; color: #eab308; padding: 0 12px;">Custom <em>slot</em> <u>content</u></span>
      </Button>
    `,
  }),
  args: {
    variant: 'Primary',
    label: 'This label will be ignored',
    leftIcon: 'star',
    rightIcon: 'arrow-right',
  },
  parameters: {
    docs: {
      description: {
        story: `Demonstrates using the Button slot to fully customize the label area, while icons and loading spinner still render as usual.\n\n**Slot usage example:**\n\n\u0060\u0060\u0060vue\n<Button leftIcon="star" rightIcon="arrow-right">\n  <span style="font-weight: bold; color: #eab308; padding: 0 12px;">Custom <em>slot</em> <u>content</u></span>\n</Button>\n\u0060\u0060\u0060\n` 
      }
    }
  }
};
