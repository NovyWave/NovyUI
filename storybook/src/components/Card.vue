# Card.vue

<template>
  <div :style="cardStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  variant?: 'default' | 'shadow' | 'bordered',
  padding?: 'none' | 'sm' | 'md' | 'lg',
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const cardStyle = computed<Record<string, string>>(() => {
  const variant = props.variant || 'default';
  const paddingMap = {
    none: '0',
    sm: tokens.spacing[2],
    md: tokens.spacing[4],
    lg: tokens.spacing[6],
  };
  return {
    background: tokens.color.bg.default,
    color: tokens.color.text.default,
    borderRadius: tokens.radii[props.radius || 2],
    boxShadow: variant === 'shadow' ? tokens.shadow[2] : 'none',
    border: variant === 'bordered' ? `${tokens.border[1]} solid ${tokens.color.border.default}` : 'none',
    padding: paddingMap[props.padding || 'md'],
    transition: 'box-shadow 0.2s, border 0.2s',
  };
});
</script>
