<script setup lang="ts">
// No need to use profile from appConfig since we'll use the company logo
</script>

<template>
  <div class="flex justify-center">
    <SpotlightCard
      mode="after"
      from="rgba(87, 74, 190, 0.3)"
      :size="400"
      class="group hidden w-64 rounded-2xl border border-[#574ABE]/20 bg-white p-6 shadow-md sm:flex"
    >
      <div class="relative">
        <div class="absolute inset-0 size-52 scale-110 rounded-full bg-[#574ABE]/10 blur-xl transition-all duration-300 group-hover:blur-[32px]" />
        <NuxtImg
          src="/assets/logo.png"
          class="relative mx-auto size-52 object-contain transition-all duration-300 group-hover:scale-105"
          alt="Indian Cashback Logo"
          aria-label="Indian Cashback Logo"
        />
      </div>
    </SpotlightCard>
    <SpotlightCard
      mode="after"
      from="rgba(87, 74, 190, 0.3)"
      :size="400"
      class="group w-64 rounded-2xl border border-[#574ABE]/20 bg-white p-6 shadow-md sm:hidden"
    >
      <NuxtImg
        src="/assets/logo.png"
        class="mx-auto size-52 object-contain transition-all duration-300"
        alt="Indian Cashback Logo"
        aria-label="Indian Cashback Logo"
      />
    </SpotlightCard>
  </div>
</template>
