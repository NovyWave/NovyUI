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
  color: tokens.value.color.error[7],
  background: tokens.value.color.error[2],
  borderRadius: tokens.value.radii[1],
  padding: `${tokens.value.spacing[2]} ${tokens.value.spacing[3]}`,
  fontSize: tokens.value.typography.size[3],
  marginTop: tokens.value.spacing[2],
  marginBottom: tokens.value.spacing[2],
}));
</script>
