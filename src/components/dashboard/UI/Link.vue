<script setup lang="ts">
import { Link } from "@/components/icons";
</script>

<template>
  <div class="link">
    <Link class="icon" />
    <p class="text">Ссылка</p>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.link {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  @include blockStyle($br-radius: 7px, $padding: 10px);
}

.text {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  // font-size: inherit;
  // font-weight: inherit;
  // line-height: inherit;
}

.icon {
  width: 16px;
  height: 16px;
  & > * {
    width: 100%;
    height: 100%;
  }
}
</style>
