<template>
  <!-- GlobalError -->
  <NuxtErrorBoundary @error="GlobalErrorLogger">
    <!-- You use the default slot to render your content -->
    <QLayout view="hhh lpr fff">
      <QHeader
        class="row justify-between bg-white text-black"
        height-hint="20"
        color="white"
      >
        <QToolbar>
          <QToolbarTitle> 오더히어로 </QToolbarTitle>
          <QBtn color="grey" round flat :icon="mdiBell"> </QBtn>
          <QBtn color="grey" round flat :icon="mdiCart"> </QBtn>
        </QToolbar>
      </QHeader>
      <NuxtPage />
      <QFooter> im footer </QFooter>
    </QLayout>
    <!-- 글로벌 에러 처리 -->
    <template #error="error">
      <Error :error="error" />
    </template>
  </NuxtErrorBoundary>
</template>
<script setup lang="ts">
import { mdiAlarm, mdiBell, mdiCart } from "@mdi/js";

definePageMeta({
  title: "test",
});

const drawerState = ref(false);

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
