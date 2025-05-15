<template>
  <div
    class="novy-accordion"
    :aria-disabled="disabled ? 'true' : undefined"
    role="presentation"
  >
    <div
      v-for="(item, idx) in items"
      :key="item.id"
      class="novy-accordion__item"
      :class="{
        'is-open': isOpen(idx),
        'is-disabled': disabled || item.disabled,
      }"
    >
      <button
        class="novy-accordion__header"
        :aria-expanded="isOpen(idx) ? 'true' : 'false'"
        :aria-controls="`panel-${item.id}`"
        :id="`accordion-header-${item.id}`"
        :disabled="disabled || item.disabled"
        @click="toggle(idx)"
        @keydown="onKeydown($event, idx)"
      >
        <span v-if="variant === 'WithIcons' && item.icon" class="novy-accordion__icon">{{ item.icon }}</span>
        {{ item.title }}
      </button>
      <div
        v-show="isOpen(idx)"
        class="novy-accordion__panel"
        :id="`panel-${item.id}`"
        :aria-labelledby="`accordion-header-${item.id}`"
        role="region"
      >
        <slot :name="item.slot || undefined" :item="item">{{ item.content }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue';
const { variant, disabled, items, defaultOpen } = withDefaults(defineProps<{
  variant?: 'Single' | 'Multiple' | 'WithIcons',
  disabled?: boolean,
  items?: Array<{
    id: string|number,
    title: string,
    content?: string,
    icon?: string,
    disabled?: boolean,
    slot?: string,
  }>,
  defaultOpen?: number[]
}>(), {
  variant: 'Single',
  disabled: false,
  items: () => [
    { id: 1, title: 'Accordion Item 1', content: 'Content for item 1' },
    { id: 2, title: 'Accordion Item 2', content: 'Content for item 2' },
    { id: 3, title: 'Accordion Item 3', content: 'Content for item 3' },
  ],
  defaultOpen: () => [0],
});
const openIndexes = ref<number[]>(variant === 'Multiple' ? defaultOpen : [defaultOpen[0] ?? 0]);
watch(() => variant, (v) => {
  if (v === 'Multiple') openIndexes.value = defaultOpen;
  else openIndexes.value = [defaultOpen[0] ?? 0];
});
function isOpen(idx: number) {
  return openIndexes.value.includes(idx);
}
function toggle(idx: number) {
  if (disabled || items[idx]?.disabled) return;
  if (variant === 'Multiple') {
    if (isOpen(idx)) openIndexes.value = openIndexes.value.filter((i: number) => i !== idx);
    else openIndexes.value.push(idx);
  } else {
    openIndexes.value = isOpen(idx) ? [] : [idx];
  }
}
function onKeydown(e: KeyboardEvent, idx: number) {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    focusHeader((idx + 1) % items.length);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    focusHeader((idx - 1 + items.length) % items.length);
  } else if (e.key === 'Home') {
    e.preventDefault();
    focusHeader(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    focusHeader(items.length - 1);
  }
}
function focusHeader(idx: number) {
  nextTick(() => {
    const btn = document.getElementById(`accordion-header-${items[idx].id}`);
    btn?.focus();
  });
}
</script>

<style scoped>
.novy-accordion {
  background: var(--color-surface-1);
  border-radius: var(--radii-2);
  box-shadow: var(--shadow-1);
  padding: var(--spacing-2) 0;
}
.novy-accordion__item {
  border-bottom: var(--border-1) solid var(--color-border-2);
}
.novy-accordion__header {
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-3);
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--color-neutral-12);
  border-radius: var(--radii-2) var(--radii-2) 0 0;
  outline: none;
  transition: background 0.2s, color 0.2s, border 0.2s;
}
.novy-accordion__header:focus-visible {
  box-shadow: 0 0 0 2px var(--color-focus-1);
  z-index: 1;
}
.novy-accordion__header:hover:not(:disabled) {
  background: var(--color-surface-2);
}
.novy-accordion__header:active:not(:disabled) {
  background: var(--color-surface-3);
}
.novy-accordion__header:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: var(--color-neutral-7);
}
.novy-accordion__icon {
  color: var(--color-primary-7);
  font-size: 1.2em;
}
.novy-accordion__panel {
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--color-surface-2);
  color: var(--color-neutral-12);
  border-radius: 0 0 var(--radii-2) var(--radii-2);
  box-shadow: var(--shadow-1);
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
}
.is-open .novy-accordion__header {
  background: var(--color-surface-2);
  color: var(--color-primary-7);
}
.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
