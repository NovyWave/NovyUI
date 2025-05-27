<template>
  <div :style="itemContainerStyle">
    <!-- Tree Item -->
    <div
      ref="itemRef"
      :style="itemStyle"
      role="treeitem"
      :aria-expanded="hasChildren ? isExpanded : undefined"
      :aria-selected="isSelected"
      :aria-level="level + 1"
      :aria-setsize="ariaSetSize"
      :aria-posinset="ariaPosInSet"
      :tabindex="isFocused ? 0 : -1"
      @click="handleClick"
      @keydown="handleKeydown"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <!-- Indentation -->
      <div :style="indentationStyle"></div>

      <!-- Expand/Collapse Button -->
      <button
        v-if="hasChildren"
        :style="expandButtonStyle"
        type="button"
        :disabled="disabled"
        :aria-hidden="true"
        @click.stop="handleToggle"
        tabindex="-1"
      >
        <Icon
          :name="isExpanded ? 'chevron-down' : 'chevron-right'"
          :width="iconSize"
          :height="iconSize"
          :color="expandIconColor"
        />
      </button>
      <div v-else :style="expandButtonPlaceholderStyle"></div>

      <!-- Checkbox -->
      <div
        v-if="showCheckboxes"
        :style="checkboxContainerStyle"
        @click.stop="handleSelect"
      >
        <input
          type="checkbox"
          :checked="isSelected"
          :disabled="disabled"
          :style="checkboxStyle"
          :aria-hidden="true"
          tabindex="-1"
        />
      </div>

      <!-- Icon -->
      <div v-if="showIcons" :style="iconContainerStyle">
        <Icon
          :name="itemIcon"
          :width="iconSize"
          :height="iconSize"
          :color="itemIconColor"
        />
      </div>

      <!-- Label -->
      <span :style="labelStyle">{{ item.label }}</span>
    </div>

    <!-- Children -->
    <div
      v-if="hasChildren && isExpanded"
      role="group"
      :style="childrenContainerStyle"
    >
      <TreeViewItem
        v-for="(child, index) in item.children"
        :key="child.id"
        :item="child"
        :level="level + 1"
        :size="size"
        :variant="variant"
        :show-icons="showIcons"
        :show-checkboxes="showCheckboxes"
        :expanded-items="expandedItems"
        :selected-items="selectedItems"
        :focused-item="focusedItem"
        :disabled="disabled || !!item.disabled"
        :aria-set-size="item.children?.length"
        :aria-pos-in-set="index + 1"
        @toggle="$emit('toggle', $event)"
        @select="$emit('select', $event)"
        @focus="$emit('focus', $event)"
        @keydown="$emit('keydown', $event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, nextTick, watch, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, typography } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';
import type { TreeViewItemData } from './TreeView.vue';

type Size = 'small' | 'medium' | 'large';
type Variant = 'basic' | 'bordered' | 'elevated';

const props = withDefaults(defineProps<{
  item: TreeViewItemData;
  level: number;
  size: Size;
  variant: Variant;
  showIcons: boolean;
  showCheckboxes: boolean;
  expandedItems: Set<string | number>;
  selectedItems: Set<string | number>;
  focusedItem: string | number | null;
  disabled: boolean;
  ariaSetSize?: number;
  ariaPosInSet?: number;
}>(), {
  ariaSetSize: 1,
  ariaPosInSet: 1,
});

const emit = defineEmits<{
  toggle: [itemId: string | number];
  select: [itemId: string | number];
  focus: [itemId: string | number];
  keydown: [event: KeyboardEvent];
}>();

// Refs
const itemRef = ref<HTMLDivElement>();
const focused = ref(false);

// Computed properties
const hasChildren = computed(() => !!(props.item.children && props.item.children.length > 0));
const isExpanded = computed(() => props.expandedItems.has(props.item.id));
const isSelected = computed(() => props.selectedItems.has(props.item.id));
const isFocused = computed(() => props.focusedItem === props.item.id);
const isDisabled = computed(() => props.disabled || !!props.item.disabled);

// Watch for focus changes to programmatically focus the element
watch(isFocused, async (newFocused) => {
  if (newFocused && itemRef.value) {
    await nextTick();
    itemRef.value.focus();
  }
});

// Icon configuration
const iconSize = computed(() => {
  if (props.size === 'small') return '16px';
  if (props.size === 'large') return '20px';
  return '18px';
});

const itemIcon = computed(() => {
  if (props.item.icon) return props.item.icon as IconToken;
  
  // Default icons based on type
  if (props.item.type === 'folder') {
    return 'folder';
  } else if (props.item.type === 'file') {
    return 'file';
  }
  
  // Default icon for items with children
  if (hasChildren.value) {
    return 'folder';
  }
  
  return 'file';
});

// Event handlers
const handleClick = () => {
  if (isDisabled.value) return;
  
  emit('focus', props.item.id);
  
  if (props.showCheckboxes) {
    handleSelect();
  } else if (hasChildren.value) {
    handleToggle();
  }
};

const handleToggle = () => {
  if (isDisabled.value || !hasChildren.value) return;
  emit('toggle', props.item.id);
};

const handleSelect = () => {
  if (isDisabled.value) return;
  emit('select', props.item.id);
};

const handleFocus = () => {
  focused.value = true;
  emit('focus', props.item.id);
};

const handleBlur = () => {
  focused.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event);
};

// Computed styles
const itemContainerStyle = computed<CSSProperties>(() => ({
  display: 'block',
  width: '100%',
}));

const itemStyle = computed<CSSProperties>(() => {
  const baseStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: spacing['4px'],
    cursor: isDisabled.value ? 'not-allowed' : 'pointer',
    outline: 'none',
    borderRadius: cornerRadius['4px'],
    transition: 'all 0.2s ease',
    position: 'relative',
    minHeight: props.size === 'small' ? '28px' : props.size === 'large' ? '40px' : '32px',
  };

  // Background and text color
  if (isSelected.value) {
    baseStyles.backgroundColor = color.primary[2].value;
    baseStyles.color = color.primary[11].value;
  } else if (isFocused.value || focused.value) {
    baseStyles.backgroundColor = color.neutral[2].value;
    baseStyles.color = color.neutral[11].value;
  } else {
    baseStyles.backgroundColor = 'transparent';
    baseStyles.color = isDisabled.value ? color.neutral[7].value : color.neutral[11].value;
  }
  // Focus ring
  if (isFocused.value) {
    baseStyles.boxShadow = `0 0 0 2px ${color.primary[7].value}`;
  }

  return baseStyles;
});

const indentationStyle = computed<CSSProperties>(() => ({
  width: `${props.level * 20}px`,
  flexShrink: 0,
}));

const expandButtonStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  border: 'none',
  background: 'transparent',
  cursor: isDisabled.value ? 'not-allowed' : 'pointer',
  borderRadius: cornerRadius['2px'],
  marginRight: spacing['4px'],
  flexShrink: 0,
  opacity: isDisabled.value ? 0.5 : 1,
}));

const expandButtonPlaceholderStyle = computed<CSSProperties>(() => ({
  width: '20px',
  height: '20px',
  marginRight: spacing['4px'],
  flexShrink: 0,
}));

const expandIconColor = computed(() => {
  if (isDisabled.value) return color.neutral[7].value;
  return color.neutral[9].value;
});

const checkboxContainerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: spacing['8px'],
  flexShrink: 0,
}));

const checkboxStyle = computed<CSSProperties>(() => ({
  width: '16px',
  height: '16px',
  cursor: isDisabled.value ? 'not-allowed' : 'pointer',
  opacity: isDisabled.value ? 0.5 : 1,
}));

const iconContainerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: spacing['8px'],
  flexShrink: 0,
}));

const itemIconColor = computed(() => {
  if (isDisabled.value) return color.neutral[7].value;
  if (isSelected.value) return color.primary[11].value;
  
  // Special colors for different types
  if (props.item.type === 'folder') {
    return color.warning[7].value; // Yellow/orange for folders
  } else if (props.item.type === 'file') {
    return color.neutral[9].value;
  }
  
  return color.primary[7].value;
});

const labelStyle = computed<CSSProperties>(() => ({
  flex: 1,
  fontSize: props.size === 'small' ? typography.size['14px'] : props.size === 'large' ? typography.size['16px'] : typography.size['16px'],
  lineHeight: '1.4',
  fontWeight: typography.weight['4'],
  color: 'inherit',
  userSelect: 'none',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

const childrenContainerStyle = computed<CSSProperties>(() => ({
  display: 'block',
}));
</script>
