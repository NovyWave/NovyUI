import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed } from 'vue';
import TextArea from './TextArea.vue';
import { color, useTheme } from '../tokens.ts';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The text content of the textarea.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the textarea.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the textarea read-only.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    required: {
      control: 'boolean',
      description: 'Makes the textarea required.',
      table: { category: 'Validation', defaultValue: { summary: false } },
    },
    error: {
      control: 'boolean',
      description: 'Shows the textarea in an error state.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of visible text lines.',
      table: { category: 'Layout', defaultValue: { summary: 4 } },
    },
    maxlength: {
      control: { type: 'number', min: 0 },
      description: 'Maximum number of characters allowed.',
      table: { category: 'Validation', defaultValue: { summary: 'undefined' } },
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'both', 'horizontal', 'vertical'],
      description: 'Resize behavior of the textarea.',
      table: { category: 'Behavior', defaultValue: { summary: 'vertical' } },
    },
    autoResize: {
      control: 'boolean',
      description: 'Automatically resize height based on content.',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    showCharacterCount: {
      control: 'boolean',
      description: 'Show character count indicator.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
  },
  args: {
    modelValue: '',
    size: 'medium',
    placeholder: '',
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    rows: 4,
    resize: 'vertical',
    autoResize: false,
    showCharacterCount: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'A multi-line text input component for longer text content. Supports auto-resize, character counting, and various validation states.\n\n**Features:**\n\n- Three sizes (small, medium, large)\n- Auto-resize functionality\n- Character count with limit display\n- Multiple resize modes\n- Error and validation states\n- Tab key support for indentation\n- Full keyboard accessibility\n\n**Usage:**\n\n```vue\n<TextArea v-model="message" placeholder="Enter your message" />\n<TextArea v-model="bio" :maxlength="500" showCharacterCount />\n<TextArea v-model="code" autoResize resize="none" />\n```',
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
    placeholder: 'Enter your text here...',
  },
};

export const WithContent: Story = {
  args: {
    modelValue: 'This is some sample content in the textarea. You can edit this text to see how the component behaves with different amounts of content.',
    placeholder: 'Enter your text here...',
  },
};

export const WithCharacterCount: Story = {
  args: {
    modelValue: 'This textarea shows a character count.',
    placeholder: 'Type something...',
    showCharacterCount: true,
  },
};

export const WithMaxLength: Story = {
  args: {
    modelValue: 'This textarea has a maximum length of 100 characters.',
    placeholder: 'Maximum 100 characters...',
    maxlength: 100,
    showCharacterCount: true,
  },
};

export const AutoResize: Story = {
  args: {
    modelValue: 'This textarea automatically resizes as you type more content. Try adding multiple lines to see it grow!',
    placeholder: 'Type multiple lines...',
    autoResize: true,
    resize: 'none',
  },
};

export const Error: Story = {
  args: {
    modelValue: 'This content has an error',
    placeholder: 'Enter valid content...',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    modelValue: 'This textarea is disabled and cannot be edited.',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    modelValue: 'This textarea is read-only. You can select and copy the text but cannot edit it.',
    readonly: true,
  },
};

export const Required: Story = {
  args: {
    placeholder: 'This field is required...',
    required: true,
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { TextArea },
    setup() {
      const theme = useTheme();
      const headingStyle = computed(() => ({
        margin: '0 0 8px 0',
        fontSize: '14px',
        fontWeight: '600',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));

      return {
        smallText: 'Small textarea',
        mediumText: 'Medium textarea with more content to show the size difference',
        largeText: 'Large textarea with even more content to demonstrate how the different sizes look and feel when you have longer text content',
        headingStyle,
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 :style="headingStyle">Small</h3>
          <TextArea v-model="smallText" size="small" placeholder="Small textarea..." />
        </div>
        <div>
          <h3 :style="headingStyle">Medium</h3>
          <TextArea v-model="mediumText" size="medium" placeholder="Medium textarea..." />
        </div>
        <div>
          <h3 :style="headingStyle">Large</h3>
          <TextArea v-model="largeText" size="large" placeholder="Large textarea..." />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'TextArea component in different sizes.',
      },
    },
  },
};

export const ResizeModes: Story = {
  render: () => ({
    components: { TextArea },
    setup() {
      return {
        noneText: 'No resize',
        verticalText: 'Vertical resize only',
        horizontalText: 'Horizontal resize only',
        bothText: 'Both directions',
      };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px;">
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">None</h4>
          <TextArea v-model="noneText" resize="none" />
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Vertical</h4>
          <TextArea v-model="verticalText" resize="vertical" />
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Horizontal</h4>
          <TextArea v-model="horizontalText" resize="horizontal" />
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Both</h4>
          <TextArea v-model="bothText" resize="both" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different resize modes for the textarea.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => ({
    components: { TextArea },
    setup() {
      return {
        subject: '',
        message: '',
        feedback: '',
      };
    },
    template: `
      <form style="max-width: 500px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Contact Form</h3>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Subject</label>
            <input
              v-model="subject"
              type="text"
              placeholder="Enter subject"
              style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;"
            />
          </div>

          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Message *</label>
            <TextArea
              v-model="message"
              placeholder="Enter your message..."
              :maxlength="500"
              showCharacterCount
              required
              rows="6"
            />
          </div>

          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Additional Feedback</label>
            <TextArea
              v-model="feedback"
              placeholder="Any additional feedback (optional)..."
              autoResize
              resize="none"
              size="small"
            />
          </div>

          <button
            type="submit"
            :disabled="!message.trim()"
            style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-weight: 500; cursor: pointer;"
            :style="{ opacity: message.trim() ? 1 : 0.5 }"
          >
            Send Message
          </button>
        </div>
      </form>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'TextArea components integrated in a contact form.',
      },
    },
  },
};

export const CodeEditor: Story = {
  render: () => ({
    components: { TextArea },
    setup() {
      const theme = useTheme();
      const headingStyle = computed(() => ({
        margin: '0 0 12px 0',
        fontSize: '16px',
        fontWeight: '600',
        color: theme.value === 'dark' ? color.neutral['11'].value : color.neutral['9'].value,
      }));
      const tipStyle = computed(() => ({
        margin: '8px 0 0 0',
        fontSize: '12px',
        color: theme.value === 'dark' ? color.neutral['8'].value : color.neutral['7'].value,
      }));

      return {
        code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`,
        headingStyle,
        tipStyle,
      };
    },
    template: `
      <div style="max-width: 600px;">
        <h3 :style="headingStyle">Code Editor</h3>
        <TextArea
          v-model="code"
          placeholder="Enter your code..."
          :rows="12"
          resize="both"
          showCharacterCount
          style="font-family: 'Fira Code', 'Monaco', 'Consolas', monospace; font-size: 14px; line-height: 1.5;"
        />
        <p :style="tipStyle">
          Tip: Use Tab key for indentation
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'TextArea configured as a simple code editor with monospace font.',
      },
    },
  },
};

export const States: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px;">
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Normal</h4>
          <TextArea modelValue="Normal state" />
        </div>

        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Error</h4>
          <TextArea modelValue="Error state" error />
        </div>

        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Disabled</h4>
          <TextArea modelValue="Disabled state" disabled />
        </div>

        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Read-only</h4>
          <TextArea modelValue="Read-only state" readonly />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All textarea states including normal, error, disabled, and read-only.',
      },
    },
  },
};
