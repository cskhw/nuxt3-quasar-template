/// <reference types="vitest" />
import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  // vitest 환경
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    // 경로 alias 설정
    alias: {
      "@": path.resolve(__dirname, "../"),
    },
  },
});
