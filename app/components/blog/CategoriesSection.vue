<template>
  <div class="mb-8 bg-white rounded-lg p-4">
    <h3 class="text-sm text-primary font-semibold mb-3">
      Categories
    </h3>
    <div class="flex flex-wrap gap-2">
      <div v-for="category in categories" :key="category.id"
        class="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs hover:bg-gray-100 cursor-pointer">
        {{ category.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>
