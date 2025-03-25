<script setup lang="ts">
import QRCode from "../QRCode.vue";
defineProps({ currentQr: Number, id: Number, color: String });
</script>

<template>
  <div
    class="table"
    :class="{ active: currentQr === id }"
    :style="{ backgroundColor: color }"
  >
    <div class="text">
      <div class="triangle-down"></div>
      <slot />
    </div>
    <div class="block">
      <div class="wrapper">
        <QRCode class="icon" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table {
  width: 115px;
  height: 160px;
  background-color: #18213c;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  cursor: pointer;
  &.active {
    box-shadow: 0px 0px 0px 2px #20d647 inset;
  }
}
.block {
  padding: 10px;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: white;
}
.icon {
  width: 75px;
  height: 75px;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 40px;
  margin-bottom: 5px;
  border-top-right-radius: 30px;
  background-color: #ffffff1a;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: white;
}
.triangle-down {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #ffffff1a;
  transform: translateX(-50%);
}
</style>
