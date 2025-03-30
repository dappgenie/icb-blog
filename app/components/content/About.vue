<script setup lang="ts">
// We no longer need the stack variable since we removed the partners section
</script>

<template>
  <div class="light-mode bg-gradient-to-b from-[#f8f9ff] to-[#f5f5f5] min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <!-- Hero Banner Section -->
      <div class="relative rounded-xl overflow-hidden mb-12 h-80 md:h-96 shadow-xl">
        <img src="/assets/blog-banner.webp" alt="Indian Cashback" class="w-full h-full object-cover">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#1a1065]/90 to-[#574ABE]/70 flex items-center justify-center">
          <div class="text-center text-white p-6 max-w-3xl">
            <img src="/assets/logo.png" alt="ICB Logo" class="h-24 mx-auto mb-6">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <slot name="title" mdc-unwrap="p" />
            </h1>
            <p class="text-lg md:text-xl opacity-90">
              <slot name="subtitle" mdc-unwrap="p" />
            </p>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="flex flex-col md:flex-row gap-8 mb-12">
        <!-- Profile Image -->
        <div class="md:w-1/3">
          <div
            class="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300">
            <AboutProfilePicture class="py-6" />
          </div>
        </div>

        <!-- About Content -->
        <div class="md:w-2/3">
          <div
            class="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300 h-full">
            <div class="bg-gradient-to-r from-[#574ABE] to-[#1a1065] text-white p-4">
              <h3 class="font-bold text-lg flex items-center">
                <UIcon name="i-ph-info" class="mr-2" />
                About Indian Cashback
              </h3>
            </div>
            <div class="p-6 bg-gradient-to-b from-white to-[#f8f8ff] h-full">
              <div class="prose max-w-none text-gray-700">
                <slot name="intro" mdc-unwrap="div" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="relative rounded-xl overflow-hidden mb-8 shadow-xl">
        <div class="bg-gradient-to-r from-[#574ABE] to-[#1a1065] p-12 md:p-16 text-center">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Saving Today!
          </h3>
          <p class="mb-8 text-white text-lg max-w-2xl mx-auto">
            Join thousands of smart shoppers who never miss a cashback opportunity.
            Sign up now and start earning cashback on your online purchases!
          </p>
          <NuxtLink target="_blank" to="https://indiancashback.com/"
            class="bg-white hover:bg-gray-100 text-[#574ABE] font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md text-lg hover:shadow-lg">
            Sign Up Now - It's Free!
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Enhance styling for content from markdown */
.prose h4 {
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #333;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.25rem;
}
</style>
