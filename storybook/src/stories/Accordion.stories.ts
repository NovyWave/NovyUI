import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Accordion from '../components/Accordion.vue';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['Single', 'Multiple', 'WithIcons'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'Single',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'A vertically stacked set of expandable/collapsible items. Only one or multiple items can be open at a time. Supports keyboard navigation and smooth transitions. Uses design tokens for all appearance.'
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
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: { variant: 'Single' },
};
export const Multiple: Story = {
  args: { variant: 'Multiple' },
};
export const WithIcons: Story = {
  args: { variant: 'WithIcons' },
};
