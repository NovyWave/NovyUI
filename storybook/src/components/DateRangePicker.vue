<template>
  <div :style="rangeStyle">
    <input type="date" :disabled="props.disabled === true" :style="inputStyle" />
    <span :style="dashStyle">–</span>
    <input type="date" :disabled="props.disabled === true" :style="inputStyle" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  disabled?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const rangeStyle = computed(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: tokens.value.spacing[2],
}));

const inputStyle = computed(() => ({
  minWidth: '120px',
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

const dashStyle = computed(() => ({
  color: tokens.value.color.neutral[7],
  fontSize: tokens.value.typography.size[3],
  margin: `0 ${tokens.value.spacing[1]}`,
}));
</script>
