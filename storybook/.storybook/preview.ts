import type { Preview } from '@storybook/vue3-vite'
import { setTheme } from '../src/tokens.ts'

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#ffffff' },
        dark: { name: 'Dark', value: '#222222' },
      },
    },
    darkMode: {
      current: 'dark',
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
  decorators: [
    (story, context) => {
      // Sync theme with tokens.ts for runtime theming
      const theme = context.globals.theme || 'dark';
      setTheme(theme); // Set theme based on global, default to dark
      return story();
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        items: [
          { value: 'light', title: 'Light', icon: 'sun', },
          { value: 'dark', title: 'Dark', icon: 'moon', },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
