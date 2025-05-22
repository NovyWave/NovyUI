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
      <span v-if="rightIcon && !leftIcon" :style="{ display: 'flex', alignItems: 'center', width: tokens.width.fill }">
        <span class="button-label" v-if="$slots.default">
          <slot />
        </span>
        <span class="button-label" v-else-if="label" :style="labelStyle">{{ label }}</span>
        <span class="button-icon right">
          <Icon :name="spinnerIconName" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" aria-label="Loading" role="img" class="spin" />
        </span>
      </span>
      <template v-else>
        <span class="button-icon left">
          <Icon :name="spinnerIconName" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" aria-label="Loading" role="img" class="spin" />
        </span>
        <span v-if="$slots.default" class="button-label">
          <slot />
        </span>
        <span v-else-if="label" class="button-label" :style="labelStyle">{{ label }}</span>
        <span v-if="rightIcon" class="button-icon right">
          <Icon :name="rightIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="rightIconAriaLabel || rightIcon" role="img" />
        </span>
      </template>
    </template>
    <template v-else>
      <span
        v-if="leftIcon && (label || $slots.default)"
        class="button-icon left"
      >
        <Icon :name="leftIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="leftIconAriaLabel || leftIcon" role="img" />
      </span>
      <span
        v-if="$slots.default"
        class="button-label"
      >
        <slot />
      </span>
      <span
        v-else-if="label"
        class="button-label"
        :style="labelStyle"
      >{{ label }}</span>
      <span
        v-if="rightIcon && (label || $slots.default)"
        class="button-icon right"
      >
        <Icon :name="rightIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="rightIconAriaLabel || rightIcon" role="img" />
      </span>
      <span v-else-if="leftIcon && !label && !$slots.default" class="button-icon left">
        <Icon :name="leftIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="leftIconAriaLabel || leftIcon" role="img" />
      </span>
      <span v-else-if="rightIcon && !label && !$slots.default" class="button-icon right">
        <Icon :name="rightIcon" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" :aria-label="rightIconAriaLabel || rightIcon" role="img" />
      </span>
    </template>
  </button>
</template>

<script lang="ts" setup>
import { computed, ref, type ComputedRef, type CSSProperties } from 'vue';
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

const labelPaddingX = computed(() => tokens.spacing[2]);

const iconSize = computed(() => {
  if (props.size === 'small') return tokens.width[7];
  if (props.size === 'large') return tokens.width[2];
  return tokens.width[8];
});

const labelStyle: ComputedRef<Record<string, string>> = computed(() => ({
  flex: '1',
  textAlign: 'center',
  paddingLeft: String(labelPaddingX.value),
  paddingRight: String(labelPaddingX.value),
  minWidth: String(tokens.width[0]),
}));

const buttonStyle = computed<CSSProperties>(() => {
  const variant = props.variant || 'Primary';
  const size = props.size || 'medium';
  const isDark = theme.value === 'dark';
  let background: string = tokens.color.primary[7].value;
  let colorVar: string = tokens.color.neutral[1].value;
  let borderColorVar: string = tokens.color.primary[7].value;
  let borderStyle: string = tokens.borderStyle.solid;
  let borderWidth: string = tokens.borderWidth[1];
  let boxShadow: string = `${tokens.shadowSize[1]} ${tokens.shadowColor.primary}`;
  let borderRadius: string = tokens.radii[2];
  let fontWeight: number = tokens.typography.weight[2];
  let fontSize: string = tokens.typography.size[3];
  let paddingY: string = tokens.spacing[2];
  let paddingX: string = tokens.spacing[3];
  let minWidth: string | undefined = undefined;
  if (typeof props.minWidth === 'number') {
    minWidth = `${props.minWidth}px`;
  } else if (typeof props.minWidth === 'string' && props.minWidth) {
    minWidth = props.minWidth;
  }
  let textDecoration: string | undefined = undefined;

  if (variant === 'Primary') {
    background = tokens.color.primary[7].value;
    colorVar = tokens.color.neutral[1].value;
    borderColorVar = tokens.color.primary[7].value;
    borderStyle = tokens.borderStyle.solid;
    borderWidth = tokens.borderWidth[1];
    boxShadow = `${tokens.shadowSize[1]} ${tokens.shadowColor.primary}`;
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.color.primary[8].value;
      borderColorVar = tokens.color.primary[8].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.color.primary[9].value;
      borderColorVar = tokens.color.primary[9].value;
    }
  } else if (variant === 'Secondary') {
    colorVar = tokens.color.primary[7].value;
    borderColorVar = tokens.color.neutral[3].value;
    borderStyle = tokens.borderStyle.solid;
    borderWidth = tokens.borderWidth[1];
    boxShadow = `${tokens.shadowSize[1]} ${tokens.shadowColor.neutral}`;
    background = isDark ? tokens.color.neutral[3].value : tokens.color.neutral[1].value;
    if (hovered.value && !props.disabled && !props.loading) {
      background = isDark ? tokens.color.neutral[4].value : tokens.color.neutral[4].value;
      borderColorVar = tokens.color.primary[6].value;
      colorVar = tokens.color.primary[8].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      background = isDark ? tokens.color.neutral[5].value : tokens.color.neutral[5].value;
      borderColorVar = tokens.color.primary[7].value;
      colorVar = tokens.color.primary[9].value;
    }
  } else if (variant === 'Outline') {
    background = tokens.color.primary[0].value;
    colorVar = tokens.color.primary[7].value;
    borderColorVar = tokens.color.neutral[3].value;
    borderStyle = tokens.borderStyle.solid;
    borderWidth = tokens.borderWidth[2];
    boxShadow = 'none';
    if (hovered.value && !props.disabled && !props.loading) {
      borderColorVar = tokens.color.primary[7].value;
      colorVar = tokens.color.primary[7].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      borderColorVar = tokens.color.primary[8].value;
      colorVar = tokens.color.primary[8].value;
    }
  } else if (variant === 'Ghost') {
    background = tokens.color.primary[0].value;
    colorVar = tokens.color.primary[7].value;
    borderColorVar = tokens.color.primary[0].value;
    borderStyle = 'none';
    borderWidth = tokens.borderWidth.none;
    boxShadow = 'none';
    if ((hovered.value || focused.value) && !props.disabled && !props.loading) {
      background = tokens.color.primary[3].value;
      colorVar = tokens.color.primary[10].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.color.primary[4].value;
      colorVar = tokens.color.primary[10].value;
    }
  } else if (variant === 'Link') {
    background = tokens.color.primary[0].value;
    colorVar = tokens.color.primary[7].value;
    borderColorVar = tokens.color.primary[0].value;
    borderStyle = tokens.borderStyle.solid;
    borderWidth = tokens.borderWidth.none;
    boxShadow = 'none';
    textDecoration = 'underline';
    fontWeight = tokens.typography.weight[3];
    paddingY = tokens.spacing[2];
    paddingX = tokens.spacing[3];
    if (hovered.value && !props.disabled && !props.loading) {
      colorVar = tokens.color.primary[9].value;
      textDecoration = 'underline';
    }
    if (active.value && !props.disabled && !props.loading) {
      colorVar = tokens.color.primary[10].value;
      textDecoration = 'underline';
    }
    if (focused.value && !props.disabled && !props.loading) {
      colorVar = tokens.color.primary[8].value;
      textDecoration = 'underline';
    }
  } else if (variant === 'Destructive') {
    background = tokens.color.error[7].value;
    colorVar = tokens.color.neutral[1].value;
    borderColorVar = tokens.color.error[7].value;
    borderStyle = tokens.borderStyle.solid;
    borderWidth = tokens.borderWidth[1];
    boxShadow = `${tokens.shadowSize[1]} ${tokens.shadowColor.error}`;
    if (hovered.value && !props.disabled && !props.loading) {
      background = tokens.color.error[8].value;
      borderColorVar = tokens.color.error[8].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      background = tokens.color.error[9].value;
      borderColorVar = tokens.color.error[9].value;
    }
  }

  let minHeight: string = tokens.height[2];
  if (variant !== 'Link') {
    if (size === 'small') {
      paddingY = tokens.spacing[1];
      paddingX = tokens.spacing[2];
      fontSize = tokens.typography.size[2];
      minHeight = tokens.height[1];
    } else if (size === 'large') {
      paddingY = tokens.spacing[3];
      paddingX = tokens.spacing[4];
      fontSize = tokens.typography.size[4];
      minHeight = tokens.height[3];
    } else {
      paddingY = tokens.spacing[2];
      paddingX = tokens.spacing[3];
      fontSize = tokens.typography.size[3];
      minHeight = tokens.height[2];
    }
  }

  // Focus ring logic for Primary, Secondary, Outline, and Destructive
  if (
    focused.value &&
    !props.disabled &&
    !props.loading &&
    (variant === 'Primary' || variant === 'Secondary' || variant === 'Outline' || variant === 'Destructive')
  ) {
    const focusColor = tokens.color.primary[5].value;
    const focusRingWidth = tokens.borderWidth[3];
    const focusRingShadow = `0 0 0 ${focusRingWidth} ${focusColor}`;
    if (typeof boxShadow === 'string' && boxShadow !== 'none' && boxShadow.length > 0) {
      boxShadow = `${boxShadow}, ${focusRingShadow}`;
    } else {
      boxShadow = focusRingShadow;
    }
  }

  let opacity = tokens.opacity.opaque;
  let cursor = props.disabled || props.loading ? 'not-allowed' : 'pointer';
  if (props.disabled || props.loading) {
    opacity = tokens.opacity[5];
    background = tokens.color.neutral[5].value;
    colorVar = tokens.color.neutral[7].value;
    borderColorVar = tokens.color.neutral[5].value;
    boxShadow = `${tokens.shadowSize[1]} ${tokens.shadowColor.neutral}`;
  }

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius,
    borderWidth,
    borderStyle,
    borderColor: borderColorVar,
    fontSize,
    fontFamily: tokens.typography.family.sans,
    fontWeight: String(fontWeight),
    letterSpacing: tokens.typography.letter[2],
    padding: `${paddingY} ${paddingX}`,
    minWidth,
    cursor,
    background,
    color: colorVar,
    boxShadow,
    outline: 'none',
    opacity: String(opacity),
    position: 'relative',
    transition: tokens.transition.fast,
    pointerEvents: props.loading ? 'none' : 'auto',
    textDecoration,
    minHeight,
    lineHeight: String(tokens.lineHeight[1]),
  };
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
