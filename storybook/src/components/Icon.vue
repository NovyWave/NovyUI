<template>
  <span v-if="svgMarkup" :style="iconStyle" :aria-label="computedAriaLabel" :role="computedAriaLabel ? 'img' : 'presentation'">
    <div v-html="svgMarkup" :style="iconSvgStyle"></div>
  </span>
  <span v-else :style="iconStyle">?</span>
</template>

<script lang="ts" setup>
import { ref, watchEffect, computed } from 'vue';
import { fetchIconSvg, color, width, height, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import { getColorOptions } from '../tokenOptions';

const colors = getColorOptions(color);
const theme = useTheme();

const props = defineProps<{
  name?: IconToken,
  width?: number | string,
  height?: number | string,
  color?: string,
  ariaLabel?: string,
}>();

// Compute the accessible label: use ariaLabel if provided, otherwise use name
const computedAriaLabel = computed(() => props.ariaLabel || props.name || undefined);

const svgMarkup = ref('');

watchEffect(async () => {
  if (!props.name) {
    svgMarkup.value = '';
    return;
  }
  const raw = await fetchIconSvg(props.name as any);
  if (raw) {    // Process SVG to add inline styles for better rendering
    let processedSvg = raw.replace(
      /<svg([^>]*)>/,
      (match, attrs) => {
        // Add inline styles to SVG for crisp rendering
        const styles = 'max-width: 100%; max-height: 100%; width: auto; height: auto; display: block; shape-rendering: geometricPrecision;';
        if (attrs.includes('style=')) {
          return match.replace(/style="([^"]*)"/, `style="$1 ${styles}"`);
        } else {
          return `<svg${attrs} style="${styles}">`;
        }
      }
    );
      // For SVGs with explicit width/height attributes, override them for proper scaling
    processedSvg = processedSvg.replace(
      /<svg([^>]*)(width="[^"]*"|height="[^"]*")([^>]*)>/g,
      (match) => {
        // Replace existing style or add new one with !important overrides
        const forceStyles = 'width: 100% !important; height: 100% !important;';
        if (match.includes('style=')) {
          return match.replace(/style="([^"]*)"/, `style="$1 ${forceStyles}"`);
        } else {
          return match.replace('>', ` style="${forceStyles}">`);
        }
      }
    );

    svgMarkup.value = processedSvg;
  } else {
    svgMarkup.value = '';
  }
});

const iconStyle = computed(() => {
  // Helper function to resolve width/height values
  const resolveWidthValue = (value: number | string | undefined): string | undefined => {
    if (!value) return undefined;
    if (typeof value === 'number') return `${value}px`;
    // Check if it's a width token key
    if (typeof value === 'string' && value in width) {
      return width[value as keyof typeof width];
    }
    // Otherwise treat as direct CSS value
    return value;
  };

  const resolveHeightValue = (value: number | string | undefined): string | undefined => {
    if (!value) return undefined;
    if (typeof value === 'number') return `${value}px`;
    // Check if it's a height token key
    if (typeof value === 'string' && value in height) {
      return height[value as keyof typeof height];
    }
    // Otherwise treat as direct CSS value
    return value;
  };

  const resolvedWidth = resolveWidthValue(props.width);
  const resolvedHeight = resolveHeightValue(props.height);

  // Default color that adapts to theme
  const getDefaultColor = () => {
    const isDark = theme.value === 'dark';
    // Use neutral colors that provide good contrast in both themes
    return isDark ? color.neutral['11'].value : color.neutral['7'].value;
  };

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: resolvedWidth,
    height: resolvedHeight,
    color: typeof props.color === 'string'
      ? (colors[props.color]?.value ?? props.color)
      : getDefaultColor(),
    verticalAlign: 'middle',
    overflow: 'hidden',
  };
});

const iconSvgStyle = computed(() => {
  return {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Ensure color inheritance for SVG currentColor
    color: 'inherit',
    // Ensure crisp icon rendering
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };
});
</script>


