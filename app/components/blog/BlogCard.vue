<template>
  <NuxtLink :to="article.path || '#'" class="block cursor-pointer h-full">
    <div
      class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
      <div class="relative h-36">
        <img
          :src="article.image || 'https://i0.wp.com/www.wuhcag.com/wp-content/uploads/2015/03/Google-on-MacBook.jpg?fit=1024%2C682&ssl=1'"
          :alt="article.title" class="w-full h-full object-cover">
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
          <span class="text-white text-xs font-medium">{{ readTime || '5 min read' }}</span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-sm line-clamp-2 mb-2">
          {{ article.title || 'How to get cash back in an effective Way?' }}
        </h3>
        <!-- Added date display -->
        <div class="text-xs text-gray-500 mb-2">
          <span>{{ (article.date) }}</span>
        </div>
        <!-- Added keywords display -->
        <div class="flex flex-wrap gap-1 mb-2">
          <span v-for="(tag, index) in article.tags?.slice(0, 3) || []" :key="index"
            class="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
            {{ tag }}
          </span>
          <span v-if="article.tags?.length > 3" class="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
            +{{ article.tags.length - 3 }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
	article: {
		type: Object,
		required: false,
		default: () => ({
			title: "",
			image: "",
			date: "",
			tags: [],
			_path: "",
		}),
	},
	readTime: {
		type: String,
		default: "5 min read",
	},
});

// Format date function
const formatDate = (date: string) => {
	if (!date) return "No date";

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	return new Date(date).toLocaleDateString("en-US", options);
};
</script>
