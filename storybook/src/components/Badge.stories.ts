import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Badge from './Badge.vue';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['Solid', 'Outline', 'Dot', 'WithIcon', 'WithCount'] },
    count: { control: 'number' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'Solid',
    count: 0,
    icon: '',
    disabled: false,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A small indicator used to display status, count, or highlight information. Can display a number, icon, or short text. Uses design tokens for all appearance.'
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
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
  components: { Badge },
  setup() { return { args }; },
  template: `<Badge v-bind="args">Badge</Badge>`
});

export const Solid: Story = Template.bind({});
Solid.args = { variant: 'Solid' };

export const Outline: Story = Template.bind({});
Outline.args = { variant: 'Outline' };

export const Dot: Story = Template.bind({});
Dot.args = { variant: 'Dot' };

export const WithIcon: Story = Template.bind({});
WithIcon.args = { variant: 'WithIcon', icon: 'star' };

export const WithCount: Story = Template.bind({});
WithCount.args = { variant: 'WithCount', count: 5 };
