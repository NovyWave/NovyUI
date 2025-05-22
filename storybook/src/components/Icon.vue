<template>
  <span v-if="svgMarkup" :style="iconStyle" v-html="svgMarkup" :aria-label="ariaLabel" :role="ariaLabel ? 'img' : 'presentation'"></span>
  <span v-else :style="iconStyle">?</span>
</template>

<script lang="ts" setup>
import { ref, watchEffect, computed } from 'vue';
import { fetchIconSvg, tokens } from '../tokens';

const props = defineProps<{
  name?: string,
  width?: number | string,
  height?: number | string,
  color?: string,
  ariaLabel?: string,
}>();

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
    color: props.color || tokens.value.color.primary[7],
    verticalAlign: 'middle',
  };
});
</script>
