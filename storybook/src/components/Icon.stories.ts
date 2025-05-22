import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Icon from './Icon.vue';
import { tokens, icons, getColorOptions, getWidthOptions, getHeightOptions } from '../tokens.ts';

const widthOptions = getWidthOptions(tokens.width);
const heightOptions = getHeightOptions(tokens.height);
const iconOptions = icons;
const colorOptions = getColorOptions(tokens.color);

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
      options: Object.keys(colorOptions),
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
    width: tokens.width[6], // Standard icon size
    height: tokens.height[6], // Standard icon height (24px)
    color: Object.keys(colorOptions)[5], // Set default color to primary 5
    ariaLabel: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
