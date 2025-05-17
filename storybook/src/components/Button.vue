<template>
  <button
    :style="buttonStyle"
    :disabled="disabled || loading"
    type="button"
    v-on="listeners"
  >
    <span v-if="loading" :style="spinnerStyle">⏳</span>
    <span v-else>{{ label }}</span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, ref, useAttrs } from 'vue';
import { tokens } from '../tokens';

type Variant = 'Primary' | 'Secondary' | 'Outline' | 'Ghost' | 'Icon' | 'Loading' | 'Group' | 'SocialLogin';
type Size = 'small' | 'medium' | 'large';

const props = defineProps<{
  label: string,
  variant?: Variant,
  size?: Size,
  disabled?: boolean,
  loading?: boolean,
}>();

const hovered = ref(false);
const active = ref(false);
const focused = ref(false);

const attrs = useAttrs();
const listeners = computed<Record<string, any>>(() => {
  // Only pass event listeners to the button
  const out: Record<string, any> = {};
  for (const key in attrs) {
    if (key.startsWith('on')) out[key] = attrs[key];
  }
  // Add local event handlers
  out.onMouseenter = () => { hovered.value = true; };
  out.onMouseleave = () => { hovered.value = false; };
  out.onMousedown = () => { active.value = true; };
  out.onMouseup = () => { active.value = false; };
  out.onFocus = () => { focused.value = true; };
  out.onBlur = () => { focused.value = false; };
  return out;
});

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
  } else if (variant === 'Secondary') {
    background = tokens.value.color.neutral[2];
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.primary[5];
  } else if (variant === 'Outline') {
    background = 'transparent';
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.primary[6];
    borderStyle = 'dashed';
  } else if (variant === 'Ghost') {
    background = 'transparent';
    color = tokens.value.color.primary[7];
    borderColor = 'transparent';
  } else if (variant === 'Icon') {
    background = tokens.value.color.primary[1];
    color = tokens.value.color.primary[7];
    borderColor = 'transparent';
    minWidth = '36px';
    height = '36px';
    paddingX = '0';
    borderRadius = tokens.value.radii.full;
  } else if (variant === 'SocialLogin') {
    background = tokens.value.color.neutral[1];
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.neutral[5];
  } else if (variant === 'Group') {
    borderRadius = '0';
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
    outline: focused.value ? `0 0 0 3px ${tokens.value.color.primary[10]}` : 'none',
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
