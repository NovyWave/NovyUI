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
  background: tokens.value.color.bg?.default,
  border: `${tokens.value.border[1]} solid ${tokens.value.color.border?.subtle}`,
  borderRadius: tokens.value.radii[2],
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
}));
</script>
<template>
  <nav :style="navStyle" :aria-disabled="disabled ? true : undefined">
    <slot />
  </nav>
</template>
