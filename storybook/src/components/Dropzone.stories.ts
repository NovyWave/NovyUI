import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Dropzone from './Dropzone.vue';

const meta: Meta<typeof Dropzone> = {
  title: 'Components/Dropzone',
  component: Dropzone,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the dropzone',
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
    disabled: false,
    radius: 2,
    shadow: 1,
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
