import type { Meta, StoryObj } from '@storybook/vue3-vite';
import DataTable from '../components/DataTable.vue';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    striped: {
      control: 'boolean',
      description: 'Show striped rows',
      table: { category: 'Appearance' },
    },
    bordered: {
      control: 'boolean',
      description: 'Show borders',
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
    striped: false,
    bordered: false,
    radius: 2,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Striped: Story = {
  args: { striped: true },
};
export const Bordered: Story = {
  args: { bordered: true },
};
export const StripedBordered: Story = {
  args: { striped: true, bordered: true },
};
