<template>
  <div class="mb-8 bg-white rounded-lg p-4">
    <h3 class="text-sm text-primary font-semibold mb-3">
      Categories
    </h3>
    <div class="flex flex-wrap gap-2">
      <div
        v-for="category in categories"
        :key="category.id"
        :class="[
          'border rounded-full px-3 py-1 text-xs cursor-pointer transition-colors duration-200',
          isSelected(category.id)
            ? 'bg-primary text-white border-primary'
            : 'bg-white border-gray-200 hover:bg-gray-100'
        ]"
        @click="toggleCategory(category.id)"
      >
        {{ category.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define category interface
interface Category {
  id: string
  label: string
}

const props = defineProps({
  categories: {
    type: Array as () => Category[],
    required: false,
    default: () => [],
  },
  modelValue: {
    type: Array as () => string[],
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

// Check if a category is selected
const isSelected = (categoryId: string): boolean => {
  return props.modelValue.includes(categoryId)
}

// Toggle category selection
const toggleCategory = (categoryId: string): void => {
  const selectedCategories = [...props.modelValue]
  const index = selectedCategories.indexOf(categoryId)
  
  if (index === -1) {
    selectedCategories.push(categoryId)
  } else {
    selectedCategories.splice(index, 1)
  }
  
  emit('update:modelValue', selectedCategories)
}
</script>
