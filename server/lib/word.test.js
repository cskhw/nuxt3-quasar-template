import { it, expect } from "vitest";
import { word } from "./word";

it("word shold be 4 letters long", () => {
  expect(word.length).toBe(4);
});
