<template>
  <!-- GlobalError -->
  <NuxtErrorBoundary @error="GlobalErrorLogger">
    <QLayout view="hhh lpr fff">
      <!-- You use the default slot to render your content -->
      <QHeader height-hint="20"
        ><QToolbar>
          <!-- Menu Btn -->
          <QBtn
            @click="drawerState = !drawerState"
            class="q-ma-sm"
            icon="menu"
            flat
            round
            dense
            :ripple="false"
          ></QBtn
          >오더히어로</QToolbar
        >
      </QHeader>
      <NuxtPage />
      <AppFooter />
      <template #error="{ error }">
        You can display the error locally here.
        <button @click="error = null">This will clear the error.</button>
      </template>
    </QLayout>
  </NuxtErrorBoundary>
</template>
<script setup lang="ts">
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
