import type { Meta, StoryObj } from '@storybook/vue3';
import Calendar from '../components/Calendar.vue';

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

export const MonthView: Story = {
  args: { variant: 'MonthView' },
};
export const WeekView: Story = {
  args: { variant: 'WeekView' },
};
export const WithEvents: Story = {
  args: { variant: 'WithEvents' },
};
