<script setup>
import QRCode from "../QRCode.vue";
defineProps({ currentQr: Number, id: Number, color: String });
</script>
<template>
  <div :class="{ active: currentQr === id }">
    <QRCode class="icon" />
  </div>
</template>
<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 160px;
  border-radius: 10px;
  cursor: pointer;
  &.active {
    border: 2px solid #20d647;
  }
}
.icon {
  width: 75px;
  height: 75px;
}
</style>
