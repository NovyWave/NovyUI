import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed } from 'vue';
import Icon from './Icon.vue';
import { icons, width, height, color, useTheme } from '../tokens.ts';
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
  render: (args) => ({
    components: { Icon },
    template: `<Icon :name="args.name" :width="args.width" :height="args.height" :color="iconColor" :aria-label="args.ariaLabel" />`,
    setup() {
      const theme = useTheme();
      // Use colors with good visibility in both themes
      const iconColor = computed(() => theme.value === 'dark' ? color.primary['10'].value : color.primary['7'].value);
      return { Icon, args, iconColor };
    },
  }),
  args: {
    name: 'heart',
    width: '16px',
    height: '16px', // 16px
    ariaLabel: 'Small heart icon',
  },
};

export const LargeIcon: Story = {
  render: (args) => ({
    components: { Icon },
    template: `<Icon :name="args.name" :width="args.width" :height="args.height" :color="iconColor" :aria-label="args.ariaLabel" />`,
    setup() {
      const theme = useTheme();
      // Use colors with good visibility in both themes
      const iconColor = computed(() => theme.value === 'dark' ? color.primary['10'].value : color.primary['8'].value);
      return { Icon, args, iconColor };
    },
  }),
  args: {
    name: 'star',
    width: '48px',
    height: '48px', // 48px
    ariaLabel: 'Large star icon',
  },
};

export const VariousIcons: Story = {
  render: (args) => ({
    components: { Icon },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <Icon name="user" :width="args.width" :height="args.height" :color="args.color" aria-label="User profile" />
        <Icon name="heart" :width="args.width" :height="args.height" :color="heartColor" aria-label="Favorite item" />
        <Icon name="star" :width="args.width" :height="args.height" :color="starColor" aria-label="Rating star" />
        <Icon name="settings" :width="args.width" :height="args.height" :color="settingsColor" aria-label="Settings menu" />
        <Icon name="search" :width="args.width" :height="args.height" :color="searchColor" aria-label="Search function" />
      </div>
    `,
    setup() {
      const theme = useTheme();
      // Use much brighter colors in dark mode for better visibility
      const heartColor = computed(() => theme.value === 'dark' ? color.primary['10'].value : color.primary['8'].value);
      const starColor = computed(() => theme.value === 'dark' ? color.primary['11'].value : color.primary['9'].value);
      const settingsColor = computed(() => theme.value === 'dark' ? color.primary['10'].value : color.primary['6'].value);
      const searchColor = computed(() => theme.value === 'dark' ? color.primary['11'].value : color.primary['5'].value);
      return { Icon, width, height, args, heartColor, starColor, settingsColor, searchColor };
    },
  }),
};

export const SizeComparison: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <div :style="labelStyle">Tiny (16px)</div>
          <Icon name="user" :width="width['16px']" :height="height['16px']" :color="iconColor" aria-label="Tiny user icon" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Small (20px)</div>
          <Icon name="user" :width="width['20px']" :height="height['20px']" :color="iconColor" aria-label="Small user icon" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Standard (24px)</div>
          <Icon name="user" :width="width['24px']" :height="height['24px']" :color="iconColor" aria-label="Standard user icon" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Large (32px)</div>
          <Icon name="user" :width="width['32px']" :height="height['32px']" :color="iconColor" aria-label="Large user icon" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Extra Large (48px)</div>
          <Icon name="user" :width="width['48px']" :height="height['48px']" :color="iconColor" aria-label="Extra large user icon" />
        </div>
      </div>
    `,
    setup() {
      const theme = useTheme();
      const labelStyle = computed(() => ({
        marginBottom: '8px',
        fontSize: '12px',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['7'].value,
      }));
      const iconColor = computed(() => theme.value === 'dark' ? color.primary['10'].value : color.primary['7'].value);
      return { Icon, width, height, labelStyle, iconColor };
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
          <div :style="labelStyle">Primary 5</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="primary5Color" aria-label="Primary color heart" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Primary 7</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="primary7Color" aria-label="Darker primary heart" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Primary 9</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="primary9Color" aria-label="Darkest primary heart" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Neutral 7</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="neutral7Color" aria-label="Neutral color heart" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Custom Red</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" color="#ef4444" aria-label="Red colored heart" />
        </div>
      </div>
    `,
    setup() {
      const theme = useTheme();
      const labelStyle = computed(() => ({
        marginBottom: '8px',
        fontSize: '12px',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['7'].value,
      }));
      // Use brighter colors in dark mode for better visibility
      const primary5Color = computed(() => theme.value === 'dark' ? color.primary['9'].value : color.primary['5'].value);
      const primary7Color = computed(() => theme.value === 'dark' ? color.primary['10'].value : color.primary['7'].value);
      const primary9Color = computed(() => theme.value === 'dark' ? color.primary['11'].value : color.primary['9'].value);
      const neutral7Color = computed(() => theme.value === 'dark' ? color.neutral['10'].value : color.neutral['7'].value);
      return { Icon, width, height, args, labelStyle, primary5Color, primary7Color, primary9Color, neutral7Color };
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
          <span :style="textStyle">Icon with descriptive aria-label</span>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <Icon name="heart" :width="args.width" :height="args.height" :color="heartColor" aria-label="Add to favorites" />
          <span :style="textStyle">Icon with action-oriented aria-label</span>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <Icon name="star" :width="args.width" :height="args.height" :color="starColor" aria-label="5 out of 5 stars rating" />
          <span :style="textStyle">Icon with contextual aria-label</span>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <Icon name="settings" :width="args.width" :height="args.height" :color="settingsColor" />
          <span :style="textStyle">Icon without aria-label (uses icon name as fallback)</span>
        </div>
      </div>
    `,
    setup() {
      const theme = useTheme();
      const textStyle = computed(() => ({
        fontSize: '14px',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['7'].value,
      }));
      // Use brighter colors in dark mode for better visibility
      const heartColor = computed(() => theme.value === 'dark' ? color.primary['10'].value : color.primary['8'].value);
      const starColor = computed(() => theme.value === 'dark' ? color.primary['11'].value : color.primary['9'].value);
      const settingsColor = computed(() => theme.value === 'dark' ? color.primary['9'].value : color.primary['6'].value);
      return { Icon, width, height, args, textStyle, heartColor, starColor, settingsColor };
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
          <div :style="labelStyle">Current Args</div>
          <Icon :name="args.name" :width="args.width" :height="args.height" :color="args.color" :aria-label="args.ariaLabel" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Number (40px)</div>
          <Icon :name="args.name" :width="40" :height="40" :color="primary7Color" aria-label="40 pixel star" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Custom CSS (60px)</div>
          <Icon :name="args.name" width="60px" height="60px" :color="primary8Color" aria-label="60 pixel star" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Token (32px)</div>
          <Icon :name="args.name" :width="width['32px']" :height="height['32px']" :color="primary9Color" aria-label="Token sized star" />
        </div>
        <div style="text-align: center;">
          <div :style="labelStyle">Mixed (80x24)</div>
          <Icon :name="args.name" width="80px" :height="height['24px']" :color="primary6Color" aria-label="Wide star icon" />
        </div>
      </div>
    `,
    setup() {
      const theme = useTheme();
      const labelStyle = computed(() => ({
        marginBottom: '8px',
        fontSize: '12px',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['7'].value,
      }));
      // Use brighter colors in dark mode for better visibility
      const primary6Color = computed(() => theme.value === 'dark' ? color.primary['9'].value : color.primary['6'].value);
      const primary7Color = computed(() => theme.value === 'dark' ? color.primary['10'].value : color.primary['7'].value);
      const primary8Color = computed(() => theme.value === 'dark' ? color.primary['10'].value : color.primary['8'].value);
      const primary9Color = computed(() => theme.value === 'dark' ? color.primary['11'].value : color.primary['9'].value);
      return { Icon, width, height, args, labelStyle, primary6Color, primary7Color, primary8Color, primary9Color };
    },
  }),
};
