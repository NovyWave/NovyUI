<template>
  <span v-if="svgMarkup" :style="iconStyle" v-html="svgMarkup" :aria-label="ariaLabel" :role="ariaLabel ? 'img' : 'presentation'"></span>
  <span v-else :style="iconStyle">?</span>
</template>

<script lang="ts" setup>
import { ref, watchEffect, computed } from 'vue';
import { fetchIconSvg, tokens } from '../tokens';

const props = defineProps<{
  name?: string,
  size?: number,
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
  width: `${props.size || 24}px`,
  height: `${props.size || 24}px`,
  color: props.color || tokens.value.color.primary[7],
  verticalAlign: 'middle',
}));
</script>
