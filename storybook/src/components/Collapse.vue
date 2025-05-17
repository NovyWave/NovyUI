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
    background: tokens.value.color.bg?.default,
    color: tokens.value.color.text?.default,
    borderRadius: tokens.value.radii[props.radius || 2],
    border: `${tokens.value.border[1]} solid ${tokens.value.color.border?.default}`,
    boxShadow: props.open ? tokens.value.shadow[1] : 'none',
    padding: tokens.value.spacing[4],
    transition: 'box-shadow 0.2s, border 0.2s',
  };
});
</script>
