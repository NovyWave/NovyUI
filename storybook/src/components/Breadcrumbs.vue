<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';
const props = defineProps<{
  variant?: 'Basic' | 'WithIcons' | 'CollapsibleAndOverflow',
  disabled?: boolean,
}>();
const variant = props.variant ?? 'Basic';
const disabled = props.disabled ?? false;
const navStyle = computed<Record<string, string | number>>(() => ({
  background: tokens.color.bg.default,
  borderRadius: tokens.radii[2],
  padding: `${tokens.spacing[1]} ${tokens.spacing[2]}`,
  display: 'flex',
  alignItems: 'center',
  color: tokens.color.text.default,
  gap: tokens.spacing[2],
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
}));
</script>
<template>
  <nav :style="navStyle" :aria-disabled="disabled ? true : undefined">
    <slot />
  </nav>
</template>
