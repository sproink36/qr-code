<script setup>
import Button from "@/components/Button.vue";
import MoreActions from "./MoreActions.vue";
</script>
<template>
  <MoreActions class="drop-down-menu">
    <slot name="first"></slot>
    <div class="line"></div>
    <slot></slot>
    <Button btnType="green" class="btn">Сохранить</Button>
  </MoreActions>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;

.drop-down-menu {
  width: 308px;
  border-radius: 20px;
}

.line {
  height: 1px;
  background-color: $stroke;
}

.btn {
  font-size: 16px;
}
</style>
