<template>
  <div class="bg-washi min-h-screen pb-24"> <!-- Padding bottom for sticky CTA -->
    <div v-if="pending" class="flex justify-center py-20">
      <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-vermilion"></div>
    </div>

    <div v-else-if="error || !data" class="container mx-auto px-4 py-20 text-center">
      <p class="text-sumi mb-6">デザインが見つかりませんでした。</p>
      <ContactButton to="/catalog" variant="outline">一覧に戻る</ContactButton>
    </div>

    <div v-else class="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-500 mb-8 flex items-center gap-2">
        <NuxtLink to="/" class="hover:text-vermilion">TOP</NuxtLink>
        <span>&gt;</span>
        <NuxtLink to="/catalog" class="hover:text-vermilion">デザイン一覧</NuxtLink>
        <span>&gt;</span>
        <span class="text-sumi">{{ data.title }}</span>
      </nav>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        <!-- Left: Image -->
        <div class="relative">
          <div class="bg-white p-2 shadow-sm border border-gray-100">
            <div class="aspect-[3/4] overflow-hidden bg-gray-50 relative group cursor-zoom-in">
               <NuxtImg
                :src="data.main_image.url"
                :alt="data.title"
                class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                width="600"
                height="800"
                format="webp"
                quality="90"
              />
            </div>
          </div>
        </div>

        <!-- Right: Info -->
        <div class="flex flex-col">
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="cat in data.category" 
              :key="cat"
              class="text-xs font-serif bg-white border border-gray-200 text-gray-600 px-3 py-1"
            >
              {{ cat }}
            </span>
          </div>

          <h1 class="text-3xl md:text-4xl font-bold font-serif text-sumi mb-8 tracking-widest leading-relaxed">
            {{ data.title }}
          </h1>

          <div class="prose prose-sm md:prose-base text-gray-600 font-light leading-loose mb-10">
            <div v-html="data.description"></div>
          </div>

          <!-- Desktop CTA -->
          <div class="hidden md:block mt-auto">
            <div class="bg-white p-6 border border-gray-100 shadow-sm text-center">
              <p class="font-serif text-sumi mb-4">このデザインについて問い合わせる</p>
              <ContactButton 
                :href="lineUrl"
                target="_blank" 
                variant="primary" 
                :block="true"
                size="lg"
              >
                LINEで相談する
              </ContactButton>
              <p class="text-xs text-gray-400 mt-2">
                ※ 品番「{{ data.id_name }}」が自動的に送信されます
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Mobile Sticky CTA -->
    <div class="fixed bottom-0 left-0 w-full z-40 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 shadow-lg">
      <ContactButton 
        :href="lineUrl"
        target="_blank" 
        variant="primary" 
        :block="true"
        class="shadow-md"
        :rounded="true"
      >
        <span class="flex items-center gap-2">
           <span>LINEで相談する</span>
        </span>
      </ContactButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useRoute, useSeoMeta } from 'nuxt/app';
import { computed } from 'vue';
import { useMicroCMS } from '~/composables/useMicroCMS';
import type { Catalog } from '~/types';

const route = useRoute();
const { getDetail } = useMicroCMS();

// LINE URL Logic
// https://line.me/R/oaMessage/{@LINE_ID}/?message
const lineId = '@senjafuda_demo'; // Replace with real ID
const lineUrl = computed(() => {
  if (!data.value) return '';
  const message = `デザイン【${data.value.id_name}】について相談したいです`;
  return `https://line.me/R/oaMessage/${lineId}/?${encodeURIComponent(message)}`;
});

const { data, pending, error } = await useAsyncData(`catalog-${route.params.id}`, () => 
  getDetail<Catalog>('catalog', route.params.id as string)
);

if (data.value) {
  const descriptionSnippet = data.value.meta_description || data.value.description.replace(/<[^>]*>?/gm, '').slice(0, 100);
  
  useSeoMeta({
    title: `${data.value.title} | 千社札カタログ`,
    description: descriptionSnippet,
    ogTitle: `${data.value.title} | 千社札カタログ`,
    ogImage: `${data.value.main_image.url}?auto=format,compress`,
  });
}
</script>
