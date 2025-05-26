<template>
  <div :style="selectContainerStyle" @keydown="onKeyDown" ref="selectRef">
    <!-- Trigger Button -->
    <button
      :style="triggerStyle"
      :disabled="disabled"
      :aria-expanded="isOpen"
      :aria-haspopup="'listbox'"
      :aria-labelledby="labelId"
      :aria-describedby="descriptionId"
      type="button"
      role="combobox"
      @click="toggleDropdown"
      @focus="onTriggerFocus"
      @blur="onTriggerBlur"
      ref="triggerRef"
    >
      <span :style="triggerContentStyle">
        <!-- Selected value display -->
        <span :style="selectedValueStyle">
          <template v-if="multiple && Array.isArray(modelValue) && modelValue.length > 0">
            <span v-if="modelValue.length === 1" :style="singleValueStyle">
              {{ getOptionLabel(getOptionByValue(modelValue[0])) }}
            </span>
            <span v-else :style="multipleValueStyle">
              {{ modelValue.length }} selected
            </span>
          </template>          <template v-else-if="!multiple && modelValue !== null && modelValue !== undefined && !Array.isArray(modelValue)">
            <span :style="singleValueStyle">
              {{ getOptionLabel(getOptionByValue(modelValue)) }}
            </span>
          </template>
          <template v-else>
            <span :style="placeholderStyle">{{ placeholder }}</span>
          </template>
        </span>
        
        <!-- Chevron Icon -->
        <Icon 
          :name="'chevron-down'" 
          :width="iconSize" 
          :height="iconSize" 
          :color="String(triggerStyle.color)"
          :style="chevronStyle"
          :aria-hidden="true"
        />
      </span>
    </button>

    <!-- Dropdown Content -->
    <Transition name="dropdown" appear>
      <div v-if="isOpen" :style="dropdownStyle" ref="dropdownRef" role="listbox" :aria-multiselectable="multiple">
        <!-- Search Input (if searchable) -->
        <div v-if="searchable" :style="searchContainerStyle">
          <Icon 
            :name="'search'" 
            :width="'16px'" 
            :height="'16px'" 
            :color="color.neutral['6'].value"
            :style="searchIconStyle"
            :aria-hidden="true"
          />
          <input
            v-model="searchQuery"
            :style="searchInputStyle"
            :placeholder="searchPlaceholder"
            type="text"
            role="searchbox"
            :aria-label="searchPlaceholder"
            ref="searchInputRef"
            @keydown.stop
          />
        </div>

        <!-- Options List -->
        <div :style="optionsListStyle">
          <div
            v-for="(option, index) in filteredOptions"
            :key="getOptionValue(option)"
            :style="getOptionStyle(option, index)"
            :aria-selected="isOptionSelected(option)"
            :role="'option'"
            @click="selectOption(option)"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = -1"
          >
            <span :style="optionContentStyle">
              <!-- Check icon for selected options -->
              <Icon
                v-if="isOptionSelected(option)"
                :name="'check'"
                :width="'16px'"
                :height="'16px'"
                :color="color.primary['7'].value"
                :style="checkIconStyle"
                :aria-hidden="true"
              />
              <span v-else :style="checkIconPlaceholderStyle"></span>
              
              <!-- Option Label -->
              <span :style="optionLabelStyle">
                {{ getOptionLabel(option) }}
              </span>
            </span>
          </div>

          <!-- No options message -->
          <div v-if="filteredOptions.length === 0" :style="noOptionsStyle">
            <span :style="noOptionsTextStyle">{{ noOptionsText }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, nextTick, onMounted, onUnmounted, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, shadow, typography, width, opacity, transition, zIndex, useTheme } from '../tokens';
import Icon from './Icon.vue';

// Types
type OptionValue = string | number;
type Option = { value: OptionValue; label: string; disabled?: boolean } | OptionValue;
type Size = 'small' | 'medium' | 'large';

// Props
const props = withDefaults(defineProps<{
  modelValue?: OptionValue | OptionValue[] | null;
  options: Option[];
  multiple?: boolean;
  disabled?: boolean;
  searchable?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  noOptionsText?: string;
  size?: Size;
  labelId?: string;
  descriptionId?: string;
}>(), {
  multiple: false,
  disabled: false,
  searchable: false,
  placeholder: 'Select an option...',
  searchPlaceholder: 'Search options...',
  noOptionsText: 'No options found',
  size: 'medium',
});

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: OptionValue | OptionValue[] | null];
  'change': [value: OptionValue | OptionValue[] | null];
  'open': [];
  'close': [];
}>();

// State
const isOpen = ref(false);
const searchQuery = ref('');
const hoveredIndex = ref(-1);
const focusedIndex = ref(-1);

// Refs
const selectRef = ref<HTMLElement>();
const triggerRef = ref<HTMLButtonElement>();
const dropdownRef = ref<HTMLElement>();
const searchInputRef = ref<HTMLInputElement>();

// Theme
const theme = useTheme();

// Computed properties
const iconSize = computed(() => {
  if (props.size === 'small') return '14px';
  if (props.size === 'large') return '20px';
  return '16px';
});

// Option utilities
const getOptionValue = (option: Option): OptionValue => {
  return typeof option === 'object' ? option.value : option;
};

const getOptionLabel = (option: Option | undefined): string => {
  if (!option) return '';
  return typeof option === 'object' ? option.label : String(option);
};

const getOptionByValue = (value: OptionValue): Option | undefined => {
  return props.options.find(option => getOptionValue(option) === value);
};

const isOptionDisabled = (option: Option): boolean => {
  return typeof option === 'object' && option.disabled === true;
};

const isOptionSelected = (option: Option): boolean => {
  const value = getOptionValue(option);
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue.includes(value);
  }
  return props.modelValue === value;
};

// Filtered options based on search
const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value.trim()) {
    return props.options;
  }
  
  const query = searchQuery.value.toLowerCase().trim();
  return props.options.filter(option => {
    const label = getOptionLabel(option).toLowerCase();
    return label.includes(query);
  });
});

// Methods
const toggleDropdown = () => {
  if (props.disabled) return;
  
  if (isOpen.value) {
    closeDropdown();
  } else {
    openDropdown();
  }
};

const openDropdown = async () => {
  if (props.disabled) return;
  
  isOpen.value = true;
  emit('open');
  
  await nextTick();
  
  if (props.searchable && searchInputRef.value) {
    searchInputRef.value.focus();
  }
  
  // Set initial focus to selected option or first option
  if (props.modelValue !== null && props.modelValue !== undefined) {
    const selectedValue = props.multiple && Array.isArray(props.modelValue) 
      ? props.modelValue[0] 
      : props.modelValue;
    const selectedIndex = filteredOptions.value.findIndex(option => 
      getOptionValue(option) === selectedValue
    );
    focusedIndex.value = selectedIndex >= 0 ? selectedIndex : 0;
  } else {
    focusedIndex.value = 0;
  }
};

const closeDropdown = () => {
  isOpen.value = false;
  searchQuery.value = '';
  hoveredIndex.value = -1;
  focusedIndex.value = -1;
  emit('close');
};

const selectOption = (option: Option) => {
  if (isOptionDisabled(option)) return;
  
  const value = getOptionValue(option);
  
  if (props.multiple) {
    const currentValues = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    
    if (currentValues.includes(value)) {
      // Remove value
      const newValues = currentValues.filter(v => v !== value);
      emit('update:modelValue', newValues);
      emit('change', newValues);
    } else {
      // Add value
      const newValues = [...currentValues, value];
      emit('update:modelValue', newValues);
      emit('change', newValues);
    }
  } else {
    emit('update:modelValue', value);
    emit('change', value);
    closeDropdown();
  }
};

// Event handlers
const onTriggerFocus = () => {
  // Focus styling is handled by CSS
};

const onTriggerBlur = (event: FocusEvent) => {
  // Don't close if focus is moving to dropdown content
  const relatedTarget = event.relatedTarget as Element;
  if (dropdownRef.value?.contains(relatedTarget)) {
    return;
  }
  
  setTimeout(() => {
    if (!selectRef.value?.contains(document.activeElement)) {
      closeDropdown();
    }
  }, 0);
};

const onKeyDown = (event: KeyboardEvent) => {
  if (props.disabled) return;
  
  switch (event.key) {
    case 'Enter':
    case ' ':
      if (!isOpen.value) {
        event.preventDefault();
        openDropdown();
      } else if (focusedIndex.value >= 0 && focusedIndex.value < filteredOptions.value.length) {
        event.preventDefault();
        selectOption(filteredOptions.value[focusedIndex.value]);
      }
      break;
      
    case 'Escape':
      if (isOpen.value) {
        event.preventDefault();
        closeDropdown();      }
      break;
      
    case 'ArrowDown':
      event.preventDefault();
      if (!isOpen.value) {
        openDropdown();
      } else if (filteredOptions.value.length > 0) {
        const newIndex = Math.min(focusedIndex.value + 1, filteredOptions.value.length - 1);
        if (newIndex !== focusedIndex.value) {
          focusedIndex.value = newIndex;
        }
      }
      break;
      
    case 'ArrowUp':
      event.preventDefault();
      if (isOpen.value && filteredOptions.value.length > 0) {
        const newIndex = Math.max(focusedIndex.value - 1, 0);
        if (newIndex !== focusedIndex.value) {
          focusedIndex.value = newIndex;
        }
      }
      break;
      
    case 'Home':
      if (isOpen.value && filteredOptions.value.length > 0) {
        event.preventDefault();
        if (focusedIndex.value !== 0) {
          focusedIndex.value = 0;
        }
      }
      break;
      
    case 'End':
      if (isOpen.value && filteredOptions.value.length > 0) {
        event.preventDefault();
        const lastIndex = filteredOptions.value.length - 1;
        if (focusedIndex.value !== lastIndex) {
          focusedIndex.value = lastIndex;
        }
      }
      break;
  }
};

// Click outside handler
const handleClickOutside = (event: Event) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    closeDropdown();
  }
};

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// Styles
const selectContainerStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  display: 'inline-block',
  width: width.fit,
}));

const triggerStyle = computed<CSSProperties>(() => {
  const size = props.size || 'medium';
  const isDark = theme.value === 'dark';
  
  let fontSize: string = typography.size['16px'];
  let paddingY: string = spacing['8px'];
  let paddingX: string = spacing['12px'];
  let minHeight: string = '40px';
  
  if (size === 'small') {
    paddingY = spacing['4px'];
    paddingX = spacing['8px'];
    fontSize = typography.size['14px'];
    minHeight = '32px';
  } else if (size === 'large') {
    paddingY = spacing['12px'];
    paddingX = spacing['16px'];
    fontSize = typography.size['18px'];
    minHeight = '48px';
  }
  
  const baseStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minWidth: '200px',
    minHeight,
    padding: `${paddingY} ${paddingX}`,
    fontSize,
    fontFamily: typography.family.sans,
    fontWeight: String(typography.weight['5']),
    lineHeight: String(typography.line['140%']),
    color: isDark ? color.neutral['10'].value : color.neutral['9'].value,
    backgroundColor: isDark ? color.neutral['2'].value : color.neutral['1'].value,
    border: `${border.width['1px']} ${border.style.solid} ${color.neutral['3'].value}`,
    borderRadius: cornerRadius['4px'],
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: transition.normal,
    outline: 'none',
    textAlign: 'left',
  };
  
  if (props.disabled) {
    baseStyle.opacity = String(opacity['64%']);
    baseStyle.backgroundColor = color.neutral['2'].value;
    baseStyle.color = color.neutral['6'].value;
  } else if (isOpen.value) {
    baseStyle.borderColor = color.primary['7'].value;
    baseStyle.boxShadow = `0 0 0 ${border.width['2px']} ${color.primary['5'].value}`;
  }
  
  return baseStyle;
});

const triggerContentStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: spacing['8px'],
}));

const selectedValueStyle = computed<CSSProperties>(() => ({
  flex: '1',
  minWidth: '0',
  overflow: 'hidden',
}));

const singleValueStyle = computed<CSSProperties>(() => ({
  display: 'block',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const multipleValueStyle = computed<CSSProperties>(() => ({
  display: 'block',
  color: color.primary['7'].value,
  fontWeight: String(typography.weight['6']),
}));

const placeholderStyle = computed<CSSProperties>(() => ({
  display: 'block',
  color: color.neutral['6'].value,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const chevronStyle = computed<CSSProperties>(() => ({
  transform: isOpen.value ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: transition.normal,
  flexShrink: '0',
}));

const dropdownStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  top: '100%',
  left: '0',
  right: '0',
  zIndex: String(zIndex['1000']),
  marginTop: spacing['4px'],
  backgroundColor: theme.value === 'dark' ? color.neutral['2'].value : color.neutral['1'].value,
  border: `${border.width['1px']} ${border.style.solid} ${color.neutral['3'].value}`,
  borderRadius: cornerRadius['4px'],
  boxShadow: `${shadow.size[2]} ${shadow.color.neutral}`,
  maxHeight: '200px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

const searchContainerStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  padding: spacing['8px'],
  borderBottom: `${border.width['1px']} ${border.style.solid} ${color.neutral['3'].value}`,
}));

const searchIconStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  left: spacing['16px'],
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
}));

const searchInputStyle = computed<CSSProperties>(() => ({
  width: '100%',
  padding: `${spacing['4px']} ${spacing['8px']} ${spacing['4px']} ${spacing['32px']}`,
  fontSize: typography.size['14px'],
  fontFamily: typography.family.sans,
  color: theme.value === 'dark' ? color.neutral['10'].value : color.neutral['9'].value,
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  '::placeholder': {
    color: color.neutral['6'].value,
  },
}));

const optionsListStyle = computed<CSSProperties>(() => ({
  flex: '1',
  overflowY: 'auto',
  padding: spacing['4px'],
}));

const getOptionStyle = (option: Option, index: number): CSSProperties => {
  const isSelected = isOptionSelected(option);
  const isHovered = hoveredIndex.value === index;
  const isFocused = focusedIndex.value === index;
  const isDisabled = isOptionDisabled(option);
  
  let backgroundColor = 'transparent';
  let textColor = theme.value === 'dark' ? color.neutral['10'].value : color.neutral['9'].value;
  
  if (isDisabled) {
    textColor = color.neutral['6'].value;
  } else if (isSelected) {
    backgroundColor = color.primary['2'].value;
    textColor = color.primary['8'].value;
  } else if (isHovered || isFocused) {
    backgroundColor = color.neutral['3'].value;
  }
  
  return {
    display: 'flex',
    alignItems: 'center',
    padding: `${spacing['8px']} ${spacing['12px']}`,
    fontSize: typography.size['14px'],
    fontFamily: typography.family.sans,
    color: textColor,
    backgroundColor,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: transition.fast,
    opacity: isDisabled ? String(opacity['64%']) : '1',
  };
};

const optionContentStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing['8px'],
  width: '100%',
}));

const checkIconStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
}));

const checkIconPlaceholderStyle = computed<CSSProperties>(() => ({
  width: '16px',
  height: '16px',
  flexShrink: '0',
}));

const optionLabelStyle = computed<CSSProperties>(() => ({
  flex: '1',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const noOptionsStyle = computed<CSSProperties>(() => ({
  padding: `${spacing['16px']} ${spacing['12px']}`,
  textAlign: 'center',
}));

const noOptionsTextStyle = computed<CSSProperties>(() => ({
  fontSize: typography.size['14px'],
  fontFamily: typography.family.sans,
  color: color.neutral['6'].value,
  fontStyle: 'italic',
}));
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
