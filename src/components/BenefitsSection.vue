<template>
  <div class="benefits">
    <div class="container benefits__container">
      <H2Title class="title benefits_title_anim">Наши преимущества</H2Title>
      <div class="blocks benefits__blocks_anim">
        <BenefitsCard
          v-for="(item, index) in data"
          :key="item.bgColor"
          :bgColor="item.bgColor"
          :title="item.title"
          :text="item.text"
          :imgSRC="item.imgSRC"
          class="benefits__card_anim"
        >
          <Vue3Lottie
            ref="lottieRefs"
            :animationData="item.Loader"
            :height="'100%'"
            :width="'100%'"
            @on-loop-complete="() => handleAnimationComplete(index)"
          />
        </BenefitsCard>
        <div class="end"></div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import BenefitsCard from "./BenefitsCard.vue";
import H2Title from "./H2Title.vue";
import { Vue3Lottie } from 'vue3-lottie'
import twoBlocks from '../animations/twoBlocksQr.json'
import qr from '../animations/twoQRBlock.json'
import coin from '../animations/coin.json'
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import stateBlock from "../animations/stateBlock.json";
import { onBeforeUnmount } from "vue";
const data = [
    {bgColor: "#E5F2FF",title:"QR-коды<br/>с&nbsp;креативным подходом", text: "Создавайте оригинальные QR-коды, которые выделяются и&nbsp;подчеркивают ваш стиль. Простота, удобство и&nbsp;креативность в&nbsp;одном решении.", Loader: twoBlocks},
    {bgColor: "#FFF3DE",title:"Вся статистика &mdash; в&nbsp;одном месте", text: "Удобно собирайте и&nbsp;анализируйте данные о&nbsp;QR-кодах в&nbsp;одном месте. Все нужные метрики всегда под рукой.", Loader: stateBlock},
    {bgColor:"#FBFFE3", title:"Ведите проекты без лишних забот",text:"Управляйте проектами легко и&nbsp;без стресса. Все инструменты под рукой&nbsp;&mdash; просто и&nbsp;эффективно.", Loader: qr },
    {bgColor: "#F7E8FF", title:"Удобно и&nbsp;на&nbsp;сайте, и&nbsp;в&nbsp;расширении",text:"Используйте наш сервис как на&nbsp;сайте, так и&nbsp;в&nbsp;расширении для браузера. Вся функциональность&nbsp;&mdash; там, где вам удобнее.", Loader: coin}
]
const lottieRefs = ref([]); // Ссылки на каждый Vue3Lottie компонент
const timeouts = ref({}); // Хранение таймеров для каждой анимации

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();
    // Управление завершением анимации
function handleAnimationComplete(index) {
      lottieRefs.value[index].stop();

      // // Если уже есть таймер, очищаем его
      if (timeouts.value[index]) {
        clearTimeout(timeouts.value[index]);
      }

      // // Устанавливаем задержку перед повторным воспроизведением
      timeouts.value[index] = setTimeout(() => {
        if (lottieRefs.value[index]) {
          lottieRefs.value[index].play(); // Повторно запускаем анимацию
        }
      }, 1500); // Задержка в миллисекундах
};

function getBlockOffsetHeight(className) {
  const element = document.querySelector(className);
  return element.offsetHeight;
}

    // Очистка таймеров при удалении компонента
onBeforeUnmount(() => {
  Object.values(timeouts.value).forEach(clearTimeout);
});

onMounted(() => {
  mm.add(
    {
      isXLarge: "(min-width: 2160px)",
      isLarge: "(min-width: 1520px) and (max-width: 2159px)",
    },
    (context) => {
      let { isXLarge, isLarge } = context.conditions;
      const cards = gsap.utils.toArray(".benefits__card_anim");
      let cardHeight = cards[0].offsetHeight;

      cards.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            endTrigger: ".end",
            start: "top " + (isXLarge ? 250 + 57 * index : 110 + 57 * index),
            end: `bottom ${cardHeight + (57 * cards.length)}`,
            pin: true,
            pinSpacing: false,
            scrub: 1,
            // markers: true,
          }
        })
      })

      gsap.to(".benefits_title_anim", {
        y:isXLarge ? 400 : 100,
        opacity: 0,
        scale: 0.75,
        scrollTrigger: {
          trigger: ".benefits_title_anim",
          start: isXLarge ? "top top" : "top top",
          end: isXLarge ? "bottom+=300"  : "bottom+=100",
          pin: true,
          pinSpacing: false,
          scrub: 2,
          // markers: true,
        }
      })
    });
})
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.benefits {
  & .benefits__container {
    height: 100%;
    padding-top: 0;
  }

  @include media-queries.media-Xlarge {
    margin-bottom: 300px;
  }

  @include media-queries.media-large {
    margin-bottom: 120px;
  }

  @include media-queries.media-medium {
    margin-bottom: 80px;
  }

  @include media-queries.media-small {
    margin-bottom: 64px;
  }
}

.title {
  @include media-queries.media-Xlarge {
    margin-bottom: 50px;
  }

  @include media-queries.media-large {
    margin-bottom: 60px;
  }
  @include media-queries.media-medium {
    margin-bottom: 20px;
  }

  @include media-queries.media-small {
    margin-bottom: 20px;
  }
}

.blocks {
  display: flex;
  flex-direction: column;

  @include media-queries.media-Xlarge {
    gap: 1200px;
  }

  @include media-queries.media-large {
    gap: 600px;
  }

  @include media-queries.media-medium {
    gap: 20px;
  }

  @include media-queries.media-small {
    gap: 20px;
  }
}
</style>
