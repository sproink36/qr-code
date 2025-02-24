<script setup>
import { ArrowMinus, ArrowPlus } from "@/components/icons";
</script>
<template>
  <div class="total-scans">
    <div class="header">
      <div class="title">Всего сканирований</div>
      <div class="total-numbers">256</div>
    </div>
    <div class="sub-header week">
      <div class="title">За неделю</div>
      <div class="stats">
        <div class="text">51</div>
        <div class="indicator">
          <ArrowPlus class="icon" />
          <div class="text percent">+999%</div>
        </div>
      </div>
    </div>
    <div class="sub-header month">
      <div class="title">За месяц</div>
      <div class="stats">
        <div class="text">152</div>
        <div class="indicator">
          <ArrowMinus class="icon" />
          <div class="text percent">-3%</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.total-scans {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  @include dashboard-border();
}

.header {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  @include dashboard-border($br-radius: 0);
  border-top: none;
  border-left: none;
  border-right: none;

  & .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  & .total-numbers {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  }
}

.sub-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;

  & .title {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #18213c80;
  }

  & .stats {
    display: flex;
    align-items: center;
    gap: 5px;

    & .text {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }

    & .indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      min-width: 80px;
      @include blockStyle($bg-color: #f3f5f7, $br-radius: 5px, $padding: 3px 0);
      & .icon {
        width: 18px;
        height: 18px;
      }
    }
  }
}

.week {
  grid-column: 1;
  @include dashboard-border($br-radius: 0);
  border-top: none;
  border-left: none;
  border-bottom: none;
}

.month {
  grid-column: 2;
}
</style>
