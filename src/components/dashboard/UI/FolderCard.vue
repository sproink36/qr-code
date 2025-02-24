<script setup>
import { Angle, Dots, Edit, Folder, TrashAlt } from "@/components/icons";
import BlockIcons from "./BlockIcons.vue";
import QRCodeCardBtn from "./QRCodeCardBtn.vue";
import MoreActions from "./MoreActions.vue";
import MoreActionsItem from "./MoreActionsItem.vue";
import { ref } from "vue";

const showMenu = ref(false);
</script>
<template>
  <div class="folder-card">
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
            Переименовать
          </MoreActionsItem>
          <MoreActionsItem>
            <template v-slot:icon><TrashAlt /></template>
            Удалить
          </MoreActionsItem>
        </MoreActions>
      </div>
    </div>
    <BlockIcons class="block-icons"><Folder class="icon" /></BlockIcons>
    <div class="name"><slot></slot></div>
    <div class="info"><slot name="info"></slot></div>
    <QRCodeCardBtn class="qr-code-card-btn" link="/dashboard/InnerFolder/1">
      Перейти
      <template v-slot:icon>
        <Angle class="icon" />
      </template>
    </QRCodeCardBtn>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.folder-card {
  @include blockStyle($bg-color: white, $br-radius: 20px, $padding: 20px);
  position: relative;
  display: flex;
  flex-direction: column;
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
    }
  }
}

.block-icons {
  margin-bottom: 20px;
}

.name {
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}

.info {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #18213c80;
}

.qr-code-card-btn {
  margin-top: auto;
  & .icon {
    width: 24px;
    height: 24px;
    transform: rotateZ(90deg);
  }
}
</style>
