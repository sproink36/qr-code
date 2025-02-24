<script setup>
import { Notifications } from '@/components/icons/index';

defineProps({
  numberNotifications: String,
});
</script>
<template>
  <div class="notifications-button">
    <Notifications class="icon" />
    <div class="number-notifications" v-if="numberNotifications > 0">
      {{ numberNotifications > 99 ? 99 : numberNotifications }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;

.notifications-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background-color: #f3f5f7;
  cursor: pointer;
}

.icon {
}

.number-notifications {
  position: absolute;
  top: 40px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: $primary;
  font-family: "PIXY";
  font-weight: 400;
  font-size: 19px;
  line-height: 24px;
}
</style>
