<template>
  <div :style="dividerStyle"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  vertical?: boolean,
  color?: string,
  thickness?: string,
}>();

const dividerStyle = computed(() => {
  const isVertical = props.vertical;
  return {
    width: isVertical ? props.thickness || tokens.border[1] : '100%',
    height: isVertical ? '100%' : props.thickness || tokens.border[1],
    background: props.color || tokens.color.border.default,
    margin: isVertical ? `0 ${tokens.spacing[3]}` : `${tokens.spacing[3]} 0`,
    alignSelf: 'stretch',
    borderRadius: tokens.radii[1],
  };
});
</script>
