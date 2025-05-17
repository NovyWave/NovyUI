# Carousel.vue

<template>
  <div :style="carouselStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  variant?: 'default' | 'bordered' | 'shadow',
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const carouselStyle = computed<Record<string, string>>(() => {
  return {
    background: tokens.color.bg.default,
    color: tokens.color.text.default,
    borderRadius: tokens.radii[props.radius || 2],
    boxShadow: props.variant === 'shadow' ? tokens.shadow[2] : 'none',
    border: props.variant === 'bordered' ? `${tokens.border[1]} solid ${tokens.color.border.default}` : 'none',
    padding: tokens.spacing[4],
    transition: 'box-shadow 0.2s, border 0.2s',
  };
});
</script>
