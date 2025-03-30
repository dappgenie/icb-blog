<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div class="relative h-36">
      <img
        :src="article.image || 'https://i0.wp.com/www.wuhcag.com/wp-content/uploads/2015/03/Google-on-MacBook.jpg?fit=1024%2C682&ssl=1'"
        :alt="article.title"
        class="w-full h-full object-cover"
      >
      <div class="absolute top-2 right-2">
        <button class="bg-white rounded-full p-1 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
      <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
        <span class="text-white text-xs font-medium">{{ readTime || '5 min read' }}</span>
      </div>
    </div>
    <div class="p-3">
      <h3 class="font-bold text-sm line-clamp-2 mb-1">
        {{ article.title || 'How to get cash back in an effective Way?' }}
      </h3>
      <div class="flex items-center mt-2">
        <img
          :src="article.authorImage || 'https://e7.pngegg.com/pngimages/178/419/png-clipart-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-thumbnail.png'"
          alt="Author"
          class="w-6 h-6 rounded-full mr-2"
        >
        <span class="text-xs text-gray-500">{{ article.author || 'Delvin Joseph' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  article: {
    type: Object,
    required: false,
    default: () => ({
      title: '',
      image: '',
      author: '',
      authorImage: '',
    }),
  },
  readTime: {
    type: String,
    default: '5 min read',
  },
})
</script>
