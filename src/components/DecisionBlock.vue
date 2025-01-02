<script setup lang="js">
import H2Title from "./H2Title.vue";
import saveKuarCod from "/src/assets/img/saveKuarCod.png";
import quarCodBlock from "/src/assets/img/quarCodBlock.png";
import Vector from "/src/assets/img/Vector 1.png";
import Vector1mini from "/src/assets/img/Vector1mini.png";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";

const saveKuarCodRef = ref(null);
const quarCodBlockRef = ref(null)
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
onMounted(() => {

  ScrollTrigger.matchMedia({
    "(min-width: 1520px)": () => {
      gsap.to(quarCodBlockRef.value, {
      y: 110,
      x: 5,
      rotateZ: -25,
      duration: 4, // Время анимации
      yoyo: true, // Включение обратной анимации
      repeat: -1, // Зацикливаем анимацию
      ease: "power1.inOut", // Плавное изменение скорости
      transformOrigin: "center center"
    })

    gsap.to(saveKuarCodRef.value, {
    y: 30,
    x: 10,
    rotateZ: 20,
    duration: 4, // Время анимации
    yoyo: true, // Включение обратной анимации
    repeat: -1, // Зацикливаем анимацию
    ease: "power1.inOut", // Плавное изменение скорости
    transformOrigin: "center right"
  })
    }
  })

})
</script>

<template>
  <div class="block">
    <div class="container block_container">
      <img
        class="saveKuarCod"
        :src="saveKuarCod"
        alt="сохранить куаркод"
        ref="saveKuarCodRef"
      />
      <div class="wrapper_img" ref="quarCodBlockRef">
        <img class="quarCodBlock" :src="quarCodBlock" />
      </div>
      <img class="vector" :src="Vector" />
      <img class="vector_mini" :src="Vector1mini" />
      <H2Title class="title">
        Преобразуем<br />
        привычные действия в&nbsp;удобные решения!
      </H2Title>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.block {
  width: 100%;
  display: flex;
  justify-content: center;

  @include media-queries.media-Xlarge {
    height: 822px;
    margin-bottom: 300px;
  }

  @include media-queries.media-large {
    height: 822px;
  }

  @include media-queries.media-medium {
    height: 516px;
    margin-bottom: 50px;
  }

  @include media-queries.media-small {
    height: 250px;
  }
}

.block_container {
  position: relative;

  @include media-queries.media-Xlarge {
    padding-top: 240px;
  }

  @include media-queries.media-large {
    padding-top: 198px;
  }

  @include media-queries.media-medium {
    padding-top: 103px;
  }

  @include media-queries.media-small {
    padding-top: 42px;
  }
}

img {
  position: absolute;
  z-index: -50;
}

.saveKuarCod {
  // transform-origin: "top right";
  @include media-queries.media-Xlarge {
    top: -10px;
    left: -20px;
  }

  @include media-queries.media-large {
    top: -40px;
    left: -20px;
  }

  @include media-queries.media-medium {
    width: 317px;
    height: 317px;
    top: -30px;
    left: -162px;
  }

  @include media-queries.media-small {
    width: 139px;
    height: 139px;
    top: -15px;
    left: -52px;
    z-index: 10;
  }
}

.wrapper_img {
  position: absolute;
  overflow: hidden;
  right: 0;
  z-index: -40;

  @include media-queries.media-Xlarge {
    width: 400px;
    height: 400px;
    bottom: 11px;
    right: -162px;
  }

  @include media-queries.media-large {
    width: 400px;
    height: 400px;
    bottom: 41px;
    right: -32px;
  }

  @include media-queries.media-medium {
    width: 200px;
    height: 200px;
    bottom: 27px;
    right: -12px;
  }

  @include media-queries.media-small {
    width: 70px;
    height: 70px;
    // right: 0;
    bottom: 46px;
  }
}

.quarCodBlock {
  top: 0;
  left: 0;
}

.vector {
  max-width: 100%;

  transform: translate(-50%);
  z-index: -100;
  top: 0;
  left: 50%;

  @include media-queries.media-Xlarge {
    width: 1461px;
    height: 100%;
  }

  @include media-queries.media-small {
    display: none;
  }
}

.vector_mini {
  max-width: 100%;
  display: none;
  transform: translate(-50%);
  z-index: -100;
  top: 0;
  left: 50%;

  @include media-queries.media-small {
    display: block;
  }
}

.title {
  & br:first-child {
    @include media-queries.media-small {
      display: none;
    }
  }

  & br:last-child {
    display: none;

    @include media-queries.media-Xlarge {
      display: block;
    }

    @include media-queries.media-small {
      display: block;
    }
  }
}
</style>
