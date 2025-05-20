<template>
  <button
    :style="buttonStyle"
    :disabled="disabled || loading"
    type="button"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @focus="onFocus"
    @blur="onBlur"
  >
    <template v-if="loading">
      <!-- Only rightIcon defined: spinner replaces right icon, keep label and spinner in a flex row -->
      <span v-if="rightIcon && !leftIcon" :style="{ display: 'flex', alignItems: 'center', width: tokens.width.fill }">
        <span class="button-label" v-if="label"
          :style="{
            flex: 1,
            textAlign: 'center',
            paddingLeft: labelPaddingX,
            paddingRight: labelPaddingX,
            minWidth: tokens.width[0]
          }"
        >{{ label }}</span>
        <span class="button-icon right">
          <Icon :name="spinnerIconName" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" aria-label="Loading" role="img" class="spin" />
        </span>
      </span>
      <!-- Left icon defined (or both icons): spinner on left, rightIcon (if present) on right -->
      <template v-else>
        <span class="button-icon left">
          <Icon :name="spinnerIconName" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" aria-label="Loading" role="img" class="spin" />
        </span>
        <span v-if="label" class="button-label"
          :style="{
            flex: 1,
            textAlign: 'center',
            paddingLeft: labelPaddingX,
            paddingRight: labelPaddingX,
            minWidth: tokens.width[0]
          }"
        >{{ label }}</span>
        <span v-if="rightIcon" class="button-icon right">
          <Icon :name="rightIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="rightIconAriaLabel || rightIcon" role="img" />
        </span>
      </template>
    </template>
    <template v-else>
      <span
        v-if="leftIcon && label"
        class="button-icon left"
        :style="{}"
      >
        <Icon :name="leftIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="leftIconAriaLabel || leftIcon" role="img" />
      </span>
      <span
        v-if="label"
        class="button-label"
        :style="{
          flex: 1,
          textAlign: 'center',
          paddingLeft: labelPaddingX,
          paddingRight: labelPaddingX,
          minWidth: tokens.width[0]
        }"
      >{{ label }}</span>
      <span
        v-if="rightIcon && label"
        class="button-icon right"
        :style="{}"
      >
        <Icon :name="rightIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="rightIconAriaLabel || rightIcon" role="img" />
      </span>
      <!-- Icon-only left or right -->
      <span v-else-if="leftIcon && !label" class="button-icon left" :style="{}">
        <Icon :name="leftIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="leftIconAriaLabel || leftIcon" role="img" />
      </span>
      <span v-else-if="rightIcon && !label" class="button-icon right" :style="{}">
        <Icon :name="rightIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="rightIconAriaLabel || rightIcon" role="img" />
      </span>
    </template>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { tokens, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';

type Variant = 'Primary' | 'Secondary' | 'Outline' | 'Ghost' | 'Link' | 'Destructive';
type Size = 'small' | 'medium' | 'large';

const props = defineProps<{
  label: string,
  variant?: Variant,
  size?: Size,
  disabled?: boolean,
  loading?: boolean,
  leftIcon?: IconToken | null,
  rightIcon?: IconToken | null,
  leftIconAriaLabel?: string,
  rightIconAriaLabel?: string,
  minWidth?: string | number,
}>();

const hovered = ref(false);
const active = ref(false);
const focused = ref(false);

function onMouseEnter() { hovered.value = true; }
function onMouseLeave() { hovered.value = false; }
function onMouseDown() { active.value = true; }
function onMouseUp() { active.value = false; }
function onFocus() { focused.value = true; }
function onBlur() { focused.value = false; }

const spinnerIconName: IconToken = 'refresh-cw';

const theme = useTheme();

const labelPaddingX = computed(() => tokens.value.spacing[2]);

// Icon size logic
const iconSize = computed(() => {
  if (props.size === 'small') return tokens.value.width[7];
  if (props.size === 'large') return tokens.value.width[2];
  return tokens.value.width[8];
});

const buttonStyle = computed(() => {
  const variant = props.variant || 'Primary';
  const size = props.size || 'medium';
  const isDark = theme.value === 'dark';
  let background: string = tokens.value.color.primary[7];
  let color: string = tokens.value.color.neutral[1];
  let borderColor: string = tokens.value.color.primary[7];
  let borderStyle: string = tokens.value.borderStyle.solid;
  let borderWidth: string = tokens.value.borderWidth[1];
  let boxShadow: string = `${tokens.value.shadowSize[1]} ${tokens.value.shadowColor.primary}`;
  let borderRadius: string = tokens.value.radii[2];
  let fontWeight: number = tokens.value.typography.weight[2];
  let fontSize: string = tokens.value.typography.size[3];
  let paddingY: string = tokens.value.spacing[2];
  let paddingX: string = tokens.value.spacing[3];
  let minWidth: string | undefined = undefined;
  if (typeof props.minWidth === 'number') {
    minWidth = `${props.minWidth}px`;
  } else if (typeof props.minWidth === 'string' && props.minWidth) {
    minWidth = props.minWidth;
  }
  let textDecoration: string | undefined = undefined;

  // Variant logic
  if (variant === 'Primary') {
    background = tokens.value.color.primary[7];
    color = tokens.value.color.neutral[1];
    borderColor = tokens.value.color.primary[7];
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[1];
    boxShadow = `${tokens.value.shadowSize[1]} ${tokens.value.shadowColor.primary}`; // Add subtle shadow
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[8];
      borderColor = tokens.value.color.primary[8];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[9];
      borderColor = tokens.value.color.primary[9];
    }
  } else if (variant === 'Secondary') {
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.neutral[3];
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[1];
    boxShadow = `${tokens.value.shadowSize[1]} ${tokens.value.shadowColor.neutral}`;
    background = isDark ? tokens.value.color.neutral[3] : tokens.value.color.neutral[1];
    if (hovered.value && !props.disabled && !props.loading) {
      background = isDark ? tokens.value.color.neutral[4] : tokens.value.color.neutral[4];
      borderColor = tokens.value.color.primary[6];
      color = tokens.value.color.primary[8];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = isDark ? tokens.value.color.neutral[5] : tokens.value.color.neutral[5];
      borderColor = tokens.value.color.primary[7];
      color = tokens.value.color.primary[9];
    }
  } else if (variant === 'Outline') {
    background = tokens.value.color.transparent;
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.neutral[3];
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[2]; // Thicker border for better visibility
    boxShadow = 'none'; // Mute shadow for Outline variant
    if (hovered.value && !props.disabled && !props.loading) {
      borderColor = tokens.value.color.primary[7];
      color = tokens.value.color.primary[7];
    }
    if (active.value && !props.disabled && !props.loading) {
      borderColor = tokens.value.color.primary[8];
      color = tokens.value.color.primary[8];
    }
  } else if (variant === 'Ghost') {
    background = tokens.value.color.transparent;
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.transparent; // No border
    borderStyle = 'none'; // Remove border style
    borderWidth = '0'; // Remove border width
    boxShadow = 'none'; // No shadow
    if ((hovered.value || focused.value) && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[3]; // More visible blue background on hover/focus
      color = tokens.value.color.primary[10];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.primary[4];
      color = tokens.value.color.primary[10];
    }
  } else if (variant === 'Link') {
    background = tokens.value.color.transparent;
    color = tokens.value.color.primary[7];
    borderColor = tokens.value.color.transparent;
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth.none;
    boxShadow = 'none';
    textDecoration = 'underline';
    fontWeight = tokens.value.typography.weight[3];
    paddingY = tokens.value.spacing[2];
    paddingX = tokens.value.spacing[3];
    if (hovered.value && !props.disabled && !props.loading) {
      color = tokens.value.color.primary[9];
      textDecoration = 'underline';
    }
    if (active.value && !props.disabled && !props.loading) {
      color = tokens.value.color.primary[10];
      textDecoration = 'underline';
    }
    if (focused.value && !props.disabled && !props.loading) {
      color = tokens.value.color.primary[8];
      textDecoration = 'underline';
    }
  } else if (variant === 'Destructive') {
    background = tokens.value.color.error[7];
    color = tokens.value.color.neutral[1];
    borderColor = tokens.value.color.error[7];
    borderStyle = tokens.value.borderStyle.solid;
    borderWidth = tokens.value.borderWidth[1];
    boxShadow = `${tokens.value.shadowSize[1]} ${tokens.value.shadowColor.error}`;
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.value.color.error[8];
      borderColor = tokens.value.color.error[8];
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.value.color.error[9];
      borderColor = tokens.value.color.error[9];
    }
  }

  // Size logic (skip for Link)
  let minHeight: string = tokens.value.height[2];
  if (variant !== 'Link') {
    if (size === 'small') {
      paddingY = tokens.value.spacing[1];
      paddingX = tokens.value.spacing[2];
      fontSize = tokens.value.typography.size[2];
      minHeight = tokens.value.height[1];
    } else if (size === 'large') {
      paddingY = tokens.value.spacing[3];
      paddingX = tokens.value.spacing[4];
      fontSize = tokens.value.typography.size[4];
      minHeight = tokens.value.height[3];
    } else {
      paddingY = tokens.value.spacing[2];
      paddingX = tokens.value.spacing[3];
      fontSize = tokens.value.typography.size[3];
      minHeight = tokens.value.height[2];
    }
  }

  // --- FOCUS RING LOGIC ---
  if (focused.value && !props.disabled && !props.loading && variant !== 'Link') {
    // Custom focus ring: 3px, high-contrast, always visible
    const focusColor = tokens.value.color.focus?.[1] ?? '#1976d2';
    if (typeof boxShadow === 'string' && boxShadow !== 'none' && boxShadow.length > 0) {
      boxShadow = `${boxShadow}, 0 0 0 3px ${focusColor}cc`;
    } else {
      boxShadow = `0 0 0 3px ${focusColor}cc`;
    }
  }

  let opacity = tokens.value.opacity.opaque;
  let cursor = 'pointer';
  if (props.disabled || props.loading) {
    opacity = tokens.value.opacity[5];
    cursor = 'not-allowed';
    background = tokens.value.color.neutral[5];
    color = tokens.value.color.neutral[7];
    borderColor = tokens.value.color.neutral[5];
    boxShadow = `${tokens.value.shadowSize[1]} ${tokens.value.shadowColor.neutral}`;
  }

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    borderStyle: borderStyle,
    borderColor: borderColor,
    fontSize: fontSize,
    fontFamily: tokens.value.typography.family.sans,
    fontWeight: fontWeight,
    letterSpacing: tokens.value.typography.letter[2],
    padding: `${paddingY} ${paddingX}` as string,
    ...(minWidth ? { minWidth: minWidth as string } : {}),
    cursor: cursor,
    background: background,
    color: color,
    boxShadow: boxShadow,
    outline: 'none',
    opacity: opacity,
    position: 'relative',
    transition: tokens.value.transition.fast,
    pointerEvents: props.loading ? 'none' : 'auto',
    textDecoration: textDecoration || 'none',
    minHeight: minHeight,
    lineHeight: tokens.value.lineHeight[1],
  } as Record<string, string | number>;
});
</script>

<style scoped>
@keyframes spin {
  100% { transform: rotate(360deg); }
}
.spin {
  animation: spin 1s linear infinite;
}
</style>
