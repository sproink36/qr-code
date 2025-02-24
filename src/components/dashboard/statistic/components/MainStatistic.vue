<script setup>
import ComponentName from "@/components/dashboard/UI/ComponentName.vue";
import StatsCardQr from "@/components/dashboard/stats_card/StatsCardQr.vue";
import StatsCardScans from "../../stats_card/StatsCardScans.vue";
import StatsCardTopCountries from "../../stats_card/StatsCardTopCountries.vue";
import { Al, At, Au, Ax, Az, Cz, Ru, Us } from "@/components/icons";
import StatsCardTopCities from "../../stats_card/StatsCardTopCities.vue";
import StatsCardMonth from "../../stats_card/StatsCardMonth.vue";
import StatsCardPeakActivity from "../../stats_card/StatsCardPeakActivity.vue";

const fakeStatsAllQr = [
  { name: "Для ресторана", quantity: 124, color: "#20D647" },
  { name: "Без проекта", quantity: 56, color: "#8B909D" },
  { name: "Тестовые", quantity: 13, color: "#206FD6" },
  { name: "Треш", quantity: 56, color: "#7820D6" },
];
const fakeActiveQr = [
  { name: "Для ресторана", quantity: 62, color: "#20D647" },
  { name: "Без проекта", quantity: 32, color: "#8B909D" },
  { name: "Тестовые", quantity: 15, color: "#206FD6" },
  { name: "Треш", quantity: 9, color: "#7820D6" },
];
const fakeTopCountries = [
  { icon: Ru, text: "RU" },
  { icon: Us, text: "US" },
  { icon: Cz, text: "CZ" },
  { icon: Au, text: "AU" },
  { icon: At, text: "AT" },
  { icon: Az, text: "AZ" },
  { icon: Ax, text: "AX" },
  { icon: Al, text: "AL" },
  { icon: Ru, text: "RU" },
  { icon: Ru, text: "RU" },
];
const fakeTopCities = [
  "Москва",
  "Санкт-Петербург",
  "Тверь",
  "Челябинск",
  "Пермь",
  "Воронеж",
  "Владивосток",
  "Мурманск",
  "Тула",
  "Самара",
];
const fakeTopPeak = [
  {num: 23, firstTime: "00:00", lastTime: "06:00"},
  {num: 27, firstTime: "06:00", lastTime: "12:00"},
  {num: 35, firstTime: "12:00", lastTime: "18:00"},
  {num: 15, firstTime: "18:00", lastTime: "06:00"},
]
</script>
<template>
  <div class="main-statistic">
    <ComponentName class="main-statistic__title">Статистика</ComponentName>
    <div class="list">
      <StatsCardQr :items="fakeStatsAllQr">256</StatsCardQr>
      <StatsCardQr :items="fakeActiveQr">124</StatsCardQr>
      <StatsCardScans :select="false" :number="9999">
        Сканирований за последний месяц
      </StatsCardScans>
      <StatsCardScans :select="true" color-select="#20D647" :number="9999">
        Сканирований за последню неделю
      </StatsCardScans>
      <StatsCardTopCountries :items="fakeTopCountries">
        Топ 10 по странам
      </StatsCardTopCountries>
      <StatsCardTopCities :items="fakeTopCities">
        Топ 10 по городам
      </StatsCardTopCities>
      <StatsCardMonth> Статистика по месяцам </StatsCardMonth>
      <StatsCardPeakActivity :items="fakeTopPeak"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.main-statistic {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 20px, $padding: 40px);
  width: 100%;
}

.main-statistic__title {
  margin-bottom: 20px;
}

.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
}
</style>
