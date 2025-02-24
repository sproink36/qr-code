<template>
  <div class="block-icons">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.block-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @include blockStyle(#f3f5f7, 10px, 20px 0);

  & > * {
    width: 80px;
    height: 80px;

    & > svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
