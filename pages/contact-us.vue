<template>
  <div>
    Contact us
    <q-form ref="form" @submit.prevent.stop="submitForm">
      <q-input
        ref="name"
        v-model="formData.name.value"
        type="textarea"
        filled
        label="Name *"
        :disable="busy"
        lazy-rules="ondemand"
      >
      </q-input>

      <q-btn
        label="send"
        type="submit"
        :color="valid ? 'primary' : 'grey-5'"
        :loading="busy"
        :disable="!valid"
      >
      </q-btn>
    </q-form>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "new-default",
});

const busy = ref(false);

interface IFormData {
  name?: { value: any; errors: any[] };
  email?: { value: any; errors: any[] };
  enquiry?: { value: any; errors: any[] };
}

const formData = ref({
  name: { value: null, errors: [] },
  email: { value: null, errors: [] },
  enquiry: { value: null, errors: [] },
});

const fieldValidity = ref<IFormData>({
  name: undefined,
  email: undefined,
  enquiry: undefined,
});

const valid = computed(() => {
  let ret = true;
  ret = Object.entries(fieldValidity.value).every((element) => {
    return element[1];
  });
  return ret;
});

function validateField(
  field: { validate: (formData: any) => any },
  validityElementName: "name" | "email" | "enquiry"
) {
  const validity = field.validate(formData.value[validityElementName]);
  formData.value[validityElementName] = validity;
}

function required() {}

function sleep(msec: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, msec);
  });
}

async function submitForm() {
  await sleep(500);
  console.log("submitForm");
}
</script>
