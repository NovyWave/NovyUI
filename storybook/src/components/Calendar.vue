<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';
const props = defineProps<{
  variant?: 'MonthView' | 'WeekView' | 'WithEvents',
  disabled?: boolean,
}>();
const variant = props.variant ?? 'MonthView';
const disabled = props.disabled ?? false;
const calendarStyle = computed<Record<string, string | number>>(() => ({
  background: tokens.color.bg.default,
  borderRadius: tokens.radii[2],
  boxShadow: tokens.shadow[1],
  padding: tokens.spacing[4],
  color: tokens.color.text.default,
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
}));
</script>
<template>
  <div :style="calendarStyle" :aria-disabled="disabled ? true : undefined">
    <slot />
  </div>
</template>
