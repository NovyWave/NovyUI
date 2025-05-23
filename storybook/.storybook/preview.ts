import type { Preview } from '@storybook/vue3-vite'
import { setTheme, tokens } from '../src/tokens.ts'

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: tokens.color.neutral[10].value },
        dark: { name: 'Dark', value: tokens.color.neutral[1].value },
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
    theme: 'dark',
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'dark';
      setTheme(theme);
      return story();
    },
  ],
};

export default preview;
