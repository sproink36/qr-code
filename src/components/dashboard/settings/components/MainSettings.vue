<script setup>
import { Edit, TrashAlt } from "@/components/icons";
import ComponentName from "../../UI/ComponentName.vue";
import Input from "./Input.vue";
defineProps({
  img: String,
});
</script>
<template>
  <div class="main-settings">
    <ComponentName class="main-settings__title"
      >Основные настройки</ComponentName
    >
    <div class="block">
      <div class="info">
        <img src="@/assets/img/fakeUser.png" alt="ваше фото" class="img" />
        <div class="text">
          <Edit class="icon" />
          <p>Изменить фотографию</p>
        </div>
        <div class="text text_gray">
          <TrashAlt class="icon" />
          <p>Удалить фотографию</p>
        </div>
      </div>
      <div class="initials">
        <Input class="big" title="Адрес электронной почты"></Input>
        <Input title="Имя"></Input>
        <Input title="Фамилия"></Input>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.main-settings {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 20px, $padding: 40px);
}
.main-settings__title {
  margin-bottom: 20px;
}
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.info {
  @include blockStyle($bg-color: white, $br-radius: 20px, $padding: 40px);
  display: flex;
  align-items: center;
  gap: 40px;
  min-width: 724px;
  & .img {
    width: 120px;
    height: 120px;
  }
  & .text {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-grow: 1;
    cursor: pointer;
    & p {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
    & .icon {
      width: 24px;
      height: 24px;
    }
  }
  & .text_gray {
    & p {
      color: #8b909d;
    }
    & .icon > * {
      fill: #8b909d;
    }
  }
}
.initials {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  width: 100%;
}
.big {
  grid-column-start: 1;
  grid-column-end: -1;
}
</style>
