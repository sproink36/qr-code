<script setup>
import { Folder, LogoSmall } from "@/components/icons";
</script>
<template>
  <div class="tariff-and-info">
    <div class="top">
      <p class="title">Тариф</p>
      <p class="stronge-text">Бесплатный тариф</p>
    </div>
    <div class="center">
      <div class="folders info">
        <Folder class="icon" />
        <p class="text">2/3 папок использовано</p>
      </div>
      <div class="qrs info">
        <LogoSmall class="icon" />
        <p class="text">9/15 куаркодов создано</p>
      </div>
    </div>
    <div class="bottom">
      <p class="stronge-text">Посмотреть тарифы</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;
.tariff-and-info {
  max-width: 270px;
}

.top,
.center,
.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #cfd7df;
}

.top,
.bottom {
  background-color: #f3f5f7;
}

p {
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
}

.stronge-text {
  font-weight: 600;
}

.top {
  gap: 5px;
  padding: 10px 0;
  border-radius: 15px 15px 0 0;
  & .title {
    color: rgba(24, 33, 60, 0.5);
  }
}

.center {
  gap: 10px;
  padding: 20px 0;
  border-top: none;
  border-bottom: none;
  & .info {
    display: flex;
    align-items: center;
    gap: 5px;

    & .icon {
      width: 16px;
      height: 16px;
      & > * {
        fill: rgba(24, 33, 60, 0.2);
      }
    }
  }
}

.bottom {
  padding: 22px 0;
  border-radius: 0 0 15px 15px;
  cursor: pointer;

  &:hover {
    border-color: $primary;
    background-color: rgba(32, 214, 71, 0.1);
  }
}
</style>
