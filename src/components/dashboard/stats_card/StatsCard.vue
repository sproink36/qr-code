<script setup>
defineProps({ cardStyle: Object, titleStyle: Object });
</script>
<template>
  <div class="stats-card" :style="cardStyle">
    <div class="title" :style="titleStyle"><slot name="title" /></div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.stats-card {
  @include blockStyle($bg-color: white, $br-radius: 10px, $padding: 20px);
}

.title {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8b909d;
}
</style>
