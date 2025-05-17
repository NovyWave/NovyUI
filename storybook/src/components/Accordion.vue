<template>
  <div
    :aria-disabled="disabled ? 'true' : undefined"
    role="presentation"
    :style="{
      background: tokens.color.bg.default,
      borderRadius: tokens.radii[2],
      boxShadow: tokens.shadow[1],
      padding: `${tokens.spacing[2]} 0`,
    }"
  >
    <div
      v-for="(item, idx) in items"
      :key="item.id"
      :style="{
        borderBottom: `${tokens.border[1]} solid ${tokens.color.border.subtle}`,
        opacity: disabled || item.disabled ? 0.5 : 1,
        pointerEvents: disabled || item.disabled ? 'none' : 'auto',
      }"
    >
      <button
        :aria-expanded="isOpen(idx) ? 'true' : 'false'"
        :aria-controls="`panel-${item.id}`"
        :id="`accordion-header-${item.id}`"
        :disabled="disabled || item.disabled"
        @click="toggle(idx)"
        @keydown="onKeydown($event, idx)"
        :style="{
          width: '100%',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          padding: `${tokens.spacing[3]} ${tokens.spacing[4]}`,
          fontSize: tokens.typography.size[3],
          fontWeight: tokens.typography.weight[2],
          cursor: disabled || item.disabled ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: tokens.spacing[2],
          color: isOpen(idx) ? tokens.color.primary.default : tokens.color.text.default,
          borderRadius: `${tokens.radii[2]} ${tokens.radii[2]} 0 0`,
          outline: 'none',
          transition: 'background 0.2s, color 0.2s, border 0.2s',
          backgroundColor: isOpen(idx) ? tokens.color.bg.subtle : undefined,
        }"
      >
        <span v-if="variant === 'WithIcons' && item.icon" :style="{ color: tokens.color.primary.default, fontSize: '1.2em' }">{{ item.icon }}</span>
        {{ item.title }}
      </button>
      <div
        v-show="isOpen(idx)"
        :id="`panel-${item.id}`"
        :aria-labelledby="`accordion-header-${item.id}`"
        role="region"
        :style="{
          padding: `${tokens.spacing[3]} ${tokens.spacing[4]}`,
          background: tokens.color.bg.subtle,
          color: tokens.color.text.default,
          borderRadius: `0 0 ${tokens.radii[2]} ${tokens.radii[2]}`,
          boxShadow: tokens.shadow[1],
        }"
      >
        <slot :name="item.slot || undefined" :item="item">{{ item.content }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue';
import { tokens } from '../tokens';

interface AccordionItem {
  id: string | number;
  title: string;
  content?: string;
  icon?: string;
  disabled?: boolean;
  slot?: string;
}

const props = defineProps<{
  variant?: 'Single' | 'Multiple' | 'WithIcons',
  disabled?: boolean,
  items?: AccordionItem[],
  defaultOpen?: number[]
}>();

const variant = props.variant ?? 'Single';
const disabled = props.disabled ?? false;
const items: AccordionItem[] = props.items ?? [
  { id: 1, title: 'Accordion Item 1', content: 'Content for item 1' },
  { id: 2, title: 'Accordion Item 2', content: 'Content for item 2' },
  { id: 3, title: 'Accordion Item 3', content: 'Content for item 3' },
];
const defaultOpen = props.defaultOpen ?? [0];

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
