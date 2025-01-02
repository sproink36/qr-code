<template>
  <div
    class="button"
    :style="{
      borderColor: borderColor,
      backgroundColor: bgColor,
      color: textColor,
      width: width,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  borderColor: String,
  bgColor: String,
  textColor: String,
  width: String,
});
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/common" as *;
@use "/src/assets/scss/includes/variables" as *;
@use "/src/assets/scss/includes/media-queries";
.button {
  @include button-style;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  cursor: pointer;

  @include media-queries.media-large {
    height: 84px;
  }
}
</style>
