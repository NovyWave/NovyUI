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
        right: tokens.value.spacing[3],
        top: tokens.value.spacing[3],
        cursor: 'pointer',
        borderRadius: tokens.value.radii[1],
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
    background: tokens.value.color.bg?.default,
    border: `${tokens.value.border[1]} solid ${tokens.value.color.border?.subtle}`,
    borderRadius: tokens.value.radii[2],
    boxShadow: tokens.value.shadow[1],
    color: tokens.value.color.text?.default,
    gap: tokens.value.spacing[2],
    padding: `${tokens.value.spacing[3]} ${tokens.value.spacing[4]}`,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  };
});
</script>
