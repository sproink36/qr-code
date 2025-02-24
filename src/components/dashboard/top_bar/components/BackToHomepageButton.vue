<script setup>
import { useRouter } from "vue-router";
import { Logo } from "@/components/icons/index";

const router = useRouter();
</script>
<template>
  <div
    class="back-to-home-page-button"
    @click="() => router.push({ name: 'main' })"
  >
    <Logo class="logo" />
    <p class="text">Вернуться на сайт</p>
  </div>
</template>
<style lang="scss" scoped>
.back-to-home-page-button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 270px;
  padding: 20px;
  border: 1px solid #dadfe4;
  border-radius: 15px;
  cursor: pointer;
}

.logo {
  width: 40px;
  height: 40px;
}

.text {
  font-family: "Golos Text";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
</style>
