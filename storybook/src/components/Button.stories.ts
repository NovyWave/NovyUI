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
        'Destructive',
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
      options: [null, ...icons],
      description: 'Icon on the left (IconToken name, or None)',
      table: { category: 'Content' },
    },
    rightIcon: {
      control: { type: 'select' },
      options: [null, ...icons],
      description: 'Icon on the right (IconToken name, or None)',
      table: { category: 'Content' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
      table: { category: 'Appearance' },
    },
    leftIconAriaLabel: {
      control: 'text',
      description: 'Accessible label for the left icon (improves screen reader accessibility)',
      table: { category: 'Accessibility' },
    },
    rightIconAriaLabel: {
      control: 'text',
      description: 'Accessible label for the right icon (improves screen reader accessibility)',
      table: { category: 'Accessibility' },
    },
    minWidth: {
      control: 'text',
      description: 'Minimum width of the button (e.g., 140px, 20em)',
      table: { category: 'Appearance' },
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
