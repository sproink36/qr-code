<script setup>
import { Search } from "@/components/icons/index";
const inputValue = defineModel();
</script>
<template>
  <div class="search-qr">
    <Search class="icon" />
    <input
      class="search"
      type="text"
      v-model="inputValue"
      placeholder="Поиск куаркодов"
    />
  </div>
</template>
<style lang="scss" scoped>
.search-qr {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 15px;
  background-color: #f3f5f7;
}

.icon {
  width: 24px;
  height: 24px;
}

.search {
  width: 100%;
  height: 40px;
  padding: 0;
  background: transparent;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    transform: translateY(-3px);
    color: rgba(24, 33, 60, 0.5);
  }
}
</style>
