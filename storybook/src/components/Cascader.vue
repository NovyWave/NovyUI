# Cascader.vue

<template>
  <div :style="cascaderStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  disabled?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const cascaderStyle = computed<Record<string, string>>(() => {
  return {
    background: props.disabled ? tokens.color.bg.muted : tokens.color.bg.default,
    color: tokens.color.text.default,
    borderRadius: tokens.radii[props.radius || 2],
    border: `${tokens.border[1]} solid ${tokens.color.border.default}`,
    padding: tokens.spacing[3],
    opacity: props.disabled ? '0.6' : '1',
    pointerEvents: props.disabled ? 'none' : 'auto',
    transition: 'box-shadow 0.2s, border 0.2s',
  };
});
</script>
