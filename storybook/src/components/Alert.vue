<template>
  <div
    v-if="visible"
    role="alert"
    :aria-live="variant === 'Error' ? 'assertive' : 'polite'"
    :style="alertStyle"
  >
    <span v-if="icon">{{ icon }}</span>
    <span style="flex:1">{{ message }}</span>
    <button
      v-if="dismissible"
      aria-label="Close alert"
      @click="visible = false"
      :style="{
        background: 'none',
        border: 'none',
        color: 'inherit',
        fontSize: '1.2em',
        position: 'absolute',
        right: tokens.spacing[3],
        top: tokens.spacing[3],
        cursor: 'pointer',
        borderRadius: tokens.radii[1],
        outline: 'none',
        transition: 'box-shadow 0.2s',
      }"
    >×</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  variant?: 'Success' | 'Error' | 'Warning' | 'Info' | 'Dismissible',
  message?: string,
  dismissible?: boolean,
}>();

const variant = props.variant ?? 'Success';
const message = props.message ?? '';
const dismissible = props.dismissible ?? false;
const visible = ref(true);
const icon = computed(() => {
  switch (variant) {
    case 'Success': return '✔️';
    case 'Error': return '❌';
    case 'Warning': return '⚠️';
    case 'Info': return 'ℹ️';
    case 'Dismissible': return '🔔';
    default: return '';
  }
});

const alertStyle = computed(() => {
  return {
    background: variant === 'Success' ? '#f0fdf4'
      : variant === 'Error' ? '#fef2f2'
      : variant === 'Warning' ? '#fefce8'
      : variant === 'Info' ? '#eff6ff'
      : tokens.color.bg.subtle,
    border: `${tokens.border[1]} solid ${
      variant === 'Success' ? '#22c55e'
      : variant === 'Error' ? '#ef4444'
      : variant === 'Warning' ? '#eab308'
      : variant === 'Info' ? '#2563eb'
      : tokens.color.border.subtle
    }`,
    color: variant === 'Success' ? '#166534'
      : variant === 'Error' ? '#991b1b'
      : variant === 'Warning' ? '#78350f'
      : variant === 'Info' ? '#1e3a8a'
      : tokens.color.text.default,
    boxShadow: tokens.shadow[1],
    borderRadius: tokens.radii[2],
    padding: `${tokens.spacing[3]} ${tokens.spacing[4]}`,
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacing[2],
    position: 'relative',
  };
});
</script>
