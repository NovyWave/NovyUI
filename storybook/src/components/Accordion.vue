<template>
  <div class="novy-accordion">
    <!-- Render accordion items here -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
// Minimal stub for Storybook integration. Replace with real logic as needed.
</script>

<style scoped>
.novy-accordion {
  /* Use design tokens for background, border, etc. */
  background: var(--color-surface-1);
  border-radius: var(--radii-2);
  box-shadow: var(--shadow-1);
}
</style>
