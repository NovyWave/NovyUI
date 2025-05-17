<template>
  <div :style="dropzoneStyle">
    <slot>Drop files here</slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  disabled?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
  shadow?: 1 | 2 | 3,
}>();

const dropzoneStyle = computed(() => ({
  background: props.disabled ? tokens.value.color.surface[2] : tokens.value.color.surface[1],
  color: tokens.value.color.neutral[12],
  borderRadius: tokens.value.radii[props.radius || 2],
  boxShadow: tokens.value.shadow[props.shadow || 1],
  border: `${tokens.value.border[1]} dashed ${tokens.value.color.border[2]}`,
  padding: tokens.value.spacing[6],
  minHeight: '120px',
  opacity: props.disabled ? '0.6' : '1',
  pointerEvents: props.disabled ? 'none' : 'auto',
  textAlign: 'center',
  transition: 'box-shadow 0.2s, border 0.2s',
}));
</script>
