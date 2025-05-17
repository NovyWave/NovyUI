<template>
  <button
    :style="buttonStyle"
    :disabled="disabled || loading"
    type="button"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @mousedown="active = true"
    @mouseup="active = false"
    @focus="focused = true"
    @blur="focused = false"
  >
    <span v-if="loading" :style="spinnerStyle">⏳</span>
    <span v-else>{{ label }}</span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
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

function getVariantKey(variant: Variant | undefined): keyof typeof tokens.button {
  if (!variant || variant === 'Primary') return 'primary';
  if (variant === 'Secondary') return 'secondary';
  if (variant === 'Outline') return 'outline';
  if (variant === 'Ghost') return 'ghost';
  if (variant === 'Icon') return 'icon';
  if (variant === 'SocialLogin') return 'socialLogin';
  if (variant === 'Group') return 'group';
  return 'primary';
}
function getSizeKey(variant: Variant | undefined, size: Size | undefined): keyof typeof tokens.button.sizes {
  if (variant === 'Icon') return 'icon';
  return size || 'medium';
}

const state = computed(() => {
  if (props.disabled || props.loading) return 'disabled';
  if (active.value) return 'active';
  if (hovered.value) return 'hover';
  if (focused.value) return 'focus';
  return 'default';
});

const buttonStyle = computed<Record<string, string | number>>(() => {
  const variantKey = getVariantKey(props.variant);
  const sizeKey = getSizeKey(props.variant, props.size);
  const v = tokens.button[variantKey as keyof typeof tokens.button] as any;
  const s = tokens.button.sizes[sizeKey as keyof typeof tokens.button.sizes] as any;
  // State fallback logic
  const bg = v.bg?.[state.value] ?? v.bg?.default ?? 'transparent';
  const color = v.text?.[state.value] ?? v.text?.default ?? 'inherit';
  const borderColor = v.border?.[state.value] ?? v.border?.default ?? 'transparent';
  const borderStyle = v.border?.style ?? (variantKey === 'outline' ? 'dashed' : 'solid');
  const boxShadow = v.shadow?.[state.value] ?? v.shadow?.default ?? 'none';
  const borderRadius = variantKey === 'group' ? tokens.button.group.borderRadius : tokens.radii[2];
  const fontSize = s.fontSize ?? tokens.font.size3;
  const height = s.height;
  const paddingX = s.paddingX ?? '0';
  const width = s.width;
  const padding = s.padding;
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius,
    borderWidth: tokens.border[1],
    borderStyle,
    borderColor,
    fontSize,
    fontFamily: 'var(--font-sans, inherit)',
    fontWeight: tokens.font.weight2,
    letterSpacing: 'var(--font-letter-2, 0.01em)',
    padding: padding ?? `0 ${paddingX}`,
    height,
    minWidth: width ?? '44px',
    cursor: props.disabled || props.loading ? 'not-allowed' : 'pointer',
    background: bg,
    color,
    boxShadow,
    outline: focused.value ? `0 0 0 3px ${tokens.color.focus.default}` : 'none',
    opacity: props.disabled || props.loading ? 0.7 : 1,
    position: 'relative',
    transition: 'background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s',
    pointerEvents: props.loading ? 'none' : 'auto',
  };
});

const spinnerStyle = computed<Record<string, string | number>>(() => ({
  marginRight: tokens.spacing[2],
  fontSize: '1em',
  color: tokens.button.loading.spinner,
}));
</script>
