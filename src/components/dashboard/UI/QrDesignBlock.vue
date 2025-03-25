<script setup>
defineProps({ id: Number, currentActive: String });
</script>
<template>
  <div class="qr-design-block" :class="{ active: id == currentActive }">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.qr-design-block {
  @include dashboard-border($border: 2px solid $stroke, $br-radius: 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.qr-design-block.active {
  border-color: $primary;
}
</style>
