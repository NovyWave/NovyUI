import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Breadcrumbs from './Breadcrumbs.vue';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['Basic', 'WithIcons', 'CollapsibleAndOverflow'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'Basic',
    disabled: false,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A navigation aid that displays the user\'s current location within a site hierarchy. Each item is a clickable link except the last. Uses design tokens for all appearance.'
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
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
  components: { Breadcrumbs },
  setup() { return { args }; },
  template: `
    <Breadcrumbs v-bind="args">
      <a href="#">Home</a> /
      <a href="#">Library</a> /
      <span>Data</span>
    </Breadcrumbs>
  `,
});

export const Basic: Story = Template.bind({});
Basic.args = { variant: 'Basic' };

export const WithIcons: Story = Template.bind({});
WithIcons.args = { variant: 'WithIcons' };

export const CollapsibleAndOverflow: Story = Template.bind({});
CollapsibleAndOverflow.args = { variant: 'CollapsibleAndOverflow' };
