import path from "path";
import { quasar } from "@quasar/vite-plugin";

const appEnv = process.env.MODE || "dev";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: [
    "~/assets/styles/main.scss",
    "@quasar/extras/material-icons/material-icons.css",
    "~/assets/styles/quasar.sass",
  ],
  modules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
        ],
      },
    ],
  ],
  vite: {
    resolve: {
      alias: {
        "@": `${path.resolve(__dirname, "")}`,
        // solved vue-i18n esm-build warn
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  runtimeConfig: {
    public: {},
  },
});
