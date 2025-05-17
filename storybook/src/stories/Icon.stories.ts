import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Icon from '../components/Icon.vue';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Icon name',
      table: { category: 'Content' },
    },
    size: {
      control: { type: 'select' },
      options: [16, 20, 24, 32, 40],
      description: 'Icon size (px)',
      table: { category: 'Appearance' },
    },
    color: {
      control: 'text',
      description: 'Icon color (token)',
      table: { category: 'Appearance' },
    },
  },
  args: {
    name: 'user',
    size: 24,
    color: 'var(--color-primary-7)',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
