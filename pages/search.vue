<template>
  <div>
    <QPageContainer>
      <QPage padding>category</QPage>
    </QPageContainer>
  </div>
</template>
<script setup lang="ts">
import api from "@/api/api";
import useAppStore from "@/stores/useAppStore";

const res = await api.auth.login({
  username: "test",
  password: "test",
});
</script>
