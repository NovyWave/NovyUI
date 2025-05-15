import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from '../components/Avatar.vue';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['Image', 'Initials', 'WithStatus', 'Group'] },
    status: { control: 'select', options: ['Online', 'Offline', 'None'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'Image',
    status: 'None',
    disabled: false,
  },
  parameters: {
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

export const Image: Story = {
  args: { variant: 'Image' },
};
export const Initials: Story = {
  args: { variant: 'Initials' },
};
export const WithStatus: Story = {
  args: { variant: 'WithStatus', status: 'Online' },
};
export const Group: Story = {
  args: { variant: 'Group' },
};
