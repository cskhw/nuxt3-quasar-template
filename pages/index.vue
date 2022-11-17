<template>
  <QPageContainer>
    <!-- 홈 페이지 -->
    <QPage>
      <!-- 홈 고객 정보 배너 -->
      <HomeBanner />
      <QItem class="row justify-center">
        <QBtn @click="$router.push('login')">로그인</QBtn>
        <QBtn @click="onClickNaverBtn">네이버</QBtn>
        fdsafdsa
      </QItem>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
import instance from "@/api/instance";

const onClickNaverBtn = async (e: Event) => {
  instance.defaults.baseURL =
    "https://choonsik.dev-orderhero.co.kr/api/test.php";
  // "https://httpbin.org/get";

  console.log(instance.defaults.baseURL);
  const response = await instance.get("");
  console.log(response);
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/pages/home";
</style>
