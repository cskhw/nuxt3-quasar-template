import path from "path";
import { quasar } from "@quasar/vite-plugin";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  root: ".", //Define the root
  // vitest 환경
  test: {
    globals: true,
    environment: "jsdom",
  },
  define: {
    "process.env.DEBUG": false,
  },
  plugins: [
    quasar({
      // quasar sass 변수
      sassVariables: "assets/styles/quasar.variables.sass",
      autoImportComponentCase: "combined",
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
});
