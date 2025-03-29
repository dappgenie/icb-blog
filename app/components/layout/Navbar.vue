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
    <div class="lg:hidden">
      <div class="flex items-center h-[65px] px-[20px] mainHeader fixed t-0 l-0 w-full z-[999]">
        <a
          class="ml-[13px]"
          href="/"
        >
          <NuxtImg
            alt=""
            fetchpriority="high"
            width="100"
            height="150"
            decoding="async"
            data-nimg="1"
            class="h-[100px] w-[75px] mb-[15px]"
            style="color:transparent"
            src="/assets/icb-beta-mobile-logo.svg"
          />
        </a>

        <button class="ml-[25px]">
          <svg
            fill="none"
            height="19"
            viewBox="0 0 21 19"
            width="21"
            xmlns="http://www.w3.org/2000/svg"
            class="text-white w-[21px] h-[19px] ml-auto"
          >
            <rect
              fill="currentColor"
              height="2"
              rx="1"
              transform="rotate(38.8323 13.7109 11.5635)"
              width="9.30042"
              x="13.7109"
              y="11.5635"
            />
            <path
              clip-rule="evenodd"
              d="M8.30742 2.19466C4.89917 2.19466 2.12637 4.96672 2.12637 8.37497C2.12637 11.7832 4.89917 14.556 8.30742 14.556C11.7149 14.556 14.4877 11.7832 14.4877 8.37497C14.4877 4.96672 11.7149 2.19466 8.30742 2.19466ZM8.30638 15.6813C4.27771 15.6813 1 12.4036 1 8.37496C1 4.34629 4.27771 1.06934 8.30638 1.06934C12.3351 1.06934 15.612 4.34629 15.612 8.37496C15.612 12.4036 12.3351 15.6813 8.30638 15.6813Z"
              fill="currentColor"
              fill-rule="evenodd"
            />
            <path
              d="M8.30742 1.94466C4.76114 1.94466 1.87637 4.82861 1.87637 8.37497H2.37637C2.37637 5.10483 5.03721 2.44466 8.30742 2.44466V1.94466ZM1.87637 8.37497C1.87637 11.9213 4.7611 14.806 8.30742 14.806V14.306C5.03724 14.306 2.37637 11.6451 2.37637 8.37497H1.87637ZM8.30742 14.806C11.853 14.806 14.7377 11.9213 14.7377 8.37497H14.2377C14.2377 11.6452 11.5768 14.306 8.30742 14.306V14.806ZM14.7377 8.37497C14.7377 4.82863 11.853 1.94466 8.30742 1.94466V2.44466C11.5769 2.44466 14.2377 5.10481 14.2377 8.37497H14.7377ZM8.30638 15.4313C4.41578 15.4313 1.25 12.2656 1.25 8.37496H0.75C0.75 12.5417 4.13963 15.9313 8.30638 15.9313V15.4313ZM1.25 8.37496C1.25 4.4844 4.41574 1.31934 8.30638 1.31934V0.819336C4.13967 0.819336 0.75 4.20819 0.75 8.37496H1.25ZM8.30638 1.31934C12.197 1.31934 15.362 4.48436 15.362 8.37496H15.862C15.862 4.20822 12.4731 0.819336 8.30638 0.819336V1.31934ZM15.362 8.37496C15.362 12.2656 12.1969 15.4313 8.30638 15.4313V15.9313C12.4732 15.9313 15.862 12.5417 15.862 8.37496H15.362Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div class="h-[65px]" />
    </div>

    <!-- Desktop Header -->
    <div class="desktopHeader hidden lg:block fixed top-0 w-full h-[104px]">
      <!-- Upper section with logo and login button -->
      <div class="h-[63px] bg-primary w-full flex justify-between items-center lg:px-[60px] xl:px-[130px]">
        <div class="flex gap-[8px] items-center cursor-pointer hover:scale-105 transition-all duration-300">
          <NuxtImg
            alt=""
            fetchpriority="high"
            width="260"
            height="140"
            decoding="async"
            data-nimg="1"
            class="h-[110px] w-[240px]"
            style="color:transparent"
            src="/assets/icb-beta-logo.svg"
          />
        </div>

        <div class="flex items-center">
          <button class="flex items-center justify-center border border-white px-4 py-3 rounded-md text-white text-sm font-semibold ml-[30px] cursor-pointer hover:bg-white/10 hover:scale-105 transition-all duration-300">
            <svg
              fill="none"
              viewBox="0 0 19 20"
              xmlns="http://www.w3.org/2000/svg"
              class="text-white w-[19px] mr-[10px]"
            >
              <path
                d="M5.19226 13.7167C5.19226 16.2858 5.19226 17.5704 6.04234 18.3685C6.89243 19.1667 8.26064 19.1667 10.997 19.1667H11.9645C14.7008 19.1667 16.069 19.1667 16.9191 18.3685C17.7692 17.5704 17.7692 16.2858 17.7692 13.7167V6.45C17.7692 3.88084 17.7692 2.59627 16.9191 1.79813C16.069 1 14.7008 1 11.9645 1H10.997C8.26064 1 6.89243 1 6.04234 1.79813C5.19226 2.59627 5.19226 3.88084 5.19226 6.45"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
              />
              <path
                d="M5.19231 16.3708C3.21604 16.3708 2.2279 16.3708 1.61395 15.6887C1 15.0065 1 13.9086 1 11.7127V7.0546C1 4.85875 1 3.76082 1.61395 3.07865C2.2279 2.39648 3.21604 2.39648 5.19231 2.39648"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M3.79492 10.0844H10.7821M10.7821 10.0844L8.84122 12.1806M10.7821 10.0844L8.84122 7.98828"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
            Launch App
          </button>
        </div>
      </div>

      <!-- Lower section with categories menu -->
      <div class="flex justify-center items-center h-[41px] text-[12px] bg-secondary">
        <div class="w-full max-w-[1280px] mx-[60px] h-full min-[1440px]:mx-auto flex justify-center relative">
          <!-- Tabs for Cashback and ICB Card -->
          <div class="mx-auto flex">
            <div class="nav-menu">
              About ICB
            </div>
            <NuxtLink class="nav-menu" to="/en/writing">
              Blogs
            </NuxtLink>
            <div class="nav-menu">
              Cashback
            </div>
            <div class="nav-menu">
              ICB Card
              <div class="bg-primary text-white text-[10px] p-1 ml-1 rounded-sm font-light">
                Beta
              </div>
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
