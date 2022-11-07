import path from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        // scss: {
        //   additionalData: '@use "@/assets/_colors.scss" as *;',
        // },
      },
    },
  },
});
