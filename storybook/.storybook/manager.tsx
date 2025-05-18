import { addons, types } from 'storybook/manager-api';
import { useGlobals } from 'storybook/manager-api';
import { IconButton } from '@storybook/components';
import { SunIcon, MoonIcon } from '@storybook/icons';
import { Separator } from '@storybook/components';
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
