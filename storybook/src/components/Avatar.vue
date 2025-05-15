<template>
  <div class="novy-avatar">
    <slot />
  </div>
</template>

<script lang="ts" setup>
// Minimal stub for Storybook integration. Replace with real logic as needed.
</script>

<style scoped>
.novy-avatar {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border-2);
  border-radius: 50%;
  box-shadow: var(--shadow-1);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
