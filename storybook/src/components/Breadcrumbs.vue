<template>
  <nav class="novy-breadcrumbs">
    <slot />
  </nav>
</template>

<script lang="ts" setup>
// Minimal stub for Storybook integration. Replace with real logic as needed.
</script>

<style scoped>
.novy-breadcrumbs {
  background: var(--color-surface-1);
  border-radius: var(--radii-2);
  padding: var(--spacing-1) var(--spacing-2);
  display: flex;
  align-items: center;
  color: var(--color-neutral-12);
  gap: var(--spacing-2);
}
</style>
