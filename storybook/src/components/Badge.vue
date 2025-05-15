<template>
  <span class="novy-badge">
    <slot />
  </span>
</template>

<script lang="ts" setup>
// Minimal stub for Storybook integration. Replace with real logic as needed.
</script>

<style scoped>
.novy-badge {
  background: var(--color-surface-3);
  color: var(--color-neutral-12);
  border: 1px solid var(--color-border-2);
  border-radius: var(--radii-2);
  box-shadow: var(--shadow-1);
  padding: 0 8px;
  font-size: var(--font-size-2);
  display: inline-flex;
  align-items: center;
  height: 20px;
}
</style>
