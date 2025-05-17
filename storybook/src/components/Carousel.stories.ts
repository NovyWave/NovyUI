import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Carousel from '../components/Carousel.vue';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'shadow'],
      description: 'Visual style of the carousel',
      table: { category: 'Appearance' },
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
