import path from "path";
const appEnv = process.env.MODE || "dev";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
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
  typescript: {
    shim: false,
  },
  css: ["~/assets/css/main.scss"],
  vite: {
    resolve: {
      alias: {
        "@": `${path.resolve(__dirname, "src")}`,
      },
    },
  },
});
