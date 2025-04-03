<script setup lang="ts">
// Import necessary components
import { ref } from 'vue'

const milestones = ref([
  {
    year: '2013',
    title: 'Humble Beginnings',
    description: 'Founded at NIT Calicut by 3 college friends',
    icon: 'i-ph-buildings-bold',
    highlight: true,
  },
  {
    year: '2014',
    title: 'Award Winner',
    description: 'Most visited stall at YES Kerala startup summit',
    icon: 'i-ph-trophy-bold',
  },
  {
    year: '2015',
    title: 'Digital Pioneer',
    description: 'Partnered with Paytm for 100% cashback on recharges',
    icon: 'i-ph-device-mobile-bold',
  },
  {
    year: '2016',
    title: 'Silicon Valley Move',
    description: 'Relocated to Bangalore with team of 10',
    icon: 'i-ph-map-pin-bold',
  },
  {
    year: '2017',
    title: '600+ Partners',
    description: '₹1 Crore+ distributed in cashback',
    icon: 'i-ph-handshake-bold',
    highlight: true,
  },
  {
    year: '2018',
    title: 'Gift Card Revolution',
    description: '150+ brand gift cards with instant cashback',
    icon: 'i-ph-gift-bold',
  },
  {
    year: '2019',
    title: 'Global Expansion',
    description: 'Expanded to Finland serving European markets',
    icon: 'i-ph-globe-bold',
  },
  {
    year: '2020',
    title: 'Shopping Games',
    description: 'Interactive Diwali sales experience',
    icon: 'i-ph-game-controller-bold',
  },
  {
    year: '2023',
    title: 'Fintech Innovation',
    description: 'ICB InstantPay RuPay Card with Yes Bank',
    icon: 'i-ph-credit-card-bold',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Digital Relaunch',
    description: 'New website and app experience',
    icon: 'i-ph-device-mobile-camera-bold',
  },
  {
    year: '2025',
    title: 'Women Leadership',
    description: 'New lady CEO, CTO & 50% women workforce',
    icon: 'i-ph-users-three-bold',
    highlight: true,
  },
])

const services = ref([
  {
    title: 'Online Shopping Cashback',
    description: 'Earn cashback on purchases from 600+ partner brands',
    icon: 'i-ph-shopping-cart-bold',
  },
  {
    title: 'Gift Card Solutions',
    description: 'Up to 75% instant cashback on gift cards from 150+ brands',
    icon: 'i-ph-gift-bold',
  },
  {
    title: 'ICB InstantPay Card',
    description: 'Extra 5% cashback and faster approval with our Yes Bank partnership',
    icon: 'i-ph-credit-card-bold',
  },
  {
    title: 'Lifetime Referral Program',
    description: 'Earn 10% from your referrals\' transactions for life',
    icon: 'i-ph-users-bold',
  },
])

const missionVision = ref([
  {
    type: 'Mission',
    description: 'To revolutionize the online shopping experience in India by providing substantial savings to consumers through cashback and innovative financial solutions.',
    icon: 'i-ph-target-bold',
    color: 'from-purple-600 to-indigo-700',
  },
  {
    type: 'Vision',
    description: 'To become the most trusted cashback platform connecting millions of shoppers with their favorite brands while pioneering new ways to save money and enhance the digital shopping experience.',
    icon: 'i-ph-eye-bold',
    color: 'from-indigo-600 to-blue-700',
  },
])
</script>

<template>
  <div class="light-mode bg-gradient-to-b from-[#f8f9ff] to-[#f5f5f5] min-h-screen">
    <div class="mx-auto px-4 py-8">
      <!-- Hero Banner Section -->
      <div class="relative rounded-xl overflow-hidden mb-12 h-80 md:h-96 shadow-xl">
        <img src="https://www.indiancashback.com/img/og-image.png" alt="Indian Cashback"
          class="w-full h-full object-cover">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#574ABE]/70 to-[#000000]/30 backdrop-blur-sm flex items-center justify-center">
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
      <div class="flex flex-col md:flex-row gap-8 mb-12 max-w-7xl mx-auto">
        <!-- Profile Image -->
        <div class="md:w-1/3">
          <div
            class="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300">
            <AboutProfilePicture class="py-6" />

            <!-- Services Cards -->
            <div class="p-6 bg-gradient-to-b from-white to-[#f8f8ff]">
              <h3 class="font-bold text-lg text-[#574ABE] mb-4 flex items-center">
                <UIcon name="i-ph-lightbulb-filament-bold" class="mr-2" />
                Our Services
              </h3>

              <div class="space-y-4">
                <div v-for="(service, index) in services" :key="index"
                  class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-indigo-200 transition-all duration-300">
                  <div class="flex items-start">
                    <UIcon :name="service.icon" class="text-[#574ABE] text-xl mr-3 mt-1" />
                    <div>
                      <h4 class="font-semibold text-gray-800">
                        {{ service.title }}
                      </h4>
                      <p class="text-sm text-gray-600">
                        {{ service.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      <!-- Mission & Vision Cards -->
      <div class="mb-12 max-w-7xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-8 text-gray-800">
          Our Mission & Vision
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="(item, index) in missionVision" :key="index"
            class="rounded-xl overflow-hidden shadow-lg transform hover:translate-y-[-5px] transition-all duration-300">
            <div :class="`bg-gradient-to-r ${item.color} p-6 relative h-full`">
              <!-- Decorative Elements -->
              <div class="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -mr-10 -mt-10" />
              <div class="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/10 -ml-5 -mb-5" />

              <div class="relative z-10">
                <div class="flex items-center mb-4">
                  <div class="bg-white/20 p-3 rounded-full mr-4">
                    <UIcon :name="item.icon" class="text-white text-2xl" />
                  </div>
                  <h3 class="text-2xl font-bold text-white">
                    Our {{ item.type }}
                  </h3>
                </div>
                <p class="text-white/95 text-lg leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Section - Enhanced Version -->
      <div class="mb-12 py-4 max-w-7xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg p-8 overflow-hidden">
          <h2 class="text-2xl md:text-3xl font-bold text-center mb-12 text-[#574ABE]">
            Our Journey
          </h2>

          <!-- Fancy Timeline Header -->
          <div class="flex justify-center mb-12">
            <div
              class="relative px-10 py-3 bg-gradient-to-r from-[#574ABE] to-[#1a1065] text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              <span class="relative z-10">2013 - {{ new Date().getFullYear() }}: The ICB Story</span>
              <!-- Decorative elements -->
              <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white/30" />
              <div class="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-white/20" />
              <div class="absolute top-1/2 transform -translate-y-1/2 -right-2 w-1 h-1 rounded-full bg-white/40" />
            </div>
          </div>

          <!-- Timeline Container -->
          <div class="relative pt-10 pb-10">
            <!-- Main Timeline Line -->
            <div
              class="hidden md:block absolute left-[15%] h-full w-1.5 bg-gradient-to-b from-[#574ABE] to-[#1a1065] rounded-full" />

            <!-- Mobile Timeline Line -->
            <div
              class="md:hidden absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-[#574ABE] to-[#1a1065] rounded-full" />

            <!-- Timeline Items -->
            <div class="space-y-10 relative">
              <div v-for="(milestone, index) in milestones" :key="index"
                class="relative flex flex-col md:flex-row group">
                <!-- Year Badge - Desktop -->
                <div class="hidden md:block absolute left-[15%] transform -translate-x-1/2 z-10 md:mt-6">
                  <div
                    :class="`w-16 h-16 flex-shrink-0 bg-gradient-to-r from-[#574ABE] to-[#1a1065] rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-all duration-300 ${milestone.highlight ? 'animate-pulse-slow' : ''}`">
                    <span class="text-white font-bold">{{ milestone.year }}</span>
                  </div>
                </div>

                <!-- Year Badge - Mobile -->
                <div class="md:hidden absolute left-8 transform -translate-x-1/2 z-10">
                  <div
                    :class="`w-14 h-14 flex-shrink-0 bg-gradient-to-r from-[#574ABE] to-[#1a1065] rounded-full flex items-center justify-center shadow-lg border-2 border-white ${milestone.highlight ? 'animate-pulse-slow' : ''}`">
                    <span class="text-white font-bold text-sm">{{ milestone.year }}</span>
                  </div>
                </div>

                <!-- Content Box -->
                <div class="ml-16 md:ml-[calc(15%+32px)] md:pl-4 w-full md:w-2/3">
                  <div
                    class="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                    <div class="flex items-start">
                      <div
                        :class="`rounded-full flex-shrink-0 flex justify-center items-center size-10 p-2 ${milestone.highlight ? 'bg-gradient-to-r from-[#574ABE] to-[#1a1065]' : 'bg-gray-100'} mr-3`">
                        <UIcon :name="milestone.icon"
                          :class="`text-xl mx-auto ${milestone.highlight ? 'text-white' : 'text-[#574ABE]'}`" />
                      </div>
                      <div>
                        <h4 class="font-bold text-lg text-[#574ABE] mb-1">
                          {{ milestone.title }}
                        </h4>
                        <p class="text-gray-600 text-sm md:text-base">
                          {{ milestone.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Current Position Indicator -->
            <div class="hidden md:block absolute bottom-0 left-[15%] transform -translate-x-1/2 -mb-5">
              <div
                class="animate-pulse w-8 h-8 bg-gradient-to-r from-[#574ABE] to-[#1a1065] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <UIcon name="i-ph-flag-bold" class="text-white" />
              </div>
            </div>

            <!-- Mobile Current Position -->
            <div class="md:hidden absolute bottom-0 left-8 transform -translate-x-1/2 -mb-5">
              <div
                class="animate-pulse w-6 h-6 bg-gradient-to-r from-[#574ABE] to-[#1a1065] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <UIcon name="i-ph-flag-bold" class="text-white text-xs" />
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

/* Animation for pulse effect */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(87, 74, 190, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(87, 74, 190, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(87, 74, 190, 0);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

.animate-pulse-slow {
  animation: pulse 4s infinite;
}

/* Timeline responsive enhancements */
@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column;
  }
}
</style>
