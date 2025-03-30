<template>
  <div class="relative">
    <input type="text" :placeholder="placeholder" v-model="searchQuery"
      class="w-full bg-white rounded-lg shadow-md py-1.5 pl-4 text-sm pr-10 focus:border-primary focus:outline-none"
      @input="onSearch">
    <button class="absolute right-2 top-1/2 transform -translate-y-1/2">
      <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  placeholder: {
    type: String,
    default: 'Search Blogs'
  },
})

const emit = defineEmits(['search'])
const searchQuery = ref('')

const onSearch = () => {
  emit('search', searchQuery.value)
}
</script>
