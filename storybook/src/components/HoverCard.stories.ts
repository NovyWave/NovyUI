import type { Meta, StoryObj } from '@storybook/vue3-vite';
import HoverCard from './HoverCard.vue';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
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
    shadow: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Shadow level',
      table: { category: 'Appearance' },
    },
  },
  args: {
    open: false,
    radius: 2,
    shadow: 2,
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
