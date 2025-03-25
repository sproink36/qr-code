<script setup>
import { ref } from "vue";
import ComponentName from "../../UI/ComponentName.vue";
import SelectMenuCalendar from "../../UI/SelectMenuCalendar.vue";
import ChartQr from "./ChartQr.vue";
import Statistic from "./Statistic.vue";

const datesArray = ref([
  {
    data: 517,
    day: 3,
    month: "апр",
  },
  {
    data: 17,
    day: 4,
    month: "апр",
  },
  {
    data: 320,
    day: 5,
    month: "апр",
  },
  {
    data: 520,
    day: 6,
    month: "апр",
  },
  {
    data: 720,
    day: 7,
    month: "апр",
  },
]);

function handleDatesUpdate(dates) {
  datesArray.value = dates;
}
</script>
<template>
  <div class="statistic-inner-qr">
    <div class="header">
      <ComponentName>Статистика</ComponentName>
      <SelectMenuCalendar @update-dates="handleDatesUpdate" />
    </div>
    <Statistic class="statistic" />
    <ChartQr class="chartQr" :data="datesArray" />
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.statistic-inner-qr {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 20px, $padding: 40px);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.statistic {
  margin-bottom: 20px;
}

.chartQr {
  width: 100%;
  height: 400px;
  padding: 40px 0;
}
</style>
