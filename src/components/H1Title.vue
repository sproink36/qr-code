<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<!-- <script setup>
import { ref } from 'vue';

const feature = ref();
</script> -->

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

h1 {
  font-family: PIXY;
  font-weight: 400;
  text-align: center;
  text-underline-position: from-font;

  @include media-queries.media-Xlarge {
    font-size: 180px;
    line-height: 140px;
    // margin-bottom: 40px;
  }

  @include media-queries.media-large {
    font-size: 140px;
    line-height: 110px;
    // margin-bottom: 60px;
  }

  @include media-queries.media-medium {
    position: static;
    font-size: 72px;
    line-height: 72px;
    margin-bottom: 40px;
  }

  @include media-queries.media-small {
    position: static;
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 20px;
  }
}
</style>
