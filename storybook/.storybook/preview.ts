import type { Preview } from '@storybook/vue3-vite'
import { setTheme, color } from '../src/tokens.ts'
import { themes, create } from '@storybook/theming'

// Create custom dark theme with better contrast for story descriptions
const customDarkTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'NovyUI',
  brandUrl: './',

  // UI colors
  appBg: '#1a1a1a',
  appContentBg: '#1e1e1e',
  appBorderColor: '#333333',

  // Text colors - improved contrast for better readability
  textColor: '#e5e5e5',           // Main text - much brighter
  textInverseColor: '#1a1a1a',    // Inverse text
  textMutedColor: '#b8b8b8',      // Muted text - brighter than default

  // Toolbar colors
  barTextColor: '#e5e5e5',
  barSelectedColor: '#ffffff',
  barBg: '#2a2a2a',

  // Input colors
  inputBg: '#2a2a2a',
  inputBorder: '#444444',
  inputTextColor: '#e5e5e5',

  // Button colors
  buttonBg: '#2a2a2a',
  buttonBorder: '#444444',
});

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
      theme: customDarkTheme,
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
