<template>
  <component
    :is="to ? NuxtLink : 'a'"
    :to="to"
    :href="href"
    class="inline-flex items-center justify-center px-8 py-3 rounded-none font-sans font-medium tracking-wide transition-all duration-300 shadow-sm"
    :class="[
      variant === 'primary' 
        ? 'bg-vermilion text-white hover:bg-red-700 hover:shadow-md' 
        : 'bg-transparent border border-sumi text-sumi hover:bg-sumi hover:text-white',
      block ? 'w-full' : '',
      size === 'lg' ? 'text-lg py-4' : 'text-sm',
      rounded ? 'rounded-md' : 'rounded-none'
    ]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue';

const NuxtLink = resolveComponent('NuxtLink');

withDefaults(defineProps<{
  to?: string;
  href?: string;
  variant?: 'primary' | 'outline';
  size?: 'md' | 'lg';
  block?: boolean;
  rounded?: boolean;
}>(), {
  variant: 'primary',
  size: 'md',
  block: false,
  rounded: false
});
</script>
