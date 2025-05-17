import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Blockquote from './Blockquote.vue';

const meta = {
  title: 'Components/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['WithAuthor', 'Simple', 'Expandable'] },
    author: { control: 'text' },
    expandable: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'WithAuthor',
    author: 'Jane Doe',
    expandable: false,
    disabled: false,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A styled container for displaying quoted text or citations. May include citation or author, and support copy/expand actions. Uses design tokens for all appearance.'
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
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
  components: { Blockquote },
  setup() { return { args }; },
  template: `<Blockquote v-bind="args">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Blockquote>`
});

export const WithAuthor: Story = Template.bind({});
WithAuthor.args = { variant: 'WithAuthor', author: 'Jane Doe' };

export const Simple: Story = Template.bind({});
Simple.args = { variant: 'Simple', author: '' };

export const Expandable: Story = Template.bind({});
Expandable.args = { variant: 'Expandable', expandable: true };
