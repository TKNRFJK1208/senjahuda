<template>
  <div class="bg-washi min-h-screen pb-20">
    <div v-if="error" class="container mx-auto px-4 py-20 text-center text-red-500 font-serif">
      <p class="mb-4">プレビューの読み込みに失敗しました。</p>
      <p class="text-sm">URLまたはドラフトキーが正しいか確認してください。</p>
    </div>
    
    <div v-else-if="!data" class="flex justify-center py-20">
       <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-vermilion"></div>
    </div>

    <!-- Render Item Detail for Preview -->
    <div v-else class="container mx-auto px-4 py-8 md:py-12 max-w-5xl relative">
       <div class="fixed top-20 right-4 z-50 bg-yellow-400 text-black px-4 py-2 rounded shadow-lg font-bold text-xs tracking-widest pointer-events-none">
        PREVIEW MODE
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        <!-- Left: Image -->
        <div class="relative">
          <div class="bg-white p-2 shadow-sm border border-gray-100">
             <div class="aspect-[3/4] overflow-hidden bg-gray-50 relative">
               <NuxtImg
                v-if="data.main_image"
                :src="data.main_image.url"
                :alt="data.title"
                class="w-full h-full object-cover"
                width="600"
                height="800"
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

           <div class="mt-auto bg-gray-50 p-4 border border-gray-200 text-center text-xs text-gray-500">
             プレビューモードのため、CTAボタンは無効化されています。
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useRoute, useHead } from 'nuxt/app';
import { useMicroCMS } from '~/composables/useMicroCMS';
import type { Catalog } from '~/types';

const route = useRoute();
const { getDetail } = useMicroCMS();

const contentId = route.query.id as string;
const draftKey = route.query.draftKey as string;

const { data, error } = await useAsyncData(`preview-${contentId}`, () => {
  if (!contentId || !draftKey) throw new Error('Missing contentId or draftKey');
  return getDetail<Catalog>('catalog', contentId, { draftKey });
});

useHead({
  title: 'プレビュー',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
});
</script>
