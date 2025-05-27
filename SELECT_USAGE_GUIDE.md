# Select Component Usage Guide

## The Issue

The Select component was working correctly, but the problem was in how it was being used in parent components. The main issues were:

1. **Improper v-model binding**: Some examples were passing `modelValue` as a static prop instead of using proper two-way binding
2. **Template formatting**: There was a formatting issue in the template that could cause rendering problems
3. **Missing reactive references**: Parent components weren't creating reactive references for the selected values

## The Fix

### 1. Fixed Template Formatting

```vue
<!-- BEFORE (problematic formatting) -->
</template>          <template v-else-if="...">

<!-- AFTER (proper formatting) -->
</template>
<template v-else-if="...">
```

### 2. Proper v-model Usage

The Select component should always be used with proper v-model binding:

```vue
<template>
  <Select 
    v-model="selectedValue"
    :options="options"
    placeholder="Choose an option..."
  />
</template>

<script setup>
import { ref } from 'vue'

const selectedValue = ref(null) // For single selection
const multipleValues = ref([]) // For multiple selection

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]
</script>
```

### 3. Avoid Common Mistakes

#### ❌ Wrong - Static prop binding
```vue
<Select :modelValue="someStaticValue" :options="options" />
```

#### ❌ Wrong - Missing reactive ref
```vue
<script setup>
let selectedValue = null // Not reactive!
</script>
```

#### ✅ Correct - Proper v-model with reactive ref
```vue
<template>
  <Select v-model="selectedValue" :options="options" />
</template>

<script setup>
import { ref } from 'vue'
const selectedValue = ref(null) // Reactive!
</script>
```

## Testing the Fix

You can test the component with different scenarios:

### Single Selection
```vue
<template>
  <Select v-model="fruit" :options="fruits" placeholder="Choose a fruit" />
  <p>Selected: {{ fruit }}</p>
</template>

<script setup>
import { ref } from 'vue'
const fruit = ref(null)
const fruits = ['Apple', 'Banana', 'Cherry']
</script>
```

### Multiple Selection
```vue
<template>
  <Select 
    v-model="selectedFruits" 
    :options="fruits" 
    :multiple="true"
    placeholder="Choose fruits" 
  />
  <p>Selected: {{ selectedFruits.join(', ') }}</p>
</template>

<script setup>
import { ref } from 'vue'
const selectedFruits = ref([])
const fruits = ['Apple', 'Banana', 'Cherry']
</script>
```

### Object Options
```vue
<template>
  <Select v-model="language" :options="languages" placeholder="Choose a language" />
  <p>Selected: {{ language }}</p>
</template>

<script setup>
import { ref } from 'vue'
const language = ref(null)
const languages = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' },
]
</script>
```

## Events

The component emits the following events:
- `update:modelValue` - When the selection changes (for v-model)
- `change` - When the selection changes (alternative event)
- `open` - When the dropdown opens
- `close` - When the dropdown closes

You can listen to these events:

```vue
<template>
  <Select 
    v-model="selectedValue"
    :options="options"
    @change="onSelectionChange"
    @open="onOpen"
    @close="onClose"
  />
</template>

<script setup>
const onSelectionChange = (newValue) => {
  console.log('Selection changed:', newValue)
}

const onOpen = () => {
  console.log('Dropdown opened')
}

const onClose = () => {
  console.log('Dropdown closed')
}
</script>
```

## Summary

The Select component was already working correctly internally. The issues were:
1. A template formatting problem (fixed)
2. Incorrect usage patterns in examples and stories (fixed)
3. Missing reactive references in parent components

After these fixes, clicking an option will properly select it and the selection will be remembered as expected.
