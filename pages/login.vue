<template>
  <QPageContainer>
    <QPage class="column q-pa-lg">
      <!-- 타이틀 이미지 -->
      <div
        class="row items-center justify-center q-pa-lg text-weight-bolder font-size-32"
        style="flex: 3; padding-bottom: 48px"
      >
        오더히어로
      </div>

      <!-- 사업자 번호 인풋 -->
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
        <!-- 비밀번호 인풋 -->
        <QInput
          class="q-pb-sm"
          type="password"
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
        <!-- 자동로그인 체크박스 -->
        <QItem class="q-pa-none">
          <QCheckbox v-model="isAutoLogin" label="로그인 상태 유지"></QCheckbox>
        </QItem>
        <!-- 로그인 버튼 -->
        <QBtn
          class="q-mt-md full-width bg-light-blue text-white text-weight-bolder"
          flat
          size="1rem"
          @click="onClickLogin"
          >로그인</QBtn
        >

        <!-- 로그인 메뉴 -->
        <QItem class="q-gutter-sm row justify-center items-center"
          ><QBtn flat>비밀번호 찾기 </QBtn>
          <div class="vertical-center font-size-6">|</div>
          <QBtn flat> 회원가입</QBtn></QItem
        >
      </QForm>
      <!-- 로그인 푸터 -->
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
import api from "@/api/api";
import useAppStore from "@/stores/useAppStore";
import { asyncDebounce } from "@/utils/asyncDebounce";

const appStore = useAppStore();
const router = useRouter();

const isAutoLogin = ref(false);
const loginForm = reactive({
  username: "",
  password: "",
});

const onClickLogin = asyncDebounce(login);

async function login() {
  try {
    const res = await api.auth.login(loginForm);
    console.log(res);
    if (res) {
      await router.push("/");
    } else {
      alert("아이디 혹은 비밀번호를 확인해주세요");
    }
  } catch (e: any) {
    console.log(e);
  }
}
</script>
