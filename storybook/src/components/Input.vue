<template>
  <div :style="fieldContainerStyle">
    <!-- Label -->
    <label
      v-if="label"
      :for="inputId"
      :style="labelStyle"
    >
      {{ label }}
      <span v-if="required" :style="requiredStyle">*</span>
    </label>

    <!-- Input Container -->
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
      :id="inputId"
      :style="inputStyle"
      :type="computedInputType"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :aria-labelledby="labelId"
      :aria-describedby="error && errorMessage ? errorMessageId : descriptionId"
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
      <Button
        v-if="type === 'search' && modelValue && !disabled"
        label=""
        variant="Ghost"
        :size="props.size"
        left-icon="x"
        :left-icon-aria-label="clearAriaLabel"
        :style="actionButtonStyle"
        @click="onClear"
        @mousedown.prevent
      />

      <!-- Password Toggle -->
      <Button
        v-if="type === 'password' && !disabled"
        label=""
        variant="Ghost"
        :size="props.size"
        :left-icon="passwordVisible ? 'eye-off' : 'eye'"
        :left-icon-aria-label="passwordToggleAriaLabel"
        :style="actionButtonStyle"
        @click="togglePasswordVisibility"
        @mousedown.prevent
      />

      <!-- Right Icon -->
      <Icon
        v-if="rightIcon && !(type === 'search' && modelValue)"
        :name="rightIcon"
        :width="iconSize"
        :height="iconSize"
        :color="iconColor"
        :style="rightIconStyle"
        :aria-hidden="true"
      />
    </div>
    </div>

    <!-- Error Message -->
    <div
      v-if="error && errorMessage"
      :style="errorMessageStyle"
      :id="errorMessageId"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, nextTick, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, typography, transition, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';
import Button from './Button.vue';

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
  label?: string;
  errorMessage?: string;
  leftIcon?: IconToken;
  rightIcon?: IconToken;
  id?: string;
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

// Generate unique IDs for accessibility
const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`);
const errorMessageId = computed(() => `${inputId.value}-error`);

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
  // Store current cursor position and selection
  const currentStart = inputRef.value?.selectionStart || 0;
  const currentEnd = inputRef.value?.selectionEnd || 0;

  // Toggle visibility
  passwordVisible.value = !passwordVisible.value;

  // Use requestAnimationFrame to wait for the next frame, then setTimeout for browser updates
  requestAnimationFrame(() => {
    setTimeout(() => {
      if (inputRef.value) {
        inputRef.value.focus();
        // Try to restore cursor position multiple times if needed
        const restoreCursor = () => {
          if (inputRef.value) {
            inputRef.value.setSelectionRange(currentStart, currentEnd);
            // Verify the position was set correctly
            if (inputRef.value.selectionStart !== currentStart) {
              // If it didn't work, try again after a short delay
              setTimeout(restoreCursor, 5);
            }
          }
        };
        restoreCursor();
      }
    }, 0);
  });
};

// Styles
const fieldContainerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing['4px'],
  width: '100%',
}));

const labelStyle = computed<CSSProperties>(() => {
  const size = props.size;
  let fontSize: string = typography.size['14px'];

  if (size === 'small') {
    fontSize = typography.size['12px'];
  } else if (size === 'large') {
    fontSize = typography.size['16px'];
  }

  const isDark = theme.value === 'dark';
  let textColor = isDark ? color.neutral['11'].value : color.neutral['9'].value;

  if (props.disabled) {
    textColor = color.neutral['6'].value;
  }

  return {
    fontSize,
    fontFamily: typography.family.sans,
    fontWeight: String(typography.weight['6']),
    lineHeight: String(typography.line['140%']),
    color: textColor,
    marginBottom: spacing['2px'],
  };
});

const requiredStyle = computed<CSSProperties>(() => ({
  color: color.error['7'].value,
  marginLeft: spacing['2px'],
}));

const errorMessageStyle = computed<CSSProperties>(() => {
  const size = props.size;
  let fontSize: string = typography.size['12px'];

  if (size === 'small') {
    fontSize = typography.size['11px'];
  } else if (size === 'large') {
    fontSize = typography.size['14px'];
  }

  return {
    fontSize,
    fontFamily: typography.family.sans,
    fontWeight: String(typography.weight['5']),
    lineHeight: String(typography.line['140%']),
    color: color.error['7'].value,
    marginTop: spacing['2px'],
  };
});

const inputContainerStyle = computed<CSSProperties>(() => {
  const size = props.size;
  let paddingY: string = spacing['6px'];
  let paddingX: string = spacing['12px'];
  let minHeight: string = '44px'; // Increased to make medium inputs taller and more comfortable

  if (size === 'small') {
    paddingY = spacing['4px'];
    paddingX = spacing['8px'];
    minHeight = '32px'; // Increased from 28px to compensate for 4px border
  } else if (size === 'large') {
    paddingY = spacing['8px'];
    paddingX = spacing['16px'];
    minHeight = '48px'; // Increased from 44px to compensate for 4px border
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
    border: `${border.width['2px']} ${border.style.solid} ${borderColor}`,
    borderRadius: cornerRadius['4px'],
    transition: transition.normal,
    boxShadow,
    gap: spacing['8px'],
    boxSizing: 'border-box',
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

// Custom button sizing to match input heights - very conservative to prevent jumping
const actionButtonStyle = computed<CSSProperties>(() => {
  const size = props.size;
  let minHeight: string = '24px'; // Much smaller to prevent jumping
  let padding: string = '1px 2px';

  if (size === 'small') {
    minHeight = '16px'; // Much smaller to prevent jumping
    padding = '0px 1px';
  } else if (size === 'large') {
    minHeight = '28px'; // Much smaller to prevent jumping
    padding = '2px 3px';
  }

  return {
    minHeight,
    height: minHeight,
    padding,
  };
});

const rightIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));




</script>

<style scoped>
.input-with-primary-placeholder::placeholder {
  color: v-bind('color.primary["9"].value');
  opacity: 1;
}

/* Hide browser's native search input clear button */
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}

input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

/* For Firefox */
input[type="search"] {
  -moz-appearance: textfield;
}
</style>
