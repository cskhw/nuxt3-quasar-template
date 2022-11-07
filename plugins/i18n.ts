import { createI18n } from "vue-i18n";
import messages from "@/i18n/index";

export default defineNuxtPlugin(({ vueApp }) => {
  // i18n 설정
  const i18n = createI18n({
    locale: "ko",
    fallbackLocale: "en",
    warnHtmlMessage: false,
    warnHtmlInMessage: "off",
    messages,
  });

  vueApp.use(i18n);
});
