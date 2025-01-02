<template>
  <div class="block" @mousemove="handleMouseMove">
    <div id="cursorTrailContainer">
      <TransitionGroup name="fade" tag="div">
        <div
          v-for="element in trailElements"
          :key="element.id"
          class="cursor-element"
          :style="{
            left: `calc(-50px + ${element.x}px)`,
            top: `calc(-50px + ${element.y}px)`,
            backgroundImage: `url(${element.image})`,
          }"
        ></div>
      </TransitionGroup>
    </div>
    <div class="container block__container">
      <div class="main_block">
        <div class="block_1">
          <p class="text">
            Бесплатный сервис для создания QR-кодов с&nbsp;расширенными возможностями аналитики
          </p>
          <Button class="btn" btnType="green">Скачать для браузера</Button>
          <Button class="btn" btnType="black">Сгенерировать куаркод</Button>
        </div>
        <div class="img_block">
          <img :src="Frame" alt="" />
        </div>
        <div class="block_2">
          <div class="links">
            <a href="#">Преимущества</a>
            <a href="#">Расширение/плагин</a>
            <a href="#">FAQ</a>
            <a href="#">Вход/регистрация</a>
          </div>
          <div class="links">
            <a href="#">ВКонтакте</a>
            <a href="#">Инстаграм</a>
          </div>
        </div>
      </div>
      <div class="footer">
        <a href="#">Политика конфиденциальности</a>
        <a href="#">support@qrcode.ru</a>
        <a href="#">©куаркод.инк 2024</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { reactive, ref } from "vue";
import Button from "./Button.vue"
import Frame from "/src/assets/img/Frame 16.png"
import Image4 from "/src/assets/img/Frame 60.png";
import Image1 from "/src/assets/img/Frame 61.png";
import Image3 from "/src/assets/img/Sticker01.png";
import Image2 from "/src/assets/img/Vector-zvezd.png";
import Image5 from "/src/assets/img/Vector.png";

const images = [Image1, Image2, Image3, Image4, Image5];
    const trailElements = reactive([]); // Массив для следов
    const lastPosition = ref({ x: 0, y: 0 }); // Последняя позиция курсора
    const distanceThreshold = 28; // Минимальное расстояние для срабатывания
    const imageIndex = ref(0); // Текущий индекс изображения
    let uniqueId = 0;


function getNextImage() {
    const image = images[imageIndex.value];
    imageIndex.value = (imageIndex.value + 1) % images.length; // Циклический переход
    return image;
}

function handleMouseMove(event) {
  const parentRect = event.currentTarget.getBoundingClientRect();
  const cursorX = event.clientX - parentRect.left;
  const cursorY = event.clientY - parentRect.top;

  // Вычисляем пройденное расстояние
  const distance = Math.sqrt(
    Math.pow(cursorX - lastPosition.value.x, 2) +
      Math.pow(cursorY - lastPosition.value.y, 2)
  );

  // Если расстояние меньше порогового, не добавляем элемент
  if (distance < distanceThreshold) {
    return;
  }

  // Добавляем элемент под курсор
  trailElements.push({
    id: uniqueId++, // Уникальный ID для элемента
    x: cursorX,
    y: cursorY,
    image: getNextImage(),
  });

  // Обновляем последнюю позицию курсора
  lastPosition.value = { x: cursorX, y: cursorY };

  // Удаляем элемент через 500 мс
  setTimeout(() => {
    trailElements.shift();
  }, 500);
}
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.block {
  background-color: #f3f5f7;
  width: 100%;
  padding: 40px 0;
  position: relative;
  overflow: hidden;

  @include media-queries.media-Xlarge {
    padding: 80px 0;
  }

  @include media-queries.media-large {
    padding: 80px 0;
  }

  & #cursorTrailContainer {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  & .cursor-element {
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 10;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }

  .fade-enter-from {
    opacity: 0;
    transform: scale(0.5) rotateZ(75deg);
  }

  .fade-enter-to {
    opacity: 1;
    transform: scale(1) rotateZ(0deg) translateX(20px);
  }

  .fade-leave-from {
    opacity: 1;
    transform: scale(1);
  }

  .fade-leave-to {
    opacity: 0;
    transform: scale(0.5) rotateZ(-25deg);
  }
}

.block__container {
  padding-top: 0;
}

.main_block {
  display: flex;

  margin-bottom: 26px;
  flex-direction: column;
  align-items: center;

  @include media-queries.media-Xlarge {
    flex-direction: row;
    margin-bottom: 15px;
    justify-content: space-between;
  }

  @include media-queries.media-large {
    flex-direction: row;
    justify-content: space-between;
  }
}

.block_1 {
  display: flex;
  flex-direction: column;
  width: 330px;
  order: 1;
  z-index: 15;

  @include media-queries.media-Xlarge {
    width: 667px;
    margin-bottom: 40px;
    gap: 20px;
  }

  @include media-queries.media-medium {
    width: 100%;
    gap: 20px;
    margin-bottom: 50px;
  }

  @include media-queries.media-small {
    gap: 20px;
    margin-bottom: 40px;
  }

  & .text {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;

    @include media-queries.media-Xlarge {
      font-size: 32px;
      font-weight: 400;
      line-height: 40px;
    }

    @include media-queries.media-medium {
      text-align: center;
      margin-bottom: 0;
    }

    @include media-queries.media-small {
      text-align: center;
      margin-bottom: 0;
    }
  }

  & .btn {
    @include media-queries.media-Xlarge {
      width: 490px;
    }
  }

  & .btn:not(:last-child) {
    margin-bottom: 0;

    @include media-queries.media-large {
      margin-bottom: 20px;
    }
  }
}

.img_block {
  order: 2;
  width: 334px;
  height: 334px;
  object-fit: cover;

  @include media-queries.media-medium {
    order: 3;
    margin-bottom: 40px;
  }

  @include media-queries.media-small {
    order: 3;
    margin-bottom: 40px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
}

.block_2 {
  order: 3;
  display: flex;
  gap: 60px;
  z-index: 15;
  align-self: flex-start;

  @include media-queries.media-Xlarge {
    gap: 110px;
  }

  @include media-queries.media-medium {
    order: 2;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 58px;
  }

  @include media-queries.media-small {
    gap: 70px;
    flex-direction: column;
    order: 2;
    margin-bottom: 40px;
    align-self: center;
  }

  & .links {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include media-queries.media-small {
      align-items: center;
      gap: 30px;
    }

    & a {
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;

      @include media-queries.media-Xlarge {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
}

.footer {
  display: flex;
  align-items: center;
  gap: 77px;

  @include media-queries.media-Xlarge {
    gap: 183px;
  }

  @include media-queries.media-small {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  & a {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: #26272a4d;
    z-index: 15;
  }

  & a:first-child {
    margin-right: auto;

    @include media-queries.media-medium {
      margin-right: 0;
    }

    @include media-queries.media-small {
      margin-right: 0;
    }
  }

  @include media-queries.media-medium {
    justify-content: space-between;
    gap: 0;
  }
}
</style>
