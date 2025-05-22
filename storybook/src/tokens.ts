import { ref, computed, type ComputedRef } from 'vue';

// Atomic, themeable, runtime-switchable design tokens
// All color values are OKLCH, all tokens are typed, all values are atomic

// Color palettes (OKLCH, theme-mapped)
const color = {
  primary: {
    0: computed(() => 'transparent'),
    1: computed(() => (theme.value === 'light' ? 'oklch(98% 0.01 250)' : 'oklch(20% 0.01 250)')),
    2: computed(() => (theme.value === 'light' ? 'oklch(95% 0.03 250)' : 'oklch(25% 0.03 250)')),
    3: computed(() => (theme.value === 'light' ? 'oklch(90% 0.05 250)' : 'oklch(30% 0.05 250)')),
    4: computed(() => (theme.value === 'light' ? 'oklch(85% 0.07 250)' : 'oklch(35% 0.07 250)')),
    5: computed(() => (theme.value === 'light' ? 'oklch(75% 0.10 250)' : 'oklch(45% 0.10 250)')),
    6: computed(() => (theme.value === 'light' ? 'oklch(65% 0.13 250)' : 'oklch(55% 0.13 250)')),
    7: computed(() => (theme.value === 'light' ? 'oklch(55% 0.16 250)' : 'oklch(65% 0.16 250)')),
    8: computed(() => (theme.value === 'light' ? 'oklch(45% 0.16 250)' : 'oklch(75% 0.16 250)')),
    9: computed(() => (theme.value === 'light' ? 'oklch(35% 0.14 250)' : 'oklch(85% 0.14 250)')),
    10: computed(() => (theme.value === 'light' ? 'oklch(25% 0.12 250)' : 'oklch(90% 0.12 250)')),
    11: computed(() => (theme.value === 'light' ? 'oklch(15% 0.10 250)' : 'oklch(98% 0.10 250)')),
  },
  neutral: {
    0: computed(() => 'transparent'),
    1: computed(() => (theme.value === 'light' ? 'oklch(99% 0.025 255)' : 'oklch(12% 0.025 255)')),
    2: computed(() => (theme.value === 'light' ? 'oklch(96% 0.035 255)' : 'oklch(18% 0.035 255)')),
    3: computed(() => (theme.value === 'light' ? 'oklch(92% 0.045 255)' : 'oklch(30% 0.045 255)')),
    4: computed(() => (theme.value === 'light' ? 'oklch(88% 0.055 255)' : 'oklch(45% 0.055 255)')),
    5: computed(() => (theme.value === 'light' ? 'oklch(80% 0.07 255)' : 'oklch(60% 0.07 255)')),
    6: computed(() => (theme.value === 'light' ? 'oklch(70% 0.09 255)' : 'oklch(70% 0.09 255)')),
    7: computed(() => (theme.value === 'light' ? 'oklch(60% 0.11 255)' : 'oklch(80% 0.11 255)')),
    8: computed(() => (theme.value === 'light' ? 'oklch(45% 0.09 255)' : 'oklch(88% 0.09 255)')),
    9: computed(() => (theme.value === 'light' ? 'oklch(30% 0.07 255)' : 'oklch(92% 0.07 255)')),
    10: computed(() => (theme.value === 'light' ? 'oklch(18% 0.035 255)' : 'oklch(96% 0.035 255)')),
    11: computed(() => (theme.value === 'light' ? 'oklch(10% 0.025 255)' : 'oklch(99% 0.025 255)')),
  },
  success: {
    0: computed(() => 'transparent'),
    1: computed(() => (theme.value === 'light' ? 'oklch(98% 0.03 145)' : 'oklch(12% 0.03 145)')),
    2: computed(() => (theme.value === 'light' ? 'oklch(94% 0.05 145)' : 'oklch(20% 0.05 145)')),
    3: computed(() => (theme.value === 'light' ? 'oklch(88% 0.07 145)' : 'oklch(30% 0.07 145)')),
    4: computed(() => (theme.value === 'light' ? 'oklch(80% 0.09 145)' : 'oklch(40% 0.09 145)')),
    5: computed(() => (theme.value === 'light' ? 'oklch(70% 0.11 145)' : 'oklch(50% 0.11 145)')),
    6: computed(() => (theme.value === 'light' ? 'oklch(60% 0.13 145)' : 'oklch(60% 0.13 145)')),
    7: computed(() => (theme.value === 'light' ? 'oklch(50% 0.15 145)' : 'oklch(70% 0.15 145)')),
    8: computed(() => (theme.value === 'light' ? 'oklch(40% 0.15 145)' : 'oklch(80% 0.15 145)')),
    9: computed(() => (theme.value === 'light' ? 'oklch(30% 0.13 145)' : 'oklch(88% 0.13 145)')),
    10: computed(() => (theme.value === 'light' ? 'oklch(20% 0.11 145)' : 'oklch(94% 0.11 145)')),
    11: computed(() => (theme.value === 'light' ? 'oklch(12% 0.09 145)' : 'oklch(98% 0.09 145)')),
  },
  warning: {
    0: computed(() => 'transparent'),
    1: computed(() => (theme.value === 'light' ? 'oklch(98% 0.04 85)' : 'oklch(12% 0.04 85)')),
    2: computed(() => (theme.value === 'light' ? 'oklch(94% 0.07 85)' : 'oklch(20% 0.07 85)')),
    3: computed(() => (theme.value === 'light' ? 'oklch(88% 0.10 85)' : 'oklch(30% 0.10 85)')),
    4: computed(() => (theme.value === 'light' ? 'oklch(80% 0.13 85)' : 'oklch(40% 0.13 85)')),
    5: computed(() => (theme.value === 'light' ? 'oklch(70% 0.16 85)' : 'oklch(50% 0.16 85)')),
    6: computed(() => (theme.value === 'light' ? 'oklch(60% 0.19 85)' : 'oklch(60% 0.19 85)')),
    7: computed(() => (theme.value === 'light' ? 'oklch(50% 0.22 85)' : 'oklch(70% 0.22 85)')),
    8: computed(() => (theme.value === 'light' ? 'oklch(40% 0.22 85)' : 'oklch(80% 0.22 85)')),
    9: computed(() => (theme.value === 'light' ? 'oklch(30% 0.19 85)' : 'oklch(88% 0.19 85)')),
    10: computed(() => (theme.value === 'light' ? 'oklch(20% 0.16 85)' : 'oklch(94% 0.16 85)')),
    11: computed(() => (theme.value === 'light' ? 'oklch(12% 0.13 85)' : 'oklch(98% 0.13 85)')),
  },
  error: {
    0: computed(() => 'transparent'),
    1: computed(() => (theme.value === 'light' ? 'oklch(98% 0.03 30)' : 'oklch(12% 0.03 30)')),
    2: computed(() => (theme.value === 'light' ? 'oklch(94% 0.06 30)' : 'oklch(20% 0.06 30)')),
    3: computed(() => (theme.value === 'light' ? 'oklch(88% 0.09 30)' : 'oklch(30% 0.09 30)')),
    4: computed(() => (theme.value === 'light' ? 'oklch(80% 0.12 30)' : 'oklch(40% 0.12 30)')),
    5: computed(() => (theme.value === 'light' ? 'oklch(70% 0.15 30)' : 'oklch(50% 0.15 30)')),
    6: computed(() => (theme.value === 'light' ? 'oklch(60% 0.18 30)' : 'oklch(60% 0.18 30)')),
    7: computed(() => (theme.value === 'light' ? 'oklch(50% 0.21 30)' : 'oklch(70% 0.21 30)')),
    8: computed(() => (theme.value === 'light' ? 'oklch(40% 0.21 30)' : 'oklch(80% 0.21 30)')),
    9: computed(() => (theme.value === 'light' ? 'oklch(30% 0.18 30)' : 'oklch(88% 0.18 30)')),
    10: computed(() => (theme.value === 'light' ? 'oklch(20% 0.15 30)' : 'oklch(94% 0.15 30)')),
    11: computed(() => (theme.value === 'light' ? 'oklch(12% 0.12 30)' : 'oklch(98% 0.12 30)')),
  },
};

// Spacing tokens (atomic)
const spacing = {
  none: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '32px',
  8: '40px',
  9: '48px',
  10: '56px',
};

// Corner radius tokens
const radii = {
  1: '2px',
  2: '4px',
  3: '8px',
  4: '16px',
  full: '9999px',
  none: '0px',
};

// Border width tokens
const borderWidth = {
  1: '1px',
  2: '2px',
  3: '4px',
  none: '0px',
};

// Border style tokens
const borderStyle = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
};

// Shadow tokens (split into size and color for composability)
const shadowSize = {
  1: '0 1px 2px',
  2: '0 2px 8px',
  3: '0 4px 16px',
  focus: '0 0 0 4px',
};
const shadowColor = {
  neutral: 'oklch(70% 0.09 255 / 0.22)',
  primary: 'oklch(55% 0.16 250 / 0.33)',
  success: 'oklch(60% 0.13 145 / 0.22)',
  warning: 'oklch(60% 0.19 85 / 0.22)',
  error: 'oklch(60% 0.18 30 / 0.22)',
};

// Opacity tokens
const opacity = {
  none: 0,
  1: 0.04,
  2: 0.08,
  3: 0.16,
  4: 0.32,
  5: 0.64,
  6: 0.8,
  opaque: 1,
};

// Z-index tokens
const z = {
  1: 10,
  2: 100,
  3: 1000,
  4: 10000,
  auto: 'auto',
};

// Typography tokens
const typography = {
  size: {
    1: '0.75rem',
    2: '0.875rem',
    3: '1rem',
    4: '1.125rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.875rem',
    8: '2.25rem',
    9: '3rem',
  },
  weight: {
    1: 400,
    2: 500,
    3: 600,
    4: 700,
  },
  line: {
    1: 1.2,
    2: 1.4,
    3: 1.6,
    4: 2,
  },
  letter: {
    1: 0,
    2: 0.01,
    3: 0.02,
  },
  family: {
    sans: "'Inter', 'system-ui', 'Segoe UI', 'Arial', sans-serif",
    mono: "'FiraCode', 'Menlo', 'Monaco', 'Consolas', monospace",
    display: "'Audiowide', 'system-ui', 'Arial', sans-serif",
  },
};

// Font tokens (from fonts.md)
const font = {
  inter: {
    4: { normal: 'inter-4-normal.woff2', italic: 'inter-4-italic-normal.woff2' },
    5: { normal: 'inter-5-medium.woff2', italic: 'inter-5-italic-medium.woff2' },
    7: { normal: 'inter-7-bold.woff2', italic: 'inter-7-italic-bold.woff2' },
  },
  firacode: {
    4: { normal: 'firacode-4-normal.woff2' },
    7: { normal: 'firacode-7-bold.woff2' },
  },
  audiowide: {
    4: { normal: 'audiowide-4-normal.woff2' },
  },
};

// Pattern tokens
const patterns = [
  { name: 'Hexagons', slug: 'hexagons', file: 'hexagons.svg' },
  { name: 'Jigsaw', slug: 'jigsaw', file: 'jigsaw.svg' },
  { name: 'Overcast', slug: 'overcast', file: 'overcast.svg' },
  { name: 'Topography', slug: 'topography', file: 'topography.svg' },
  { name: 'Wiggle', slug: 'wiggle', file: 'wiggle.svg' },
];

// Icon tokens
export const icons = [
  'arrow-left', 'user-round', 'search', 'check', 'x', 'plus', 'minus', 'eye', 'eye-off', 'pencil', 'trash', 'info',
  'triangle-alert', 'circle-alert', 'circle-check', 'chevron-down', 'chevron-up', 'chevron-left', 'chevron-right',
  'menu', 'ellipsis-vertical', 'ellipsis', 'calendar', 'clock', 'upload', 'download', 'funnel', 'settings', 'star',
  'heart', 'lock', 'lock-open', 'refresh-ccw', 'refresh-cw', 'external-link', 'copy', 'arrow-right', 'arrow-up', 'arrow-down',
  'house', 'file', 'folder', 'image', 'cloud-upload', 'cloud-download', 'send', 'message-circle', 'phone', 'mail',
  'zoom-in', 'zoom-out', 'user', 'users', 'settings-2', 'log-in', 'log-out', 'shield', 'shield-off', 'circle-help',
  'octagon-alert', 'bookmark', 'tag', 'bell', 'bell-off', 'calendar-check', 'calendar-x', 'calendar-plus', 'calendar-minus',
  'chevrons-up', 'chevrons-down', 'chevrons-left', 'chevrons-right',
];

// Width tokens
const width = {
  0: '0',
  1: '32px',
  2: '44px',
  3: '56px',
  4: '72px', // Extra large button min width
  5: '96px', // XXL button min width
  // @TODO move to position 2 or rename keys to use their values
  6: '24px', // Standard icon size
  7: '18px', // Small icon size
  8: '20px', // Medium icon size
  9: '28px', // Slightly larger than standard icon
  10: '36px', // For special large icons
  fill: '100%', // Added for full width/flex fill
};

// Height tokens
const height = {
  1: '32px', // Small button height
  2: '44px', // Medium button height
  3: '56px', // Large button height
  4: '72px',
  5: '96px',
  6: '24px', // Standard icon height
  fill: '100%',
};

// Line height token (standalone, not inside button)
const lineHeight = {
  1: 1,
  2: 1.2,
  3: 1.4,
  4: 1.6,
  5: 2,
};

// Transition tokens
const transition = {
  fast: 'background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s',
};

// Animation tokens
const animation = {
  spinner: 'spin 1s linear infinite',
};

// Theme state
const theme = ref<'light' | 'dark'>('dark');

// Computed tokens object, themeable at runtime
export const tokens = {
  color,
  spacing,
  radii,
  borderWidth,
  borderStyle,
  shadowSize,
  shadowColor,
  opacity,
  z,
  typography,
  font,
  patterns,
  icons,
  width,
  height,
  lineHeight,
  transition,
  animation,
};

export function setTheme(next: 'light' | 'dark') { theme.value = next; }
export function useTheme() { return theme; }

// Helper to generate color options with descriptive keys (returns computed refs, not unwrapped values)
export function getColorOptions(colorObj: typeof color) {
  return Object.entries(colorObj).reduce((acc, [palette, scale]) => {
    Object.entries(scale).forEach(([scaleKey, val]) => {
      acc[`${palette} ${scaleKey} (theme)`] = val as ComputedRef<string>;
    });
    return acc;
  }, {} as Record<string, ComputedRef<string>>);
}

// Helper to generate width options with descriptive keys
export function getWidthOptions(widthObj: Record<string, string>) {
  return Object.entries(widthObj).reduce((acc, [key, value]) => {
    acc[`Width ${key} (${value})`] = value;
    return acc;
  }, {} as Record<string, string>);
}
// Helper to generate height options with descriptive keys
export function getHeightOptions(heightObj: Record<string, string>) {
  return Object.entries(heightObj).reduce((acc, [key, value]) => {
    acc[`Height ${key} (${value})`] = value;
    return acc;
  }, {} as Record<string, string>);
}

// Types
export type ColorPalette = keyof typeof color;
export type ColorScale = keyof typeof color.primary;
export type Tokens = typeof tokens;

export type IconToken =
  | 'arrow-left' | 'user-round' | 'search' | 'check' | 'x' | 'plus' | 'minus' | 'eye' | 'eye-off' | 'pencil' | 'trash' | 'info'
  | 'triangle-alert' | 'circle-alert' | 'circle-check' | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right'
  | 'menu' | 'ellipsis-vertical' | 'ellipsis' | 'calendar' | 'clock' | 'upload' | 'download' | 'funnel' | 'settings' | 'star'
  | 'heart' | 'lock' | 'lock-open' | 'refresh-ccw' | 'refresh-cw' | 'external-link' | 'copy' | 'arrow-right' | 'arrow-up' | 'arrow-down'
  | 'house' | 'file' | 'folder' | 'image' | 'cloud-upload' | 'cloud-download' | 'send' | 'message-circle' | 'phone' | 'mail'
  | 'zoom-in' | 'zoom-out' | 'user' | 'users' | 'settings-2' | 'log-in' | 'log-out' | 'shield' | 'shield-off' | 'circle-help'
  | 'octagon-alert' | 'bookmark' | 'tag' | 'bell' | 'bell-off' | 'calendar-check' | 'calendar-x' | 'calendar-plus' | 'calendar-minus'
  | 'chevrons-up' | 'chevrons-down' | 'chevrons-left' | 'chevrons-right';

// Returns the URL for a given icon token (for use in <img src> or fetch)
export function getIconUrl(name: IconToken): string {
  // Returns the static path to the icon SVG asset
  return `/icons/${name}.svg`;
}

// Fetches the SVG markup for a given icon token by requesting the icon URL
export async function fetchIconSvg(name: IconToken): Promise<string | undefined> {
  const url = getIconUrl(name);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Failed to fetch icon SVG: HTTP', response.status, response.statusText, url);
      return undefined;
    }
    return await response.text();
  } catch (e) {
    console.error('Failed to fetch icon SVG:', e);
    return undefined;
  }
}
