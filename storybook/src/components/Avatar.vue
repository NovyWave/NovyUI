<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';
const props = defineProps<{
  variant?: 'Image' | 'Initials' | 'WithStatus' | 'Group',
  status?: 'Online' | 'Offline' | 'None',
  src?: string,
  alt?: string,
  initials?: string,
  disabled?: boolean,
}>();
const variant = props.variant ?? 'Image';
const status = props.status ?? 'None';
const src = props.src ?? '';
const alt = props.alt ?? 'Avatar';
const initials = props.initials ?? 'AB';
const disabled = props.disabled ?? false;
const statusColor = computed(() => {
  if (status === 'Online') return '#22c55e'; // fallback, ideally from tokens
  if (status === 'Offline') return '#ef4444'; // fallback, ideally from tokens
  return 'transparent';
});
</script>
<template>
  <div
    :aria-disabled="disabled ? true : undefined"
    role="img"
    :style="{
      background: tokens.color.bg.subtle,
      border: `${tokens.border[1]} solid ${tokens.color.border.subtle}`,
      borderRadius: tokens.radii.full,
      boxShadow: tokens.shadow[1],
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: tokens.typography.weight[3],
      fontSize: tokens.typography.size[3],
      position: 'relative',
      color: tokens.color.text.default,
      opacity: disabled ? 0.5 : 1,
      pointerEvents: disabled ? 'none' : 'auto',
    }"
  >
    <img v-if="variant === 'Image' && src" :src="src" :alt="alt" :style="{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: tokens.radii.full,
    }" />
    <span v-else-if="variant === 'Initials'">{{ initials }}</span>
    <span v-else-if="variant === 'WithStatus'" :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'relative' }">
      {{ initials }}
      <span :style="{
        position: 'absolute',
        bottom: '2px',
        right: '2px',
        width: '10px',
        height: '10px',
        borderRadius: tokens.radii.full,
        border: `${tokens.border[1]} solid ${tokens.color.bg.subtle}`,
        background: statusColor.value,
        display: 'inline-block',
      }"></span>
    </span>
    <slot v-else />
  </div>
</template>
