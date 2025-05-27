import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Input from './Input.vue';
import { icons } from '../tokens.ts';

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
  args: {
    placeholder: 'Enter your name...',
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: 'user',
    placeholder: 'Enter username...',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: 'mail',
    placeholder: 'Enter email...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    leftIcon: 'mail',
    placeholder: 'Enter email address...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    leftIcon: 'lock',
    placeholder: 'Enter password...',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    leftIcon: 'search',
    placeholder: 'Search...',
    modelValue: 'example search',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    leftIcon: 'hash',
    placeholder: 'Enter amount...',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small input...',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large input...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input...',
    leftIcon: 'user',
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
    modelValue: 'Read-only value',
    leftIcon: 'eye',
  },
};

export const Error: Story = {
  args: {
    error: true,
    modelValue: 'Invalid input',
    leftIcon: 'alert-circle',
  },
};

export const Required: Story = {
  args: {
    required: true,
    placeholder: 'Required field...',
    leftIcon: 'asterisk',
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: 'user',
    rightIcon: 'check',
    placeholder: 'Username...',
    modelValue: 'john_doe',
  },
};

export const ComplexExample: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <div>
          <label for="username" style="display: block; margin-bottom: 4px; font-weight: 600;">Username</label>
          <Input
            id="username"
            v-bind="args"
            type="text"
            leftIcon="user"
            placeholder="Enter username..."
            label-id="username-label"
          />
        </div>
        
        <div>
          <label for="email" style="display: block; margin-bottom: 4px; font-weight: 600;">Email</label>
          <Input
            id="email"
            type="email"
            leftIcon="mail"
            placeholder="Enter email address..."
            label-id="email-label"
          />
        </div>
        
        <div>
          <label for="password" style="display: block; margin-bottom: 4px; font-weight: 600;">Password</label>
          <Input
            id="password"
            type="password"
            leftIcon="lock"
            placeholder="Enter password..."
            label-id="password-label"
          />
        </div>
        
        <div>
          <label for="search" style="display: block; margin-bottom: 4px; font-weight: 600;">Search</label>
          <Input
            id="search"
            type="search"
            leftIcon="search"
            placeholder="Search products..."
            label-id="search-label"
            modelValue="smartphones"
          />
        </div>
      </div>
    `,
  }),
  args: {},
};
