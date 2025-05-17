<template>
  <table :style="tableStyle">
    <thead>
      <tr>
        <th :style="headerCellStyle">Header 1</th>
        <th :style="headerCellStyle">Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 3" :key="i" :style="rowStyle(i)">
        <td :style="cellStyle">Row {{ i }} Col 1</td>
        <td :style="cellStyle">Row {{ i }} Col 2</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tokens } from '../tokens';

const props = defineProps<{
  striped?: boolean,
  bordered?: boolean,
  radius?: 1 | 2 | 3 | 4 | 'full',
}>();

const tableStyle = computed(() => ({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  borderRadius: tokens.radii[props.radius || 2],
  border: props.bordered ? `${tokens.border[1]} solid ${tokens.color.border.default}` : 'none',
  background: tokens.color.bg.default,
  color: tokens.color.text.default,
  fontSize: tokens.font.size3,
  overflow: 'hidden',
}));

const headerCellStyle = computed(() => ({
  background: tokens.color.bg.subtle,
  color: tokens.color.text.default,
  padding: tokens.spacing[3],
  fontWeight: tokens.font.weight2,
  borderBottom: `${tokens.border[1]} solid ${tokens.color.border.default}`,
}));

const cellStyle = computed(() => ({
  padding: tokens.spacing[3],
  borderBottom: `${tokens.border[1]} solid ${tokens.color.border.muted}`,
}));

const rowStyle = (i: number) => ({
  background: props.striped && i % 2 === 0 ? tokens.color.bg.muted : 'transparent',
});
</script>
