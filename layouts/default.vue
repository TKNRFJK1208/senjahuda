<template>
  <div class="min-h-screen flex flex-col font-serif bg-washi selection:bg-vermilion selection:text-white">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
