<script setup lang="ts">
defineProps({
  as: {
    type: String,
    default: 'button',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  animate: {
    type: Boolean,
    default: true,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <component :is="as" :class="`group cursor-pointer hover:scale-105 relative inline-flex items-center overflow-hidden transition ${rounded ? 'rounded-full' : 'rounded-md px-8 py-1'} ${transparent ? '' : 'bg-zinc-800'
    }`">
    <div v-if="animate" class="absolute inset-0 flex items-center [container-type:inline-size]">
      <div
        class="absolute size-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-50 transition duration-300 group-hover:opacity-100" />
    </div>

    <div class="absolute inset-0.5 bg-primary sm:backdrop-blur-md"
      :class="`${transparent ? '' : 'bg-background'} ${rounded ? 'rounded-full' : 'rounded-md'}`" />


    <slot />
  </component>
</template>
