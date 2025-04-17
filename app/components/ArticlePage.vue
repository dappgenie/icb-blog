<script lang="ts" setup>
import type { Collections } from '@nuxt/content'
import { withLeadingSlash, joinURL } from 'ufo'

const route = useRoute()
const { locale, t, localeProperties } = useI18n()

// Get content type from route params, defaulting to 'articles' for backward compatibility
const contentType = computed(() => {
  // If route has a type parameter, use it
  if (route.params.type) {
    return route.params.type as string
  }
  // Otherwise check if we're in a specific route
  if (route.path.includes('/technology/')) {
    return 'technology'
  }
  if (route.path.includes('/fashion/')) {
    return 'fashion'
  }
  if (route.path.includes('/health/')) {
    return 'health'
  }
  if (route.path.includes('/lifestyle/')) {
    return 'lifestyle'
  }
  return 'articles'
})

const collectionType = computed(() => {
  switch (contentType.value) {
    case 'investment':
      return {
        slug: '/investment/articles',
        label: 'Investment',
      }
    case 'technology':
      return {
        slug: '/technology/articles',
        label: 'Technology',
      }
    case 'fashion':
      return {
        slug: '/fashion/articles',
        label: 'Fashion',
      }
    case 'health':
      return {
        slug: '/health/articles',
        label: 'Health',
      }
    case 'lifestyle':
      return {
        slug: '/lifestyle/articles',
        label: 'Lifestyle',
      }
    case 'travel':
      return {
        slug: '/travel/articles',
        label: 'Travel',
      }
    default:
      return {
        slug: '/writings/articles',
        label: 'Articles',
      }
  }
})

// Improved slug handling
const slugSegments = computed(() => {
  // Handle arrays or string values in the catch-all parameter
  if (Array.isArray(route.params.slug)) {
    return route.params.slug as string[]
  }
  if (typeof route.params.slug === 'string') {
    return [route.params.slug]
  }
  return []
})

const path = computed(() =>
  withLeadingSlash(
    joinURL(locale.value, contentType.value, ...slugSegments.value),
  ),
)
const collection = computed(
  () => `${contentType.value}_${locale.value}` as keyof Collections,
)

const { data: page } = await useAsyncData(
  path.value,
  async () =>
    (await queryCollection(collection.value).path(path.value).first()) as
    | Collections['articles_en']
    | Collections['articles_fr']
    | Collections['technology_en']
    | Collections['technology_fr'],
)

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })

// Safe property access function with explicit type parameters
function getProperty<T>(obj: unknown, key: string, defaultValue: T): T {
  return obj && typeof obj === 'object' && key in obj
    ? ((obj as Record<string, unknown>)[key] as T)
    : defaultValue
}

// Check if the content has specific properties
const hasTitle = computed(
  () => page.value && typeof page.value === 'object' && 'title' in page.value,
)
const hasDate = computed(
  () => page.value && typeof page.value === 'object' && 'date' in page.value,
)
const hasReadingTime = computed(
  () =>
    page.value && typeof page.value === 'object' && 'readingTime' in page.value,
)
const hasImage = computed(
  () => page.value && typeof page.value === 'object' && 'image' in page.value,
)

// Safe property getters
const title = computed(() => getProperty(page.value, 'title', ''))
const date = computed(() => getProperty(page.value, 'date', ''))
const readingTime = computed(() => getProperty(page.value, 'readingTime', ''))
const image = computed(() => getProperty(page.value, 'image', ''))

const { copy } = useClipboard()

function copyArticleLink() {
  copy(`${window.location.origin}${route.fullPath}`)
  toast.success(t('global.article_link_copied'))
}

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      copy(`${window.location.origin}${route.fullPath}`)
      toast.success(t('global.article_link_copied'))
    },
  },
})

// Only define OG image if the page has an image property
if (hasImage.value) {
  defineOgImage({
    url: image.value,
  })
}
</script>

<template>
  <div v-if="page">
    <FolioMeta :page :is-writing="true" />
    <NuxtLinkLocale :to="collectionType.slug"
      class="mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted hover:text-primary transition-colors duration-200 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
      <UIcon name="lucide:arrow-left" class="size-4" />
      <span class="text-sm font-extralight">
        {{ collectionType.label }}
      </span>
    </NuxtLinkLocale>
    <article class="writing mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl pb-20 lg:pb-28">
      <h1 v-if="hasTitle">
        {{ title }}
      </h1>
      <div class="info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4">
        <p v-if="hasDate" class="date">
          {{ date }}
        </p>
        <p v-if="hasDate" class="hidden sm:block">
          |
        </p>
        <p v-if="hasReadingTime" class="reading-time">
          {{ readingTime }} {{ $t("writing.readingTime") }}
        </p>
        <p v-if="hasReadingTime" class="hidden sm:block">
          |
        </p>
        <button
          class="flex cursor-pointer select-none items-start gap-1 transition-colors duration-200 hover:text-primary"
          @click="copyArticleLink">
          {{ $t("writing.share") }}
          <UIcon name="lucide:link" class="size-4 mt-[6px]" />
        </button>
      </div>
      <div class="mb-8 space-x-1">
        <span v-for="tag in page.tags" :key="tag"
          class="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
          {{ tag }}
        </span>
      </div>
      <ContentRenderer v-if="page" :dir="localeProperties?.dir ?? 'ltr'" :value="page" />
    </article>
  </div>
</template>

<style scoped>
.info-section {
  font-weight: 200;
  color: #7d8084;
  text-decoration: none;
  text-align: left;
}
</style>
