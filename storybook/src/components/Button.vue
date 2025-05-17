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
    <span v-if="loading" :style="spinnerStyle">⏳</span>
    <span v-else>{{ label }}</span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { tokens } from '../tokens';

type Variant = 'Primary' | 'Secondary' | 'Outline' | 'Ghost' | 'Icon' | 'Loading';
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

const buttonStyle = computed<Record<string, string | number>>(() => {
  const variant = props.variant || 'Primary';
  const size = props.size || 'medium';
  let background = tokens.value.color.primary[7];
  let color = tokens.value.color.neutral[1];
  let borderColor = tokens.value.color.primary[7];
  let borderStyle = 'solid';
  let boxShadow = tokens.value.shadow[1];
  let borderRadius = tokens.value.radii[2];
  let fontWeight = tokens.value.typography.weight[2];
  let fontSize = tokens.value.typography.size[3];
  let height = '36px';
  let paddingX = tokens.value.spacing[3];
  let minWidth = '44px';

  if (variant === 'Primary') {
    background = tokens.value.color.primary[7];
    color = tokens.value.color.neutral[1];
    borderColor = tokens.value.color.primary[7];
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[8];
      borderColor = tokens.value.color.primary[8];
      boxShadow = tokens.value.shadow[2];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[9];
      borderColor = tokens.value.color.primary[9];
      boxShadow = tokens.value.shadow[2];
    }
  } else if (variant === 'Secondary') {
    background = tokens.value.color.neutral[2];
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.primary[5];
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.neutral[3];
      borderColor = tokens.value.color.primary[6];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.neutral[4];
      borderColor = tokens.value.color.primary[7];
    }
  } else if (variant === 'Outline') {
    background = 'transparent';
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.primary[6];
    borderStyle = 'dashed';
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[0];
      borderColor = tokens.value.color.primary[7];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[1];
      borderColor = tokens.value.color.primary[8];
    }
  } else if (variant === 'Ghost') {
    background = 'transparent';
    color = tokens.value.color.primary[7];
    borderColor = 'transparent';
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[0];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[1];
    }
  } else if (variant === 'Icon') {
    background = tokens.value.color.primary[1];
    color = tokens.value.color.primary[7];
    borderColor = 'transparent';
    minWidth = '36px';
    height = '36px';
    paddingX = '0';
    borderRadius = tokens.value.radii.full;
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[2];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[3];
    }
  }

  if (size === 'small') {
    height = '28px';
    fontSize = tokens.value.typography.size[2];
    paddingX = tokens.value.spacing[2];
  } else if (size === 'large') {
    height = '44px';
    fontSize = tokens.value.typography.size[4];
    paddingX = tokens.value.spacing[4];
  }

  let opacity = 1;
  let cursor = 'pointer';
  if (props.disabled || props.loading) {
    opacity = 0.7;
    cursor = 'not-allowed';
    background = tokens.value.color.neutral[6];
    color = tokens.value.color.neutral[7];
    borderColor = tokens.value.color.neutral[6];
  }

  // Focus style
  let outline = 'none';
  if (focused.value && !props.disabled && !props.loading) {
    outline = '2px solid #2196f3'; // blue outline for test
    boxShadow = '0 0 0 4px #2196f355';
  }

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius,
    borderWidth: tokens.value.border[1],
    borderStyle,
    borderColor,
    fontSize,
    fontFamily: tokens.value.typography.family.sans,
    fontWeight,
    letterSpacing: tokens.value.typography.letter[2],
    padding: `0 ${paddingX}`,
    height,
    minWidth,
    cursor,
    background,
    color,
    boxShadow,
    outline,
    opacity,
    position: 'relative',
    transition: 'background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s',
    pointerEvents: props.loading ? 'none' : 'auto',
  };
});

const spinnerStyle = computed<Record<string, string | number>>(() => ({
  marginRight: tokens.value.spacing[2],
  fontSize: '1em',
  color: tokens.value.color.primary[7],
}));
</script>
