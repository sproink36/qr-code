<script setup>
import { ref } from "vue";
import Input from "../../settings/components/Input.vue";
import {  designColorSquare } from "../../settings/data/CellDesignChoice";
const currentForm = ref(null);
const coloInside = ref("#18213C");
const colorOutside = ref("#5D6476");
function handleFormSelect(id) {
  currentForm.value = id.toString(); // Обновляем currentForm
}
</script>
<template>
  <div class="design-color-square">
    <Input
      title="Форма"
      v-model="currentForm"
      @select-form="handleFormSelect"
      type="forms"
      :data-forms="designColorSquare"
      class="big"
    />
    <Input title="Цвет внутри" type="color" v-model="coloInside" />
    <Input title="Цвет снаружи" type="color" v-model="colorOutside" />
  </div>
</template>
<style lang="scss" scoped>
.design-color-square {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}
.big {
  grid-column: 1 / -1;
}
</style>
