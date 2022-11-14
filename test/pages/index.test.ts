import { it, expect } from "vitest";
import { word } from "@/server/lib/word";

it("word shold be 4 letters long", () => {
  expect(word.length).toBe(4);
});
