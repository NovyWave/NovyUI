<template>
  <component
    :is="ordered ? 'ol' : 'ul'"
    :style="listStyle"
    :role="role"
  >
    <li
      v-for="(item, index) in items"
      :key="getItemKey(item, index)"
      :style="getItemStyle(item, index)"
      :class="getItemClass(item)"
      @click="onItemClick(item, index)"
    >
      <!-- Item Content -->
      <div :style="itemContentStyle">
        <!-- Leading Icon/Avatar -->
        <div v-if="hasLeadingContent(item)" :style="leadingContentStyle">
          <Icon
            v-if="item.icon"
            :name="item.icon"
            :width="iconSize"
            :height="iconSize"
            :color="getIconColor(item)"
            :aria-hidden="true"
          />
          <img
            v-else-if="item.avatar"
            :src="item.avatar"
            :alt="item.avatarAlt || ''"
            :style="avatarStyle"
          />
          <span
            v-else-if="item.badge"
            :style="badgeStyle"
          >
            {{ item.badge }}
          </span>
        </div>

        <!-- Main Content -->
        <div :style="mainContentStyle">
          <!-- Primary Text -->
          <div :style="primaryTextStyle">
            {{ item.primary || item.text || item.label }}
          </div>

          <!-- Secondary Text -->
          <div
            v-if="item.secondary"
            :style="secondaryTextStyle"
          >
            {{ item.secondary }}
          </div>

          <!-- Description -->
          <div
            v-if="item.description"
            :style="descriptionStyle"
          >
            {{ item.description }}
          </div>
        </div>

        <!-- Trailing Content -->
        <div v-if="hasTrailingContent(item)" :style="trailingContentStyle">
          <Icon
            v-if="item.trailingIcon"
            :name="item.trailingIcon"
            :width="iconSize"
            :height="iconSize"
            :color="getIconColor(item)"
            :aria-hidden="true"
          />
          <span
            v-else-if="item.trailingText"
            :style="trailingTextStyle"
          >
            {{ item.trailingText }}
          </span>
          <button
            v-else-if="item.action"
            :style="actionButtonStyle"
            :aria-label="item.actionLabel || 'Action'"
            type="button"
            @click.stop="onActionClick(item, index)"
          >
            <Icon
              :name="item.actionIcon || 'more-horizontal'"
              :width="iconSize"
              :height="iconSize"
              :color="getIconColor(item)"
              :aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <!-- Divider -->
      <div
        v-if="showDividers && index < items.length - 1"
        :style="dividerStyle"
      />
    </li>
  </component>
</template>

<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue';
import { color, spacing, typography, cornerRadius, border, useTheme } from '../tokens';
import type { IconToken } from '../tokens';
import Icon from './Icon.vue';

export interface ListItem {
  id?: string | number;
  primary?: string;
  text?: string;
  label?: string;
  secondary?: string;
  description?: string;
  icon?: IconToken;
  avatar?: string;
  avatarAlt?: string;
  badge?: string | number;
  trailingIcon?: IconToken;
  trailingText?: string;
  action?: boolean;
  actionIcon?: IconToken;
  actionLabel?: string;
  disabled?: boolean;
  selected?: boolean;
  href?: string;
  target?: string;
}

type Size = 'small' | 'medium' | 'large';
type Variant = 'default' | 'bordered' | 'divided';

const props = withDefaults(defineProps<{
  items: ListItem[];
  size?: Size;
  variant?: Variant;
  ordered?: boolean;
  interactive?: boolean;
  showDividers?: boolean;
  role?: string;
}>(), {
  size: 'medium',
  variant: 'default',
  ordered: false,
  interactive: false,
  showDividers: false,
});

const emit = defineEmits<{
  'item-click': [item: ListItem, index: number];
  'action-click': [item: ListItem, index: number];
}>();

const theme = useTheme();

// Size configuration
const sizeConfig = computed(() => {
  const size = props.size;

  if (size === 'small') {
    return {
      padding: spacing['8px'],
      iconSize: '16px',
      avatarSize: '24px',
      primaryFontSize: typography.size['14px'],
      secondaryFontSize: typography.size['12px'],
      gap: spacing['8px'],
    };
  } else if (size === 'large') {
    return {
      padding: spacing['16px'],
      iconSize: '20px',
      avatarSize: '40px',
      primaryFontSize: typography.size['18px'],
      secondaryFontSize: typography.size['16px'],
      gap: spacing['16px'],
    };
  } else {
    return {
      padding: spacing['12px'],
      iconSize: '18px',
      avatarSize: '32px',
      primaryFontSize: typography.size['16px'],
      secondaryFontSize: typography.size['14px'],
      gap: spacing['12px'],
    };
  }
});

// Computed styles
const iconSize = computed(() => sizeConfig.value.iconSize);

const listStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  let borderStyle = 'none';
  let borderRadius = '0';
  let backgroundColor = 'transparent';

  if (props.variant === 'bordered') {
    borderStyle = `${border.width['1px']} ${border.style.solid} ${color.neutral['4'].value}`;
    borderRadius = cornerRadius['8px'];
    backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
  }

  return {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    border: borderStyle,
    borderRadius,
    backgroundColor,
    fontFamily: typography.family.sans,
  };
});

const getItemStyle = (item: ListItem, index: number): CSSProperties => {
  const isDark = theme.value === 'dark';
  let backgroundColor = 'transparent';
  let cursor = 'default';

  if (props.interactive || item.href) {
    cursor = 'pointer';
  }

  if (item.selected) {
    backgroundColor = isDark ? color.primary['2'].value : color.primary['1'].value;
  }

  if (item.disabled) {
    cursor = 'not-allowed';
    opacity: '0.5';
  }

  return {
    position: 'relative',
    padding: sizeConfig.value.padding,
    backgroundColor,
    cursor,
    transition: 'background-color 0.15s ease',
    ':hover': props.interactive && !item.disabled ? {
      backgroundColor: isDark ? color.neutral['3'].value : color.neutral['2'].value,
    } : {},
  };
};

const itemContentStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: sizeConfig.value.gap,
  width: '100%',
}));

const leadingContentStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const mainContentStyle = computed<CSSProperties>(() => ({
  flex: '1',
  minWidth: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: spacing['4px'],
}));

const trailingContentStyle = computed<CSSProperties>(() => ({
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
}));

const primaryTextStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.primaryFontSize,
    fontWeight: String(typography.weight['5']),
    lineHeight: String(typography.line['140%']),
    color: isDark ? color.neutral['11'].value : color.neutral['9'].value,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
});

const secondaryTextStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.secondaryFontSize,
    fontWeight: String(typography.weight['4']),
    lineHeight: String(typography.line['140%']),
    color: isDark ? color.neutral['8'].value : color.neutral['7'].value,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
});

const descriptionStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.secondaryFontSize,
    fontWeight: String(typography.weight['4']),
    lineHeight: String(typography.line['160%']),
    color: isDark ? color.neutral['7'].value : color.neutral['6'].value,
    whiteSpace: 'normal',
  };
});

const avatarStyle = computed<CSSProperties>(() => ({
  width: sizeConfig.value.avatarSize,
  height: sizeConfig.value.avatarSize,
  borderRadius: cornerRadius['50%'],
  objectFit: 'cover',
}));

const badgeStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: sizeConfig.value.avatarSize,
    height: sizeConfig.value.avatarSize,
    fontSize: typography.size['12px'],
    fontWeight: String(typography.weight['6']),
    color: color.neutral['1'].value,
    backgroundColor: color.primary['7'].value,
    borderRadius: cornerRadius['50%'],
  };
});

const trailingTextStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.secondaryFontSize,
    fontWeight: String(typography.weight['4']),
    color: isDark ? color.neutral['8'].value : color.neutral['7'].value,
  };
});

const actionButtonStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing['4px'],
  border: 'none',
  background: 'transparent',
  borderRadius: cornerRadius['4px'],
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  ':hover': {
    backgroundColor: color.neutral['3'].value,
  },
}));

const dividerStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  bottom: '0',
  left: sizeConfig.value.padding,
  right: sizeConfig.value.padding,
  height: border.width['1px'],
  backgroundColor: color.neutral['4'].value,
}));

// Helper functions
const getItemKey = (item: ListItem, index: number): string | number => {
  return item.id ?? index;
};

const getItemClass = (item: ListItem): string => {
  const classes = [];
  if (item.disabled) classes.push('disabled');
  if (item.selected) classes.push('selected');
  return classes.join(' ');
};

const hasLeadingContent = (item: ListItem): boolean => {
  return !!(item.icon || item.avatar || item.badge);
};

const hasTrailingContent = (item: ListItem): boolean => {
  return !!(item.trailingIcon || item.trailingText || item.action);
};

const getIconColor = (item: ListItem): string => {
  const isDark = theme.value === 'dark';

  if (item.disabled) {
    return color.neutral['5'].value;
  }

  if (item.selected) {
    return color.primary['7'].value;
  }

  return isDark ? color.neutral['8'].value : color.neutral['7'].value;
};

// Event handlers
const onItemClick = (item: ListItem, index: number) => {
  if (item.disabled) return;

  if (item.href) {
    if (item.target === '_blank') {
      window.open(item.href, '_blank');
    } else {
      window.location.href = item.href;
    }
  }

  emit('item-click', item, index);
};

const onActionClick = (item: ListItem, index: number) => {
  if (item.disabled) return;
  emit('action-click', item, index);
};
</script>
