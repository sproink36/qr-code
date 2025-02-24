<script setup>
import ComponentName from "@/components/dashboard/UI/ComponentName.vue";
import BtnCreateQR from "../UI/BtnCreateQR.vue";
import QRCodeCard from "../UI/QRCodeCard.vue";
import FolderCard from "../UI/FolderCard.vue";
import SelectMenuTypes from "../UI/SelectMenuTypes.vue";
import SelectMenuNew from "../UI/SelectMenuNew.vue";
</script>
<template>
  <div class="storage">
    <div class="header">
      <ComponentName class="storage__title">Хранилище куаркодов</ComponentName>
      <div class="selects">
        <SelectMenuTypes />
        <SelectMenuNew />
      </div>
    </div>
    <div class="list">
      <BtnCreateQR class="btn-create-qr" />
      <template v-for="i in 11">
        <FolderCard
          class="folder-card"
          v-if="i === 2 || i === 7"
          :style="{ 'z-index': i + 1 }"
        >
          Куаркоды для ресторана
          <template v-slot:info> Папка · 5 куаркодов </template>
        </FolderCard>
        <QRCodeCard
          class="qr-code-card"
          v-else
          :style="{ 'z-index': i + 1 }"
          link="/dashboard/inner_qr/1"
        />
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.storage {
  @include blockStyle();
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.storage__title {
  font-size: 64px;
  line-height: 72px;
}

.selects {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: max-content;
}

.list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
}

.btn-create-qr {
  height: auto;
  min-width: 220px;
}
</style>
