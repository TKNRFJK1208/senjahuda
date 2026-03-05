<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-gray-100 overflow-hidden">
      <!-- Placeholder Background - In production, use a real Hero Image -->
      <div class="absolute inset-0 bg-[url('https://images.microcms-assets.io/assets/65e9c0c3a88a44002a2c3f8e/0a1b2c3d4e5f/senjafuda-hero-pattern.png')] opacity-10 bg-repeat"></div>
      
      <div class="relative z-10 w-full max-w-6xl mx-auto px-4 h-full flex items-center justify-end">
        <div class="writing-vertical text-right py-10">
          <h1 class="text-4xl md:text-6xl font-serif text-sumi tracking-[0.2em] leading-relaxed border-l border-vermilion pl-6 ml-6">
            伝統を、<br><span class="text-vermilion">日常</span>に。
          </h1>
          <p class="text-gray-500 text-sm md:text-base tracking-widest mt-6 font-light">
            あなただけの千社札デザインを、<br class="md:hidden">モダンな感性で。
          </p>
          <div class="mt-10 not-writing-mode">
            <ContactButton to="/catalog" size="lg" :variant="'primary'" class="shadow-xl">
              デザイン一覧を見る
            </ContactButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Navigation -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-center font-serif text-2xl text-sumi mb-12 tracking-widest">
          <span class="border-b border-vermilion pb-2">カテゴリーから探す</span>
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <NuxtLink 
            v-for="(cat, index) in ['文字', '枠', '背景', '完成見本']" 
            :key="index"
            :to="{ path: '/catalog', query: { category: cat }}"
            class="group aspect-square flex flex-col items-center justify-center bg-washi border border-gray-100 hover:border-vermilion transition-all duration-500 hover:shadow-lg rounded-sm"
          >
            <span class="font-serif text-xl md:text-2xl text-sumi group-hover:text-vermilion transition-colors">{{ cat }}</span>
            <span class="text-[10px] text-gray-400 mt-2 tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">VIEW MORE</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Latest Items -->
    <section class="py-20 bg-washi">
      <div class="container mx-auto px-4">
        <h2 class="text-center font-serif text-2xl text-sumi mb-4 tracking-widest">
           新着デザイン
        </h2>
        <p class="text-center text-xs text-gray-500 mb-12 tracking-widest uppercase">New Arrivals</p>

        <div v-if="pending" class="flex justify-center py-10">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-vermilion"></div>
        </div>
        
        <div v-else-if="error" class="text-center text-red-500">
          読み込みに失敗しました。
        </div>

        <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
           <ItemCard 
            v-for="item in data?.contents" 
            :key="item.id" 
            :item="item" 
           />
        </div>

        <div class="text-center mt-16">
          <ContactButton to="/catalog" variant="outline">
            全てのデザインを見る
          </ContactButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useSeoMeta } from 'nuxt/app';
import { useMicroCMS } from '~/composables/useMicroCMS';
import type { Catalog } from '~/types';

const { getList } = useMicroCMS();
// Fetch latest 4 items
const { data, pending, error } = await useAsyncData('latest-catalog', () => 
  getList<Catalog>('catalog', { limit: 4 })
);

useSeoMeta({
  title: '千社札カタログ | 伝統を、日常に。', 
  description: 'モダンな感性でデザインされた千社札のカタログサイト。文字、枠、背景など多彩なバリエーションからあなただけの一枚を。',
  ogTitle: '千社札カタログ | 伝統を、日常に。',
  ogDescription: 'モダンな感性でデザインされた千社札のカタログサイト。',
  ogImage: 'https://example.com/og-image.jpg', // Replace with real OG image
});
</script>
