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
  vite: {
    resolve: {
      alias: {
        "@": `${path.resolve(__dirname, "")}`,
      },
    },
  },
  css: ["~/assets/css/main.scss"],
  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {},
  },
});
