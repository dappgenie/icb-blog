<template>
  <div class="relative rounded-lg overflow-hidden mb-8 h-56">
    <img :src="post.image || '/assets/blog-banner.webp'" :alt="post.title || 'Blog Banner'"
      class="w-full h-full object-cover">
    <div
      class="absolute inset-0 bg-gradient-to-t from-[#1a1065]/80 to-transparent backdrop-blur-sm bg-opacity-50 flex items-end">
      <div class="p-4 text-white">
        <div class="mb-2">
          <span class="bg-blue-500 text-xs font-medium px-2 py-1 rounded">{{ post.category || 'Cashback' }}</span>
        </div>
        <h2 class="text-2xl font-bold mb-1">
          {{ post.title || 'How to get cash back in an effective Way?' }}
        </h2>
        <div class="flex items-center space-x-2">
          <span class="text-sm">{{ post.date || new Date().toLocaleDateString() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: false,
    default: () => ({
      title: 'How to get cash back in an effective Way?',
      image: '/assets/blog-banner.webp',
      category: 'Cashback',
      date: new Date().toLocaleDateString(),
    }),
  },
})
</script>
