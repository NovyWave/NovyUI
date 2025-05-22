import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Icon from './Icon.vue';
import { tokens, icons, getAllColorOptions } from '../tokens.ts';

const widthOptions = Object.entries(tokens.value.width).reduce((acc, [key, value]) => {
  acc[`Width ${key} (${value})`] = value;
  return acc;
}, {} as Record<string, string>);
const heightOptions = Object.entries(tokens.value.height).reduce((acc, [key, value]) => {
  acc[`Height ${key} (${value})`] = value;
  return acc;
}, {} as Record<string, string>);
const iconOptions = icons;
const colorOptions = getAllColorOptions().reduce((acc, { key, value }) => {
  acc[key] = value;
  return acc;
}, {} as Record<string, string>);

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
      type: { name: 'IconToken', required: true },
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
      control: { type: 'select' },
      options: colorOptions,
      description: 'Icon color',
      table: { category: 'Appearance' },
      type: { name: 'string', required: false },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the icon (optional). Defaults to the icon name if not provided.',
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
