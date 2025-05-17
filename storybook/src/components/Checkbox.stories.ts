import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Checkbox from './Checkbox.vue';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Checked state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox',
      table: { category: 'State' },
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Checked: Story = {
  args: { checked: true },
};
export const Disabled: Story = {
  args: { disabled: true },
};
export const CheckedDisabled: Story = {
  args: { checked: true, disabled: true },
};
