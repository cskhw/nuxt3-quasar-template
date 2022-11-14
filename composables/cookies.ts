import { Cookies } from "quasar";

// quasar 쿠키 라이브러리 확장
const cookies: Cookies = {
  ...Cookies,
  set: (name: string, value: string, options?) => {
    console.log("set");
    console.log(name, value, options);
    if (options) {
      // 옵션 있으면 쿠키에 옵션 줌
      Cookies.set(name, value, options);
    } else {
      // 옵션 없을 시 기본 옵션
      Cookies.set(name, value, {
        sameSite: "Strict",
        // 프로덕션일 때만 true
        httpOnly: import.meta.env.MODE === "production",
        secure: true,
      });
    }
  },
};

export default cookies;
