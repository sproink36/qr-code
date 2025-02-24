<script setup>
import MonthColumns from "../UI/MonthColumns.vue";
import StatsCard from "./StatsCard.vue";

const dates1 = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"];
const numbers1 = [1, 561, 58, 1000, 1000, 1000];

const dates2 = ["Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
const numbers2 = [1, 561, 58, 1000, 1000, 1000];
</script>
<template>
  <StatsCard class="stats-card-month">
    <template v-slot:title><slot /></template>
    <MonthColumns
      class="month-columns month-columns_1"
      :numbers="numbers1"
      :dates="dates1"
    />
    <MonthColumns class="month-columns" :numbers="numbers2" :dates="dates2" />
  </StatsCard>
</template>
<style lang="scss" scoped>
.stats-card-month {
  padding-top: 14.5px;
  padding-bottom: 14.5px;
}
.month-columns_1 {
  margin-bottom: 10px;
}
</style>
