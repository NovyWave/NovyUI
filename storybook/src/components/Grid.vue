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
  gap: tokens.value.spacing[props.gap || 4],
  width: '100%',
}));

const itemStyle = computed(() => ({
  background: tokens.value.color.surface[2],
  color: tokens.value.color.neutral[12],
  borderRadius: tokens.value.radii[2],
  padding: tokens.value.spacing[4],
  textAlign: 'center',
}));
</script>
