import type { Preview } from '@storybook/vue3-vite'
import { setTheme, color } from '../src/tokens.ts'
import { themes } from '@storybook/theming'


const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: color.neutral[1].value },
        dark: { name: 'Dark', value: color.neutral[10].value },
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
    docs: {
      theme: themes.dark,
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
