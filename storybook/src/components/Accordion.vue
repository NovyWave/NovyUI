<template>
  <div :style="accordionStyle" role="region" :aria-label="ariaLabel">
    <AccordionItem
      v-for="(item, index) in items"
      :key="item.id || index"
      :item="item"
      :index="index"
      :size="size"
      :variant="variant"
      :show-icon="showIcon"
      :icon-position="iconPosition"
      :is-open="isItemOpen(item, index)"
      :disabled="disabled || !!item.disabled"
      @toggle="handleToggle"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, type CSSProperties } from 'vue';
import { spacing } from '../tokens';
import AccordionItem from './AccordionItem.vue';

export interface AccordionItemData {
  id?: string | number;
  title: string;
  content: string;
  disabled?: boolean;
  icon?: string;
}

type Size = 'small' | 'medium' | 'large';
type Variant = 'default' | 'bordered' | 'separated';
type IconPosition = 'left' | 'right';
type Type = 'single' | 'multiple';

const props = withDefaults(defineProps<{
  /**
   * Array of accordion items with title and content
   */
  items: AccordionItemData[];
  /**
   * Type of accordion - single allows only one open item, multiple allows many
   */
  type?: Type;
  /**
   * Size variant for the accordion
   */
  size?: Size;
  /**
   * Visual variant for the accordion
   */
  variant?: Variant;
  /**
   * Whether to show expand/collapse icons
   */
  showIcon?: boolean;
  /**
   * Position of the expand/collapse icon
   */
  iconPosition?: IconPosition;
  /**
   * Initially open items (array of indices or IDs)
   */
  defaultOpen?: (number | string)[];
  /**
   * Controlled open items (array of indices or IDs)
   */
  open?: (number | string)[];
  /**
   * Whether the entire accordion is disabled
   */
  disabled?: boolean;
  /**
   * Whether to allow collapsing all items in single mode
   */
  collapsible?: boolean;
  /**
   * Accessible label for the accordion region
   */
  ariaLabel?: string;
}>(), {
  type: 'single',
  size: 'medium',
  variant: 'default',
  showIcon: true,
  iconPosition: 'right',
  defaultOpen: () => [],
  collapsible: true,
  ariaLabel: 'Accordion',
});

const emit = defineEmits<{
  /**
   * Emitted when accordion items open/close state changes
   */
  'change': [openItems: (number | string)[]];
  /**
   * Emitted when a specific item is toggled
   */
  'toggle': [index: number, isOpen: boolean];
}>();

// State
const openItems = ref<(number | string)[]>([]);

// Helper function to check if an item is open (supports both ID and index)
const isItemOpen = (item: AccordionItemData, index: number): boolean => {
  const itemId = item.id;
  // Check if the item is open by either its ID or index
  return openItems.value.includes(itemId ?? index) ||
         (itemId !== undefined && openItems.value.includes(itemId)) ||
         openItems.value.includes(index);
};

// Helper function to convert between IDs and indices
const normalizeOpenItems = (items: (number | string)[]): (number | string)[] => {
  return items.map(item => {
    // If it's a string, try to find the corresponding index
    if (typeof item === 'string') {
      const foundIndex = props.items.findIndex(accordionItem => accordionItem.id === item);
      return foundIndex !== -1 ? item : item; // Keep the ID if found, otherwise keep as is
    }
    return item; // Keep numeric indices as is
  });
};

// Initialize open items
watch(() => props.open, (newOpen) => {
  if (newOpen !== undefined) {
    openItems.value = normalizeOpenItems([...newOpen]);
  }
}, { immediate: true });

watch(() => props.defaultOpen, (newDefaultOpen) => {
  if (props.open === undefined) {
    openItems.value = normalizeOpenItems([...newDefaultOpen]);
  }
}, { immediate: true });

// Handle item toggle
const handleToggle = (index: number) => {
  if (props.disabled) return;

  const item = props.items[index];
  const itemIdentifier = item.id ?? index;
  const isCurrentlyOpen = isItemOpen(item, index);
  let newOpenItems: (number | string)[];

  if (props.type === 'single') {
    if (isCurrentlyOpen) {
      // Close current item if collapsible is true
      newOpenItems = props.collapsible ? [] : [itemIdentifier];
    } else {
      // Open clicked item, close others
      newOpenItems = [itemIdentifier];
    }
  } else {
    // Multiple mode - toggle the clicked item
    if (isCurrentlyOpen) {
      // Remove both ID and index to ensure it's closed
      newOpenItems = openItems.value.filter(openItem =>
        openItem !== itemIdentifier && openItem !== index && openItem !== item.id
      );
    } else {
      newOpenItems = [...openItems.value, itemIdentifier];
    }
  }

  // Update open items if not controlled
  if (props.open === undefined) {
    openItems.value = newOpenItems;
  }

  emit('toggle', index, !isCurrentlyOpen);
  emit('change', newOpenItems);
};

// Styles
const accordionStyle = computed<CSSProperties>(() => {
  return {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: props.variant === 'separated' ? spacing['8px'] : '0',
  };
});
</script>
