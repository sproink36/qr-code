<script setup>
import QrCardStatistics from "../../qr_card_statistics/QrCardStatistics.vue";
import ComponentName from "../../UI/ComponentName.vue";
import SelectMenuFolders from "../../UI/SelectMenuFolders.vue";
import SelectMenuNew from "../../UI/SelectMenuNew.vue";
import SelectMenuTypes from "../../UI/SelectMenuTypes.vue";
import Pagination from "./Pagination.vue";
</script>
<template>
  <div class="by-qr">
    <div class="header">
      <ComponentName class="by-qr__title">По куаркодам</ComponentName>
      <div class="selects">
        <SelectMenuFolders />
        <SelectMenuTypes />
        <SelectMenuNew />
      </div>
    </div>
    <div class="list">
      <QrCardStatistics
        class="item"
        v-for="_ in 10"
        link="/dashboard/inner_qr/1"
        :column-style="true"
      />
    </div>
    <Pagination />
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.by-qr {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 20px, $padding: 40px);
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.selects {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
}
</style>
