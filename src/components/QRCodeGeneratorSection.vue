<template>
  <div class="section section_anim" @trigger-animation="animateSection">
    <div class="container section__container">
      <div class="section__container_bg"></div>
      <div class="scale__container section__scale__container">
        <div class="block_1 section__block1_anim">
          <div class="tags">
            <ButtonTag title="URL-адрес" @select-tag="selectTag" :currentTag>
              <Link />
            </ButtonTag>
            <ButtonTag title="Текст" @select-tag="selectTag" :currentTag>
              <Text />
            </ButtonTag>
            <ButtonTag title="Сообщение" @select-tag="selectTag" :currentTag>
              <Message />
            </ButtonTag>
            <ButtonTag
              title="Электронная почта"
              @select-tag="selectTag"
              :currentTag
            >
              <Mail />
            </ButtonTag>
          </div>
          <input
            class="input_url section__input_url_anim"
            v-model="input"
            type="text"
            placeholder="URL ссылка на&nbsp;сайт"
          />
        </div>
        <div class="generator section__generator_anim">
          <div class="generator__bg_text" v-if="mediaXLarge || mediaLarge">
            svg анимация
          </div>
          <div class="generator__container generator__container_anim">
            <div class="canvas"></div>
            <Button class="btn" btnType="black">Сохранить куаркод</Button>
            <div class="selector_type">
              <div
                v-for="item in types"
                :key="item"
                class="btn_type"
                :class="{ active: currentType === item }"
                @click="currentType = item"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
        <div class="settings section__settings_anim">
          <SettingsMenu
            title="Настройки цвета"
            :currentSetting
            @select-settings="selectSettings"
          >
            <template v-slot:icon>
              <Pallet />
            </template>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            dolore nemo maxime doloremque nihil deleniti distinctio cupiditate
            blanditiis, ut itaque dolores mollitia asperiores ab corrupti id
            similique ea exercitationem facilis?
          </SettingsMenu>
          <SettingsMenu
            title="Настройки дизайна"
            :currentSetting
            @select-settings="selectSettings"
          >
            <template v-slot:icon>
              <Pero />
            </template>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            dolore nemo maxime doloremque nihil deleniti distinctio cupiditate
            blanditiis, ut itaque dolores mollitia asperiores ab corrupti id
            similique ea exercitationem facilis?
          </SettingsMenu>
          <SettingsMenu
            title="Настройки рамки"
            :currentSetting
            @select-settings="selectSettings"
          >
            <template v-slot:icon>
              <Square />
            </template>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            dolore nemo maxime doloremque nihil deleniti distinctio cupiditate
            blanditiis, ut itaque dolores mollitia asperiores ab corrupti id
            similique ea exercitationem facilis?
          </SettingsMenu>
          <SettingsMenu
            title="Логотип"
            :currentSetting
            @select-settings="selectSettings"
          >
            <template v-slot:icon>
              <Spin />
            </template>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            dolore nemo maxime doloremque nihil deleniti distinctio cupiditate
            blanditiis, ut itaque dolores mollitia asperiores ab corrupti id
            similique ea exercitationem facilis?
          </SettingsMenu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ButtonTag from "./ButtonTag.vue";
import { Link, Mail, Pero, Square, Text, Spin } from "../assets/icons";
import Message from "../assets/icons/Message.vue";
import Button from "./Button.vue";
import SettingsMenu from "./SettingsMenu.vue";
import Pallet from "../assets/icons/Pallete.vue";
import gsap from "gsap";
import { useMedia } from "../hooks/useMedia";

const currentTag = ref("URL-адрес");
const currentSetting = ref(null);
const currentType = ref(null);
const input = ref("");
const types = [".png", ".jpg", ".svg", ".pdf"];

const mediaXLarge = useMedia("(min-width: 2160px)");
const mediaLarge = useMedia("(min-width: 1520px) and (max-width: 2159px)");

let mm = gsap.matchMedia();

function getBlockOffsetHeight(className) {
  const element = document.querySelector(className);
  return element.offsetHeight;
}

function scaleContent() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  mm.add(
    {
      isXLarge: "(min-width: 2160px)",
      isLarge: "(min-width: 1520px) and (max-width: 2159px)",
    },
    (context) => {
      let { isXLarge, isLarge } = context.conditions;
      let scaleContainer = () => {
        let newScale;
        if (isXLarge) {
          newScale = Math.min(windowWidth / 2080, windowHeight / 1187);
        } else if (isLarge) {
          newScale = Math.min(windowWidth / 1440, windowHeight / 914);
        }

        return Math.min(newScale, 1);
      };

      gsap.to(".section__scale__container", {
        scale: scaleContainer(),
        transformOrigin: "top center", // Масштабируем от верхнего левого угла
        duration: 0.5, // Плавность анимации
        ease: "power2.out", // Плавное затухание
      });
    }
  );
}

onMounted(() => {
  mm.add(
    {
      isXLarge: "(min-width: 2160px)",
      isLarge: "(min-width: 1520px) and (max-width: 2159px)",
    },
    (context) => {
      scaleContent();
      let { isXLarge, isLarge } = context.conditions;
      let blockHorizShift = () => {
        if (isXLarge) return 250;
        if (isLarge) return 150;
      };
      let blockVertShift = () => {
        if (isXLarge) return 2500;
        if (isLarge) return 2100;
      };

      gsap.fromTo(
        ".generator__container_anim",
        {
          y: "100%",
          pointerEvents: "none",
        },
        {
          y: 0,
          pointerEvents: "auto",
          duration: 0.6,
          scrollTrigger: {
            trigger: ".generator__container_anim",
            start: `top top`,
            end: "top center",
            toggleActions: "play none reverse none",
            // markers: true,
          },
        }
      );

      // gsap.set(".section__container_bg", {height: "calc(100vh - 200px)"})

      gsap.fromTo(
        ".section__container_bg",
        {
          scaleY: 0,
          opacity: 0,
        },
        {
          scaleY: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".section__container_bg",
            start: "top-=400 top",
            end: "top+=100 top",
            toggleActions: "play none reverse none",
            // markers: true,
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".section__block1_anim",
        {
          x: blockHorizShift(),
          opacity: 0,
          pointerEvents: "none",
        },
        {
          x: 0,
          pointerEvents: "auto",
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".section__block1_anim",
            start: `top+=${blockVertShift()} top`,
            end: `top+=${blockVertShift()} top`,
            toggleActions: "play none reverse none",
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        ".section__settings_anim",
        {
          x: -blockHorizShift(),
          opacity: 0,
          pointerEvents: "none",
        },
        {
          x: 0,
          pointerEvents: "auto",
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".section__settings_anim",
            start: `top+=${blockVertShift()} top`,
            end: `top+=${blockVertShift()} top`,
            toggleActions: "play none reverse none",
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        ".section__input_url_anim",
        {
          x: blockHorizShift() + 100,
          opacity: 0,
          pointerEvents: "none",
        },
        {
          x: 0,
          pointerEvents: "auto",
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".section__block1_anim",
            start: `top+=${blockVertShift()} top`,
            end: `top+=${blockVertShift()} top`,
            toggleActions: "play none reverse none",
            // markers: true,
          },
        }
      );
    }
  );

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(scaleContent, 100); // Задержка 100мс, чтобы не вызывать функцию слишком часто
  });
});

function selectSettings(setting) {
  if (currentSetting.value === setting) {
    currentSetting.value = null;
  } else {
    currentSetting.value = setting;
  }
}

function selectTag(title) {
  currentTag.value = title;
}
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";
.section {
  min-width: 100%;
  margin-bottom: 20px;
  border-radius: 40px;
  position: relative;

  @include media-queries.media-Xlarge {
    // height: calc(100vh - 150px);
    // min-height: 700px;
    // margin-bottom: 108px;
  }

  @include media-queries.media-large {
    // height: calc(100vh - 150px);
    // min-height: 600px;
    // height: 75vh;
  }

  @include media-queries.media-medium {
    background-color: #f3f5f7;
  }
  @include media-queries.media-small {
    background-color: #f3f5f7;
  }
}
.section__container {
  padding-top: 0;
  position: relative;

  & .section__container_bg {
    transform-origin: top center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    z-index: -1000;
    background-color: #f3f5f7;

    @include media-queries.media-medium {
      background-color: #f3f5f7;
    }

    @include media-queries.media-small {
      background-color: #f3f5f7;
    }
  }

  @include media-queries.media-Xlarge {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    height: 85vh;
  }

  @include media-queries.media-large {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    height: 85vh;
  }
}

.scale__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include media-queries.media-Xlarge {
    // height: 100%;
    width: 100%;
  }
  @include media-queries.media-large {
    // height: 100%;
    width: 100%;
  }

  .block_1,
  .settings,
  .generator {
    width: 100%;
    display: flex;
    @include media-queries.media-Xlarge {
      max-height: 100%;
    }

    @include media-queries.media-large {
      max-height: 100%;
    }
  }

  .generator {
    @include media-queries.media-Xlarge {
      z-index: 2;
    }
    @include media-queries.media-large {
      z-index: 2;
    }
  }

  .block_1,
  .settings {
    @include media-queries.media-Xlarge {
      padding-top: 100px;
      // padding-top: 6.25rem;
      // padding-top: rem(100);
    }
  }

  @include media-queries.media-Xlarge {
    gap: 40px;
    // gap: 2.5rem;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 60px;
    // padding-top: 3.75rem;
    // padding-bottom: 46px;
    // padding-bottom: 2.875rem;
  }

  @include media-queries.media-large {
    gap: 40px;
    // gap: 2.5rem;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 60px;
    // padding-top: 3.75rem;
    // padding-bottom: 60px;
    // padding-bottom: 3.75rem;
  }

  @include media-queries.media-medium {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @include media-queries.media-small {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

.block_1 {
  flex-direction: column;
  order: 1;

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    // @include media-queries.media-Xlarge {
    //   gap: 0.625rem;
    // }

    // @include media-queries.media-large {
    //   gap: 0.625rem;
    // }
  }

  .input_url {
    background-color: transparent;
    height: 40px;

    &::placeholder {
      font-size: 32px;
      line-height: 40px;
    }

    // @include media-queries.media-Xlarge {
    //   height: 2.5rem;
    //   &::placeholder {
    //     font-size: 2rem;
    //     line-height: 2.5rem;
    //   }
    // }

    // @include media-queries.media-large {
    //   height: 2.5rem;
    //   &::placeholder {
    //     font-size: 2rem;
    //     line-height: 2.5rem;
    //   }
    // }

    @include media-queries.media-small {
      &::placeholder {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  @include media-queries.media-Xlarge {
    gap: 42px;
    // gap: 2.625rem;
  }

  @include media-queries.media-large {
    gap: 42px;
    // gap: 2.625rem;
  }

  @include media-queries.media-medium {
    gap: 42px;
    margin-bottom: 60px;
  }

  @include media-queries.media-small {
    gap: 42px;
    margin-bottom: 40px;
  }
}

.generator {
  border: 2px solid #18213c;
  border-radius: 40px;
  order: 2;
  position: relative;
  overflow: hidden;
  background-color: #f3f5f7;

  & .generator__container {
    display: flex;
    width: 100%;
    // height: 100%;
    padding: 30px;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    border-radius: 40px;
    background-color: #f3f5f7;

    @include media-queries.media-Xlarge {
      gap: 30px;
      // max-height: 100%;
      // gap: 1.875rem;
    }

    @include media-queries.media-large {
      // max-height: 100%;
      // gap: 1.875rem;
    }

    @include media-queries.media-small {
      gap: 0;
    }
  }

  & .generator__bg_text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 68px;
    font-family: PIXY;
    font-weight: 400;
    text-align: center;

    // @include media-queries.media-Xlarge {
    //   font-size: 4.25rem;
    // }

    // @include media-queries.media-large {
    //   font-size: 4.25rem;
    // }
  }

  .canvas {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    background-color: rgb(230, 230, 230); //!!!
    border-radius: 20px;

    @include media-queries.media-Xlarge {
      height: 400px;
      // height: 25rem;
      // padding: 1.875rem 0;
    }

    @include media-queries.media-large {
      height: 280px;
      // height: 17.5rem;
      // padding: 1.875rem 0;
    }

    @include media-queries.media-medium {
      margin-bottom: 20px;
      height: 280px;
    }

    @include media-queries.media-small {
      margin-bottom: 20px;
      height: 180px;
    }
  }

  @include media-queries.media-medium {
    order: 3;
  }

  @include media-queries.media-small {
    gap: 0;
    order: 3;

    & .canvas {
      margin-bottom: 20px;
    }

    & .btn {
      margin-bottom: 10px;
    }
  }

  & .btn {
    width: 100%;

    @include media-queries.media-Xlarge {
      margin-bottom: 52px;
      // margin-bottom: 3.25rem;
    }
  }

  .selector_type {
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 84px 84px;

    @include media-queries.media-Xlarge {
      // margin-bottom: 266px;
      // margin-bottom: 16.625rem;
      // grid-template-rows: 5.25rem 5.25rem;
      // gap: 0.625rem;
    }

    @include media-queries.media-large {
      // margin-bottom: 168px;
      // margin-bottom: 10.5rem;
      // grid-template-rows: 5.25rem 5.25rem;
      // gap: 0.625rem;
    }

    @include media-queries.media-small {
      grid-template-rows: 64px 64px;
    }

    gap: 10px;
  }

  .btn_type {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #bfbfbf;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: #bfbfbf;
    border-radius: 20px;
    cursor: pointer;

    &.active {
      border-color: #18213c;
      color: #18213c;
    }

    // @include media-queries.media-Xlarge {
    //   font-size: 1.125rem;
    //   line-height: 1.5rem;
    // }

    // @include media-queries.media-large {
    //   font-size: 1.125rem;
    //   line-height: 1.5rem;
    // }

    @include media-queries.media-small {
      font-size: 15px;
    }
  }
}

.settings {
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  order: 3;

  @include media-queries.media-Xlarge {
    max-height: 589px;
    // max-height: 36.813rem;
    // gap: 0.625rem;
  }

  @include media-queries.media-large {
    max-height: 589px;
    // max-height: 36.813rem;
    // gap: 0.625rem;
  }

  @include media-queries.media-medium {
    order: 2;
    margin-bottom: 40px;
  }

  @include media-queries.media-small {
    order: 2;
    margin-bottom: 40px;
  }
}
</style>
