<template>
  <QPageContainer>
    <QPage padding>
      {{ counter }}
      {{ show }}
      <Transition
        appear
        enter-active-class="animated flash"
        leave-active-class="animated flash"
      >
        <QCard v-show="show"> test </QCard>
      </Transition>
      <QBtn
        transition-show="jump-down"
        transition-hide="jump-up"
        @click="show = !show"
        color="secondary"
        icon="mail"
        label="Email"
      />
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
import api from "@/api/api";
import { asyncDebounce } from "@/utils/asyncDebounce";
const env = useRuntimeConfig().public;
const counter = ref(0);
const show = ref(false);

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
