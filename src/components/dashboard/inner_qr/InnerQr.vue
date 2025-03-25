<script setup>
import MainInnerQr from "./components/MainInnerQr.vue";
import StatisticInnerQr from "./components/StatisticInnerQr.vue";
</script>
<template>
  <div class="inner-qr">
    <MainInnerQr class="main-inner-qr" />
    <StatisticInnerQr />
  </div>
</template>
<style lang="scss" scoped>
.main-inner-qr {
  margin-bottom: 20px;
}
</style>
