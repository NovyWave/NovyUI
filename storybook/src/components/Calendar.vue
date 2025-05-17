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
  background: tokens.value.color.bg?.default,
  borderRadius: tokens.value.radii[2],
  boxShadow: tokens.value.shadow[1],
  padding: tokens.value.spacing[4],
  color: tokens.value.color.text?.default,
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
}));
</script>
<template>
  <div :style="calendarStyle" :aria-disabled="disabled ? true : undefined">
    <slot />
  </div>
</template>
