<template>
  <div class="block" :style="{ backgroundColor: bgColor }">
    <div class="block__container">
      <H3Title class="title" v-html="title"></H3Title>
      <p class="text" v-html="text">
      </p>
      <div class="img_block">
        <img v-if="imgSRC" :src="imgSRC" />
        <div v-else class="animation_container">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
import H3Title from './H3Title.vue';

defineProps({
    bgColor: String,
    title: String,
    text: String,
    imgSRC: {
        type: String,
        required: false,
    },
})
</script>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.block {
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  width: 100%;

  @include media-queries.media-Xlarge {
    height: 750px;
  }

  @include media-queries.media-large {
    height: 542px;
  }

  @include media-queries.media-medium {
    padding-top: 346px;
  }

  @include media-queries.media-small {
    padding-top: 203px;
  }
}

.block__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @include media-queries.media-Xlarge {
    padding: 172px 0 172px 120px;
    gap: 20px;
  }

  @include media-queries.media-large {
    padding: 80px 80px 0 80px;
    gap: 20px;
  }

  @include media-queries.media-medium {
    padding: 40px;
    justify-content: flex-end;
    gap: 20px;
  }

  @include media-queries.media-small {
    padding: 20px;
    justify-content: flex-end;
    gap: 10px;
  }
}

.title {
  z-index: 10;
}

.animation_container {
  z-index: 9;
}

.text {
  //styleName: Desktop/Paragraph - Text;
  color: rgba(24, 33, 60, 0.7);
  text-underline-position: from-font;
  text-align: center;
  font-weight: 400;
  text-wrap: balance;
  width: 100%;
  z-index: 10;
  

  @include media-queries.media-Xlarge {
    line-height: 40px;
    font-size: 32px;
    text-align: left;
    max-width: 1077px;
  }

  @include media-queries.media-large {
    line-height: 32px;
    font-size: 24px;
    text-align: left;
    max-width: 680px;
  }

  @include media-queries.media-small {
    font-size: 14px;
    line-height: 24px;
  }
}

.img_block {
  position: absolute;
  overflow: hidden;
  @include media-queries.media-Xlarge {
    width: 762px;
    height: 628px;
    top: 45px;
    right: 73px;
  }

  @include media-queries.media-large {
    width: 582px;
    height: 480px;
    top: 30px;
    right: 30px;
    bottom: 30px;
  }

  @include media-queries.media-medium {
    width: 506px;
    height: 418px;
    top: -71px;
    left: 50%;
    transform: translateX(-50%);
  }

  @include media-queries.media-small {
    transform: translateX(-50%);
    width: 233px;
    height: 193px;
    top: 0;
    left: 50%;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
