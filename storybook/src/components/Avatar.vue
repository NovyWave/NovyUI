<template>
  <div :style="avatarContainerStyle">
    <!-- Avatar Image or Initials -->
    <component
      :is="href ? 'a' : 'div'"
      :href="href"
      :target="target"
      :style="avatarStyle"
      :class="avatarClass"
      :aria-label="ariaLabel"
      @click="onClick"
    >
      <!-- Image -->
      <img
        v-if="src && !imageError"
        :src="src"
        :alt="alt"
        :style="imageStyle"
        @error="onImageError"
        @load="onImageLoad"
      />

      <!-- Icon Fallback -->
      <Icon
        v-else-if="icon"
        :name="icon"
        :width="iconSize"
        :height="iconSize"
        :color="iconColor"
        :aria-hidden="true"
      />

      <!-- Initials Fallback -->
      <span
        v-else-if="initials"
        :style="initialsStyle"
        :aria-hidden="true"
      >
        {{ displayInitials }}
      </span>

      <!-- Default User Icon -->
      <Icon
        v-else
        :name="'user'"
        :width="iconSize"
        :height="iconSize"
        :color="iconColor"
        :aria-hidden="true"
      />
    </component>

    <!-- Status Indicator -->
    <div
      v-if="status"
      :style="statusIndicatorStyle"
      :aria-label="statusAriaLabel"
      role="img"
    />

    <!-- Badge/Notification -->
    <div
      v-if="badge !== undefined"
      :style="badgeStyle"
      :aria-label="badgeAriaLabel"
      role="img"
    >
      <span v-if="typeof badge === 'string'" :style="badgeTextStyle">
        {{ badge }}
      </span>
      <span v-else-if="typeof badge === 'number'" :style="badgeTextStyle">
        {{ badge > 99 ? '99+' : badge }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, typography, shadow, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Shape = 'circle' | 'square' | 'rounded';
type Status = 'online' | 'offline' | 'away' | 'busy';

const props = withDefaults(defineProps<{
  src?: string;
  alt?: string;
  initials?: string;
  icon?: IconToken;
  size?: Size;
  shape?: Shape;
  status?: Status;
  statusAriaLabel?: string;
  badge?: string | number;
  badgeAriaLabel?: string;
  href?: string;
  target?: string;
  ariaLabel?: string;
  interactive?: boolean;
}>(), {
  size: 'md',
  shape: 'circle',
  alt: '',
  statusAriaLabel: 'User status',
  badgeAriaLabel: 'Notification badge',
  interactive: false,
});

const emit = defineEmits<{
  'click': [event: MouseEvent];
  'image-error': [];
  'image-load': [];
}>();

const theme = useTheme();

// State
const imageError = ref(false);

// Size configuration
const sizeConfig = computed(() => {
  const size = props.size;

  switch (size) {
    case 'xs':
      return {
        width: '24px',
        height: '24px',
        fontSize: typography.size['12px'],
        iconSize: '12px',
        statusSize: '6px',
        statusOffset: '0px',
        badgeSize: '16px',
        badgeOffset: '-2px',
        badgeFontSize: typography.size['10px'],
      };
    case 'sm':
      return {
        width: '32px',
        height: '32px',
        fontSize: typography.size['14px'],
        iconSize: '16px',
        statusSize: '8px',
        statusOffset: '2px',
        badgeSize: '18px',
        badgeOffset: '-2px',
        badgeFontSize: typography.size['10px'],
      };
    case 'lg':
      return {
        width: '56px',
        height: '56px',
        fontSize: typography.size['20px'],
        iconSize: '28px',
        statusSize: '14px',
        statusOffset: '4px',
        badgeSize: '24px',
        badgeOffset: '-4px',
        badgeFontSize: typography.size['12px'],
      };
    case 'xl':
      return {
        width: '64px',
        height: '64px',
        fontSize: typography.size['24px'],
        iconSize: '32px',
        statusSize: '16px',
        statusOffset: '4px',
        badgeSize: '28px',
        badgeOffset: '-4px',
        badgeFontSize: typography.size['12px'],
      };
    case '2xl':
      return {
        width: '80px',
        height: '80px',
        fontSize: typography.size['30px'],
        iconSize: '40px',
        statusSize: '20px',
        statusOffset: '6px',
        badgeSize: '32px',
        badgeOffset: '-6px',
        badgeFontSize: typography.size['14px'],
      };
    default: // 'md'
      return {
        width: '40px',
        height: '40px',
        fontSize: typography.size['16px'],
        iconSize: '20px',
        statusSize: '10px',
        statusOffset: '2px',
        badgeSize: '20px',
        badgeOffset: '-2px',
        badgeFontSize: typography.size['10px'],
      };
  }
});

// Shape configuration
const shapeConfig = computed(() => {
  const shape = props.shape;

  switch (shape) {
    case 'square':
      return { borderRadius: '0' };
    case 'rounded':
      return { borderRadius: cornerRadius['8px'] };
    default: // 'circle'
      return { borderRadius: cornerRadius['50%'] };
  }
});

// Status color configuration
const statusColor = computed(() => {
  const status = props.status;

  switch (status) {
    case 'online':
      return color.success['7'].value;
    case 'away':
      return color.warning['7'].value;
    case 'busy':
      return color.error['7'].value;
    default: // 'offline'
      return color.neutral['5'].value;
  }
});

// Computed properties
const displayInitials = computed(() => {
  if (!props.initials) return '';
  return props.initials.slice(0, 2).toUpperCase();
});

const iconSize = computed(() => sizeConfig.value.iconSize);

const iconColor = computed(() => {
  const isDark = theme.value === 'dark';
  return isDark ? color.neutral['7'].value : color.neutral['6'].value;
});

const avatarClass = computed(() => {
  const classes = [];
  if (props.interactive || props.href) classes.push('interactive');
  return classes.join(' ');
});

const avatarContainerStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  display: 'inline-block',
  flexShrink: '0',
}));

const avatarStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizeConfig.value.width,
    height: sizeConfig.value.height,
    background: isDark
      ? `linear-gradient(135deg, ${color.neutral['7'].value} 0%, ${color.neutral['8'].value} 100%)`
      : `linear-gradient(135deg, ${color.neutral['2'].value} 0%, ${color.neutral['3'].value} 100%)`,
    borderRadius: shapeConfig.value.borderRadius,
    overflow: 'hidden',
    cursor: (props.interactive || props.href) ? 'pointer' : 'default',
    textDecoration: 'none',
    color: 'inherit',
    border: `2px solid ${isDark ? color.neutral['6'].value : color.neutral['4'].value}`,
    boxShadow: isDark
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)', // Enable hardware acceleration
    ':hover': (props.interactive || props.href) ? {
      transform: 'scale(1.05) translateZ(0)',
      boxShadow: isDark
        ? '0 8px 25px -8px rgba(0, 0, 0, 0.5), 0 4px 6px -1px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
        : '0 8px 25px -8px rgba(0, 0, 0, 0.25), 0 4px 6px -1px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
    } : {},
  };
});

const imageStyle = computed<CSSProperties>(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}));

const initialsStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.fontSize,
    fontWeight: String(typography.weight['7']),
    fontFamily: typography.family.sans,
    color: isDark ? color.neutral['1'].value : color.neutral['11'].value,
    lineHeight: '1',
    userSelect: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textShadow: isDark
      ? '0 1px 2px rgba(0, 0, 0, 0.8), 0 0 4px rgba(255, 255, 255, 0.1)'
      : '0 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(0, 0, 0, 0.1)',
    filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1))',
  };
});

const statusIndicatorStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    position: 'absolute',
    top: sizeConfig.value.statusOffset,
    right: sizeConfig.value.statusOffset,
    width: sizeConfig.value.statusSize,
    height: sizeConfig.value.statusSize,
    background: `radial-gradient(circle, ${statusColor.value} 0%, ${statusColor.value} 70%, rgba(0,0,0,0.1) 100%)`,
    borderRadius: cornerRadius['50%'],
    border: `3px solid ${isDark ? color.neutral['9'].value : color.neutral['1'].value}`,
    boxShadow: isDark
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
    zIndex: '10',
    transform: 'translateZ(0)',
  };
});

const badgeStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    position: 'absolute',
    top: sizeConfig.value.badgeOffset,
    right: sizeConfig.value.badgeOffset,
    minWidth: sizeConfig.value.badgeSize,
    height: sizeConfig.value.badgeSize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(135deg, ${color.error['6'].value} 0%, ${color.error['7'].value} 100%)`,
    borderRadius: cornerRadius['50%'],
    border: `3px solid ${isDark ? color.neutral['9'].value : color.neutral['1'].value}`,
    boxShadow: isDark
      ? '0 4px 6px -1px rgba(239, 68, 68, 0.4), 0 2px 4px -1px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      : '0 4px 6px -1px rgba(239, 68, 68, 0.25), 0 2px 4px -1px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
    padding: `0 ${spacing['4px']}`,
    zIndex: '10',
    transform: 'translateZ(0)',
  };
});

const badgeTextStyle = computed<CSSProperties>(() => ({
  fontSize: sizeConfig.value.badgeFontSize,
  fontWeight: String(typography.weight['7']),
  fontFamily: typography.family.sans,
  color: color.neutral['1'].value,
  lineHeight: '1',
  whiteSpace: 'nowrap',
  letterSpacing: '0.025em',
  userSelect: 'none',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
  filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2))',
}));

// Event handlers
const onClick = (event: MouseEvent) => {
  if (!props.href) {
    emit('click', event);
  }
};

const onImageError = () => {
  imageError.value = true;
  emit('image-error');
};

const onImageLoad = () => {
  imageError.value = false;
  emit('image-load');
};
</script>
