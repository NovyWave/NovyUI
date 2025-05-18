<template>
  <button
    :style="buttonStyle"
    :disabled="disabled || loading"
    type="button"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @focus="onFocus"
    @blur="onBlur"
  >
    <span v-if="loading" :style="spinnerContainerStyle">
      <img
        :src="getIconUrl(spinnerIconName)"
        :alt="'Loading'"
        :width="spinnerSize"
        :height="spinnerSize"
        class="spin"
        style="display:block;margin:auto;"
      />
    </span>
    <span v-else>{{ label }}</span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { tokens, getIconUrl, useTheme } from '../tokens';
import type { IconToken } from '../tokens';

type Variant = 'Primary' | 'Secondary' | 'Outline' | 'Ghost' | 'Link';
type Size = 'small' | 'medium' | 'large';

const props = defineProps<{
  label: string,
  variant?: Variant,
  size?: Size,
  disabled?: boolean,
  loading?: boolean,
}>();

const emits = defineEmits([
  'mouseenter',
  'mouseleave',
  'mousedown',
  'mouseup',
  'focus',
  'blur',
]);

const hovered = ref(false);
const active = ref(false);
const focused = ref(false);

function onMouseEnter() { hovered.value = true; }
function onMouseLeave() { hovered.value = false; }
function onMouseDown() { active.value = true; }
function onMouseUp() { active.value = false; }
function onFocus() { focused.value = true; }
function onBlur() { focused.value = false; }

const spinnerIconName: IconToken = 'refresh-ccw';
const spinnerSize = 20;

const theme = useTheme();

const buttonStyle = computed<Record<string, string | number>>(() => {
  const variant = props.variant || 'Primary';
  const size = props.size || 'medium';
  const isDark = theme.value === 'dark';
  let background: string = tokens.value.color.primary[7];
  let color: string = tokens.value.color.neutral[1];
  let borderColor: string = tokens.value.color.primary[7];
  let borderStyle: string = tokens.value.borderStyle.solid;
  let borderWidth: string = tokens.value.borderWidth[1];
  let boxShadow: string = `${tokens.value.shadowSize[1]} ${tokens.value.shadowColor.primary}`;
  let borderRadius: string = tokens.value.radii[2];
  let fontWeight: number = tokens.value.typography.weight[2];
  let fontSize: string = tokens.value.typography.size[3];
  let paddingY: string = tokens.value.spacing[2];
  let paddingX: string = tokens.value.spacing[3];
  let minWidth: string = tokens.value.width[2];
  let textDecoration: string | undefined = undefined;
  let outline: string = 'none';

  // Variant logic
  if (variant === 'Primary') {
    background = tokens.value.color.primary[7];
    color = tokens.value.color.neutral[1];
    borderColor = tokens.value.color.primary[7];
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[1];
    boxShadow = `${tokens.value.shadowSize[1]} ${tokens.value.shadowColor.primary}`; // Add subtle shadow
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[8];
      borderColor = tokens.value.color.primary[8];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[9];
      borderColor = tokens.value.color.primary[9];
    }
  } else if (variant === 'Secondary') {
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.neutral[3];
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[1];
    boxShadow = `${tokens.value.shadowSize[1]} ${tokens.value.shadowColor.neutral}`;
    background = isDark ? tokens.value.color.neutral[3] : tokens.value.color.neutral[1];
    if (hovered.value && !props.disabled && !props.loading) {
      background = isDark ? tokens.value.color.neutral[4] : tokens.value.color.neutral[4];
      borderColor = tokens.value.color.primary[6];
      color = tokens.value.color.primary[8];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = isDark ? tokens.value.color.neutral[5] : tokens.value.color.neutral[5];
      borderColor = tokens.value.color.primary[7];
      color = tokens.value.color.primary[9];
    }
  } else if (variant === 'Outline') {
    background = tokens.value.color.transparent;
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.neutral[3];
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[2]; // Thicker border for better visibility
    boxShadow = 'none'; // Mute shadow for Outline variant
    if (hovered.value && !props.disabled && !props.loading) {
      borderColor = tokens.value.color.primary[7];
      color = tokens.value.color.primary[7];
    }
    if (active.value && !props.disabled && !props.loading) {
      borderColor = tokens.value.color.primary[8];
      color = tokens.value.color.primary[8];
    }
  } else if (variant === 'Ghost') {
    background = tokens.value.color.transparent;
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.transparent; // No border
    borderStyle = 'none'; // Remove border style
    borderWidth = '0'; // Remove border width
    outline = 'none'; // No outline
    boxShadow = 'none'; // No shadow
    if ((hovered.value || focused.value) && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[3]; // More visible blue background on hover/focus
      color = tokens.value.color.primary[10];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[4];
      color = tokens.value.color.primary[10];
    }
  } else if (variant === 'Link') {
    background = tokens.value.color.transparent;
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.transparent;
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth.none;
    boxShadow = 'none';
    outline = 'none';
    textDecoration = 'underline';
    fontWeight = tokens.value.typography.weight[3];
    paddingY = tokens.value.spacing[2];
    paddingX = tokens.value.spacing[3];
    minWidth = tokens.value.width[2];
    if (hovered.value && !props.disabled && !props.loading) {
      color = tokens.value.color.primary[9];
      textDecoration = 'underline';
    }
    if (active.value && !props.disabled && !props.loading) {
      color = tokens.value.color.primary[10];
      textDecoration = 'underline';
    }
    if (focused.value && !props.disabled && !props.loading) {
      color = tokens.value.color.primary[8];
      textDecoration = 'underline';
    }
  }

  // Size logic (skip for Link)
  if (variant !== 'Link') {
    if (size === 'small') {
      paddingY = tokens.value.spacing[1];
      paddingX = tokens.value.spacing[2];
      fontSize = tokens.value.typography.size[2];
      minWidth = tokens.value.width[1];
    } else if (size === 'large') {
      paddingY = tokens.value.spacing[3];
      paddingX = tokens.value.spacing[4];
      fontSize = tokens.value.typography.size[4];
      minWidth = tokens.value.width[3];
    } else {
      paddingY = tokens.value.spacing[2];
      paddingX = tokens.value.spacing[3];
      fontSize = tokens.value.typography.size[3];
      minWidth = tokens.value.width[2];
    }
  }

  let opacity = tokens.value.opacity.opaque;
  let cursor = 'pointer';
  if (props.disabled || props.loading) {
    opacity = tokens.value.opacity[5];
    cursor = 'not-allowed';
    background = tokens.value.color.neutral[5];
    color = tokens.value.color.neutral[7];
    borderColor = tokens.value.color.neutral[5];
    boxShadow = `${tokens.value.shadowSize[1]} ${tokens.value.shadowColor.neutral}`;
  }

  if (focused.value && !props.disabled && !props.loading) {
    // Only apply outline and focus shadow if not Ghost
    if (variant !== 'Ghost') {
      outline = `${tokens.value.borderWidth[2]} ${tokens.value.borderStyle.solid} ${tokens.value.color.primary[7]}`;
      boxShadow = `${tokens.value.shadowSize.focus} ${tokens.value.shadowColor.primary}`;
    } else {
      outline = 'none';
    }
  }

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    borderStyle: borderStyle,
    borderColor: borderColor,
    fontSize: fontSize,
    fontFamily: tokens.value.typography.family.sans,
    fontWeight: fontWeight,
    letterSpacing: tokens.value.typography.letter[2],
    padding: `${paddingY} ${paddingX}`,
    minWidth: minWidth,
    cursor: cursor,
    background: background,
    color: color,
    boxShadow: boxShadow,
    outline: outline,
    opacity: opacity,
    position: 'relative',
    transition: 'background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s',
    pointerEvents: props.loading ? 'none' : 'auto',
    textDecoration: textDecoration || 'none',
  };
});

const spinnerContainerStyle = computed<Record<string, string | number>>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
}));
</script>

<style scoped>
.spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>
