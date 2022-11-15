import { describe, it, expect } from "vitest";
import api from "@/api/api";

describe("pages/index.vue", () => {
  it("choonsik login", async () => {
    // choonsik으로 로그인 요청
    const res = await api.auth.login({
      username: "choonsik",
      password: "asdf1234!",
    });
    // status 프로퍼티 검사
    expect(res).haveOwnProperty("status");
    // expect가 성공했는지 검사
    expect(res.status).toBe(200);
    // access_token의 타입이 string인지 검사
    expect(res.data.body.access_token).toBeTypeOf("string");
  });
});
