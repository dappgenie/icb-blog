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
const { data: investmentList } = await useAsyncData(`investment-${locale.value}`, async () => {
  const collection = (`investment_${locale.value}`) as keyof Collections
  return await queryCollection(collection).all() as Collections['investment_en'][] | Collections['investment_fr'][]
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

// Fetch fashion data
const { data: fashionList } = await useAsyncData(`fashion-${locale.value}`, async () => {
  const collection = (`fashion_${locale.value}`) as keyof Collections
  return await queryCollection(collection).all() as Collections['fashion_en'][] | Collections['fashion_fr'][]
}, {
  watch: [locale],
})

// Fetch lifestyle data
const { data: lifestyleList } = await useAsyncData(`lifestyle-${locale.value}`, async () => {
  const collection = (`lifestyle_${locale.value}`) as keyof Collections
  return await queryCollection(collection).all() as Collections['lifestyle_en'][] | Collections['lifestyle_fr'][]
}, {
  watch: [locale],
})

// Computed properties for visible items
const visibleTechnologies = computed(() => {
  return technologiesList.value ? [...technologiesList.value] : []
})

const visibleInvestment = computed(() => {
  return investmentList.value ? [...investmentList.value] : []
})

const visibleHealth = computed(() => {
  return healthList.value ? [...healthList.value] : []
})

const visibleFashion = computed(() => {
  return fashionList.value ? [...fashionList.value] : []
})

const visibleLifestyle = computed(() => {
  return lifestyleList.value ? [...lifestyleList.value] : []
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
// Handle see all clicks
const handleSeeAll = (section: string) => {
  console.log(`See all clicked for ${section}`)
  // Implement navigation to section page
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
        <BlogsHeader title="Blogs" @search="handleSearch" />

        <!-- Main content area -->
        <div class="flex-1 px-4 mt-6">
          <!-- Featured blog post -->
          <FeaturedBlogPost :post="visibleInvestment?.[0] ?? {}" />

          <!-- Categories -->
          <CategoriesSection :categories="categories" />
          <!-- Investment section -->
          <BlogSection v-if="visibleInvestment?.length" title="Investment" :articles="visibleInvestment" :max-items="5"
            @see-all="handleSeeAll('investment')" />

          <!-- Technology section -->
          <BlogSection v-if="visibleTechnologies?.length" title="Technology" :articles="visibleTechnologies"
            :max-items="5" @see-all="handleSeeAll('technology')" />

          <!-- Health and Wellness section -->
          <BlogSection v-if="visibleHealth?.length" title="Health and Wellness" :articles="visibleHealth" :max-items="5"
            @see-all="handleSeeAll('health')" />

          <!-- Fashion section -->
          <BlogSection v-if="visibleFashion?.length" title="Fashion" :articles="visibleFashion" :max-items="5"
            @see-all="handleSeeAll('fashion')" />

          <!-- Lifestyle section -->
          <BlogSection v-if="visibleLifestyle?.length" title="Lifestyle" :articles="visibleLifestyle" :max-items="5"
            @see-all="handleSeeAll('lifestyle')" />
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
