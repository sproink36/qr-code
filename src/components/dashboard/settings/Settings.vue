<script setup>
import Button from "@/components/Button.vue";
import ChangePassword from "./components/ChangePassword.vue";
import MainSettings from "./components/MainSettings.vue";
import { computed, ref } from "vue";

const currentPassword = ref("");
const newPassword = ref("");
const repeatPassword = ref("");
const notDisabledChangePassword = computed(() => {
  if (
    currentPassword.value &&
    newPassword.value !== "" &&
    repeatPassword.value !== "" &&
    newPassword.value === repeatPassword.value
  ) {
    return true;
  }
  return false;
});
const notDisabledSaveChange = computed(() => {
  return notDisabledChangePassword.value;
});
</script>
<template>
  <div class="settings">
    <MainSettings class="main-settings" />
    <ChangePassword
      class="change-password"
      v-model:current-password="currentPassword"
      v-model:new-password="newPassword"
      v-model:repeat-password="repeatPassword"
      :disabled="notDisabledChangePassword"
    />
    <Button
      class="btn"
      :btn-type="notDisabledSaveChange ? 'green' : ''"
      :disabled="!notDisabledSaveChange"
      :class="{ 'btn-dis': !notDisabledSaveChange }"
      >Сохранить изменения</Button
    >
  </div>
</template>
<style lang="scss" scoped>
.settings {
}
.main-settings {
  margin-bottom: 20px;
}

.change-password {
  margin-bottom: 20px;
}
.btn {
  width: 270px;
  border-radius: 15px;
  height: 80px;
  margin-left: auto;
}
.btn-dis {
  border-color: #cfd7df;
  background-color: #cfd7df;
}
</style>

@use "/src/assets/scss/includes/variables" as *; @mixin
dashboard-border($border: 1px solid $stroke, $br-radius: 10px) { border:
$border; border-radius: $br-radius; }
