import { ref, computed, type ComputedRef } from 'vue';

// Atomic, themeable, runtime-switchable design tokens
// All color values are OKLCH, all tokens are typed, all values are atomic

// Color palettes (OKLCH, theme-mapped)
const color = {
  primary: {
    '0': computed(() => 'transparent'),
    '1': computed(() => (theme.value === 'light' ? 'oklch(98% 0.01 250)' : 'oklch(20% 0.01 250)')),
    '2': computed(() => (theme.value === 'light' ? 'oklch(95% 0.03 250)' : 'oklch(25% 0.03 250)')),
    '3': computed(() => (theme.value === 'light' ? 'oklch(90% 0.05 250)' : 'oklch(30% 0.05 250)')),
    '4': computed(() => (theme.value === 'light' ? 'oklch(85% 0.07 250)' : 'oklch(35% 0.07 250)')),
    '5': computed(() => (theme.value === 'light' ? 'oklch(75% 0.10 250)' : 'oklch(45% 0.10 250)')),
    '6': computed(() => (theme.value === 'light' ? 'oklch(65% 0.13 250)' : 'oklch(55% 0.13 250)')),
    '7': computed(() => (theme.value === 'light' ? 'oklch(55% 0.16 250)' : 'oklch(65% 0.16 250)')),
    '8': computed(() => (theme.value === 'light' ? 'oklch(45% 0.16 250)' : 'oklch(75% 0.16 250)')),
    '9': computed(() => (theme.value === 'light' ? 'oklch(35% 0.14 250)' : 'oklch(85% 0.14 250)')),
    '10': computed(() => (theme.value === 'light' ? 'oklch(25% 0.12 250)' : 'oklch(90% 0.12 250)')),
    '11': computed(() => (theme.value === 'light' ? 'oklch(15% 0.10 250)' : 'oklch(98% 0.10 250)')),
  },
  neutral: {
    '0': computed(() => 'transparent'),
    '1': computed(() => (theme.value === 'light' ? 'oklch(99% 0.025 255)' : 'oklch(12% 0.025 255)')),
    '2': computed(() => (theme.value === 'light' ? 'oklch(96% 0.035 255)' : 'oklch(18% 0.035 255)')),
    '3': computed(() => (theme.value === 'light' ? 'oklch(92% 0.045 255)' : 'oklch(30% 0.045 255)')),
    '4': computed(() => (theme.value === 'light' ? 'oklch(88% 0.055 255)' : 'oklch(45% 0.055 255)')),
    '5': computed(() => (theme.value === 'light' ? 'oklch(80% 0.07 255)' : 'oklch(60% 0.07 255)')),
    '6': computed(() => (theme.value === 'light' ? 'oklch(70% 0.09 255)' : 'oklch(70% 0.09 255)')),
    '7': computed(() => (theme.value === 'light' ? 'oklch(60% 0.11 255)' : 'oklch(80% 0.11 255)')),
    '8': computed(() => (theme.value === 'light' ? 'oklch(45% 0.09 255)' : 'oklch(88% 0.09 255)')),
    '9': computed(() => (theme.value === 'light' ? 'oklch(30% 0.07 255)' : 'oklch(92% 0.07 255)')),
    '10': computed(() => (theme.value === 'light' ? 'oklch(18% 0.035 255)' : 'oklch(96% 0.035 255)')),
    '11': computed(() => (theme.value === 'light' ? 'oklch(10% 0.025 255)' : 'oklch(99% 0.025 255)')),
  },
  success: {
    '0': computed(() => 'transparent'),
    '1': computed(() => (theme.value === 'light' ? 'oklch(98% 0.03 145)' : 'oklch(12% 0.03 145)')),
    '2': computed(() => (theme.value === 'light' ? 'oklch(94% 0.05 145)' : 'oklch(20% 0.05 145)')),
    '3': computed(() => (theme.value === 'light' ? 'oklch(88% 0.07 145)' : 'oklch(30% 0.07 145)')),
    '4': computed(() => (theme.value === 'light' ? 'oklch(80% 0.09 145)' : 'oklch(40% 0.09 145)')),
    '5': computed(() => (theme.value === 'light' ? 'oklch(70% 0.11 145)' : 'oklch(50% 0.11 145)')),
    '6': computed(() => (theme.value === 'light' ? 'oklch(60% 0.13 145)' : 'oklch(60% 0.13 145)')),
    '7': computed(() => (theme.value === 'light' ? 'oklch(50% 0.15 145)' : 'oklch(70% 0.15 145)')),
    '8': computed(() => (theme.value === 'light' ? 'oklch(40% 0.15 145)' : 'oklch(80% 0.15 145)')),
    '9': computed(() => (theme.value === 'light' ? 'oklch(30% 0.13 145)' : 'oklch(88% 0.13 145)')),
    '10': computed(() => (theme.value === 'light' ? 'oklch(20% 0.11 145)' : 'oklch(94% 0.11 145)')),
    '11': computed(() => (theme.value === 'light' ? 'oklch(12% 0.09 145)' : 'oklch(98% 0.09 145)')),
  },
  warning: {
    '0': computed(() => 'transparent'),
    '1': computed(() => (theme.value === 'light' ? 'oklch(98% 0.04 85)' : 'oklch(12% 0.04 85)')),
    '2': computed(() => (theme.value === 'light' ? 'oklch(94% 0.07 85)' : 'oklch(20% 0.07 85)')),
    '3': computed(() => (theme.value === 'light' ? 'oklch(88% 0.10 85)' : 'oklch(30% 0.10 85)')),
    '4': computed(() => (theme.value === 'light' ? 'oklch(80% 0.13 85)' : 'oklch(40% 0.13 85)')),
    '5': computed(() => (theme.value === 'light' ? 'oklch(70% 0.16 85)' : 'oklch(50% 0.16 85)')),
    '6': computed(() => (theme.value === 'light' ? 'oklch(60% 0.19 85)' : 'oklch(60% 0.19 85)')),
    '7': computed(() => (theme.value === 'light' ? 'oklch(50% 0.22 85)' : 'oklch(70% 0.22 85)')),
    '8': computed(() => (theme.value === 'light' ? 'oklch(40% 0.22 85)' : 'oklch(80% 0.22 85)')),
    '9': computed(() => (theme.value === 'light' ? 'oklch(30% 0.19 85)' : 'oklch(88% 0.19 85)')),
    '10': computed(() => (theme.value === 'light' ? 'oklch(20% 0.16 85)' : 'oklch(94% 0.16 85)')),
    '11': computed(() => (theme.value === 'light' ? 'oklch(12% 0.13 85)' : 'oklch(98% 0.13 85)')),
  },
  error: {
    '0': computed(() => 'transparent'),
    '1': computed(() => (theme.value === 'light' ? 'oklch(98% 0.03 30)' : 'oklch(12% 0.03 30)')),
    '2': computed(() => (theme.value === 'light' ? 'oklch(94% 0.06 30)' : 'oklch(20% 0.06 30)')),
    '3': computed(() => (theme.value === 'light' ? 'oklch(88% 0.09 30)' : 'oklch(30% 0.09 30)')),
    '4': computed(() => (theme.value === 'light' ? 'oklch(80% 0.12 30)' : 'oklch(40% 0.12 30)')),
    '5': computed(() => (theme.value === 'light' ? 'oklch(70% 0.15 30)' : 'oklch(50% 0.15 30)')),
    '6': computed(() => (theme.value === 'light' ? 'oklch(60% 0.18 30)' : 'oklch(60% 0.18 30)')),
    '7': computed(() => (theme.value === 'light' ? 'oklch(50% 0.21 30)' : 'oklch(70% 0.21 30)')),
    '8': computed(() => (theme.value === 'light' ? 'oklch(40% 0.21 30)' : 'oklch(80% 0.21 30)')),
    '9': computed(() => (theme.value === 'light' ? 'oklch(30% 0.18 30)' : 'oklch(88% 0.18 30)')),
    '10': computed(() => (theme.value === 'light' ? 'oklch(20% 0.15 30)' : 'oklch(94% 0.15 30)')),
    '11': computed(() => (theme.value === 'light' ? 'oklch(12% 0.12 30)' : 'oklch(98% 0.12 30)')),
  },
} as const;

// Spacing tokens for consistent layout and padding/margin.
/**\
 * Spacing tokens for consistent layout and padding/margin.
 * All values are px strings.
 */
export const spacing = {
  '0px': '0px',
  '4px': '4px',
  '8px': '8px',
  '12px': '12px',
  '16px': '16px',
  '20px': '20px',
  '24px': '24px',
  '32px': '32px',
  '40px': '40px',
  '48px': '48px',
  '56px': '56px',
} as const;

/**
 * Corner radius tokens for border-radius utilities.
 * All values are px strings.
 */
export const cornerRadius = {
  '0px': '0px',
  '2px': '2px',
  '4px': '4px',
  '8px': '8px',
  '16px': '16px',
  'max': '9999px',
} as const;

/**
 * Border tokens for width and style.
 */
export const border = {
  width: {
    '0px': '0px',
    '1px': '1px',
    '2px': '2px',
    '4px': '4px',
  },
  style: {
    'solid': 'solid',
    'dashed': 'dashed',
    'dotted': 'dotted',
  }
} as const;

/**
 * Shadow tokens for elevation and focus rings.
 */
export const shadow = {
  size: {
    1: '0 1px 2px',
    2: '0 2px 8px',
    3: '0 4px 16px',
    focus: '0 0 0 4px',
  },
  color: {
    neutral: 'oklch(70% 0.09 255 / 0.22)',
    primary: 'oklch(55% 0.16 250 / 0.33)',
    success: 'oklch(60% 0.13 145 / 0.22)',
    warning: 'oklch(60% 0.19 85 / 0.22)',
    error: 'oklch(60% 0.18 30 / 0.22)',
  }
} as const;

/**
 * Opacity tokens for transparency utilities.
 */
export const opacity = {
  '0%': 0,
  '4%': 0.04,
  '8%': 0.08,
  '16%': 0.16,
  '32%': 0.32,
  '64%': 0.64,
  '80%': 0.8,
  '100%': 1,
} as const;

/**
 * z-index tokens for layering.
 */
export const zIndex = {
  '10': 10,
  '100': 100,
  '1000': 1000,
  '10000': 10000,
  'auto': 'auto',
} as const;

/**
 * Typography tokens for font sizes, font weights, line heights, letter spacing, and font families.
 * All values are atomic and mapped to CSS values for easy use in style bindings and classes.
 */
export const typography = {
  size: {
    '12px': '12px',
    '14px': '14px',
    '16px': '16px',
    '18px': '18px',
    '20px': '20px',
    '24px': '24px',
    '30px': '30px',
    '36px': '36px',
    '48px': '48px',
  },
  weight: {
    '4': 400,
    '5': 500,
    '6': 600,
    '7': 700,
  },
  line: {
    '100%': 1,
    '120%': 1.2,
    '140%': 1.4,
    '160%': 1.6,
    '200%': 2,
  },
  tracking: {
    '0%': 0,
    '1%': 0.01,
    '2%': 0.02,
  },
  family: {
    'sans': "'Inter', 'system-ui', 'Segoe UI', 'Arial', sans-serif",
    'mono': "'FiraCode', 'Menlo', 'Monaco', 'Consolas', monospace",
    'display': "'Audiowide', 'system-ui', 'Arial', sans-serif",
  },
};

/**
 * Font tokens for font file names by family, weight, and style.
 * Used for referencing font assets in @font-face or CSS-in-JS.
 */
export const font = {
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

/**
 * Pattern tokens for SVG background patterns.
 * Each pattern includes a name, slug, and file name for easy referencing.
 */
export const patterns = [
  { name: 'Hexagons', slug: 'hexagons', file: 'hexagons.svg' },
  { name: 'Jigsaw', slug: 'jigsaw', file: 'jigsaw.svg' },
  { name: 'Overcast', slug: 'overcast', file: 'overcast.svg' },
  { name: 'Topography', slug: 'topography', file: 'topography.svg' },
  { name: 'Wiggle', slug: 'wiggle', file: 'wiggle.svg' },
];

/**
 * Icon tokens for available icon names (see IconToken type for all options).
 * Used for referencing SVG icon assets by name.
 */
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

export type IconToken =
  | 'arrow-left' | 'user-round' | 'search' | 'check' | 'x' | 'plus' | 'minus' | 'eye' | 'eye-off' | 'pencil' | 'trash' | 'info'
  | 'triangle-alert' | 'circle-alert' | 'circle-check' | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right'
  | 'menu' | 'ellipsis-vertical' | 'ellipsis' | 'calendar' | 'clock' | 'upload' | 'download' | 'funnel' | 'settings' | 'star'
  | 'heart' | 'lock' | 'lock-open' | 'refresh-ccw' | 'refresh-cw' | 'external-link' | 'copy' | 'arrow-right' | 'arrow-up' | 'arrow-down'
  | 'house' | 'file' | 'folder' | 'image' | 'cloud-upload' | 'cloud-download' | 'send' | 'message-circle' | 'phone' | 'mail'
  | 'zoom-in' | 'zoom-out' | 'user' | 'users' | 'settings-2' | 'log-in' | 'log-out' | 'shield' | 'shield-off' | 'circle-help'
  | 'octagon-alert' | 'bookmark' | 'tag' | 'bell' | 'bell-off' | 'calendar-check' | 'calendar-x' | 'calendar-plus' | 'calendar-minus'
  | 'chevrons-up' | 'chevrons-down' | 'chevrons-left' | 'chevrons-right';

// Width tokens for standard UI element widths.
export const width = {
  '0px': '0px',
  '32px': '32px',
  '44px': '44px',
  '56px': '56px',
  '72px': '72px', // Extra large button min width
  '96px': '96px', // XXL button min width
  '24px': '24px', // Standard icon size
  '18px': '18px', // Small icon size
  '20px': '20px', // Medium icon size
  '28px': '28px', // Slightly larger than standard icon
  '36px': '36px', // For special large icons
  'fill': '100%', // Added for full width/flex fill
};

// Height tokens for standard UI element heights.
export const height = {
  '24px': '24px', // Standard icon height
  '32px': '32px', // Small button height
  '44px': '44px', // Medium button height
  '56px': '56px', // Large button height
  '72px': '72px',
  '96px': '96px',
  'fill': '100%',
};

/**
 * Transition tokens for standard transitions.
 */
export const transition = {
  fast: 'background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s',
};

/**
 * Animation tokens for standard animations.
 */
export const animation = {
  spinner: 'spin 1s linear infinite',
};

// Theme state for runtime theme switching (light/dark).
const theme = ref<'light' | 'dark'>('dark');

/**
 * The main design tokens object, aggregating all token groups.
 * Use this for themeable, atomic, and type-safe design values.
 */
export const tokens = {
  color,
  spacing,
  cornerRadius,
  border,
  shadow,
  opacity,
  zIndex,
  typography, // Typography tokens: font sizes, weights, line heights, tracking, families
  font,       // Font file tokens: font file names for each family/weight/style
  patterns,   // Pattern tokens: SVG background patterns
  icons,      // Icon tokens: available icon names
  width,      // Width tokens: standard widths for UI elements
  height,     // Height tokens: standard heights for UI elements
  transition, // Transition tokens: standard transition strings
  animation,  // Animation tokens: standard animation strings
} as const;

// --- Helper Functions ---

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

// Helper to generate spacing options with descriptive keys
export function getSpacingOptions(spacingObj: typeof spacing) {
  return Object.entries(spacingObj).reduce((acc, [key, value]) => {
    acc[`Spacing ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

// Helper to generate corner radius options with descriptive keys
export function getCornerRadiusOptions(cornerObj: typeof cornerRadius) {
  return Object.entries(cornerObj).reduce((acc, [key, value]) => {
    acc[`Radius ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

// Helper to generate border width options with descriptive keys
export function getBorderWidthOptions(borderObj: typeof border.width) {
  return Object.entries(borderObj).reduce((acc, [key, value]) => {
    acc[`Border ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

// Helper to generate border style options with descriptive keys
export function getBorderStyleOptions(borderObj: typeof border.style) {
  return Object.entries(borderObj).reduce((acc, [key, value]) => {
    acc[`Border style ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

// Helper to generate shadow size options with descriptive keys
export function getShadowSizeOptions(shadowObj: typeof shadow.size) {
  return Object.entries(shadowObj).reduce((acc, [key, value]) => {
    acc[`Shadow size ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

// Helper to generate shadow color options with descriptive keys
export function getShadowColorOptions(shadowObj: typeof shadow.color) {
  return Object.entries(shadowObj).reduce((acc, [key, value]) => {
    acc[`Shadow color ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

// Helper to generate opacity options with descriptive keys
export function getOpacityOptions(opacityObj: typeof opacity) {
  return Object.entries(opacityObj).reduce((acc, [key, value]) => {
    acc[`Opacity ${key}`] = value;
    return acc;
  }, {} as Record<string, number>);
}

// Helper to generate z-index options with descriptive keys
export function getZIndexOptions(zIndexObj: typeof zIndex) {
  return Object.entries(zIndexObj).reduce((acc, [key, value]) => {
    acc[`zIndex ${key}`] = value;
    return acc;
  }, {} as Record<string, number | string>);
}

// Helper to generate typography size options with descriptive keys
export function getTypographySizeOptions(typographyObj: typeof typography.size) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Font size ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

// Helper to generate typography weight options with descriptive keys
export function getTypographyWeightOptions(typographyObj: typeof typography.weight) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Font weight ${key}`] = value;
    return acc;
  }, {} as Record<string, number>);
}

// Helper to generate typography line height options with descriptive keys
export function getTypographyLineOptions(typographyObj: typeof typography.line) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Line height ${key}`] = value;
    return acc;
  }, {} as Record<string, number>);
}

// Helper to generate typography tracking options with descriptive keys
export function getTypographyTrackingOptions(typographyObj: typeof typography.tracking) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Tracking ${key}`] = value;
    return acc;
  }, {} as Record<string, number>);
}

// Helper to generate typography family options with descriptive keys
export function getTypographyFamilyOptions(typographyObj: typeof typography.family) {
  return Object.entries(typographyObj).reduce((acc, [key, value]) => {
    acc[`Font family ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Font tokens for font file names by family, weight, and style.
 * Used for referencing font assets in @font-face or CSS-in-JS.
 */

/**
 * Pattern tokens for SVG backgrounds.
 */
export function getPatternOptions(patternsArr: typeof patterns) {
  return patternsArr.reduce((acc, pattern) => {
    acc[pattern.name] = pattern.file;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Icon tokens for available icon names.
 */
export function getIconOptions(iconsArr: typeof icons) {
  return iconsArr.reduce((acc, icon) => {
    acc[icon] = `/icons/${icon}.svg`;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Transition tokens for standard transitions.
 */
export function getTransitionOptions(transitionObj: typeof transition) {
  return Object.entries(transitionObj).reduce((acc, [key, value]) => {
    acc[`Transition ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Animation tokens for standard animations.
 */
export function getAnimationOptions(animationObj: typeof animation) {
  return Object.entries(animationObj).reduce((acc, [key, value]) => {
    acc[`Animation ${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

// --- Theme Functions ---

// Set the current theme (light or dark)
export function setTheme(next: 'light' | 'dark') { theme.value = next; }
// Get the current theme ref
export function useTheme() { return theme; }

// --- Types ---

// Type for color palette keys (primary, neutral, etc.)
export type ColorPalette = keyof typeof color;
// Type for color scale keys (0-11)
export type ColorScale = keyof typeof color.primary;
// Type for the entire tokens object
export type Tokens = typeof tokens;
// Type for all icon token names
export type IconToken =
  | 'arrow-left' | 'user-round' | 'search' | 'check' | 'x' | 'plus' | 'minus' | 'eye' | 'eye-off' | 'pencil' | 'trash' | 'info'
  | 'triangle-alert' | 'circle-alert' | 'circle-check' | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right'
  | 'menu' | 'ellipsis-vertical' | 'ellipsis' | 'calendar' | 'clock' | 'upload' | 'download' | 'funnel' | 'settings' | 'star'
  | 'heart' | 'lock' | 'lock-open' | 'refresh-ccw' | 'refresh-cw' | 'external-link' | 'copy' | 'arrow-right' | 'arrow-up' | 'arrow-down'
  | 'house' | 'file' | 'folder' | 'image' | 'cloud-upload' | 'cloud-download' | 'send' | 'message-circle' | 'phone' | 'mail'
  | 'zoom-in' | 'zoom-out' | 'user' | 'users' | 'settings-2' | 'log-in' | 'log-out' | 'shield' | 'shield-off' | 'circle-help'
  | 'octagon-alert' | 'bookmark' | 'tag' | 'bell' | 'bell-off' | 'calendar-check' | 'calendar-x' | 'calendar-plus' | 'calendar-minus'
  | 'chevrons-up' | 'chevrons-down' | 'chevrons-left' | 'chevrons-right';

// --- Icon Utilities ---

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

// --- Generic Token Access ---

// Generic getToken helper for dynamic access by path (e.g., 'color.primary.1')
export function getToken<T = unknown>(path: string): T | undefined {
  const segments = path.split('.');
  let current: unknown = tokens;
  for (const seg of segments) {
    if (current && typeof current === 'object' && seg in current) {
      current = (current as Record<string, unknown>)[seg];
    } else {
      return undefined;
    }
  }
  return current as T;
}
