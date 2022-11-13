import userStore from "@/stores/useUserStore";
import { routerKey } from "vue-router";

// https://v3.nuxtjs.org/guide/directory-structure/middleware/

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("", to, from);

  // 인증 체크
  if (cookies.has("at")) {
    // 인증 토큰, 리프레시 토큰
    const at = cookies.get("at");
    const rt = cookies.get("rt");

    // TODO: 세션 확인 및 토큰 발급 로직 필요

    // 유저 임시 데이터 넣음
    userStore.user = {
      id: 0,
      email: "",
      password: "",
      name: "",
      nickname: "",
      posts: [],
      created_at: "",
      updated_at: "",
    };
    return true;
  } else {
    return navigateTo("/login");
  }
});
