<script lang="ts" setup>
import { ref, computed } from 'vue';
import { tokens } from '../tokens';
const props = defineProps<{
  variant?: 'WithAuthor' | 'Simple' | 'Expandable',
  author?: string,
  expandable?: boolean,
  disabled?: boolean,
}>();
const variant = props.variant ?? 'WithAuthor';
const author = props.author ?? '';
const expandable = props.expandable ?? false;
const disabled = props.disabled ?? false;
const expanded = ref(false);
const blockquoteStyle = computed<Record<string, string | number>>(() => ({
  background: tokens.color.bg.subtle,
  color: tokens.color.text.default,
  borderLeft: `${tokens.border[1]} solid ${tokens.color.border.subtle}`,
  borderRadius: tokens.radii[2],
  boxShadow: tokens.shadow[1],
  padding: tokens.spacing[4],
  margin: 0,
  position: 'relative',
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
}));
const authorStyle = computed<Record<string, string | number>>(() => ({
  display: 'block',
  marginTop: tokens.spacing[2],
  fontSize: tokens.font.size3,
  color: tokens.color.text.muted,
  fontStyle: 'italic',
}));
const expandBtnStyle = computed<Record<string, string | number>>(() => ({
  background: 'none',
  border: 'none',
  color: tokens.color.primary.default,
  cursor: 'pointer',
  fontSize: tokens.font.size3,
  marginTop: tokens.spacing[2],
  borderRadius: tokens.radii[1],
  outline: 'none',
  transition: 'box-shadow 0.2s',
}));
</script>
<template>
  <blockquote
    :aria-disabled="disabled ? true : undefined"
    :style="blockquoteStyle"
  >
    <div>
      <slot />
    </div>
    <footer v-if="variant === 'WithAuthor' && author" :style="authorStyle">— {{ author }}</footer>
    <button
      v-if="variant === 'Expandable' && expandable"
      @click="expanded = !expanded"
      :aria-expanded="expanded"
      :style="expandBtnStyle"
    >
      {{ expanded ? 'Collapse' : 'Expand' }}
    </button>
  </blockquote>
</template>
