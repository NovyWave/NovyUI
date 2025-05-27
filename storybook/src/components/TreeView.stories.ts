import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import TreeView from './TreeView.vue';
import type { TreeViewItemData } from './TreeView.vue';

// Sample data for different scenarios
const basicTreeData: TreeViewItemData[] = [
  {
    id: 'node1',
    label: 'Documents',
    children: [
      { id: 'node1-1', label: 'Resume.pdf' },
      { id: 'node1-2', label: 'Cover Letter.docx' },
    ],
  },
  {
    id: 'node2',
    label: 'Images',
    children: [
      { id: 'node2-1', label: 'vacation.jpg' },
      { id: 'node2-2', label: 'profile.png' },
    ],
  },
  { id: 'node3', label: 'README.md' },
];

const fileSystemData: TreeViewItemData[] = [
  {
    id: 'src',
    label: 'src',
    type: 'folder',
    children: [
      {
        id: 'components',
        label: 'components',
        type: 'folder',
        children: [
          { id: 'Button.vue', label: 'Button.vue', type: 'file' },
          { id: 'Input.vue', label: 'Input.vue', type: 'file' },
          { id: 'TreeView.vue', label: 'TreeView.vue', type: 'file' },
        ],
      },
      {
        id: 'assets',
        label: 'assets',
        type: 'folder',
        children: [
          { id: 'logo.svg', label: 'logo.svg', type: 'file' },
          { id: 'styles.css', label: 'styles.css', type: 'file' },
        ],
      },
      { id: 'main.ts', label: 'main.ts', type: 'file' },
      { id: 'App.vue', label: 'App.vue', type: 'file' },
    ],
  },
  {
    id: 'public',
    label: 'public',
    type: 'folder',
    children: [
      { id: 'index.html', label: 'index.html', type: 'file' },
      { id: 'favicon.ico', label: 'favicon.ico', type: 'file' },
    ],
  },
  { id: 'package.json', label: 'package.json', type: 'file' },
  { id: 'vite.config.ts', label: 'vite.config.ts', type: 'file' },
  { id: 'README.md', label: 'README.md', type: 'file' },
];

const deepNestedData: TreeViewItemData[] = [
  {
    id: 'level1',
    label: 'Level 1',
    children: [
      {
        id: 'level2a',
        label: 'Level 2A',
        children: [
          {
            id: 'level3a',
            label: 'Level 3A',
            children: [
              {
                id: 'level4a',
                label: 'Level 4A',
                children: [
                  { id: 'level5a', label: 'Level 5A' },
                  { id: 'level5b', label: 'Level 5B' },
                ],
              },
            ],
          },
          { id: 'level3b', label: 'Level 3B' },
        ],
      },
      {
        id: 'level2b',
        label: 'Level 2B',
        children: [
          { id: 'level3c', label: 'Level 3C' },
          { id: 'level3d', label: 'Level 3D' },
        ],
      },
    ],
  },
];

const organizationData: TreeViewItemData[] = [
  {
    id: 'engineering',
    label: 'Engineering',
    icon: 'users',
    children: [
      {
        id: 'frontend',
        label: 'Frontend Team',
        icon: 'code',
        children: [
          { id: 'john', label: 'John Doe - Senior Developer', icon: 'user' },
          { id: 'jane', label: 'Jane Smith - Developer', icon: 'user' },
        ],
      },
      {
        id: 'backend',
        label: 'Backend Team',
        icon: 'server',
        children: [
          { id: 'bob', label: 'Bob Johnson - Tech Lead', icon: 'user' },
          { id: 'alice', label: 'Alice Brown - Developer', icon: 'user' },
        ],
      },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    icon: 'palette',
    children: [
      { id: 'sarah', label: 'Sarah Wilson - UX Designer', icon: 'user' },
      { id: 'mike', label: 'Mike Davis - UI Designer', icon: 'user' },
    ],
  },
];

const disabledItemsData: TreeViewItemData[] = [
  {
    id: 'available',
    label: 'Available Features',
    children: [
      { id: 'feature1', label: 'Basic Search' },
      { id: 'feature2', label: 'Advanced Filters' },
    ],
  },
  {
    id: 'premium',
    label: 'Premium Features',
    disabled: true,
    children: [
      { id: 'feature3', label: 'AI Recommendations', disabled: true },
      { id: 'feature4', label: 'Analytics Dashboard', disabled: true },
    ],
  },
  { id: 'feature5', label: 'Export Data', disabled: true },
];

const meta: Meta<typeof TreeView> = {
  title: 'Components/TreeView',
  component: TreeView,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
TreeView displays hierarchical data in a tree structure with expandable/collapsible nodes.

## Features
- **Keyboard Navigation**: Full arrow key navigation support
- **Selection**: Optional checkbox selection mode
- **Icons**: Customizable icons for different item types
- **Accessibility**: Complete ARIA support for screen readers
- **Theming**: Uses design tokens for consistent styling

## Keyboard Navigation
- **Arrow Keys**: Navigate between items
- **Enter/Space**: Toggle expand/collapse or select items
- **Home/End**: Jump to first/last item
- **Right Arrow**: Expand node or move to first child
- **Left Arrow**: Collapse node or move to parent

## Accessibility
- Uses proper ARIA roles (\`tree\`, \`treeitem\`, \`group\`)
- Supports \`aria-expanded\`, \`aria-selected\`, and \`aria-level\`
- Keyboard navigation follows WAI-ARIA guidelines
- Focus management and screen reader support
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size variant for the tree view',
    },
    variant: {
      control: 'radio',
      options: ['basic', 'bordered', 'elevated'],
      description: 'Visual variant for the tree view',
    },
    showIcons: {
      control: 'boolean',
      description: 'Whether to show icons for items',
    },
    showCheckboxes: {
      control: 'boolean',
      description: 'Whether to show checkboxes for selection',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire tree is disabled',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the tree',
    },
  },
  args: {
    size: 'medium',
    variant: 'basic',
    showIcons: true,
    showCheckboxes: false,
    disabled: false,
    ariaLabel: 'File tree',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic TreeView
export const Basic: Story = {
  args: {
    data: basicTreeData,
    defaultExpanded: ['node1'],
  },
};

// File System Explorer
export const FileSystemExplorer: Story = {
  args: {
    data: fileSystemData,
    defaultExpanded: ['src'],
    ariaLabel: 'Project file explorer',
  },
  parameters: {
    docs: {
      description: {
        story: 'A file system explorer showing folders and files with appropriate icons and folder/file types.',
      },
    },
  },
};

// With Checkboxes
export const WithCheckboxes: Story = {
  args: {
    data: organizationData,
    showCheckboxes: true,
    defaultSelected: ['john', 'sarah'],
    defaultExpanded: ['engineering', 'frontend'],
    ariaLabel: 'Team organization chart',
  },
  parameters: {
    docs: {
      description: {
        story: 'TreeView with checkbox selection enabled for multi-selection scenarios.',
      },
    },
  },
};

// Different Sizes
export const SmallSize: Story = {
  args: {
    data: basicTreeData,
    size: 'small',
    defaultExpanded: ['node1', 'node2'],
  },
};

export const LargeSize: Story = {
  args: {
    data: basicTreeData,
    size: 'large',
    defaultExpanded: ['node1', 'node2'],
  },
};

// Bordered Variant
export const Bordered: Story = {
  args: {
    data: fileSystemData,
    variant: 'bordered',
    defaultExpanded: ['src', 'components'],
  },
};

// Elevated Variant
export const Elevated: Story = {
  args: {
    data: organizationData,
    variant: 'elevated',
    defaultExpanded: ['engineering'],
  },
};

// Without Icons
export const WithoutIcons: Story = {
  args: {
    data: basicTreeData,
    showIcons: false,
    defaultExpanded: ['node1'],
  },
  parameters: {
    docs: {
      description: {
        story: 'TreeView without icons for a more minimal appearance.',
      },
    },
  },
};

// Deep Nesting
export const DeeplyNested: Story = {
  args: {
    data: deepNestedData,
    defaultExpanded: ['level1', 'level2a', 'level3a', 'level4a'],
    ariaLabel: 'Deeply nested tree',
  },
  parameters: {
    docs: {
      description: {
        story: 'TreeView with multiple levels of nesting to demonstrate deep hierarchies.',
      },
    },
  },
};

// Disabled Items
export const WithDisabledItems: Story = {
  args: {
    data: disabledItemsData,
    defaultExpanded: ['available', 'premium'],
    ariaLabel: 'Feature availability tree',
  },
  parameters: {
    docs: {
      description: {
        story: 'TreeView with some disabled items to show restricted access or unavailable features.',
      },
    },
  },
};

// Interactive Example
export const Interactive: Story = {
  args: {
    data: fileSystemData,
    showCheckboxes: true,
    variant: 'bordered',
    ariaLabel: 'Interactive file tree',
  },
  render: (args) => ({
    components: { TreeView },
    setup() {
      const treeRef = ref();

      const expandAll = () => {
        treeRef.value?.expandAll();
      };

      const collapseAll = () => {
        treeRef.value?.collapseAll();
      };

      const selectAll = () => {
        treeRef.value?.selectAll();
      };

      const clearSelection = () => {
        treeRef.value?.clearSelection();
      };

      const onExpand = (itemId: string | number, expanded: boolean) => {
        console.log(`Item ${itemId} ${expanded ? 'expanded' : 'collapsed'}`);
      };

      const onSelect = (itemId: string | number, selected: boolean) => {
        console.log(`Item ${itemId} ${selected ? 'selected' : 'deselected'}`);
      };

      const onFocus = (itemId: string | number) => {
        console.log(`Item ${itemId} focused`);
      };

      return {
        args,
        treeRef,
        expandAll,
        collapseAll,
        selectAll,
        clearSelection,
        onExpand,
        onSelect,
        onFocus,
      };
    },
    template: `
      <div style="max-width: 400px;">
        <div style="margin-bottom: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
          <button @click="expandAll" style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;">
            Expand All
          </button>
          <button @click="collapseAll" style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;">
            Collapse All
          </button>
          <button @click="selectAll" style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;">
            Select All
          </button>
          <button @click="clearSelection" style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;">
            Clear Selection
          </button>
        </div>
        <TreeView
          ref="treeRef"
          v-bind="args"
          @expand="onExpand"
          @select="onSelect"
          @focus="onFocus"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with control buttons and event logging. Check the browser console to see events.',
      },
    },
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => ({
    components: { TreeView },
    setup() {
      return {
        basicData: basicTreeData,
      };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Basic</h3>
          <TreeView
            :data="basicData"
            variant="basic"
            :default-expanded="['node1']"
            aria-label="Basic tree"
          />
        </div>
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Bordered</h3>
          <TreeView
            :data="basicData"
            variant="bordered"
            :default-expanded="['node1']"
            aria-label="Bordered tree"
          />
        </div>
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Elevated</h3>
          <TreeView
            :data="basicData"
            variant="elevated"
            :default-expanded="['node1']"
            aria-label="Elevated tree"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available TreeView variants side by side.',
      },
    },
  },
};
