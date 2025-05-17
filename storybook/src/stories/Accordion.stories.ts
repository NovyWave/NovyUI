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
    layout: 'fullscreen',
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

const items = [
  { id: 1, title: 'Accordion Item 1', content: 'Content for item 1' },
  { id: 2, title: 'Accordion Item 2', content: 'Content for item 2' },
  { id: 3, title: 'Accordion Item 3', content: 'Content for item 3' },
];

const Template = (args: Record<string, unknown>) => ({
  components: { Accordion },
  setup() { return { args, items }; },
  template: `
    <Accordion v-bind="args" :items="items" />
  `,
});

export const Single: Story = Template.bind({});
Single.args = { variant: 'Single' };

export const Multiple: Story = Template.bind({});
Multiple.args = { variant: 'Multiple' };

export const WithIcons: Story = Template.bind({});
WithIcons.args = { variant: 'WithIcons' };

export const LightTheme: Story = Template.bind({});
LightTheme.args = { variant: 'Single' };
LightTheme.parameters = { backgrounds: { default: 'light' } };

export const DarkTheme: Story = Template.bind({});
DarkTheme.args = { variant: 'Single' };
DarkTheme.decorators = [(_args: unknown, context: unknown) => {
  const ctx = context as { args: Record<string, unknown> };
  return {
    components: { Accordion },
    setup() {
      const items = [
        { id: 1, title: 'Accordion Item 1', content: 'Content for item 1' },
        { id: 2, title: 'Accordion Item 2', content: 'Content for item 2' },
        { id: 3, title: 'Accordion Item 3', content: 'Content for item 3' },
      ];
      return { args: ctx.args, items };
    },
    template: '<div class="dark" style="background: #181A20; padding: 2rem;"><Accordion v-bind="args" :items="items" /></div>',
  };
}];
DarkTheme.parameters = { backgrounds: { default: 'dark' } };
