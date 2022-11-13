<template>
  <div class="default-layout">
    <QHeader
      class="row justify-between bg-white text-black"
      height-hint="20"
      color="white"
    >
      <QToolbar>
        <QToolbarTitle> 오더히어로 </QToolbarTitle>
        <QBtn color="grey" round flat :icon="mdiBell"> </QBtn>
        <QBtn color="grey" round flat :icon="mdiCart"> </QBtn>
      </QToolbar>
    </QHeader>
    <slot />
    <QFooter> im footer </QFooter>
  </div>
</template>
<script setup lang="ts">
import { mdiAlarm, mdiBell, mdiCart } from "@mdi/js";
</script>
<style lang="scss"></style>
