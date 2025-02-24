<script setup>
import Button from "@/components/Button.vue";

// const fakePages = 133;
</script>
<template>
  <div class="pagination">
    <div class="list">
      <template v-for="(_, index) in 7">
        <Button
          class="btn"
          v-if="index !== 5"
          :class="{ active: index === 0 }"
          >{{ index + 1 }}</Button
        >
        <div class="dots" v-else>...</div>
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: max-content;
}

.btn,
.dots {
  width: 60px;
  height: 60px;
}

.btn {
  border: 2px solid #cfd7df;
  border-radius: 15px;
}

.btn.active {
  border-color: $black;
  background-color: $primary;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
</style>
