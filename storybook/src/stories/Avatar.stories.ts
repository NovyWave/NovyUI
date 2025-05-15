import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Avatar from '../components/Avatar.vue';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['Image', 'Initials', 'WithStatus', 'Group'] },
    status: { control: 'select', options: ['Online', 'Offline', 'None'] },
    src: { control: 'text' },
    alt: { control: 'text' },
    initials: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'Image',
    status: 'None',
    src: '',
    alt: 'Avatar',
    initials: 'AB',
    disabled: false,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A visual representation of a user or entity, typically shown as an image, initials, or icon. Uses design tokens for all appearance.'
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
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
  components: { Avatar },
  setup() { return { args }; },
  template: `<Avatar v-bind="args" />`,
});

export const Image: Story = Template.bind({});
Image.args = { variant: 'Image', src: '', initials: 'AB' };

export const Initials: Story = Template.bind({});
Initials.args = { variant: 'Initials', initials: 'AB' };

export const WithStatus: Story = Template.bind({});
WithStatus.args = { variant: 'WithStatus', status: 'Online', initials: 'AB' };

export const Group: Story = Template.bind({});
Group.args = { variant: 'Group' };
