import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  devServer: {
    port: 9876,
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "motion-v/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "nuxt-og-image",
    "@nuxt/test-utils/module",
    "@yuta-inoue-ph/nuxt-vcalendar",
    "@vee-validate/nuxt",
    "vue-sonner/nuxt"
  ],

  imports: {
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
      {
        from: "vue-sonner",
        name: "toast",
        as: "useSonner",
      },
    ],
  },

  site: {
    url: process.env.PUBLIC_URL || "https://counter.uithing.com/",
    name: "Counter - UI Thing Starter",
  },

  colorMode: { classSuffix: "", storageKey: "ui-thing-starter-color-mode" },

  icon: {
    clientBundle: { scan: true, sizeLimitKb: 0 },
    mode: "svg",
    class: "shrink-0",
    fetchTimeout: 2000,
    serverBundle: "local",
  },

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      script: [{
        src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.12/pdfmake.min.js",
        defer: true,
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.12/vfs_fonts.min.js",
        defer: true,
      }],
    },
  },
});