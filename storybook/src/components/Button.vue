<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
    type="button"
  >
    <span v-if="loading" class="novy-button__spinner">⏳</span>
    <span v-else>{{ label }}</span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  label: string,
  variant?: 'Primary' | 'Secondary' | 'Outline' | 'Ghost' | 'Icon' | 'Loading' | 'Group' | 'SocialLogin',
  size?: 'small' | 'medium' | 'large',
  disabled?: boolean,
  loading?: boolean,
}>(), {
  variant: 'Primary',
  size: 'medium',
  disabled: false,
  loading: false,
});

const classes = computed(() => [
  'novy-button',
  `novy-button--${props.variant?.toLowerCase()}`,
  `novy-button--${props.size}`,
  { 'is-disabled': props.disabled, 'is-loading': props.loading },
]);
</script>

<style scoped>
.novy-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid var(--color-border-2, #ccc);
  font-size: var(--font-size-3, 1rem);
  font-family: inherit;
  padding: 0 16px;
  height: 36px;
  cursor: pointer;
  background: var(--color-primary-7, #555ab9);
  color: var(--color-neutral-1, #fff);
  box-shadow: var(--shadow-1, 0 1px 2px rgba(0,0,0,0.04));
  transition: background 0.2s, color 0.2s, border 0.2s;
}
.novy-button--secondary {
  background: transparent;
  color: var(--color-primary-7, #555ab9);
  border: 1px solid var(--color-primary-7, #555ab9);
}
.novy-button--outline {
  background: transparent;
  color: var(--color-primary-7, #555ab9);
  border: 1px dashed var(--color-primary-7, #555ab9);
}
.novy-button--ghost {
  background: transparent;
  color: var(--color-primary-7, #555ab9);
  border: none;
  box-shadow: none;
}
.novy-button--icon {
  padding: 0;
  width: 36px;
  height: 36px;
  justify-content: center;
}
.novy-button--loading {
  opacity: 0.7;
  pointer-events: none;
}
.novy-button--group {
  border-radius: 0;
}
.novy-button--sociallogin {
  background: #fff;
  color: #333;
  border: 1px solid #ccc;
}
.novy-button--small {
  padding: 0 10px;
  height: 28px;
  font-size: 0.875rem;
}
.novy-button--medium {
  padding: 0 16px;
  height: 36px;
  font-size: 1rem;
}
.novy-button--large {
  padding: 0 24px;
  height: 44px;
  font-size: 1.125rem;
}
.novy-button:disabled,
.novy-button.is-disabled {
  background: var(--color-surface-3, #eee);
  color: var(--color-neutral-7, #aaa);
  cursor: not-allowed;
  opacity: 0.7;
}
.novy-button__spinner {
  margin-right: 0.5em;
  font-size: 1em;
}
</style>
