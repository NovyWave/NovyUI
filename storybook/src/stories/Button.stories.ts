import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '../components/Button.vue';

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
        'Icon',
        'Loading',
        'Group',
        'SocialLogin',
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
  },
  args: {
    variant: 'Primary',
    label: 'Button',
    disabled: false,
    loading: false,
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
export const Icon: Story = {
  args: { variant: 'Icon', label: '' },
};
export const Loading: Story = {
  args: { variant: 'Loading', loading: true },
};
export const Group: Story = {
  args: { variant: 'Group' },
};
export const SocialLogin: Story = {
  args: { variant: 'SocialLogin', label: 'Sign in with Google' },
};
