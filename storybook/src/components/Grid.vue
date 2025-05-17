<template>
  <div :style="gridStyle">
    <slot>
      <div v-for="i in columns * 2" :key="i" :style="itemStyle">Item {{ i }}</div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  columns?: number,
  gap?: number,
}>();

const gridStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${props.columns || 3}, 1fr)`,
  gap: tokens.spacing[props.gap || 4],
  width: '100%',
}));

const itemStyle = {
  background: tokens.color.bg.subtle,
  color: tokens.color.text.default,
  borderRadius: tokens.radii[2],
  padding: tokens.spacing[4],
  textAlign: 'center',
};
</script>
