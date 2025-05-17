<template>
  <div v-if="open" :style="hoverCardStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  open?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
  shadow?: 1 | 2 | 3,
}>();

const hoverCardStyle = computed(() => ({
  background: tokens.color.bg.default,
  color: tokens.color.text.default,
  borderRadius: tokens.radii[props.radius || 2],
  boxShadow: tokens.shadow[props.shadow || 2],
  border: `${tokens.border[1]} solid ${tokens.color.border.default}`,
  padding: tokens.spacing[5],
  minWidth: '220px',
  minHeight: '80px',
  position: 'absolute',
  zIndex: 100,
  transition: 'box-shadow 0.2s, border 0.2s',
}));
</script>
