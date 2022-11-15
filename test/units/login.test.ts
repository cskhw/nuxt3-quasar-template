import { describe, it, expect } from "vitest";
import api from "@/api/api";

describe("pages/index.vue", () => {
  it("choonsik login", async () => {
    const res = await api.auth.login({
      username: "choonsik",
      password: "asdf1234!",
    });
    console.log("res: ", res?.data);
  });
});
