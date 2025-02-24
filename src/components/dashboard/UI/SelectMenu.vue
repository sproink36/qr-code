<script setup>
import { Angle } from "@/components/icons";
import { ref } from "vue";

const showMenu = ref(false);
</script>
<template>
  <div
    class="select-menu"
    @click.self="showMenu = !showMenu"
    v-click-outside="() => showMenu = false"
  >
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <p class="text"><slot></slot></p>
    <Angle class="angle" />
    <div class="overlay" v-if="showMenu">
      <slot name="drop-menu"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.select-menu {
  @include dashboard-border($br-radius: 40px);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-width: 220px;
  padding: 15px;
  background-color: white;
}

.select-menu::before {
  content: ""; /* Обязательно для псевдоэлемента */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  cursor: pointer; /* Курсор только на родителе */
  z-index: 1; /* Псевдоэлемент под дочерними элементами */
}

.icon,
.text,
.angle {
  pointer-events: none;
}

.icon {
  width: 24px;
  height: 24px;
}

.text {
  flex-grow: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.angle {
  width: 24px;
  height: 24px;
  transform: rotateZ(180deg);
}

.overlay {
  position: absolute;
  top: calc(100% + 24px);
  right: 64px;
  z-index: 30;
}
</style>
