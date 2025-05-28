<template>
  <div :style="switchContainerStyle">
    <!-- Hidden Input -->
    <input
      ref="inputRef"
      type="checkbox"
      :id="inputId"
      :checked="modelValue"
      :disabled="disabled"
      :required="required"
      :aria-describedby="descriptionId"
      :aria-labelledby="labelId"
      :style="hiddenInputStyle"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
    />
    
    <!-- Switch Track -->
    <label
      :for="inputId"
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
        :for="inputId"
        :style="labelStyle"
        :id="labelId"
      >
        {{ label }}
      </label>
      
      <p
        v-if="description"
        :style="descriptionStyle"
        :id="descriptionId"
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

const { theme } = useTheme();

// State
const focused = ref(false);
const inputRef = ref<HTMLInputElement>();

// Size configuration
const sizeConfig = computed(() => {
  const size = props.size;
  
  if (size === 'small') {
    return {
      trackWidth: '32px',
      trackHeight: '18px',
      thumbSize: '14px',
      thumbOffset: '2px',
      thumbIconSize: '8px',
      trackIconSize: '10px',
      labelFontSize: typography.size['14px'],
      descriptionFontSize: typography.size['12px'],
      gap: spacing['8px'],
    };
  } else if (size === 'large') {
    return {
      trackWidth: '56px',
      trackHeight: '32px',
      thumbSize: '28px',
      thumbOffset: '2px',
      thumbIconSize: '16px',
      trackIconSize: '16px',
      labelFontSize: typography.size['18px'],
      descriptionFontSize: typography.size['16px'],
      gap: spacing['16px'],
    };
  } else {
    return {
      trackWidth: '44px',
      trackHeight: '24px',
      thumbSize: '20px',
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
  
  if (props.modelValue) {
    return color.primary['7'].value;
  }
  
  return isDark ? color.neutral['7'].value : color.neutral['6'].value;
});

const trackIconColor = computed(() => {
  const isDark = theme.value === 'dark';
  
  if (props.disabled) {
    return color.neutral['5'].value;
  }
  
  return isDark ? color.neutral['1'].value : color.neutral['1'].value;
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
  
  if (props.disabled) {
    backgroundColor = isDark ? color.neutral['3'].value : color.neutral['2'].value;
    borderColor = color.neutral['4'].value;
  } else if (props.modelValue) {
    backgroundColor = color.primary['7'].value;
    borderColor = color.primary['7'].value;
  } else {
    backgroundColor = isDark ? color.neutral['4'].value : color.neutral['3'].value;
    borderColor = color.neutral['5'].value;
  }
  
  return {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: sizeConfig.value.trackWidth,
    height: sizeConfig.value.trackHeight,
    backgroundColor,
    border: `${border.width['1px']} ${border.style.solid} ${borderColor}`,
    borderRadius: sizeConfig.value.trackHeight,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: transition.normal,
    flexShrink: '0',
    outline: focused.value ? `2px solid ${color.primary['7'].value}` : 'none',
    outlineOffset: '2px',
  };
});

const switchThumbStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';
  
  const translateX = props.modelValue 
    ? `calc(${sizeConfig.value.trackWidth} - ${sizeConfig.value.thumbSize} - ${sizeConfig.value.thumbOffset})`
    : sizeConfig.value.thumbOffset;
  
  let backgroundColor: string;
  let boxShadow: string;
  
  if (props.disabled) {
    backgroundColor = color.neutral['5'].value;
    boxShadow = 'none';
  } else {
    backgroundColor = color.neutral['1'].value;
    boxShadow = `${shadow.size[1]} ${shadow.color.neutral}`;
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
    backgroundColor,
    borderRadius: cornerRadius['50%'],
    boxShadow,
    transform: `translateX(${translateX})`,
    transition: transition.normal,
    zIndex: '1',
  };
});

const checkedIconStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  left: spacing['6px'],
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: '0',
}));

const uncheckedIconStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  right: spacing['6px'],
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: '0',
}));

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
