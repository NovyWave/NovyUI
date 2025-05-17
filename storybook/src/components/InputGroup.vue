<template>
  <div :style="inputGroupStyle">
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

const inputGroupStyle = computed(() => ({
  display: 'flex',
  alignItems: 'center',
  background: props.disabled ? tokens.value.color.surface[2] : tokens.value.color.surface[1],
  color: tokens.value.color.neutral[12],
  borderRadius: tokens.value.radii[props.radius || 2],
  border: `${tokens.value.border[1]} solid ${tokens.value.color.border[2]}`,
  padding: tokens.value.spacing[3],
  opacity: props.disabled ? '0.6' : '1',
  pointerEvents: props.disabled ? 'none' : 'auto',
  gap: tokens.value.spacing[2],
  transition: 'border 0.2s',
}));
</script>
