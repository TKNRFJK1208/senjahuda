<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-serif text-sumi mb-2 tracking-widest">デザイン一覧</h1>
      <p class="text-sm text-gray-500 font-light tracking-wider">CATALOG</p>
    </div>

    <!-- Filters -->
    <CategoryFilter 
      :categories="['すべて', '文字', '枠', '背景', '完成見本']" 
      :selected-category="selectedCategory"
      @select="selectCategory"
    />

    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center py-20">
      <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-vermilion"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center text-red-500 py-20">
      デザインの読み込みに失敗しました。
    </div>

    <!-- Grid -->
    <div v-else>
      <div v-if="filteredItems.length === 0" class="text-center py-20 text-gray-400 font-light">
        該当するデザインが見つかりませんでした。
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <ItemCard 
          v-for="item in filteredItems" 
          :key="item.id" 
          :item="item" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useRoute, useRouter, useSeoMeta } from 'nuxt/app';
import { computed, onMounted, ref } from 'vue';
import { useMicroCMS } from '~/composables/useMicroCMS';
import type { Catalog } from '~/types';

const route = useRoute();
const router = useRouter();
const { getList } = useMicroCMS();

// State
const selectedCategory = ref<string>('すべて');

// Initial Data Fetch
// Increase limit or implement pagination for real production
const { data, pending, error } = await useAsyncData('catalog-list', () => 
  getList<Catalog>('catalog', { limit: 100 })
);

// Handling Query Params on Mount
onMounted(() => {
  if (route.query.category && typeof route.query.category === 'string') {
    selectedCategory.value = route.query.category;
  }
});

// Filtering Logic
const filteredItems = computed(() => {
  if (!data.value?.contents) return [];
  if (selectedCategory.value === 'すべて') return data.value.contents;
  
  return data.value.contents.filter(item => 
    item.category.includes(selectedCategory.value)
  );
});

// Selection Handler
const selectCategory = (category: string) => {
  selectedCategory.value = category;
  
  // Update URL for clear navigation history, but don't force reload
  router.push({
    path: '/catalog',
    query: category !== 'すべて' ? { category } : {}
  });
};

useSeoMeta({
  title: 'デザイン一覧 | 千社札カタログ',
  description: '千社札のデザインカタログ一覧ページ。文字・枠・背景などカテゴリー別にお気に入りのデザインを探せます。',
});
</script>
