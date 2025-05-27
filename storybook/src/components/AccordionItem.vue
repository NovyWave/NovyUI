<template>
  <div :style="itemContainerStyle">
    <button
      ref="triggerRef"
      :style="triggerStyle"
      type="button"
      :disabled="disabled"
      :aria-expanded="isOpen"
      :aria-controls="contentId"
      :id="triggerId"
      @click="handleClick"
      @keydown="handleKeydown"
      @focus="onFocus"
      @blur="onBlur"
    >
      <!-- Left Icon -->
      <Icon
        v-if="showIcon && iconPosition === 'left'"
        :name="iconName"
        :width="iconSize"
        :height="iconSize"
        :color="iconColor"
        :style="leftIconStyle"
        :aria-hidden="true"
      />
      
      <!-- Title -->
      <span :style="titleStyle">{{ item.title }}</span>
      
      <!-- Right Icon -->
      <Icon
        v-if="showIcon && iconPosition === 'right'"
        :name="iconName"
        :width="iconSize"
        :height="iconSize"
        :color="iconColor"
        :style="rightIconStyle"
        :aria-hidden="true"
      />
    </button>
    
    <!-- Content -->
    <div
      :id="contentId"
      :style="contentWrapperStyle"
      :aria-labelledby="triggerId"
      role="region"
    >
      <div :style="contentStyle">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, typography, transition, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';
import type { AccordionItemData } from './Accordion.vue';

type Size = 'small' | 'medium' | 'large';
type Variant = 'default' | 'bordered' | 'separated';
type IconPosition = 'left' | 'right';

const props = defineProps<{
  item: AccordionItemData;
  index: number;
  size: Size;
  variant: Variant;
  showIcon: boolean;
  iconPosition: IconPosition;
  isOpen: boolean;
  disabled: boolean;
}>();

const emit = defineEmits<{
  toggle: [index: number];
}>();

// State
const focused = ref(false);
const triggerRef = ref<HTMLButtonElement>();

// Theme
const theme = useTheme();

// Computed IDs for accessibility
const triggerId = computed(() => `accordion-trigger-${props.index}`);
const contentId = computed(() => `accordion-content-${props.index}`);

// Icon configuration
const iconName = computed<IconToken>(() => {
  return props.isOpen ? 'chevron-up' : 'chevron-down';
});

const iconSize = computed(() => {
  if (props.size === 'small') return '16px';
  if (props.size === 'large') return '20px';
  return '18px';
});

const iconColor = computed(() => {
  if (props.disabled) return color.neutral['5'].value;
  if (focused.value) return color.primary['7'].value;
  return color.neutral['7'].value;
});

// Event handlers
const handleClick = () => {
  if (!props.disabled) {
    emit('toggle', props.index);
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
};

const onFocus = () => {
  focused.value = true;
};

const onBlur = () => {
  focused.value = false;
};

// Styles
const itemContainerStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';
  let styles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };

  if (props.variant === 'bordered' || props.variant === 'separated') {
    styles.border = `${border.width['1px']} ${border.style.solid} ${
      isDark ? color.neutral['4'].value : color.neutral['3'].value
    }`;
    styles.borderRadius = cornerRadius['8px'];
  }

  if (props.variant === 'default') {
    styles.borderBottom = `${border.width['1px']} ${border.style.solid} ${
      isDark ? color.neutral['4'].value : color.neutral['3'].value
    }`;
  }

  return styles;
});

const triggerStyle = computed<CSSProperties>(() => {
  const size = props.size;
  const isDark = theme.value === 'dark';
  
  let paddingY: string = spacing['12px'];
  let paddingX: string = spacing['16px'];
  let fontSize: string = typography.size['16px'];
  
  if (size === 'small') {
    paddingY = spacing['8px'];
    paddingX = spacing['12px'];
    fontSize = typography.size['14px'];
  } else if (size === 'large') {
    paddingY = spacing['16px'];
    paddingX = spacing['20px'];
    fontSize = typography.size['18px'];
  }

  let backgroundColor = 'transparent';
  let textColor = isDark ? color.neutral['10'].value : color.neutral['9'].value;
  
  if (props.disabled) {
    textColor = color.neutral['5'].value;
    backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
  } else if (focused.value) {
    backgroundColor = isDark ? color.neutral['3'].value : color.neutral['2'].value;
  }

  return {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${paddingY} ${paddingX}`,
    border: 'none',
    backgroundColor,
    color: textColor,
    fontSize,
    fontFamily: typography.family.sans,
    fontWeight: String(typography.weight['5']),
    lineHeight: String(typography.line['140%']),
    textAlign: 'left',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: transition.colors,
    borderRadius: props.variant === 'separated' ? `${cornerRadius['8px']} ${cornerRadius['8px']} 0 0` : '0',
    outline: 'none',
    boxShadow: focused.value && !props.disabled ? 
      `0 0 0 2px ${color.primary['5'].value}` : 'none',
  };
});

const titleStyle = computed<CSSProperties>(() => ({
  flex: '1',
  textAlign: 'left',
  marginRight: props.showIcon && props.iconPosition === 'right' ? spacing['8px'] : '0',
  marginLeft: props.showIcon && props.iconPosition === 'left' ? spacing['8px'] : '0',
}));

const leftIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  transition: transition.transform,
  transform: props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const rightIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  transition: transition.transform,
  transform: props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const contentWrapperStyle = computed<CSSProperties>(() => {
  return {
    overflow: 'hidden',
    transition: 'max-height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    maxHeight: props.isOpen ? '1000px' : '0',
    opacity: props.isOpen ? '1' : '0',
  };
});

const contentStyle = computed<CSSProperties>(() => {
  const size = props.size;
  const isDark = theme.value === 'dark';
  
  let paddingY: string = spacing['12px'];
  let paddingX: string = spacing['16px'];
  let fontSize: string = typography.size['14px'];
  
  if (size === 'small') {
    paddingY = spacing['8px'];
    paddingX = spacing['12px'];
    fontSize = typography.size['12px'];
  } else if (size === 'large') {
    paddingY = spacing['16px'];
    paddingX = spacing['20px'];
    fontSize = typography.size['16px'];
  }

  return {
    padding: `0 ${paddingX} ${paddingY} ${paddingX}`,
    fontSize,
    fontFamily: typography.family.sans,
    fontWeight: String(typography.weight['4']),
    lineHeight: String(typography.line['160%']),
    color: isDark ? color.neutral['8'].value : color.neutral['7'].value,
  };
});
</script>
