<template>
  <div class="mb-8">
    <div class="flex flex-wrap gap-2 justify-center">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="$emit('select', cat)"
        class="px-4 py-2 rounded-full text-sm font-serif transition-all duration-300 border border-gray-200"
        :class="[
          selectedCategory === cat
            ? 'bg-sumi text-white border-sumi'
            : 'bg-white text-gray-600 hover:border-vermilion hover:text-vermilion'
        ]"
      >
        {{ cat }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  categories: string[];
  selectedCategory: string | null;
}>();

defineEmits<{
  (e: 'select', category: string): void;
}>();
</script>
