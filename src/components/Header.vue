<template>
  <header
    class="header header_anim"
    :class="{ white_wall: isOpenBurger }"
    ref="header"
  >
    <div class="container header__container">
      <Logo class="header__logo" />
      <ul class="list header__list_anim" v-if="mediaLarge || mediaXLarge">
        <li class="item">
          <a class="link" ef="#">
            <span class="link_text link_defualt">Преимущества</span>
            <span class="link_text link_copy">Преимущества</span>
            <span class="link_hidden">Преимущества</span>
          </a>
        </li>
        <li class="item">
          <a class="link" ef="#">
            <span class="link_text link_defualt">FAQ</span>
            <span class="link_text link_copy">FAQ</span>
            <span class="link_hidden">FAQ</span>
          </a>
        </li>
        <li class="item">
          <a class="link" ef="#">
            <span class="link_text link_defualt">Расширение/плагин</span>
            <span class="link_text link_copy">Расширение/плагин</span>
            <span class="link_hidden">Расширение/плагин</span>
          </a>
        </li>
      </ul>
      <div class="block">
        <GenerateQRButton />
        <div class="header__button" :class="{ small: mediaSmall }">
          <span
            class="header__button-block header__button-block_defualt"
            v-if="mediaLarge || mediaXLarge"
          >
            <span class="header__button-text"
              >Войти или зарегистрироваться</span
            >
            <span class="header__button-icon"><User /></span>
          </span>
          <span
            class="header__button-block header__button-block_copy"
            v-if="mediaLarge || mediaXLarge"
          >
            <span class="header__button-text"
              >Войти или зарегистрироваться</span
            >
            <span class="header__button-icon"><User /></span>
          </span>
          <User v-else />
        </div>
      </div>
      <div
        class="burger-btn"
        v-if="!mediaLarge && !mediaXLarge"
        :class="{ burger_open: isOpenBurger }"
        @click="toggleModal"
      >
        <div class="lines">
          <div class="line"></div>
        </div>
      </div>
    </div>
    <Transition>
      <Teleport to="body">
        <div
          class="burger-overlay lenis lenis-smooth"
          v-if="isOpenBurger && !mediaLarge && !mediaXLarge"
        >
          <div class="burger-menu" id="burger-menu">
            <div class="container burger-overlay__container">
              <ul class="burger__list">
                <li class="burger__item" v-for="item in burgerList" :key="item">
                  <a href="#">{{ item }}</a>
                </li>
              </ul>
              <Button class="burger__btn" btnType="black">
                Сгенерировать куаркод
              </Button>
              <div class="burger__links">
                <a href="#">Политика конфиденциальности</a>
                <a href="#">support@qrcode.ru</a>
                <a href="#">©куаркод.инк 2024</a>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </Transition>
  </header>
</template>

<script setup>
import { Logo, User } from "@/components/icons/index";
import GenerateQRButton from "./GenerateQRButton.vue";
import Button from "./Button.vue";
import { useMedia } from "../hooks/useMedia";
import { onMounted, ref, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const mediaLarge = useMedia("(min-width: 1520px) and (max-width: 2159px)");
const mediaXLarge = useMedia("(min-width: 2160px)");
const mediaSmall = useMedia("(max-width: 768px)");
const isOpenBurger = ref(false);
const burgerList = [
  "Преимущества",
  "Расширение/плагин",
  "FAQ",
  "Вход/регистрация",
  "ВКонтакте",
  "Инстаграм",
];

const header = ref(null);

watch([mediaLarge, mediaXLarge], () => {
  if ((mediaLarge.value || mediaXLarge.value) && isOpenBurger.value) {
    isOpenBurger.value = false;
  }
});

watch([mediaLarge, mediaXLarge], () => {
  if (mediaLarge.value || mediaXLarge.value) {
    document.body.classList.remove("frozen");
  }
});

function toggleModal() {
  isOpenBurger.value = !isOpenBurger.value;
  document.body.classList.toggle("frozen");
}
let headerAnimation = gsap.timeline({ paused: true });

onMounted(() => {
  let mm = gsap.matchMedia();

  gsap.registerPlugin(ScrollTrigger);

  mm.add(
    {
      isXLarge: "(min-width: 2160px)",
      isLarge: "(min-width: 1520px) and (max-width: 2159px)",
      isSmall: "(max-width: 1519px)",
    },
    (context) => {
      let { isXLarge, isLarge, isSmall } = context.conditions;

      let width = () => {
        if (isXLarge) return 84;
        if (isLarge) return 64;
      };

      let headerAnimation = gsap.timeline({ paused: true });

      headerAnimation
        .to(".header__list_anim", { y: "-200", duration: 0.6 }, "<")
        .to(".header__button", { width: width(), duration: 0.4 }, "<")
        .to(".header__button-block", { width: width(), duration: 0.4 }, "<")
        .to(".header__button-text", { width: 0, duration: 0.4 }, "<")
        .to(".header__button-icon", { left: 0, duration: 0.4 }, "<");

      if (isSmall) {
        // Для мобильных устройств: Анимация скрытия заголовка
        headerAnimation.to(".header_anim", { y: "-200", duration: 0.6 }, "<");
      }

      let lastScrollY = 0;
      const header = document.querySelector(".header_anim");
      const headerHeight = header.offsetHeight;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (!document.body.classList.contains("frozen")) {
          if (isSmall) {
            // Проверяем, если заголовок вышел из видимости
            if (currentScrollY > headerHeight && currentScrollY > lastScrollY) {
              headerAnimation.play();
            } else if (currentScrollY < lastScrollY) {
              headerAnimation.reverse();
            }
          } else {
            if (currentScrollY > lastScrollY) {
              headerAnimation.play();
            } else {
              headerAnimation.reverse();
            }
          }
        }

        // Обновляем последнюю позицию прокрутки
        lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
    }
  );
});
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/common" as *;
@use "/src/assets/scss/includes/media-queries";
@use "/src/assets/scss/includes/variables" as *;

.header {
  width: 100%;
  z-index: 60;
  position: relative;

  @include media-queries.media-medium {
    margin: 0 auto 60px auto;
  }

  @include media-queries.media-small {
    margin: 0 auto 40px auto;
  }

  &.white_wall::after {
    content: "";
    height: 300px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 40;
  }
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include media-queries.media-large {
    max-width: 1840px;
  }

  @include media-queries.media-medium {
    padding-bottom: 20px;
  }
}

.header__logo {
  z-index: 70;
  width: 100px;
  height: 100px;

  @include media-queries.media-small {
    width: 60px;
    height: 60px;
  }

  @include media-queries.media-large {
    width: 64px;
    height: 64px;
  }
}

.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  height: 84px;
  padding: 0 30px;
  background-color: #f3f5f7;
  border-radius: 10px;

  @include media-queries.media-Xlarge {
    padding: 0 40px;
    margin-left: auto;
  }

  @include media-queries.media-large {
    margin-left: auto;
    height: 74px;
  }
}

.item {
  overflow: hidden;
  @include media-queries.media-Xlarge {
    padding: 10px 30px;
  }

  @include media-queries.media-large {
    padding: 10px 20px;
  }
}
.item:hover {
  border-radius: 50px;
  background-color: #0000000d;

  & .link .link_defualt {
    top: -140%;
  }

  & .link .link_copy {
    top: 0;
  }
}

.link {
  position: relative;
  cursor: pointer;
  & .link_hidden {
    visibility: hidden;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;

    @include media-queries.media-Xlarge {
      font-size: 24px;
      line-height: 32px;
    }

    @include media-queries.media-large {
      font-size: 15px;
      line-height: 24px;
    }
  }

  & .link_text {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    transition: top 0.3s ease;

    @include media-queries.media-Xlarge {
      font-size: 24px;
      line-height: 32px;
    }

    @include media-queries.media-large {
      font-size: 15px;
      line-height: 24px;
    }
  }

  & .link_defualt {
    top: 0;
  }

  & .link_copy {
    top: 140%;
    // color: #18213c99;
  }
}

.block {
  display: flex;
  gap: 10px;

  @include media-queries.media-Xlarge {
    margin-left: 149px;
    width: 596px;
    justify-content: end;
    gap: 20px;
  }

  @include media-queries.media-large {
    margin-left: 190px;
    width: 473px;
    justify-content: end;
  }

  @include media-queries.media-medium {
    gap: 16px;
  }

  @include media-queries.media-small {
  }
}

.header__button {
  @include button-style;
  position: relative;
  height: 84px;
  overflow: hidden;
  cursor: pointer;

  &.small {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  border-color: $black;
  background-color: $black;

  &:hover {
    background-color: #394463;
  }

  &:active {
    background-color: #0a0f1d;
  }

  & .header__button-block {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: top 0.5s ease;

    & .header__button-text {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      color: white;
      text-wrap: nowrap;
      overflow: hidden;

      @include media-queries.media-Xlarge {
        line-height: 32px;
        font-size: 24px;
      }

      @include media-queries.media-large {
        line-height: 24px;
        font-size: 15px;
      }
    }

    & .header__button-icon {
      position: absolute;
      right: -84px;
      top: 0;
      width: 84px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;

      @include media-queries.media-large {
        width: 64px;
        right: -64px;
      }
    }
  }

  & .header__button-block_copy {
    top: 100%;
  }

  &:hover .header__button-block {
    top: -100%;
  }

  &:hover .header__button-block_copy {
    top: 0;
  }

  &:hover {
    background-color: #394463;
  }

  &:active {
    background-color: #0a0f1d;
  }

  @include media-queries.media-Xlarge {
    width: 472px;
  }

  @include media-queries.media-large {
    width: 379px;
    height: 64px;
  }

  @include media-queries.media-medium {
    @include circle;
    width: 100px;
    height: 100px;
  }

  @include media-queries.media-small {
    width: 60px;
    height: 60px;
  }
}

.burger-btn {
  @include circle;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-color: $black;
  background-color: white;
  cursor: pointer;
  z-index: 70;

  & .lines {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 33px;

    & .line,
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      display: block;
      width: 100%;
      height: 3.333px;
      background-color: $black;
      border-radius: 10px;
    }

    & .line {
      top: 50%;
      opacity: 1;
      transform: translate(-50%, -50%);
      transition: opacity 0.2s ease-in-out;
    }

    &::after {
      transform: translateX(-50%);
      transition: all 0.3s ease-in-out;
      top: 0;
    }

    &::before {
      transform: translateX(-50%);
      transition: all 0.3s ease-in-out;
      bottom: 0;
    }
  }

  &.burger_open .lines {
    & .line {
      opacity: 0;
    }

    &::after {
      top: 50%;
      transform: translate(-50%, -50%) rotateZ(45deg);
    }

    &::before {
      bottom: 50%;
      transform: translate(-50%, 50%) rotateZ(-45deg);
    }
  }

  @include media-queries.media-small {
    width: 60px;
    height: 60px;
  }
}

.burger-overlay {
  position: fixed;
  width: 100vw;
  height: 100dvh;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 25;
}

.burger-overlay__container {
}

.burger-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 180px 0 40px 0;
  -webkit-overflow-scrolling: touch; /* Для лучшей прокрутки на мобильных устройствах */
  z-index: 20;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & .burger__list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 90px;

    & a {
      font-family: "PIXY";
      font-size: 48px;
      line-height: 116%;
    }
  }

  .burger__btn {
    margin-bottom: 50px;
  }

  & .burger__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    & a {
      font-size: clamp(16px, 18px, 22px);
      font-weight: 500;
      line-height: 133%;
      color: rgba(38, 39, 42, 0.3);
    }
  }

  // @include media-queries.media-medium {
  //   margin-top: 180px;
  // }
  // @media (min-width: 768px) {
  //   padding: 180px 40px 40px 40px;
  // }

  @include media-queries.media-small {
    padding: 140px 20px 27px 20px;

    & .burger__list {
      margin-bottom: 40px;

      & a {
        font-size: 32px;
        line-height: 40px;
      }
    }

    & .burger__btn {
      margin-bottom: 40px;
    }

    & .burger__links {
      flex-direction: column;
      gap: 10px;

      & a {
        text-align: center;
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  left: 0;
  opacity: 1;
  transition: all 1s ease;
  pointer-events: all;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  pointer-events: none;
  left: -100%;
}
</style>
