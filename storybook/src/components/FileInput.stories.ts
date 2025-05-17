import type { Meta, StoryObj } from '@storybook/vue3-vite';
import FileInput from './FileInput.vue';

const meta: Meta<typeof FileInput> = {
  title: 'Components/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the file input',
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
