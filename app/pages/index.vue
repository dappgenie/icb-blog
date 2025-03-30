<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { ref, computed } from 'vue'

import BlogsHeader from '~/components/blog/BlogsHeader.vue'
import FeaturedBlogPost from '~/components/blog/FeaturedBlogPost.vue'
import CategoriesSection from '~/components/blog/CategoriesSection.vue'
import BlogSection from '~/components/blog/BlogSection.vue'

const { locale } = useI18n()

// Fetch technologies data
const { data: technologiesList } = await useAsyncData(`technology-${locale.value}`, async () => {
  const collection = (`technology_${locale.value}`) as keyof Collections
  return await queryCollection(collection).all() as Collections['technology_en'][] | Collections['technology_fr'][]
}, {
  watch: [locale],
})

// Fetch cashback data
const { data: cashbackList } = await useAsyncData(`cashback-${locale.value}`, async () => {
  const collection = (`cashback_${locale.value}`) as keyof Collections
  return await queryCollection(collection).all() as Collections['cashback_en'][] | Collections['cashback_fr'][]
}, {
  watch: [locale],
})

// Fetch health and wellness data
const { data: healthList } = await useAsyncData(`health-${locale.value}`, async () => {
  const collection = (`health_${locale.value}`) as keyof Collections
  return await queryCollection(collection).all() as Collections['health_en'][] | Collections['health_fr'][]
}, {
  watch: [locale],
})

// Computed properties for visible items
const visibleTechnologies = computed(() => {
  console.log('technologiesList.value', technologiesList.value)
  return technologiesList.value ? [...technologiesList.value] : []
})

const visibleCashback = computed(() => {
  console.log('cashbackList.value', cashbackList.value)
  return cashbackList.value ? [...cashbackList.value] : []
})

const visibleHealth = computed(() => {
  console.log('healthList.value', healthList.value)
  return healthList.value ? [...healthList.value] : []
})

// Search functionality
const searchQuery = ref('')
const handleSearch = (query: string) => {
  searchQuery.value = query
  // Implement search functionality here
  console.log('Searching for:', query)
}

// Add categories list
const categories = ref([
  { id: 'cashback', label: 'Cashback' },
  { id: 'technology', label: 'Technology' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'home_appliances', label: 'Home Appliances' },
  { id: 'health', label: 'Health and Wellness' },
  { id: 'medicine', label: 'Medicine and Fitness' },
  { id: 'travel', label: 'Travel' },
  { id: 'toys', label: 'Toys and Entertainment' },
  { id: 'grocery', label: 'Grocery' },
  { id: 'beauty', label: 'Beauty and Cosmetics' },
  { id: 'mobile', label: 'Mobile Accessories' },
  { id: 'furniture', label: 'Furniture' },
  { id: 'food', label: 'Food and Beverages' },
])

// Featured blog post data
const featuredPost = ref({
  title: 'How to get cash back in an effective Way?',
  image: '/assets/blog-banner.webp',
  category: 'Cashback',
  author: 'Delvin Joseph',
})

// Handle see all clicks
const handleSeeAll = (section: string) => {
  console.log(`See all clicked for ${section}`)
  // Implement navigation to section page
}

if (!technologiesList.value && !cashbackList.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
</script>

<template>
  <div class="light-mode bg-background min-h-screen">
    <main class="container mx-auto bg-[#efefef] shadow-lg">
      <!-- Blogs section -->
      <div class="flex flex-col space-x-6 mb-6">
        <!-- Blogs header with search -->
        <BlogsHeader title="Blogs" @search="handleSearch" />

        <!-- Main content area -->
        <div class="flex-1 px-4 mt-6">
          <!-- Featured blog post -->
          <FeaturedBlogPost :post="featuredPost" />

          <!-- Categories -->
          <CategoriesSection :categories="categories" />
          <!-- Investment section -->
          <BlogSection title="Investment" :articles="visibleCashback" :max-items="5"
            @see-all="handleSeeAll('investment')" />

          <!-- Technology section -->
          <BlogSection title="Technology" :articles="visibleTechnologies" :max-items="5"
            @see-all="handleSeeAll('technology')" />

          <!-- Health and Wellness section -->
          <BlogSection title="Health and Wellness" :articles="visibleHealth" :max-items="5"
            @see-all="handleSeeAll('health')" />
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
