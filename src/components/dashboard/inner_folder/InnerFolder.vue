<script setup>
import { Angle, Setting } from "@/components/icons";
import ComponentName from "../UI/ComponentName.vue";
import SelectMenuNew from "../UI/SelectMenuNew.vue";
import SelectMenuTypes from "../UI/SelectMenuTypes.vue";
import BtnCreateQR from "../UI/BtnCreateQR.vue";
import QRCodeCard from "../UI/QRCodeCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="inner-folder">
    <div class="header">
      <div class="back circle" @click="router.back()">
        <Angle class="icon" />
      </div>
      <ComponentName>Куаркоды для ресторана</ComponentName>
      <div class="settings circle"><Setting class="icon" /></div>
      <div class="selects">
        <SelectMenuTypes />
        <SelectMenuNew />
      </div>
    </div>
    <div class="list">
      <BtnCreateQR class="btn" />
      <QRCodeCard
        class="qr-code-card"
        link="/dashboard/inner_qr/1"
        v-for="_ in 11"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.inner-folder {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 20px, $padding: 40px);
}
.header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;

  & .icon {
    width: 24px;
    height: 24px;
  }
}
.back .icon {
  transform: rotateZ(-90deg);
}
.settings {
  margin-right: auto;
}
.selects {
  display: flex;
  gap: 20px;
}
.list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
}
.btn {
  height: 100%;
}
</style>
