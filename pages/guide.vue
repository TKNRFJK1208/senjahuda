<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <div class="text-center mb-16">
      <h1 class="text-3xl font-serif text-sumi mb-2 tracking-widest">ご利用ガイド</h1>
      <p class="text-sm text-gray-500 font-light tracking-wider">GUIDE & PRICE</p>
    </div>

    <!-- Process Flow -->
    <section class="mb-20">
      <h2 class="text-xl font-serif text-sumi border-l-4 border-vermilion pl-4 mb-8 tracking-wide">
        ご注文の流れ
      </h2>
      
      <div class="space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-8 relative">
        <!-- Connecting Line (Desktop) -->
        <div class="hidden md:block absolute top-8 left-0 w-full h-px bg-gray-200 -z-10"></div>

        <div v-for="(step, index) in steps" :key="index" class="bg-white p-6 relative">
          <div class="w-16 h-16 bg-vermilion text-white rounded-full flex items-center justify-center text-xl font-serif mb-4 mx-auto md:mx-0 shadow-lg">
            {{ index + 1 }}
          </div>
          <h3 class="font-serif font-bold text-lg mb-2 text-center md:text-left">{{ step.title }}</h3>
          <p class="text-sm text-gray-600 leading-relaxed text-center md:text-left">{{ step.description }}</p>
        </div>
      </div>
    </section>

    <!-- Price List -->
    <section class="mb-20">
      <h2 class="text-xl font-serif text-sumi border-l-4 border-vermilion pl-4 mb-8 tracking-wide">
        価格表
      </h2>
      
      <div class="overflow-x-auto">
        <table class="w-full border-collapse bg-white shadow-sm">
          <thead>
            <tr class="bg-sumi text-white text-sm">
              <th class="p-4 font-serif font-normal tracking-wider text-left">種類</th>
              <th class="p-4 font-serif font-normal tracking-wider text-left">サイズ</th>
              <th class="p-4 font-serif font-normal tracking-wider text-right">価格 (税込)</th>
            </tr>
          </thead>
          <tbody class="text-sm text-gray-700">
            <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td class="p-4 font-bold">基本セット</td>
              <td class="p-4">大札 (18mm × 60mm) × 10枚</td>
              <td class="p-4 text-right">¥1,000</td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td class="p-4 font-bold">親子セット</td>
              <td class="p-4">大札 × 5枚 / 小札 × 10枚</td>
              <td class="p-4 text-right">¥1,500</td>
            </tr>
             <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td class="p-4 font-bold">特別和紙仕様</td>
              <td class="p-4">各種 +¥500</td>
              <td class="p-4 text-right">+¥500</td>
            </tr>
          </tbody>
        </table>
      </div>
       <p class="text-xs text-gray-500 mt-4 text-right">※ 送料は別途発生いたします。</p>
    </section>

    <!-- FAQ CTA -->
    <div class="bg-gray-100 p-8 text-center rounded-sm">
      <h3 class="font-serif text-lg mb-4">ご不明な点はありますか？</h3>
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <ContactButton to="/qa" variant="outline" class="bg-white">よくある質問を見る</ContactButton>
        <ContactButton href="https://line.me/R/ti/p/@senjafuda_demo" target="_blank" variant="primary">LINEで問い合わせる</ContactButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'デザインを選ぶ',
    description: 'カタログからお好みのデザインをお選びください。IDを控えておくとスムーズです。'
  },
  {
    title: 'LINEで相談',
    description: '商品ページの「LINEで相談する」ボタンから、ご希望の文字や調整内容をお送りください。'
  },
  {
    title: '制作・確認',
    description: 'デザイナーがレイアウトを作成し、画像でご確認いただきます。修正も可能です。'
  },
  {
    title: 'お届け',
    description: 'デザイン確定後、印刷を行い、約1週間でお手元にお届けいたします。'
  }
];

useSeoMeta({
  title: 'ご利用ガイド・価格 | 千社札カタログ',
  description: '千社札の注文の流れと価格表のご案内。初めての方でも安心してご注文いただけます。',
});
</script>
