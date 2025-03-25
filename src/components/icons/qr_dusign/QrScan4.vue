<script setup lang="ts">
import QRCode from "../QRCode.vue";
defineProps({ currentQr: Number, id: Number, color: String });
</script>

<template>
  <div class="table" :class="{ active: currentQr === id }" :style="{backgroundColor: color}">
    <div class="block">
      <div class="wrapper">
        <QRCode class="icon" />
      </div>
    </div>
    <div class="text">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 115px;
  height: 160px;
  background-color: #18213c;
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
  border-radius: 5px;
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
  height: 40px;
  background-color: #ffffff1a;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: white;
}
</style>
