<script setup>
import { CheckMark } from "@/components/icons";

defineProps({ currentBtn: String, text: String });
defineEmits(["changeBtn"]);
</script>
<template>
  <div
    class="btn"
    :class="{ select: currentBtn === text }"
    @click="$emit('changeBtn', text)"
  >
    <div class="text">{{ text }}</div>
    <div class="check-box">
      <CheckMark class="icon" v-if="currentBtn === text" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
@use "/src/assets/scss/includes/variables" as *;

.btn {
  @include dashboard-border($br-radius: 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 20px;
  cursor: pointer;
  &.select {
    border: 1px solid #20d647;
    background-color: #20d6470d;
    & .check-box {
      border-color: #18213c;
      background-color: #20d647;
    }
  }
}
.text {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.check-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid #cfd7df;
  border-radius: 50%;
  & .icon {
    & > * {
      fill: #18213c;
    }
  }
}
</style>
