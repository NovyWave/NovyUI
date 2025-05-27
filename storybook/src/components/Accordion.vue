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
      :is-open="openItems.includes(index)"
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
   * Initially open items (array of indices)
   */
  defaultOpen?: number[];
  /**
   * Controlled open items (array of indices)
   */
  open?: number[];
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
  'change': [openItems: number[]];
  /**
   * Emitted when a specific item is toggled
   */
  'toggle': [index: number, isOpen: boolean];
}>();

// State
const openItems = ref<number[]>([]);

// Initialize open items
watch(() => props.open, (newOpen) => {
  if (newOpen !== undefined) {
    openItems.value = [...newOpen];
  }
}, { immediate: true });

watch(() => props.defaultOpen, (newDefaultOpen) => {
  if (props.open === undefined) {
    openItems.value = [...newDefaultOpen];
  }
}, { immediate: true });

// Handle item toggle
const handleToggle = (index: number) => {
  if (props.disabled) return;

  const isCurrentlyOpen = openItems.value.includes(index);
  let newOpenItems: number[];

  if (props.type === 'single') {
    if (isCurrentlyOpen) {
      // Close current item if collapsible is true
      newOpenItems = props.collapsible ? [] : [index];
    } else {
      // Open clicked item, close others
      newOpenItems = [index];
    }
  } else {
    // Multiple mode - toggle the clicked item
    if (isCurrentlyOpen) {
      newOpenItems = openItems.value.filter(item => item !== index);
    } else {
      newOpenItems = [...openItems.value, index];
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
