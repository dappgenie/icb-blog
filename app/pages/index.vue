<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()

const { data: technologiesList } = await useAsyncData(`technology-${locale.value}`, async () => {
  const collection = (`technology_${locale.value}`) as keyof Collections
  return await queryCollection(collection).all() as Collections['technology_en'][] | Collections['technology_fr'][]
}, {
  watch: [locale],
})

const { data: cashbackList } = await useAsyncData(`cashback-${locale.value}`, async () => {
  const collection = (`cashback_${locale.value}`) as keyof Collections
  return await queryCollection(collection).all() as Collections['cashback_en'][] | Collections['cashback_fr'][]
}, {
  watch: [locale],
})

if (!technologiesList.value && !cashbackList.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <slot
        name="subtitle"
        mdc-unwrap="p"
      />
    </h2>
    <Divider class="mb-8 mt-2" />
    <TransitionGroup
      v-if="technologiesList && technologiesList.length"
      name="list"
      tag="ul"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <li
        v-for="article of technologiesList"
        :key="article.path"
      >
        <ArticleCard
          :title="article.title"
          :date="article.date"
          :image="article.image"
          :path="article.path"
        />
      </li>
    </TransitionGroup>
    <Divider class="mb-8 mt-2" />
    <TransitionGroup
      v-if="cashbackList && cashbackList.length"
      name="list"
      tag="ul"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <li
        v-for="article of cashbackList"
        :key="article.path"
      >
        <ArticleCard
          :title="article.title"
          :date="article.date"
          :image="article.image"
          :path="article.path"
        />
      </li>
    </TransitionGroup>
    <div
      v-else
      class="flex h-64 flex-col items-center justify-center gap-2"
    >
      <span class="text-2xl">
        {{ $t("writing.not_found") }}
      </span>
      <span class="text-sm">
        {{ $t("writing.not_found_description") }}
      </span>
    </div>
  </section>
</template>
