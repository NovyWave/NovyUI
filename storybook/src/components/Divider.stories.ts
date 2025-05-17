import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Divider from './Divider.vue';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    vertical: {
      control: 'boolean',
      description: 'Vertical divider',
      table: { category: 'Appearance' },
    },
    color: {
      control: 'text',
      description: 'Divider color (token)',
      table: { category: 'Appearance' },
    },
    thickness: {
      control: 'text',
      description: 'Thickness (px)',
      table: { category: 'Appearance' },
    },
  },
  args: {
    vertical: false,
    color: 'var(--color-border-default)',
    thickness: '1px',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { vertical: false },
};
export const Vertical: Story = {
  args: { vertical: true },
};
