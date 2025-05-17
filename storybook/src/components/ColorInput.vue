# ColorInput.vue

<template>
  <input type="color" :style="colorInputStyle" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  disabled?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const colorInputStyle = computed(() => {
  return {
    width: '40px',
    height: '40px',
    borderRadius: tokens.value.radii[props.radius || 2],
    border: `${tokens.value.border[1]} solid ${tokens.value.color.border?.default}`,
    background: props.disabled ? tokens.value.color.bg?.muted : tokens.value.color.bg?.default,
    opacity: props.disabled ? '0.6' : '1',
    pointerEvents: props.disabled ? 'none' : 'auto',
    padding: 0,
    transition: 'border 0.2s',
  };
});
</script>
