<template>
  <div class="button">
    <div class="icon_block">
      <slot name="icon"></slot>
    </div>
    <H4Title class="text"><slot name="text"></slot></H4Title>
  </div>
</template>

<script setup>
import H4Title from "./H4Title.vue";
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   width: 100%;
  gap: 20px;
  border-radius: 150px;

  @include media-queries.media-Xlarge {
    padding: 20px;
  }

  @include media-queries.media-large {
    padding: 20px;
  }

  @include media-queries.media-medium {
    padding: 10px;
  }
  @include media-queries.media-small {
    padding: 0;
    padding-right: 10px;
    gap: 10px;
  }
}

.icon_block {
  @include media-queries.media-Xlarge {
    width: 64px;
    height: 64px;
  }

  @include media-queries.media-large {
    width: 64px;
    height: 64px;
  }

  @include media-queries.media-medium {
    width: 48px;
    height: 48px;
  }
  @include media-queries.media-small {
    width: 32px;
    height: 32px;
  }

  & > * {
    width: 100%;
    height: 100%;
  }
}
</style>
