import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Affix from './Affix.vue';

const meta = {
  title: 'Components/Affix',
  component: Affix,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    offset: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: {
    position: 'top',
    offset: 0,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Affixes an element to a specific position as the user scrolls. Supports top, bottom, left, or right affix. Uses design tokens for all appearance.'
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
} satisfies Meta<typeof Affix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: { position: 'top' },
};
export const Bottom: Story = {
  args: { position: 'bottom' },
};
export const Left: Story = {
  args: { position: 'left' },
};
export const Right: Story = {
  args: { position: 'right' },
};
