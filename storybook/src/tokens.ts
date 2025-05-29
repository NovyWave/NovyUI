import { ref, computed } from 'vue';

// --- Theme State & Helpers ---
/**
 * Reactive theme state for design tokens. Use setTheme to change theme at runtime.
 */
export const theme = ref<'light' | 'dark'>('light');

/**
 * Set the current theme ('light' or 'dark').
 */
export function setTheme(newTheme: 'light' | 'dark') {
  theme.value = newTheme;
}

/**
 * Access the current theme ref in components.
 */
export function useTheme() {
  return theme;
}

// Atomic, themeable, runtime-switchable design tokens
// All color values are OKLCH, all tokens are typed, all values are atomic

// Color palettes (OKLCH, theme-mapped)
export const color = {
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
  '6px': '6px',
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
} as const;

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
} as const;

/**
 * Width tokens for consistent element sizing.
 * All values are CSS width values.
 */
export const width = {
  '4px': '4px',       // tiny icons
  '8px': '8px',       // small icons
  '12px': '12px',
  '16px': '16px',     // standard small
  '20px': '20px',
  '24px': '24px',     // standard icon size
  '28px': '28px',
  '32px': '32px',     // large icons
  '36px': '36px',
  '40px': '40px',
  '44px': '44px',
  '48px': '48px',     // extra large
  '256px': '256px',   // small container
  '320px': '320px',   // mobile
  '384px': '384px',   // medium mobile
  '512px': '512px',   // tablet
  '576px': '576px',   // large tablet
  '672px': '672px',   // small desktop
  '768px': '768px',   // medium desktop
  '896px': '896px',   // large desktop
  '1024px': '1024px', // extra large desktop
  '1152px': '1152px', // full desktop
  'full': '100%',
  'screen': '100vw',
  'fit': 'fit-content',
  'min': 'min-content',
  'max': 'max-content',
} as const;

/**
 * Height tokens for consistent element sizing.
 * All values are CSS height values.
 */
export const height = {
  '4px': '4px',       // 4px - tiny icons
  '8px': '8px',       // 8px - small icons
  '12px': '12px',     // 12px
  '16px': '16px',     // 16px - standard small
  '20px': '20px',     // 20px
  '24px': '24px',     // 24px - standard icon size
  '28px': '28px',     // 28px
  '32px': '32px',     // 32px - large icons
  '36px': '36px',     // 36px
  '40px': '40px',     // 40px
  '44px': '44px',     // 44px
  '48px': '48px',     // 48px - extra large
  '256px': '256px',   // small container
  '320px': '320px',   // mobile
  '384px': '384px',   // medium mobile
  '512px': '512px',   // tablet
  '576px': '576px',   // large tablet
  '672px': '672px',   // small desktop
  '768px': '768px',   // medium desktop
  '896px': '896px',   // large desktop
  '1024px': '1024px', // extra large desktop
  '1152px': '1152px', // full desktop
  'full': '100%',
  'screen': '100vh',
  'fit': 'fit-content',
  'min': 'min-content',
  'max': 'max-content',
} as const;

/**
 * Transition tokens for consistent animation timing.
 * All values are CSS transition declarations.
 */
export const transition = {
  'none': 'none',
  'all': 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  'fast': 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
  'normal': 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  'slow': 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  'colors': 'color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  'opacity': 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  'shadow': 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  'transform': 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

/**
 * Animation tokens for consistent keyframe animations.
 * All values are CSS animation declarations.
 */
export const animation = {
  'none': 'none',
  'spin': 'spin 1s linear infinite',
  'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'bounce': 'bounce 1s infinite',
  'fade-in': 'fadeIn 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  'fade-out': 'fadeOut 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  'slide-in': 'slideIn 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  'slide-out': 'slideOut 150ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

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
] as const;

/**
 * Icon tokens for available icon names (see icons array for all options).
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
] as const;

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
  // Create a tokens object reference for dynamic access
  const tokensObj = {
    color,
    spacing,
    cornerRadius,
    border,
    shadow,
    opacity,
    zIndex,
    typography,
    font,
    patterns,
    icons,
    width,
    height,
    transition,
    animation,
  };
  let current: unknown = tokensObj;
  for (const seg of segments) {
    if (current && typeof current === 'object' && seg in current) {
      current = (current as Record<string, unknown>)[seg];
    } else {
      return undefined;
    }
  }
  return current as T;
}

// --- Types ---

/**
 * Type for all icon token names, derived from the icons array.
 */
export type IconToken = typeof icons[number];

/**
 * Type for color palette keys (primary, neutral, etc.)
 */
export type ColorPalette = keyof typeof color;

/**
 * Type for color scale keys (0-11)
 */
export type ColorScale = keyof typeof color.primary;

/**
 * Type for the entire tokens object.
 * Declared after tokens export for correct reference.
 */
export interface Tokens {
  color: typeof color;
  spacing: typeof spacing;
  cornerRadius: typeof cornerRadius;
  border: typeof border;
  shadow: typeof shadow;
  opacity: typeof opacity;
  zIndex: typeof zIndex;
  typography: typeof typography;
  font: typeof font;
  patterns: typeof patterns;
  icons: typeof icons;
  width: typeof width;
  height: typeof height;
  transition: typeof transition;
  animation: typeof animation;
}
