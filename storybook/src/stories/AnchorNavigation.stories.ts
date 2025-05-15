import type { Meta, StoryObj } from '@storybook/vue3';
import AnchorNavigation from '../components/AnchorNavigation.vue';

const meta = {
  title: 'Components/AnchorNavigation',
  component: AnchorNavigation,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['StickySectionLinks', 'HorizontalNav', 'VerticalNav'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'StickySectionLinks',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'A navigation aid that links to and highlights sections within a page as the user scrolls. Uses design tokens for all appearance.'
      }
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ]
      }
    }
  }
} satisfies Meta<typeof AnchorNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StickySectionLinks: Story = {
  args: { variant: 'StickySectionLinks' },
};
export const HorizontalNav: Story = {
  args: { variant: 'HorizontalNav' },
};
export const VerticalNav: Story = {
  args: { variant: 'VerticalNav' },
};
