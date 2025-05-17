<template>
  <div v-if="open" :style="dialogStyle">
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

const dialogStyle = computed(() => ({
  background: tokens.color.bg.default,
  color: tokens.color.text.default,
  borderRadius: tokens.radii[props.radius || 3],
  boxShadow: tokens.shadow[props.shadow || 3],
  padding: tokens.spacing[6],
  minWidth: '320px',
  minHeight: '120px',
  border: `${tokens.border[1]} solid ${tokens.color.border.default}`,
  position: 'relative',
  zIndex: 100,
  transition: 'box-shadow 0.2s, border 0.2s',
}));
</script>
