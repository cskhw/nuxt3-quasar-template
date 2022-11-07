<template>
  <div id="app">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    <AppAlert> This is an auto-imported component. </AppAlert>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
@import "~/assets/stylesheets/main.scss";
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
