<template>
  <div class="light-mode bg-background min-h-screen">
    <main class="container mx-auto bg-[#efefef] shadow-lg py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- About Header -->
        <div class="mb-12 text-center">
          <h1 class="text-4xl font-bold text-primary mb-4">
            {{ aboutContent?.title }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ aboutContent?.description }}
          </p>
        </div>

        <!-- About Content -->
        <div class="prose prose-lg max-w-none">
          <ContentRenderer v-if="aboutContent" :value="aboutContent" />
        </div>

        <!-- Additional Company Information -->
        <div class="mt-16 grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h2>
            <p class="text-gray-700">
              At Indian Cashback, our mission is to empower Indian consumers with the tools to make
              smarter shopping decisions while helping retailers build customer loyalty. We believe
              in creating a win-win ecosystem where both shoppers and retailers benefit.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-primary mb-4">
              Why Choose ICB
            </h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Partnerships with thousands of leading retailers</li>
              <li>Simple, transparent cashback process</li>
              <li>Fast payouts with multiple withdrawal options</li>
              <li>Exclusive deals and offers for members</li>
              <li>Dedicated customer support team</li>
            </ul>
          </div>
        </div>

        <!-- Contact Us Section -->
        <div class="mt-16 text-center">
          <h2 class="text-2xl font-semibold text-primary mb-4">
            Connect With Us
          </h2>
          <p class="text-gray-700 mb-6">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <button class="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { useI18n } from '#i18n'
import { useAsyncData } from '#imports'

const { locale } = useI18n()

interface AboutContent {
  title?: string
  description?: string
  [key: string]: unknown
}

// Fetch about page content
const { data: aboutContent } = await useAsyncData(`about-${locale.value}`, async () => {
  // Use the same approach as other pages in the project
  const path = '4.about'
  const content = await queryCollection(`content_${locale.value}` as keyof Collections)
    .path(path)
    .first()
  return content as unknown as AboutContent
}, {
  watch: [locale],
})

if (!aboutContent.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
</script>

<style>
/* About page specific styles */
.prose h1,
.prose h2,
.prose h3 {
  color: var(--color-primary);
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.prose a {
  color: var(--color-primary);
  text-decoration: underline;
}

/* Timeline styling for experiences */
.experiences ul {
  border-left: 2px solid var(--color-primary);
  padding-left: 1.5rem;
  margin-left: 1rem;
}

.experiences li {
  position: relative;
  padding-bottom: 1.5rem;
}

.experiences li:before {
  content: '';
  position: absolute;
  left: -1.75rem;
  top: 0.25rem;
  width: 1rem;
  height: 1rem;
  background: var(--color-primary);
  border-radius: 50%;
}
</style>