<template>
  <div
    class="novy-alert"
    :class="`novy-alert--${variant.toLowerCase()}`"
    role="alert"
    :aria-live="variant === 'Error' ? 'assertive' : 'polite'"
  >
    <span v-if="icon" class="novy-alert__icon">{{ icon }}</span>
    <span class="novy-alert__message">{{ message }}</span>
    <button
      v-if="dismissible"
      class="novy-alert__close"
      aria-label="Close alert"
      @click="visible = false"
    >×</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = withDefaults(defineProps<{
  variant?: 'Success' | 'Error' | 'Warning' | 'Info' | 'Dismissible',
  message?: string,
  dismissible?: boolean,
}>(), {
  variant: 'Success',
  message: '',
  dismissible: false,
});

const visible = ref(true);
const icon = computed(() => {
  switch (props.variant) {
    case 'Success': return '✔️';
    case 'Error': return '❌';
    case 'Warning': return '⚠️';
    case 'Info': return 'ℹ️';
    case 'Dismissible': return '🔔';
    default: return '';
  }
});

if (props.dismissible) visible.value = true;
</script>

<style scoped>
.novy-alert {
  background: var(--color-surface-2);
  border: var(--border-1) solid var(--color-border-2);
  color: var(--color-neutral-12);
  box-shadow: var(--shadow-1);
  border-radius: var(--radii-2);
  padding: var(--spacing-3) var(--spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  position: relative;
}
.novy-alert__icon {
  color: var(--color-primary-7);
  font-size: 1.2em;
}
.novy-alert__close {
  background: none;
  border: none;
  color: inherit;
  font-size: 1.2em;
  position: absolute;
  right: var(--spacing-3);
  top: var(--spacing-3);
  cursor: pointer;
  border-radius: var(--radii-1);
  outline: none;
  transition: box-shadow 0.2s;
}
.novy-alert__close:focus-visible {
  box-shadow: 0 0 0 2px var(--color-focus-1);
}
.novy-alert--success {
  border-color: var(--color-success-7);
  background: var(--color-success-1);
  color: var(--color-success-11);
}
.novy-alert--error {
  border-color: var(--color-error-7);
  background: var(--color-error-1);
  color: var(--color-error-11);
}
.novy-alert--warning {
  border-color: var(--color-warning-7);
  background: var(--color-warning-1);
  color: var(--color-warning-11);
}
.novy-alert--info {
  border-color: var(--color-info-7);
  background: var(--color-info-1);
  color: var(--color-info-11);
}
.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
