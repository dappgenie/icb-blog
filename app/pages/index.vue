<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { ref, computed } from 'vue'

import BlogsHeader from '~/components/blog/BlogsHeader.vue'
import FeaturedBlogPost from '~/components/blog/FeaturedBlogPost.vue'
import CategoriesSection from '~/components/blog/CategoriesSection.vue'
import BlogSection from '~/components/blog/BlogSection.vue'

const { locale } = useI18n()

// Define proper article type
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
  [key: string]: unknown // For other properties
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

// Fetch technologies data
const { data: technologiesList } = await useAsyncData(`technology-${locale.value}`, async () => {
  const collection = (`technology_${locale.value}`) as keyof Collections
  const articles = await queryCollection(collection).all() as any[]
  return sortArticlesByDate(articles)
}, {
  watch: [locale],
})

// Fetch cashback data
const { data: investmentList } = await useAsyncData(`investment-${locale.value}`, async () => {
  const collection = (`investment_${locale.value}`) as keyof Collections
  const articles = await queryCollection(collection).all() as any[]
  return sortArticlesByDate(articles)
}, {
  watch: [locale],
})

// Fetch health and wellness data
const { data: healthList } = await useAsyncData(`health-${locale.value}`, async () => {
  const collection = (`health_${locale.value}`) as keyof Collections
  const articles = await queryCollection(collection).all() as any[]
  return sortArticlesByDate(articles)
}, {
  watch: [locale],
})

// Fetch fashion data
const { data: fashionList } = await useAsyncData(`fashion-${locale.value}`, async () => {
  const collection = (`fashion_${locale.value}`) as keyof Collections
  const articles = await queryCollection(collection).all() as any[]
  return sortArticlesByDate(articles)
}, {
  watch: [locale],
})

// Fetch lifestyle data
const { data: lifestyleList } = await useAsyncData(`lifestyle-${locale.value}`, async () => {
  const collection = (`lifestyle_${locale.value}`) as keyof Collections
  const articles = await queryCollection(collection).all() as any[]
  return sortArticlesByDate(articles)
}, {
  watch: [locale],
})

// Fetch travel data
const { data: travelList } = await useAsyncData(`travel-${locale.value}`, async () => {
  const collection = (`travel_${locale.value}`) as keyof Collections
  const articles = await queryCollection(collection).all() as any[]
  return sortArticlesByDate(articles)
}, {
  watch: [locale],
})

// Search functionality
const searchQuery = ref('')
const isSearching = computed(() => searchQuery.value.trim().length > 0)

const handleSearch = (query: string) => {
  searchQuery.value = query
}

// Category filtering
const selectedCategories = ref<string[]>([])
const isFilteringByCategory = computed(() => selectedCategories.value.length > 0)

// Helper function to check if an article matches selected categories
const matchesSelectedCategories = (article: Article) => {
  if (!isFilteringByCategory.value) return true

  // Check if article has tags or keywords that match selected categories
  const articleTags = article.tags || []
  const articleKeywords = article.keywords || []
  const articleCategory = article.category ? article.category.toLowerCase() : ''

  // Check if any selected category matches article's tags, keywords, or category
  return selectedCategories.value.some((categoryId) => {
    const categoryLower = categoryId.toLowerCase()
    return articleTags.some((tag: string) => tag.toLowerCase().includes(categoryLower))
      || articleKeywords.some((keyword: string) => keyword.toLowerCase().includes(categoryLower))
      || articleCategory.includes(categoryLower)
      // Map specific category IDs to collection types
      || (categoryId === 'technology' && article._path?.includes('/technology/'))
      || (categoryId === 'investment' && article._path?.includes('/investment/'))
      || (categoryId === 'health' && article._path?.includes('/health/'))
      || (categoryId === 'fashion' && article._path?.includes('/fashion/'))
      || (categoryId === 'lifestyle' && article._path?.includes('/lifestyle/'))
  })
}

// Helper function to filter articles by search query and categories
const filterArticles = (articles: Article[]) => {
  if (!articles) return []

  return articles.filter((article) => {
    // Text search filter
    const matchesSearch = !searchQuery.value.trim()
      || article.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      || (article.description?.toLowerCase().includes(searchQuery.value.toLowerCase()))

    // Category filter
    const matchesCategories = matchesSelectedCategories(article)

    return matchesSearch && matchesCategories
  })
}

// Computed properties for visible items with search and category filtering
const visibleTechnologies = computed(() => {
  return technologiesList.value ? filterArticles([...technologiesList.value]) : []
})

const visibleInvestment = computed(() => {
  return investmentList.value ? filterArticles([...investmentList.value]) : []
})

const visibleHealth = computed(() => {
  return healthList.value ? filterArticles([...healthList.value]) : []
})

const visibleFashion = computed(() => {
  return fashionList.value ? filterArticles([...fashionList.value]) : []
})

const visibleLifestyle = computed(() => {
  return lifestyleList.value ? filterArticles([...lifestyleList.value]) : []
})

const visibleTravel = computed(() => {
  return travelList.value ? filterArticles([...travelList.value]) : []
})

// Get all articles across categories for search results
const allArticles = computed(() => {
  const articles: Article[] = []

  if (technologiesList.value) articles.push(...technologiesList.value)
  if (investmentList.value) articles.push(...investmentList.value)
  if (healthList.value) articles.push(...healthList.value)
  if (fashionList.value) articles.push(...fashionList.value)
  if (lifestyleList.value) articles.push(...lifestyleList.value)
  if (travelList.value) articles.push(...travelList.value)

  return sortArticlesByDate(articles)
})

// Get the most recent article across all categories for featured blog
const mostRecentArticle = computed(() => {
  const articles = allArticles.value
  return articles.length > 0 ? articles[0] : {}
})

// Filtered search results across all categories
const searchResults = computed(() => {
  if (!searchQuery.value.trim() && !isFilteringByCategory.value) return []
  return filterArticles(allArticles.value)
})

// Total count of search results
const searchResultsCount = computed(() => searchResults.value.length)

// Check if we're filtering (either by search or categories)
const isFiltering = computed(() => isSearching.value || isFilteringByCategory.value)

// Add categories list
const categories = ref([
  { id: 'technology', label: 'Technology' },
  { id: 'investment', label: 'Investment' },
  { id: 'health', label: 'Health and Wellness' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'home_appliances', label: 'Home Appliances' },
  { id: 'medicine', label: 'Medicine and Fitness' },
  { id: 'books', label: 'Books and Learning' },
  { id: 'sports', label: 'Sports and Fitness' },
  { id: 'travel', label: 'Travel' },
  { id: 'food', label: 'Food and Drinks' },
  { id: 'automotive', label: 'Automotive' },
  { id: 'beauty', label: 'Beauty and Personal Care' },
  { id: 'home_garden', label: 'Home and Garden' },
  { id: 'baby', label: 'Baby and Kids' },
  { id: 'pets', label: 'Pets and Animals' },
  { id: 'finance', label: 'Finance and Banking' },
  { id: 'education', label: 'Education and Learning' },
  { id: 'entertainment', label: 'Entertainment' },
])

// Helper function to clear all filters
const clearFilters = () => {
  searchQuery.value = ''
  selectedCategories.value = []
}

if (!technologiesList.value && !investmentList.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
</script>

<template>
  <div class="light-mode bg-background min-h-screen">
    <main class="container mx-auto bg-[#efefef] shadow-lg">
      <!-- Blogs section -->
      <div class="flex flex-col space-x-6 mb-6">
        <!-- Blogs header with search -->
        <BlogsHeader
          title="Blogs"
          @search="handleSearch"
        />

        <!-- Filter indicators -->
        <div
          v-if="isFiltering"
          class="px-4 mt-4 flex flex-wrap items-center gap-2"
        >
          <!-- Search indicator -->
          <div
            v-if="isSearching"
            class="text-sm text-gray-600"
          >
            Found {{ searchResultsCount }} result{{ searchResultsCount !== 1 ? 's' : '' }} for "{{ searchQuery }}"
          </div>

          <!-- Category filters indicator -->
          <div
            v-if="isFilteringByCategory"
            class="flex flex-wrap gap-1 items-center"
          >
            <span
              v-if="!isSearching"
              class="text-sm text-gray-600"
            >Filtered by:</span>
            <div
              v-for="catId in selectedCategories"
              :key="catId"
              class="bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center"
            >
              {{ categories.find(c => c.id === catId)?.label }}
              <button
                class="ml-1 text-white hover:text-gray-200"
                @click="selectedCategories = selectedCategories.filter(id => id !== catId)"
              >
                ×
              </button>
            </div>
          </div>

          <!-- Clear filters button -->
          <button
            v-if="isFiltering"
            class="text-xs text-gray-500 hover:text-primary ml-auto underline"
            @click="clearFilters"
          >
            Clear all filters
          </button>
        </div>

        <!-- Main content area -->
        <div class="flex-1 px-4 mt-6">
          <!-- Featured blog post - now shows the most recent article across all categories -->
          <div
            v-if="!isFiltering"
            class="lg:hidden block mb-6 bg-white rounded-lg p-4 shadow-sm mx-auto w-full"
          >
            <div class="mb-4">
              <h3 class="text-sm text-primary font-semibold">
                Latest Article
              </h3>
            </div>
            <FeaturedBlogPost :post="mostRecentArticle" />
          </div>
          <!-- Categories -->
          <CategoriesSection
            v-model="selectedCategories"
            :categories="categories"
          />

          <!-- Search/Filter results section -->
          <div
            v-if="isFiltering"
            class="mb-8 bg-white rounded-lg p-4"
          >
            <div class="mb-4">
              <h3 class="text-sm text-primary font-semibold">
                {{ isSearching ? 'Search Results' : 'Filtered Results' }}
              </h3>
            </div>

            <div
              v-if="searchResults.length"
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              <BlogCard
                v-for="(article, index) in searchResults"
                :key="index"
                :article="article"
              />
            </div>

            <div
              v-else
              class="text-center py-8"
            >
              <p class="text-gray-500">
                No articles found matching your criteria.
              </p>
              <button
                class="mt-2 text-primary hover:underline"
                @click="clearFilters"
              >
                Clear filters
              </button>
            </div>
          </div>

          <!-- Regular content (shown when not filtering) -->
          <template v-if="!isFiltering">
            <!-- Featured blog post - now shows the most recent article across all categories -->
            <div class="hidden lg:block mb-8 bg-white rounded-lg p-4 shadow-sm">
              <div class="mb-4">
                <h3 class="text-sm text-primary font-semibold">
                  Latest Article
                </h3>
              </div>
              <FeaturedBlogPost :post="mostRecentArticle" />
            </div>

            <!-- Investment section -->
            <BlogSection
              v-if="visibleInvestment?.length"
              title="Investment"
              :articles="visibleInvestment"
              :max-items="5"
            />

            <!-- Technology section -->
            <BlogSection
              v-if="visibleTechnologies?.length"
              title="Technology"
              :articles="visibleTechnologies"
              :max-items="5"
            />

            <!-- Health and Wellness section -->
            <BlogSection
              v-if="visibleHealth?.length"
              title="Health and Wellness"
              :articles="visibleHealth"
              :max-items="5"
            />

            <!-- Fashion section -->
            <BlogSection
              v-if="visibleFashion?.length"
              title="Fashion"
              :articles="visibleFashion"
              :max-items="5"
            />

            <!-- Lifestyle section -->
            <BlogSection
              v-if="visibleLifestyle?.length"
              title="Lifestyle"
              :articles="visibleLifestyle"
              :max-items="5"
            />

            <!-- Travel section -->
            <BlogSection
              v-if="visibleTravel?.length"
              title="Travel"
              :articles="visibleTravel"
              :max-items="5"
            />
          </template>
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
</style>
