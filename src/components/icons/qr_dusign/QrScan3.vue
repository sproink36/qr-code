<script setup lang="ts">
import QRCode from "../QRCode.vue";
defineProps({ currentQr: Number, id: Number, color: String });
</script>

<template>
  <div class="table" :class="{ active: currentQr === id }":style="{backgroundColor: color}">
    <div class="wrapper">
      <div class="triangle-down"></div>
      <QRCode class="icon" />
    </div>
    <div class="text">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table {
  width: 115px;
  height: 160px;
  border-radius: 10px;
  padding: 10px;
  background-color: #18213c;
  border: 2px solid transparent;
  cursor: pointer;
  &.active {
    border-color: #20d647;
  }
}

.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
}
.triangle-down {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid white;
  transform: translateX(-50%);
}
.icon {
  width: 75px;
  height: 75px;
}
.text {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: white;
}
</style>
