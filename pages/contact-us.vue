<template>
  <div>
    Contact us
    <q-form ref="form" @submit.prevent.stop="submitForm"> </q-form>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "new-default",
});

function submitForm() {}
</script>
