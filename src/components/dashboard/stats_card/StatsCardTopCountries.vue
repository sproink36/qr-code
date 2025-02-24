<script setup>
import StatsCard from "./StatsCard.vue";

defineProps({ items: Array });
</script>
<template>
  <StatsCard
    class="stats-card-top-countries"
  >
    <template v-slot:title><slot /></template>
    <div class="columns">
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in items.slice(0, items.length / 2)"
        >
          <div class="num">{{ index + 1 }}</div>
          <component :is="item.icon" class="icon" />
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in items.slice(items.length / 2, items.length)"
        >
          <div class="num">{{ index + 6 }}</div>
          <component :is="item.icon" class="icon" />
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </StatsCard>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;
.columns {
  display: flex;
  justify-content: flex-start;
  gap: 40px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.num {
  width: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8b909d;
}

.icon {
  width: 19px;
  height: 19px;
}

.text {
  width: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: $black;
}
</style>
