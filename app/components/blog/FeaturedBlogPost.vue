<template>
  <div class="relative rounded-lg overflow-hidden mb-8 h-56">
    <img
      :src="post.image || '/assets/blog-banner.webp'"
      :alt="post.title || 'Blog Banner'"
      class="w-full h-full object-cover"
    >
    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-end">
      <div class="p-4 text-white">
        <div class="mb-2">
          <span class="bg-blue-500 text-xs font-medium px-2 py-1 rounded">{{ post.category || 'Cashback' }}</span>
        </div>
        <h2 class="text-2xl font-bold mb-1">
          {{ post.title || 'How to get cash back in an effective Way?' }}
        </h2>
        <div class="flex items-center space-x-2">
          <img
            :src="post.authorImage || 'https://e7.pngegg.com/pngimages/178/419/png-clipart-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-thumbnail.png'"
            :alt="post.author || 'Author'"
            class="w-8 h-8 rounded-full"
          >
          <span class="text-sm">{{ post.author || 'Delvin Joseph' }}</span>
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
      author: 'Delvin Joseph',
      authorImage: '',
    }),
  },
})
</script>
