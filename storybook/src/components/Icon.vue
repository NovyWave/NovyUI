<template>
  <svg :width="size" :height="size" :style="iconStyle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <slot />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  name?: string,
  size?: number,
  color?: string,
}>();

const iconStyle = computed(() => ({
  display: 'inline-block',
  color: props.color || tokens.color.primary.default,
  verticalAlign: 'middle',
}));
</script>
