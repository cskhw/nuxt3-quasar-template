import path from "path";
import { quasar } from "@quasar/vite-plugin";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  css: [
    "~/assets/styles/main.scss",
    "@quasar/extras/material-icons/material-icons.css",
    "~/assets/styles/quasar.sass",
  ],
  build: {
    transpile: ["quasar"],
  },
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
    define: {
      "process.env.DEBUG": false,
    },
    plugins: [
      quasar({
        sassVariables: "assets/styles/quasar.variables.sass",
      }),
    ],
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
