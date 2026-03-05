// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  // SSG mode
  ssr: true,

  // Nitro プリセットを明示的に静的生成に固定
  nitro: {
    preset: "netlify-static",
  },

  // グローバルCSS（TailwindCSSはPostCSS経由で処理）
  css: ["~/assets/css/main.css"],

  // PostCSS設定
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Runtime Config
  runtimeConfig: {
    public: {
      microcmsServiceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      microcmsApiKey: process.env.MICROCMS_API_KEY,
    },
  },

  // App Config (Head/SEO)
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      title: "千社札カタログ (Senjafuda Catalog)",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "千社札のデザイン一覧カタログサイト。",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },

  // Module Configuration
  googleFonts: {
    families: {
      "Noto+Serif+JP": [400, 700],
      "Noto+Sans+JP": [300, 400, 500, 700],
    },
    display: "swap",
  },

  // Robots & Sitemap
  site: {
    url: "https://example.com", // TODO: Replace with actual URL when deploying
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
});
