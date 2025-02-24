<script setup>
import { computed } from "vue";
import StatsCard from "./StatsCard.vue";
import calculateHeightColumn from "@/module/calculateHeightColumn";

const props = defineProps({ items: Array });
const TopNum = computed(() => {
  let topNum = 0;
  props.items.forEach((element) => {
    if (element.num > topNum) {
      topNum = element.num;
    }
  });
  if (topNum <= 0) return null;
  return topNum;
});
</script>
<template>
  <StatsCard class="stats-card-peak-activity">
    <template v-slot:title>Пики активности в сутках</template>
    <div class="list">
      <div class="item" v-for="item in items">
        <div class="num" :class="{ num_top: TopNum === item.num }">
          {{ item.num }}%
        </div>
        <div
          class="column"
          :style="{
            height: calculateHeightColumn(item.num, 1, 100, 10, 67) + 'px',
          }"
          :class="{ column_top: TopNum === item.num }"
        ></div>
        <div class="times">
          <div class="first">{{ item.firstTime }}</div>
          <div class="last">{{ item.lastTime }}</div>
        </div>
      </div>
    </div>
  </StatsCard>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;

.stats-card-peak-activity {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.num,
.first,
.last {
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #18213c80;
}

.column {
  width: 100%;
  border-radius: 5px;
  background-color: #f3f5f7;
}

.num_top {
  color: $primary;
}
.column_top {
  background-color: $primary;
}
</style>
