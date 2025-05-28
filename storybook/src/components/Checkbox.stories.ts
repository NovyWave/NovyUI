import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, computed, watch, reactive } from 'vue';
import Checkbox from './Checkbox.vue';
import { color, useTheme } from '../tokens.ts';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'The checked state of the checkbox (or array for multiple values).',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    value: {
      control: 'text',
      description: 'Value for the checkbox when used with array modelValue.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the checkbox.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    required: {
      control: 'boolean',
      description: 'Makes the checkbox required.',
      table: { category: 'Validation', defaultValue: { summary: false } },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Shows the checkbox in an indeterminate state.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    description: {
      control: 'text',
      description: 'Description text for the checkbox.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
  },
  args: {
    modelValue: false,
    size: 'medium',
    disabled: false,
    required: false,
    indeterminate: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox component for selecting one or more options. Supports individual boolean values or array-based multiple selections.\n\n**Features:**\n\n- Three sizes (small, medium, large)\n- Label and description support\n- Indeterminate state for partial selections\n- Array value support for multiple selections\n- Disabled and required states\n- Full keyboard accessibility\n- Smooth animations\n\n**Usage:**\n\n```vue\n<Checkbox v-model="agreed" label="I agree to the terms" />\n<Checkbox v-model="selectedItems" value="item1" label="Item 1" />\n<Checkbox :indeterminate="someSelected" label="Select All" />\n```',
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
    components: { Checkbox },
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
    template: `<Checkbox v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: false,
  },
};

export const Checked: Story = {
  render: (args) => ({
    components: { Checkbox },
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
    template: `<Checkbox v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: true,
  },
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(args.modelValue);
      return {
        checked,
        label: args.label,
        disabled: args.disabled,
        required: args.required,
        indeterminate: args.indeterminate,
        size: args.size,
        description: args.description,
        value: args.value,
      };
    },
    template: `<Checkbox
      v-model="checked"
      :label="label"
      :disabled="disabled"
      :required="required"
      :indeterminate="indeterminate"
      :size="size"
      :description="description"
      :value="value"
    />`,
  }),
  args: {
    modelValue: false,
    label: 'Accept terms and conditions',
  },
};

export const WithDescription: Story = {
  render: (args) => ({
    components: { Checkbox },
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
    template: `<Checkbox v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: true,
    label: 'Email notifications',
    description: 'Receive email notifications about important updates and changes.',
  },
};

export const Indeterminate: Story = {
  render: (args) => ({
    components: { Checkbox },
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
    template: `<Checkbox v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: false,
    label: 'Select all items',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Checkbox },
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
    template: `<Checkbox v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: false,
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: (args) => ({
    components: { Checkbox },
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
    template: `<Checkbox v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: true,
    label: 'Disabled checked',
    disabled: true,
  },
};

export const Required: Story = {
  render: (args) => ({
    components: { Checkbox },
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
    template: `<Checkbox v-model="checked" @update:modelValue="onUpdate" v-bind="args" />`,
  }),
  args: {
    modelValue: false,
    label: 'Required checkbox',
    description: 'This checkbox is required to proceed.',
    required: true,
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const small = ref(false);
      const medium = ref(true);
      const large = ref(false);
      return {
        small,
        medium,
        large,
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <Checkbox v-model="small" size="small" label="Small checkbox" />
        <Checkbox v-model="medium" size="medium" label="Medium checkbox" />
        <Checkbox v-model="large" size="large" label="Large checkbox" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox component in different sizes.',
      },
    },
  },
};

export const MultipleSelection: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const theme = useTheme();
      const headingStyle = computed(() => ({
        margin: '0 0 8px 0',
        fontSize: '16px',
        fontWeight: '600',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      const statusStyle = computed(() => ({
        marginTop: '16px',
        padding: '12px',
        background: theme.value === 'dark' ? color.neutral['2'].value : color.neutral['1'].value,
        borderRadius: '6px',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));

      const selectedFruits = ref(['apple', 'banana']);
      const fruits = [
        { value: 'apple', label: 'Apple', description: 'Crisp and sweet' },
        { value: 'banana', label: 'Banana', description: 'Rich in potassium' },
        { value: 'orange', label: 'Orange', description: 'High in vitamin C' },
        { value: 'grape', label: 'Grape', description: 'Perfect for snacking' },
      ];
      return {
        selectedFruits,
        fruits,
        headingStyle,
        statusStyle,
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h3 :style="headingStyle">Select your favorite fruits:</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <Checkbox
            v-for="fruit in fruits"
            :key="fruit.value"
            v-model="selectedFruits"
            :value="fruit.value"
            :label="fruit.label"
            :description="fruit.description"
          />
        </div>
        <div :style="statusStyle">
          <strong>Selected:</strong> {{ selectedFruits.join(', ') || 'None' }}
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes with array-based selection.',
      },
    },
  },
};

export const SelectAllPattern: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const theme = useTheme();
      const dividerStyle = computed(() => ({
        border: 'none',
        borderTop: `1px solid ${theme.value === 'dark' ? color.neutral['4'].value : color.neutral['3'].value}`,
        margin: '8px 0',
      }));
      const statusStyle = computed(() => ({
        marginTop: '16px',
        padding: '12px',
        background: theme.value === 'dark' ? color.neutral['2'].value : color.neutral['1'].value,
        borderRadius: '6px',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));

      const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
      const selectedItems = ref(['Item 1', 'Item 3']);

      const allSelected = computed(() => selectedItems.value.length === items.length);
      const someSelected = computed(() => selectedItems.value.length > 0 && selectedItems.value.length < items.length);

      const toggleSelectAll = () => {
        if (allSelected.value) {
          selectedItems.value = [];
        } else {
          selectedItems.value = [...items];
        }
      };

      return {
        items,
        selectedItems,
        allSelected,
        someSelected,
        toggleSelectAll,
        dividerStyle,
        statusStyle,
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Checkbox
          :modelValue="allSelected"
          :indeterminate="someSelected"
          label="Select All"
          @update:modelValue="toggleSelectAll"
        />
        <hr :style="dividerStyle" />
        <div style="display: flex; flex-direction: column; gap: 12px; margin-left: 24px;">
          <Checkbox
            v-for="item in items"
            :key="item"
            v-model="selectedItems"
            :value="item"
            :label="item"
          />
        </div>
        <div :style="statusStyle">
          <strong>Selected:</strong> {{ selectedItems.join(', ') || 'None' }}
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Select all pattern with indeterminate state.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => ({
    components: { Checkbox },
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
      const dividerStyle = computed(() => ({
        borderTop: `1px solid ${theme.value === 'dark' ? color.neutral['4'].value : color.neutral['3'].value}`,
        paddingTop: '20px',
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
        boxSizing: 'border-box',
        background: theme.value === 'dark' ? color.neutral['1'].value : color.neutral['0'].value,
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      const buttonStyle = computed(() => ({
        width: '100%',
        padding: '12px',
        background: theme.value === 'dark' ? color.primary['7'].value : color.primary['6'].value,
        color: color.neutral['1'].value,
        border: 'none',
        borderRadius: '6px',
        fontWeight: '500',
        cursor: 'pointer',
        boxSizing: 'border-box',
      }));

      const agreeToTerms = ref(false);
      const subscribeNewsletter = ref(true);
      const enableNotifications = ref(false);
      const marketingEmails = ref(false);
      return {
        agreeToTerms,
        subscribeNewsletter,
        enableNotifications,
        marketingEmails,
        formStyle,
        headingStyle,
        dividerStyle,
        labelStyle,
        inputStyle,
        buttonStyle,
      };
    },
    template: `
      <form :style="formStyle">
        <h3 :style="headingStyle">Account Preferences</h3>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <label :style="labelStyle">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              :style="inputStyle"
            />
          </div>

          <div :style="dividerStyle">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <Checkbox
                v-model="agreeToTerms"
                label="I agree to the Terms of Service and Privacy Policy"
                description="Required to create an account"
                required
              />
              <Checkbox
                v-model="subscribeNewsletter"
                label="Subscribe to newsletter"
                description="Get weekly updates about new features and tips"
              />
              <Checkbox
                v-model="enableNotifications"
                label="Enable push notifications"
                description="Receive important account notifications"
              />
              <Checkbox
                v-model="marketingEmails"
                label="Receive marketing emails"
                description="Get promotional offers and product updates"
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
        story: 'Checkbox components integrated in a form with validation.',
      },
    },
  },
};

export const States: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const theme = useTheme();
      const headingStyle = computed(() => ({
        margin: '0 0 12px 0',
        fontSize: '14px',
        fontWeight: '600',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      return { headingStyle };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px;">
        <div>
          <h4 :style="headingStyle">Normal States</h4>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <Checkbox :modelValue="false" label="Unchecked" />
            <Checkbox :modelValue="true" label="Checked" />
            <Checkbox :indeterminate="true" label="Indeterminate" />
          </div>
        </div>

        <div>
          <h4 :style="headingStyle">Disabled States</h4>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <Checkbox :modelValue="false" label="Disabled unchecked" disabled />
            <Checkbox :modelValue="true" label="Disabled checked" disabled />
            <Checkbox :indeterminate="true" label="Disabled indeterminate" disabled />
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All checkbox states including normal and disabled variants.',
      },
    },
  },
};
