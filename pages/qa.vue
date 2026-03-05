<template>
  <div class="container mx-auto px-4 py-8 max-w-2xl">
    <div class="text-center mb-16">
      <h1 class="text-3xl font-serif text-sumi mb-2 tracking-widest">よくある質問</h1>
      <p class="text-sm text-gray-500 font-light tracking-wider">Q&A</p>
    </div>

    <div v-if="pending" class="flex justify-center py-10">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-vermilion"></div>
    </div>

    <div v-else class="space-y-12">
      <div v-for="(group, catName) in groupedQA" :key="catName">
        <h2 class="text-xl font-serif text-sumi border-l-4 border-vermilion pl-4 mb-6 tracking-wide">
          {{ catName }}
        </h2>
        
        <div class="space-y-4">
          <details 
            v-for="qa in group" 
            :key="qa.id"
            class="group bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden"
          >
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-[#2c3e50] hover:bg-gray-50 transition-colors">
              <span class="flex items-start gap-4">
                <span class="font-serif text-vermilion font-bold text-lg">Q.</span>
                <span class="pt-0.5 tracking-wide">{{ qa.question }}</span>
              </span>
              <span class="transition-transform duration-300 group-open:rotate-180 text-gray-400">
                <svg fill="none" height="24" width="24" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </summary>
            <div class="text-gray-600 px-6 pb-6 pl-14 text-sm leading-8 border-t border-gray-50 transition-all duration-300 ease-in-out">
              <div class="flex gap-4">
                <span class="font-serif text-sumi font-bold text-lg">A.</span>
                <div v-html="qa.answer"></div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>

    <div class="mt-20 text-center">
       <p class="mb-6 text-sm text-gray-500">解決しない場合はこちらからお問い合わせください</p>
       <ContactButton href="https://line.me/R/ti/p/@senjafuda_demo" target="_blank" variant="secondary" class="bg-gray-800 text-white hover:bg-black px-8">
         LINEでお問い合わせ
       </ContactButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useHead, useSeoMeta } from 'nuxt/app';
import { computed } from 'vue';
import { useMicroCMS } from '~/composables/useMicroCMS';
import type { Question } from '~/types';

const { getList } = useMicroCMS();
const { data, pending } = await useAsyncData('questions', () => getList<Question>('question', { limit: 100 }));

useSeoMeta({
  title: 'よくある質問 | 千社札カタログ',
  description: '千社札カタログに関するよくある質問（送料、納期、支払い方法など）を掲載しています。',
});

// Basic QA Grouping
const groupedQA = computed(() => {
  if (!data.value?.contents) return {};
  
  const groups: Record<string, Question[]> = {};
  data.value.contents.forEach(qa => {
    const cat = qa.category || 'その他';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(qa);
  });
  
  return groups;
});



// JSON-LD Schema
const faqSchema = computed(() => {
  if (!data.value?.contents) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.value.contents.map((qa: Question) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer
      }
    }))
  };
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify(faqSchema.value))
    }
  ]
});
</script>

<style scoped>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
