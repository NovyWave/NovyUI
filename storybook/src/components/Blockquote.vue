<template>
  <blockquote
    class="novy-blockquote"
    :class="[
      `novy-blockquote--${variant.toLowerCase()}`,
      { 'is-disabled': disabled }
    ]"
    :aria-disabled="disabled ? true : undefined"
  >
    <div class="novy-blockquote__content">
      <slot />
    </div>
    <footer v-if="variant === 'WithAuthor' && author" class="novy-blockquote__author">— {{ author }}</footer>
    <button
      v-if="variant === 'Expandable' && expandable"
      class="novy-blockquote__expand"
      @click="expanded = !expanded"
      :aria-expanded="expanded"
    >
      {{ expanded ? 'Collapse' : 'Expand' }}
    </button>
  </blockquote>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const { variant, author, expandable, disabled } = withDefaults(defineProps<{
  variant?: 'WithAuthor' | 'Simple' | 'Expandable',
  author?: string,
  expandable?: boolean,
  disabled?: boolean,
}>(), {
  variant: 'WithAuthor',
  author: '',
  expandable: false,
  disabled: false,
});
const expanded = ref(false);
</script>

<style scoped>
.novy-blockquote {
  background: var(--color-surface-2);
  color: var(--color-neutral-12);
  border-left: var(--border-3) solid var(--color-border-3);
  border-radius: var(--radii-2);
  box-shadow: var(--shadow-1);
  padding: var(--spacing-4);
  margin: 0;
  position: relative;
}
.novy-blockquote__author {
  display: block;
  margin-top: var(--spacing-2);
  font-size: var(--font-size-2);
  color: var(--color-neutral-9);
  font-style: italic;
}
.novy-blockquote__expand {
  background: none;
  border: none;
  color: var(--color-primary-7);
  cursor: pointer;
  font-size: var(--font-size-2);
  margin-top: var(--spacing-2);
  border-radius: var(--radii-1);
  outline: none;
  transition: box-shadow 0.2s;
}
.novy-blockquote__expand:focus-visible {
  box-shadow: 0 0 0 2px var(--color-focus-1);
}
.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
