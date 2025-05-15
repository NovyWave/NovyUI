<template>
  <blockquote class="novy-blockquote">
    <slot />
  </blockquote>
</template>

<script lang="ts" setup>
// Minimal stub for Storybook integration. Replace with real logic as needed.
</script>

<style scoped>
.novy-blockquote {
  background: var(--color-surface-2);
  color: var(--color-neutral-12);
  border-left: 4px solid var(--color-border-3);
  border-radius: var(--radii-2);
  box-shadow: var(--shadow-1);
  padding: 16px;
  margin: 0;
}
</style>
