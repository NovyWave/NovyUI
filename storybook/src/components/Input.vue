<template>
  <div :style="inputContainerStyle">
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

    <!-- Input Element -->
    <input
      ref="inputRef"
      :style="inputStyle"
      :type="computedInputType"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :aria-labelledby="labelId"
      :aria-describedby="descriptionId"
      :aria-invalid="error ? 'true' : undefined"
      class="input-with-primary-placeholder"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
    />

    <!-- Right Side Actions -->
    <div v-if="rightIcon || type === 'password' || (type === 'search' && modelValue)" :style="rightActionsStyle">
      <!-- Clear Button for Search -->
      <button
        v-if="type === 'search' && modelValue && !disabled"
        :style="clearButtonStyle"
        type="button"
        :aria-label="clearAriaLabel"
        @click="onClear"
        @mousedown.prevent
      >
        <Icon
          name="x"
          :width="actionIconSize"
          :height="actionIconSize"
          :color="iconColor"
          :aria-hidden="true"
        />
      </button>

      <!-- Password Toggle -->
      <button
        v-if="type === 'password' && !disabled"
        :style="passwordToggleStyle"
        type="button"
        :aria-label="passwordToggleAriaLabel"
        @click="togglePasswordVisibility"
        @mousedown.prevent
      >
        <Icon
          :name="passwordVisible ? 'eye-off' : 'eye'"
          :width="actionIconSize"
          :height="actionIconSize"
          :color="iconColor"
          :aria-hidden="true"
        />
      </button>

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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, typography, transition, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';

type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
type Size = 'small' | 'medium' | 'large';

const props = withDefaults(defineProps<{
  modelValue?: string | number;
  type?: InputType;
  size?: Size;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: boolean;
  leftIcon?: IconToken;
  rightIcon?: IconToken;
  labelId?: string;
  descriptionId?: string;
  clearAriaLabel?: string;
  passwordToggleAriaLabel?: string;
}>(), {
  modelValue: '',
  type: 'text',
  size: 'medium',
  placeholder: '',
  disabled: false,
  readonly: false,
  required: false,
  error: false,
  clearAriaLabel: 'Clear input',
  passwordToggleAriaLabel: 'Toggle password visibility',
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
  'focus': [event: FocusEvent];
  'blur': [event: FocusEvent];
  'keydown': [event: KeyboardEvent];
  'clear': [];
}>();

// State
const focused = ref(false);
const passwordVisible = ref(false);
const inputRef = ref<HTMLInputElement>();

// Theme
const theme = useTheme();

// Computed input type for password toggle
const computedInputType = computed(() => {
  if (props.type === 'password') {
    return passwordVisible.value ? 'text' : 'password';
  }
  return props.type;
});

// Icon sizing
const iconSize = computed(() => {
  if (props.size === 'small') return '16px';
  if (props.size === 'large') return '20px';
  return '18px';
});

const actionIconSize = computed(() => {
  if (props.size === 'small') return '14px';
  if (props.size === 'large') return '18px';
  return '16px';
});

// Icon color based on state
const iconColor = computed(() => {
  if (props.disabled) return color.neutral['6'].value;
  if (props.error) return color.error['7'].value;
  if (focused.value) return color.primary['7'].value;
  return color.neutral['7'].value;
});

// Event handlers
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = props.type === 'number' ? parseFloat(target.value) || 0 : target.value;
  emit('update:modelValue', value);
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
  emit('keydown', event);

  // Clear on Escape for search inputs
  if (event.key === 'Escape' && props.type === 'search' && props.modelValue) {
    onClear();
  }
};

const onClear = () => {
  emit('update:modelValue', '');
  emit('clear');
  inputRef.value?.focus();
};

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
  inputRef.value?.focus();
};

// Styles
const inputContainerStyle = computed<CSSProperties>(() => {
  const size = props.size;
  let paddingY: string = spacing['8px'];
  let paddingX: string = spacing['12px'];
  let minHeight: string = '40px';

  if (size === 'small') {
    paddingY = spacing['4px'];
    paddingX = spacing['8px'];
    minHeight = '32px';
  } else if (size === 'large') {
    paddingY = spacing['12px'];
    paddingX = spacing['16px'];
    minHeight = '48px';
  }

  const isDark = theme.value === 'dark';
  let backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
  let borderColor = color.neutral['3'].value;
  let boxShadow = 'none';

  // Error state
  if (props.error && !props.disabled) {
    borderColor = color.error['7'].value;
    backgroundColor = props.error ? color.error['1'].value : backgroundColor;
  }

  // Focus state
  if (focused.value && !props.disabled && !props.error) {
    borderColor = color.primary['7'].value;
    boxShadow = `0 0 0 ${border.width['2px']} ${color.primary['5'].value}`;
  }

  // Disabled state
  if (props.disabled) {
    backgroundColor = color.neutral['2'].value;
    borderColor = color.neutral['3'].value;
  }

  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight,
    padding: `${paddingY} ${paddingX}`,
    backgroundColor,
    border: `${border.width['1px']} ${border.style.solid} ${borderColor}`,
    borderRadius: cornerRadius['4px'],
    transition: transition.normal,
    boxShadow,
    gap: spacing['8px'],
  };
});

const inputStyle = computed<CSSProperties>(() => {
  const size = props.size;
  let fontSize: string = typography.size['16px'];

  if (size === 'small') {
    fontSize = typography.size['14px'];
  } else if (size === 'large') {
    fontSize = typography.size['18px'];
  }

  const isDark = theme.value === 'dark';
  let textColor = isDark ? color.neutral['10'].value : color.neutral['9'].value;

  if (props.disabled) {
    textColor = color.neutral['6'].value;
  }

  return {
    flex: '1',
    width: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize,
    fontFamily: typography.family.sans,
    fontWeight: String(typography.weight['5']),
    lineHeight: String(typography.line['140%']),
    color: textColor,
  };
});

const leftIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const rightActionsStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing['4px'],
  flexShrink: '0',
}));

const rightIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const clearButtonStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: cornerRadius['2px'],
  cursor: 'pointer',
  transition: transition.fast,
  color: iconColor.value,
  '&:hover': {
    backgroundColor: color.neutral['3'].value,
  },
}));

const passwordToggleStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: cornerRadius['2px'],
  cursor: 'pointer',
  transition: transition.fast,
  color: iconColor.value,
  '&:hover': {
    backgroundColor: color.neutral['3'].value,
  },
}));
</script>

<style scoped>
.input-with-primary-placeholder::placeholder {
  color: v-bind('color.primary["9"].value');
  opacity: 1;
}
</style>
