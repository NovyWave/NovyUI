<template>
  <input :disabled="props.disabled === true" :placeholder="placeholder" :style="inputStyle" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  disabled?: boolean,
  placeholder?: string,
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const inputStyle = computed(() => ({
  width: '100%',
  minWidth: '180px',
  height: '36px',
  borderRadius: tokens.value.radii[props.radius || 2],
  border: `${tokens.value.border[1]} solid ${tokens.value.color.border[2]}`,
  background: props.disabled ? tokens.value.color.surface[2] : tokens.value.color.surface[1],
  color: tokens.value.color.neutral[12],
  fontSize: tokens.value.typography.size[3],
  padding: `0 ${tokens.value.spacing[3]}`,
  opacity: props.disabled ? '0.6' : '1',
  pointerEvents: props.disabled ? 'none' : 'auto',
  transition: 'border 0.2s',
}));
</script>
