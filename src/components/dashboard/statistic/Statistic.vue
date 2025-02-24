<script setup>
import ByQr from "./components/ByQr.vue";
import MainStatistic from "./components/MainStatistic.vue";
</script>
<template>
  <div class="statistic">
    <MainStatistic class="main-statistic" />
    <ByQr />
  </div>
</template>
<style lang="scss" scoped>
.statistic {
  width: 100%;
}

.main-statistic {
  margin-bottom: 20px;
}
</style>
