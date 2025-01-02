<template>
  <h2>
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

h2 {
  font-family: "PIXY";
  text-align: center;
  text-underline-position: "from-font";
  font-weight: 400;
  text-wrap: wrap;

  @include media-queries.media-Xlarge {
    font-size: 150px;
    line-height: 140px;
  }

  @include media-queries.media-large {
    font-size: 120px;
    line-height: 120px;
  }

  @include media-queries.media-medium {
    font-size: 64px;
    line-height: 72px;
  }

  @include media-queries.media-small {
    font-size: 28px;
    line-height: 40px;
  }
}
</style>
