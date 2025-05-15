<template>
  <div class="novy-alert">
    <slot />
  </div>
</template>

<script lang="ts" setup>
// Minimal stub for Storybook integration. Replace with real logic as needed.
</script>

<style scoped>
.novy-alert {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border-2);
  color: var(--color-neutral-12);
  box-shadow: var(--shadow-1);
  border-radius: var(--radii-2);
}
</style>
