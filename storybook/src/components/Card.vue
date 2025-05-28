<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    :target="target"
    :style="cardStyle"
    :class="cardClass"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @focus="onFocus"
    @blur="onBlur"
  >
    <!-- Header -->
    <header v-if="hasHeader" :style="headerStyle">
      <!-- Header Icon -->
      <Icon
        v-if="headerIcon"
        :name="headerIcon"
        :width="iconSize"
        :height="iconSize"
        :color="iconColor"
        :style="headerIconStyle"
        :aria-hidden="true"
      />

      <!-- Header Content -->
      <div :style="headerContentStyle">
        <h3 v-if="title" :style="titleStyle">
          {{ title }}
        </h3>
        <p v-if="subtitle" :style="subtitleStyle">
          {{ subtitle }}
        </p>
      </div>

      <!-- Header Actions -->
      <div v-if="hasHeaderActions" :style="headerActionsStyle">
        <button
          v-if="closable"
          :style="closeButtonStyle"
          :aria-label="closeAriaLabel"
          type="button"
          @click.stop="onClose"
        >
          <Icon
            :name="'x'"
            :width="actionIconSize"
            :height="actionIconSize"
            :color="iconColor"
            :aria-hidden="true"
          />
        </button>

        <button
          v-if="actionIcon"
          :style="actionButtonStyle"
          :aria-label="actionAriaLabel"
          type="button"
          @click.stop="onAction"
        >
          <Icon
            :name="actionIcon"
            :width="actionIconSize"
            :height="actionIconSize"
            :color="iconColor"
            :aria-hidden="true"
          />
        </button>
      </div>
    </header>

    <!-- Image -->
    <div v-if="image" :style="imageContainerStyle">
      <img
        :src="image"
        :alt="imageAlt"
        :style="imageStyle"
      />
    </div>

    <!-- Content -->
    <div :style="contentStyle">
      <slot>
        <p v-if="description" :style="descriptionStyle">
          {{ description }}
        </p>
      </slot>
    </div>

    <!-- Footer -->
    <footer v-if="hasFooter" :style="footerStyle">
      <slot name="footer">
        <div v-if="footerText" :style="footerTextStyle">
          {{ footerText }}
        </div>
        <div v-if="hasFooterActions" :style="footerActionsStyle">
          <slot name="footer-actions" />
        </div>
      </slot>
    </footer>
  </component>
</template>

<script lang="ts" setup>
import { computed, ref, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, shadow, typography, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';

type Variant = 'default' | 'bordered' | 'elevated' | 'outlined';
type Size = 'small' | 'medium' | 'large';

const props = withDefaults(defineProps<{
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  headerIcon?: IconToken;
  actionIcon?: IconToken;
  actionAriaLabel?: string;
  closable?: boolean;
  closeAriaLabel?: string;
  footerText?: string;
  variant?: Variant;
  size?: Size;
  interactive?: boolean;
  href?: string;
  target?: string;
}>(), {
  variant: 'default',
  size: 'medium',
  interactive: false,
  closeAriaLabel: 'Close card',
  actionAriaLabel: 'Card action',
});

const emit = defineEmits<{
  'click': [event: MouseEvent];
  'action': [];
  'close': [];
}>();

const theme = useTheme();

// State
const isHovered = ref(false);
const isFocused = ref(false);

// Size configuration
const sizeConfig = computed(() => {
  const size = props.size;

  if (size === 'small') {
    return {
      padding: spacing['12px'],
      headerPadding: spacing['12px'],
      contentPadding: spacing['12px'],
      footerPadding: spacing['12px'],
      gap: spacing['8px'],
      iconSize: '16px',
      actionIconSize: '14px',
      titleFontSize: typography.size['16px'],
      subtitleFontSize: typography.size['14px'],
      descriptionFontSize: typography.size['14px'],
      footerFontSize: typography.size['12px'],
    };
  } else if (size === 'large') {
    return {
      padding: spacing['24px'],
      headerPadding: spacing['24px'],
      contentPadding: spacing['24px'],
      footerPadding: spacing['24px'],
      gap: spacing['16px'],
      iconSize: '24px',
      actionIconSize: '20px',
      titleFontSize: typography.size['24px'],
      subtitleFontSize: typography.size['18px'],
      descriptionFontSize: typography.size['16px'],
      footerFontSize: typography.size['14px'],
    };
  } else {
    return {
      padding: spacing['16px'],
      headerPadding: spacing['16px'],
      contentPadding: spacing['16px'],
      footerPadding: spacing['16px'],
      gap: spacing['12px'],
      iconSize: '20px',
      actionIconSize: '16px',
      titleFontSize: typography.size['20px'],
      subtitleFontSize: typography.size['16px'],
      descriptionFontSize: typography.size['14px'],
      footerFontSize: typography.size['14px'],
    };
  }
});

// Computed properties
const hasHeader = computed(() => props.title || props.subtitle || props.headerIcon || hasHeaderActions.value);
const hasHeaderActions = computed(() => props.closable || props.actionIcon);
const hasFooter = computed(() => props.footerText || !!props.slots?.footer || !!props.slots?.['footer-actions']);
const hasFooterActions = computed(() => !!props.slots?.['footer-actions']);

const iconSize = computed(() => sizeConfig.value.iconSize);
const actionIconSize = computed(() => sizeConfig.value.actionIconSize);

const iconColor = computed(() => {
  const isDark = theme.value === 'dark';
  return isDark ? color.neutral['8'].value : color.neutral['7'].value;
});

const cardClass = computed(() => {
  const classes = [];
  if (props.interactive || props.href) classes.push('interactive');
  if (isHovered.value) classes.push('hovered');
  if (isFocused.value) classes.push('focused');
  return classes.join(' ');
});

const cardStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';
  const variant = props.variant;

  let backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
  let borderStyle = 'none';
  let boxShadow = 'none';
  let borderRadius = cornerRadius['8px'];

  // Variant styles
  if (variant === 'bordered') {
    borderStyle = `${border.width['1px']} ${border.style.solid} ${color.neutral['4'].value}`;
  } else if (variant === 'elevated') {
    boxShadow = `${shadow.size[2]} ${shadow.color.neutral}`;
  } else if (variant === 'outlined') {
    borderStyle = `${border.width['2px']} ${border.style.solid} ${color.neutral['4'].value}`;
  }

  // Interactive styles
  if ((props.interactive || props.href) && (isHovered.value || isFocused.value)) {
    if (variant === 'elevated') {
      boxShadow = `${shadow.size[3]} ${shadow.color.neutral}`;
    } else {
      backgroundColor = isDark ? color.neutral['3'].value : color.neutral['2'].value;
    }
  }

  return {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor,
    border: borderStyle,
    borderRadius,
    boxShadow,
    overflow: 'hidden',
    transition: 'all 0.2s ease',
    cursor: (props.interactive || props.href) ? 'pointer' : 'default',
    textDecoration: 'none',
    color: 'inherit',
    outline: isFocused.value ? `2px solid ${color.primary['7'].value}` : 'none',
    outlineOffset: '2px',
  };
});

const headerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: sizeConfig.value.gap,
  padding: `${sizeConfig.value.headerPadding} ${sizeConfig.value.headerPadding} 0`,
}));

const headerIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  marginTop: '2px',
}));

const headerContentStyle = computed<CSSProperties>(() => ({
  flex: '1',
  minWidth: '0',
}));

const headerActionsStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: spacing['4px'],
  flexShrink: '0',
}));

const titleStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    margin: '0',
    fontSize: sizeConfig.value.titleFontSize,
    fontWeight: String(typography.weight['6']),
    lineHeight: String(typography.line['140%']),
    color: isDark ? color.neutral['11'].value : color.neutral['9'].value,
    fontFamily: typography.family.sans,
  };
});

const subtitleStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    margin: `${spacing['4px']} 0 0 0`,
    fontSize: sizeConfig.value.subtitleFontSize,
    fontWeight: String(typography.weight['4']),
    lineHeight: String(typography.line['140%']),
    color: isDark ? color.neutral['8'].value : color.neutral['7'].value,
    fontFamily: typography.family.sans,
  };
});

const imageContainerStyle = computed<CSSProperties>(() => ({
  width: '100%',
  overflow: 'hidden',
  marginTop: hasHeader.value ? sizeConfig.value.gap : '0',
}));

const imageStyle = computed<CSSProperties>(() => ({
  width: '100%',
  height: 'auto',
  display: 'block',
  objectFit: 'cover',
}));

const contentStyle = computed<CSSProperties>(() => ({
  flex: '1',
  padding: hasHeader.value ?
    `${sizeConfig.value.gap} ${sizeConfig.value.contentPadding} ${sizeConfig.value.contentPadding}` :
    sizeConfig.value.contentPadding,
}));

const descriptionStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    margin: '0',
    fontSize: sizeConfig.value.descriptionFontSize,
    fontWeight: String(typography.weight['4']),
    lineHeight: String(typography.line['160%']),
    color: isDark ? color.neutral['8'].value : color.neutral['7'].value,
    fontFamily: typography.family.sans,
  };
});

const footerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `0 ${sizeConfig.value.footerPadding} ${sizeConfig.value.footerPadding}`,
  borderTop: `${border.width['1px']} ${border.style.solid} ${color.neutral['4'].value}`,
}));

const footerTextStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.footerFontSize,
    fontWeight: String(typography.weight['4']),
    color: isDark ? color.neutral['7'].value : color.neutral['6'].value,
    fontFamily: typography.family.sans,
  };
});

const footerActionsStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing['8px'],
}));

const closeButtonStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing['4px'],
  border: 'none',
  background: 'transparent',
  borderRadius: cornerRadius['4px'],
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  ':hover': {
    backgroundColor: color.neutral['3'].value,
  },
}));

const actionButtonStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing['4px'],
  border: 'none',
  background: 'transparent',
  borderRadius: cornerRadius['4px'],
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  ':hover': {
    backgroundColor: color.neutral['3'].value,
  },
}));

// Event handlers
const onClick = (event: MouseEvent) => {
  if (!props.href) {
    emit('click', event);
  }
};

const onAction = () => {
  emit('action');
};

const onClose = () => {
  emit('close');
};

const onMouseEnter = () => {
  isHovered.value = true;
};

const onMouseLeave = () => {
  isHovered.value = false;
};

const onFocus = () => {
  isFocused.value = true;
};

const onBlur = () => {
  isFocused.value = false;
};
</script>
