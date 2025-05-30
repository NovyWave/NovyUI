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
      <span v-if="rightIcon && !leftIcon" :style="{ display: 'flex', alignItems: 'center', width: width.full }">
        <span class="button-label" v-if="$slots.default">
          <slot />
        </span>
        <span class="button-label" v-else-if="label" :style="labelStyle">{{ label }}</span>
        <span class="button-icon right">
          <Icon :name="spinnerIconName" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" aria-label="Loading" role="img" :style="spinnerStyle" />
        </span>
      </span>
      <template v-else>
        <span class="button-icon left">
          <Icon :name="spinnerIconName" :width="iconSize" :height="iconSize" :color="String(buttonStyle.color)" aria-label="Loading" role="img" :style="spinnerStyle" />
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
import { color, spacing, cornerRadius, border, shadow, typography, width, opacity, transition, useTheme } from '../tokens';
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

const labelPaddingX = computed(() => spacing['8px']);

const spinnerStyle = computed(() => {
  // Inject keyframes into document head if not already present
  if (typeof document !== 'undefined') {
    const styleId = 'spinner-keyframes';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  return {
    animation: 'spin 1s linear infinite'
  };
});

const iconSize = computed(() => {
  if (props.size === 'small') return '16px';
  if (props.size === 'large') return '24px';
  return '20px';
});

const labelStyle: ComputedRef<Record<string, string>> = computed(() => ({
  flex: '1',
  textAlign: 'center',
  paddingLeft: String(labelPaddingX.value),
  paddingRight: String(labelPaddingX.value),
  minWidth: '0px',
}));

const buttonStyle = computed<CSSProperties>(() => {
  const variant = props.variant || 'Primary';
  const size = props.size || 'medium';
  const isDark = theme.value === 'dark';
  let background: string = color.primary['7'].value;
  let colorVar: string = color.neutral['1'].value;
  let borderColorVar: string = color.primary['7'].value;
  let borderStyle: string = border.style.solid;
  let borderWidth: string = border.width['1px'];
  let boxShadow: string = `${shadow.size[1]} ${shadow.color.primary}`;
  let borderRadius: string = cornerRadius['4px'];
  let fontWeight: number = typography.weight['6'];
  let fontSize: string = typography.size['16px'];
  let paddingY: string = spacing['8px'];
  let paddingX: string = spacing['12px'];
  let minWidth: string | undefined = undefined;
  if (typeof props.minWidth === 'number') {
    minWidth = `${props.minWidth}px`;
  } else if (typeof props.minWidth === 'string' && props.minWidth) {
    minWidth = props.minWidth;
  }
  let textDecoration: string | undefined = undefined;

  if (variant === 'Primary') {
    background = color.primary['7'].value;
    colorVar = color.neutral['1'].value;
    borderColorVar = color.primary['7'].value;
    borderStyle = border.style.solid;
    borderWidth = border.width['1px'];
    boxShadow = `${shadow.size[1]} ${shadow.color.primary}`;
    if (hovered.value && !props.disabled && !props.loading) {
      background = color.primary['8'].value;
      borderColorVar = color.primary['8'].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      background = color.primary['9'].value;
      borderColorVar = color.primary['9'].value;
    }
  } else if (variant === 'Secondary') {
    colorVar = color.primary['7'].value;
    borderColorVar = color.neutral['3'].value;
    borderStyle = border.style.solid;
    borderWidth = border.width['1px'];
    boxShadow = `${shadow.size[1]} ${shadow.color.neutral}`;
    background = isDark ? color.neutral['3'].value : color.neutral['4'].value;
    if (hovered.value && !props.disabled && !props.loading) {
      background = isDark ? color.neutral['4'].value : color.neutral['5'].value;
      borderColorVar = color.primary['6'].value;
      colorVar = color.primary['8'].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      background = isDark ? color.neutral['5'].value : color.neutral['5'].value;
      borderColorVar = color.primary['7'].value;
      colorVar = color.primary['9'].value;
    }
  } else if (variant === 'Outline') {
    background = color.primary['0'].value;
    colorVar = color.primary['7'].value;
    borderColorVar = color.neutral['3'].value;
    borderStyle = border.style.solid;
    borderWidth = border.width['2px'];
    boxShadow = 'none';
    if (hovered.value && !props.disabled && !props.loading) {
      borderColorVar = color.primary['7'].value;
      colorVar = color.primary['7'].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      borderColorVar = color.primary['8'].value;
      colorVar = color.primary['8'].value;
    }
  } else if (variant === 'Ghost') {
    background = color.primary['0'].value;
    colorVar = color.primary['7'].value;
    borderColorVar = color.primary['0'].value;
    borderStyle = 'none';
    borderWidth = border.width['0px'];
    boxShadow = 'none';
    if ((hovered.value || focused.value) && !props.disabled && !props.loading) {
      background = color.primary['3'].value;
      colorVar = color.primary['10'].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      background = color.primary['4'].value;
      colorVar = color.primary['10'].value;
    }
  } else if (variant === 'Link') {
    background = color.primary['0'].value;
    colorVar = color.primary['7'].value;
    borderColorVar = color.primary['0'].value;
    borderStyle = border.style.solid;
    borderWidth = border.width['0px'];
    boxShadow = 'none';
    textDecoration = 'underline';
    fontWeight = typography.weight['6'];
    paddingY = spacing['8px'];
    paddingX = spacing['12px'];
    if (hovered.value && !props.disabled && !props.loading) {
      colorVar = color.primary['9'].value;
      textDecoration = 'underline';
    }
    if (active.value && !props.disabled && !props.loading) {
      colorVar = color.primary['10'].value;
      textDecoration = 'underline';
    }
    if (focused.value && !props.disabled && !props.loading) {
      colorVar = color.primary['8'].value;
      textDecoration = 'underline';
    }
  } else if (variant === 'Destructive') {
    background = color.error['7'].value;
    colorVar = color.neutral['1'].value;
    borderColorVar = color.error['7'].value;
    borderStyle = border.style.solid;
    borderWidth = border.width['1px'];
    boxShadow = `${shadow.size[1]} ${shadow.color.error}`;
    if (hovered.value && !props.disabled && !props.loading) {
      background = color.error['8'].value;
      borderColorVar = color.error['8'].value;
    }
    if (active.value && !props.disabled && !props.loading) {
      background = color.error['9'].value;
      borderColorVar = color.error['9'].value;
    }
  }

  let minHeight: string = '40px';
  if (variant !== 'Link') {
    if (size === 'small') {
      paddingY = spacing['4px'];
      paddingX = spacing['8px'];
      fontSize = typography.size['14px'];
      minHeight = '32px';
    } else if (size === 'large') {
      paddingY = spacing['12px'];
      paddingX = spacing['16px'];
      fontSize = typography.size['18px'];
      minHeight = '48px';
    } else {
      paddingY = spacing['8px'];
      paddingX = spacing['12px'];
      fontSize = typography.size['16px'];
      minHeight = '40px';
    }
  }

  // Focus ring logic for Primary, Secondary, Outline, and Destructive
  if (
    focused.value &&
    !props.disabled &&
    !props.loading &&
    (variant === 'Primary' || variant === 'Secondary' || variant === 'Outline' || variant === 'Destructive')
  ) {
    const focusColor = color.primary['5'].value;
    const focusRingWidth = border.width['4px'];
    const focusRingShadow = `0 0 0 ${focusRingWidth} ${focusColor}`;
    if (typeof boxShadow === 'string' && boxShadow !== 'none' && boxShadow.length > 0) {
      boxShadow = `${boxShadow}, ${focusRingShadow}`;
    } else {
      boxShadow = focusRingShadow;
    }
  }

  let opacityValue: number = opacity['100%'];
  let cursor = props.disabled || props.loading ? 'not-allowed' : 'pointer';
  if (props.disabled || props.loading) {
    opacityValue = opacity['64%'];
    background = color.neutral['5'].value;
    colorVar = color.neutral['7'].value;
    borderColorVar = color.neutral['5'].value;
    boxShadow = `${shadow.size[1]} ${shadow.color.neutral}`;
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
    fontFamily: typography.family.sans,
    fontWeight: String(fontWeight),
    letterSpacing: typography.tracking['1%'],
    padding: `${paddingY} ${paddingX}`,
    minWidth,
    cursor,
    background,
    color: colorVar,
    boxShadow,
    outline: 'none',
    opacity: String(opacityValue),
    position: 'relative',
    transition: transition.normal,
    pointerEvents: props.loading ? 'none' : 'auto',
    textDecoration,
    minHeight,
    lineHeight: String(typography.line['140%']),
  };
});
</script>


