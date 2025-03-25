<script setup lang="ts">
import QRCode from "../QRCode.vue";
defineProps({ currentQr: Number, id: Number, color: String });
</script>

<template>
  <div class="table" :class="{ active: currentQr === id }" >
    <div class="text"><slot /></div>
    <div class="wrapper" >
      <QRCode class="icon" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  width: 115px;
  height: 160px;
  cursor: pointer;
  &.active {
    box-shadow: 0px 0px 0px 2px #20d647 ;
  }
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px solid #18213c;
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #18213c;
  background-color: #fff;
  position: relative;
  z-index: 1;
  &::after,
  &::before {
    content: "";
    display: block;
    border: 5px solid #fff ;
    z-index: 20;
    position: absolute;
  }
  &::before {
    left: 29px;
    top: -2px;
    right: 29px;
    bottom: -2px;
    border-left: none;
    border-right: none;
  }
  &::after {
    left: -2px;
    top: 29px;
    right: -2px;
    bottom: 29px;
    border-top: none;
    border-bottom: none;
  }
}
.icon {
  width: 75px;
  height: 75px;
}
</style>
