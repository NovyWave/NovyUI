<template>
  <div :style="errorStyle">{{ message }}</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  message: string,
}>();

const errorStyle = computed(() => ({
  color: 'var(--color-error-7, #e53935)',
  background: 'var(--color-error-bg, #fff0f0)',
  borderRadius: tokens.radii[1],
  padding: `${tokens.spacing[2]} ${tokens.spacing[3]}`,
  fontSize: tokens.font.size3,
  marginTop: tokens.spacing[2],
  marginBottom: tokens.spacing[2],
}));
</script>
