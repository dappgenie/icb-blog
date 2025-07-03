<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { ref, computed } from 'vue'

import BlogsHeader from '~/components/blog/BlogsHeader.vue'
import BlogCard from '~/components/blog/BlogCard.vue'

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()

// Get the category from the route parameter
const category = computed(() => {
  return route.params.type as string
})

// Format the category for display (capitalize first letter of each word)
const formattedCategory = computed(() => {
  if (!category.value) return ''

  return category.value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})

// Determine the content collection based on the category
const contentCollection = computed(() => {
  // Map URL slugs to content collection names
  const categoryMap: Record<string, string> = {
    'technology': 'technology',
    'investment': 'investment',
    'health-and-wellness': 'health',
    'fashion': 'fashion',
    'lifestyle': 'lifestyle',
    'travel': 'travel',
    'writings': 'articles',
  }

  // Get the collection name or use the category as fallback
  const collectionName = categoryMap[category.value] || category.value
  return `${collectionName}_${locale.value}` as keyof Collections
})

// Define proper types for articles
interface Article {
  _path?: string
  title: string
  description?: string
  tags?: string[]
  keywords?: string[]
  category?: string
  image?: string
  date?: string
  path?: string
  [key: string]: any // For other properties
}

// Helper function to parse and sort articles by date
const sortArticlesByDate = (articles: any[]): Article[] => {
  if (!articles) return []

  return [...articles].sort((a, b) => {
    // Handle different date formats and missing dates
    const getDateValue = (article: any): number => {
      if (!article.date) return 0

      // Try to parse the date - handle various formats
      let dateStr = article.date

      // If it's in format "05 Sep 2015", convert to proper format
      if (typeof dateStr === 'string' && dateStr.match(/^\d{1,2}\s\w{3}\s\d{4}$/)) {
        const parts = dateStr.split(' ')
        const day = parts[0]
        const month = parts[1]
        const year = parts[2]
        const monthMap: Record<string, string> = {
          Jan: '01', Feb: '02', Mar: '03', Apr: '04',
          May: '05', Jun: '06', Jul: '07', Aug: '08',
          Sep: '09', Oct: '10', Nov: '11', Dec: '12',
        }
        if (day && month && year && monthMap[month]) {
          dateStr = `${year}-${monthMap[month]}-${day.padStart(2, '0')}`
        }
      }

      const date = new Date(dateStr)
      return isNaN(date.getTime()) ? 0 : date.getTime()
    }

    return getDateValue(b) - getDateValue(a) // Sort descending (newest first)
  })
}

// Fetch articles for the current category
const { data: articles } = await useAsyncData(`${category.value}-articles-${locale.value}`, async () => {
  const rawArticles = await queryCollection(contentCollection.value).all() as any[]
  return sortArticlesByDate(rawArticles)
}, {
  watch: [locale, category],
})

// Search functionality
const searchQuery = ref('')
const handleSearch = (query: string) => {
  searchQuery.value = query
}

// Filter articles based on search query
const filteredArticles = computed(() => {
  if (!articles.value) return []

  return articles.value.filter((article: Article) => {
    if (!searchQuery.value.trim()) return true

    const title = article.title?.toLowerCase() || ''
    const description = article.description?.toLowerCase() || ''
    const query = searchQuery.value.toLowerCase()

    return title.includes(query) || description.includes(query)
  })
})

// Get a featured article (first article or random)
const featuredArticle = computed(() => {
  if (!articles.value || articles.value.length === 0) return null
  return articles.value[0]
})

// Get the remaining articles (excluding the featured one)
const remainingArticles = computed(() => {
  if (!filteredArticles.value || filteredArticles.value.length <= 1) return []

  // If we're searching, show all matching articles
  if (searchQuery.value.trim()) return filteredArticles.value

  // Otherwise, exclude the featured article
  return filteredArticles.value.slice(1)
})

// Category-specific banner images and colors
const categoryTheme = computed(() => {
  const themes = {
    'technology': {
      image: '/assets/blog-banner.webp',
      color: 'from-blue-900/80',
      icon: '💻',
    },
    'investment': {
      image: '/assets/blog-banner.webp',
      color: 'from-green-900/80',
      icon: '💰',
    },
    'health-and-wellness': {
      image: '/assets/blog-banner.webp',
      color: 'from-teal-900/80',
      icon: '🧘',
    },
    'fashion': {
      image: '/assets/blog-banner.webp',
      color: 'from-purple-900/80',
      icon: '👗',
    },
    'lifestyle': {
      image: '/assets/blog-banner.webp',
      color: 'from-orange-900/80',
      icon: '🏡',
    },
    'travel': {
      image: '/assets/blog-banner.webp',
      color: 'from-yellow-900/80',
      icon: '✈️',
    },
    'writings': {
      image: '/assets/blog-banner.webp',
      color: 'from-gray-900/80',
      icon: '✍️',
    },
  }

  return themes[category.value] || {
    image: '/assets/blog-banner.webp',
    color: 'from-[#1a1065]/80',
    icon: '📚',
  }
})

// Navigation functions
const goBackToHome = () => {
  router.push('/')
}

// If no articles found, throw 404
if (!articles.value || articles.value.length === 0) {
  throw createError({
    statusCode: 404,
    statusMessage: `No articles found for category: ${formattedCategory.value}`,
  })
}
</script>

<template>
  <div class="light-mode bg-background min-h-screen">
    <main class="container mx-auto bg-[#efefef] shadow-lg">
      <!-- Blogs section -->
      <div class="flex flex-col mb-6">
        <!-- Blogs header with search -->
        <BlogsHeader :title="`${formattedCategory} Articles`" @search="handleSearch" />

        <!-- Back button -->
        <div class="px-4 mt-4">
          <button class="flex items-center text-sm text-primary hover:underline font-medium" @click="goBackToHome">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </button>
        </div>

        <!-- Main content area -->
        <div class="flex-1 px-4 mt-4">
          <!-- Category Banner -->
          <div class="relative rounded-lg overflow-hidden mb-8 h-48 md:h-64">
            <img :src="featuredArticle?.image || categoryTheme.image" :alt="`${formattedCategory} Banner`"
              class="w-full h-full object-cover">
            <div
              :class="`absolute inset-0 bg-gradient-to-t ${categoryTheme.color} to-transparent backdrop-blur-sm bg-opacity-50 flex items-center justify-center`">
              <div class="text-center text-white p-6 max-w-3xl">
                <div class="text-4xl md:text-5xl mb-2 md:mb-4">
                  {{ categoryTheme.icon }}
                </div>
                <h1 class="text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                  {{ formattedCategory }}
                </h1>
                <p class="text-sm md:text-lg opacity-90">
                  Discover our latest articles about {{ formattedCategory.toLowerCase() }}
                </p>
                <div class="mt-2 md:mt-4 text-xs md:text-sm bg-white/20 inline-block py-1 px-3 rounded-full">
                  {{ filteredArticles.length }} article{{ filteredArticles.length !== 1 ? 's' : '' }}
                </div>
              </div>
            </div>
          </div>

          <!-- Search results indicator -->
          <div v-if="searchQuery.trim()" class="mb-4 px-2">
            <p class="text-sm text-gray-600">
              Found {{ filteredArticles.length }} result{{ filteredArticles.length !== 1 ? 's' : '' }}
              for "{{ searchQuery }}"
            </p>
          </div>

          <!-- Featured Article (if available and not searching) -->
          <div v-if="featuredArticle && !searchQuery.trim()" class="mb-8 bg-white rounded-lg p-4 shadow-sm">
            <div class="mb-4">
              <h3 class="text-sm text-primary font-semibold">
                Featured {{ formattedCategory }} Article
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="md:col-span-1">
                <div class="h-48 md:h-full rounded-lg overflow-hidden">
                  <img :src="featuredArticle.image || '/assets/blog-banner.webp'" :alt="featuredArticle.title"
                    class="w-full h-full object-cover">
                </div>
              </div>
              <div class="md:col-span-2 flex flex-col">
                <h2 class="text-xl font-bold mb-2">
                  {{ featuredArticle.title }}
                </h2>
                <p class="text-gray-600 mb-4 line-clamp-3">
                  {{ featuredArticle.description || 'Discover more about this featured article.' }}
                </p>
                <div class="flex items-center space-x-2 mb-4">
                  <span class="text-sm text-gray-500">{{ featuredArticle.date || 'Recent' }}</span>
                </div>
                <NuxtLink :to="featuredArticle.path"
                  class="mt-auto text-primary font-medium hover:underline flex items-center">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- All Articles -->
          <div class="mb-8 bg-white rounded-lg p-4 shadow-sm">
            <div class="mb-4">
              <h3 class="text-sm text-primary font-semibold">
                {{ searchQuery.trim() ? 'Search Results' : `All ${formattedCategory} Articles` }}
              </h3>
            </div>

            <!-- Articles grid -->
            <div v-if="searchQuery.trim() ? filteredArticles.length : remainingArticles.length"
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <BlogCard v-for="(article, index) in searchQuery.trim() ? filteredArticles : remainingArticles"
                :key="index" :article="article" />
            </div>

            <!-- No results message -->
            <div v-else-if="searchQuery.trim()" class="text-center py-8">
              <p class="text-gray-500">
                No articles found matching your search criteria.
              </p>
            </div>

            <!-- Only one article (featured) message -->
            <div v-else class="text-center py-8">
              <p class="text-gray-500">
                Check out our featured article above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
/* Transition effects */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Add line clamping for text overflow */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 3;
}
</style>
