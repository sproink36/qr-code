<template>
  <div class="platform">
    <div class="container platform__container">
      <H2Title class="title">Полный контроль на&nbsp;всех платформах</H2Title>
      <div class="spline">
        <spline-viewer
          id="platform-spline-viewer"
          url="https://prod.spline.design/al5tj5WEgHN5DC-5/scene.splinecode"
        ></spline-viewer>
      </div>
      <div class="grid_block">
        <div class="website">
          <div class="header">
            <H4Title class="title"
              >Всё в&nbsp;одном<br />
              месте<br />&mdash; наш сайт</H4Title
            >
            <ButtonBadge class="badge_btn website__badge_btn">
              <template v-slot:icon>
                <BrowserColor />
              </template>
              <template v-slot:text>сайт</template>
            </ButtonBadge>
          </div>
          <p class="text">
            Все инструменты и&nbsp;функции в&nbsp;одном месте.<br />
            Управляйте QR-кодами, статистикой<br />
            и&nbsp;проектами прямо с&nbsp;сайта. Всё под рукой для<br />
            удобства и&nbsp;продуктивности.
          </p>
          <Button class="btn" btnType="black">Подробнее</Button>
        </div>
        <div class="extension">
          <div class="header">
            <ButtonBadge class="badge_btn extension__badge_btn">
              <template v-slot:icon>
                <Puzzle />
              </template>
              <template v-slot:text>расширение</template>
            </ButtonBadge>
            <H4Title class="title">Ваш помощник в&nbsp;браузере</H4Title>
          </div>
          <p class="text">
            Делайте всё быстрее и&nbsp;проще прямо в&nbsp;браузере. Создавайте
            и&nbsp;управляйте QR-кодами<br />
            без необходимости переходить на&nbsp;сайт.
          </p>
          <div class="footer">
            <div class="footer__container">
              <p class="title">Расширения</p>
              <p class="sub_title">Расширения с полным доступом</p>
              <p class="text">
                Расширения, у&nbsp;которых есть право на&nbsp;просмотр<br />
                и&nbsp;изменение информации на&nbsp;этом сайте
              </p>
              <div class="cuarcod_block">
                <div class="block">
                  <div class="cuar">
                    <CuarcodSmall />
                  </div>
                  <p>куаркод.рф</p>
                </div>
                <div class="block">
                  <div class="pin">
                    <Pin />
                  </div>
                  <div class="more_vert">
                    <MoreVert />
                  </div>
                </div>
              </div>
            </div>
            <Button class="btn" btnType="black">Подробнее</Button>
          </div>
        </div>
        <div class="figma_plugin">
          <ButtonBadge class="badge_btn figma_plugin__badge_btn">
            <template v-slot:icon>
              <Lightning />
            </template>
            <template v-slot:text>плагин для Figma</template>
          </ButtonBadge>
          <div class="text">Скоро...</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  BrowserColor,
  CuarcodSmall,
  Lightning,
  MoreVert,
  Pin,
  Puzzle,
} from "../assets/icons";
import ButtonBadge from "./ButtonBadge.vue";
import Button from "./Button.vue";
import H2Title from "./H2Title.vue";
import H4Title from "./H4Title.vue";
import { onMounted } from "vue";

onMounted(() => {
  const applyStyles = () => {
    const splineViewer = document.getElementById("platform-spline-viewer");

    if (splineViewer && splineViewer.shadowRoot) {
      // Проверяем, добавляли ли мы стиль ранее
      if (!splineViewer.shadowRoot.querySelector("#custom-styles")) {
        const style = document.createElement("style");
        style.id = "custom-styles"; // Устанавливаем уникальный id
        style.textContent = `
        a {
          display: none !important;
        }
        #spline {
          width: 100% !important;
          height: 100% !important;
        }
      `;
        splineViewer.shadowRoot.appendChild(style);
      }
    }
  };

  // Повторная проверка, если элемент загружается динамически
  const interval = setInterval(() => {
    const splineViewer = document.getElementById("platform-spline-viewer");
    if (splineViewer) {
      applyStyles();
      clearInterval(interval);
    }
  }, 100);

  // Альтернатива — MutationObserver
  const observer = new MutationObserver(() => {
    applyStyles();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
</script>
<style lang="css">
@media (min-width: 2160px) {
  .figma_plugin__badge_btn > h4 {
    font-size: 44px;
  }
}

@media (min-width: 1520px) and (max-width: 2160px) {
  .figma_plugin__badge_btn > h4 {
    font-size: 32px;
    line-height: 48px;
  }

  .figma_plugin__badge_btn .icon_block {
    width: 44px;
    height: 44px;
  }

  .website__badge_btn > h4,
  .extension__badge_btn > h4 {
    font-size: 32px;
  }

  .website__badge_btn .icon_block,
  .extension__badge_btn .icon_block {
    width: 44px;
    height: 44px;
  }
}
</style>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.platform {
  width: 100%;
  height: auto;

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
    margin-bottom: 40px;
  }
}

.platform__container {
  padding-top: 0;
  position: relative;

  & > .title {
    text-align: left;
    margin-bottom: 20px;

    @include media-queries.media-Xlarge {
      margin-bottom: 60px;
    }

    @include media-queries.media-small {
      margin-bottom: 24px;
    }
  }
}

.spline {
  position: absolute;

  overflow: hidden;
  z-index: 8;

  & > spline-viewer {
    height: 100%;
    width: 100%;
  }

  @include media-queries.media-Xlarge {
    top: 459px;
    left: 690px;
    width: 690px;
    height: 690px;
  }

  @include media-queries.media-large {
    top: 346px;
    left: 410px;
    width: 600px;
    height: 600px;
  }

  @include media-queries.media-medium {
    right: 0px;
    top: 300px;
    height: 404px;
    width: 404px;
  }

  @include media-queries.media-small {
    right: 0px;
    top: 320px;
    height: 189px;
    width: 189px;
  }
}

spline-viewer a {
  display: none !important;
}

.img_wrapper {
  position: absolute;
  width: 628px;
  height: 628px;
  overflow: hidden;
  top: 310px;
  right: 310px;
  z-index: 8;

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @include media-queries.media-medium {
    width: 404px;
    height: 404px;
    top: 290px;
    right: -40px;

    & img {
      top: 0px;
      left: 146px;
      transform: rotateZ(21deg);
    }
  }

  @include media-queries.media-small {
    width: 189px;
    height: 189px;
    top: 310px;
    right: 0;

    & img {
      top: 0px;
      left: 75px;
      transform: rotateZ(7deg);
    }
  }
}

.grid_block {
  display: grid;
  //   grid-template-columns: 750px 197px 453px;
  //   grid-template-rows: 408px 174px auto;
  //   grid-template-columns: 750px 1fr 2fr;
  //   grid-template-rows: 3fr 1fr auto;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "website"
    "extension"
    "figma_plugin";
  row-gap: 20px;

  & > div {
    border-radius: 40px;

    @include media-queries.media-small {
      border-radius: 30px;
    }
  }

  //   & div {
  //     border: 1px solid red;
  //   }

  @include media-queries.media-Xlarge {
    // grid-template-columns: 1fr auto 0.51fr;
    // grid-template-rows: auto auto auto;
    // gap: 60px 60px;
    // grid-template-areas:
    //   "website website extension"
    //   "figma_plugin . extension"
    //   ". . extension";
    grid-auto-columns: minmax(600px, 666px) minmax(600px, 666px)
      minmax(600px, 666px);

    grid-auto-rows: max-content;
    gap: 40px;
    grid-template-areas: "website figma_plugin extension";
  }

  @include media-queries.media-large {
    // grid-template-columns: 1fr auto 0.31fr;
    // grid-template-rows: auto auto auto;
    // gap: 40px 40px;
    // grid-template-areas:
    //   "website website extension"
    //   "figma_plugin . extension"
    //   ". . extension";
    grid-auto-columns: 450px auto minmax(420px, 450px);
    grid-auto-rows: max-content;
    gap: 40px;
    grid-template-areas: "website figma_plugin extension";
  }

  @include media-queries.media-medium {
  }

  @include media-queries.media-small {
  }
}

.text {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;

  @include media-queries.media-small {
    font-size: 14px;
    line-height: 24px;
  }
}

.website {
  grid-area: website;
  background-color: #f7e8ff;
  padding: 30px;
  z-index: 6;

  & .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    & .badge_btn {
      background-color: #e9cbfa;

      @include media-queries.media-large {
        gap: 10px;
      }
    }
    @include media-queries.media-Xlarge {
      & .title br:last-child {
        display: none;
      }
    }

    @include media-queries.media-large {
      & .title br:last-child {
        display: none;
      }
    }

    @include media-queries.media-small {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 10px;
    }
  }

  & .btn {
    @include media-queries.media-Xlarge {
      // width: 393px;
    }

    @include media-queries.media-large {
      // width: 393px;
    }
  }

  & .text {
    margin-bottom: 20px;
    color: #18213c99;
    @include media-queries.media-Xlarge {
      & br:last-child {
        display: none;
      }
      margin-bottom: 40px;
    }

    @include media-queries.media-large {
      font-size: 20px;
      line-height: 28px;
    }

    @include media-queries.media-small {
      & br {
        display: none;
      }
    }
  }
  @include media-queries.media-Xlarge {
    padding: 60px;
    & .header {
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 40px;
    }
    height: max-content;
  }

  @include media-queries.media-large {
    padding: 40px;
    width: 450px;

    & .header {
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 20px;
      & .badge_btn {
        padding: 10px;
        padding-right: 20px;
      }
    }
    height: max-content;
  }

  @include media-queries.media-medium {
  }

  @include media-queries.media-small {
    padding: 20px;
  }
}

.extension {
  grid-area: extension;
  display: flex;
  flex-direction: column;

  background-color: #fbffe3;
  z-index: 9;

  @include media-queries.media-Xlarge {
    // padding: 40px 80px 80px 80px;
    padding-bottom: 80px;
  }

  @include media-queries.media-large {
    // padding: 40px 80px 80px 80px;
    padding: 40px;
    padding-bottom: 40px;
  }

  @include media-queries.media-medium {
    padding: 30px;
  }

  @include media-queries.media-small {
    padding: 20px;
  }

  & .header {
    display: flex;
    margin-bottom: 20px;

    & .badge_btn {
      background-color: #f5fec1;

      @include media-queries.media-Xlarge {
        width: 473px;
        justify-content: flex-start;
      }

      @include media-queries.media-large {
        padding: 10px;
        width: max-content;
        padding-right: 20px;
        gap: 10px;
      }
    }

    & .title {
      @include media-queries.media-medium {
        width: 50%;
      }
    }

    @include media-queries.media-Xlarge {
      flex-direction: column;
      gap: 80px;
      padding: 40px;
    }

    @include media-queries.media-large {
      flex-direction: column;
      gap: 20px;
      // padding: 40px;
      padding-bottom: 0px;
    }

    @include media-queries.media-medium {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }

    @include media-queries.media-small {
      margin-bottom: 10px;
      flex-direction: column;
      gap: 10px;
      align-items: start;
    }
  }

  & .text {
    margin-bottom: 20px;
    color: #18213c99;
    & > br {
      display: none;
    }

    @include media-queries.media-Xlarge {
      margin-bottom: 40px;
      font-size: 32px;
      line-height: 40px;
      text-align: left;
      padding: 0 40px;
      color: #18213cb2;
      & > br {
        display: block;
      }
    }
    @include media-queries.media-large {
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 28px;
      text-align: left;
      color: #18213cb2;
      & > br {
        display: block;
      }
    }
  }

  & .footer {
    background-color: white;
    border: 0.5px solid #e1e3e1;
    border-radius: 9px 9px 40px 40px;

    & .footer__container {
      @include media-queries.media-Xlarge {
        padding: 20px;
        padding-bottom: 0;
      }

      @include media-queries.media-large {
        padding: 14px;
        padding-bottom: 0;
      }

      @include media-queries.media-medium {
        padding: 22px;
        padding-bottom: 0;
      }

      @include media-queries.media-small {
        padding: 10px;
        padding-bottom: 0;
        border-color: #e1e3e1;
      }

      & .title {
        font-weight: 600;

        @include media-queries.media-Xlarge {
          font-size: 32px;
          line-height: 32px;
          margin-bottom: 10px;
        }

        @include media-queries.media-large {
          font-size: 18.45px;
          line-height: 22.15px;
          margin-bottom: 13px;
        }

        @include media-queries.media-medium {
          font-size: 29.49px;
          line-height: 35.39px;
          margin-bottom: 21px;
        }

        @include media-queries.media-small {
          font-size: 14.56px;
          line-height: 17.47px;
          margin-bottom: 10px;
        }
      }

      & .sub_title {
        font-weight: 700;

        @include media-queries.media-Xlarge {
          font-size: 11.07px;
          margin-bottom: 4px;
          line-height: 14.76px;
        }

        @include media-queries.media-large {
          font-size: 18px;
          margin-bottom: 5px;
          line-height: 24px;
        }

        @include media-queries.media-medium {
          font-size: 17px;
          line-height: 23px;
          margin-bottom: 6px;
        }

        @include media-queries.media-small {
          font-size: 8.73px;
          line-height: 11.65px;
          margin-bottom: 2px;
        }
      }

      & .text {
        @include media-queries.media-Xlarge {
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 27px;
        }

        @include media-queries.media-large {
          font-size: 11.07px;
          line-height: 14.76px;
          margin-bottom: 10px;
        }

        @include media-queries.media-medium {
          font-size: 17.69px;
          line-height: 23.59px;
          margin-bottom: 15px;
        }

        @include media-queries.media-small {
          font-size: 8.73px;
          line-height: 11.65px;
          margin-bottom: 8px;
        }
      }

      & .cuarcod_block {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include media-queries.media-Xlarge {
          margin-bottom: 28px;
        }

        @include media-queries.media-large {
          margin-bottom: 23px;
        }

        @include media-queries.media-medium {
          margin-bottom: 20px;
        }

        @include media-queries.media-small {
          margin-bottom: 7px;
        }

        & .block {
          display: flex;
          align-items: center;
          gap: 4.5px;

          @include media-queries.media-Xlarge {
            gap: 20px;
          }

          @include media-queries.media-small {
            gap: 3.5px;
          }

          & .cuar {
            display: flex;
            align-items: center;

            @include media-queries.media-Xlarge {
              width: 48px;
              height: 48px;
            }

            @include media-queries.media-large {
              width: 24px;
              height: 24px;
            }

            @include media-queries.media-medium {
              width: 38px;
              height: 38px;
            }

            @include media-queries.media-small {
              width: 18px;
              height: 18px;
            }

            & > * {
              width: 100%;
              height: 100%;
            }
          }

          & .pin {
            display: flex;
            align-items: center;

            @include media-queries.media-Xlarge {
              width: 17px;
              height: 17px;
            }

            @include media-queries.media-large {
              width: 11px;
              height: 11px;
            }

            @include media-queries.media-medium {
              width: 17px;
              height: 17px;
            }

            @include media-queries.media-small {
              width: 8.73px;
              height: 8.73px;
            }

            & > * {
              width: 100%;
              height: 100%;
            }
          }

          & .more_vert {
            display: flex;
            align-items: center;

            @include media-queries.media-Xlarge {
              width: 17px;
              height: 17px;
            }

            @include media-queries.media-large {
              width: 11px;
              height: 11px;
            }

            @include media-queries.media-medium {
              width: 17px;
              height: 17px;
            }

            @include media-queries.media-small {
              width: 8.73px;
              height: 8.73px;
            }

            & > * {
              width: 100%;
              height: 100%;
            }
          }

          & p {
            font-weight: 500;

            @include media-queries.media-Xlarge {
              font-size: 24px;
              line-height: 22px;
            }

            @include media-queries.media-large {
              font-size: 11.07px;
              line-height: 14.76px;
            }

            @include media-queries.media-medium {
              font-size: 17.69px;
              line-height: 23.59px;
            }

            @include media-queries.media-small {
              font-size: 8.73px;
              line-height: 11.65px;
            }
          }

          & > * {
            cursor: pointer;
          }
        }
      }
    }

    @include media-queries.media-Xlarge {
      border-radius: 15px 15px 60px 60px;
    }
  }
}

.figma_plugin {
  grid-area: figma_plugin;
  background-color: white;
  outline: 2px solid #f3f5f7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 12px;
  z-index: 9;
  max-width: 750px;

  @include media-queries.media-Xlarge {
    // max-width: 1197px;
    // min-width: 1197px;
    padding: 60px;
    gap: 40px;
    border-radius: 40px;
    flex-direction: column;
    justify-content: flex-start;
    height: max-content;
  }

  @include media-queries.media-large {
    // min-width: 750px;
    padding: 40px;
    border-radius: 40px;
    gap: 40px;
    border-radius: 40px;
    flex-direction: column;
    justify-content: flex-start;
    height: max-content;
  }

  @include media-queries.media-medium {
    padding: 30px;
  }

  @include media-queries.media-small {
    padding: 20px;
  }

  & .badge_btn {
    width: 100%;
    background-color: #e5f2ff;
    justify-content: flex-start;

    @include media-queries.media-Xlarge {
      width: auto;
      // padding-right: 40px;
    }
    @include media-queries.media-large {
      padding: 10px;
      gap: 10px;
    }

    @include media-queries.media-medium {
      &:deep(.text) {
        font-size: 24px;
      }
    }

    @include media-queries.media-small {
      &:deep(.text) {
        font-size: 20px;
      }
    }

    @include media-queries.media-medium {
      width: auto;
      padding-right: 30px;
    }

    @media (max-width: 420px) {
      &:deep(.text) {
        font-size: 16px;
      }
    }
  }

  & .text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    background-color: #f3f5f7;
    padding: 0 50px;
    border-radius: 50px;

    @include media-queries.media-Xlarge {
      font-size: 56px;
      line-height: 56px;
      font-family: "PIXY";
      background: none;
    }

    @include media-queries.media-large {
      font-family: PIXY;
      font-size: 40px;
      line-height: 48px;
      background: none;
    }

    @include media-queries.media-medium {
      padding: 0 30px;
    }

    @include media-queries.media-small {
      font-size: 11px;
      padding: 0 11px;
    }
  }
}
</style>
