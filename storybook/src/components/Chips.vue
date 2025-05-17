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
}>();

const chipStyle = computed(() => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    background: props.selected
      ? tokens.color.primary.default
      : props.disabled
      ? tokens.color.bg.muted
      : tokens.color.bg.subtle,
    color: props.selected
      ? tokens.color.text.inverse
      : props.disabled
      ? tokens.color.text.muted
      : tokens.color.text.default,
    borderRadius: tokens.radii[props.radius || 2],
    border: `${tokens.border[1]} solid ${tokens.color.border.default}`,
    padding: `0 ${tokens.spacing[2]}`,
    fontSize: tokens.font.size3,
    opacity: props.disabled ? '0.6' : '1',
    pointerEvents: props.disabled ? 'none' : 'auto',
    minHeight: '24px',
    transition: 'background 0.2s, color 0.2s, border 0.2s',
  };
});
</script>
