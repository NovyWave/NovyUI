import { addons, types } from 'storybook/manager-api';
import { useGlobals } from 'storybook/manager-api';
import { IconButton } from '@storybook/components';
import { SunIcon, MoonIcon } from '@storybook/icons';
import React from 'react';
import { themes } from '@storybook/theming';

const THEME_KEY = 'theme';
const BACKGROUNDS_KEY = 'backgrounds';

addons.setConfig({
  theme: themes.dark,
});

const ThemeToolbar = () => {
  const [globals, updateGlobals] = useGlobals();
  const theme = globals.theme || 'dark';
  const isDark = theme === 'dark';
  return (
    <>
      <IconButton
        key="light"
        title="Light Theme"
        active={!isDark}
        onClick={() => updateGlobals({
          [THEME_KEY]: 'light',
          [BACKGROUNDS_KEY]: { value: 'light' },
        })}
      >
        <SunIcon />
      </IconButton>
      <IconButton
        key="dark"
        title="Dark Theme"
        active={isDark}
        onClick={() => updateGlobals({
          [THEME_KEY]: 'dark',
          [BACKGROUNDS_KEY]: { value: 'dark' },
        })}
      >
        <MoonIcon />
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
