import { describe, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";
describe("My test", async () => {
  await setup({
    // test context options
    setupTimeout: 10000,
  });
  test("my test", () => {
    // ...
  });
});
