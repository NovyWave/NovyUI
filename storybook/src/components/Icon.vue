<template>
  <span v-if="svgMarkup" :style="iconStyle" v-html="svgMarkup" :aria-label="computedAriaLabel" :role="computedAriaLabel ? 'img' : 'presentation'"></span>
  <span v-else :style="iconStyle">?</span>
</template>

<script lang="ts" setup>
import { ref, watchEffect, computed } from 'vue';
import { fetchIconSvg, tokens } from '../tokens';
import type { IconToken } from '../tokens';
import { getColorOptions } from '../tokens';

const colors = getColorOptions(tokens.color);

const props = defineProps<{
  name?: IconToken,
  width?: number | string,
  height?: number | string,
  color?: string,
  ariaLabel?: string,
}>();

// Compute the accessible label: use ariaLabel if provided, otherwise use name
const computedAriaLabel = computed(() => props.ariaLabel || props.name || undefined);

const svgMarkup = ref('');

watchEffect(async () => {
  if (!props.name) {
    svgMarkup.value = '';
    return;
  }
  const raw = await fetchIconSvg(props.name as any);
  svgMarkup.value = raw || '';
});

const iconStyle = computed(() => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: props.width ? (typeof props.width === 'number' ? `${props.width}px` : props.width) : undefined,
    height: props.height ? (typeof props.height === 'number' ? `${props.height}px` : props.height) : undefined,
    color:
      typeof props.color === 'string'
        ? (colors[props.color]?.value ?? props.color)
        : tokens.color.primary[7].value,
    verticalAlign: 'middle',
  };
});
</script>
