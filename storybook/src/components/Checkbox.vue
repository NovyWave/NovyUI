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
  gap: tokens.spacing[2],
  cursor: props.disabled ? 'not-allowed' : 'pointer',
}));

const checkboxStyle = computed(() => ({
  width: '16px',
  height: '16px',
  borderRadius: tokens.radii[1],
  border: `${tokens.border[1]} solid ${tokens.color.border.default}`,
  background: props.disabled ? tokens.color.bg.muted : tokens.color.bg.default,
  accentColor: props.disabled ? tokens.color.text.muted : tokens.color.primary.default,
  margin: 0,
}));

const labelStyle = computed(() => ({
  color: props.disabled ? tokens.color.text.muted : tokens.color.text.default,
  fontSize: tokens.font.size3,
}));
</script>
