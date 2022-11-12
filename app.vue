<template>
  <div id="app">
    Header
    <AppHeader />
    <!-- IndexPage -->
    <NuxtPage />
    <!-- Footer -->
    <AppFooter />
    <div>
      <QInput v-model="data"> </QInput>
      {{ data }}

      <QBtn @click="data = cookies.get('at')"> 쿠키 세팅 </QBtn>
      testQBtn
    </div>
    <!-- GlobalError -->
    <NuxtErrorBoundary @error="GlobalErrorLogger">
      <!-- You use the default slot to render your content -->
      <template #error="{ error }">
        You can display the error locally here.
        <button @click="error = null">This will clear the error.</button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
<script setup lang="ts">
const data = ref("testtest");

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
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
