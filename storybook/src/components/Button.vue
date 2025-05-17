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
  let borderStyle = tokens.value.borderStyle.solid;
  let borderWidth = tokens.value.borderWidth[1];
  let boxShadow = tokens.value.shadow[1];
  let borderRadius = tokens.value.radii[2];
  let fontWeight = tokens.value.typography.weight[2];
  let fontSize = tokens.value.typography.size[3];
  let paddingY = tokens.value.spacing[2];
  let paddingX = tokens.value.spacing[3];
  let minWidth = tokens.value.width[2];

  if (variant === 'Primary') {
    background = tokens.value.color.primary[7];
    color = tokens.value.color.neutral[1];
    borderColor = tokens.value.color.primary[7];
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[1];
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
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[1];
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.neutral[3];
      borderColor = tokens.value.color.primary[6];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.neutral[4];
      borderColor = tokens.value.color.primary[7];
    }
  } else if (variant === 'Outline') {
    background = tokens.value.color.transparent;
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.transparent;
    borderStyle = tokens.value.borderStyle.dashed;
    borderWidth = tokens.value.borderWidth[1];
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[0];
      borderColor = tokens.value.color.primary[7];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[1];
      borderColor = tokens.value.color.primary[8];
    }
  } else if (variant === 'Ghost') {
    background = tokens.value.color.transparent;
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.transparent;
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[1];
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[0];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[1];
    }
  } else if (variant === 'Icon') {
    background = tokens.value.color.primary[1];
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.transparent;
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[1];
    minWidth = tokens.value.width[1];
    paddingY = tokens.value.spacing.none;
    paddingX = tokens.value.spacing.none;
    borderRadius = tokens.value.radii.full;
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[2];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[3];
    }
  }

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

  let opacity = 1;
  let cursor = 'pointer';
  if (props.disabled || props.loading) {
    opacity = 0.7;
    cursor = 'not-allowed';
    background = tokens.value.color.neutral[6];
    color = tokens.value.color.neutral[7];
    borderColor = tokens.value.color.neutral[6];
  }

  let outline = 'none';
  if (focused.value && !props.disabled && !props.loading) {
    outline = `${tokens.value.borderWidth[2]} ${tokens.value.borderStyle.solid} ${tokens.value.color.primary[7]}`;
    boxShadow = tokens.value.shadow.focus;
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
  };
});

const spinnerStyle = computed<Record<string, string | number>>(() => ({
  marginRight: tokens.value.spacing[2],
  fontSize: '1em',
  color: tokens.value.color.primary[7],
}));
</script>
