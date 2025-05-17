import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Chips from '../components/Chips.vue';

const meta: Meta<typeof Chips> = {
  title: 'Components/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Selected state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the chip',
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
    selected: false,
    disabled: false,
    radius: 2,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Selected: Story = {
  args: { selected: true },
};
export const Disabled: Story = {
  args: { disabled: true },
};
export const SelectedDisabled: Story = {
  args: { selected: true, disabled: true },
};
