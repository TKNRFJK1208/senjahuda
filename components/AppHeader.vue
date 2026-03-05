<template>
  <header class="w-full bg-white/95 backdrop-blur-md border-b border-gray-100/50 sticky top-0 z-50">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="group flex items-center gap-3">
        <div class="w-8 h-8 flex items-center justify-center bg-vermilion text-white font-serif rounded-sm shadow-sm group-hover:bg-red-700 transition-colors">
          千
        </div>
        <span class="font-serif font-bold text-lg tracking-widest text-sumi group-hover:text-black transition-colors">千社札</span>
      </NuxtLink>
      
      <nav class="hidden md:block">
        <ul class="flex gap-8 text-sm font-sans font-medium text-gray-500 tracking-wide">
          <li>
            <NuxtLink to="/catalog" class="hover:text-vermilion transition-colors relative group-nav">
              商品一覧
              <span class="absolute -bottom-1 left-0 w-0 h-px bg-vermilion transition-all group-nav-hover:w-full"></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/guide" class="hover:text-vermilion transition-colors">ご利用ガイド</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/qa" class="hover:text-vermilion transition-colors">よくある質問</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Smartphone Menu Toggle (Simple placeholder) -->
       <button class="md:hidden text-sumi p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  color: #e64b38; /* Vermilion */
}
</style>
