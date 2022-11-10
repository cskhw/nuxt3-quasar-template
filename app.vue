<template>
  <div id="app">
    Header
    <AppHeader />
    <!-- IndexPage -->
    <NuxtPage />
    <!-- Footer -->
    <AppFooter />
    <!-- GlobalError -->
    <NuxtErrorBoundary @error="someErrorLogger">
      <!-- You use the default slot to render your content -->
      <template #error="{ error }">
        You can display the error locally here.
        <button @click="error = null">This will clear the error.</button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
<script setup lang="ts">
const someErrorLogger = () => {};
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
