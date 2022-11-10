<template>
  <div>
    Contact us
    <q-form ref="form" @submit.prevent.stop="submitForm"> </q-form>
    <q-btn>fdsa</q-btn>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "new-default",
});

function submitForm() {
  console.log("submitForm");
}
</script>
