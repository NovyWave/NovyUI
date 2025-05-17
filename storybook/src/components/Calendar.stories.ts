import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Calendar from './Calendar.vue';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['MonthView', 'WeekView', 'WithEvents'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'MonthView',
    disabled: false,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A visual grid for selecting dates, viewing months, or displaying scheduled events. Allows date selection and navigation. Uses design tokens for all appearance.'
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
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
  components: { Calendar },
  setup() { return { args }; },
  template: `<Calendar v-bind="args" />`,
});

export const MonthView: Story = Template.bind({});
MonthView.args = { variant: 'MonthView' };

export const WeekView: Story = Template.bind({});
WeekView.args = { variant: 'WeekView' };

export const WithEvents: Story = Template.bind({});
WithEvents.args = { variant: 'WithEvents' };
