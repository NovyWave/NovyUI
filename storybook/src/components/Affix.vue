<template>
  <div :style="affixStyle" :aria-disabled="disabled ? true : undefined">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';
const props = defineProps<{
  position?: 'top' | 'bottom' | 'left' | 'right',
  offset?: number,
  disabled?: boolean,
}>();
const position = props.position ?? 'top';
const offset = props.offset ?? 0;
const disabled = props.disabled ?? false;
const affixStyle = computed<Record<string, string | number>>(() => {
  const pos: Record<string, string | number> = {
    position: 'fixed',
    zIndex: 2, // fallback, ideally from tokens
    background: tokens.color.bg.default,
    border: `${tokens.border[1]} solid ${tokens.color.border.subtle}`,
    boxShadow: tokens.shadow[1],
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  };
  if (position === 'top') pos.top = offset + 'px';
  if (position === 'bottom') pos.bottom = offset + 'px';
  if (position === 'left') pos.left = offset + 'px';
  if (position === 'right') pos.right = offset + 'px';
  return pos;
});
</script>
