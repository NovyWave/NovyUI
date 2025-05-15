import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Badge from '../components/Badge.vue';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['Solid', 'Outline', 'Dot', 'WithIcon', 'WithCount'] },
    count: { control: 'number' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'Solid',
    count: 0,
    icon: '',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'A small indicator used to display status, count, or highlight information. Can display a number, icon, or short text. Uses design tokens for all appearance.'
      }
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ]
      }
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: { variant: 'Solid' },
};
export const Outline: Story = {
  args: { variant: 'Outline' },
};
export const Dot: Story = {
  args: { variant: 'Dot' },
};
export const WithIcon: Story = {
  args: { variant: 'WithIcon', icon: 'star' },
};
export const WithCount: Story = {
  args: { variant: 'WithCount', count: 5 },
};
