import { describe } from "node:test";
import { it, expect } from "vitest";
import { word } from "./word";

describe("page/index.vue", () => {
  it("word shold be 4 letters long", () => {
    console.log(word.length);
    expect(word.length).toBe(4);
  });
});
