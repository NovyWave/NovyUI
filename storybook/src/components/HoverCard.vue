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
  background: tokens.value.color.surface[1],
  color: tokens.value.color.neutral[12],
  borderRadius: tokens.value.radii[props.radius || 2],
  boxShadow: tokens.value.shadow[props.shadow || 2],
  border: `${tokens.value.border[1]} solid ${tokens.value.color.border[2]}`,
  padding: tokens.value.spacing[5],
  minWidth: '220px',
  minHeight: '80px',
  position: 'absolute',
  zIndex: tokens.value.z[3],
  transition: 'box-shadow 0.2s, border 0.2s',
}));
</script>
