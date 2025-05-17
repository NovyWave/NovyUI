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
  borderRadius: tokens.value.radii[props.radius || 2],
  border: props.bordered ? `${tokens.value.border[1]} solid ${tokens.value.color.border[2]}` : 'none',
  background: tokens.value.color.surface[1],
  color: tokens.value.color.neutral[12],
  fontSize: tokens.value.typography.size[3],
  overflow: 'hidden',
}));

const headerCellStyle = computed(() => ({
  background: tokens.value.color.primary[7],
  color: tokens.value.color.neutral[1],
  padding: tokens.value.spacing[3],
  fontWeight: tokens.value.typography.weight[2],
  borderBottom: `${tokens.value.border[1]} solid ${tokens.value.color.border[2]}`,
}));

const cellStyle = computed(() => ({
  padding: tokens.value.spacing[3],
  borderBottom: `${tokens.value.border[1]} solid ${tokens.value.color.border[2]}`,
  color: tokens.value.color.neutral[12],
  background: tokens.value.color.surface[1],
}));

function rowStyle(i: number) {
  return {
    background: props.striped && i % 2 === 0 ? tokens.value.color.surface[2] : tokens.value.color.surface[1],
  };
}
</script>
