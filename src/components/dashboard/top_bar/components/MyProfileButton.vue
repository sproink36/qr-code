<script setup>
import { Angle } from "@/components/icons/index";
defineProps({
  img: String,
  name: String,
  mail: String,
});
</script>
<template>
  <RouterLink to="/dashboard/settings" class="my-profile-button">
    <img :src="img" class="img" />
    <div class="data-block">
      <div class="name">{{ name }}</div>
      <div class="mail">{{ mail }}</div>
    </div>
    <Angle class="icon" />
  </RouterLink>
</template>
<style lang="scss" scoped>
.my-profile-button {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 390px;
  padding: 20px;
  border-radius: 15px;
  background-color: #f3f5f7;
  cursor: pointer;
}

.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.data-block {
  flex-grow: 1;
  & .name {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  & .mail {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: rgba(24, 33, 60, 0.5);
  }
}

.icon > * {
  fill: rgba(24, 33, 60, 0.3);
}
</style>
