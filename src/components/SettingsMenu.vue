<template>
  <div class="settings_menu" :class="{ active: currentSetting === title }">
    <div class="header" @click="$emit('select-settings', title)">
      <div class="block">
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <p class="title">{{ title }}</p>
      </div>
      <div class="icon_angle">
        <Angle1 />
      </div>
    </div>
    <div class="container_cont">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Angle1 from "../assets/icons/Angle1.vue";

defineProps({
  currentSetting: String,
  title: String,
});
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.settings_menu {
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid #18213c;
  border-radius: 30px;
  overflow: hidden;
  align-items: center;

  @include media-queries.media-small {
    padding: 14px;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .title {
    font-size: 24px;
    line-height: 32px;

    @include media-queries.media-small {
      font-size: 15px;
      line-height: 24px;
    }
  }

  .block {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .icon_angle {
    width: 32px;
    height: 32px;
    transition: transform 0.5s;

    & > * {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    & > * {
      width: 100%;
      height: 100%;
    }

    @include media-queries.media-small {
      width: 24px;
      height: 24px;
    }
  }

  .content {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    overflow: hidden;
    transition: all 0.5s;
  }
}

.settings_menu.active {
  & .icon_angle {
    transform: rotateZ(-180deg);
  }

  & .content {
    max-height: 328px;
    padding-top: 20px;
    opacity: 1;

    // @include media-queries.media-Xlarge {
    //   max-height: 428px;
    // }
  }
}
</style>
