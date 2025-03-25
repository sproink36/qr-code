<script setup>
import { ref } from "vue";
import Input from "../../settings/components/Input.vue";
import { DesignColorCells } from "../../settings/data/CellDesignChoice";
const currentForm = ref(null);
const colorCell = ref("#18213C");
const colorOutlines = ref("#5D6476");
function handleFormSelect(id) {
  currentForm.value = id.toString(); // Обновляем currentForm
}
</script>
<template>
  <div class="design-color-cells">
    <Input
      title="Форма"
      v-model="currentForm"
      @select-form="handleFormSelect"
      type="forms"
      :data-forms="DesignColorCells"
      class="big"
    />
    <Input title="Цвет внутри ячеек" type="color" v-model="colorCell"/>
    <Input title="Цвет обводки" type="color" v-model="colorOutlines"/>
  </div>
</template>
<style lang="scss" scoped>
.design-color-cells {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}
.big {
  grid-column: 1 / -1;
}
</style>
