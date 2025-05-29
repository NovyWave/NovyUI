import { addons, types } from 'storybook/manager-api';
import { useGlobals } from 'storybook/manager-api';
import { IconButton } from 'storybook/internal/components';
import { SunIcon, MoonIcon } from '@storybook/icons';
import { Separator } from 'storybook/internal/components';
import React from 'react';
import { themes, create } from 'storybook/theming';

const THEME_KEY = 'theme';
const BACKGROUNDS_KEY = 'backgrounds';

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

addons.setConfig({
  theme: customDarkTheme,
});

const ThemeToolbar = () => {
  const [globals, updateGlobals] = useGlobals();
  const theme = globals.theme || 'dark';
  const isDark = theme === 'dark';
  return (
    <>
      <Separator />
      <IconButton
        key="theme-toggle"
        title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        active
        onClick={() => {
          updateGlobals({
            [THEME_KEY]: isDark ? 'light' : 'dark',
            [BACKGROUNDS_KEY]: { value: isDark ? 'light' : 'dark' },
          });
        }}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
        <span style={{ marginLeft: 6, fontSize: 13, fontWeight: 500 }}>
          {isDark ? 'Dark' : 'Light'}
        </span>
      </IconButton>
    </>
  );
};

addons.register('custom/theme-toolbar', () => {
  addons.add('custom/theme-toolbar', {
    title: 'Theme Switcher',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => <ThemeToolbar />,
  });
});
