# Chips.vue

<template>
  <span :style="chipStyle">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  selected?: boolean,
  disabled?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
  inverse?: boolean,
}>();

const chipStyle = computed(() => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    background: props.disabled
      ? tokens.value.color.bg?.muted
      : props.inverse
      ? tokens.value.color.bg?.muted
      : tokens.value.color.bg?.subtle,
    color: props.disabled
      ? tokens.value.color.text?.muted
      : props.inverse
      ? tokens.value.color.text?.inverse
      : tokens.value.color.text?.default,
    borderRadius: tokens.value.radii[props.radius || 2],
    border: `${tokens.value.border[1]} solid ${tokens.value.color.border?.default}`,
    padding: `0 ${tokens.value.spacing[2]}`,
    fontSize: tokens.value.typography.size[3],
    opacity: props.disabled ? '0.5' : '1',
    pointerEvents: props.disabled ? 'none' : 'auto',
    minHeight: '24px',
    transition: 'background 0.2s, color 0.2s, border 0.2s',
  };
});
</script>
