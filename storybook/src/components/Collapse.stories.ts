import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Collapse from './Collapse.vue';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Open state',
      table: { category: 'State' },
    },
    radius: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 'full'],
      description: 'Border radius',
      table: { category: 'Appearance' },
    },
  },
  args: {
    open: false,
    radius: 2,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: { open: false },
};
export const Open: Story = {
  args: { open: true },
};
