<template>
  <QPageContainer>
    <QPage padding>login</QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
import useAppStore from "@/stores/useAppStore";

const appStore = useAppStore();
appStore.layout = "login";
</script>
