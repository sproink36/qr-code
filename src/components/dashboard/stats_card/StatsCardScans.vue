<script setup>
import { Angle, ArrowPlus } from "@/components/icons";
import StatsCard from "./StatsCard.vue";

defineProps({
  select: Boolean,
  colorSelect: String,
  number: Number,
  isGlobalScan: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <StatsCard class="stats-card-scans" :title-style="{ 'margin-bottom': '5px' }">
    <template v-slot:title><slot /></template>
    <div class="select" v-if="isGlobalScan">
      <div class="defualt-select" v-if="!select">
        <div class="text">По всем проектам</div>
      </div>
      <div class="current-select" v-else>
        <div class="dot" :style="{ 'background-color': colorSelect }"></div>
        <div class="text" :style="{ color: colorSelect }">Для ресторана</div>
      </div>
      <Angle class="icon" />
    </div>
    <div class="nums" :class="{ 'margin-auto': isGlobalScan === false }">
      <div class="number number_big">{{ number > 999 ? "999+" : number }}</div>
      <div class="number">
        {{ number > 999 ? "999+" : number
        }}<span class="text">из них уникальных</span>
      </div>
    </div>
    <div class="indicator">
      <ArrowPlus class="icon" />
      <div class="text">+999% по сравнению с прошлым</div>
    </div>
  </StatsCard>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
@use "/src/assets/scss/includes/variables" as *;
.stats-card-scans {
  display: flex;
  flex-direction: column;
}

.select {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 7px, $padding: 10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;

  & .defualt-select {
    & .text {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
  }

  & .current-select {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    & .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    & .text {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
  }

  & .icon {
    width: 16px;
    height: 16px;
    transform: rotateZ(180deg);
  }
}

.nums {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 17px;

  & .number {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    & .text {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #8b909d;
    }
  }

  & .number_big {
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
  }
}

.nums.margin-auto {
  margin-bottom: auto;
}

.indicator {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 5px, $padding: 3px 5px);
  display: flex;
  align-items: center;
  gap: 5px;

  & .icon {
    width: 18px;
    height: 18px;
  }

  & .text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }
}
</style>
