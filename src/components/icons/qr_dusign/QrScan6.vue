<script setup lang="ts">
import QRCode from "../QRCode.vue";
defineProps({ currentQr: Number, id: Number, color: String });
</script>

<template>
  <div class="table" :class="{ active: currentQr === id }">
    <div class="wrapper">
      <div class="text"><slot /></div>
      <QRCode class="icon" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table {
  width: 115px;
  height: 160px;
  // padding: 2px;
  padding-top: 15px;
  cursor: pointer;
  &.active {
    box-shadow: 0px 0px 0px 2px #20d647;
  }
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 43px 20px 27px 20px;
  border: 1px solid #18213c;
  background-color: #fff;
  position: relative;
  z-index: 1;
  &::after,
  &::before {
    content: "";
    display: block;
    border: 5px solid white;
    z-index: 20;
    position: absolute;
  }
  &::before {
    left: 36px;
    top: -2px;
    right: 36px;
    bottom: -2px;
    border-left: none;
    border-right: none;
  }
  &::after {
    left: -2px;
    top: 36px;
    right: -2px;
    bottom: 36px;
    border-top: none;
    border-bottom: none;
  }
}
.text {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 32px;
  border: 1px solid #18213c;
  background-color: #18213c;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: white;
  z-index: 20;
}
.icon {
  width: 75px;
  height: 75px;
}
.table.active {
}
</style>
