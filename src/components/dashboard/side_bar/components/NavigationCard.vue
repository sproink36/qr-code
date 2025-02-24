<script setup>
import { Home, Archive, FileGraph, LogoSmall } from "@/components/icons/index";
import { useRoute, useRouter } from "vue-router";
const dataList = [
  { icon: Home, text: "Главная", path: "/dashboard/main" },
  { icon: LogoSmall, text: "Хранилище", path: "/dashboard/storage" },
  { icon: FileGraph, text: "Статистика", path: "/dashboard/statistic" },
  { icon: Archive, text: "Архив куаров", path: "/" },
];

const router = useRouter();
const route = useRoute();
</script>
<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in dataList"
      :class="{ active: route.path === item.path }"
      @click="() => router.push(item.path)"
    >
      <component class="icon" :is="item.icon"></component>
      <p class="text">{{ item.text }}</p>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;

.list {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  background-color: #f3f5f7;
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  cursor: pointer;

  // &:hover {
  //   background-color: #ffffff;
  //   border-radius: 10px;

  //   & .icon > * {
  //     fill: $primary;
  //   }
  // }
}

.item.active {
  background-color: #ffffff;
  border-radius: 10px;

  & .icon > * {
    fill: $primary;
  }
}

.text {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.icon {
  width: 24px;
  height: 24px;
  & > * {
    fill: rgba(24, 33, 60, 0.2);
  }
}
</style>
