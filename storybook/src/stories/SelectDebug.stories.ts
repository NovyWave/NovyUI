import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import Select from '../components/Select.vue';

const meta: Meta<typeof Select> = {
  title: 'Debug/Select Selection Test',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectionTest: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const singleValue = ref(null);
      const multipleValue = ref([]);
      const objectValue = ref(null);

      const simpleOptions = ['Apple', 'Banana', 'Cherry', 'Date'];
      
      const objectOptions = [
        { value: 'js', label: 'JavaScript' },
        { value: 'ts', label: 'TypeScript' },
        { value: 'py', label: 'Python' },
        { value: 'go', label: 'Go' }
      ];

      const onSingleChange = (value: any) => {
        console.log('Single value changed:', value);
        singleValue.value = value;
      };

      const onMultipleChange = (value: any) => {
        console.log('Multiple value changed:', value);
        multipleValue.value = value;
      };

      const onObjectChange = (value: any) => {
        console.log('Object value changed:', value);
        objectValue.value = value;
      };

      return {
        singleValue,
        multipleValue,
        objectValue,
        simpleOptions,
        objectOptions,
        onSingleChange,
        onMultipleChange,
        onObjectChange,
      };
    },
    template: `
      <div style="padding: 20px; max-width: 600px;">
        <h2>Select Component Selection Test</h2>
        
        <div style="margin-bottom: 30px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 4px;">
          <h3>Single Selection</h3>
          <Select 
            :modelValue="singleValue"
            @update:modelValue="onSingleChange"
            :options="simpleOptions"
            placeholder="Choose a fruit..."
          />
          <div style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px; font-family: monospace;">
            <strong>Selected:</strong> {{ JSON.stringify(singleValue) }}<br>
            <strong>Type:</strong> {{ typeof singleValue }}
          </div>
        </div>

        <div style="margin-bottom: 30px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 4px;">
          <h3>Multiple Selection</h3>
          <Select 
            :modelValue="multipleValue"
            @update:modelValue="onMultipleChange"
            :options="simpleOptions"
            :multiple="true"
            placeholder="Choose multiple fruits..."
          />
          <div style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px; font-family: monospace;">
            <strong>Selected:</strong> {{ JSON.stringify(multipleValue) }}<br>
            <strong>Length:</strong> {{ Array.isArray(multipleValue) ? multipleValue.length : 'N/A' }}
          </div>
        </div>

        <div style="margin-bottom: 30px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 4px;">
          <h3>Object Options</h3>
          <Select 
            :modelValue="objectValue"
            @update:modelValue="onObjectChange"
            :options="objectOptions"
            placeholder="Choose a language..."
          />
          <div style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px; font-family: monospace;">
            <strong>Selected:</strong> {{ JSON.stringify(objectValue) }}<br>
            <strong>Label:</strong> {{ objectOptions.find(opt => opt.value === objectValue)?.label || 'None' }}
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Debug test for Select component selection behavior with console logging.',
      },
    },
  },
};
