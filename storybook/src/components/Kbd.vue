<template>
  <kbd :style="kbdStyle" :aria-label="ariaLabel">
    <slot>{{ keys }}</slot>
  </kbd>
</template>

<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, typography, transition, useTheme } from '../tokens';

type Size = 'small' | 'medium' | 'large';
type Variant = 'default' | 'outlined' | 'solid';

const props = withDefaults(defineProps<{
  /**
   * The keyboard key(s) to display. Can be a single key like "Ctrl" or key combination like "Ctrl + C"
   */
  keys?: string;
  /**
   * Size variant for the keyboard key
   */
  size?: Size;
  /**
   * Visual variant for the keyboard key
   */
  variant?: Variant;
  /**
   * Accessible label for screen readers
   */
  ariaLabel?: string;
}>(), {
  keys: '',
  size: 'medium',
  variant: 'default',
});

// Theme
const theme = useTheme();

// Computed styles
const kbdStyle = computed<CSSProperties>(() => {
  const size = props.size;
  const variant = props.variant;
  
  // Size-based styling
  let fontSize: string = typography.size['14px'];
  let paddingX: string = spacing['8px'];
  let paddingY: string = spacing['4px'];
  let minWidth: string = '24px';
  let borderRadius: string = cornerRadius['4px'];
    if (size === 'small') {
    fontSize = typography.size['12px'];
    paddingX = spacing['4px'];
    paddingY = spacing['4px'];
    minWidth = '20px';
    borderRadius = cornerRadius['2px'];
  } else if (size === 'large') {
    fontSize = typography.size['16px'];
    paddingX = spacing['12px'];
    paddingY = spacing['8px'];
    minWidth = '32px';
    borderRadius = cornerRadius['4px'];
  }

  const isDark = theme.value === 'dark';
  
  // Variant-based styling
  let backgroundColor: string;
  let borderColor: string;
  let textColor: string;
  let borderWidth: string = border.width['1px'];
  let boxShadow: string;
  
  if (variant === 'solid') {
    backgroundColor = isDark ? color.neutral['7'].value : color.neutral['8'].value;
    borderColor = backgroundColor;
    textColor = isDark ? color.neutral['1'].value : color.neutral['1'].value;
    boxShadow = `0 1px 2px ${isDark ? 'oklch(0% 0 0 / 0.3)' : 'oklch(0% 0 0 / 0.1)'}`;
  } else if (variant === 'outlined') {
    backgroundColor = 'transparent';
    borderColor = isDark ? color.neutral['6'].value : color.neutral['4'].value;
    textColor = isDark ? color.neutral['10'].value : color.neutral['9'].value;
    boxShadow = 'none';
  } else {
    // default variant - mimics physical keyboard keys
    backgroundColor = isDark ? color.neutral['3'].value : color.neutral['1'].value;
    borderColor = isDark ? color.neutral['5'].value : color.neutral['3'].value;
    textColor = isDark ? color.neutral['10'].value : color.neutral['9'].value;
    
    // Multiple borders and shadow to create keyboard key effect
    const borderTop = isDark ? color.neutral['6'].value : color.neutral['2'].value;
    const borderBottom = isDark ? color.neutral['4'].value : color.neutral['4'].value;
    
    boxShadow = [
      `inset 0 1px 0 ${borderTop}`, // Top highlight
      `inset 0 -1px 0 ${borderBottom}`, // Bottom shadow
      `0 1px 2px ${isDark ? 'oklch(0% 0 0 / 0.2)' : 'oklch(0% 0 0 / 0.05)'}`, // Drop shadow
    ].join(', ');
  }

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth,
    padding: `${paddingY} ${paddingX}`,
    fontSize,
    fontFamily: typography.family.mono,
    fontWeight: String(typography.weight['5']),
    lineHeight: String(typography.line['120%']),
    color: textColor,
    backgroundColor,
    border: `${borderWidth} ${border.style.solid} ${borderColor}`,
    borderRadius,
    boxShadow,
    transition: transition.colors,
    whiteSpace: 'nowrap',
    userSelect: 'none',
    textAlign: 'center',
    verticalAlign: 'baseline',
  };
});
</script>
