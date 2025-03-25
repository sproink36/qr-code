<script setup>
import Button from "@/components/Button.vue";
import ComponentName from "../../UI/ComponentName.vue";
import Input from "./Input.vue";

defineProps({
  disabled: Boolean,
});

const currentPassword = defineModel("currentPassword");
const newPassword = defineModel("newPassword");
const repeatPassword = defineModel("repeatPassword");

</script>
<template>
  <div class="change-password">
    <ComponentName class="change-password__title"
      >Изменить пароль</ComponentName
    >
    <div class="inputs">
      <Input
        placeholder="Введите старый пароль"
        class="input_1"
        v-model="currentPassword"
      ></Input>
      <Input
        placeholder="Введите новый пароль"
        class="input_2"
        v-model="newPassword"
      ></Input>
      <Input
        placeholder="Повторите новый пароль"
        class="input_3"
        v-model="repeatPassword"
      ></Input>
    </div>
    <Button
      class="btn"
      :disabled="!disabled"
      :btn-type="disabled ? 'green' : ''"
      :class="{ 'btn-dis': !disabled }"
      >Изменить пароль</Button
    >
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.change-password {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 20px, $padding: 40px);
  padding-bottom: 30px;
}
.change-password__title {
  margin-bottom: 20px;
}
.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: auto auto;
  gap: 20px;
  margin-bottom: 20px;
}
.input_3 {
  grid-column-start: 2;
  grid-column-end: -1;
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
