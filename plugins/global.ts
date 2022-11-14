import useAppStore from "@/stores/useAppStore";

export default defineNuxtPlugin(() => {
  const appStore = useAppStore();
  // 글로벌 라우터 미들웨어
  addRouteMiddleware(
    "global",
    (to, from) => {
      console.log(to.path, from.path);
      // 로그인 페이지면 login layout 아니면 app 레이아웃
      if (to.path === "/login") appStore.layout = "login";
      else appStore.layout = "app";
    },
    { global: true }
  );
});
