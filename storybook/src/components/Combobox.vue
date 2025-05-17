# Combobox.vue

<template>
  <div :style="comboboxStyle">
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

const comboboxStyle = computed(() => {
  return {
    background: props.disabled ? tokens.value.color.bg?.muted : tokens.value.color.bg?.default,
    color: tokens.value.color.text?.default,
    borderRadius: tokens.value.radii[props.radius || 2],
    border: `${tokens.value.border[1]} solid ${tokens.value.color.border?.default}`,
    padding: tokens.value.spacing[3],
    opacity: props.disabled ? '0.6' : '1',
    pointerEvents: props.disabled ? 'none' : 'auto',
    transition: 'box-shadow 0.2s, border 0.2s',
  };
});
</script>
