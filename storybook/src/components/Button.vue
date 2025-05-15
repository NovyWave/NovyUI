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
  border-radius: var(--radii-2, 4px);
  border-width: var(--border-1, 1px);
  border-style: solid;
  border-color: var(--color-border-default, var(--color-neutral-5, #ccc));
  font-size: var(--font-size-3, 1rem);
  font-family: var(--font-sans, inherit);
  font-weight: var(--font-weight-2, 500);
  letter-spacing: var(--font-letter-2, 0.01em);
  padding: 0 var(--spacing-3, 12px);
  height: 36px;
  min-width: 44px;
  cursor: pointer;
  background: linear-gradient(180deg, var(--color-primary-6, #6b7cff), var(--color-primary-7, #555ab9));
  color: var(--color-neutral-1, #fff);
  box-shadow: var(--shadow-1, 0 1px 2px rgba(0,0,0,0.04));
  transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s;
  outline: none;
  position: relative;
}
.novy-button:focus-visible {
  box-shadow: 0 0 0 3px var(--color-primary-10, #2a2e5c);
  z-index: 1;
}
.novy-button--primary {
  background: linear-gradient(180deg, var(--color-primary-6, #6b7cff), var(--color-primary-7, #555ab9));
  color: var(--color-neutral-1, #fff);
  border-color: var(--color-primary-7, #555ab9);
}
.novy-button--primary:hover:not(:disabled):not(.is-disabled) {
  background: linear-gradient(180deg, var(--color-primary-7, #555ab9), var(--color-primary-8, #3d478b));
  box-shadow: var(--shadow-2, 0 2px 8px rgba(0,0,0,0.08));
}
.novy-button--primary:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-8, #3d478b);
}
.novy-button--secondary {
  background: var(--color-neutral-2, #f6f8fa);
  color: var(--color-primary-7, #555ab9);
  border-color: var(--color-primary-5, #7b8cff);
}
.novy-button--secondary:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-2, #e6eaff);
  color: var(--color-primary-8, #3d478b);
}
.novy-button--secondary:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-3, #d1d9ff);
}
.novy-button--outline {
  background: transparent;
  color: var (--color-primary-7, #555ab9);
  border-style: dashed;
  border-color: var(--color-primary-6, #6b7cff);
}
.novy-button--outline:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-1, #f7faff);
  color: var(--color-primary-8, #3d478b);
}
.novy-button--outline:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-2, #e6eaff);
}
.novy-button--ghost {
  background: transparent;
  color: var(--color-primary-7, #555ab9);
  border: none;
  box-shadow: none;
}
.novy-button--ghost:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-1, #f7faff);
  color: var(--color-primary-8, #3d478b);
}
.novy-button--ghost:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-2, #e6eaff);
}
.novy-button--icon {
  padding: 0;
  width: 36px;
  height: 36px;
  justify-content: center;
  background: var(--color-primary-1, #f7faff);
  color: var(--color-primary-7, #555ab9);
  border: none;
}
.novy-button--icon:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-2, #e6eaff);
  color: var(--color-primary-8, #3d478b);
}
.novy-button--icon:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-3, #d1d9ff);
}
.novy-button--loading {
  opacity: 0.7;
  pointer-events: none;
}
.novy-button--group {
  border-radius: 0;
}
.novy-button--sociallogin {
  background: var(--color-neutral-1, #fff);
  color: var(--color-primary-7, #555ab9);
  border-color: var(--color-neutral-5, #ccc);
}
.novy-button--sociallogin:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-neutral-2, #f6f8fa);
}
.novy-button--small {
  padding: 0 var(--spacing-2, 8px);
  height: 28px;
  font-size: var(--font-size-2, 0.875rem);
}
.novy-button--medium {
  padding: 0 var(--spacing-3, 12px);
  height: 36px;
  font-size: var(--font-size-3, 1rem);
}
.novy-button--large {
  padding: 0 var(--spacing-4, 16px);
  height: 44px;
  font-size: var(--font-size-4, 1.125rem);
}
.novy-button:disabled,
.novy-button.is-disabled {
  background: var(--color-neutral-6, #bfc8d2);
  color: var(--color-neutral-8, #6b7280);
  cursor: not-allowed;
  opacity: 0.7;
  box-shadow: none;
}
.novy-button__spinner {
  margin-right: var(--spacing-2, 8px);
  font-size: 1em;
}

/* --- DARK THEME OVERRIDES --- */
body.dark .novy-button {
  background: linear-gradient(180deg, var(--color-primary-8, #3d478b), var(--color-primary-7, #555ab9));
  color: var(--color-neutral-11, #fff);
  border-color: var(--color-primary-8, #3d478b);
}
body.dark .novy-button--primary {
  background: linear-gradient(180deg, var(--color-primary-8, #3d478b), var(--color-primary-7, #555ab9));
  color: var(--color-neutral-11, #fff);
  border-color: var(--color-primary-8, #3d478b);
}
body.dark .novy-button--primary:hover:not(:disabled):not(.is-disabled) {
  background: linear-gradient(180deg, var(--color-primary-9, #2a2e5c), var(--color-primary-8, #3d478b));
  color: var(--color-neutral-1, #fff);
}
body.dark .novy-button--primary:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-9, #2a2e5c);
}
body.dark .novy-button--secondary {
  background: var(--color-neutral-8, #6b7280);
  color: var(--color-primary-3, #b3c0ff);
  border-color: var(--color-primary-6, #6b7cff);
}
body.dark .novy-button--secondary:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-9, #2a2e5c);
  color: var(--color-primary-2, #e6eaff);
}
body.dark .novy-button--secondary:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-8, #3d478b);
}
body.dark .novy-button--outline {
  background: transparent;
  color: var(--color-primary-3, #b3c0ff);
  border-style: dashed;
  border-color: var(--color-primary-6, #6b7cff);
}
body.dark .novy-button--outline:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-10, #23263a);
  color: var(--color-primary-2, #e6eaff);
}
body.dark .novy-button--outline:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-9, #2a2e5c);
}
body.dark .novy-button--ghost {
  background: transparent;
  color: var(--color-primary-3, #b3c0ff);
  border: none;
  box-shadow: none;
}
body.dark .novy-button--ghost:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-10, #23263a);
  color: var(--color-primary-2, #e6eaff);
}
body.dark .novy-button--ghost:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-9, #2a2e5c);
}
body.dark .novy-button--icon {
  background: var(--color-primary-10, #23263a);
  color: var(--color-primary-3, #b3c0ff);
  border: none;
}
body.dark .novy-button--icon:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-9, #2a2e5c);
  color: var(--color-primary-2, #e6eaff);
}
body.dark .novy-button--icon:active:not(:disabled):not(.is-disabled) {
  background: var(--color-primary-8, #3d478b);
}
body.dark .novy-button--loading {
  opacity: 0.7;
  pointer-events: none;
}
body.dark .novy-button--group {
  border-radius: 0;
}
body.dark .novy-button--sociallogin {
  background: var(--color-neutral-11, #fff);
  color: var(--color-primary-3, #b3c0ff);
  border-color: var(--color-neutral-7, #bfc8d2);
}
body.dark .novy-button--sociallogin:hover:not(:disabled):not(.is-disabled) {
  background: var(--color-neutral-10, #f6f8fa);
}
body.dark .novy-button:disabled,
body.dark .novy-button.is-disabled {
  background: var(--color-neutral-7, #bfc8d2);
  color: var(--color-neutral-9, #23263a);
  cursor: not-allowed;
  opacity: 0.7;
  box-shadow: none;
}
</style>
