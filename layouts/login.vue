<template>
  <QHeader
    class="row justify-between bg-white text-black"
    height-hint="20"
    color="white"
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
      <QToolbarTitle class="font-size-16 vertical-center">
        로그인
      </QToolbarTitle>
    </QToolbar>
  </QHeader>
  <slot />
  <QFooter> im footer </QFooter>
</template>
<script setup lang="ts">
import { mdiChevronLeft } from "@mdi/js";
</script>
<style lang="scss"></style>
