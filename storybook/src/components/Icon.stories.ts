import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Icon from './Icon.vue';
import { tokens, icons } from '../tokens.ts';

const widthOptions = Object.values(tokens.value.width);
const heightOptions = Object.values(tokens.value.height);
const iconOptions = icons;

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconOptions,
      description: 'Name of the icon to render',
      table: { category: 'Content' },
      type: { name: 'string', required: true },
    },
    width: {
      control: { type: 'select' },
      options: widthOptions,
      description: 'Icon width',
      table: { category: 'Appearance' },
      type: { name: 'string', required: false },
    },
    height: {
      control: { type: 'select' },
      options: heightOptions,
      description: 'Icon height',
      table: { category: 'Appearance' },
      type: { name: 'string', required: false },
    },
    color: {
      control: { type: 'color' },
      description: 'Icon color',
      table: { category: 'Appearance' },
      type: { name: 'string', required: false },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the icon (optional)',
      table: { category: 'Accessibility' },
      type: { name: 'string', required: false },
    },
  },
  args: {
    name: 'user',
    width: tokens.value.width[6], // Standard icon size
    height: tokens.value.height[6], // Standard icon height (24px)
    ariaLabel: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
