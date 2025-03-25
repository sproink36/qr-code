<script setup>
defineProps({
  title: String,
  index: String,
});
</script>
<template>
  <div class="table">
    <div class="table__header">
      <span>{{ index }}.</span>
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.table {
  @include blockStyle($bg-color: white, $br-radius: 30px, $padding: 40px);
  width: 100%;
}
.table__header {
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;

  & span {
    color: #8b909d;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
}
</style>
