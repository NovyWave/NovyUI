import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed } from 'vue';
import Kbd from './Kbd.vue';
import { color, useTheme } from '../tokens.ts';

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  argTypes: {
    keys: {
      control: 'text',
      description: 'The keyboard key(s) to display. Can be a single key like "Ctrl" or key combination like "Ctrl + C".',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size variant for the keyboard key.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'solid'],
      description: 'Visual variant for the keyboard key.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers.',
      table: { category: 'Accessibility', defaultValue: { summary: '' } },
    },
  },
  args: {
    keys: 'Ctrl',
    size: 'medium',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A semantic element for displaying keyboard keys and shortcuts. The Kbd component represents user input from a keyboard, typically displayed with styling that mimics physical keyboard keys. Perfect for documentation, tutorials, and keyboard shortcut displays. Uses design tokens for consistent theming. See components/Kbd.md for full documentation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    keys: 'Ctrl',
  },
};

export const SingleKey: Story = {
  args: {
    keys: 'Enter',
  },
};

export const FunctionKey: Story = {
  args: {
    keys: 'F1',
  },
};

export const ArrowKey: Story = {
  args: {
    keys: '→',
  },
};

// Key Combinations
export const KeyCombination: Story = {
  args: {
    keys: 'Ctrl + C',
  },
};

export const ComplexCombination: Story = {
  args: {
    keys: 'Ctrl + Shift + P',
  },
};

export const MacCommand: Story = {
  args: {
    keys: '⌘ + Space',
  },
};

// Size Variants
export const Small: Story = {
  args: {
    keys: 'Esc',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    keys: 'Tab',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    keys: 'Enter',
    size: 'large',
  },
};

// Visual Variants
export const Outlined: Story = {
  args: {
    keys: 'Space',
    variant: 'outlined',
  },
};

export const Solid: Story = {
  args: {
    keys: 'Delete',
    variant: 'solid',
  },
};

// Practical Examples
export const CopyPaste: Story = {
  render: () => ({
    components: { Kbd },
    setup() {
      const theme = useTheme();
      const textStyle = computed(() => ({
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      return { textStyle };
    },
    template: `
      <div style="display: flex; gap: 8px; align-items: center; font-family: Inter, sans-serif;">
        <span :style="textStyle">Copy:</span>
        <Kbd keys="Ctrl + C" />
        <span :style="textStyle">Paste:</span>
        <Kbd keys="Ctrl + V" />
      </div>
    `,
  }),
};

export const NavigationKeys: Story = {
  render: () => ({
    components: { Kbd },
    setup() {
      const theme = useTheme();
      const textStyle = computed(() => ({
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      return { textStyle };
    },
    template: `
      <div style="display: flex; gap: 8px; align-items: center; font-family: Inter, sans-serif;">
        <span :style="textStyle">Navigate with</span>
        <Kbd keys="↑" />
        <Kbd keys="↓" />
        <Kbd keys="←" />
        <Kbd keys="→" />
        <span :style="textStyle">arrow keys</span>
      </div>
    `,
  }),
};

export const TextEditing: Story = {
  render: () => ({
    components: { Kbd },
    setup() {
      const theme = useTheme();
      const textStyle = computed(() => ({
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      return { textStyle };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; font-family: Inter, sans-serif;">
        <div style="display: flex; gap: 8px; align-items: center;">
          <Kbd keys="Ctrl + Z" />
          <span :style="textStyle">Undo</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <Kbd keys="Ctrl + Y" />
          <span :style="textStyle">Redo</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <Kbd keys="Ctrl + A" />
          <span :style="textStyle">Select All</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <Kbd keys="Ctrl + F" />
          <span :style="textStyle">Find</span>
        </div>
      </div>
    `,
  }),
};

export const MacShortcuts: Story = {
  render: () => ({
    components: { Kbd },
    setup() {
      const theme = useTheme();
      const textStyle = computed(() => ({
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      return { textStyle };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; font-family: Inter, sans-serif;">
        <div style="display: flex; gap: 8px; align-items: center;">
          <Kbd keys="⌘ + Space" />
          <span :style="textStyle">Spotlight Search</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <Kbd keys="⌘ + Tab" />
          <span :style="textStyle">Switch Apps</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <Kbd keys="⌘ + Shift + 3" />
          <span :style="textStyle">Screenshot</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <Kbd keys="⌘ + Option + Esc" />
          <span :style="textStyle">Force Quit</span>
        </div>
      </div>
    `,
  }),
};

export const SizeComparison: Story = {
  render: () => ({
    components: { Kbd },
    setup() {
      const theme = useTheme();
      const labelStyle = computed(() => ({
        fontSize: '12px',
        color: theme.value === 'dark' ? color.neutral['8'].value : color.neutral['6'].value,
      }));
      return { labelStyle };
    },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; font-family: Inter, sans-serif;">
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <Kbd keys="Small" size="small" />
          <span :style="labelStyle">Small</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <Kbd keys="Medium" size="medium" />
          <span :style="labelStyle">Medium</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <Kbd keys="Large" size="large" />
          <span :style="labelStyle">Large</span>
        </div>
      </div>
    `,
  }),
};

export const VariantComparison: Story = {
  render: () => ({
    components: { Kbd },
    setup() {
      const theme = useTheme();
      const labelStyle = computed(() => ({
        fontSize: '12px',
        color: theme.value === 'dark' ? color.neutral['8'].value : color.neutral['6'].value,
      }));
      return { labelStyle };
    },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; font-family: Inter, sans-serif;">
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <Kbd keys="Default" variant="default" />
          <span :style="labelStyle">Default</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <Kbd keys="Outlined" variant="outlined" />
          <span :style="labelStyle">Outlined</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <Kbd keys="Solid" variant="solid" />
          <span :style="labelStyle">Solid</span>
        </div>
      </div>
    `,
  }),
};

export const SpecialKeys: Story = {
  render: () => ({
    components: { Kbd },
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; font-family: Inter, sans-serif;">
        <Kbd keys="Shift" />
        <Kbd keys="Ctrl" />
        <Kbd keys="Alt" />
        <Kbd keys="Cmd" />
        <Kbd keys="Tab" />
        <Kbd keys="Enter" />
        <Kbd keys="Space" />
        <Kbd keys="Esc" />
        <Kbd keys="Delete" />
        <Kbd keys="Backspace" />
        <Kbd keys="Home" />
        <Kbd keys="End" />
        <Kbd keys="Page Up" />
        <Kbd keys="Page Down" />
        <Kbd keys="Insert" />
        <Kbd keys="Print Screen" />
      </div>
    `,
  }),
};

export const AccessibilityExample: Story = {
  args: {
    keys: 'Alt + Tab',
    ariaLabel: 'Alt plus Tab to switch between applications',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with custom aria-label for screen reader accessibility.',
      },
    },
  },
};

export const CustomContent: Story = {
  render: () => ({
    components: { Kbd },
    setup() {
      const theme = useTheme();
      const textStyle = computed(() => ({
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      return { textStyle };
    },
    template: `
      <div style="display: flex; gap: 8px; align-items: center; font-family: Inter, sans-serif;">
        <span :style="textStyle">Press</span>
        <Kbd>Custom Content</Kbd>
        <span :style="textStyle">using slots</span>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'You can use slots to provide custom content instead of the keys prop.',
      },
    },
  },
};
