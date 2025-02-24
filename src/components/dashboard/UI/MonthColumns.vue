<script setup>
import calculateHeightColumn from "@/module/calculateHeightColumn";

defineProps({
  numbers: Array,
  dates: Array,
});
</script>
<template>
  <div class="month-columns">
    <div class="numbers">
      <div
        class="number"
        v-for="number in numbers"
        :style="{
          height: calculateHeightColumn(number, 1, 999, 20, 42) + 'px',
        }"
      >
        {{ number > 999 ? "999+" : number }}
      </div>
    </div>
    <div class="dates">
      <div class="date" v-for="date in dates">
        {{ date }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

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
  width: 45px;
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
</style>
