<script setup>
import {
  Angle,
  ArrowLink,
  Calendar,
  Download,
  Edit,
  Pause,
  Play,
  QRCode,
  TrashAlt,
} from "@/components/icons";
import BlockIcons from "../../UI/BlockIcons.vue";
import Link from "../../UI/Link.vue";
import MoreActionsItem from "../../UI/MoreActionsItem.vue";
import Button from "@/components/Button.vue";
</script>
<template>
  <div class="main-inner-qr">
    <div class="info">
      <Link class="link main-inner-qr__link" />
      <div class="text-link">https://yumashev.stern.xyz</div>
      <div class="btns">
        <Button class="btn">
          <MoreActionsItem>
            <template v-slot:icon><Pause /></template>
            Приостановить
          </MoreActionsItem>
        </Button>
        <Button class="btn">
          <MoreActionsItem>
            <template v-slot:icon><TrashAlt /></template>
            Удалить куар
          </MoreActionsItem>
        </Button>
        <Button class="btn">
          <MoreActionsItem>
            <template v-slot:icon><Edit /></template>
            Редактировать
          </MoreActionsItem>
        </Button>
        <Button class="btn" btn-type="green">
          <MoreActionsItem>
            <template v-slot:icon><Download /></template>
            Скачать
          </MoreActionsItem>
        </Button>
      </div>
      <div class="actions">
        <div class="item select">
          <div class="block">
            <div class="title">Папка</div>
            <div class="sub-title current-select">Без папки</div>
          </div>
          <ArrowLink class="angle" />
        </div>
        <div class="item">
          <Calendar class="item__icon" />
          <div class="block">
            <div class="title">Дата создания</div>
            <div class="sub-title">01.01.2025</div>
          </div>
        </div>
        <div class="item">
          <Play class="item__icon" />
          <div class="block">
            <div class="title">Активен</div>
            <div class="sub-title">5 дней</div>
          </div>
        </div>
      </div>
    </div>
    <BlockIcons class="icon">
      <QRCode />
    </BlockIcons>
  </div>
</template>
<style lang="css">
.main-inner-qr__link .text {
  font-size: 16px;
  line-height: 24px;
}
</style>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
@use "/src/assets/scss/includes/variables" as *;

.main-inner-qr {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 20px, $padding: 40px);
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.icon {
  @include blockStyle($bg-color: white, $br-radius: 20px, $padding: 0 170px);
  width: 613px;
  height: 400px;

  & > * {
    width: 266px;
    height: 266px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.link {
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  & > :first-child {
    width: 24px;
    height: 24px;
  }
}

.text-link {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
}

.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 70px;

  & .btn {
    flex-grow: 1;
    height: 100%;
    border-radius: 15px;
  }

  & .btn:not(:last-child) {
    border: none;
    background-color: white;
  }
}

.actions {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;

  & .item:nth-of-type(1) {
    @include dashboard-border($border: 1px solid $stroke, $br-radius: 10px);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: none;
  }
  & .item.item:nth-of-type(2) {
    @include dashboard-border($border: 1px solid $stroke, $br-radius: 0);
  }
  & .item.item:nth-of-type(3) {
    @include dashboard-border($border: 1px solid $stroke, $br-radius: 10px);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }

  & .item {
    display: flex;
    flex-grow: 1;
    gap: 10px;
    padding: 15px 20px;
    background-color: white;
    height: 100%;

    & .title {
      margin-bottom: 5px;
    }

    & .angle {
      width: 24px;
      height: 24px;
      transform: rotate(90deg);
    }
  }

  & .select {
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .item__icon {
    width: 24px;
    height: 24px;
    fill: #8b909d;
  }

  & .title {
    font-weight: 500;
    font-size: 11px;
    line-height: 18px;
    color: #8b909d;
  }
  & .sub-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }
}
</style>
