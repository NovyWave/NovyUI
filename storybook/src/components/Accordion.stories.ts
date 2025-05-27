import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Accordion from './Accordion.vue';
import { icons } from '../tokens.ts';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of accordion items with title, content, disabled state, and optional icons.',
      table: { 
        category: 'Data', 
        defaultValue: { summary: '[]' },
        type: { summary: 'AccordionItemData[]' }
      },
    },
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Whether only one item can be open at a time (single) or multiple items can be open (multiple).',
      table: { category: 'Behavior', defaultValue: { summary: 'single' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size variant affecting padding, font sizes, and overall spacing.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'separated'],
      description: 'Visual style variant. Default has subtle borders, bordered has stronger borders, separated adds gaps between items.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the expand/collapse icon.',
      table: { category: 'Appearance', defaultValue: { summary: 'right' } },
    },
    defaultOpenItems: {
      control: 'object',
      description: 'Array of item IDs that should be open by default.',
      table: { 
        category: 'State', 
        defaultValue: { summary: '[]' },
        type: { summary: 'string[]' }
      },
    },
    openItems: {
      control: 'object',
      description: 'Controlled state: array of currently open item IDs. Use with @update:openItems for controlled mode.',
      table: { 
        category: 'State', 
        defaultValue: { summary: 'undefined' },
        type: { summary: 'string[] | undefined' }
      },
    },
  },
  args: {
    type: 'single',
    size: 'medium',
    variant: 'default',
    iconPosition: 'right',
    defaultOpenItems: [],
    items: [
      {
        id: 'item1',
        title: 'Getting Started',
        content: 'Learn the basics of our platform with step-by-step guides and tutorials. This section covers everything from initial setup to your first project.',
        disabled: false,
      },
      {
        id: 'item2',
        title: 'Advanced Features',
        content: 'Explore powerful features including advanced configuration options, integrations, and customization possibilities that will enhance your workflow.',
        disabled: false,
      },
      {
        id: 'item3',
        title: 'API Documentation',
        content: 'Complete reference for our REST API endpoints, authentication methods, and code examples in multiple programming languages.',
        disabled: false,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        component:
          'A collapsible content component that allows users to show and hide sections of content. Supports single or multiple open modes, keyboard navigation, and accessibility features. Uses design tokens for consistent styling.\n\n**Key Features:**\n\n- **Single/Multiple modes**: Control whether one or multiple items can be open\n- **Keyboard navigation**: Enter/Space to toggle, arrow keys to navigate\n- **Accessibility**: Proper ARIA attributes and screen reader support\n- **Smooth animations**: CSS transitions for expand/collapse\n- **Flexible content**: Supports rich HTML content in both title and content areas\n- **Icon customization**: Configurable icon position and per-item icons\n\n**Data Structure:**\n\n```typescript\ninterface AccordionItemData {\n  id: string;\n  title: string;\n  content: string;\n  disabled?: boolean;\n  icon?: string; // IconToken name\n}\n```',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'keyboard-navigation', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    defaultOpenItems: ['item1', 'item3'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple mode allows several accordion items to be open simultaneously. Use `defaultOpenItems` to specify which items should be open initially.',
      },
    },
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
  },
  parameters: {
    docs: {
      description: {
        story: 'Bordered variant adds stronger borders around the entire accordion for more visual definition.',
      },
    },
  },
};

export const Separated: Story = {
  args: {
    variant: 'separated',
    type: 'multiple',
    defaultOpenItems: ['item2'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Separated variant adds gaps between accordion items for a more spacious layout.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Accordion },
    setup() {
      const baseItems = [
        {
          id: 'small1',
          title: 'Small Size',
          content: 'This accordion uses the small size variant with reduced padding and font sizes.',
        },
        {
          id: 'small2',
          title: 'Compact Layout',
          content: 'Perfect for dense interfaces or sidebars where space is at a premium.',
        },
      ];
      
      const mediumItems = [
        {
          id: 'medium1',
          title: 'Medium Size (Default)',
          content: 'This is the default medium size that works well for most use cases.',
        },
        {
          id: 'medium2',
          title: 'Balanced Design',
          content: 'Provides a good balance between content density and readability.',
        },
      ];
      
      const largeItems = [
        {
          id: 'large1',
          title: 'Large Size',
          content: 'Large size variant with increased padding and font sizes for prominent sections.',
        },
        {
          id: 'large2',
          title: 'Enhanced Readability',
          content: 'Ideal for main content areas or when you want to emphasize the accordion.',
        },
      ];
      
      return { baseItems, mediumItems, largeItems };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 16px;">Small</h3>
          <Accordion :items="baseItems" size="small" type="multiple" />
        </div>
        <div>
          <h3 style="margin-bottom: 16px;">Medium (Default)</h3>
          <Accordion :items="mediumItems" size="medium" type="multiple" />
        </div>
        <div>
          <h3 style="margin-bottom: 16px;">Large</h3>
          <Accordion :items="largeItems" size="large" type="multiple" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all three size variants. Each size adjusts padding, font sizes, and spacing proportionally.',
      },
    },
  },
};

export const IconPositions: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Accordion },
    setup() {
      const items = [
        {
          id: 'pos1',
          title: 'Icon Position Example',
          content: 'This demonstrates different icon positions for the expand/collapse indicator.',
        },
        {
          id: 'pos2',
          title: 'Visual Preference',
          content: 'Choose the position that best fits your design requirements.',
        },
      ];
      
      return { items };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 16px;">Icon on Right (Default)</h3>
          <Accordion :items="items" iconPosition="right" type="multiple" />
        </div>
        <div>
          <h3 style="margin-bottom: 16px;">Icon on Left</h3>
          <Accordion :items="items" iconPosition="left" type="multiple" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the two icon position options. The expand/collapse icon can be positioned on either the left or right side of the title.',
      },
    },
  },
};

export const WithCustomIcons: Story = {
  args: {
    type: 'multiple',
    items: [
      {
        id: 'icon1',
        title: 'User Management',
        content: 'Manage user accounts, permissions, and access controls for your organization.',
        icon: 'user',
      },
      {
        id: 'icon2',
        title: 'Settings & Configuration',
        content: 'Configure application settings, preferences, and system parameters.',
        icon: 'settings',
      },
      {
        id: 'icon3',
        title: 'Analytics & Reports',
        content: 'View detailed analytics, generate reports, and track key performance metrics.',
        icon: 'chart-bar',
      },
      {
        id: 'icon4',
        title: 'Security & Privacy',
        content: 'Manage security settings, privacy controls, and data protection policies.',
        icon: 'shield-check',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Each accordion item can have a custom icon that appears alongside the title. Icons are specified using IconToken names from the design system.',
      },
    },
  },
};

export const DisabledItems: Story = {
  args: {
    type: 'multiple',
    items: [
      {
        id: 'enabled1',
        title: 'Available Feature',
        content: 'This feature is available and can be expanded to view more details.',
        disabled: false,
      },
      {
        id: 'disabled1',
        title: 'Premium Feature (Upgrade Required)',
        content: 'This content is not accessible in the current plan.',
        disabled: true,
      },
      {
        id: 'enabled2',
        title: 'Another Available Feature',
        content: 'This is another feature that is available in your current plan.',
        disabled: false,
      },
      {
        id: 'disabled2',
        title: 'Coming Soon',
        content: 'This feature is under development and will be available soon.',
        disabled: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion items can be disabled to prevent interaction. Disabled items have reduced opacity and cannot be clicked or focused.',
      },
    },
  },
};

export const RichContent: Story = {
  args: {
    type: 'single',
    defaultOpenItems: ['rich1'],
    items: [
      {
        id: 'rich1',
        title: 'Installation Guide',
        content: `
          <div style="line-height: 1.6;">
            <p style="margin-bottom: 16px;"><strong>Follow these steps to get started:</strong></p>
            <ol style="margin-left: 20px; margin-bottom: 16px;">
              <li style="margin-bottom: 8px;">Download the latest version from our releases page</li>
              <li style="margin-bottom: 8px;">Extract the files to your desired directory</li>
              <li style="margin-bottom: 8px;">Run the installation script</li>
              <li>Restart your application</li>
            </ol>
            <div style="background: #f1f5f9; border-left: 4px solid #3b82f6; padding: 12px; margin: 16px 0; border-radius: 4px;">
              <strong>Note:</strong> Make sure you have the required dependencies installed before proceeding.
            </div>
            <p style="margin-top: 16px;">
              <a href="#" style="color: #3b82f6; text-decoration: underline;">View detailed documentation →</a>
            </p>
          </div>
        `,
      },
      {
        id: 'rich2',
        title: 'Code Examples',
        content: `
          <div style="line-height: 1.6;">
            <p style="margin-bottom: 16px;">Here's a basic example to get you started:</p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; font-size: 14px;"><code>import { createApp } from 'vue'
import { NovyUI } from '@novyui/core'

const app = createApp(App)
app.use(NovyUI)
app.mount('#app')</code></pre>
            <p style="margin-top: 16px; color: #64748b;">
              This will register all NovyUI components globally in your Vue application.
            </p>
          </div>
        `,
      },
      {
        id: 'rich3',
        title: 'Troubleshooting',
        content: `
          <div style="line-height: 1.6;">
            <h4 style="margin-bottom: 12px; color: #dc2626;">Common Issues</h4>
            <div style="margin-bottom: 20px;">
              <h5 style="margin-bottom: 8px; font-weight: 600;">Module not found error</h5>
              <p style="margin-bottom: 8px; color: #64748b;">Check that all dependencies are installed:</p>
              <code style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; font-family: monospace;">npm install</code>
            </div>
            <div style="margin-bottom: 20px;">
              <h5 style="margin-bottom: 8px; font-weight: 600;">Styles not loading</h5>
              <p style="color: #64748b;">Make sure to import the CSS file in your main entry point.</p>
            </div>
            <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 12px; border-radius: 8px; margin-top: 16px;">
              <strong style="color: #92400e;">Still having issues?</strong>
              <p style="margin-top: 4px; color: #92400e;">Check our <a href="#" style="color: #92400e; text-decoration: underline;">FAQ section</a> or contact support.</p>
            </div>
          </div>
        `,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion content supports rich HTML including lists, code blocks, styled text, and complex layouts. This makes it perfect for documentation, FAQs, and detailed content.',
      },
    },
  },
};

export const ControlledState: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Accordion },
    setup() {
      const openItems = ref(['controlled2']);
      const items = [
        {
          id: 'controlled1',
          title: 'First Section',
          content: 'This accordion is in controlled mode. The open state is managed by the parent component.',
        },
        {
          id: 'controlled2',
          title: 'Second Section (Initially Open)',
          content: 'You can control which items are open programmatically using the openItems prop.',
        },
        {
          id: 'controlled3',
          title: 'Third Section',
          content: 'Click the buttons below to see how external controls can manage the accordion state.',
        },
      ];
      
      const openAll = () => {
        openItems.value = ['controlled1', 'controlled2', 'controlled3'];
      };
      
      const closeAll = () => {
        openItems.value = [];
      };
      
      const openFirst = () => {
        openItems.value = ['controlled1'];
      };
      
      return { openItems, items, openAll, closeAll, openFirst };
    },
    template: `
      <div>
        <div style="margin-bottom: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
          <button @click="openAll" style="padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Open All
          </button>
          <button @click="closeAll" style="padding: 8px 16px; background: #6b7280; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Close All
          </button>
          <button @click="openFirst" style="padding: 8px 16px; background: #059669; color: white; border: none; border-radius: 6px; cursor: pointer;">
            Open First Only
          </button>
        </div>
        <Accordion 
          :items="items" 
          :openItems="openItems" 
          @update:openItems="openItems = $event"
          type="multiple"
        />
        <div style="margin-top: 16px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
          <strong>Current open items:</strong> {{ openItems.length ? openItems.join(', ') : 'None' }}
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates controlled mode where the parent component manages the accordion state. Use the `openItems` prop with `@update:openItems` event for full control over which items are open.',
      },
    },
  },
};
