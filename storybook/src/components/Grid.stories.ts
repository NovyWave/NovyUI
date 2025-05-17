import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Grid from './Grid.vue';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns',
      table: { category: 'Layout' },
    },
    gap: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      description: 'Gap size (spacing token)',
      table: { category: 'Layout' },
    },
  },
  args: {
    columns: 3,
    gap: 4,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
