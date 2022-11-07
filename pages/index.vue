<template>
  <div>
    hello world
    <!-- some content -->
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
<style lang="scss"></style>
