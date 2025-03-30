<script lang="ts" setup>
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
})

const navigation = getNavigation('home') as Record<string, Navigation>
console.log(navigation)
// We'll use these variables in the categories dropdown
const _route = useRoute()
const _localePath = useLocalePath()
</script>

<template>
  <header class="relative lg:h-[104px] z-[999]">
    <!-- Mobile Header -->
    <div class="lg:hidden t-0 l-0 flex flex-col w-full">
      <div class="flex justify-between items-center h-[65px] px-[20px] mainHeader w-full z-[999]">
        <a class="ml-[13px]" href="/">
          <NuxtImg alt="" fetchpriority="high" width="100" height="150" decoding="async" data-nimg="1"
            class="h-[100px] w-[75px] mb-[15px]" style="color:transparent" src="/assets/icb-beta-mobile-logo.svg" />
        </a>

        <button
          class="flex items-center justify-center border border-white px-3 py-2 rounded-md text-white text-sm font-semibold ml-[30px] cursor-pointer hover:bg-white/10 hover:scale-105 transition-all duration-300">
          <svg fill="none" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg" class="text-white w-[19px] mr-[10px]">
            <path
              d="M5.19226 13.7167C5.19226 16.2858 5.19226 17.5704 6.04234 18.3685C6.89243 19.1667 8.26064 19.1667 10.997 19.1667H11.9645C14.7008 19.1667 16.069 19.1667 16.9191 18.3685C17.7692 17.5704 17.7692 16.2858 17.7692 13.7167V6.45C17.7692 3.88084 17.7692 2.59627 16.9191 1.79813C16.069 1 14.7008 1 11.9645 1H10.997C8.26064 1 6.89243 1 6.04234 1.79813C5.19226 2.59627 5.19226 3.88084 5.19226 6.45"
              stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path
              d="M5.19231 16.3708C3.21604 16.3708 2.2279 16.3708 1.61395 15.6887C1 15.0065 1 13.9086 1 11.7127V7.0546C1 4.85875 1 3.76082 1.61395 3.07865C2.2279 2.39648 3.21604 2.39648 5.19231 2.39648"
              stroke="currentColor" stroke-width="1.5" />
            <path d="M3.79492 10.0844H10.7821M10.7821 10.0844L8.84122 12.1806M10.7821 10.0844L8.84122 7.98828"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
          Launch App
        </button>
      </div>
      <div class="w-full bg-secondary h-[41px]">
        <div class="flex justify-center items-center text-[12px] bg-secondary h-full">
          <div class="w-full max-w-[1280px] mx-[60px] h-full flex justify-center relative">
            <!-- Tabs for Cashback and ICB Card -->
            <div class="mx-auto flex flex-wrap justify-center items-center gap-x-2 md:gap-x-3 gap-y-1 h-full">
              <NuxtLink class="nav-menu" to="/about">
                About
              </NuxtLink>
              <NuxtLink class="nav-menu" to="/">
                Blogs
              </NuxtLink>
              <NuxtLink class="nav-menu" href="https://indiancashback.com">
                Cashback
              </NuxtLink>
              <NuxtLink class="nav-menu" to="/icb-card">
                ICB Card
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Header -->
    <div class="desktopHeader hidden lg:block fixed top-0 w-full h-[104px]">
      <!-- Upper section with logo and login button -->
      <div class="w-full bg-primary">
        <div class="h-[63px] bg-primary w-full flex justify-between items-center container mx-auto">
          <div class="flex gap-[8px] items-center cursor-pointer hover:scale-105 transition-all duration-300">
            <NuxtImg alt="" fetchpriority="high" width="260" height="140" decoding="async" data-nimg="1"
              class="h-[110px] w-[240px]" style="color:transparent" src="/assets/icb-beta-logo.svg" />
          </div>

          <div class="flex items-center">
            <button
              class="flex items-center justify-center border border-white px-4 py-3 rounded-md text-white text-sm font-semibold ml-[30px] cursor-pointer hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <svg fill="none" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg"
                class="text-white w-[19px] mr-[10px]">
                <path
                  d="M5.19226 13.7167C5.19226 16.2858 5.19226 17.5704 6.04234 18.3685C6.89243 19.1667 8.26064 19.1667 10.997 19.1667H11.9645C14.7008 19.1667 16.069 19.1667 16.9191 18.3685C17.7692 17.5704 17.7692 16.2858 17.7692 13.7167V6.45C17.7692 3.88084 17.7692 2.59627 16.9191 1.79813C16.069 1 14.7008 1 11.9645 1H10.997C8.26064 1 6.89243 1 6.04234 1.79813C5.19226 2.59627 5.19226 3.88084 5.19226 6.45"
                  stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
                <path
                  d="M5.19231 16.3708C3.21604 16.3708 2.2279 16.3708 1.61395 15.6887C1 15.0065 1 13.9086 1 11.7127V7.0546C1 4.85875 1 3.76082 1.61395 3.07865C2.2279 2.39648 3.21604 2.39648 5.19231 2.39648"
                  stroke="currentColor" stroke-width="1.5" />
                <path d="M3.79492 10.0844H10.7821M10.7821 10.0844L8.84122 12.1806M10.7821 10.0844L8.84122 7.98828"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              </svg>
              Launch App
            </button>
          </div>
        </div>
      </div>
      <!-- Lower section with categories menu -->
      <div class="w-full bg-secondary">
        <div class="flex justify-center items-center h-[41px] text-[12px] bg-secondary">
          <div class="w-full max-w-[1280px] mx-[60px] h-full min-[1440px]:mx-auto flex justify-center relative">
            <!-- Tabs for Cashback and ICB Card -->
            <div class="mx-auto flex">
              <NuxtLink class="nav-menu" to="/about">
                About ICB
              </NuxtLink>
              <NuxtLink class="nav-menu" to="/">
                Blogs
              </NuxtLink>
              <NuxtLink class="nav-menu" to="https://indiancashback.com">
                Cashback
              </NuxtLink>
              <NuxtLink class="nav-menu" to="/icb-card">
                ICB Card
                <div class="bg-primary text-white text-[10px] p-1 ml-1 rounded-sm font-light">
                  Beta
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
}

.text-blackWhite {
  color: black;
}

.dark .text-blackWhite {
  color: white;
}

.maxLines1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.mainHeader {
  background: #574ABE;
}
</style>
