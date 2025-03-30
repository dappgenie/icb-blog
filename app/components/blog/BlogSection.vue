<template>
  <div class="mb-8 bg-white rounded-lg p-4">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-sm text-primary font-semibold">
        {{ title }}
      </h3>
      <button
        class="text-xs px-3 py-2 bg-white shadow-md rounded-md font-semibold flex items-center hover:bg-gray-100 cursor-pointer"
        @click="$emit('seeAll')">
        See All
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Cards grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <BlogCard v-for="(article, index) in articles.slice(0, maxItems)" :key="index"
        :article="article as Record<string, any>" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogCard from './BlogCard.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  articles: {
    type: Array,
    required: true,
    default: () => [],
  },
  maxItems: {
    type: Number,
    default: 5,
  },
})

defineEmits(['seeAll'])
</script>
