<template>
  <div
    class="button"
     @mouseover="mouseover"
    :style="{
      borderColor: borderColor,
      backgroundColor: bgColor,
      color: textColor,
    }"
  >
    <span><slot></slot></span>
  </div>
</template>

<script setup>
defineProps({
  borderColor: String,
  bgColor: String,
  textColor: String,
});

function mouseover(){
  
}
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
  height: 84px;
  cursor: pointer;
  transition: all 0.3s ease;

  & span {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  @include media-queries.media-large {
    height: 84px;
  }

  @include media-queries.media-small {
    height: 64px;
    font-size: 15px;
  }
}
</style>
