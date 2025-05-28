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

const { theme } = useTheme();

// Size-based styling
const sizeConfig = computed(() => {
  const size = props.size;
  
  if (size === 'small') {
    return {
      fontSize: typography.size['12px'],
      paddingY: spacing['4px'],
      paddingX: spacing['8px'],
      iconSize: '12px',
      removeIconSize: '10px',
      minHeight: '20px',
    };
  } else if (size === 'large') {
    return {
      fontSize: typography.size['16px'],
      paddingY: spacing['8px'],
      paddingX: spacing['12px'],
      iconSize: '16px',
      removeIconSize: '14px',
      minHeight: '32px',
    };
  } else {
    return {
      fontSize: typography.size['14px'],
      paddingY: spacing['6px'],
      paddingX: spacing['10px'],
      iconSize: '14px',
      removeIconSize: '12px',
      minHeight: '24px',
    };
  }
});

// Variant-based colors
const variantConfig = computed(() => {
  const variant = props.variant;
  const isDark = theme.value === 'dark';
  
  switch (variant) {
    case 'primary':
      return {
        background: color.primary['7'].value,
        textColor: color.neutral['1'].value,
        borderColor: color.primary['7'].value,
      };
    case 'secondary':
      return {
        background: color.neutral['3'].value,
        textColor: isDark ? color.neutral['11'].value : color.neutral['9'].value,
        borderColor: color.neutral['3'].value,
      };
    case 'success':
      return {
        background: color.success['7'].value,
        textColor: color.neutral['1'].value,
        borderColor: color.success['7'].value,
      };
    case 'warning':
      return {
        background: color.warning['7'].value,
        textColor: color.neutral['1'].value,
        borderColor: color.warning['7'].value,
      };
    case 'error':
      return {
        background: color.error['7'].value,
        textColor: color.neutral['1'].value,
        borderColor: color.error['7'].value,
      };
    case 'outline':
      return {
        background: 'transparent',
        textColor: isDark ? color.neutral['10'].value : color.neutral['8'].value,
        borderColor: color.neutral['6'].value,
      };
    default: // 'default'
      return {
        background: isDark ? color.neutral['3'].value : color.neutral['2'].value,
        textColor: isDark ? color.neutral['11'].value : color.neutral['8'].value,
        borderColor: isDark ? color.neutral['4'].value : color.neutral['3'].value,
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
  fontWeight: String(typography.weight['5']),
  lineHeight: String(typography.line['120%']),
  color: variantConfig.value.textColor,
  backgroundColor: variantConfig.value.background,
  border: `${border.width['1px']} ${border.style.solid} ${variantConfig.value.borderColor}`,
  borderRadius: cornerRadius['12px'],
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
}));

const contentStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  lineHeight: String(typography.line['100%']),
}));

const leftIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  marginRight: props.label || props.rightIcon || props.removable ? spacing['4px'] : '0',
}));

const rightIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  marginLeft: props.label || props.leftIcon ? spacing['4px'] : '0',
}));

const removeButtonStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: spacing['4px'],
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
