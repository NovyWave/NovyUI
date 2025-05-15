<template>
  <span
    class="novy-badge"
    :class="[
      `novy-badge--${variant.toLowerCase()}`,
      { 'is-disabled': disabled }
    ]"
    :aria-disabled="disabled ? true : undefined"
  >
    <span v-if="variant === 'Dot'" class="novy-badge__dot"></span>
    <span v-else-if="variant === 'WithIcon' && icon" class="novy-badge__icon">{{ icon }}</span>
    <span v-else-if="variant === 'WithCount'">{{ count }}</span>
    <slot v-else />
  </span>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  variant?: 'Solid' | 'Outline' | 'Dot' | 'WithIcon' | 'WithCount',
  count?: number,
  icon?: string,
  disabled?: boolean,
}>(), {
  variant: 'Solid',
  count: 0,
  icon: '',
  disabled: false,
});
const { variant, count, icon, disabled } = props;
</script>

<style scoped>
.novy-badge {
  background: var(--color-surface-3);
  color: var(--color-neutral-12);
  border: var(--border-1) solid var(--color-border-2);
  border-radius: var(--radii-2);
  box-shadow: var(--shadow-1);
  padding: 0 var(--spacing-2);
  font-size: var(--font-size-2);
  display: inline-flex;
  align-items: center;
  height: 20px;
  min-width: 20px;
  justify-content: center;
}
.novy-badge--outline {
  background: transparent;
  border: var(--border-1) solid var(--color-border-2);
  color: var(--color-neutral-12);
}
.novy-badge--dot {
  background: transparent;
  border: none;
  padding: 0;
}
.novy-badge__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radii-full);
  background: var(--color-primary-7);
  display: inline-block;
}
.novy-badge__icon {
  color: var(--color-primary-7);
  font-size: 1em;
}
.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
