<template>
  <div class="mb-8 bg-white rounded-lg p-4">
    <h3 class="text-sm text-primary font-semibold mb-3">
      Categories
    </h3>
    <div class="flex flex-wrap gap-2">
      <!-- Show visible categories -->
      <div
        v-for="category in visibleCategories"
        :key="category.id"
        :class="[
          'border rounded-full px-3 py-1 text-xs cursor-pointer transition-colors duration-200',
          isSelected(category.id)
            ? 'bg-primary text-white border-primary'
            : 'bg-white border-gray-200 hover:bg-gray-100',
        ]"
        @click="toggleCategory(category.id)"
      >
        {{ category.label }}
      </div>

      <!-- Show More button -->
      <div
        v-if="hasMoreCategories"
        :class="[
          'border rounded-full px-3 py-1 text-xs cursor-pointer transition-colors duration-200',
          'bg-gray-50 border-primary hover:bg-primary/20 text-primary',
        ]"
        @click="toggleShowAll"
      >
        {{ showAll ? 'Show Less' : `+ ${remainingCount} More` }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

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

// State for showing all categories
const showAll = ref(false)

// Reactive screen width
const screenWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

// Update screen width on resize
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
}

// Set up resize listener
onMounted(() => {
  if (typeof window !== 'undefined') {
    screenWidth.value = window.innerWidth
    window.addEventListener('resize', updateScreenWidth)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateScreenWidth)
  }
})

// Get current screen size limit based on screen width
const currentLimit = computed(() => {
  if (screenWidth.value >= 1024) {
    return 20 // lg
  }
  if (screenWidth.value >= 768) {
    return 15 // md
  }
  return 10 // mobile
})

// Computed properties for category display
const visibleCategories = computed(() => {
  if (showAll.value) {
    return props.categories
  }
  return props.categories.slice(0, currentLimit.value)
})

const hasMoreCategories = computed(() => {
  return props.categories.length > currentLimit.value
})

const remainingCount = computed(() => {
  return Math.max(0, props.categories.length - currentLimit.value)
})

// Toggle show all categories
const toggleShowAll = () => {
  showAll.value = !showAll.value
}

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
  }
  else {
    selectedCategories.splice(index, 1)
  }

  emit('update:modelValue', selectedCategories)
}
</script>
