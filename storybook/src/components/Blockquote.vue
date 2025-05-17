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
  background: tokens.value.color.bg?.subtle,
  color: tokens.value.color.text?.default,
  borderLeft: `${tokens.value.border[1]} solid ${tokens.value.color.border?.subtle}`,
  borderRadius: tokens.value.radii[2],
  boxShadow: tokens.value.shadow[1],
  padding: tokens.value.spacing[4],
  margin: 0,
  position: 'relative',
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
}));
const authorStyle = computed<Record<string, string | number>>(() => ({
  display: 'block',
  marginTop: tokens.value.spacing[2],
  fontSize: tokens.value.typography.size[3],
  color: tokens.value.color.text?.muted,
  fontStyle: 'italic',
}));
const expandBtnStyle = computed<Record<string, string | number>>(() => ({
  background: 'none',
  border: 'none',
  color: tokens.value.color.primary?.default,
  cursor: 'pointer',
  fontSize: tokens.value.typography.size[3],
  marginTop: tokens.value.spacing[2],
  borderRadius: tokens.value.radii[1],
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
