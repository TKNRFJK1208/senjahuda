<template>
  <footer class="bg-sumi text-white pt-16 pb-8 mt-auto">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <!-- Logo & Address -->
        <div class="text-center md:text-left">
          <h2 class="font-serif text-2xl tracking-widest mb-4">千社札</h2>
          <p class="text-sm text-gray-400 leading-relaxed font-light">
            伝統の技と心を、<br>現代の生活に。
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-col items-center md:items-start space-y-3 font-sans">
          <h3 class="font-serif text-lg mb-2 text-gray-300">Menu</h3>
          <NuxtLink to="/catalog" class="text-sm text-gray-400 hover:text-white transition-colors">商品一覧</NuxtLink>
          <NuxtLink to="/guide" class="text-sm text-gray-400 hover:text-white transition-colors">ご利用ガイド・価格</NuxtLink>
          <NuxtLink to="/qa" class="text-sm text-gray-400 hover:text-white transition-colors">よくある質問</NuxtLink>
        </div>

        <!-- Social -->
        <div class="flex flex-col items-center md:items-end">
           <Button
            href="https://instagram.com" 
            target="_blank"
            variant="outline"
            class="!border-gray-600 !text-gray-300 hover:!border-white hover:!text-white mb-4"
          >
            Instagram
          </Button>
          <p class="text-xs text-gray-500 mt-4 font-sans">
            &copy; {{ new Date().getFullYear() }} Senjafuda Catalog. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
