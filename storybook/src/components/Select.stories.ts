import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Select from './Select.vue';

// Sample options for stories
const basicOptions = [
  'Option 1',
  'Option 2', 
  'Option 3',
  'Option 4',
  'Option 5',
];

const objectOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

const manyOptions = [
  { value: 'afghanistan', label: 'Afghanistan' },
  { value: 'albania', label: 'Albania' },
  { value: 'algeria', label: 'Algeria' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'australia', label: 'Australia' },
  { value: 'austria', label: 'Austria' },
  { value: 'bangladesh', label: 'Bangladesh' },
  { value: 'belgium', label: 'Belgium' },
  { value: 'brazil', label: 'Brazil' },
  { value: 'canada', label: 'Canada' },
  { value: 'china', label: 'China' },
  { value: 'denmark', label: 'Denmark' },
  { value: 'egypt', label: 'Egypt' },
  { value: 'finland', label: 'Finland' },
  { value: 'france', label: 'France' },
  { value: 'germany', label: 'Germany' },
  { value: 'greece', label: 'Greece' },
  { value: 'india', label: 'India' },
  { value: 'italy', label: 'Italy' },
  { value: 'japan', label: 'Japan' },
  { value: 'mexico', label: 'Mexico' },
  { value: 'netherlands', label: 'Netherlands' },
  { value: 'norway', label: 'Norway' },
  { value: 'poland', label: 'Poland' },
  { value: 'spain', label: 'Spain' },
  { value: 'sweden', label: 'Sweden' },
  { value: 'switzerland', label: 'Switzerland' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'usa', label: 'United States' },
];

const optionsWithDisabled = [
  { value: 'available1', label: 'Available Option 1' },
  { value: 'disabled1', label: 'Disabled Option 1', disabled: true },
  { value: 'available2', label: 'Available Option 2' },
  { value: 'disabled2', label: 'Disabled Option 2', disabled: true },
  { value: 'available3', label: 'Available Option 3' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: false,
      description: 'The selected value(s). Can be a single value or array for multiple selection.',
      table: { category: 'Model', defaultValue: { summary: 'null' } },
    },
    options: {
      control: 'object',
      description: 'Array of options. Can be strings/numbers or objects with value, label, and disabled properties.',
      table: { category: 'Content', defaultValue: { summary: '[]' } },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selections.',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select component.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search/filter functionality.',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected.',
      table: { category: 'Content', defaultValue: { summary: 'Select an option...' } },
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input.',
      table: { category: 'Content', defaultValue: { summary: 'Search options...' } },
    },
    noOptionsText: {
      control: 'text',
      description: 'Text shown when no options match the search.',
      table: { category: 'Content', defaultValue: { summary: 'No options found' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the select component.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    labelId: {
      control: 'text',
      description: 'ID of the label element for accessibility.',
      table: { category: 'Accessibility', defaultValue: { summary: 'undefined' } },
    },
    descriptionId: {
      control: 'text',
      description: 'ID of the description element for accessibility.',
      table: { category: 'Accessibility', defaultValue: { summary: 'undefined' } },
    },
  },
  args: {
    options: basicOptions,
    multiple: false,
    disabled: false,
    searchable: false,
    placeholder: 'Select an option...',
    searchPlaceholder: 'Search options...',
    noOptionsText: 'No options found',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        component: `
The Select component provides a flexible dropdown selection interface with support for single and multiple selections, search functionality, keyboard navigation, and comprehensive accessibility features.

## Features

- **Single & Multiple Selection**: Support for both single value and multi-value selection modes
- **Search & Filter**: Optional search functionality to filter large option lists
- **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, Escape, Home, and End
- **Accessibility**: ARIA compliant with proper roles, states, and keyboard handling
- **Flexible Options**: Support for simple values or complex objects with labels and disabled states
- **Responsive Design**: Adapts to different screen sizes and container widths
- **Theme Support**: Fully integrated with the design token system and dark/light themes

## Token Usage

This component uses only design tokens from the token system:
- Colors from \`color\` tokens for all theming
- Spacing from \`spacing\` tokens for padding and gaps
- Typography from \`typography\` tokens for text styling
- Border radius from \`cornerRadius\` tokens
- Shadows from \`shadow\` tokens for elevation
- Transitions from \`transition\` tokens for animations
- Z-index from \`zIndex\` tokens for layering

## Option Formats

Options can be provided in multiple formats:

\`\`\`typescript
// Simple values
const options = ['Option 1', 'Option 2', 'Option 3'];

// Object format with labels
const options = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' },
  { value: 'opt3', label: 'Option 3', disabled: true },
];

// Mixed formats
const options = [
  'simple-option',
  { value: 'complex', label: 'Complex Option', disabled: false },
];
\`\`\`

## Accessibility

The Select component includes comprehensive accessibility features:
- Proper ARIA roles (\`combobox\`, \`listbox\`, \`option\`)
- Keyboard navigation support
- Screen reader friendly announcements
- Focus management
- Proper labeling and descriptions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic select story
export const Default: Story = {
  args: {
    modelValue: null,
    options: basicOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic select with simple string options.',
      },
    },
  },
};

// Pre-selected value
export const WithSelectedValue: Story = {
  args: {
    modelValue: 'Option 2',
    options: basicOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with a pre-selected value.',
      },
    },
  },
};

// Object options
export const ObjectOptions: Story = {
  args: {
    modelValue: null,
    options: objectOptions,
    placeholder: 'Choose a fruit...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select using object options with separate values and labels.',
      },
    },
  },
};

// Searchable select
export const Searchable: Story = {
  args: {
    modelValue: null,
    options: manyOptions,
    searchable: true,
    placeholder: 'Select a country...',
    searchPlaceholder: 'Search countries...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Searchable select with many options. Type to filter the list.',
      },
    },
  },
};

// Multiple selection
export const Multiple: Story = {
  args: {
    modelValue: [],
    options: objectOptions,
    multiple: true,
    placeholder: 'Select multiple fruits...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection mode allowing users to select several options.',
      },
    },
  },
};

// Multiple with search
export const MultipleSearchable: Story = {
  args: {
    modelValue: ['canada', 'france'],
    options: manyOptions,
    multiple: true,
    searchable: true,
    placeholder: 'Select countries...',
    searchPlaceholder: 'Search countries...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection with search functionality and pre-selected values.',
      },
    },
  },
};

// Different sizes
export const Sizes: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <div>
          <label style="display: block; margin-bottom: 4px; font-weight: 600; font-size: 14px;">Small</label>
          <Select v-bind="args" size="small" :modelValue="null" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-weight: 600; font-size: 14px;">Medium (Default)</label>
          <Select v-bind="args" size="medium" :modelValue="null" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-weight: 600; font-size: 14px;">Large</label>
          <Select v-bind="args" size="large" :modelValue="null" />
        </div>
      </div>
    `,
  }),
  args: {
    options: basicOptions,
    placeholder: 'Select size...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select components in different sizes: small, medium, and large.',
      },
    },
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    modelValue: 'Option 2',
    options: basicOptions,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled select component.',
      },
    },
  },
};

// With disabled options
export const DisabledOptions: Story = {
  args: {
    modelValue: null,
    options: optionsWithDisabled,
    placeholder: 'Some options are disabled...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with some disabled options that cannot be selected.',
      },
    },
  },
};

// No options
export const NoOptions: Story = {
  args: {
    modelValue: null,
    options: [],
    searchable: true,
    noOptionsText: 'No options available',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with no available options.',
      },
    },
  },
};

// Custom styling showcase
export const CustomStyling: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <h3 style="margin-bottom: 16px; color: #1f2937;">Custom Select Example</h3>
        <div style="margin-bottom: 8px;">
          <label 
            id="custom-label" 
            style="display: block; margin-bottom: 4px; font-weight: 600; font-size: 14px; color: #374151;"
          >
            Favorite Programming Language
          </label>
          <div id="custom-description" style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">
            Choose your preferred programming language from the list below.
          </div>
          <Select 
            v-bind="args" 
            :modelValue="args.modelValue" 
            labelId="custom-label"
            descriptionId="custom-description"
          />
        </div>
      </div>
    `,
  }),
  args: {
    modelValue: 'typescript',
    options: [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
      { value: 'csharp', label: 'C#' },
      { value: 'php', label: 'PHP' },
      { value: 'ruby', label: 'Ruby' },
      { value: 'go', label: 'Go' },
      { value: 'rust', label: 'Rust' },
      { value: 'swift', label: 'Swift' },
    ],
    searchable: true,
    placeholder: 'Select a language...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with proper labeling and description for enhanced accessibility.',
      },
    },
  },
};

// Stress test with many options
export const StressTest: Story = {
  args: {
    modelValue: null,
    options: Array.from({ length: 1000 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i + 1}`,
      disabled: i % 50 === 0, // Every 50th option is disabled
    })),
    searchable: true,
    placeholder: 'Search through 1000 options...',
    searchPlaceholder: 'Type to filter...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Performance test with 1000 options. Search functionality helps manage large lists.',
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const singleValue = ref(null);
      const multipleValues = ref([]);
      const searchableValue = ref('france');
      
      const handleSingleChange = (value: any) => {
        console.log('Single select changed:', value);
        singleValue.value = value;
      };
      
      const handleMultipleChange = (values: any) => {
        console.log('Multiple select changed:', values);
        multipleValues.value = values;
      };
      
      const handleSearchableChange = (value: any) => {
        console.log('Searchable select changed:', value);
        searchableValue.value = value;
      };
      
      return {
        singleValue,
        multipleValues,
        searchableValue,
        handleSingleChange,
        handleMultipleChange,
        handleSearchableChange,
        basicOptions,
        objectOptions,
        manyOptions,
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <div>
          <h4 style="margin-bottom: 8px;">Single Selection</h4>
          <Select 
            :modelValue="singleValue"
            @update:modelValue="handleSingleChange"
            :options="basicOptions"
            placeholder="Choose one option..."
          />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Selected: {{ singleValue || 'None' }}
          </p>
        </div>
        
        <div>
          <h4 style="margin-bottom: 8px;">Multiple Selection</h4>
          <Select 
            :modelValue="multipleValues"
            @update:modelValue="handleMultipleChange"
            :options="objectOptions"
            multiple
            placeholder="Choose multiple fruits..."
          />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Selected: {{ multipleValues.length > 0 ? multipleValues.join(', ') : 'None' }}
          </p>
        </div>
        
        <div>
          <h4 style="margin-bottom: 8px;">Searchable Selection</h4>
          <Select 
            :modelValue="searchableValue"
            @update:modelValue="handleSearchableChange"
            :options="manyOptions"
            searchable
            placeholder="Search and select a country..."
          />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Selected: {{ searchableValue || 'None' }}
          </p>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing different selection modes with live value updates.',
      },
    },
  },
};
