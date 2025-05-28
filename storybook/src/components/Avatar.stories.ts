import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Avatar from './Avatar.vue';
import { icons, color, theme } from '../tokens.ts';
import { computed } from 'vue';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the avatar.',
      table: { category: 'Appearance', defaultValue: { summary: 'md' } },
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the avatar.',
      table: { category: 'Appearance', defaultValue: { summary: 'circle' } },
    },
    src: {
      control: 'text',
      description: 'Image URL for the avatar.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image.',
      table: { category: 'Accessibility', defaultValue: { summary: '' } },
    },
    initials: {
      control: 'text',
      description: 'Initials to display when no image is available.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    icon: {
      control: { type: 'select' },
      options: [null, ...Object.keys(icons)],
      description: 'Icon to display when no image or initials are available.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    status: {
      control: { type: 'select' },
      options: [null, 'online', 'offline', 'away', 'busy'],
      description: 'Status indicator for the avatar.',
      table: { category: 'Content', defaultValue: { summary: 'null' } },
    },
    badge: {
      control: 'text',
      description: 'Badge content (string or number).',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    href: {
      control: 'text',
      description: 'Makes the avatar a clickable link.',
      table: { category: 'Behavior', defaultValue: { summary: '' } },
    },
    interactive: {
      control: 'boolean',
      description: 'Makes the avatar interactive with hover effects.',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    colorVariant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'soft-primary',
        'soft-secondary',
        'soft-success',
        'soft-warning',
        'soft-error',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-warning',
        'outline-error'
      ],
      description: 'Color variant for the avatar background and styling.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
  },
  args: {
    size: 'md',
    shape: 'circle',
    interactive: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'A versatile avatar component for displaying user profile images, initials, or icons. Supports status indicators, notification badges, and various sizes and shapes.\n\n**Features:**\n\n- Multiple sizes (xs, sm, md, lg, xl, 2xl)\n- Three shapes (circle, square, rounded)\n- Automatic fallback: image → initials → icon → default user icon\n- Status indicators (online, offline, away, busy)\n- Notification badges with count support\n- Interactive and link modes\n- Full accessibility support\n\n**Usage:**\n\n```vue\n<Avatar src="/user.jpg" alt="John Doe" />\n<Avatar initials="JD" status="online" />\n<Avatar icon="user" badge="3" />\n```',
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
  args: {},
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'John Doe',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'user',
  },
};

export const WithStatus: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    alt: 'Jane Smith',
    status: 'online',
  },
};

export const WithBadge: Story = {
  args: {
    initials: 'AB',
    badge: '3',
  },
};

export const Interactive: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    alt: 'Mike Johnson',
    interactive: true,
  },
};

export const AsLink: Story = {
  args: {
    initials: 'CD',
    href: '#',
    status: 'away',
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <div style="text-align: center;">
          <Avatar size="xs" initials="XS" />
          <div style="margin-top: 8px; font-size: 12px;">XS</div>
        </div>
        <div style="text-align: center;">
          <Avatar size="sm" initials="SM" />
          <div style="margin-top: 8px; font-size: 12px;">SM</div>
        </div>
        <div style="text-align: center;">
          <Avatar size="md" initials="MD" />
          <div style="margin-top: 8px; font-size: 12px;">MD</div>
        </div>
        <div style="text-align: center;">
          <Avatar size="lg" initials="LG" />
          <div style="margin-top: 8px; font-size: 12px;">LG</div>
        </div>
        <div style="text-align: center;">
          <Avatar size="xl" initials="XL" />
          <div style="margin-top: 8px; font-size: 12px;">XL</div>
        </div>
        <div style="text-align: center;">
          <Avatar size="2xl" initials="2XL" />
          <div style="margin-top: 8px; font-size: 12px;">2XL</div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Avatar component in all available sizes.',
      },
    },
  },
};

export const Shapes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="text-align: center;">
          <Avatar
            shape="circle"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="Circle avatar"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Circle</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            shape="rounded"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
            alt="Rounded avatar"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Rounded</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            shape="square"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
            alt="Square avatar"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Square</div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Avatar component in different shapes.',
      },
    },
  },
};

export const StatusIndicators: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="text-align: center;">
          <Avatar
            initials="ON"
            status="online"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Online</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            initials="AW"
            status="away"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Away</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            initials="BS"
            status="busy"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Busy</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            initials="OF"
            status="offline"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Offline</div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Avatar component with different status indicators.',
      },
    },
  },
};

export const WithBadges: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="text-align: center;">
          <Avatar
            initials="AB"
            badge="3"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Count Badge</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            initials="CD"
            badge="99+"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">High Count</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            initials="EF"
            badge="!"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Alert Badge</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            initials="GH"
            badge="NEW"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Text Badge</div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Avatar component with different types of badges.',
      },
    },
  },
};

export const FallbackBehavior: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="text-align: center;">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            initials="JD"
            icon="user"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Image (primary)</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            src="invalid-url"
            initials="JD"
            icon="user"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Initials (fallback)</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            src="invalid-url"
            icon="star"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Icon (fallback)</div>
        </div>
        <div style="text-align: center;">
          <Avatar
            src="invalid-url"
            size="lg"
          />
          <div style="margin-top: 8px; font-size: 14px;">Default (fallback)</div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Avatar fallback behavior: image → initials → icon → default user icon.',
      },
    },
  },
};

export const UserGroup: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center;">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="John Doe"
          status="online"
          style="margin-right: -8px; z-index: 3;"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
          alt="Jane Smith"
          status="away"
          style="margin-right: -8px; z-index: 2;"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
          alt="Mike Johnson"
          status="busy"
          style="margin-right: -8px; z-index: 1;"
        />
        <Avatar
          initials="+5"
          style="z-index: 0; background-color: #6b7280; color: white;"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Overlapping avatars to show a group of users.',
      },
    },
  },
};

export const ColorVariants: Story = {
  render: () => ({
    components: { Avatar },
    setup() {
      const headingColor = computed(() => {
        const isDark = theme.value === 'dark';
        return isDark ? color.neutral['11'].value : color.neutral['9'].value;
      });
      const labelColor = computed(() => {
        const isDark = theme.value === 'dark';
        return isDark ? color.neutral['10'].value : color.neutral['8'].value;
      });
      return { headingColor, labelColor };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px;">
        <!-- Solid Color Variants -->
        <div>
          <h3 :style="{ marginBottom: '16px', fontSize: '18px', fontWeight: '600', color: headingColor }">Solid Color Variants</h3>
          <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <Avatar initials="DF" colorVariant="default" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Default</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="PR" colorVariant="primary" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Primary</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="SC" colorVariant="secondary" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Secondary</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="SU" colorVariant="success" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Success</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="WA" colorVariant="warning" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Warning</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="ER" colorVariant="error" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Error</div>
            </div>
          </div>
        </div>

        <!-- Soft Color Variants -->
        <div>
          <h3 :style="{ marginBottom: '16px', fontSize: '18px', fontWeight: '600', color: headingColor }">Soft Color Variants</h3>
          <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <Avatar initials="SP" colorVariant="soft-primary" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Soft Primary</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="SS" colorVariant="soft-secondary" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Soft Secondary</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="SG" colorVariant="soft-success" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Soft Success</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="SW" colorVariant="soft-warning" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Soft Warning</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="SE" colorVariant="soft-error" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Soft Error</div>
            </div>
          </div>
        </div>

        <!-- Outline Color Variants -->
        <div>
          <h3 :style="{ marginBottom: '16px', fontSize: '18px', fontWeight: '600', color: headingColor }">Outline Color Variants</h3>
          <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <Avatar initials="OP" colorVariant="outline-primary" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Outline Primary</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="OS" colorVariant="outline-secondary" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Outline Secondary</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="OG" colorVariant="outline-success" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Outline Success</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="OW" colorVariant="outline-warning" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Outline Warning</div>
            </div>
            <div style="text-align: center;">
              <Avatar initials="OE" colorVariant="outline-error" size="lg" />
              <div :style="{ marginTop: '8px', fontSize: '12px', color: labelColor }">Outline Error</div>
            </div>
          </div>
        </div>

        <!-- Color Variants with Status -->
        <div>
          <h3 :style="{ marginBottom: '16px', fontSize: '18px', fontWeight: '600', color: headingColor }">Color Variants with Status</h3>
          <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <Avatar initials="ON" status="online" colorVariant="soft-success" size="lg" />
            <Avatar initials="AW" status="away" colorVariant="soft-warning" size="lg" />
            <Avatar initials="BU" status="busy" colorVariant="soft-error" size="lg" />
            <Avatar initials="OF" status="offline" colorVariant="soft-secondary" size="lg" />
          </div>
        </div>

        <!-- Color Variants with Badges -->
        <div>
          <h3 :style="{ marginBottom: '16px', fontSize: '18px', fontWeight: '600', color: headingColor }">Color Variants with Badges</h3>
          <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <Avatar initials="B1" badge="1" colorVariant="primary" size="lg" />
            <Avatar initials="B5" badge="5" colorVariant="success" size="lg" />
            <Avatar initials="B9" badge="9+" colorVariant="warning" size="lg" />
            <Avatar initials="B99" badge="99+" colorVariant="error" size="lg" />
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Beautiful color variants inspired by Preline.co design system with enhanced gradients, shadows, and visual depth.',
      },
    },
  },
};
