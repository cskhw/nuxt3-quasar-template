<template>
  <QPageContainer>
    <QPage class="column q-pa-lg">
      <div
        class="row items-center justify-center q-pa-lg text-weight-bolder font-size-32"
        style="flex: 3; padding-bottom: 48px"
      >
        오더히어로
      </div>

      <!-- 사업자 번호 -->
      <QForm style="flex: 4">
        <QInput
          class="q-pb-sm"
          v-model="loginForm.username"
          :rules="[
            (val, rules) =>
              val.length > 10 || '사업자 번호를 정확하게 입력해주세요',
          ]"
          mask=""
          label="사업자 번호를 입력해주세요."
          clearable
          autofocus
          no-error-icon
          outlined
          hide-bottom-space
        ></QInput>
        <!-- 비밀번호 -->
        <QInput
          class="q-pb-sm"
          v-model="loginForm.password"
          :rules="[
            (val, rules) =>
              (val.length >= 8 && val.length <= 20) ||
              '비밀번호는 8자 이상 20자 이하로 입력해주세요',
          ]"
          clearable
          no-error-icon
          label="비밀번호를 입력해주세요."
          outlined
          hide-bottom-space
        ></QInput>
        <QItem class="q-pa-none">
          <QCheckbox v-model="isAutoLogin" label="로그인 상태 유지"></QCheckbox>
        </QItem>
        <QBtn
          class="q-mt-md full-width bg-light-blue text-white text-weight-bolder"
          flat
          size="1rem"
          >로그인</QBtn
        >

        <QItem class="q-gutter-sm row justify-center items-center"
          ><QBtn flat>비밀번호 찾기 </QBtn>
          <div class="vertical-center font-size-6">|</div>
          <QBtn flat> 회원가입</QBtn></QItem
        >
      </QForm>
      <QItem class="column items-center" style="flex: 3">
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
        <div>DELIVERLY LAB | 주식회사 딜리버리랩</div>
      </QItem>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
import useAppStore from "@/stores/useAppStore";

const appStore = useAppStore();

const isAutoLogin = ref(false);
const loginForm = reactive({
  username: "",
  password: "",
});
</script>
