import type { Meta, StoryObj } from '@storybook/vue3-vite';
import FormErrorMessage from '../components/FormErrorMessage.vue';

const meta: Meta<typeof FormErrorMessage> = {
  title: 'Components/FormErrorMessage',
  component: FormErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Error message text',
      table: { category: 'Content' },
    },
  },
  args: {
    message: 'This field is required.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
