import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref } from 'vue';
import Input from './Input.vue';
import { icons, color, useTheme } from '../tokens.ts';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The input value (v-model).',
      table: { category: 'Data', defaultValue: { summary: '' } },
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'],
      description: 'Input type.',
      table: { category: 'Behavior', defaultValue: { summary: 'text' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Input size.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the input read-only.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    required: {
      control: 'boolean',
      description: 'Marks the input as required.',
      table: { category: 'Validation', defaultValue: { summary: false } },
    },
    error: {
      control: 'boolean',
      description: 'Shows error state styling.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    leftIcon: {
      control: { type: 'select' },
      options: [null, ...icons],
      description: 'Icon on the left (IconToken name, or None).',
      table: { category: 'Content', defaultValue: { summary: null } },
    },
    rightIcon: {
      control: { type: 'select' },
      options: [null, ...icons],
      description: 'Icon on the right (IconToken name, or None).',
      table: { category: 'Content', defaultValue: { summary: null } },
    },
    labelId: {
      control: 'text',
      description: 'ID of the associated label element.',
      table: { category: 'Accessibility', defaultValue: { summary: '' } },
    },
    descriptionId: {
      control: 'text',
      description: 'ID of the associated description element.',
      table: { category: 'Accessibility', defaultValue: { summary: '' } },
    },
    clearAriaLabel: {
      control: 'text',
      description: 'Accessible label for the clear button.',
      table: { category: 'Accessibility', defaultValue: { summary: 'Clear input' } },
    },
    passwordToggleAriaLabel: {
      control: 'text',
      description: 'Accessible label for the password toggle button.',
      table: { category: 'Accessibility', defaultValue: { summary: 'Toggle password visibility' } },
    },
  },
  args: {
    modelValue: '',
    type: 'text',
    size: 'medium',
    placeholder: 'Enter text...',
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    leftIcon: null,
    rightIcon: null,
  },
  parameters: {
    docs: {
      description: {
        component:
          'A field for entering and editing a single line of text or data. Supports various input types, icons, password toggle, search with clear functionality, and comprehensive accessibility features. Uses design tokens for all appearance. See components/Input.md for full documentation.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" placeholder="Enter your name..." />`,
  }),
  args: {},
};

export const WithLeftIcon: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" leftIcon="user" placeholder="Enter username..." />`,
  }),
  args: {},
};

export const WithRightIcon: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" rightIcon="mail" placeholder="Enter email..." />`,
  }),
  args: {},
};

export const Email: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" type="email" leftIcon="mail" placeholder="Enter email address..." />`,
  }),
  args: {},
};

export const Password: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" type="password" leftIcon="lock" placeholder="Enter password..." />`,
  }),
  args: {},
};

export const Search: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const theme = useTheme();
      const smallSearch = ref('small search');
      const mediumSearch = ref('medium search');
      const largeSearch = ref('large search');
      const labelStyle = computed(() => ({
        display: 'block',
        marginBottom: '8px',
        fontWeight: '600',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      return { args, labelStyle, smallSearch, mediumSearch, largeSearch };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <div>
          <label :style="labelStyle">Small Search</label>
          <Input
            v-bind="args"
            v-model="smallSearch"
            type="search"
            size="small"
            leftIcon="search"
            placeholder="Small search..."
          />
        </div>

        <div>
          <label :style="labelStyle">Medium Search</label>
          <Input
            v-bind="args"
            v-model="mediumSearch"
            type="search"
            size="medium"
            leftIcon="search"
            placeholder="Medium search..."
          />
        </div>

        <div>
          <label :style="labelStyle">Large Search</label>
          <Input
            v-bind="args"
            v-model="largeSearch"
            type="search"
            size="large"
            leftIcon="search"
            placeholder="Large search..."
          />
        </div>
      </div>
    `,
  }),
  args: {},
};

export const Number: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" type="number" leftIcon="hash" placeholder="Enter amount..." />`,
  }),
  args: {},
};

export const Small: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" size="small" placeholder="Small input..." />`,
  }),
  args: {},
};

export const Large: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" size="large" placeholder="Large input..." />`,
  }),
  args: {},
};

export const Disabled: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" disabled leftIcon="user" placeholder="Disabled input..." />`,
  }),
  args: {},
};

export const Readonly: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('Read-only value');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" readonly leftIcon="eye" />`,
  }),
  args: {},
};

export const Error: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('Invalid input');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" error leftIcon="circle-alert" />`,
  }),
  args: {},
};

export const Required: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" required leftIcon="asterisk" placeholder="Required field..." />`,
  }),
  args: {},
};

export const WithBothIcons: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('john_doe');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" leftIcon="user" rightIcon="check" placeholder="Username..." />`,
  }),
  args: {},
};

export const WithLabel: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" label="Full Name" leftIcon="user" placeholder="Enter your full name..." required />`,
  }),
  args: {},
};

export const WithError: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const value = ref('invalid@');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" label="Email Address" type="email" leftIcon="mail" placeholder="Enter email..." error errorMessage="Please enter a valid email address" required />`,
  }),
  args: {},
};

export const ComplexExample: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      const username = ref('');
      const email = ref('invalid-email');
      const password = ref('');
      const search = ref('smartphones');
      return { args, username, email, password, search };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <Input
          v-bind="args"
          v-model="username"
          type="text"
          label="Username"
          leftIcon="user"
          placeholder="Enter username..."
          required
        />

        <Input
          v-model="email"
          type="email"
          label="Email"
          leftIcon="mail"
          placeholder="Enter email address..."
          error
          errorMessage="Please enter a valid email address"
          required
        />

        <Input
          v-model="password"
          type="password"
          label="Password"
          leftIcon="lock"
          placeholder="Enter password..."
          required
        />

        <Input
          v-model="search"
          type="search"
          label="Search"
          leftIcon="search"
          placeholder="Search products..."
        />
      </div>
    `,
  }),
  args: {},
};
