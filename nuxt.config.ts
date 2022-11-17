// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  // nuxt generate 시 파라미터 넣어서 프리 렌더링할 페이지
  generate: {
    routes: [
      // "/posts/id값"
    ],
  },
  typescript: {
    shim: false,
  },
  // 확장 css: main, quasar
  css: [
    "~/assets/styles/main.scss",
    "@quasar/extras/material-icons/material-icons.css",
    "~/assets/styles/quasar.sass",
    "~/assets/css/animate.compat.css",
  ],
  build: {
    transpile: ["quasar"],
  },
  modules: [
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
  // 앱 메타데이터 설정
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
  },
  // 환경 변수
  runtimeConfig: {
    // 서버만 접근 가능
    // baseUrl: '/api/v1'
    // 클라이언트 서버 둘 다 접근 가능
    public: {},
  },
});
