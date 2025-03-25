<script setup>
import { ref } from "vue";
import Input from "../../settings/components/Input.vue";
import { gradientTypeAngle } from "../../settings/data/CellDesignChoice";
import BtnPlus from "../../UI/BtnPlus.vue";
import BtnCheckbox from "../../UI/BtnCheckBox.vue";
const data = ["Произвольный", "Однотонный", "Градиент", "Анимированный"];
const selectBtn = ref("Произвольный");
const color = ref("#18213C");
const gradientForms = ref();
const colorGradient1 = ref("#18213C");
const colorGradient2 = ref("#18213C");
function changeBtn(text) {
  selectBtn.value = text;
}
function selectForm(id) {
  gradientForms.value = id.toString();
}
</script>
<template>
  <div class="painting">
    <div class="btns">
      <BtnCheckbox
        v-for="i in data"
        :current-btn="selectBtn"
        :text="i"
        @change-btn="changeBtn"
        class="btn"
      />
    </div>
    <div class="content">
      <div class="text" v-if="selectBtn === 'Произвольный'">
        Сейчас ваш куаркод имеет разные цвета на в каждом элементе, поэтому
        выбран вариант «Произвольный». Чтобы покрасить весь куаркод разом
        выберите другой вариант.
      </div>
      <Input
        type="color"
        title="Цвет куаркода"
        v-model="color"
        v-if="selectBtn === 'Однотонный'"
      />
      <div class="inputs" v-if="selectBtn === 'Градиент'">
        <Input
          type="forms"
          title="Тип и угол градиента"
          v-model="gradientForms"
          :data-forms="gradientTypeAngle"
          @select-form="selectForm"
          class="big"
        />
        <Input type="color" title="Точка #1" v-model="colorGradient1" />
        <Input type="color" title="Точка #2" v-model="colorGradient2" />
        <BtnPlus />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  & .btn {
    width: 100%;
  }
}
.text {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8b909d;
}
.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  grid-template-rows: auto auto;
  column-gap: 20px;
  row-gap: 30px;
}
.big {
  grid-column: 1 / -1;
}
</style>
