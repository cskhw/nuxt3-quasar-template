<template>
  <!-- GlobalError -->
  <NuxtErrorBoundary @error="GlobalErrorLogger">
    <Head
      ><Title>Nuxt3-quasar-template</Title>
      <Meta name="viewport" :content="viewportContent"></Meta
    ></Head>

    <!-- You use the default slot to render your content -->
    <QLayout view="hhh lpr fff">
      <NuxtLayout :name="appStore.layout">
        <NuxtPage />
      </NuxtLayout>
    </QLayout>
    <!-- 글로벌 에러 처리 -->
    <template #error="error">
      <Error :error="error" />
    </template>
  </NuxtErrorBoundary>
</template>
<script setup lang="ts">
import useAppStore from "@/stores/useAppStore";
import { useQuasar } from "quasar";

const quasar = useQuasar();

// 디바이스 종류에 따라 viewport 설정
const viewportContent = computed(() => {
  if (quasar.platform.is.android)
    return "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover";
  else return "width=device-width, initial-scale=1";
});

const appStore = useAppStore();

const GlobalErrorLogger = (e: any) => {
  console.log(e);
};

cookies.set("at", "at-1234512345");
cookies.set("rt", "rt-1234512345");
cookies.set("jwt", "bearer 1234512345");

const at = cookies.get("at");
const rt = cookies.get("rt");
const jwt = cookies.get("jwt");

console.log(at, rt, jwt);
</script>
<style lang="scss">
.app-header {
  color: black;
  background-color: white;
  .app-toolbar {
  }
}
</style>
