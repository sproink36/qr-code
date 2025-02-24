<script setup>
import {
  ArrowLink,
  Dots,
  Download,
  Edit,
  FolderUpload,
  Pause,
  QRCode,
  TrashAlt,
} from "@/components/icons";
import BlockIcons from "./BlockIcons.vue";
import Link from "./Link.vue";
import QRCodeCardBtn from "./QRCodeCardBtn.vue";
import MoreActions from "./MoreActions.vue";
import MoreActionsItem from "./MoreActionsItem.vue";
import { ref } from "vue";

defineProps({
  link: String,
});

const showMenu = ref(false);
</script>
<template>
  <div class="qr-code-card">
    <div class="overlay-menu">
      <div
        class="menu"
        @click="showMenu = !showMenu"
        v-click-outside="() => (showMenu = false)"
      >
        <Dots class="icon" />
        <MoreActions class="more-actions" v-if="showMenu">
          <MoreActionsItem>
            <template v-slot:icon><Edit /></template>
            Редактировать куаркод
          </MoreActionsItem>
          <MoreActionsItem>
            <template v-slot:icon><FolderUpload /></template>
            Переместить в папку
          </MoreActionsItem>
          <MoreActionsItem>
            <template v-slot:icon><Pause /></template>
            Приостановить
          </MoreActionsItem>
          <MoreActionsItem>
            <template v-slot:icon><TrashAlt /></template>
            Удалить
          </MoreActionsItem>
        </MoreActions>
      </div>
    </div>
    <BlockIcons class="block-icons"><QRCode class="icon" /></BlockIcons>
    <Link class="link" />
    <div class="sub-link">
      <ArrowLink class="icon" />
      <p class="text">yumashev.stern.xyz</p>
    </div>
    <div class="qr-btns">
      <QRCodeCardBtn class="qr-code-card-btn qr-code-card-btn_details" :link="link">
        Детали
        <template v-slot:icon>
          <ArrowLink class="icon" />
        </template>
      </QRCodeCardBtn>
      <hr />
      <QRCodeCardBtn class="qr-code-card-btn qr-code-card-btn_download">
        Скачать
        <template v-slot:icon>
          <Download class="icon" />
        </template>
      </QRCodeCardBtn>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
@use "/src/assets/scss/includes/variables" as *;

.qr-code-card {
  position: relative;
  width: 100%;
  min-width: 231px;
  // max-width: 254px;
  @include blockStyle(#ffffff, 20px, 20px);

  & .block-icons,
  & .sub-link {
    margin-bottom: 10px;
  }

  & .link {
    margin-bottom: 5px;
  }
}

.overlay-menu {
  @include blockStyle($bg-color: white, $br-radius: 20px, $padding: 10px);
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & .menu {
    @include blockStyle($bg-color: #f3f5f7, $br-radius: 10px, $padding: 8px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & .icon {
      width: 16px;
      height: 16px;
    }

    & .more-actions {
      position: absolute;
      top: -10px;
      right: calc(100% + 10px);
      width: max-content;
      z-index: 10;
    }
  }
}

.sub-link {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  & .icon {
    fill: rgba(60, 24, 24, 0.5);
    width: 16px;
    height: 16px;
  }

  & .text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(24, 33, 60, 0.5);
  }
}

.qr-code-card-btn {
  & .text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  & .icon {
    fill: $black;
    width: 24px;
    height: 24px;

    & > * {
      width: 100%;
      height: 100%;
    }
  }
}

.qr-btns {
  & .qr-code-card-btn:first-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
  }

  & hr {
    width: 100%;
    height: 1px;
    margin: 0;
    border: none;
    background-color: #cfd7df;
  }

  & .qr-code-card-btn:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
  }
}
</style>
