<script setup>
import StatsCard from "./StatsCard.vue";

defineProps({ color: String, items: Array });
</script>
<template>
  <StatsCard class="stats-card-qr">
    <template v-slot:title>Всего куаров</template>
    <div class="number"><slot /></div>
    <div class="list">
      <div class="item" v-for="item in items">
        <div class="dot" :style="{ backgroundColor: item.color }"></div>
        <div class="name" :style="{ color: item.color }">{{ item.name }}</div>
        <div class="quantity">{{ item.quantity }}</div>
      </div>
    </div>
  </StatsCard>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.number {
    margin-bottom: 21px;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: $black;
}

.list {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.item {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 5px, $padding: 3px 5px);
  display: flex;
  align-items: center;
  gap: 5px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.name {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}

.quantity {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: $black;
}
</style>
