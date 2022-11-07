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
const env = useRuntimeConfig().public;
const date = new Date();
date.setHours(date.getHours() + 3);
const atCookie = useCookie("at", { expires: date });
const rtCookie = useCookie("rt", { expires: date });

const onClickLoginBtn = asyncDebounce(login);
async function login() {
  console.log("login");

  const response = await api.auth.login({
    email: "gusdn0828@gmail.com",
    password: "test1234!",
  });

  atCookie.value = response.data.body.access_token;
  rtCookie.value = response.data.body.refresh_token;
}
</script>
<style lang="scss"></style>
