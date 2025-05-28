<template>
  <div :style="fileInputContainerStyle">
    <!-- Hidden File Input -->
    <input
      ref="fileInputRef"
      type="file"
      :id="inputId"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      :required="required"
      :aria-labelledby="labelId"
      :aria-describedby="descriptionId"
      :style="hiddenInputStyle"
      @change="onFileChange"
      @focus="onFocus"
      @blur="onBlur"
    />

    <!-- Drop Zone -->
    <div
      :style="dropZoneStyle"
      :class="dropZoneClass"
      @click="openFileDialog"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
    >
      <!-- Upload Icon -->
      <div :style="iconContainerStyle">
        <Icon
          :name="uploadIcon"
          :width="iconSize"
          :height="iconSize"
          :color="iconColor"
          :aria-hidden="true"
        />
      </div>

      <!-- Upload Text -->
      <div :style="textContainerStyle">
        <p :style="primaryTextStyle">
          {{ primaryText }}
        </p>
        <p v-if="secondaryText" :style="secondaryTextStyle">
          {{ secondaryText }}
        </p>
      </div>

      <!-- Browse Button -->
      <button
        type="button"
        :style="browseButtonStyle"
        :disabled="disabled"
        @click.stop="openFileDialog"
      >
        {{ browseButtonText }}
      </button>
    </div>

    <!-- File List -->
    <div v-if="files.length > 0" :style="fileListStyle">
      <div
        v-for="(file, index) in files"
        :key="`${file.name}-${file.size}-${index}`"
        :style="fileItemStyle"
      >
        <!-- File Icon -->
        <Icon
          :name="getFileIcon(file)"
          :width="'16px'"
          :height="'16px'"
          :color="fileIconColor"
          :aria-hidden="true"
        />

        <!-- File Info -->
        <div :style="fileInfoStyle">
          <span :style="fileNameStyle">{{ file.name }}</span>
          <span :style="fileSizeStyle">{{ formatFileSize(file.size) }}</span>
        </div>

        <!-- Remove Button -->
        <button
          type="button"
          :style="removeButtonStyle"
          :aria-label="`Remove ${file.name}`"
          @click="removeFile(index)"
        >
          <Icon
            :name="'x'"
            :width="'14px'"
            :height="'14px'"
            :color="removeIconColor"
            :aria-hidden="true"
          />
        </button>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" :style="errorMessageStyle">
      <Icon
        :name="'alert-circle'"
        :width="'16px'"
        :height="'16px'"
        :color="color.error['7'].value"
        :aria-hidden="true"
      />
      <span>{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, typography, transition, useTheme } from '../tokens';
import Icon from './Icon.vue';

type Size = 'small' | 'medium' | 'large';

const props = withDefaults(defineProps<{
  modelValue?: File[];
  size?: Size;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  required?: boolean;
  maxFiles?: number;
  maxFileSize?: number; // in bytes
  primaryText?: string;
  secondaryText?: string;
  browseButtonText?: string;
  uploadIcon?: string;
  inputId?: string;
  labelId?: string;
  descriptionId?: string;
}>(), {
  modelValue: () => [],
  size: 'medium',
  multiple: false,
  disabled: false,
  required: false,
  maxFiles: 10,
  maxFileSize: 10 * 1024 * 1024, // 10MB
  primaryText: 'Drop files here or click to browse',
  secondaryText: 'Supports: JPG, PNG, PDF, DOC',
  browseButtonText: 'Browse Files',
  uploadIcon: 'upload',
});

const emit = defineEmits<{
  'update:modelValue': [files: File[]];
  'change': [files: File[]];
  'error': [message: string];
  'focus': [event: FocusEvent];
  'blur': [event: FocusEvent];
}>();

const theme = useTheme();

// State
const isDragOver = ref(false);
const focused = ref(false);
const errorMessage = ref('');
const fileInputRef = ref<HTMLInputElement>();

// Computed properties
const files = computed(() => props.modelValue || []);

// Size configuration
const sizeConfig = computed(() => {
  const size = props.size;

  if (size === 'small') {
    return {
      padding: spacing['16px'],
      iconSize: '32px',
      primaryFontSize: typography.size['14px'],
      secondaryFontSize: typography.size['12px'],
      buttonFontSize: typography.size['14px'],
      minHeight: '120px',
    };
  } else if (size === 'large') {
    return {
      padding: spacing['32px'],
      iconSize: '48px',
      primaryFontSize: typography.size['18px'],
      secondaryFontSize: typography.size['16px'],
      buttonFontSize: typography.size['16px'],
      minHeight: '200px',
    };
  } else {
    return {
      padding: spacing['24px'],
      iconSize: '40px',
      primaryFontSize: typography.size['16px'],
      secondaryFontSize: typography.size['14px'],
      buttonFontSize: typography.size['14px'],
      minHeight: '160px',
    };
  }
});

const iconSize = computed(() => sizeConfig.value.iconSize);

const iconColor = computed(() => {
  const isDark = theme.value === 'dark';

  if (props.disabled) {
    return color.neutral['5'].value;
  }

  if (isDragOver.value) {
    return color.primary['7'].value;
  }

  return isDark ? color.neutral['7'].value : color.neutral['6'].value;
});

const fileIconColor = computed(() => {
  const isDark = theme.value === 'dark';
  return isDark ? color.neutral['8'].value : color.neutral['7'].value;
});

const removeIconColor = computed(() => {
  const isDark = theme.value === 'dark';
  return isDark ? color.neutral['7'].value : color.neutral['6'].value;
});

const dropZoneClass = computed(() => {
  const classes = [];
  if (isDragOver.value) classes.push('drag-over');
  if (props.disabled) classes.push('disabled');
  if (focused.value) classes.push('focused');
  return classes.join(' ');
});

const fileInputContainerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing['12px'],
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

const dropZoneStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  let backgroundColor: string;
  let borderColor: string;
  let borderStyle: string = border.style.dashed;

  if (props.disabled) {
    backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
    borderColor = color.neutral['4'].value;
  } else if (isDragOver.value) {
    backgroundColor = isDark ? color.primary['1'].value : color.primary['1'].value;
    borderColor = color.primary['7'].value;
    borderStyle = border.style.solid;
  } else {
    backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
    borderColor = color.neutral['5'].value;
  }

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing['16px'],
    minHeight: sizeConfig.value.minHeight,
    padding: sizeConfig.value.padding,
    backgroundColor,
    border: `${border.width['2px']} ${borderStyle} ${borderColor}`,
    borderRadius: cornerRadius['8px'],
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: transition.normal,
    outline: focused.value ? `2px solid ${color.primary['7'].value}` : 'none',
    outlineOffset: '2px',
  };
});

const iconContainerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const textContainerStyle = computed<CSSProperties>(() => ({
  textAlign: 'center',
  maxWidth: '300px',
}));

const primaryTextStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    margin: '0',
    fontSize: sizeConfig.value.primaryFontSize,
    fontWeight: String(typography.weight['5']),
    lineHeight: String(typography.line['140%']),
    color: props.disabled
      ? color.neutral['5'].value
      : isDark ? color.neutral['11'].value : color.neutral['9'].value,
  };
});

const secondaryTextStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    margin: `${spacing['4px']} 0 0 0`,
    fontSize: sizeConfig.value.secondaryFontSize,
    fontWeight: String(typography.weight['4']),
    lineHeight: String(typography.line['140%']),
    color: props.disabled
      ? color.neutral['5'].value
      : isDark ? color.neutral['8'].value : color.neutral['7'].value,
  };
});

const browseButtonStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    padding: `${spacing['8px']} ${spacing['16px']}`,
    fontSize: sizeConfig.value.buttonFontSize,
    fontWeight: String(typography.weight['5']),
    fontFamily: typography.family.sans,
    color: props.disabled
      ? color.neutral['5'].value
      : color.primary['7'].value,
    backgroundColor: 'transparent',
    border: `${border.width['1px']} ${border.style.solid} ${props.disabled ? color.neutral['4'].value : color.primary['7'].value}`,
    borderRadius: cornerRadius['6px'],
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: transition.normal,
    ':hover': !props.disabled ? {
      backgroundColor: isDark ? color.primary['1'].value : color.primary['1'].value,
    } : {},
  };
});

const fileListStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing['8px'],
}));

const fileItemStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    display: 'flex',
    alignItems: 'center',
    gap: spacing['12px'],
    padding: spacing['12px'],
    backgroundColor: isDark ? color.neutral['2'].value : color.neutral['1'].value,
    border: `${border.width['1px']} ${border.style.solid} ${color.neutral['4'].value}`,
    borderRadius: cornerRadius['6px'],
  };
});

const fileInfoStyle = computed<CSSProperties>(() => ({
  flex: '1',
  minWidth: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: spacing['2px'],
}));

const fileNameStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: typography.size['14px'],
    fontWeight: String(typography.weight['5']),
    color: isDark ? color.neutral['11'].value : color.neutral['9'].value,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
});

const fileSizeStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: typography.size['12px'],
    fontWeight: String(typography.weight['4']),
    color: isDark ? color.neutral['8'].value : color.neutral['7'].value,
  };
});

const removeButtonStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing['4px'],
  border: 'none',
  background: 'transparent',
  borderRadius: cornerRadius['4px'],
  cursor: 'pointer',
  transition: transition.normal,
  ':hover': {
    backgroundColor: color.neutral['3'].value,
  },
}));

const errorMessageStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing['8px'],
  padding: spacing['12px'],
  fontSize: typography.size['14px'],
  color: color.error['7'].value,
  backgroundColor: color.error['1'].value,
  border: `${border.width['1px']} ${border.style.solid} ${color.error['3'].value}`,
  borderRadius: cornerRadius['6px'],
}));

// Helper functions
const getFileIcon = (file: File): string => {
  const type = file.type.toLowerCase();

  if (type.startsWith('image/')) return 'image';
  if (type.includes('pdf')) return 'file-text';
  if (type.includes('word') || type.includes('document')) return 'file-text';
  if (type.includes('excel') || type.includes('spreadsheet')) return 'file-text';
  if (type.includes('powerpoint') || type.includes('presentation')) return 'file-text';
  if (type.startsWith('video/')) return 'video';
  if (type.startsWith('audio/')) return 'music';
  if (type.includes('zip') || type.includes('rar') || type.includes('archive')) return 'archive';

  return 'file';
};

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const validateFiles = (fileList: File[]): string | null => {
  if (props.maxFiles && fileList.length > props.maxFiles) {
    return `Maximum ${props.maxFiles} files allowed`;
  }

  for (const file of fileList) {
    if (props.maxFileSize && file.size > props.maxFileSize) {
      return `File "${file.name}" is too large. Maximum size is ${formatFileSize(props.maxFileSize)}`;
    }
  }

  return null;
};

// Event handlers
const openFileDialog = () => {
  if (!props.disabled && fileInputRef.value) {
    fileInputRef.value.click();
  }
};

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const selectedFiles = Array.from(target.files || []);

  handleFiles(selectedFiles);

  // Reset input value to allow selecting the same file again
  target.value = '';
};

const handleFiles = (newFiles: File[]) => {
  errorMessage.value = '';

  let updatedFiles: File[];

  if (props.multiple) {
    updatedFiles = [...files.value, ...newFiles];
  } else {
    updatedFiles = newFiles.slice(0, 1);
  }

  const validationError = validateFiles(updatedFiles);
  if (validationError) {
    errorMessage.value = validationError;
    emit('error', validationError);
    return;
  }

  emit('update:modelValue', updatedFiles);
  emit('change', updatedFiles);
};

const removeFile = (index: number) => {
  const updatedFiles = files.value.filter((_, i) => i !== index);
  emit('update:modelValue', updatedFiles);
  emit('change', updatedFiles);
  errorMessage.value = '';
};

const onDragOver = (event: DragEvent) => {
  if (props.disabled) return;
  isDragOver.value = true;
};

const onDragLeave = (event: DragEvent) => {
  if (props.disabled) return;
  isDragOver.value = false;
};

const onDrop = (event: DragEvent) => {
  if (props.disabled) return;

  isDragOver.value = false;

  const droppedFiles = Array.from(event.dataTransfer?.files || []);
  handleFiles(droppedFiles);
};

const onFocus = (event: FocusEvent) => {
  focused.value = true;
  emit('focus', event);
};

const onBlur = (event: FocusEvent) => {
  focused.value = false;
  emit('blur', event);
};
</script>
