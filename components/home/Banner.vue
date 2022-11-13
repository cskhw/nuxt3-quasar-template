<template>
  <QExpansionItem
    class="home-banner"
    v-model="InfoState"
    expand-icon-class="text-white"
    header-class="row items-center justify-between q-pa-none font-size-12"
    header-style="
    min-height: 2.5rem;
  "
    style="width: 100%"
    :label="'fdsa'"
  >
    <!-- 홈 고객 정보 배너 헤더 -->
    <template #header="header">
      <div class="row items-center">
        <QIcon
          class="q-px-md"
          color="white"
          :name="mdiCar"
          size="1.5rem"
        ></QIcon>
        <div class="text-white font-size-14">
          화양동 | 나의 배송 시간 : 전체
        </div>
      </div>
    </template>
    <!-- 고객 정보 배너 카드 -->
    <QCard
      class="home-banner-section"
      @click="InfoState = false"
      style="cursor: pointer"
    >
      <QCardSection class="row q-pa-sm" style="height: max-content" horizontal>
        <!-- 보유 하트 수 -->
        <QCardSection class="col q-pa-none">
          <QCardSection
            class="q-pa-none text-center text-white text-weight-medium font-size-24"
            >5</QCardSection
          >
          <QCardSection
            class="q-pa-none text-center text-white text-weight-light font-size-10"
            >보유 하트수</QCardSection
          >
        </QCardSection>

        <!-- 보유 하트 수 -->
        <QCardSection class="col q-pa-none">
          <QCardSection
            class="q-pa-none text-center text-white text-weight-medium font-size-24"
            >3</QCardSection
          >
          <QCardSection
            class="q-pa-none text-center text-white text-weight-light font-size-10"
            >보유 쿠폰 수</QCardSection
          >
        </QCardSection>

        <!-- 보유 하트 수 -->
        <QCardSection class="col q-pa-none">
          <QCardSection
            class="q-pa-none text-center text-white text-weight-medium font-size-24"
            >0</QCardSection
          >
          <QCardSection
            class="q-pa-none text-center text-white text-weight-light font-size-10"
            >배송 중 주문 건</QCardSection
          >
        </QCardSection>
      </QCardSection>
    </QCard>
  </QExpansionItem>
</template>

<script setup lang="ts">
import { mdiCar } from "@mdi/js";

const InfoState = ref(true);
</script>
<style lang="scss" scoped>
@import "@/assets/styles/pages/home";
</style>
