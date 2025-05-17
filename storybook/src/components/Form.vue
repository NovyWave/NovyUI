<template>
  <form :style="formStyle">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  disabled?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
  shadow?: 1 | 2 | 3,
}>();

const formStyle = computed(() => ({
  background: props.disabled ? tokens.color.bg.muted : tokens.color.bg.default,
  color: tokens.color.text.default,
  borderRadius: tokens.radii[props.radius || 2],
  boxShadow: tokens.shadow[props.shadow || 1],
  border: `${tokens.border[1]} solid ${tokens.color.border.default}`,
  padding: tokens.spacing[6],
  opacity: props.disabled ? '0.6' : '1',
  pointerEvents: props.disabled ? 'none' : 'auto',
  transition: 'box-shadow 0.2s, border 0.2s',
}));
</script>
