<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';
const props = defineProps<{
  variant?: 'StickySectionLinks' | 'HorizontalNav' | 'VerticalNav',
  disabled?: boolean,
}>();
const variant = props.variant ?? 'StickySectionLinks';
const disabled = props.disabled ?? false;
const navStyle = computed<Record<string, string | number>>(() => ({
  background: tokens.color.bg.default,
  border: `${tokens.border[1]} solid ${tokens.color.border.subtle}`,
  borderRadius: tokens.radii[2],
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
}));
</script>
<template>
  <nav :style="navStyle" :aria-disabled="disabled ? true : undefined">
    <slot />
  </nav>
</template>
