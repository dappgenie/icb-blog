<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { ref, computed } from 'vue'

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

// Create refs for sliders
const activeSlide = ref({
  technologies: 0,
  cashback: 0,
})

// Computed properties for visible items
const visibleTechnologies = computed(() => {
  return technologiesList.value ? [...technologiesList.value] : []
})

const visibleCashback = computed(() => {
  return cashbackList.value ? [...cashbackList.value] : []
})

// Navigation functions
const nextSlide = (category: 'technologies' | 'cashback') => {
  if (category === 'technologies' && technologiesList.value) {
    activeSlide.value.technologies = (activeSlide.value.technologies + 1) % Math.ceil(technologiesList.value.length / 2)
  }
  else if (category === 'cashback' && cashbackList.value) {
    activeSlide.value.cashback = (activeSlide.value.cashback + 1) % Math.ceil(cashbackList.value.length / 2)
  }
}

const prevSlide = (category: 'technologies' | 'cashback') => {
  if (category === 'technologies' && technologiesList.value) {
    activeSlide.value.technologies = activeSlide.value.technologies === 0
      ? Math.ceil(technologiesList.value.length / 2) - 1
      : activeSlide.value.technologies - 1
  }
  else if (category === 'cashback' && cashbackList.value) {
    activeSlide.value.cashback = activeSlide.value.cashback === 0
      ? Math.ceil(cashbackList.value.length / 2) - 1
      : activeSlide.value.cashback - 1
  }
}

if (!technologiesList.value && !cashbackList.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
</script>

<template>
  <div class="light-mode bg-white min-h-screen">
    <!-- Hero Banner -->
    <div class="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="font-newsreader italic text-4xl md:text-5xl text-center mb-4 drop-shadow-md">
          Indian Cashback Blogs
        </h1>
        <h2 class="text-center text-lg md:text-xl font-light italic text-gray-100 max-w-3xl mx-auto">
          Get the latest news and updates on cashback offers and promotions
        </h2>
      </div>
    </div>

    <main class="max-w-6xl mx-auto py-12 px-6">
      <!-- Technologies Section -->
      <section
        v-if="technologiesList && technologiesList.length"
        class="mb-16"
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800 flex items-center">
            <div class="w-1 h-6 bg-purple-600 mr-3" />
            Technologies
          </h2>
          <div class="flex items-center space-x-2">
            <button
              class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              @click="prevSlide('technologies')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              @click="nextSlide('technologies')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Category Banner -->
        <div
          class="relative overflow-hidden rounded-lg shadow-md mb-8 bg-gradient-to-r from-indigo-600 to-violet-500"
          style="height: 160px;"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-center z-10 px-6">
              <h3 class="text-2xl font-bold mb-2">
                Explore Technology Solutions
              </h3>
              <p class="text-gray-100 max-w-2xl">
                Discover the latest innovations and solutions for your business needs
              </p>
            </div>
          </div>
          <div class="absolute inset-0 bg-black opacity-20" />
          <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <!-- Technology Cards -->
        <TransitionGroup
          name="list"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div
            v-for="article of visibleTechnologies"
            :key="article.path"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                v-if="article.image"
                :src="article.image"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              >
              <div
                v-else
                class="w-full h-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center"
              >
                <span class="text-indigo-600 font-semibold">No image available</span>
              </div>
              <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                <span class="text-white text-xs font-medium px-2 py-1 rounded bg-indigo-600">Technology</span>
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {{ article.title }}
              </h3>
              <div class="flex justify-between items-center mt-4">
                <span class="text-sm text-gray-500">{{ new Date(article.date).toLocaleDateString() }}</span>
                <NuxtLink
                  :to="article.path"
                  class="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </TransitionGroup>

        <!-- Pagination Indicators -->
        <div class="flex justify-center mt-8">
          <div class="flex space-x-2">
            <button
              v-for="(_, index) in Math.ceil((technologiesList?.length || 0) / 2)"
              :key="index"
              :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                activeSlide.technologies === index ? 'bg-indigo-600 w-6' : 'bg-gray-300',
              ]"
              @click="activeSlide.technologies = index"
            />
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="flex items-center my-12">
        <div class="flex-grow h-px bg-gray-200" />
        <div class="px-4">
          <div class="w-3 h-3 rounded-full bg-indigo-600" />
        </div>
        <div class="flex-grow h-px bg-gray-200" />
      </div>

      <!-- Cashback Section -->
      <section
        v-if="cashbackList && cashbackList.length"
        class="mb-16"
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800 flex items-center">
            <div class="w-1 h-6 bg-purple-600 mr-3" />
            Cashback Offers
          </h2>
          <div class="flex items-center space-x-2">
            <button
              class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              @click="prevSlide('cashback')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              @click="nextSlide('cashback')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Category Banner -->
        <div
          class="relative overflow-hidden rounded-lg shadow-md mb-8 bg-gradient-to-r from-violet-500 to-purple-600"
          style="height: 160px;"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-center z-10 px-6">
              <h3 class="text-2xl font-bold mb-2">
                Exclusive Cashback Rewards
              </h3>
              <p class="text-gray-100 max-w-2xl">
                Get more value with our premium cashback offers and promotions
              </p>
            </div>
          </div>
          <div class="absolute inset-0 bg-black opacity-20" />
          <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <!-- Cashback Cards -->
        <TransitionGroup
          name="list"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div
            v-for="article of visibleCashback"
            :key="article.path"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                v-if="article.image"
                :src="article.image"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              >
              <div
                v-else
                class="w-full h-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center"
              >
                <span class="text-purple-600 font-semibold">No image available</span>
              </div>
              <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                <span class="text-white text-xs font-medium px-2 py-1 rounded bg-purple-600">Cashback</span>
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {{ article.title }}
              </h3>
              <div class="flex justify-between items-center mt-4">
                <span class="text-sm text-gray-500">{{ new Date(article.date).toLocaleDateString() }}</span>
                <NuxtLink
                  :to="article.path"
                  class="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </TransitionGroup>

        <!-- Pagination Indicators -->
        <div class="flex justify-center mt-8">
          <div class="flex space-x-2">
            <button
              v-for="(_, index) in Math.ceil((cashbackList?.length || 0) / 2)"
              :key="index"
              :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                activeSlide.cashback === index ? 'bg-indigo-600 w-6' : 'bg-gray-300',
              ]"
              @click="activeSlide.cashback = index"
            />
          </div>
        </div>
      </section>

      <!-- Empty State -->
      <div
        v-if="(!technologiesList || !technologiesList.length) && (!cashbackList || !cashbackList.length)"
        class="flex h-64 flex-col items-center justify-center gap-2 bg-gray-50 rounded-lg p-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-400 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="text-2xl text-gray-700 font-medium">
          {{ $t("writing.not_found") }}
        </span>
        <span class="text-sm text-gray-500 text-center max-w-md">
          {{ $t("writing.not_found_description") }}
        </span>
        <button class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Refresh Content
        </button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 border-t border-gray-200 py-8">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <div class="text-xl font-semibold text-gray-800">
            Your Brand
          </div>
          <p class="text-sm text-gray-500 mt-1">
            Premium content and offers
          </p>
        </div>
        <div class="flex space-x-4">
          <a
            href="#"
            class="text-gray-600 hover:text-indigo-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-gray-600 hover:text-indigo-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Global styles */
.light-mode {
  --primary-color: #574ABE;
  --primary-light: #6C61D0;
  --primary-dark: #4A3FA0;
}

/* Transition effects */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Smooth transitions for page elements */
.list-move {
  transition: transform 0.5s;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-light);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}
</style>
