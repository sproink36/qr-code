<script setup>
import calculateHeightColumn from '@/module/calculateHeightColumn';

defineProps({
  columnStyle: Boolean,
})

const fakeNumber = ["1", "561", "58", "1258"];
const fakeDates = ["Окт", "Ноя", "Дек", "Янв"];

// function calculateHeight(value) {
//   const minValue = 1;
//   const maxValue = 999;
//   const minHeight = 20;
//   const maxHeight = 42;
//   const clampedValue = Math.min(value, maxValue);
//   return (
//     minHeight +
//     ((clampedValue - minValue) / (maxValue - minValue)) *
//       (maxHeight - minHeight)
//   );
// }
</script>
<template>
  <div class="by-month" :class="{grow: columnStyle}">
    <div class="title">По месяцам</div>
    <div class="numbers">
      <div
        class="number"
        v-for="number in fakeNumber"
        :style="{
          height: calculateHeightColumn(number, 1, 999, 20, 42) + 'px',
        }"
      >
        {{ number > 999 ? "999+" : number }}
      </div>
    </div>
    <div class="dates">
      <div class="date" v-for="date in fakeDates">
        {{ date }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.by-month {
  padding: 20px;
  @include dashboard-border();
}

.title {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}

.numbers,
.dates {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
}

.numbers {
  margin-bottom: 10px;
}

.number,
.date {
  width: 32px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #18213c80;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 5px, $padding: 2px 0);
}

.date {
  font-size: 13px;
}

.dates {
  align-items: center;
}

.by-month.grow .number, .by-month.grow .date {
  flex-grow: 1;
}
</style>
