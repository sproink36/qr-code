<script setup>
import ComponentName from "@/components/dashboard/UI/ComponentName.vue";
import QrCardStatistics from "@/components/dashboard/qr_card_statistics/QrCardStatistics.vue";
</script>
<template>
  <div class="statistics">
    <ComponentName class="statistics__title">Статистика</ComponentName>
    <div class="list">
      <QrCardStatistics class="item" />
      <QrCardStatistics class="item" />
      <QrCardStatistics class="item" />
      <div class="gradient"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.statistics {
  position: relative;
  overflow: hidden;
  @include blockStyle();
}

.statistics__title {
  margin-bottom: 20px;
}

.list {
  display: grid;
  row-gap: 20px;
}

.gradient {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: rgb(243, 245, 247);
  background: linear-gradient(
    0deg,
    rgba(243, 245, 247, 1) 0%,
    rgba(243, 245, 247, 0) 100%
  );
  pointer-events: none;
}
</style>
