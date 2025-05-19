import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Button from './Button.vue';
import { icons } from '../tokens.ts';

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
      ],
      description: 'Visual style of the button',
      table: { category: 'Appearance' },
    },
    label: {
      control: 'text',
      description: 'Button label text',
      table: { category: 'Content' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
      table: { category: 'State' },
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner',
      table: { category: 'State' },
    },
    leftIcon: {
      control: { type: 'select' },
      options: [undefined, ...icons],
      description: 'Icon on the left (IconToken name)',
      table: { category: 'Content' },
    },
    rightIcon: {
      control: { type: 'select' },
      options: [undefined, ...icons],
      description: 'Icon on the right (IconToken name)',
      table: { category: 'Content' },
    },
  },
  args: {
    variant: 'Primary',
    label: 'Button',
    disabled: false,
    loading: false,
    leftIcon: undefined,
    rightIcon: undefined,
  },
  parameters: {
    docs: {
      description: {
        component:
          'A clickable element used to trigger actions, submit forms, or navigate. Visual style changes based on variant and state. Uses design tokens for all appearance. See components/Button.md for full documentation.'
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
export const WithLeftIcon: Story = {
  args: { leftIcon: 'plus', label: 'Add Item' },
};
export const WithRightIcon: Story = {
  args: { rightIcon: 'arrow-right', label: 'Next' },
};
export const WithBothIcons: Story = {
  args: { leftIcon: 'chevron-left', rightIcon: 'chevron-right', label: 'Navigate' },
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
    template: `<Button v-bind="args" @click="toggleIcon" />`,
  }),
  args: { leftIcon: 'plus', label: 'Expand' },
};

export const IconOnly: Story = {
  args: {
    leftIcon: 'user',
    label: '',
    variant: 'Primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with only an icon and no text.'
      }
    }
  }
};
