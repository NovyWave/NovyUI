import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Alert from '../components/Alert.vue';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['Success', 'Error', 'Warning', 'Info', 'Dismissible'] },
    message: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
  args: {
    variant: 'Success',
    message: 'This is an alert message.',
    dismissible: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'A message box used to display important information, feedback, or status updates. Color and icon reflect the alert type. Uses design tokens for all appearance.'
      }
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ]
      }
    }
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { variant: 'Success' },
};
export const Error: Story = {
  args: { variant: 'Error' },
};
export const Warning: Story = {
  args: { variant: 'Warning' },
};
export const Info: Story = {
  args: { variant: 'Info' },
};
export const Dismissible: Story = {
  args: { variant: 'Dismissible', dismissible: true },
};
