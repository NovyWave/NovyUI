import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Alert from './Alert.vue';

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
    layout: 'fullscreen',
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

const Template = (args) => ({
  components: { Alert },
  setup() { return { args }; },
  template: `<Alert v-bind="args" />`,
});

export const Success: Story = Template.bind({});
Success.args = { variant: 'Success' };

export const Error: Story = Template.bind({});
Error.args = { variant: 'Error' };

export const Warning: Story = Template.bind({});
Warning.args = { variant: 'Warning' };

export const Info: Story = Template.bind({});
Info.args = { variant: 'Info' };

export const Dismissible: Story = Template.bind({});
Dismissible.args = { variant: 'Dismissible', dismissible: true };
