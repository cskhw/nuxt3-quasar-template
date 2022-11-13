<template>
  <QPageContainer>
    <QPage padding>{{ error }}</QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
const props = defineProps<{
  error: any;
}>();
</script>
