<script setup>
import ComponentName from "@/components/dashboard/UI/ComponentName.vue";

const fakeData = [
  { text: "Обновление 5.11.22", date: "25.01.2025" },
  { text: "Изменения в политике конфиденциальности", date: "25.01.2025" },
  { text: "Обновление 5.11.22", date: "25.01.2025" },
  { text: "Обновление 5.11.22", date: "25.01.2025" },
  { text: "Обновление 5.11.22", date: "25.01.2025" },
  { text: "Обновление 5.11.22", date: "25.01.2025" },
];
</script>
<template>
  <div class="news">
    <ComponentName class="news__title">Новости</ComponentName>
    <ul class="list">
      <li class="item" v-for="item in fakeData">
        <p class="text">{{ item.text }}</p>
        <p class="date">{{ item.date }}</p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.news {
  height: 486px;
  overflow: hidden;
  @include blockStyle();
}

.news__title {
  margin-bottom: 10px;
  font-family: "PIXY";
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  overflow: hidden;
  @include blockStyle($bg-color: white, $br-radius: 10px, $padding: 20px);
  & .text {
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }
  & .date {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #18213c80;
  }
}
</style>
