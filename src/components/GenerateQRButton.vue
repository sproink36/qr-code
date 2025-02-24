<template>
  <div class="circle">
    <LogoSmall />
  </div>
</template>

<script setup>
import { LogoSmall } from "@/components/icons/index";
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/common" as *;
@use "/src/assets/scss/includes/media-queries";
@use "/src/assets/scss/includes/variables" as *;
.circle {
  @include circle;
  background-color: $primary;
  border-color: $black;
  width: 84px;
  height: 84px;
  cursor: pointer;

  @include media-queries.media-large {
    width: 64px;
    height: 64px;
  }

  @include media-queries.media-medium {
    width: 100px;
    height: 100px;
  }

  @include media-queries.media-small {
    width: 60px;
    height: 60px;
  }
}
</style>
