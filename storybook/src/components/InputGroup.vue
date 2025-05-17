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
  background: props.disabled ? tokens.color.bg.muted : tokens.color.bg.default,
  color: tokens.color.text.default,
  borderRadius: tokens.radii[props.radius || 2],
  border: `${tokens.border[1]} solid ${tokens.color.border.default}`,
  padding: tokens.spacing[3],
  opacity: props.disabled ? '0.6' : '1',
  pointerEvents: props.disabled ? 'none' : 'auto',
  gap: tokens.spacing[2],
  transition: 'border 0.2s',
}));
</script>
