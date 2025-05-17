# Collapse.vue

<template>
  <div :style="collapseStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  open?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const collapseStyle = computed(() => {
  return {
    background: tokens.color.bg.default,
    color: tokens.color.text.default,
    borderRadius: tokens.radii[props.radius || 2],
    border: `${tokens.border[1]} solid ${tokens.color.border.default}`,
    boxShadow: props.open ? tokens.shadow[1] : 'none',
    padding: tokens.spacing[4],
    transition: 'box-shadow 0.2s, border 0.2s',
  };
});
</script>
