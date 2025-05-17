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
  background: props.disabled ? tokens.color.bg.muted : tokens.color.bg.subtle,
  color: tokens.color.text.default,
  borderRadius: tokens.radii[props.radius || 2],
  boxShadow: tokens.shadow[props.shadow || 1],
  border: `${tokens.border[1]} dashed ${tokens.color.border.default}`,
  padding: tokens.spacing[6],
  minHeight: '120px',
  opacity: props.disabled ? '0.6' : '1',
  pointerEvents: props.disabled ? 'none' : 'auto',
  textAlign: 'center',
  transition: 'box-shadow 0.2s, border 0.2s',
}));
</script>
