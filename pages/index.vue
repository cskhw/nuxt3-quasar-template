<template>
  <QPageContainer>
    <!-- 홈 페이지 -->
    <QPage>
      <!-- 홈 고객 정보 배너 -->
      <HomeBanner />
      cicd 테스트를 해봅니다
      <QBtn @click="$router.push('login')">로그인</QBtn>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
@import "@/assets/styles/pages/home";
</style>
