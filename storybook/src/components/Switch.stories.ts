import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, watch, reactive, computed } from 'vue';
import Switch from './Switch.vue';
import { icons, color, useTheme } from '../tokens.ts';

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
      options: [null, ...icons],
      description: 'Icon to display in the switch thumb.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    checkedIcon: {
      control: { type: 'select' },
      options: [null, ...icons],
      description: 'Icon to display when switch is checked.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    uncheckedIcon: {
      control: { type: 'select' },
      options: [null, ...icons],
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
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.modelValue);
      watch(() => args.modelValue, (newValue) => {
        checked.value = newValue;
      });
      return {
        checked,
        args: reactive(args),
        onUpdate: (value: boolean) => {
          checked.value = value;
          args.modelValue = value;
        }
      };
    },
    template: `<Switch v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: false,
  },
};

export const Checked: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.modelValue);
      watch(() => args.modelValue, (newValue) => {
        checked.value = newValue;
      });
      return {
        checked,
        args: reactive(args),
        onUpdate: (value: boolean) => {
          checked.value = value;
          args.modelValue = value;
        }
      };
    },
    template: `<Switch v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: true,
  },
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.modelValue);
      watch(() => args.modelValue, (newValue) => {
        checked.value = newValue;
      });
      return {
        checked,
        args: reactive(args),
        onUpdate: (value: boolean) => {
          checked.value = value;
          args.modelValue = value;
        }
      };
    },
    template: `<Switch v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: false,
    label: 'Enable notifications',
  },
};

export const WithDescription: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.modelValue);
      watch(() => args.modelValue, (newValue) => {
        checked.value = newValue;
      });
      return {
        checked,
        args: reactive(args),
        onUpdate: (value: boolean) => {
          checked.value = value;
          args.modelValue = value;
        }
      };
    },
    template: `<Switch v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: true,
    label: 'Dark mode',
    description: 'Switch to dark theme for better viewing in low light conditions.',
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.modelValue);
      watch(() => args.modelValue, (newValue) => {
        checked.value = newValue;
      });
      return {
        checked,
        args: reactive(args),
        onUpdate: (value: boolean) => {
          checked.value = value;
          args.modelValue = value;
        }
      };
    },
    template: `<Switch v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: false,
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.modelValue);
      watch(() => args.modelValue, (newValue) => {
        checked.value = newValue;
      });
      return {
        checked,
        args: reactive(args),
        onUpdate: (value: boolean) => {
          checked.value = value;
          args.modelValue = value;
        }
      };
    },
    template: `<Switch v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: true,
    label: 'Disabled checked',
    disabled: true,
  },
};

export const LeftLabel: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.modelValue);
      watch(() => args.modelValue, (newValue) => {
        checked.value = newValue;
      });
      return {
        checked,
        args: reactive(args),
        onUpdate: (value: boolean) => {
          checked.value = value;
          args.modelValue = value;
        }
      };
    },
    template: `<Switch v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: true,
    label: 'Label on left',
    labelPosition: 'left',
  },
};

export const WithIcons: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.modelValue);
      watch(() => args.modelValue, (newValue) => {
        checked.value = newValue;
      });
      return {
        checked,
        args: reactive(args),
        onUpdate: (value: boolean) => {
          checked.value = value;
          args.modelValue = value;
        }
      };
    },
    template: `<Switch v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: true,
    label: 'Visibility toggle',
    checkedIcon: 'eye',
    uncheckedIcon: 'eye-off',
  },
};

export const WithThumbIcon: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const checked = ref(args.modelValue);
      watch(() => args.modelValue, (newValue) => {
        checked.value = newValue;
      });
      return {
        checked,
        args: reactive(args),
        onUpdate: (value: boolean) => {
          checked.value = value;
          args.modelValue = value;
        }
      };
    },
    template: `<Switch v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: false,
    label: 'Settings switch',
    thumbIcon: 'settings',
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const theme = useTheme();
      const labelStyle = computed(() => ({
        fontSize: '14px',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));

      return {
        small: ref(false),
        medium: ref(true),
        large: ref(false),
        labelStyle,
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <Switch v-model="small" size="small" />
          <span :style="labelStyle">Small</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <Switch v-model="medium" size="medium" />
          <span :style="labelStyle">Medium</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <Switch v-model="large" size="large" />
          <span :style="labelStyle">Large</span>
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
        notifications: ref(true),
        darkMode: ref(false),
        autoSave: ref(true),
        analytics: ref(false),
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
          checkedIcon="eye-off"
          uncheckedIcon="eye"
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
      const theme = useTheme();
      const panelStyle = computed(() => ({
        maxWidth: '500px',
        padding: '24px',
        border: `1px solid ${theme.value === 'dark' ? color.neutral['4'].value : color.neutral['3'].value}`,
        borderRadius: '8px',
        background: theme.value === 'dark' ? color.neutral['1'].value : color.neutral['0'].value,
      }));
      const headingStyle = computed(() => ({
        margin: '0 0 20px 0',
        fontSize: '18px',
        fontWeight: '600',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      const sectionHeadingStyle = computed(() => ({
        margin: '0 0 12px 0',
        fontSize: '14px',
        fontWeight: '600',
        color: theme.value === 'dark' ? color.neutral['8'].value : color.neutral['7'].value,
      }));

      return {
        emailNotifications: ref(true),
        pushNotifications: ref(false),
        smsNotifications: ref(false),
        marketingEmails: ref(false),
        twoFactorAuth: ref(true),
        publicProfile: ref(false),
        panelStyle,
        headingStyle,
        sectionHeadingStyle,
      };
    },
    template: `
      <div :style="panelStyle">
        <h3 :style="headingStyle">Settings</h3>

        <div style="margin-bottom: 24px;">
          <h4 :style="sectionHeadingStyle">Notifications</h4>
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
          <h4 :style="sectionHeadingStyle">Security & Privacy</h4>
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
      const theme = useTheme();
      const formStyle = computed(() => ({
        maxWidth: '400px',
        padding: '24px',
        border: `1px solid ${theme.value === 'dark' ? color.neutral['4'].value : color.neutral['3'].value}`,
        borderRadius: '8px',
        background: theme.value === 'dark' ? color.neutral['1'].value : color.neutral['0'].value,
      }));
      const headingStyle = computed(() => ({
        margin: '0 0 20px 0',
        fontSize: '18px',
        fontWeight: '600',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      const labelStyle = computed(() => ({
        display: 'block',
        marginBottom: '8px',
        fontWeight: '500',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      const inputStyle = computed(() => ({
        width: '100%',
        padding: '12px',
        border: `1px solid ${theme.value === 'dark' ? color.neutral['4'].value : color.neutral['3'].value}`,
        borderRadius: '6px',
        height: '48px',
        boxSizing: 'border-box',
        background: theme.value === 'dark' ? color.neutral['1'].value : color.neutral['0'].value,
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      const dividerStyle = computed(() => ({
        borderTop: `1px solid ${theme.value === 'dark' ? color.neutral['4'].value : color.neutral['3'].value}`,
        paddingTop: '20px',
      }));
      const buttonStyle = computed(() => ({
        padding: '12px 24px',
        background: theme.value === 'dark' ? color.primary['7'].value : color.primary['6'].value,
        color: color.neutral['1'].value,
        border: 'none',
        borderRadius: '6px',
        fontWeight: '500',
        cursor: 'pointer',
        height: '48px',
        boxSizing: 'border-box',
      }));

      const agreeToTerms = ref(false);

      return {
        agreeToTerms,
        subscribeNewsletter: ref(true),
        enableNotifications: ref(false),
        formStyle,
        headingStyle,
        labelStyle,
        inputStyle,
        dividerStyle,
        buttonStyle,
      };
    },
    template: `
      <form :style="formStyle">
        <h3 :style="headingStyle">Account Setup</h3>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <label :style="labelStyle">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              :style="inputStyle"
            />
          </div>

          <div>
            <label :style="labelStyle">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              :style="inputStyle"
            />
          </div>

          <div :style="dividerStyle">
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
            :style="{ ...buttonStyle, opacity: agreeToTerms ? 1 : 0.5 }"
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
