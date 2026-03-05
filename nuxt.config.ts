// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  // SSG mode
  ssr: true,

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

  // Tailwind
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.ts",
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
});
