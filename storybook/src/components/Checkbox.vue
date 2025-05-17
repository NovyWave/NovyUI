# Checkbox.vue

<template>
  <label :style="wrapperStyle">
    <input type="checkbox" :checked="checked" :disabled="disabled" :style="checkboxStyle" />
    <span :style="labelStyle"><slot /></span>
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  checked?: boolean,
  disabled?: boolean,
}>();

const wrapperStyle = computed(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: tokens.value.spacing[2],
  cursor: props.disabled ? 'not-allowed' : 'pointer',
}));

const checkboxStyle = computed(() => ({
  width: '16px',
  height: '16px',
  borderRadius: tokens.value.radii[1],
  border: `${tokens.value.border[1]} solid ${tokens.value.color.border?.default}`,
  background: props.disabled ? tokens.value.color.bg?.muted : tokens.value.color.bg?.default,
  accentColor: props.disabled ? tokens.value.color.text?.muted : tokens.value.color.primary?.default,
  margin: 0,
}));

const labelStyle = computed(() => ({
  color: props.disabled ? tokens.value.color.text?.muted : tokens.value.color.text?.default,
  fontSize: tokens.value.typography.size[3],
}));
</script>
