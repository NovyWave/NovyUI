<template>
  <div 
    :style="treeViewStyle" 
    role="tree"
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledBy"
    @keydown="handleTreeKeydown"
  >
    <TreeViewItem
      v-for="(item, index) in data"
      :key="item.id || index"
      :item="item"
      :level="0"
      :size="size"
      :variant="variant"
      :show-icons="showIcons"
      :show-checkboxes="showCheckboxes"
      :expanded-items="expandedItems"
      :selected-items="selectedItems"
      :focused-item="focusedItem"
      :disabled="disabled"
      @toggle="handleToggle"
      @select="handleSelect"
      @focus="handleItemFocus"
      @keydown="handleItemKeydown"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, type CSSProperties } from 'vue';
import { color, spacing, border, cornerRadius } from '../tokens';
import TreeViewItem from './TreeViewItem.vue';

export interface TreeViewItemData {
  id: string | number;
  label: string;
  children?: TreeViewItemData[];
  icon?: string;
  disabled?: boolean;
  type?: 'folder' | 'file' | 'default';
}

type Size = 'small' | 'medium' | 'large';
type Variant = 'basic' | 'bordered' | 'elevated';

const props = withDefaults(defineProps<{
  /**
   * Hierarchical data to display in the tree
   */
  data: TreeViewItemData[];
  /**
   * Size variant for the tree view
   */
  size?: Size;
  /**
   * Visual variant for the tree view
   */
  variant?: Variant;
  /**
   * Whether to show icons for items
   */
  showIcons?: boolean;
  /**
   * Whether to show checkboxes for selection
   */
  showCheckboxes?: boolean;
  /**
   * Initially expanded items (by id)
   */
  defaultExpanded?: (string | number)[];
  /**
   * Initially selected items (by id)
   */
  defaultSelected?: (string | number)[];
  /**
   * Whether the entire tree is disabled
   */
  disabled?: boolean;
  /**
   * ARIA label for the tree
   */
  ariaLabel?: string;
  /**
   * ARIA labelledby for the tree
   */
  ariaLabelledBy?: string;
}>(), {
  size: 'medium',
  variant: 'basic',
  showIcons: true,
  showCheckboxes: false,
  disabled: false,
  defaultExpanded: () => [],
  defaultSelected: () => [],
});

const emit = defineEmits<{
  /**
   * Emitted when an item is expanded or collapsed
   */
  expand: [itemId: string | number, expanded: boolean];
  /**
   * Emitted when an item is selected
   */
  select: [itemId: string | number, selected: boolean];
  /**
   * Emitted when an item receives focus
   */
  focus: [itemId: string | number];
}>();

// Reactive state
const expandedItems = ref(new Set(props.defaultExpanded));
const selectedItems = ref(new Set(props.defaultSelected));
const focusedItem = ref<string | number | null>(null);

// Watch for prop changes
watch(() => props.defaultExpanded, (newExpanded) => {
  expandedItems.value = new Set(newExpanded);
}, { immediate: true });

watch(() => props.defaultSelected, (newSelected) => {
  selectedItems.value = new Set(newSelected);
}, { immediate: true });

// Get all visible items for keyboard navigation
const getVisibleItems = (items: TreeViewItemData[], level = 0): Array<{ item: TreeViewItemData; level: number }> => {
  const result: Array<{ item: TreeViewItemData; level: number }> = [];
  
  for (const item of items) {
    result.push({ item, level });
    
    if (item.children && expandedItems.value.has(item.id)) {
      result.push(...getVisibleItems(item.children, level + 1));
    }
  }
  
  return result;
};

const visibleItems = computed(() => getVisibleItems(props.data));

// Event handlers
const handleToggle = (itemId: string | number) => {
  const isExpanded = expandedItems.value.has(itemId);
  if (isExpanded) {
    expandedItems.value.delete(itemId);
  } else {
    expandedItems.value.add(itemId);
  }
  emit('expand', itemId, !isExpanded);
};

const handleSelect = (itemId: string | number) => {
  const isSelected = selectedItems.value.has(itemId);
  if (isSelected) {
    selectedItems.value.delete(itemId);
  } else {
    selectedItems.value.add(itemId);
  }
  emit('select', itemId, !isSelected);
};

const handleItemFocus = (itemId: string | number) => {
  focusedItem.value = itemId;
  emit('focus', itemId);
};

// Keyboard navigation
const handleTreeKeydown = (event: KeyboardEvent) => {
  // Only handle if no specific item is focused
  if (focusedItem.value === null && visibleItems.value.length > 0) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      focusedItem.value = visibleItems.value[0].item.id;
      emit('focus', focusedItem.value);
    }
  }
};

const handleItemKeydown = (event: KeyboardEvent) => {
  if (focusedItem.value === null) return;

  const currentIndex = visibleItems.value.findIndex(({ item }) => item.id === focusedItem.value);
  if (currentIndex === -1) return;

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      if (currentIndex < visibleItems.value.length - 1) {
        const nextItem = visibleItems.value[currentIndex + 1];
        focusedItem.value = nextItem.item.id;
        emit('focus', nextItem.item.id);
      }
      break;

    case 'ArrowUp':
      event.preventDefault();
      if (currentIndex > 0) {
        const prevItem = visibleItems.value[currentIndex - 1];
        focusedItem.value = prevItem.item.id;
        emit('focus', prevItem.item.id);
      }
      break;

    case 'ArrowRight':
      event.preventDefault();
      const currentItem = visibleItems.value[currentIndex].item;
      if (currentItem.children && currentItem.children.length > 0) {
        if (!expandedItems.value.has(currentItem.id)) {
          handleToggle(currentItem.id);
        } else {
          // Move to first child
          const nextIndex = currentIndex + 1;
          if (nextIndex < visibleItems.value.length) {
            const nextItem = visibleItems.value[nextIndex];
            focusedItem.value = nextItem.item.id;
            emit('focus', nextItem.item.id);
          }
        }
      }
      break;

    case 'ArrowLeft':
      event.preventDefault();
      const item = visibleItems.value[currentIndex].item;
      if (item.children && expandedItems.value.has(item.id)) {
        handleToggle(item.id);
      } else {
        // Move to parent
        const currentLevel = visibleItems.value[currentIndex].level;
        for (let i = currentIndex - 1; i >= 0; i--) {
          if (visibleItems.value[i].level < currentLevel) {
            focusedItem.value = visibleItems.value[i].item.id;
            emit('focus', visibleItems.value[i].item.id);
            break;
          }
        }
      }
      break;

    case 'Enter':
    case ' ':
      event.preventDefault();
      const focusedItemData = visibleItems.value[currentIndex].item;
      if (props.showCheckboxes) {
        handleSelect(focusedItemData.id);
      } else if (focusedItemData.children) {
        handleToggle(focusedItemData.id);
      }
      break;

    case 'Home':
      event.preventDefault();
      if (visibleItems.value.length > 0) {
        focusedItem.value = visibleItems.value[0].item.id;
        emit('focus', focusedItem.value);
      }
      break;

    case 'End':
      event.preventDefault();
      if (visibleItems.value.length > 0) {
        const lastItem = visibleItems.value[visibleItems.value.length - 1];
        focusedItem.value = lastItem.item.id;
        emit('focus', lastItem.item.id);
      }
      break;
  }
};

// Computed styles
const treeViewStyle = computed<CSSProperties>(() => {
  const baseStyles: CSSProperties = {
    background: color.neutral[1].value,
    color: color.neutral[11].value,
    fontSize: props.size === 'small' ? '14px' : props.size === 'large' ? '16px' : '15px',
    fontFamily: 'system-ui, sans-serif',
    outline: 'none',
    width: '100%',
  };

  if (props.variant === 'bordered') {
    baseStyles.border = `${border.width['1px']} ${border.style.solid} ${color.neutral[4].value}`;
    baseStyles.borderRadius = cornerRadius['4px'];
    baseStyles.padding = spacing['8px'];
  } else if (props.variant === 'elevated') {
    baseStyles.boxShadow = `0 1px 3px ${color.neutral[9].value}20`;
    baseStyles.borderRadius = cornerRadius['8px'];
    baseStyles.padding = spacing['8px'];
  }

  return baseStyles;
});

// Expose methods for external control
defineExpose({
  expandAll: () => {
    const getAllIds = (items: TreeViewItemData[]): (string | number)[] => {
      const ids: (string | number)[] = [];
      for (const item of items) {
        if (item.children) {
          ids.push(item.id);
          ids.push(...getAllIds(item.children));
        }
      }
      return ids;
    };
    expandedItems.value = new Set(getAllIds(props.data));
  },
  collapseAll: () => {
    expandedItems.value.clear();
  },
  selectAll: () => {
    const getAllIds = (items: TreeViewItemData[]): (string | number)[] => {
      const ids: (string | number)[] = [];
      for (const item of items) {
        ids.push(item.id);
        if (item.children) {
          ids.push(...getAllIds(item.children));
        }
      }
      return ids;
    };
    selectedItems.value = new Set(getAllIds(props.data));
  },
  clearSelection: () => {
    selectedItems.value.clear();
  },
  getExpandedItems: () => Array.from(expandedItems.value),
  getSelectedItems: () => Array.from(selectedItems.value),
});
</script>
