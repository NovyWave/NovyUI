import type { Meta, StoryObj } from '@storybook/vue3-vite';
import InputGroup from './InputGroup.vue';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the input group',
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
    disabled: false,
    radius: 2,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Disabled: Story = {
  args: { disabled: true },
};
