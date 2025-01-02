<template>
  <h4><slot /></h4>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

h4 {
  font-family: "PIXY";
  font-weight: 400;

  @include media-queries.media-Xlarge {
    font-size: 56px;
    line-height: 56px;
    text-align: left;
  }

  @include media-queries.media-large {
    font-size: 40px;
    line-height: 48px;
    text-align: left;
  }

  @include media-queries.media-medium {
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
  }

  @include media-queries.media-small {
    font-size: 20px;
    line-height: 32px;
  }
}
</style>
