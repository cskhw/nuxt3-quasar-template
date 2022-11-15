<template>
  <div class="helloworld">{{ title }}</div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: "hello world!";
}>();
</script>
<style lang="scss" scoped></style>
