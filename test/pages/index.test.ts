import { describe, it, expect } from "vitest";

describe("pages/index.vue", () => {
  it("word shold be 4 letters long", () => {
    expect("word".length).toBe(4);
  });
});
