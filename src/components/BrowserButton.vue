<template>
  <div class="block browser-block-anim" :class="{ disabled: disabled }">
    <Button class="btn browser-btn-anim" btnType="green"><slot></slot></Button>
    <Browser class="browser browser-anim" />
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import { Browser } from "@/components/icons/index";
import { onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

defineProps({
  disabled: Boolean,
});

let animation = gsap.timeline({ paused: true });

onMounted(() => {
  let mm = gsap.matchMedia();
  mm.add(
    {
      isXLarge: "(min-width: 2160px)",
      isLarge: "(min-width: 1520px) and (max-width: 2159px)",
    },
    () => {
      animation
        .to(".browser-btn-anim", {
          x: -400,
          duration: 0.35,
          ease: "none",
        })
        .to(
          ".browser-anim",
          { right: "50%", x: "50%", duration: 0.35, ease: "none" },
          "<"
        )
        .to(".browser-block-anim", {
          backgroundColor: "#20D647",
        });
    }
  );
});

function playAnimation() {
  animation.play();
}

function reverseAnimation() {
  animation.reverse();
}

defineExpose({
  playAnimation,
  reverseAnimation,
});
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";
@use "/src/assets/scss/includes/variables" as *;
.block {
  position: relative;
  height: 84px;
  width: 100%;
  box-shadow: 0 0 0 2px $black;
  border-radius: 100px;
  align-self: center;
  overflow: hidden;

  &:hover .browser {
    fill: #0dc134;
  }

  &:active .browser {
    fill: #0eb231;
  }

  &:last-child {
    pointer-events: auto;
  }

  &.disabled {
    opacity: 20%;
    pointer-events: none;
  }

  @include media-queries.media-Xlarge {
    width: 456px;
  }

  @include media-queries.media-large {
    width: 339px;
    height: 64px;
  }

  @include media-queries.media-small {
    height: 64px;
  }

  & .btn {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    box-shadow: 0 0 0 2px $black;
    transition-property: width;
    overflow: hidden;
    text-wrap: nowrap;

    @include media-queries.media-Xlarge {
      width: 362px;
    }

    @include media-queries.media-large {
      width: 244px;
    }

    @include media-queries.media-medium {
      width: 100%;
      min-width: 594px;
      max-width: calc(100% - 94px);
    }

    @include media-queries.media-small {
      width: 100%;
      min-width: 256px;
      max-width: calc(100% - 94px);
    }

    @media (max-width: 389px) {
      width: 70%;
      min-width: 156px;
      font-size: 12px;
    }
  }

  & .browser {
    position: absolute;
    top: 50%;
    right: 42.67px;
    transform: translateY(-50%);
    fill: $black;

    @media (max-width: 389px) {
      right: 15%;
    }
  }
}
.hover_white:hover > svg {
  fill: white !important;
}
</style>
