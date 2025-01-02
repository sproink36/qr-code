<template>
  <div
    class="animated-button"
    :class="{
      green: btnType === 'green',
      black: btnType === 'black',
      disabled: disabled,
    }"
  >
    <span class="text text_defualt"><slot></slot></span>
    <span class="text text_copy"><slot></slot></span>
  </div>
</template>

<script setup lang="js">

const props = defineProps({
  btnType: String,
  disabled: Boolean,
});

</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/common" as *;
@use "/src/assets/scss/includes/variables" as *;
@use "/src/assets/scss/includes/media-queries";

.animated-button {
  @include button-style;
  position: relative;
  height: 84px;
  overflow: hidden;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

  &.green {
    border-color: $black;
    background-color: $primary;
    color: $black;
  }

  &.black {
    border-color: $black;
    background-color: $black;
    color: white;
  }

  &.green:hover {
    background-color: #0dc134;
  }

  &.green:active {
    background-color: #0eb231;
  }

  &.black:hover {
    background-color: #394463;
  }

  &.black:active {
    background-color: #0A0F1D;
  }

  &.disabled {
    opacity: 20%;
    pointer-events: none;
  }

  & .text {
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    transition: top 0.5s ease;
  }

  & .text_defualt {
    top: 0;
  }

  & .text_copy {
    top: 100%;
  }

  &:hover .text_defualt {
    top: -100%;
  }

  &:hover .text_copy {
    top: 0;
  }

  @include media-queries.media-Xlarge {
    font-size: 24px;
    line-height: 32px;
  }
  
  @include media-queries.media-small {
    height: 64px;
    font-size: 15px;
  }

  @include media-queries.media-large {
    height: 64px;
    font-size: 15px;
    line-height: 24px;
  }
}
</style>
