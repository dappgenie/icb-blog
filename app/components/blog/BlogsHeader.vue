<template>
  <div class="rounded-lg flex justify-between items-center w-full h-12">
    <div
      class="text-base text-left w-[30%] max-w-[250px] font-semibold bg-primary h-full flex items-center text-white px-4 rounded-b-sm">
      {{ title }}
    </div>
    <!-- Search input for blogs -->
    <div class="mr-4">
      <SearchBar @search="$emit('search', $event)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue'

defineProps({
  title: {
    type: String,
    default: 'Blogs',
  },
})

defineEmits(['search'])
</script>
