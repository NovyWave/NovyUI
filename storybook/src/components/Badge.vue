<template>
  <span
    :aria-disabled="disabled ? true : undefined"
    role="status"
    :style="badgeStyle"
  >
    <span v-if="variant === 'Dot'" :style="dotStyle"></span>
    <span v-else-if="variant === 'WithIcon' && icon" :style="iconStyle">{{ icon }}</span>
    <span v-else-if="variant === 'WithCount'">{{ count }}</span>
    <slot v-else />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';
const props = defineProps<{
  variant?: 'Solid' | 'Outline' | 'Dot' | 'WithIcon' | 'WithCount',
  count?: number,
  icon?: string,
  disabled?: boolean,
}>();
const variant = props.variant ?? 'Solid';
const count = props.count ?? 0;
const icon = props.icon ?? '';
const disabled = props.disabled ?? false;

const badgeStyle = computed<Record<string, string | number>>(() => {
  return {
    background: variant === 'Outline' || variant === 'Dot' ? 'transparent' : tokens.value.color.bg?.muted,
    color: tokens.value.color.text?.default,
    border: `${tokens.value.border[1]} solid ${tokens.value.color.border?.subtle}`,
    borderRadius: tokens.value.radii[2],
    boxShadow: tokens.value.shadow[1],
    padding: variant === 'Dot' ? '0' : `0 ${tokens.value.spacing[2]}`,
    fontSize: tokens.value.typography.size[3],
    display: 'inline-flex',
    alignItems: 'center',
    height: '20px',
    minWidth: '20px',
    justifyContent: 'center',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  };
});
const dotStyle = computed<Record<string, string | number>>(() => ({
  width: '8px',
  height: '8px',
  borderRadius: tokens.value.radii.full,
  background: tokens.value.color.primary?.default,
  display: 'inline-block',
}));
const iconStyle = computed<Record<string, string | number>>(() => ({
  color: tokens.color.primary.default,
  fontSize: '1em',
}));
</script>
