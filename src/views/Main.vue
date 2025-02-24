<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import "toolcool-range-slider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../components/Header.vue";
import H1Title from "../components/H1Title.vue";
import BrowserButton from "../components/BrowserButton.vue";
import H2Title from "../components/H2Title.vue";
import DecisionBlock from "../components/DecisionBlock.vue";
import BenefitsSection from "../components/BenefitsSection.vue";
import PlatformsSection from "../components/PlatformsSection.vue";
import FAQSection from "../components/FAQSection.vue";
import Footer from "../components/Footer.vue";
import QRCodeGeneratorSection from "../components/QRCodeGeneratorSection.vue";
import { useMedia } from "../hooks/useMedia";
import Lenis from "@studio-freight/lenis"; // govno
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/all";
import {Logo} from "@/components/icons/index";

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

const childRef = ref(null);

function getElementPositionByHeight(className) {
  const element = document.querySelector(className);
  if (element) {
    return element.getBoundingClientRect().height; // Получаем высоту через getBoundingClientRect()
  }
  return 0; // Возвращаем 0, если элемент не найден
}

function getOffsetFromTop(className) {
  const element = document.querySelector(className);
  if (element) {
    try {
      const rect = element.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop; // Учитываем текущую прокрутку
      return rect.top + scrollTop; // Смещение от верха экрана до верхней части элемента
    } catch (error) {
      console.error(
        `Ошибка при вычислении смещения элемента ${className}:`,
        error
      );
      return 0; // Возвращаем 0, если произошла ошибка
    }
  }
  console.warn(`Элемент с классом "${className}" не найден.`);
  return 0; // Возвращаем 0, если элемент не найден
}

function getBlockOffsetHeight(className) {
  const element = document.querySelector(className);
  return element.offsetHeight;
}

function updateBtnPosition() {
  const newTop = window.innerHeight * 0.9;

  // Обновляем свойство top для кнопки, не изменяя всю анимацию
  gsap.to(".container_browser-btn", {
    top: newTop,
    duration: 0.5, // Плавно обновляем
  });
}

const mediaXLarge = useMedia("(min-width: 2160px)");
const mediaLarge = useMedia("(min-width: 1520px) and (max-width: 2159px)");
const mediaMedium = useMedia("(min-width: 768px) and (max-width: 1519px)");
const mediaSmall = useMedia("(max-width: 767px)");

onMounted(() => {
  let resizeTimeout;
  let resizeWindow = false;
  let startBtn = false;

  let lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: "vertical",
  });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  window.addEventListener("resize", () => {
    lenis.resize;
    // resizeWindow = true;
    if (startBtn) {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateBtnPosition, 100);
    }
  });

  mm.add(
    {
      isXLarge: "(min-width: 2160px)",
      isLarge: "(min-width: 1520px) and (max-width: 2159px)",
    },
    (context) => {
      let { isXLarge, isLarge } = context.conditions;
      let headerHeight = getBlockOffsetHeight(".main__header");

      let topHeight = () => {
        if (isXLarge) return headerHeight + 10;
        if (isLarge) return headerHeight + 25;
      };

      let topBtn = isXLarge ? 806 : 652;

      let qrEnd = () => {
        if (isXLarge) return 6000;
        if (isLarge) return 4700;
      };
      gsap.to(".main__block_anim", {
        scale: 0.75,
        opacity: 0,
        scrollTrigger: {
          trigger: ".main__block_anim",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 2,
          pinSpacing: false,
          // markers: true,
        },
      });

      gsap.to(".container_browser-btn", {
        scrollTrigger: {
          trigger: ".main_anim",
          start: "top top",
          end: "bottom top", //не дойдёт
          toggleActions: "play none none reverse",
          onEnter: () => {
            startBtn = true;
            gsap.to(".container_browser-btn", {
              top: window.innerHeight * 0.9,
              duration: 0.75,
              width: 250,
            });
            childRef.value.playAnimation();
          },

          onLeaveBack: () => {
            startBtn = false;
            gsap.to(".container_browser-btn", {
              top: topBtn, // Возвращаем в начальное положение по высоте
              width: "auto", // Возвращаем в исходную ширину
              duration: 0.75,
            });
            childRef.value.reverseAnimation();
          },
          // onUpdate: (self) => {
          //   // console.log(self.progress.toFixed(4));
          //   console.log(self);
          //   if (self.isActive && resizeWindow) {
          //     resizeWindow = false;
          //     clearTimeout(resizeTimeout);
          //     resizeTimeout = setTimeout(() => {
          //       gsap.to(".container_browser-btn", {
          //         top: window.innerHeight * 0.9,
          //         duration: 0.75,
          //       });
          //     }, 300);
          //   }
          // },
        },
      });

      gsap.set(".container___main__qr_anim", { height: qrEnd() });

      gsap.to(".main__qr_anim", {
        scrollTrigger: {
          trigger: ".main__qr_anim",
          start: `top top+=${topHeight()}`, // Начало
          end: () => {
            // Рассчитываем расстояние для конца
            const mainQrBottom = document
              .querySelector(".main__qr_anim")
              .getBoundingClientRect().height;
            const containerBottom = document
              .querySelector(".container___main__qr_anim")
              .getBoundingClientRect().height;
            return `+=${containerBottom - mainQrBottom}`; // Разница высот
          },
          pin: true,
          pinSpacing: false, // Без отступов
          scrub: 1,
          // markers: true, // Включите маркеры для отладки
        },
      });
    }
  );
});
</script>

<template>
  <div class="main main_anim">
    <Header class="main__header" />
    <div class="main__block_anim">
      <div class="container title_container" v-if="mediaMedium || mediaSmall">
        <H1Title class="title title_anim"> Сервис генерации куаркодов </H1Title>
      </div>
      <div
        class="container title_container title_container_flex"
        v-if="mediaLarge || mediaXLarge"
      >
        <H1Title class="title">Генерируй</H1Title>
        <Logo class="main__logo" />
        <H1Title class="title">куаркоды</H1Title>
      </div>
      <div class="container sub-title_container">
        <p class="sub-title sub-title_anim">
          Бесплатный сервис для создания QR-кодов с&nbsp;расширенными
          возможностями аналитики
        </p>
      </div>
    </div>
    <div
      class="container container_browser-btn"
      v-if="mediaXLarge || mediaLarge"
    >
      <BrowserButton class="browser-btn" ref="childRef"
        >Скачать для браузера</BrowserButton
      >
    </div>
    <div
      class="container container_browser-btn_defualt"
      v-if="mediaMedium || mediaSmall"
    >
      <BrowserButton class="browser-btn">Скачать для браузера</BrowserButton>
    </div>
    <div class="container___main__qr_anim">
      <QRCodeGeneratorSection class="main__qr_anim" />
    </div>
    <DecisionBlock />
    <BenefitsSection />
    <PlatformsSection />
    <FAQSection />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";
.title_container,
.sub-title_container,
.container_browser-btn,
.container_browser-btn_defualt {
  padding-top: 0;
}

.main__block_anim {
  margin-bottom: 40px;
  @include media-queries.media-Xlarge {
    margin-bottom: 194px;
  }
  @include media-queries.media-large {
    margin-bottom: 244px;
  }

  @include media-queries.media-medium {
    padding-top: 200px;
  }

  @include media-queries.media-small {
    padding-top: 141px;
    margin-bottom: 44px;
  }
}

.title {
  @include media-queries.media-Xlarge {
    padding-top: 350px;
    margin-bottom: 40px;
  }
  @include media-queries.media-large {
    padding-top: 252px;
    margin-bottom: 60px;
  }
}

.title_container_flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  left: -35px;
  position: relative;

  & .title {
    padding: 0;
    flex-shrink: 1;
    margin-right: -10px;
    margin-bottom: 0;
  }

  & .main__logo {
    align-self: flex-end;
    flex-shrink: 0;
    // margin-left: -10px;
  }

  @include media-queries.media-Xlarge {
    margin-bottom: 60px;
    padding-top: 30vh;

    & .title {
      font-size: 150px;
    }

    & .main__logo {
      width: 314px;
      height: 314px;
    }
  }

  @include media-queries.media-large {
    margin-bottom: 40px;
    padding-top: 27vh;

    & .main__logo {
      width: 200px;
      height: 200px;
    }

    & .title {
      font-size: 102px;
    }
  }
}

.sub-title_container {
  /* display: flex; */
  align-items: center;
  justify-content: center;
}

.sub-title {
  text-align: center;
  line-height: 40px;
  font-size: 28px;
  margin: 0 auto;

  @include media-queries.media-Xlarge {
    line-height: 48px;
    font-size: 36px;
    width: 1020px;
  }

  @include media-queries.media-large {
    width: 700px;
  }

  @include media-queries.media-medium {
    line-height: 24px;
  }

  @include media-queries.media-small {
    line-height: 24px;
    font-size: 14px;
  }
}

.container_browser-btn {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  @include media-queries.media-Xlarge {
    z-index: 500;
    top: 890px;
  }
  @include media-queries.media-large {
    z-index: 500;
    top: 623px;
  }

  & .browser-btn {
    max-width: 100%;
  }
}

.container_browser-btn_defualt {
  width: 100%;
  @include media-queries.media-medium {
    margin-bottom: 80px;
  }

  @include media-queries.media-small {
    margin-bottom: 60px;
  }
}

.container___main__qr_anim {
  @include media-queries.media-Xlarge {
    margin-bottom: 57px;
    // font-size: calc(100vw / 2160 * 10);
  }

  @include media-queries.media-large {
    margin-bottom: 104px;
    // font-size: calc(100vw / 1520 * 10);
  }

  @include media-queries.media-medium {
    margin-bottom: 10px;
  }

  @include media-queries.media-small {
    margin-bottom: 10px;
  }
}

.main__container {
  padding-top: 0;

  @include media-queries.media-Xlarge {
    margin-bottom: 40px;
  }
}

.smooth-scroll-container {
  will-change: transform;
}

.main__header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 60;
}

.anim_cont {
  scroll-snap-type: y mandatory;
}

.section_anim_DecisionBlock {
  @include media-queries.media-large {
    padding-top: 120px;
  }
}

.container_1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
