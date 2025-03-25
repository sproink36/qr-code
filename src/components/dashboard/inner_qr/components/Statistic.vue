<script setup>
import StatsCardQr from "@/components/dashboard/stats_card/StatsCardQr.vue";
import StatsCardScans from "../../stats_card/StatsCardScans.vue";
import StatsCardTopCountries from "../../stats_card/StatsCardTopCountries.vue";
import { Al, At, Au, Ax, Az, Cz, Ru, Us } from "@/components/icons";
import StatsCardTopCities from "../../stats_card/StatsCardTopCities.vue";
import StatsCardMonth from "../../stats_card/StatsCardMonth.vue";
import StatsCardPeakActivity from "../../stats_card/StatsCardPeakActivity.vue";

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
  { num: 23, firstTime: "00:00", lastTime: "06:00" },
  { num: 27, firstTime: "06:00", lastTime: "12:00" },
  { num: 35, firstTime: "12:00", lastTime: "18:00" },
  { num: 15, firstTime: "18:00", lastTime: "06:00" },
];
</script>
<template>
  <div class="list">
    <StatsCardQr>
      <template v-slot:title>Всего сканирований</template>
      256
    </StatsCardQr>
    <StatsCardQr>
      <template v-slot:title>Уникальных сканирований</template>
      256
    </StatsCardQr>
    <StatsCardScans :select="false" :number="73" :is-global-scan="false">
      Сканирований за последний месяц
    </StatsCardScans>
    <StatsCardScans :select="true" color-select="#20D647" :number="73" :is-global-scan="false">
      Сканирований за последню неделю
    </StatsCardScans>
    <StatsCardTopCountries :items="fakeTopCountries">
      Топ 10 по странам
    </StatsCardTopCountries>
    <StatsCardTopCities :items="fakeTopCities">
      Топ 10 по городам
    </StatsCardTopCities>
    <StatsCardMonth> Статистика по месяцам </StatsCardMonth>
    <StatsCardPeakActivity :items="fakeTopPeak" />
  </div>
</template>
<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 203px 203px;
  gap: 20px;
}
</style>
