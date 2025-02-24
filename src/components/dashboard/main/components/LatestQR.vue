<script setup>
import ComponentName from "@/components/dashboard/UI/ComponentName.vue";
import BtnCreateQR from "@/components/dashboard/UI/BtnCreateQR.vue";
import QRCodeCard from "@/components/dashboard/UI/QRCodeCard.vue";
</script>
<template>
  <div class="latest-qr">
    <ComponentName class="latest-qr__title">Последние куаркоды</ComponentName>
    <div class="qr-list">
      <BtnCreateQR class="latest-qr__btn-create-qr" />
      <QRCodeCard
        class="qr-code-card"
        v-for="card in 3"
        link="/dashboard/inner_qr/1"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.latest-qr {
  @include blockStyle();
  width: 100%;
  height: 486px;
  padding-bottom: 0;
}

.latest-qr__title {
  margin-bottom: 20px;
}

.qr-list {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
}

.latest-qr__btn-create-qr {
  width: 254px;
  height: auto;
}
</style>
