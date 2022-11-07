<template>
  <div id="main">
    <h1>main page</h1>
    <button @click="onClickLoginBtn">google</button>
    <button>test</button>
  </div>
</template>
<script setup lang="ts">
import api from "@/api/api";
import { asyncDebounce } from "@/utils/asyncDebounce";

const onClickLoginBtn = asyncDebounce(login);
async function login() {
  console.log("login");
  const response = await api.auth.login({
    email: "gusdn0828@gmail.com",
    password: "test1234!",
  });
  console.log(response);
}
</script>
<style lang="scss"></style>
