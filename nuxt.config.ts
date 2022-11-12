import path from "path";
import { quasar } from "@quasar/vite-plugin";

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
        // quasar sass 변수
        sassVariables: "assets/styles/quasar.variables.sass",
      }),
    ],
    resolve: {
      // 경로 alias 설정
      alias: {
        "@": `${path.resolve(__dirname, "")}`,
        // solved vue-i18n esm-build warn
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      },
    },
  },
  // 앱 설정
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
