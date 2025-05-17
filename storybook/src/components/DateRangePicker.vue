<template>
  <div :style="rangeStyle">
    <input type="date" :disabled="disabled" :style="inputStyle" />
    <span :style="dashStyle">–</span>
    <input type="date" :disabled="disabled" :style="inputStyle" />
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
  gap: tokens.spacing[2],
}));

const inputStyle = computed(() => ({
  minWidth: '120px',
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

const dashStyle = computed(() => ({
  color: tokens.color.text.muted,
  fontSize: tokens.font.size3,
  margin: `0 ${tokens.spacing[1]}`,
}));
</script>
