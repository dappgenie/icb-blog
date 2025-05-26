<template>
  <footer
    :class="[
      props.rootClass,
      route.path === '/' && 'mt-5',
      'bg-[#7366D9] w-full relative flex flex-col justify-around h-full mx-auto mb-[60px] lg:mb-0 pt-[40px]',
    ]"
  >
    <div class="grid lg:grid-cols-10 grid-cols-3 lg:px-[100px] px-[16px] pb-[40px] gap-y-6 md:gap-y-0 gap-x-3">
      <!-- ICB Logo and Description -->
      <div class="col-span-3 lg:col-span-3 flex flex-col items-start mb-6 lg:mb-0">
        <NuxtLink
          class="flex items-center mb-4"
          href="https://indiancashback.com/"
          target="_blank"
        >
          <!-- ICB Logo placeholder - you'll need to add your actual logo component -->
          <NuxtImg
            src="/svg/footer-cards/logo.svg"
            alt="ICB Logo"
            class="w-[40px] h-[30px] mr-2 flex items-center justify-center !text-white brightness-0 invert"
          />
          <div class="flex flex-col">
            <span class="text-white font-nexa text-sm font-bold">
              Indian CashBack
            </span>
          </div>
        </NuxtLink>
        <h1 class="text-[#CDC7FF] text-xs leading-relaxed mb-4 max-w-xl lg:max-w-[280px] font-bold">
          India's leading cashback and coupons website.
        </h1>
        <p class="text-[#CDC7FF] text-xs leading-relaxed mb-4 max-w-xl lg:max-w-[280px]">
          IndianCashBack is India's leading cashback and coupons website. We
          help you save on all your online shopping with the best offers and
          deals from top brands and stores.
        </p>
        <!-- Android App Coming Soon Banner -->
        <div class="w-auto flex justify-center items-center py-0 bg-transparent">
          <NuxtLink
            class="group"
            href="https://indiancashback.com/"
            target="_blank"
          >
            <div class="flex items-center gap-2 bg-gradient-to-r from-[#8171FF] to-[#574ABE] px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:from-[#574ABE] group-hover:to-[#8171FF]">
              <div class="relative flex items-center justify-center w-[24px] h-[24px] bg-white rounded-full animate-pulse">
                🎉
              </div>
              <span class="text-white text-xs font-medium whitespace-nowrap">
                Android App Coming Soon!
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="col-span-3 lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6">
        <!-- Knowledge Base Section -->
        <div class="text-white">
          <p class="py-3 text-xs md:text-sm lg:text-base font-medium">
            Knowledge Base
          </p>
          <div class="font-light text-[#CDC7FF] text-xs flex-col flex gap-3">
            <NuxtLink
              href="https://indiancashbackcom.tawk.help/"
              target="_blank"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              My Tickets
            </NuxtLink>
            <NuxtLink
              href="https://tawk.to/indiancashback"
              target="_blank"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              Support
            </NuxtLink>
            <NuxtLink
              href="/faqs"
              target="_blank"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              FAQ
            </NuxtLink>
            <NuxtLink
              href="https://blog.indiancashback.com/en"
              target="_blank"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              href="/about-us"
              target="_blank"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              About ICB
            </NuxtLink>
          </div>
        </div>

        <!-- Help Section -->
        <div class="text-white">
          <p class="py-3 text-xs md:text-sm lg:text-base font-medium">
            Help
          </p>
          <div class="font-light text-[#CDC7FF] text-xs flex-col flex gap-3">
            <NuxtLink
              href="/contact"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              Contact Us
            </NuxtLink>
            <NuxtLink
              href="https://indiancashbackcom.tawk.help/article/understanding-how-indiancashback-works"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              How ICB Works?
            </NuxtLink>
            <NuxtLink
              href="/best-practices"
              target="_blank"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              CashBack - Best Practices
            </NuxtLink>
          </div>
        </div>

        <!-- Policy Section (desktop) -->
        <div class="text-white hidden md:block">
          <p class="py-3 text-xs md:text-sm lg:text-base font-medium">
            Policy
          </p>
          <div class="font-light text-[#CDC7FF] text-xs flex-col flex gap-3">
            <NuxtLink
              href="https://indiancashback.com/terms-and-conditions"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              Terms and Conditions
            </NuxtLink>
            <NuxtLink
              href="https://indiancashback.com/privacy-policies"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              Privacy Policy
            </NuxtLink>
          </div>
          <NuxtLink
            href="https://www.google.com/transparencyreport/safebrowsing/diagnostic/#url=https://www.indiancashback.com"
            target="_blank"
            class="pull-left footer_app_link play"
          >
            <p class="py-3 text-xs md:text-sm lg:text-base font-medium">
              Security
            </p>
            <img
              alt="google safe browsing"
              class="rounded-md"
              height="42"
              src="/assets/safe-browse.png"
              width="116"
            >
          </NuxtLink>
        </div>
      </div>

      <div class="col-span-3 lg:col-span-3 grid grid-cols-1 pt-[10px] md:pt-0">
        <NuxtLink
          class="text-white md:hidden"
          href="https://www.google.com/transparencyreport/safebrowsing/diagnostic/#url=https://www.indiancashback.com"
          target="_blank"
        >
          <p class="py-3 text-xs md:text-sm lg:text-base font-medium">
            Security
          </p>
          <img
            alt="google safe browsing"
            class="rounded-md"
            height="42"
            src="/assets/safe-browse.png"
            width="116"
          >
        </NuxtLink>

        <!-- Policy Section (mobile) -->
        <div class="text-white md:hidden">
          <p class="py-3 text-xs md:text-sm lg:text-base font-medium">
            Policy
          </p>
          <div class="font-light text-[#CDC7FF] text-xs flex-col flex gap-3">
            <NuxtLink
              href="https://indiancashback.com/terms-and-conditions"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              Terms and Conditions
            </NuxtLink>
            <NuxtLink
              href="https://indiancashback.com/privacy-policies"
              class="hover:text-white transition-colors duration-200 hover:underline"
            >
              Privacy Policy
            </NuxtLink>
          </div>
        </div>

        <!-- Address Section -->
        <div class="col-span-2 lg:col-span-1 mt-4 lg:mt-0">
          <p class="py-3 text-white text-xs md:text-sm lg:text-base font-medium">
            Office Address
          </p>
          <div class="font-light text-[#CDC7FF] text-xs flex-col flex gap-3">
            <p class="text tracking-widest leading-[1.6]">
              Revontulet solutions private limited <br>
              No.112, AKR Tech Park, <br>
              "A" Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area, <br>
              Bengaluru - 560068
            </p>
            <NuxtLink
              href="#"
              class="hover:text-white transition-colors duration-200 hover:underline"
              @click="handleEmailClick"
            >
              connect@indiancashback.com
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Media and Cards Section -->
    <div class="w-full flex flex-col-reverse lg:flex-row justify-around items-center">
      <div class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 bg-[#4B3FA9] w-full py-4 lg:py-0 lg:h-[80px] lg:w-[40%]">
        <p class="text-white text-[10px] md:text-xs tracking-widest">
          Follow Us
        </p>
        <div class="flex items-center gap-4 cursor-pointer">
          <NuxtLink
            href="https://t.me/indiancashbackofficial"
            target="_blank"
            class="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
          >
            <div class="text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0562 4.28125C18.8562 5.20312 2.75 12.1094 2.75 12.1094L8.34375 14.0469L10.3594 20.5625C10.3594 20.5625 10.6875 21.1094 11.0156 21.1094C11.3438 21.1094 16.3594 16.3125 16.3594 16.3125L21.0562 19.6406L21.875 19.9688C21.875 19.9688 22.7969 20.3906 22.7969 19.4688C22.7969 18.5469 19.7969 4.9375 19.7969 4.9375C19.7969 4.03125 19.4688 3.93751 18.8562 4.28125H21.0562ZM18.6094 6.875C18.6094 6.875 20.3906 16.4219 20.6406 18.4844L16.7656 15.6719L14.4219 19.1406L15.1094 14.7031L18.6094 6.875ZM5.92187 12.5469L16.4686 7.54688L13.5 13.7812L9.625 14.2969L5.92187 12.5469Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </NuxtLink>
          <NuxtLink
            href="https://whatsapp.com/channel/0029VaLW0IoCcW4zFzzcqY23"
            target="_blank"
            class="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
          >
            <div class="text-white w-[26px]">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 2.5C7.2 2.5 2.5 7.2 2.5 13c0 2.3 0.7 4.4 2 6.2L2.5 23.5l4.4-2c1.7 1.2 3.8 1.9 6.1 1.9 5.8 0 10.5-4.7 10.5-10.5S18.8 2.5 13 2.5zm5.2 14.8c-0.2 0.6-1.2 1.1-1.7 1.2-0.4 0.1-0.9 0.1-1.5-0.1-0.4-0.1-0.8-0.3-1.4-0.5-2.5-1.1-4.1-3.6-4.2-3.8-0.1-0.2-1-1.3-1-2.5s0.6-1.8 0.8-2c0.2-0.2 0.4-0.3 0.6-0.3s0.4 0 0.6 0c0.2 0 0.4-0.1 0.6 0.5s1 2.4 1.1 2.6c0.1 0.2 0.1 0.4 0 0.6s-0.2 0.4-0.3 0.6c-0.1 0.2-0.3 0.4-0.1 0.8c0.2 0.4 0.9 1.5 1.9 2.4 1.3 1.2 2.4 1.6 2.7 1.7s0.5 0.1 0.7-0.1c0.2-0.2 0.8-0.9 1-1.2s0.4-0.2 0.7-0.1 1.8 0.8 2.1 1c0.3 0.2 0.5 0.3 0.6 0.5C18.4 16.1 18.4 16.7 18.2 17.3z" />
              </svg>
            </div>
          </NuxtLink>
          <NuxtLink
            href="https://twitter.com/Indian_cashback"
            target="_blank"
            class="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
          >
            <div class="text-white w-[26px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 26 26"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2969 6.92188C22.5469 7.25 21.75 7.48438 20.9062 7.57812C21.7656 7.0625 22.4219 6.26562 22.7344 5.28125C21.9375 5.76562 21.0469 6.125 20.1094 6.3125C19.3438 5.51562 18.2656 5.0625 17.0781 5.0625C14.8125 5.0625 13 6.89062 13 9.14062C13 9.46875 13.0312 9.78125 13.1094 10.0781C9.75 9.90625 6.76562 8.28125 4.78125 5.875C4.42188 6.48438 4.21875 7.0625 4.21875 7.71875C4.21875 8.92188 4.8125 10 5.75 10.6406C5.0625 10.625 4.40625 10.4375 3.84375 10.1562V10.2031C3.84375 12.1875 5.25 13.8438 7.10938 14.2344C6.76562 14.3281 6.39062 14.375 6 14.375C5.73438 14.375 5.48438 14.3594 5.23438 14.3125C5.75 15.9375 7.25 17.125 9.04688 17.1562C7.67188 18.25 5.92188 18.9062 4.03125 18.9062C3.6875 18.9062 3.35938 18.8906 3.03125 18.8438C4.84375 20.0156 6.98438 20.6875 9.28125 20.6875C17.0781 20.6875 21.3125 14.4375 21.3125 9.03125C21.3125 8.85938 21.3125 8.6875 21.3125 8.51562C22.125 7.92188 22.8281 7.1875 23.2969 6.35938V6.92188Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </NuxtLink>
          <NuxtLink
            href="https://www.instagram.com/indian_cashback/"
            target="_blank"
            class="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
          >
            <div class="text-white w-[26px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 26 26"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2.9375C16.4219 2.9375 16.8281 2.95312 18.1875 3.01562C19.4531 3.07812 20.1875 3.28125 20.6719 3.45312C21.3125 3.67188 21.7656 3.9375 22.2344 4.40625C22.7031 4.875 22.9688 5.32812 23.1875 5.96875C23.3594 6.45312 23.5625 7.1875 23.625 8.45312C23.6875 9.8125 23.7031 10.2188 23.7031 13.6406C23.7031 17.0625 23.6875 17.4688 23.625 18.8281C23.5625 20.0938 23.3594 20.8281 23.1875 21.3125C22.9688 21.9531 22.7031 22.4062 22.2344 22.875C21.7656 23.3438 21.3125 23.6094 20.6719 23.8281C20.1875 24.0001 19.4531 24.2031 18.1875 24.2656C16.8281 24.3281 16.4219 24.3438 13 24.3438C9.57812 24.3438 9.17188 24.3281 7.8125 24.2656C6.54688 24.2031 5.8125 24.0001 5.32812 23.8281C4.6875 23.6094 4.23438 23.3438 3.76562 22.875C3.29688 22.4062 3.03125 21.9531 2.8125 21.3125C2.64062 20.8281 2.4375 20.0938 2.375 18.8281C2.3125 17.4688 2.29688 17.0625 2.29688 13.6406C2.29688 10.2188 2.3125 9.8125 2.375 8.45312C2.4375 7.1875 2.64062 6.45312 2.8125 5.96875C3.03125 5.32812 3.29688 4.875 3.76562 4.40625C4.23438 3.9375 4.6875 3.67188 5.32812 3.45312C5.8125 3.28125 6.54688 3.07812 7.8125 3.01562C9.17188 2.95312 9.57812 2.9375 13 2.9375ZM13 0.890625C9.53125 0.890625 9.09375 0.90625 7.71875 0.96875C6.34375 1.03125 5.35938 1.25 4.5 1.57812C3.60938 1.92188 2.85938 2.375 2.10938 3.125C1.35938 3.875 0.90625 4.625 0.5625 5.51562C0.234375 6.375 0.015625 7.35938 -0.046875 8.73438C-0.109375 10.1094 -0.125 10.5469 -0.125 14.0156C-0.125 17.4844 -0.109375 17.9219 -0.046875 19.2969C0.015625 20.6719 0.234375 21.6562 0.5625 22.5156C0.90625 23.4062 1.35938 24.1562 2.10938 24.9062C2.85938 25.6562 3.60938 26.1094 4.5 26.4531C5.35938 26.7812 6.34375 27.0001 7.71875 27.0625C9.09375 27.125 9.53125 27.1406 13 27.1406C16.4688 27.1406 16.9062 27.125 18.2812 27.0625C19.6562 27.0001 20.6406 26.7812 21.5 26.4531C22.3906 26.1094 23.1406 25.6562 23.8906 24.9062C24.6406 24.1562 25.0938 23.4062 25.4375 22.5156C25.7656 21.6562 25.9844 20.6719 26.0469 19.2969C26.1094 17.9219 26.125 17.4844 26.125 14.0156C26.125 10.5469 26.1094 10.1094 26.0469 8.73438C25.9844 7.35938 25.7656 6.375 25.4375 5.51562C25.0938 4.625 24.6406 3.875 23.8906 3.125C23.1406 2.375 22.3906 1.92188 21.5 1.57812C20.6406 1.25 19.6562 1.03125 18.2812 0.96875C16.9062 0.90625 16.4688 0.890625 13 0.890625Z"
                  fill="currentColor"
                />
                <path
                  d="M13 7.15625C9.39062 7.15625 6.45312 10.0938 6.45312 13.7031C6.45312 17.3125 9.39062 20.25 13 20.25C16.6094 20.25 19.5469 17.3125 19.5469 13.7031C19.5469 10.0938 16.6094 7.15625 13 7.15625ZM13 18.2031C10.5312 18.2031 8.5 16.1719 8.5 13.7031C8.5 11.2344 10.5312 9.20312 13 9.20312C15.4688 9.20312 17.5 11.2344 17.5 13.7031C17.5 16.1719 15.4688 18.2031 13 18.2031Z"
                  fill="currentColor"
                />
                <path
                  d="M19.7969 5.17188C19.7969 5.96875 19.1562 6.60938 18.3594 6.60938C17.5625 6.60938 16.9219 5.96875 16.9219 5.17188C16.9219 4.375 17.5625 3.73438 18.3594 3.73438C19.1562 3.73438 19.7969 4.375 19.7969 5.17188Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </NuxtLink>
          <NuxtLink
            href="https://www.facebook.com/indiancashback"
            target="_blank"
            class="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
          >
            <div class="text-white w-[26px]">
              <svg
                width="21"
                height="21"
                viewBox="0 0 26 26"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5469 3.0625C23.3594 3.0625 24.0156 3.71875 24.0156 4.53125V22.4688C24.0156 23.2812 23.3594 23.9375 22.5469 23.9375H17.1562V15.9844H20.0312L20.4844 12.5625H17.1562V10.3438C17.1562 9.45312 17.4219 8.82812 18.7031 8.82812H20.5781V5.76562C20.2812 5.73438 19.2656 5.65625 18.0781 5.65625C15.625 5.65625 13.9688 7.14062 13.9688 10.0312V12.5625H11.0781V15.9844H13.9688V23.9375H4.45312C3.64062 23.9375 2.98438 23.2812 2.98438 22.4688V4.53125C2.98438 3.71875 3.64062 3.0625 4.45312 3.0625H22.5469Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </NuxtLink>
          <NuxtLink
            href="https://www.youtube.com/indiancashback"
            target="_blank"
            class="hover:opacity-80 transition-opacity transform hover:scale-110 duration-200"
          >
            <div class="text-white w-[28px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 26"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.8438 6.85938C24.625 6.03125 23.9531 5.35938 23.125 5.14062C21.5625 4.75 14 4.75 14 4.75C14 4.75 6.4375 4.75 4.875 5.14062C4.04688 5.35938 3.375 6.03125 3.15625 6.85938C2.78125 8.42188 2.78125 11.6094 2.78125 11.6094C2.78125 11.6094 2.78125 14.7969 3.15625 16.3594C3.375 17.1875 4.04688 17.8594 4.875 18.0781C6.4375 18.4688 14 18.4688 14 18.4688C14 18.4688 21.5625 18.4688 23.125 18.0781C23.9531 17.8594 24.625 17.1875 24.8438 16.3594C25.2188 14.7969 25.2188 11.6094 25.2188 11.6094C25.2188 11.6094 25.2188 8.42188 24.8438 6.85938ZM11.6562 14.6094V8.60938L17.8438 11.6094L11.6562 14.6094Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="flex justify-center flex-wrap items-center gap-1 md:gap-2 py-6 lg:py-0 lg:h-[80px] lg:bg-[#4B3FA9] flex-grow">
        <img
          :src="'/svg/footer-cards/card1.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
        <img
          :src="'/svg/footer-cards/card2.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
        <img
          :src="'/svg/footer-cards/card3.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
        <img
          :src="'/svg/footer-cards/card4.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
        <img
          :src="'/svg/footer-cards/card5.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
        <img
          :src="'/svg/footer-cards/card6.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
        <img
          :src="'/svg/footer-cards/card7.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
        <img
          :src="'/svg/footer-cards/card8.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
        <img
          :src="'/svg/footer-cards/card9.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
        <img
          :src="'/svg/footer-cards/card10.svg'"
          alt="card-svg"
          class="hover:scale-110 transition-transform duration-200 w-[33px] md:w-[40px] lg:w-[47px]"
        >
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="text-center w-full text-white text-[10px] md:text-xs tracking-widest flex items-center justify-center py-4 bg-[#4B3FA9] lg:bg-transparent lg:h-[60px]">
      <p>
        2013 - {{ new Date().getFullYear() }} Indiancashback.com (
        <NuxtLink
          href="https://revontulet.solutions/"
          target="_blank"
          class="hover:underline"
        >
          REVONTULET SOLUTIONS
        </NuxtLink>
        ). All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

// Define props
const props = defineProps({
  rootClass: {
    type: String,
    default: '',
  },
})

// Access route for path-based styling
const route = useRoute()

// Handle email click (you can implement email protection logic here)
const handleEmailClick = () => {
  // Add your email protection logic here
  console.log('Email clicked')
}
</script>
