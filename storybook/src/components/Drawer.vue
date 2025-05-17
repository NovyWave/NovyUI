<template>
  <div v-if="open" :style="drawerStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  open?: boolean,
  side?: 'left' | 'right' | 'top' | 'bottom',
  radius?: 1 | 2 | 3 | 4 | 'full',
  shadow?: 1 | 2 | 3,
}>();

const drawerStyle = computed(() => {
  const side = props.side || 'right';
  const base: Record<string, string> = {
    background: tokens.color.bg.default,
    color: tokens.color.text.default,
    borderRadius: tokens.radii[props.radius || 3],
    boxShadow: tokens.shadow[props.shadow || 3],
    padding: tokens.spacing[6],
    minWidth: side === 'left' || side === 'right' ? '320px' : '100%',
    minHeight: side === 'top' || side === 'bottom' ? '120px' : '100%',
    position: 'fixed',
    zIndex: '100',
    transition: 'box-shadow 0.2s, border 0.2s',
  };
  if (side === 'left') base.left = '0';
  if (side === 'right') base.right = '0';
  if (side === 'top') base.top = '0';
  if (side === 'bottom') base.bottom = '0';
  return base;
});
</script>
