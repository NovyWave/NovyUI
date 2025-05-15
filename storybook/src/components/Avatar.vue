<template>
  <div
    class="novy-avatar"
    :class="[
      `novy-avatar--${variant.toLowerCase()}`,
      `novy-avatar--${status.toLowerCase()}`,
      { 'is-disabled': disabled }
    ]"
    :aria-disabled="disabled ? true : undefined"
  >
    <img v-if="variant === 'Image' && src" :src="src" :alt="alt" class="novy-avatar__img" />
    <span v-else-if="variant === 'Initials'">{{ initials }}</span>
    <span v-else-if="variant === 'WithStatus'">{{ initials }}<span class="novy-avatar__status" :class="`status--${status.toLowerCase()}`"></span></span>
    <slot v-else />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  variant?: 'Image' | 'Initials' | 'WithStatus' | 'Group',
  status?: 'Online' | 'Offline' | 'None',
  src?: string,
  alt?: string,
  initials?: string,
  disabled?: boolean,
}>(), {
  variant: 'Image',
  status: 'None',
  src: '',
  alt: 'Avatar',
  initials: 'AB',
  disabled: false,
});
const { variant, status, src, alt, initials, disabled } = props;
</script>

<style scoped>
.novy-avatar {
  background: var(--color-surface-2);
  border: var(--border-1) solid var(--color-border-2);
  border-radius: var(--radii-full);
  box-shadow: var(--shadow-1);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: var(--font-size-3);
  position: relative;
  color: var(--color-neutral-12);
}
.novy-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radii-full);
}
.novy-avatar__status {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  border-radius: var(--radii-full);
  border: var(--border-1) solid var(--color-surface-2);
}
.status--online {
  background: var(--color-success-7);
}
.status--offline {
  background: var(--color-error-7);
}
.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
