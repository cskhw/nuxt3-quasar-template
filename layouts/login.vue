<template>
  <QHeader
    class="row justify-between bg-white text-black"
    height-hint="20"
    color="white"
    bordered
  >
    <QToolbar class="row">
      <QBtn
        color="black"
        :icon="mdiChevronLeft"
        flat
        round
        @click="$router.go(-1)"
      >
      </QBtn>
      <QToolbarTitle class="q-pa-none absolute-center font-size-16">
        로그인
      </QToolbarTitle>
    </QToolbar>
  </QHeader>
  <slot />
</template>
<script setup lang="ts">
import { mdiChevronLeft } from "@mdi/js";
</script>
<style lang="scss"></style>
