<template>
  <img :src="src" :alt="alt" :style="imageStyle" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  src: string,
  alt?: string,
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const imageStyle = computed(() => ({
  display: 'block',
  width: '100%',
  height: 'auto',
  borderRadius: tokens.value.radii[props.radius || 2],
  boxShadow: tokens.value.shadow[1],
  background: tokens.value.color.surface[2],
}));
</script>
