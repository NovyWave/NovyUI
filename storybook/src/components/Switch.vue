<template>
  <div :style="switchContainerStyle">
    <!-- Hidden Input -->
    <input
      ref="inputRef"
      type="checkbox"
      :id="computedInputId"
      :checked="modelValue"
      :disabled="disabled"
      :required="required"
      :aria-describedby="computedDescriptionId"
      :aria-labelledby="computedLabelId"
      :style="hiddenInputStyle"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
    />

    <!-- Switch Track -->
    <label
      :for="computedInputId"
      :style="switchTrackStyle"
      :class="switchClass"
      @click="onLabelClick"
    >
      <!-- Switch Thumb -->
      <span :style="switchThumbStyle">
        <!-- Thumb Icon -->
        <Icon
          v-if="thumbIcon"
          :name="thumbIcon"
          :width="thumbIconSize"
          :height="thumbIconSize"
          :color="thumbIconColor"
          :aria-hidden="true"
        />
      </span>

      <!-- Track Icons -->
      <Icon
        v-if="checkedIcon && modelValue"
        :name="checkedIcon"
        :width="trackIconSize"
        :height="trackIconSize"
        :color="trackIconColor"
        :style="checkedIconStyle"
        :aria-hidden="true"
      />

      <Icon
        v-if="uncheckedIcon && !modelValue"
        :name="uncheckedIcon"
        :width="trackIconSize"
        :height="trackIconSize"
        :color="trackIconColor"
        :style="uncheckedIconStyle"
        :aria-hidden="true"
      />
    </label>

    <!-- Label Text -->
    <div v-if="hasLabelContent" :style="labelContentStyle">
      <label
        v-if="label"
        :for="computedInputId"
        :style="labelStyle"
        :id="computedLabelId"
      >
        {{ label }}
      </label>

      <p
        v-if="description"
        :style="descriptionStyle"
        :id="computedDescriptionId"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, shadow, typography, transition, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';

type Size = 'small' | 'medium' | 'large';

const props = withDefaults(defineProps<{
  modelValue: boolean;
  size?: Size;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  description?: string;
  labelPosition?: 'left' | 'right';
  thumbIcon?: IconToken;
  checkedIcon?: IconToken;
  uncheckedIcon?: IconToken;
  inputId?: string;
  labelId?: string;
  descriptionId?: string;
}>(), {
  size: 'medium',
  disabled: false,
  required: false,
  labelPosition: 'right',
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'change': [value: boolean, event: Event];
  'focus': [event: FocusEvent];
  'blur': [event: FocusEvent];
}>();

const theme = useTheme();

// State
const focused = ref(false);
const inputRef = ref<HTMLInputElement>();

// Generate unique IDs if not provided
const uniqueId = Math.random().toString(36).substr(2, 9);
const computedInputId = computed(() => props.inputId || `switch-${uniqueId}`);
const computedLabelId = computed(() => props.labelId || `switch-label-${uniqueId}`);
const computedDescriptionId = computed(() => props.descriptionId || `switch-description-${uniqueId}`);

// Size configuration
const sizeConfig = computed(() => {
  const size = props.size;

  if (size === 'small') {
    return {
      trackWidth: '36px',
      trackHeight: '20px',
      thumbSize: '16px',
      thumbOffset: '2px',
      thumbIconSize: '8px',
      trackIconSize: '10px',
      labelFontSize: typography.size['14px'],
      descriptionFontSize: typography.size['12px'],
      gap: spacing['8px'],
    };
  } else if (size === 'large') {
    return {
      trackWidth: '60px',
      trackHeight: '34px',
      thumbSize: '30px',
      thumbOffset: '2px',
      thumbIconSize: '16px',
      trackIconSize: '16px',
      labelFontSize: typography.size['18px'],
      descriptionFontSize: typography.size['16px'],
      gap: spacing['16px'],
    };
  } else {
    return {
      trackWidth: '48px',
      trackHeight: '26px',
      thumbSize: '22px',
      thumbOffset: '2px',
      thumbIconSize: '12px',
      trackIconSize: '12px',
      labelFontSize: typography.size['16px'],
      descriptionFontSize: typography.size['14px'],
      gap: spacing['12px'],
    };
  }
});

// Computed properties
const hasLabelContent = computed(() => props.label || props.description);

const thumbIconSize = computed(() => sizeConfig.value.thumbIconSize);
const trackIconSize = computed(() => sizeConfig.value.trackIconSize);

const thumbIconColor = computed(() => {
  const isDark = theme.value === 'dark';

  if (props.disabled) {
    return color.neutral['5'].value;
  }

  // Make thumb icon contrast well against the light thumb in dark mode
  if (isDark) {
    return color.neutral['3'].value; // Dark icon for light thumb in dark mode
  } else {
    return color.neutral['6'].value; // Medium dark icon for light thumb in light mode
  }
});

const trackIconColor = computed(() => {
  const isDark = theme.value === 'dark';

  if (props.disabled) {
    return color.neutral['5'].value;
  }

  // Make track icon contrast well against track background
  if (props.modelValue) {
    // When checked (blue track), use white/light icon for contrast
    return isDark ? color.neutral['11'].value : color.neutral['1'].value;
  } else {
    // When unchecked, use appropriate contrast for track color
    return isDark ? color.neutral['8'].value : color.neutral['6'].value;
  }
});

const switchClass = computed(() => {
  const classes = [];
  if (props.modelValue) classes.push('checked');
  if (props.disabled) classes.push('disabled');
  if (focused.value) classes.push('focused');
  return classes.join(' ');
});

const switchContainerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: props.description ? 'flex-start' : 'center',
  gap: sizeConfig.value.gap,
  flexDirection: props.labelPosition === 'left' ? 'row-reverse' : 'row',
  fontFamily: typography.family.sans,
}));

const hiddenInputStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  opacity: '0',
  pointerEvents: 'none',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: '0',
}));

const switchTrackStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  let backgroundColor: string;
  let borderColor: string;
  let boxShadow: string;

  if (props.disabled) {
    backgroundColor = isDark ? color.neutral['3'].value : color.neutral['2'].value;
    borderColor = isDark ? color.neutral['4'].value : color.neutral['3'].value;
    boxShadow = 'none';
  } else if (props.modelValue) {
    // Enhanced checked state with gradient and better shadows
    backgroundColor = `linear-gradient(135deg, ${color.primary['6'].value} 0%, ${color.primary['7'].value} 100%)`;
    borderColor = color.primary['7'].value;
    boxShadow = `
      inset 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(255, 255, 255, 0.05)
    `;
  } else {
    // Enhanced unchecked state with better depth
    backgroundColor = isDark
      ? `linear-gradient(135deg, ${color.neutral['4'].value} 0%, ${color.neutral['5'].value} 100%)`
      : `linear-gradient(135deg, ${color.neutral['1'].value} 0%, ${color.neutral['2'].value} 100%)`;
    borderColor = isDark ? color.neutral['6'].value : color.neutral['3'].value;
    boxShadow = `
      inset 0 2px 4px rgba(0, 0, 0, 0.06),
      0 1px 2px rgba(0, 0, 0, 0.05),
      0 0 0 1px rgba(255, 255, 255, 0.05)
    `;
  }

  return {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: sizeConfig.value.trackWidth,
    height: sizeConfig.value.trackHeight,
    background: backgroundColor,
    border: `1px solid ${borderColor}`,
    borderRadius: sizeConfig.value.trackHeight,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    flexShrink: '0',
    outline: focused.value ? `2px solid ${color.primary['7'].value}` : 'none',
    outlineOffset: '2px',
    boxShadow,
    // Add subtle inner glow effect
    '&::before': props.modelValue && !props.disabled ? {
      content: '""',
      position: 'absolute',
      inset: '1px',
      borderRadius: 'inherit',
      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,
      pointerEvents: 'none',
    } : undefined,
  };
});

const switchThumbStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  const translateX = props.modelValue
    ? `calc(${sizeConfig.value.trackWidth} - ${sizeConfig.value.thumbSize} - ${sizeConfig.value.thumbOffset})`
    : sizeConfig.value.thumbOffset;

  let backgroundColor: string;
  let boxShadow: string;
  let border: string;

  if (props.disabled) {
    backgroundColor = isDark ? color.neutral['4'].value : color.neutral['3'].value;
    boxShadow = '0 1px 2px rgba(0, 0, 0, 0.1)';
    border = `1px solid ${isDark ? color.neutral['5'].value : color.neutral['4'].value}`;
  } else {
    // Enhanced thumb with gradient and better shadows - theme-aware colors
    if (isDark) {
      backgroundColor = `linear-gradient(135deg, ${color.neutral['10'].value} 0%, ${color.neutral['9'].value} 100%)`;
    } else {
      backgroundColor = `linear-gradient(135deg, ${color.neutral['1'].value} 0%, ${color.neutral['2'].value} 100%)`;
    }
    boxShadow = `
      0 4px 8px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.08),
      0 1px 2px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.15)
    `;
    border = `1px solid ${isDark ? color.neutral['8'].value : color.neutral['2'].value}`;
  }

  return {
    position: 'absolute',
    top: sizeConfig.value.thumbOffset,
    left: sizeConfig.value.thumbOffset,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizeConfig.value.thumbSize,
    height: sizeConfig.value.thumbSize,
    background: backgroundColor,
    border,
    borderRadius: '50%',
    boxShadow,
    transform: `translateX(${translateX}) ${props.modelValue ? 'scale(1.05)' : 'scale(1)'}`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: '1',
    // Add subtle highlight effect
    '&::before': !props.disabled ? {
      content: '""',
      position: 'absolute',
      top: '2px',
      left: '2px',
      right: '2px',
      height: '40%',
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
      pointerEvents: 'none',
    } : undefined,
  };
});

const checkedIconStyle = computed<CSSProperties>(() => {
  // Position checked icon on the left side (space available when thumb is on right)
  return {
    position: 'absolute',
    left: spacing['8px'],
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '0',
  };
});

const uncheckedIconStyle = computed<CSSProperties>(() => {
  // Position unchecked icon on the right side (space available when thumb is on left)
  return {
    position: 'absolute',
    right: spacing['6px'],
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '0',
  };
});

const labelContentStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing['4px'],
  flex: '1',
}));

const labelStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.labelFontSize,
    fontWeight: String(typography.weight['5']),
    lineHeight: String(typography.line['140%']),
    color: props.disabled
      ? color.neutral['5'].value
      : isDark ? color.neutral['11'].value : color.neutral['9'].value,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    margin: '0',
  };
});

const descriptionStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.descriptionFontSize,
    fontWeight: String(typography.weight['4']),
    lineHeight: String(typography.line['140%']),
    color: props.disabled
      ? color.neutral['5'].value
      : isDark ? color.neutral['8'].value : color.neutral['7'].value,
    margin: '0',
  };
});

// Event handlers
const onChange = (event: Event) => {
  if (props.disabled) return;

  const target = event.target as HTMLInputElement;
  const newValue = target.checked;

  emit('update:modelValue', newValue);
  emit('change', newValue, event);
};

const onFocus = (event: FocusEvent) => {
  focused.value = true;
  emit('focus', event);
};

const onBlur = (event: FocusEvent) => {
  focused.value = false;
  emit('blur', event);
};

const onKeydown = (event: KeyboardEvent) => {
  // Space key should toggle the switch
  if (event.key === ' ') {
    event.preventDefault();
    if (!props.disabled) {
      const newValue = !props.modelValue;
      emit('update:modelValue', newValue);
      emit('change', newValue, event);
    }
  }
};

const onLabelClick = (event: MouseEvent) => {
  // Prevent double-firing when clicking the label
  if (event.target === inputRef.value) {
    return;
  }

  if (!props.disabled) {
    inputRef.value?.focus();
  }
};
</script>
