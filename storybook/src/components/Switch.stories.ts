import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Switch from './Switch.vue';
import { icons } from '../tokens.ts';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'The checked state of the switch.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the switch.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    required: {
      control: 'boolean',
      description: 'Makes the switch required.',
      table: { category: 'Validation', defaultValue: { summary: false } },
    },
    label: {
      control: 'text',
      description: 'Label text for the switch.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    description: {
      control: 'text',
      description: 'Description text for the switch.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the label relative to the switch.',
      table: { category: 'Layout', defaultValue: { summary: 'right' } },
    },
    thumbIcon: {
      control: { type: 'select' },
      options: [null, ...Object.keys(icons)],
      description: 'Icon to display in the switch thumb.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    checkedIcon: {
      control: { type: 'select' },
      options: [null, ...Object.keys(icons)],
      description: 'Icon to display when switch is checked.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    uncheckedIcon: {
      control: { type: 'select' },
      options: [null, ...Object.keys(icons)],
      description: 'Icon to display when switch is unchecked.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
  },
  args: {
    modelValue: false,
    size: 'medium',
    disabled: false,
    required: false,
    labelPosition: 'right',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A toggle switch component for binary choices. Provides a more visual alternative to checkboxes for on/off states.\n\n**Features:**\n\n- Three sizes (small, medium, large)\n- Label and description support\n- Flexible label positioning\n- Optional icons in thumb and track\n- Disabled and required states\n- Full keyboard accessibility\n- Smooth animations\n\n**Usage:**\n\n```vue\n<Switch v-model="enabled" label="Enable notifications" />\n<Switch v-model="darkMode" checkedIcon="sun" uncheckedIcon="moon" />\n```',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: false,
  },
};

export const Checked: Story = {
  args: {
    modelValue: true,
  },
};

export const WithLabel: Story = {
  args: {
    modelValue: false,
    label: 'Enable notifications',
  },
};

export const WithDescription: Story = {
  args: {
    modelValue: true,
    label: 'Dark mode',
    description: 'Switch to dark theme for better viewing in low light conditions.',
  },
};

export const Disabled: Story = {
  args: {
    modelValue: false,
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    modelValue: true,
    label: 'Disabled checked',
    disabled: true,
  },
};

export const LeftLabel: Story = {
  args: {
    modelValue: true,
    label: 'Label on left',
    labelPosition: 'left',
  },
};

export const WithIcons: Story = {
  args: {
    modelValue: true,
    label: 'Theme toggle',
    checkedIcon: 'sun',
    uncheckedIcon: 'moon',
  },
};

export const WithThumbIcon: Story = {
  args: {
    modelValue: false,
    label: 'Power switch',
    thumbIcon: 'power',
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      return {
        small: false,
        medium: true,
        large: false,
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <Switch v-model="small" size="small" />
          <span style="font-size: 14px;">Small</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <Switch v-model="medium" size="medium" />
          <span style="font-size: 14px;">Medium</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <Switch v-model="large" size="large" />
          <span style="font-size: 14px;">Large</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Switch component in different sizes.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      return {
        notifications: true,
        darkMode: false,
        autoSave: true,
        analytics: false,
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; max-width: 400px;">
        <Switch 
          v-model="notifications" 
          label="Push notifications"
          description="Receive notifications about important updates and messages."
        />
        <Switch 
          v-model="darkMode" 
          label="Dark mode"
          description="Switch to dark theme for better viewing in low light."
          checkedIcon="moon"
          uncheckedIcon="sun"
        />
        <Switch 
          v-model="autoSave" 
          label="Auto-save"
          description="Automatically save your work every few minutes."
        />
        <Switch 
          v-model="analytics" 
          label="Analytics"
          description="Help us improve by sharing anonymous usage data."
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive switches with labels and descriptions.',
      },
    },
  },
};

export const SettingsPanel: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      return {
        emailNotifications: true,
        pushNotifications: false,
        smsNotifications: false,
        marketingEmails: false,
        twoFactorAuth: true,
        publicProfile: false,
      };
    },
    template: `
      <div style="max-width: 500px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Settings</h3>
        
        <div style="margin-bottom: 24px;">
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #6b7280;">Notifications</h4>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <Switch 
              v-model="emailNotifications" 
              label="Email notifications"
              description="Receive notifications via email"
            />
            <Switch 
              v-model="pushNotifications" 
              label="Push notifications"
              description="Receive push notifications on your device"
            />
            <Switch 
              v-model="smsNotifications" 
              label="SMS notifications"
              description="Receive notifications via text message"
            />
            <Switch 
              v-model="marketingEmails" 
              label="Marketing emails"
              description="Receive promotional and marketing emails"
            />
          </div>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #6b7280;">Security & Privacy</h4>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <Switch 
              v-model="twoFactorAuth" 
              label="Two-factor authentication"
              description="Add an extra layer of security to your account"
            />
            <Switch 
              v-model="publicProfile" 
              label="Public profile"
              description="Make your profile visible to other users"
            />
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Settings panel with grouped switches.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      return {
        agreeToTerms: false,
        subscribeNewsletter: true,
        enableNotifications: false,
      };
    },
    template: `
      <form style="max-width: 400px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Account Setup</h3>
        
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;"
            />
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;"
            />
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <Switch 
                v-model="agreeToTerms" 
                label="I agree to the Terms of Service"
                description="Required to create an account"
                required
              />
              <Switch 
                v-model="subscribeNewsletter" 
                label="Subscribe to newsletter"
                description="Get updates about new features and tips"
              />
              <Switch 
                v-model="enableNotifications" 
                label="Enable notifications"
                description="Receive important account notifications"
              />
            </div>
          </div>
          
          <button 
            type="submit"
            :disabled="!agreeToTerms"
            style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-weight: 500; cursor: pointer; opacity: agreeToTerms ? 1 : 0.5;"
          >
            Create Account
          </button>
        </div>
      </form>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Switch components integrated in a form with validation.',
      },
    },
  },
};
