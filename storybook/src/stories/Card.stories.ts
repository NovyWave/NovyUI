import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Card from '../components/Card.vue';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'shadow', 'bordered'],
      description: 'Visual style of the card',
      table: { category: 'Appearance' },
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Padding size',
      table: { category: 'Layout' },
    },
    radius: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 'full'],
      description: 'Border radius',
      table: { category: 'Appearance' },
    },
  },
  args: {
    variant: 'default',
    padding: 'md',
    radius: 2,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default' },
};
export const Shadow: Story = {
  args: { variant: 'shadow' },
};
export const Bordered: Story = {
  args: { variant: 'bordered' },
};
