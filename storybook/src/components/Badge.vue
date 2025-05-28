<template>
  <span :style="badgeStyle">
    <!-- Left Icon -->
    <Icon
      v-if="leftIcon"
      :name="leftIcon"
      :width="iconSize"
      :height="iconSize"
      :color="iconColor"
      :style="leftIconStyle"
      :aria-hidden="true"
    />

    <!-- Badge Content -->
    <span :style="contentStyle">
      <slot>{{ label }}</slot>
    </span>

    <!-- Right Icon -->
    <Icon
      v-if="rightIcon"
      :name="rightIcon"
      :width="iconSize"
      :height="iconSize"
      :color="iconColor"
      :style="rightIconStyle"
      :aria-hidden="true"
    />

    <!-- Close/Remove Button -->
    <button
      v-if="removable"
      :style="removeButtonStyle"
      :aria-label="removeAriaLabel"
      type="button"
      @click="onRemove"
    >
      <Icon
        :name="'x'"
        :width="removeIconSize"
        :height="removeIconSize"
        :color="iconColor"
        :aria-hidden="true"
      />
    </button>
  </span>
</template>

<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, typography, border, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';

type Variant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
type Size = 'small' | 'medium' | 'large';

const props = withDefaults(defineProps<{
  label?: string;
  variant?: Variant;
  size?: Size;
  leftIcon?: IconToken;
  rightIcon?: IconToken;
  removable?: boolean;
  removeAriaLabel?: string;
}>(), {
  label: '',
  variant: 'default',
  size: 'medium',
  removable: false,
  removeAriaLabel: 'Remove badge',
});

const emit = defineEmits<{
  'remove': [];
}>();

const theme = useTheme();

// Size-based styling
const sizeConfig = computed(() => {
  const size = props.size;

  if (size === 'small') {
    return {
      fontSize: typography.size['12px'],
      paddingY: spacing['4px'],
      paddingX: spacing['8px'], // Improved horizontal padding for small
      iconSize: '12px',
      removeIconSize: '10px',
      minHeight: '20px',
    };
  } else if (size === 'large') {
    return {
      fontSize: typography.size['16px'],
      paddingY: spacing['8px'],
      paddingX: spacing['16px'], // Improved horizontal padding for large
      iconSize: '16px',
      removeIconSize: '14px',
      minHeight: '32px',
    };
  } else {
    return {
      fontSize: typography.size['14px'],
      paddingY: spacing['4px'],
      paddingX: spacing['12px'], // Improved horizontal padding for medium
      iconSize: '14px',
      removeIconSize: '12px',
      minHeight: '24px',
    };
  }
});

// Variant-based colors with enhanced Preline-inspired styling
const variantConfig = computed(() => {
  const variant = props.variant;
  const isDark = theme.value === 'dark';

  switch (variant) {
    case 'primary':
      return {
        background: isDark
          ? `linear-gradient(135deg, ${color.primary['7'].value} 0%, ${color.primary['8'].value} 100%)`
          : `linear-gradient(135deg, ${color.primary['6'].value} 0%, ${color.primary['7'].value} 100%)`,
        textColor: color.neutral['1'].value,
        borderColor: color.primary['6'].value,
        hoverBackground: isDark
          ? `linear-gradient(135deg, ${color.primary['6'].value} 0%, ${color.primary['7'].value} 100%)`
          : `linear-gradient(135deg, ${color.primary['7'].value} 0%, ${color.primary['8'].value} 100%)`,
        boxShadow: isDark
          ? '0 4px 6px -1px rgba(59, 130, 246, 0.3), 0 2px 4px -1px rgba(59, 130, 246, 0.2)'
          : '0 4px 6px -1px rgba(59, 130, 246, 0.25), 0 2px 4px -1px rgba(59, 130, 246, 0.15)',
      };
    case 'secondary':
      return {
        background: isDark
          ? `linear-gradient(135deg, ${color.neutral['7'].value} 0%, ${color.neutral['8'].value} 100%)`
          : `linear-gradient(135deg, ${color.neutral['5'].value} 0%, ${color.neutral['6'].value} 100%)`,
        textColor: isDark ? color.neutral['1'].value : color.neutral['1'].value,
        borderColor: color.neutral['6'].value,
        hoverBackground: isDark
          ? `linear-gradient(135deg, ${color.neutral['6'].value} 0%, ${color.neutral['7'].value} 100%)`
          : `linear-gradient(135deg, ${color.neutral['6'].value} 0%, ${color.neutral['7'].value} 100%)`,
        boxShadow: isDark
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      };
    case 'success':
      return {
        background: isDark
          ? `linear-gradient(135deg, ${color.success['7'].value} 0%, ${color.success['8'].value} 100%)`
          : `linear-gradient(135deg, ${color.success['6'].value} 0%, ${color.success['7'].value} 100%)`,
        textColor: color.neutral['1'].value,
        borderColor: color.success['6'].value,
        hoverBackground: isDark
          ? `linear-gradient(135deg, ${color.success['6'].value} 0%, ${color.success['7'].value} 100%)`
          : `linear-gradient(135deg, ${color.success['7'].value} 0%, ${color.success['8'].value} 100%)`,
        boxShadow: isDark
          ? '0 4px 6px -1px rgba(34, 197, 94, 0.3), 0 2px 4px -1px rgba(34, 197, 94, 0.2)'
          : '0 4px 6px -1px rgba(34, 197, 94, 0.25), 0 2px 4px -1px rgba(34, 197, 94, 0.15)',
      };
    case 'warning':
      return {
        background: isDark
          ? `linear-gradient(135deg, ${color.warning['7'].value} 0%, ${color.warning['8'].value} 100%)`
          : `linear-gradient(135deg, ${color.warning['6'].value} 0%, ${color.warning['7'].value} 100%)`,
        textColor: color.neutral['1'].value,
        borderColor: color.warning['6'].value,
        hoverBackground: isDark
          ? `linear-gradient(135deg, ${color.warning['6'].value} 0%, ${color.warning['7'].value} 100%)`
          : `linear-gradient(135deg, ${color.warning['7'].value} 0%, ${color.warning['8'].value} 100%)`,
        boxShadow: isDark
          ? '0 4px 6px -1px rgba(245, 158, 11, 0.3), 0 2px 4px -1px rgba(245, 158, 11, 0.2)'
          : '0 4px 6px -1px rgba(245, 158, 11, 0.25), 0 2px 4px -1px rgba(245, 158, 11, 0.15)',
      };
    case 'error':
      return {
        background: isDark
          ? `linear-gradient(135deg, ${color.error['7'].value} 0%, ${color.error['8'].value} 100%)`
          : `linear-gradient(135deg, ${color.error['6'].value} 0%, ${color.error['7'].value} 100%)`,
        textColor: color.neutral['1'].value,
        borderColor: color.error['6'].value,
        hoverBackground: isDark
          ? `linear-gradient(135deg, ${color.error['6'].value} 0%, ${color.error['7'].value} 100%)`
          : `linear-gradient(135deg, ${color.error['7'].value} 0%, ${color.error['8'].value} 100%)`,
        boxShadow: isDark
          ? '0 4px 6px -1px rgba(239, 68, 68, 0.3), 0 2px 4px -1px rgba(239, 68, 68, 0.2)'
          : '0 4px 6px -1px rgba(239, 68, 68, 0.25), 0 2px 4px -1px rgba(239, 68, 68, 0.15)',
      };
    case 'outline':
      return {
        background: 'transparent',
        textColor: isDark ? color.neutral['11'].value : color.neutral['8'].value,
        borderColor: isDark ? color.neutral['7'].value : color.neutral['5'].value,
        hoverBackground: isDark ? color.neutral['8'].value : color.neutral['2'].value,
        boxShadow: isDark
          ? '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
          : '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
      };
    default: // 'default'
      return {
        background: isDark
          ? `linear-gradient(135deg, ${color.neutral['7'].value} 0%, ${color.neutral['8'].value} 100%)`
          : `linear-gradient(135deg, ${color.neutral['4'].value} 0%, ${color.neutral['5'].value} 100%)`,
        textColor: isDark ? color.neutral['1'].value : color.neutral['1'].value,
        borderColor: isDark ? color.neutral['6'].value : color.neutral['5'].value,
        hoverBackground: isDark
          ? `linear-gradient(135deg, ${color.neutral['6'].value} 0%, ${color.neutral['7'].value} 100%)`
          : `linear-gradient(135deg, ${color.neutral['5'].value} 0%, ${color.neutral['6'].value} 100%)`,
        boxShadow: isDark
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      };
  }
});

// Computed styles
const iconSize = computed(() => sizeConfig.value.iconSize);
const removeIconSize = computed(() => sizeConfig.value.removeIconSize);
const iconColor = computed(() => variantConfig.value.textColor);

const badgeStyle = computed<CSSProperties>(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing['4px'],
  minHeight: sizeConfig.value.minHeight,
  padding: `${sizeConfig.value.paddingY} ${sizeConfig.value.paddingX}`,
  fontSize: sizeConfig.value.fontSize,
  fontFamily: typography.family.sans,
  fontWeight: String(typography.weight['6']),
  lineHeight: String(typography.line['120%']),
  letterSpacing: '0.025em',
  color: variantConfig.value.textColor,
  background: variantConfig.value.background,
  border: props.variant === 'outline'
    ? `${border.width['1px']} ${border.style.solid} ${variantConfig.value.borderColor}`
    : 'none',
  borderRadius: cornerRadius['max'],
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: variantConfig.value.boxShadow,
  cursor: props.removable ? 'default' : 'inherit',
  userSelect: 'none',
  transform: 'translateZ(0)', // Enable hardware acceleration
  ':hover': {
    background: variantConfig.value.hoverBackground,
    transform: 'translateY(-1px) translateZ(0)',
    boxShadow: props.variant === 'outline'
      ? variantConfig.value.boxShadow
      : `${variantConfig.value.boxShadow}, 0 8px 25px -8px rgba(0, 0, 0, 0.15)`,
  },
}));

const contentStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  lineHeight: String(typography.line['120%']),
}));

const leftIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const rightIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const removeButtonStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  border: 'none',
  background: 'transparent',
  color: variantConfig.value.textColor,
  cursor: 'pointer',
  borderRadius: cornerRadius['4px'],
  opacity: '0.7',
  transition: 'opacity 0.15s ease',
  ':hover': {
    opacity: '1',
  },
}));

// Event handlers
const onRemove = () => {
  emit('remove');
};
</script>
