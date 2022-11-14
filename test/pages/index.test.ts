// https://vitest.dev/guide/features.html

import { describe, it, expect, vi } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";
import { renderToString } from "vue/server-renderer";
import index from "@/pages/index.vue";
import { word } from "@/server/lib/word";

it("word shold be 4 letters long", () => {
  expect(word.length).toBe(4);
});
