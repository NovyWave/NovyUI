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

const svgMarkup = ref<string>('');

watchEffect(async () => {
  if (!props.name) {
    svgMarkup.value = '';
    return;
  }
  const raw = await fetchIconSvg(props.name as any);
  if (!raw) {
    svgMarkup.value = '';
    return;
  }
  svgMarkup.value = raw;
});

const iconStyle = computed(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: props.width ? (typeof props.width === 'number' ? `${props.width}px` : props.width) : (props.height ? (typeof props.height === 'number' ? `${props.height}px` : props.height) : '24px'),
  height: props.height ? (typeof props.height === 'number' ? `${props.height}px` : props.height) : (props.width ? (typeof props.width === 'number' ? `${props.width}px` : props.width) : '24px'),
  color: props.color || tokens.value.color.primary[7],
  verticalAlign: 'middle',
}));
</script>
