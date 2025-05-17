<template>
  <input type="file" :disabled="disabled" :style="fileInputStyle" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  disabled?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const fileInputStyle = computed(() => ({
  width: '100%',
  minWidth: '180px',
  height: '36px',
  borderRadius: tokens.radii[props.radius || 2],
  border: `${tokens.border[1]} solid ${tokens.color.border.default}`,
  background: props.disabled ? tokens.color.bg.muted : tokens.color.bg.default,
  color: tokens.color.text.default,
  fontSize: tokens.font.size3,
  padding: `0 ${tokens.spacing[3]}`,
  opacity: props.disabled ? '0.6' : '1',
  pointerEvents: props.disabled ? 'none' : 'auto',
  transition: 'border 0.2s',
}));
</script>
