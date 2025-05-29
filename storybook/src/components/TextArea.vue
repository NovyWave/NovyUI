<template>
  <div :style="textareaContainerStyle">
    <!-- Textarea Element -->
    <textarea
      ref="textareaRef"
      :style="textareaStyle"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :rows="rows"
      :cols="cols"
      :maxlength="maxlength"
      :minlength="minlength"
      :aria-labelledby="labelId"
      :aria-describedby="descriptionId"
      :aria-invalid="error ? 'true' : undefined"
      class="textarea-with-primary-placeholder"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
    />

    <!-- Character Count -->
    <div v-if="showCharacterCount" :style="characterCountStyle">
      <span :style="characterCountTextStyle">
        {{ characterCount }}{{ maxlength ? `/${maxlength}` : '' }}
      </span>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { computed, ref, nextTick, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, typography, transition, useTheme } from '../tokens';
import Icon from './Icon.vue';

type Size = 'small' | 'medium' | 'large';
type Resize = 'none' | 'both' | 'horizontal' | 'vertical';

const props = withDefaults(defineProps<{
  modelValue?: string;
  size?: Size;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: boolean;
  rows?: number;
  cols?: number;
  maxlength?: number;
  minlength?: number;
  resize?: Resize;
  autoResize?: boolean;
  showCharacterCount?: boolean;
  labelId?: string;
  descriptionId?: string;
}>(), {
  modelValue: '',
  size: 'medium',
  placeholder: '',
  disabled: false,
  readonly: false,
  required: false,
  error: false,
  rows: 4,
  resize: 'vertical',
  autoResize: false,
  showCharacterCount: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'focus': [event: FocusEvent];
  'blur': [event: FocusEvent];
  'keydown': [event: KeyboardEvent];
}>();

const theme = useTheme();

// State
const focused = ref(false);
const textareaRef = ref<HTMLTextAreaElement>();

// Size configuration
const sizeConfig = computed(() => {
  const size = props.size;

  if (size === 'small') {
    return {
      fontSize: typography.size['14px'],
      padding: spacing['8px'],
      minHeight: '80px',
    };
  } else if (size === 'large') {
    return {
      fontSize: typography.size['18px'],
      padding: spacing['16px'],
      minHeight: '120px',
    };
  } else {
    return {
      fontSize: typography.size['16px'],
      padding: spacing['12px'],
      minHeight: '100px',
    };
  }
});

// Computed properties
const characterCount = computed(() => props.modelValue?.length || 0);



const textareaContainerStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: typography.family.sans,
}));

const textareaStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  let backgroundColor: string;
  let borderColor: string;
  let textColor: string;

  if (props.disabled) {
    backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
    borderColor = color.neutral['4'].value;
    textColor = color.neutral['5'].value;
  } else if (props.error) {
    backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
    borderColor = color.error['7'].value;
    textColor = isDark ? color.neutral['11'].value : color.neutral['9'].value;
  } else if (focused.value) {
    backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
    borderColor = color.primary['7'].value;
    textColor = isDark ? color.neutral['11'].value : color.neutral['9'].value;
  } else {
    backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
    borderColor = color.neutral['5'].value;
    textColor = isDark ? color.neutral['11'].value : color.neutral['9'].value;
  }

  return {
    width: '100%',
    minHeight: sizeConfig.value.minHeight,
    padding: sizeConfig.value.padding,
    fontSize: sizeConfig.value.fontSize,
    fontFamily: typography.family.sans,
    fontWeight: String(typography.weight['4']),
    lineHeight: String(typography.line['160%']),
    color: textColor,
    backgroundColor,
    border: `${border.width['1px']} ${border.style.solid} ${borderColor}`,
    borderRadius: cornerRadius['6px'],
    outline: 'none',
    resize: props.resize,
    transition: transition.normal,
    cursor: props.disabled ? 'not-allowed' : 'text',
    boxSizing: 'border-box',
  };
});

const characterCountStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  bottom: spacing['8px'],
  right: spacing['8px'],
  pointerEvents: 'none',
  zIndex: '1',
}));

const characterCountTextStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';
  const isOverLimit = props.maxlength && characterCount.value > props.maxlength;

  return {
    fontSize: typography.size['12px'],
    fontWeight: String(typography.weight['4']),
    color: isOverLimit
      ? color.error['7'].value
      : isDark ? color.neutral['7'].value : color.neutral['6'].value,
    backgroundColor: isDark ? color.neutral['2'].value : color.neutral['1'].value,
    padding: `${spacing['2px']} ${spacing['4px']}`,
    borderRadius: cornerRadius['4px'],
  };
});



// Auto-resize functionality
const autoResizeTextarea = async () => {
  if (!props.autoResize || !textareaRef.value) return;

  await nextTick();

  const textarea = textareaRef.value;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};

// Event handlers
const onInput = async (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);

  if (props.autoResize) {
    await autoResizeTextarea();
  }
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

  // Handle Tab key for indentation
  if (event.key === 'Tab' && !event.shiftKey) {
    event.preventDefault();
    const textarea = event.target as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // Insert tab character
    const newValue = props.modelValue.substring(0, start) + '\t' + props.modelValue.substring(end);
    emit('update:modelValue', newValue);

    // Restore cursor position
    nextTick(() => {
      textarea.selectionStart = textarea.selectionEnd = start + 1;
    });
  }
};
</script>

<style scoped>
.textarea-with-primary-placeholder::placeholder {
  color: v-bind('color.primary["9"].value');
  opacity: 1;
}
</style>
