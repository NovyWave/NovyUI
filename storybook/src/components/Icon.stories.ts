import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Icon from './Icon.vue';
import { icons, width, height, color } from '../tokens.ts';
import { getColorOptions, getWidthOptions, getHeightOptions, getIconOptions } from '../tokenOptions.ts';

const widthOptions = getWidthOptions(width);
const heightOptions = getHeightOptions(height);
const iconOptions = getIconOptions(icons);
const colorOptions = getColorOptions(color);

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      description: 'Name of the icon to render',
      table: { category: 'Content' },
      type: { name: 'IconToken', required: true },
    },
    width: {
      control: { type: 'select' },
      options: Object.keys(widthOptions),
      mapping: widthOptions,
      description: 'Icon width',
      table: { category: 'Appearance' },
      type: { name: 'string', required: false },
    },
    height: {
      control: { type: 'select' },
      options: Object.keys(heightOptions),
      mapping: heightOptions,
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
    width: '24px', // Standard icon size (24px) - using width token key
    height: '24px', // Standard icon height (24px) - using height token key
    color: Object.keys(colorOptions)[5], // Set default color to primary 5
    ariaLabel: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const SmallIcon: Story = {
  args: {
    name: 'heart',
    width: '16px',
    height: '16px', // 16px
    color: Object.keys(colorOptions)[3], // primary 3
    ariaLabel: 'Small heart icon',
  },
};

export const LargeIcon: Story = {
  args: {
    name: 'star',
    width: '48px',
    height: '48px', // 48px
    color: Object.keys(colorOptions)[8], // primary 8
    ariaLabel: 'Large star icon',
  },
};

export const VariousIcons: Story = {
  render: (args) => ({
    components: { Icon },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <Icon name="user" :width="args.width" :height="args.height" :color="args.color" aria-label="User profile" />
        <Icon name="heart" :width="args.width" :height="args.height" :color="'primary.8'" aria-label="Favorite item" />
        <Icon name="star" :width="args.width" :height="args.height" :color="'primary.9'" aria-label="Rating star" />
        <Icon name="settings" :width="args.width" :height="args.height" :color="'primary.6'" aria-label="Settings menu" />
        <Icon name="search" :width="args.width" :height="args.height" :color="'primary.5'" aria-label="Search function" />
      </div>
    `,
    setup() {
      return { Icon, width, height, args };
    },
  }),
};

export const SizeComparison: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Tiny (16px)</div>
          <Icon name="user" :width="width['16px']" :height="height['16px']" :color="'primary.7'" aria-label="Tiny user icon" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Small (20px)</div>
          <Icon name="user" :width="width['20px']" :height="height['20px']" :color="'primary.7'" aria-label="Small user icon" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Standard (24px)</div>
          <Icon name="user" :width="width['24px']" :height="height['24px']" :color="'primary.7'" aria-label="Standard user icon" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Large (32px)</div>
          <Icon name="user" :width="width['32px']" :height="height['32px']" :color="'primary.7'" aria-label="Large user icon" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Extra Large (48px)</div>
          <Icon name="user" :width="width['48px']" :height="height['48px']" :color="'primary.7'" aria-label="Extra large user icon" />
        </div>
      </div>
    `,
    setup() {
      return { Icon, width, height };
    },
  }),
};

export const ColorVariations: Story = {
  args: {
    name: 'heart',
    width: '24px',
    height: '24px',
    color: Object.keys(colorOptions)[5],
    ariaLabel: 'Heart icon color variations',
  },
  render: (args) => ({
    components: { Icon },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Primary 5</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="'primary.5'" aria-label="Primary color heart" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Primary 7</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="'primary.7'" aria-label="Darker primary heart" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Primary 9</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="'primary.9'" aria-label="Darkest primary heart" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Neutral 7</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="'neutral.7'" aria-label="Neutral color heart" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom Red</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" color="#ef4444" aria-label="Red colored heart" />
        </div>
      </div>
    `,
    setup() {
      return { Icon, width, height, args };
    },
  }),
};

export const AccessibilityShowcase: Story = {
  render: (args) => ({
    components: { Icon },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <Icon name="user" :width="args.width" :height="args.height" :color="args.color" aria-label="User profile - Click to view profile settings" />
          <span style="font-size: 14px;">Icon with descriptive aria-label</span>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <Icon name="heart" :width="args.width" :height="args.height" :color="'primary.8'" aria-label="Add to favorites" />
          <span style="font-size: 14px;">Icon with action-oriented aria-label</span>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <Icon name="star" :width="args.width" :height="args.height" :color="'primary.9'" aria-label="5 out of 5 stars rating" />
          <span style="font-size: 14px;">Icon with contextual aria-label</span>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <Icon name="settings" :width="args.width" :height="args.height" :color="'primary.6'" />
          <span style="font-size: 14px;">Icon without aria-label (uses icon name as fallback)</span>
        </div>
      </div>
    `,
    setup() {
      return { Icon, width, height, args };
    },
  }),
};

export const CustomSizes: Story = {
  args: {
    name: 'star',
    width: '24px',
    height: '24px',
    color: Object.keys(colorOptions)[5],
    ariaLabel: 'Star icon size comparison',
  },
  render: (args) => ({
    components: { Icon },
    template: `
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Current Args</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="args.color" :aria-label="args.ariaLabel" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Number (40px)</div>
          <Icon :name="args.name" :width="40" :height="40" :color="'primary.7'" aria-label="40 pixel star" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Custom CSS (60px)</div>
          <Icon :name="args.name" width="60px" height="60px" :color="'primary.8'" aria-label="60 pixel star" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Token (32px)</div>
          <Icon :name="args.name" :width="width['32px']" :height="height['32px']" :color="'primary.9'" aria-label="Token sized star" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 8px; font-size: 12px; color: #666;">Mixed (80x24)</div>
          <Icon :name="args.name" width="80px" :height="height['24px']" :color="'primary.6'" aria-label="Wide star icon" />
        </div>
      </div>
    `,
    setup() {
      return { Icon, width, height, args };
    },
  }),
};
