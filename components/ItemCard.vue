<template>
  <NuxtLink 
    :to="`/catalog/${item.id}`" 
    class="group block bg-white border-[0.5px] border-gray-200 hover:border-vermilion/50 transition-colors duration-300 relative"
  >
    <!-- Aspect Ratio Wrapper -->
    <div class="aspect-[3/4] relative overflow-hidden bg-gray-50">
      <NuxtImg
        v-if="item.main_image"
        :src="item.main_image.url"
        :alt="item.title"
        width="400"
        height="533"
        format="webp"
        quality="80"
        loading="lazy"
        class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      
      <!-- Overlay Text on Hover (Desktop) -->
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
        <span class="text-white text-xs font-serif tracking-wider">詳細を見る &rarr;</span>
      </div>
    </div>

    <!-- Minimal Info -->
    <div class="p-3 bg-white">
      <h3 class="font-serif text-sm text-sumi mb-1 truncate group-hover:text-vermilion transition-colors tracking-widest">{{ item.title }}</h3>
      <div class="flex flex-wrap gap-1 font-sans">
        <span 
          v-for="cat in item.category" 
          :key="cat"
          class="text-[10px] text-gray-400 font-light border border-gray-200 px-1.5 py-0.5"
        >
          {{ cat }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Catalog } from '~/types';

defineProps<{
  item: Catalog
}>();
</script>
